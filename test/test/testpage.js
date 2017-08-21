var appMgr, oipfConf, videoBroadcast, channelList, channelConfig, oipfRecordingScheduler, parentalRatingmanager, mediaplayback, hmxstorageutil;
var mediaSearchManager, storageUtil, codManager, drmAgent, gatewayInfo, operatorFeature;
var oipfDownloadTrigger, oipfDownloadManager, oipfMetaSrch;
var self, child;
var bIsWin32;

var __oipf_info_index = 0;
var __object_array = new Array();
var __object_index = 0;

function CHECK_SYSTEM() {
    // check win32 system.
    if (navigator.userAgent.indexOf("Win") > 0)
        bIsWin32 = true;
    else
        bIsWin32 = false;
}

function CHECK_OIPF_INIT(log) {
    if (true == bIsWin32)
        console.log(log);
    else
        alert(log);
}


$(document).ready(function() {
    CHECK_SYSTEM();
    CHECK_OIPF_INIT("start ready function()");
    init_testpage();
    var isEmulMode = false;

    var engineInit = function() {

        try {
            setInterval("realtimeClock()", 1000);

            appMgr = window.oipfObjectFactory.createApplicationManagerObject();
            CHECK_OIPF_INIT('appMgr : ' + appMgr);
            oipfConf = oipfObjectFactory.createHumaxConfigurationObject();
            CHECK_OIPF_INIT('oipfConf : ' + oipfConf);
            mediaSearchManager = window.oipfObjectFactory.createMediaSearchManagerObject();
            CHECK_OIPF_INIT('mediaSearchManager : ' + mediaSearchManager);
            mediaObject = mediaSearchManager.hmx_MediaScan;
            CHECK_OIPF_INIT('mediaObject : ' + mediaObject);

            storageUtil = window.oipfObjectFactory.createHumaxStorageUtilObject();
            CHECK_OIPF_INIT('storageUtil : ' + storageUtil);

            oipfDownloadManager = window.oipfObjectFactory.createDownloadManagerObject();
            CHECK_OIPF_INIT('oipfDownloadManager : ' + oipfDownloadManager);
            oipfDownloadTrigger = window.oipfObjectFactory.createDownloadTriggerObject();
            CHECK_OIPF_INIT('oipfDownloadTrigger : ' + oipfDownloadTrigger);
            //codManager = window.oipfObjectFactory.createCodManagerObject();
            //CHECK_OIPF_INIT('codManager : ' + codManager);
            drmAgent = window.oipfObjectFactory.createDrmAgentObject();
            CHECK_OIPF_INIT('drmAgent : ' + drmAgent);
            //gatewayInfo = window.oipfObjectFactory.createGatewayInfoObject();
            //CHECK_OIPF_INIT('gatewayInfo : ' + gatewayInfo);
            parentalRatingmanager = window.oipfObjectFactory.createParentalControlManagerObject();
            CHECK_OIPF_INIT('parentalRatingmanager : ' + parentalRatingmanager);
            oipfMetaSrch = window.oipfObjectFactory.createSearchManagerObject();
            CHECK_OIPF_INIT('oipfMetaSrch : ' + oipfMetaSrch);
            //operatorFeature = window.oipfObjectFactory.createHumaxOperatorFeatureObject();
            //CHECK_OIPF_INIT('operatorFeature : ' + operatorFeature);

            videoBroadcast = oipfObjectFactory.createVideoBroadcastObject();
            CHECK_OIPF_INIT('videoBroadcast : ' + videoBroadcast);
            channelList = videoBroadcast.getChannelConfig().channelList;
            channelConfig = videoBroadcast.getChannelConfig();
            oipfRecordingScheduler = oipfObjectFactory.createRecordingSchedulerObject();
            videoBroadcast.onChannelChangeError = func_event_channelchange_error;
            videoBroadcast.onChannelChangeSucceeded = func_event_channelchange_succeeded;
            videoBroadcast.onCasMessageNotify = func_event_videobroadcast_casevent;

            // appmgr for child app
            appMgr.onApplicationLoaded = onApplicationLoaded;
            appMgr.onApplicationUnloaded = onApplicationUnloaded;
            appMgr.onApplicationLoadError = onApplicationLoadError;
            child = null;
            self = appMgr.getOwnerApplication(window.document);
            self.onKeyDown = onApplicationKeyDown;
			self.show();
			self.activateInput(true);

        } catch (ex) {
            CHECK_OIPF_INIT("error in OIPF init : " + ex.message);
        }
    };
    if ( typeof (oipfObjectFactory) == 'undefined' || isEmulMode) {
        isEmulMode = true;

        var emulScriptIncludes = ['oipfemul/oipf_emul.js', 'oipfemul/oipf_emul_util.js', 'oipfemul/service.freesat.json', 'oipfemul/schedulelist.json', 'oipfemul/reclist.json', 'oipfemul/antinfo.json'
        /*
         '../fw/common/emul/json/casuidata.dialog.json',
         '../fw/common/emul/json/casuidata.error.json',
         '../fw/common/emul/json/casuidata.grid.json',
         '../fw/common/emul/json/casuidata.list.json',
         '../fw/common/emul/json/casuidata.mail.json',
         '../fw/common/emul/json/casuidata.textbox.json',
         '../fw/common/emul/oipf_emul_util_end.js'*/
        ];

        loadJavaScripts(emulScriptIncludes, function() {
            engineInit();
        });
    } else {
        engineInit();
    }

    $('#oipfEventId').html('key pressed : ');
    $('#oipfHelpText').html('Reload Page : BLUE, PageUp : RED, PageDown : GREEN');
});

function onApplicationLoadError(appl) {
    alert(">>>>> onApplicationLoadError : " + appl);
}

function onApplicationLoaded(appl) {
    alert(">>>>> onApplicationLoaded : " + appl);
    if (appl == child) {
        appl.activateInput(true);
        appl.show();
        self.hide();
        //        appl.window.moveTo(100, 100);
        //        appl.window.resizeTo(800,600);
    }
};

function onApplicationUnloaded(appl) {
    alert(">>>>> onApplicationUnloaded : " + appl);
    if (appl == child) {
        child = null;
        self.activateInput(true);
        self.show();
    }
}

function onApplicationKeyDown(e) {
    alert(">>>>> onApplicationKeyDown : " + e.keyCode);
    if (child == null) {
        alert(">>>>> onApplicationKeyDown : chil = null");
        return;
    };

    try {
        switch (e.keyCode) {
            case KeyEvent.VK_ESCAPE:
                if (child != null) {
                    child.destroyApplication();
                }
                break;
        }
    } catch(ex) {
        alert("error in init_testpage" + ex.message);
    }
};

function runOnChildApp(url, useajax) {

    // for window
    if (bIsWin32 == true) {
        document.location.href = url;
        //      window.open(url, "_blank");
        return;
    } else {
        //      alert("[APP] Free mem = " + appMgr.getOwnerApplication(window.document).privateData.getFreeMem());
    }

    // for file access
    if (url.match("http") != "http") {
        url = "file:///usr/browser/webapps/Test/" + url;
    }

    if (useajax == false) {
        child = self.createApplication(url, true);
    } else {
        $.ajax({
            url : url,
            type : 'POST',
            complete : function(transport) {
                if (transport.status == 200 || transport.status == 0) {
                    child = self.createApplication(url, true);
                }
            }
        });
    }
}

function realtimeClock() {
    $('#timeline').html('<p>' + new Date().toUTCString() + '</p><p>' + new Date() + '</p>');
}

function function_testpage_event_key_handler(event) {
    $('#oipfEventId').html('key pressed : ' + event.keyCode);
    switch (event.keyCode) {
        case 27:
            document.location.href = "../default.html";
            break;
        case 406:
            // key blue
            // reload page....
            window.location.reload();
            break;
        case 403:
            //  key red
            window.scrollBy(0, -200);
            break;
        case 404:
            //  key green
            window.scrollBy(0, 200);
            break;
        case 449:
        //  key mute
        case 49:
            //  1 : emultator;
            func_oipf_configuration_mute_toggle();
            break;
        case 503:
        //  key volume up
        case 50:
            //  2 : emultator;
            func_oipf_configuration_audio_volume_control(true);
            break;
        case 448:
        //  key volume down
        case 51:
            //  3 : emultator;
            func_oipf_configuration_audio_volume_control(false);
            break;
        case 444:
        //  key wide
        case 52:
            break;

        /*insert by shlee7*/
        case 57896:
            // key blue
            // reload page....
            window.location.reload();
            break;
        case 57737:
            //  volume up
            window.scrollBy(0, -200);
            break;
        case 57938:
            //  volume down
            window.scrollBy(0, 200);
            break;
        case 57893:
            //  key red
            window.scrollBy(0, -200);
            break;
        case 57894:
            //  key green
            window.scrollBy(0, 200);
            break;
    }
}

function func_event_channelchange_error(channel, error) {
    $('#oipfEventId').html('channel event : channel change Fail (' + error + ')');
}

function func_event_channelchange_succeeded(channel) {
    $('#oipfEventId').html('channel event : channel change OK');
}

function func_event_videobroadcast_casevent(display, message, DRMSystemID) {
    $('#oipfEventId').html(message);
}

function left_menu_click_event() {
    $(".submenu:visible").slideUp("middle");
    $(this).next('.submenu:hidden').slideDown("middle");
    return false;
}

function click_mainmenu(o) {
    $(".submenu:visible").slideUp("middle");
    $(o).next('.submenu:hidden').slideDown("middle");
    return false;
}

var menuItems = new Array();

function find_menuItem(id) {
    for ( i = 0; i < menuItems.length; i++) {
        if (menuItems[i].id) {
            if (menuItems[i].id == id)
                return menuItems[i];
        } else {
            if (menuItems[i].name == id)
                return menuItems[i];
        }
    }
    return null;
}

function add_mainmenu_group(title, items) {
    var i, data;

    menuItems = menuItems.concat(items);

    data = '<p class="mainmenu" onclick="click_mainmenu(this);">' + title + '</p>';
    data += '<ul class="submenu">';
    for ( i = 0; i < items.length; i += 1) {
        if (items[i].id)
            data += '<li id="' + items[i].id + '" onclick="click_submenu(this);">' + items[i].name + '</li>';
        else
            data += '<li id="' + items[i].name + '" onclick="click_submenu(this);">' + items[i].name + '</li>';
    }
    data += '</ul>';

    return data;
}

var Videobroadcast_ChannelChangeSucceeded = function(channel) {
    CHECK_OIPF_INIT("Channel change succeeded....");
};

var Videobroadcast_ChannelChangeError = function(channel, errorState) {
    CHECK_OIPF_INIT("Channel change faild .... Error State :  " + errorState);
};

var Videobroadcast_PlayStateChange = function(state, error) {
    CHECK_OIPF_INIT("Play State Change .... Error : " + error);
};

var Videobroadcast_FullScreenChange = function() {
    CHECK_OIPF_INIT("Full Screen Change ....");
};

function select_channel(o) {
    var channel;

    channel = channelList.getChannel(o.id);
    videoBroadcast.setChannel(channel, false, '');
    videoBroadcast.currentChannel = channel;

    try {
        video.addEventListener("ChannelChangeSucceeded", Videobroadcast_ChannelChangeSucceeded, false);
        video.addEventListener("ChannelChangeError", Videobroadcast_ChannelChangeError, false);
        video.addEventListener("PlayStateChange", Videobroadcast_PlayStateChange, false);
        video.addEventListener("FullScreenChange", Videobroadcast_FullScreenChange, false);
    } catch (e) {
    }
}

var _channel_list_start_index = 0;

function refresh_channel_list(o) {
    _channel_list_start_index += 50;
    if (_channel_list_start_index > channelList.length) {
        _channel_list_start_index = 0;
    }
    document.getElementById('oipfTestItem').innerHTML = load_channellist_via_oipf();
}

function load_channellist_via_oipf() {
    var data, cnt, i;

    channelList = channelConfig.channelList;
    try {
        data = '<table class="list_table"><caption>Channel List (from : ' + _channel_list_start_index + ')</caption>';
        data += '<thead>';
        data += '<tr><th>LCN</th><th>Name</th><th>LCN</th><th>Name</th><th>LCN</th><th>Name</th><th>LCN</th><th>Name</th><th>LCN</th><th>Name</th></tr>';
        data += '</thead>';
        data += '<tbody>';

        i = _channel_list_start_index;
        cnt = 50;
        if ((i + cnt) >= channelList.length)
            cnt = channelList.length - i;

        for ( i = 0; i < cnt; i++) {
            var channel = channelList.item(i + _channel_list_start_index);
            /*
             if(oipfConf.configuration.operatorId == 8 && channel.svcoptype != "freesat")
             continue;
             else if(oipfConf.configuration.operatorId != 8 && channel.svcoptype == "freesat")
             continue;
             */
            if ((i % 5) == 0)
                data += '<tr>';
            //data += '<th>' + channel.majorChannel + '</th><th id="' + channel.ccid + '" onclick="select_channel(this)">' +
            // channel.name + '</th>';
            data += '<th>' + channel.majorChannel + '</th><td style="color:rgb(128, 128, 0)" id="' + channel.ccid + '" onfocus="$(this).addClass(\'focused\');" onblur="$(this).removeClass(\'focused\');" onclick="select_channel(this)">' + channel.name + '</td>';
            if ((i % 5) == 4)
                data += '</tr>';
        }

        data += '</tbody>';
        data += '</table>';

        if (cnt < channelList.length)
            data += '<p onclick="refresh_channel_list(this);">more table is existed...</p>';

    } catch (ex) {
        alert("error in init_testpage" + ex.message);
    }
    return data;
}

function table_onclick(o) {
    var index;
    var class_identifier, class_object;
    var data;

    index = parseInt(o.id);
    class_identifier = __object_array[index];
    class_object = __object_array[index + 1];

    alert(index + 1);
    alert('objectid : ' + index + '  ' + __object_array[0] + ' ' + __object_array[1] + ' ' + __object_array[2] + ' ' + __object_array[3]);
    alert(o.id + ' ---> ' + class_identifier + ' object : ' + class_object);
    switch (class_identifier) {
        case CONST_APPLICATION_CLASS:
            load_Application_info('Application', class_object);
            break;
        case CONST_CHANNELCONFIG_CLASS:
            data = load_channelconfigclass_info('ChannelConfig Object', class_object);
            break;
        case CONST_CHANNEL_CLASS:
            data = load_channelclass_info('Channel Object', class_object);
            break;
        case CONST_AVCOMPONENT_CLASS:
            data = load_avcomponentclass_info('AV Component', class_object);
            break;
        case CONST_HUMAXAUDIO_CLASS:
            data = load_hmxaudiocollectionclass_info('Humax Audio Collection', class_object);
            break;
        case CONST_HUMAXOUTPUT_CLASS:
            data = load_hmxoutputcollectionclass_info('Humax Output Collection', class_object);
            break;
        case CONST_ANTENNAINFOLISTS_CLASS:
            data = load_antennainfolistscollectionclass_info('Antenna Info Lists Collection', class_object);
            break;
        case CONST_PROGRAMS_COLLECTION:
            data = load_programcollectionclass_info('Programs Collection', class_object);
            break;
        case CONST_PARENTALRATING_CLASS:
            data = load_parentalratingclass_info('ParentalRatings Class', class_object);
            break;
        case CONST_PARENTALRATING_COLLECTION:
            data = load_parentalratingcollection_info('ParentalRatings Collection', class_object);
            break;
        case CONST_RESOLUTION_COLLECTION:
        case CONST_TVSCARTFORMAT_COLLECTION:
        case CONST_STRING_COLLECTION:
            data = load_stringcollection_info('String Collection', class_object);
            break;
        case CONST_DOWNLOAD_CLASS:
            data = load_downloadclass_info('Download Class', class_object);
            break;
        case CONST_DRMCONTROLINFORMATION_CLASS:
            data = load_drmcontrolinformationclass_info('DRM Control Information Class', class_object);
            break;
        case CONST_DOWNLOAD_COLLECTION:
            data = load_downloadcollection_info('Download Collection', class_object);
            break;
        case CONST_DRMCONTROLINFORMATION_COLLECTION:
            data = load_drmcontrolinformationcollection_info('DRM Control Information Collection', class_object);
            break;
        case CONST_PARENTALRATINGSCHEME_COLLECTION:
            data = load_parentalratingschemeclass_info('ParentalRatingScheme Collection', class_object);
            break;
        case CONST_RECORDING_CLASS:
            data = load_recordingclass_info('Recording Class', class_object);
            break;
        case CONST_RECORDING_COLLECTION:
            data = load_recordingcollection_info('Recording Collection Info', class_object);
            break;
        case CONST_SCHEDULERECORDING_CLASS:
            data = load_scheduledrecordingclass_info('Scheduled Recording', class_object);
            break;
        case CONST_SCHEDULERECORDING_COLLECTION:
            data = load_scheduledrecordingcollection_info('Scheduled Recording Collection Info', class_object);
            break;
        case CONST_BOOKMARK_COLLECTION:
            data = load_bookmarkcollection_info('Bookmark Collection', class_object);
            break;
        case CONST_AVCOMPONENT_COLLECTION:
            data = load_avcomponentcollection_info('AVComponentCollection', class_object);
            break;
        case CONST_AVOUTPUT_COLLECTION:
            data = load_avoutputcollection_info('AVOutputCollection', class_object);
            break;
        case CONST_AVOUTPUT_CLASS:
            data = load_avoutputclass_info('AVOutputClass', class_object);
            break;
        case CONST_TUNER_COLLECTION:
            data = load_tunercollection_info('TunerCollection', class_object);
            break;
        case CONST_TUNER_CLASS:
            data = load_tunerclass_info('TunerClass', class_object);
            break;
        case CONST_SIGNALINFO_CLASS:
            data = load_signalinfoclass_info('SignalInfoClass', class_object);
            break;
        case CONST_CHANNELSCANPARAMETERS_CLASS:
            data = load_channelscanparameters_info("ChannelScanParametersClass", class_object);
            break;
        case CONST_CHANNELSCANOPTIONS_CLASS:
            data = load_channelscanoptionsclass_info("ChannelScanOptionsClass", class_object);
            break;
        case CONST_CHANNELLIST_CLASS:
            data = load_channellist_class("channelLists", class_object);
            break;
        case CONST_FAVOURITELIST_CLASS:
            data = load_channellist_class("channelLists - [" + class_object.favID + "] (" + class_object.name + ")", class_object);
            break;
        case CONST_FAVOURITELIST_COLLECTION:
            data = load_favouritelistcollection_info("favouriteLists", class_object);
            break;
        case CONST_HUMAXFREESAT_CLASS:
            data = load_hmxopfreesat_info('Humax Freesat Info', class_object);
            break;

        case CONST_NETWORKINTERFACE_COLLECTION:
            break;
        case CONST_FUNCTION_CLASS:
            class_object();
            break;
    }

    $("#oipfTestItem").append(data);
}

function add_oipfObject_info(t1, t2, class_identifier) {
    var data = '';
    var type_str;

    if ((__oipf_info_index % 3) == 0)
        data += '<tr>';
    try {
        type_str = typeof (t2);
        type_str = type_str.substr(0, 1);
        type_str = type_str.toUpperCase();

        if (class_identifier) {
            var index;

            //alert(class_identifier);
            index = __object_array.push(class_identifier, t2);

            index = index - 2;
            //alert(index);

            data += '<th>' + t1 + '</th><td>' + type_str + '</td>' + '<td style="color:rgb(128, 128, 0)" id=' + index + ' onfocus="$(this).addClass(\'focused\');" onblur="$(this).removeClass(\'focused\');" onclick="table_onclick(this);">';
            if (class_identifier == CONST_FUNCTION_CLASS) {
                data += '[Method]';
            } else {
                data += t2.toString();
            }
            data += '</td>';
        } else {
            var define_length = 30;
            var temp_string = t2.toString();
            var temp_data = '';
            var i;
            var s_loop = temp_string.length / define_length;

            if ((temp_string.length < define_length) || (temp_string.length <= 0)) {
                data += '<th>' + t1 + '</th><td>' + type_str + '</td>' + '<td>' + temp_string + '</td>';
            } else {
                for ( i = 0; i <= s_loop; i++) {

                    if (i >= s_loop) {
                        temp_data += temp_string.slice((define_length * i), temp_string.length - 1);
                    } else {
                        temp_data += temp_string.slice((define_length * i), ((i + 1) * define_length - 1));
                        temp_data += '<br>';
                    }
                }

                data += '<th>' + t1 + '</th><td>' + type_str + '</td>' + '<td>' + temp_data + '</td>';
            }
            //data += '<th>' + t1 + '</th><td>' + type_str + '</td>' + '<td>' + t2.toString() + '</td>';
        }
    } catch (ex) {
        try {
            if (class_identifier == CONST_EXCLUDED_CLASS)
                data += '<th>' + t1 + '</th><th class="error_table">err</th><th class="error_table">excluded</th>';
            else
                data += '<th>' + t1 + '</th><th class="error_table">err</th><th class="error_table">' + ex.message + '</th>';
        } catch (ex) {
            data += '<th>' + t1 + '</th><th class="error_table">err</th><th class="error_table">' + ex.message + '</th>';
        }
    }

    if ((__oipf_info_index % 3) == 2)
        data += '</tr>';

    __oipf_info_index++;

    return data;
}

function add_table_head(t1) {
    var data;

    __oipf_info_index = 0;
    data = '<table class="list_table"><caption>' + t1 + '</caption>';
    data += '<thead>';
    data += '<tr><th style="width:15%">Property</th><th style="width:2%">T</th><th style="width:15%">Value</th><th style="width:15%">Property</th><th style="width:2%">T</th><th style="width:15%">Value</th><th style="width:15%">Property</th><th style="width:2%">T</th><th style="width:15%">Value</th></tr>';
    data += '</thead>';
    data += '<tbody>';

    return data;
}

function add_table_explain(t1) {
    var data;
    __oipf_info_index = 0;
    data = '<table class="list_table"><caption>' + t1 + '</caption>';
    return data;
}

function add_table_head_ext(t1, color, font_size, is_property_table) {
    var data;
    var caption_str = '<caption style="color:' + color + ';';
    var size_str = 'font-size:' + font_size + 'pt">';
    __oipf_info_index = 0;
    data = '<table class="list_table">' + caption_str + size_str + t1 + '</caption>';
    if (is_property_table) {
        data += '<thead>';
        data += '<tr><th style="width:15%">Property</th><th style="width:2%">T</th><th style="width:15%">Value</th><th style="width:15%">Property</th><th style="width:2%">T</th><th style="width:15%">Value</th><th style="width:15%">Property</th><th style="width:2%">T</th><th style="width:15%">Value</th></tr>';
        data += '</thead>';
    }
    data += '<tbody>';

    return data;
}

function add_table_tail() {
    return '</tbody></table>';
}

function load_meta_search_mgr_info() {
    var i, data, ms = oipfMetaSrch;

    try {
        var chConf = ms.getChannelConfig();
        var MdSrch = ms.createSearch(1);
        data = '';
        i = 0;
        data += add_table_head('Search Manager Object (oipfSearchManager) - OIPF 2.1');
        data += add_oipfObject_info('guideDaysAvailable', ms.guideDaysAvailable);
        data += add_oipfObject_info('getChannelConfig()', chConf);
        data += add_oipfObject_info('chlist len', chConf.channelList.length);
        data += add_oipfObject_info('createSearch(1)', MdSrch);
        data += add_oipfObject_info('onMetadataUpdate', "Event Func");
        data += add_oipfObject_info('onMetadataSearch', "Event Func");
        data += add_table_tail();
        /*
         i = 0;
         data += add_table_head('Humax Defined Search Manager Object Members');
         data += add_table_tail();
         */
    } catch (ex) {

    }
    return data;
}

function load_meta_data_search_class_info() {
    var i, data, ms = oipfMetaSrch;
    var MdSrch = ms.createSearch(1);
    var chlist = ms.getChannelConfig().channelList;

    try {
        var value
        data = '';
        i = 0;
        data += add_table_head('Query Class Property - OIPF 2.1');
        /*
         data += add_oipfObject_info('id', MdSrch.id);
         */
        data += add_oipfObject_info('searchTarget', MdSrch.searchTarget);
        data += add_oipfObject_info('query', MdSrch.query);
        data += add_oipfObject_info('result', MdSrch.result);
        data += add_table_tail();
        i = 0;
        data += add_table_head('Query Class Method - OIPF 2.1');
        value = MdSrch.addRatingConstraint(null, 0);
        value = "void"
        data += add_oipfObject_info('addRatingConstraint()', value);
        value = MdSrch.addCurrentRatingConstraint();
        value = "void"
        data += add_oipfObject_info('addCurrentRatingConstraint()', value);
        value = MdSrch.addChannelConstraint(chlist);
        value = "void"
        data += add_oipfObject_info('addChannelConstratint()', value);
        value = MdSrch.addChannelConstraint(chlist.item(0));
        value = "void"
        data += add_oipfObject_info('addChannelConstratint()', value);
        value = MdSrch.orderBy("tt", true);
        value = "void"
        data += add_oipfObject_info('orderBy()', value);
        var new_query = MdSrch.createQuery("kk", 1, "babo");
        data += add_oipfObject_info('createQuery()', new_query);
        value = MdSrch.findProgrammesFromStream(chlist.item(0), 0, 10);
        data += add_oipfObject_info('findProgrammesFromStream', value);
        value = MdSrch.setQuery(new_query);
        value = "void"
        data += add_oipfObject_info('setQuery()', value);
        data += add_table_tail();
        /*
         i = 0;
         data += add_table_head('Humax Defined Query Class Members');
         data += add_table_tail();
         */
    } catch (ex) {
        data += add_oipfObject_info('error', ex.name + "::" + ex.message);
        data += add_table_tail();
    }
    return data;
}

function load_meta_data_query_class_info() {
    var i, data, ms = oipfMetaSrch;
    var search = ms.createSearch(1);
    var q1 = search.createQuery("starttime", 2, "12345");
    var q2 = search.createQuery("eventtext", 7, "t(__t)");

    try {
        var value
        data = '';
        /*
         i = 0;
         data += add_table_head('Query Class Property - createQuery("kk",1,"babo")' - OIPF 2.1);
         data += add_oipfObject_info('field', query.field);
         data += add_oipfObject_info('comparison', query.comparison);
         data += add_oipfObject_info('value', query.value);
         data += add_table_tail();
         */
        i = 0;
        data += add_table_head('Query Class Method - OIPF 2.1');
        value = q1.and(q2);
        data += add_oipfObject_info('and()', value);
        value = q1.or(q2);
        data += add_oipfObject_info('or()', value);
        value = q1.not();
        data += add_oipfObject_info('not()', value);
        data += add_table_tail();
        /*
         i = 0;
         data += add_table_head('Humax Defined Query Class Members');
         data += add_table_tail();
         */
    } catch (ex) {
        data += add_oipfObject_info('error', ex.name + "::" + ex.message);
        data += add_table_tail();
    }
    return data;
}

function load_meta_data_search_result_class_info() {
    var i, data;
    var search = oipfMetaSrch.createSearch(1);
    var result;

    data = '';
    data += add_table_head('metadata search - OIPF 2.1');

    function metadata_addProgramme(data, o) {
        if (data != null) {
            data += add_oipfObject_info('name', o.name);
            data += add_oipfObject_info('description', o.description);
            data += add_oipfObject_info('startTime', o.startTime);
            data += add_oipfObject_info('duration', o.duration);
            data += add_oipfObject_info('channelID', o.channelID);
            data += add_oipfObject_info('programmeID', o.programmeID);
        } else {
            var eventdata;

            eventdata = add_table_head('onMetadataSearch');
            eventdata += add_oipfObject_info('name', o.name);
            eventdata += add_oipfObject_info('description', o.description);
            eventdata += add_oipfObject_info('startTime', o.startTime);
            eventdata += add_oipfObject_info('duration', o.duration);
            eventdata += add_oipfObject_info('channelID', o.channelID);
            eventdata += add_oipfObject_info('programmeID', o.programmeID);
            eventdata += add_table_tail();

            $('#oipfTestEvent').html(eventdata);
        }
    }

    function metadata_onMetadataUpdate(action, info, o) {
        // ??
    }

    //function metadata_onMetadataSearch (state, id)
    function metadata_onMetadataSearch(metadatasearch, state) {
        switch (state) {
            case 0:
            // search has finished
            case 1:
                // more search results are available.
                result = metadatasearch.result;
                result.update();
                for ( i = 0; i < result.length; i++) {
                    metadata_addProgramme(null, result.item(i));
                }
                break;

            case 2:
                // invalid
                break;

            default:
                break;
        }
    }

    try {
        //oipfMetaSrch.onMetadataUpdate = metadata_onMetadataUpdate;
        oipfMetaSrch.onMetadataSearch = metadata_onMetadataSearch;

        var query = search.createQuery("eventtext", 6, "Das");

        search.setQuery(query);
        // 2.1
        //search.query = query;

        search.orderBy("eventtext", true);

        result = search.result;
        if (result.getResults(0, 10)) {
            for ( i = 0; i < result.length; i++) {
                metadata_addProgramme(data, result.item(i));
            }
        }
    } catch (ex) {
        data += add_oipfObject_info('error', ex.name + "::" + ex.message);
    }
    data += add_table_tail();
    return data;
}

function load_oipf_download_trigger_info() {
    var i, data, dt = oipfDownloadTrigger;

    try {
        i = 0;

        data = add_table_head('oipfDownloadTrigger embbeded object V2.1');
        /* method */
        data += add_oipfObject_info('registerDownload()', dt.registerDownload("temporary desc", null));
        data += add_oipfObject_info('registerDownloadURL()', dt.registerDownloadURL("http://www.humaxdigital.com/", "temporary type", null));
        data += add_oipfObject_info('checkDownloadPossible()', dt.checkDownloadPossible(1024 * 1024 * 1024));
        data += add_oipfObject_info('registerDownloadFromCRID()', dt.registerDownloadFromCRID("temp crid", "ko", null));
        /* ext */
        data += add_table_tail();
    } catch (ex) {
    }

    return data;
}

function load_oipf_download_manager_info() {
    var i, data, dm = oipfDownloadManager, dc;

    try {
        i = 0;
        dc = dm.createFilteredList(false, 0);
        d = dc.item(0);

        data = add_table_head('oipfDownloadManager embbeded object V2.1');
        /* property */
        data += add_oipfObject_info('discInfo', dm.discInfo);
        /* method */
        data += add_oipfObject_info('pause', dm.pause(d));
        data += add_oipfObject_info('resume', dm.resume(d));
        data += add_oipfObject_info('remove', dm.remove(d));
        data += add_oipfObject_info('getDownloads()', dm.getDownloads("temporary download list"), CONST_DOWNLOAD_COLLECTION);
        dc = dm.createFilteredList(false, 0);
        data += add_oipfObject_info('createFilteredList()', dc, CONST_DOWNLOAD_COLLECTION);
        //data += add_oipfObject_info('updateRegisteredDownload()', dm.updateRegisteredDownload(dc.item(1),
        // "http://www.temp.com")); /* code??�좎럩�⒴뜝占썸쾬�롢늾???*/
        /* event */
        data += add_oipfObject_info('onDownloadStateChange', 'Event Func');
        data += add_table_tail();

        data += add_table_head('oipfDownloadManager embbeded object V1.1');
        data += add_oipfObject_info('discInfo', dm.discInfo);
        data += add_oipfObject_info('pause', dm.pause);
        data += add_oipfObject_info('resume', dm.resume);
        data += add_oipfObject_info('remove', dm.remove);
        data += add_oipfObject_info('getDownloads()', dm.getDownloads("temporary download list"), CONST_DOWNLOAD_COLLECTION);
        data += add_oipfObject_info('createFilteredList()', dm.createFilteredList(false, 0), CONST_DOWNLOAD_COLLECTION);
        data += add_oipfObject_info('onDownloadStateChange', 'Event Func');
        data += add_table_tail();
    } catch (ex) {
    }

    return data;
}

function onClick_RecordingSchedulerTest() {
    var i, data, scheduler = oipfRecordingScheduler;

    function scheduler_onPVREvent(state, recording) {
        var data;

        data = add_table_head('onPVREvent');
        data += add_oipfObject_info('state', state);
        if ( typeof recording.name != "undefined")
            data += add_oipfObject_info('recording', recording.name);
        else
            data += add_oipfObject_info('recording', "undefined");
        data += add_table_tail();

        $('#oipfTestEvent').html(data);
    }

    try {
        var data;
        var programmes = videoBroadcast.programmes;

        scheduler.onPVREvent = scheduler_onPVREvent;

        data = add_table_head('oipfRecordingScheduler embedded object V2.1 & extensions');

        var record;
        var watch;

        if (programmes != null && programmes.length > 0) {
            record = scheduler.record(programmes.item(0));
            watch = scheduler.record(programmes.item(1), 1);

            if ( typeof record != "undefined")
                data += add_oipfObject_info('record', record.name);
            if ( typeof watch != "undefined")
                data += add_oipfObject_info('watch', watch.name);
        } else {
            var date = new Date();
            var startTime = date.getTime() / 1000;
            var duration = 5 * 60;
            var channel = videoBroadcast.currentChannel;

            record = scheduler.recordAt(startTime, duration, 0, channel.ccid);
            watch = scheduler.recordAt(startTime + 60, duration, 0, channel.ccid, 1);

            if ( typeof record != "undefined")
                data += add_oipfObject_info('recordAt', record.name);
            if ( typeof watch != "undefined")
                data += add_oipfObject_info('watch', watch.name);
        }

        if ( typeof record != "undefined") {// record -> try stop & remove
            try {
                scheduler.stop(record);
                data += add_oipfObject_info('stop()', 'OK');
            } catch (err) {
                data += add_oipfObject_info('stop()', 'FAIL:' + err.description);
            }

            try {
                scheduler.remove(record);
                data += add_oipfObject_info('remove()', 'OK');
            } catch (err) {
                data += add_oipfObject_info('remove()', 'FAIL:' + err.description);
            }
        }

        data += add_table_tail();
    } catch (ex) {
        data += add_oipfObject_info('error', ex.name + "::" + ex.message);
        data += add_table_tail();
    }

    return data;
}

function load_bookmark_collection_info() {
    var i, data, rs = oipfRecordingScheduler;

    try {
        var bmc = rs.recordings.item(0).bookmarks;

        i = 0;
        data = add_table_head('The BookmarkCollection class V2.1 == V1.1');
        data += add_oipfObject_info('addBookmark()', bmc.addBookmark(1000, "HUMAX"));
        data += add_oipfObject_info('removeBookmark()', bmc.removeBookmark(bmc.item(0)));
        data += add_table_tail();
    } catch (ex) {

    }

    return data;
}

function func_channelscan_event(type, progress, frequency, signalStrength, channelNumber, channelType, channelCount, transponderCount, searchedInfos) {
    //   var data;
    //  var ChannelConfigEventInfo info = scanEventInfo;

    alert("LENGTH : " + searchedInfos.length);

    alert("NAME : " + searchedInfos.getInfo(0, "name"));

    data = add_table_head('onChannelScan Event');
    data += add_oipfObject_info('type', type);
    data += add_oipfObject_info('progress', progress);
    data += add_oipfObject_info('channelCount', channelCount);
    data += add_oipfObject_info('transponderCount', transponderCount);
    data += add_oipfObject_info('frequency', frequency);
    data += add_oipfObject_info('signalStrength', signalStrength);
    data += add_oipfObject_info('channelType', channelType);
    data += add_oipfObject_info('channelNumber', channelNumber);
    data += add_table_tail();

    $('#oipfTestEvent').html(data);

    data = 'onChannelScan : type(' + type + '), progress(' + progress + '), channelCount(' + channelCount + '), transponderCount(' + transponderCount + ')';
    $('#oipfEventId').html(data);
}

function func_channelscan_event_connection_(type, progress, frequency, signalStrength, channelNumber, channelType, channelCount, transponderCount) {
    var data;

    data = add_table_head('onChannelScan Event');
    data += add_oipfObject_info('type', type);
    data += add_oipfObject_info('progress', progress);
    data += add_oipfObject_info('connectionType', channelCount);
    data += add_table_tail();

    $('#oipfTestEvent').html(data);

    data = 'onChannelScan : type(' + type + '), progress(' + progress + '), connectionType(' + channelCount + ')';
    $('#oipfEventId').html(data);

    alert('func_channelscan_event_connection.');
    alert(data);

    if (progress == 100) {
        alert('stop Antenna Connection');
        oipfConf.localSystem.antennaInfoLists.setConnectionType(channelCount);
        channelConfig.stopAntennaConnection();
    }

}

function func_channelscan_event_diseqc_(type, progress, frequency, signalStrength, channelNumber, channelType, channelCount, transponderCount) {
    var data;

    data = add_table_head('onChannelScan Event');
    data += add_oipfObject_info('type', type);
    data += add_oipfObject_info('progress', progress);
    data += add_oipfObject_info('channelCount', channelCount);
    data += add_oipfObject_info('transponderCount', transponderCount);
    data += add_oipfObject_info('frequency', frequency);
    data += add_oipfObject_info('signalStrength', signalStrength);
    data += add_oipfObject_info('channelType', channelType);
    data += add_oipfObject_info('channelNumber', channelNumber);
    data += add_table_tail();

    $('#oipfTestEvent').html(data);

    data = 'onChannelScan : type(' + type + '), progress(' + progress + '), channelCount(' + channelCount + '), transponderCount(' + transponderCount + ')';
    $('#oipfEventId').html(data);

    if (progress == 100) {
        alert('func_channelscan_event_diseqc.' + ' progress = ' + progress + ' chCount = ' + channelCount);
        alert(data);

        oipfCommitDiseqcDetection();
    }

}

var _fsat_custom_searchedInfos = 0;
var _custom_search_page;

function func_channelscan_event_usercustom(type, progress, frequency, signalStrength, channelNumber, channelType, channelCount, transponderCount, searchedInfos) {
    if (progress == 100) {
        _fsat_custom_searchedInfos = searchedInfos;
        $("#oipfTestItem").append(load_channellist_userCustomSearch_via_oipf());
        //      load_channellist_userCustomSearch_via_oipf();
        //fsat_refresh_custom_search_channel_list(_custom_search_page);
    }
}

function load_channelsearchtest_info() {
    var data;
    var channelScanParams, channelScanOptions;
    var scanParamCollection;

    function _set_channel_param(antid, sr, freq, coderate, polar, modul) {
        var channelScanParams = channelConfig.createChannelScanParametersObject(11);

        channelScanParams.symbolRate = sr;
        channelScanParams.startFrequency = freq;
        channelScanParams.endFrequency = freq;
        channelScanParams.antennaId = antid;
        channelScanParams.antennaName = 'Astra1';
        channelScanParams.codeRate = coderate;
        channelScanParams.polarisation = polar;
        channelScanParams.modulationModes = modul;

        scanParamCollection.addChannelScanParam(channelScanParams);
    }

    function oipfHMSSearchFreq() {

        makeAntennaWithDefault = function(satName) {
            var antInfoLists = oipfConf.localSystem.antennaInfoLists;
            var antInfo;
            var antId;

            antId = antInfoLists.createAntennaInfo();
            antInfo = antInfoLists.getAntennaInfo(antId)
            antInfo.satelliteType = satName;
            antInfo.satelliteName = satName;
            antInfo.antennaType = antInfo.TYPE_DISEQC;
            antInfo.lnbFrequency = antInfo.LNBFREQ_UNIVERSAL;
            antInfo.switchInput = antInfo.SW_A;
            antInfo.commit();
            antInfoLists.commit();
            return antId;
        };
     //   var ant = makeAntennaWithDefault('Astra1');

		_set_channel_param(1, '22000000', 10773000, 'auto', 2, 1);
		_set_channel_param(1, '22000000', 10802000, 'auto', 1, 1);
		_set_channel_param(1, '27500000', 12285000, 'auto', 2, 0);
		_set_channel_param(1, '27500000', 12304000, '9/10', 1, 1);
		_set_channel_param(1, '27500000', 12324000, 'auto', 2, 0);
		_set_channel_param(1, '27500000', 12344000, 'auto', 1, 0);
		_set_channel_param(1, '27500000', 12363000, 'auto', 2, 0);
		_set_channel_param(1, '27500000', 12382000, '9/10', 1, 1);
		_set_channel_param(1, '22000000', 12699000, 'auto', 2, 0);


        /*        _set_channel_param(ant, '22000000', 10744000);
         _set_channel_param(ant, '22000000', 10773000);
         _set_channel_param(ant, '22000000', 10788000);
         _set_channel_param(ant, '22000000', 10818000);
         _set_channel_param(ant, '22000000', 10832000);
         _set_channel_param(ant, '22000000', 10847000);
         _set_channel_param(ant, '22000000', 10862000);
         _set_channel_param(ant, '22000000', 10876000);
         _set_channel_param(ant, '22000000', 10921000);
         _set_channel_param(ant, '22000000', 10936000);
         _set_channel_param(ant, '22000000', 11023000);
         _set_channel_param(ant, '22000000', 11171000);
         _set_channel_param(ant, '22000000', 11244000);
         _set_channel_param(ant, '22000000', 11303000);
         _set_channel_param(ant, '22000000', 11318000);
         _set_channel_param(ant, '22000000', 11362000);
         _set_channel_param(ant, '22000000', 11436000);
         _set_channel_param(ant, '22000000', 11464000);
         _set_channel_param(ant, '22000000', 11479000);
         _set_channel_param(ant, '22000000', 11509000);
         _set_channel_param(ant, '22000000', 11538000);
         _set_channel_param(ant, '22000000', 11568000);
         _set_channel_param(ant, '22000000', 11597000);
         _set_channel_param(ant, '22000000', 11627000);
         _set_channel_param(ant, '22000000', 11671000);
         _set_channel_param(ant, '22000000', 11686000);
         _set_channel_param(ant, '27500000', 11720000);
         _set_channel_param(ant, '27500000', 11739000);
         _set_channel_param(ant, '27500000', 11758000);
         _set_channel_param(ant, '27500000', 11778000);
         _set_channel_param(ant, '27500000', 11798000);
         _set_channel_param(ant, '27500000', 11817000); */
        /*
        _set_channel_param(ant, '27500000', 11836000);
        _set_channel_param(ant, '27500000', 11856000);
        _set_channel_param(ant, '27500000', 11876000);
        _set_channel_param(ant, '27500000', 11895000);
        _set_channel_param(ant, '27500000', 11914000);
        _set_channel_param(ant, '27500000', 11934000);
        _set_channel_param(ant, '27500000', 11954000);
        _set_channel_param(ant, '27500000', 11973000);
        _set_channel_param(ant, '27500000', 11992000);
        _set_channel_param(ant, '27500000', 12012000);
        _set_channel_param(ant, '27500000', 12032000);
        _set_channel_param(ant, '27500000', 12051000);
        _set_channel_param(ant, '27500000', 12070000);
        _set_channel_param(ant, '27500000', 12090000);
        _set_channel_param(ant, '27500000', 12110000);
        _set_channel_param(ant, '27500000', 12129000);
        _set_channel_param(ant, '27500000', 12148000);
        _set_channel_param(ant, '27500000', 12168000);
        _set_channel_param(ant, '27500000', 12188000);
        _set_channel_param(ant, '27500000', 12207000);
        _set_channel_param(ant, '27500000', 12226000);
        _set_channel_param(ant, '27500000', 12246000);
        _set_channel_param(ant, '27500000', 12266000);
        _set_channel_param(ant, '27500000', 12285000);
        _set_channel_param(ant, '27500000', 12304000);
        _set_channel_param(ant, '27500000', 12324000);
        _set_channel_param(ant, '27500000', 12344000);
        _set_channel_param(ant, '27500000', 12363000);
        _set_channel_param(ant, '27500000', 12382000);
        _set_channel_param(ant, '27500000', 12402000);
        _set_channel_param(ant, '27500000', 12422000);
        _set_channel_param(ant, '29700000', 12441000);
        _set_channel_param(ant, '27500000', 12460000);
        _set_channel_param(ant, '27500000', 12480000);
        _set_channel_param(ant, '22000000', 12515000);
        _set_channel_param(ant, '22000000', 12522000);
        _set_channel_param(ant, '22000000', 12545000);
        _set_channel_param(ant, '22000000', 12552000);
        _set_channel_param(ant, '22000000', 12574000);
        _set_channel_param(ant, '22000000', 12581000);
        */
        /*      _set_channel_param(ant, '22000000', 12604000);
         _set_channel_param(ant, '22000000', 12610000);
         _set_channel_param(ant, '22000000', 12633000);
         _set_channel_param(ant, '22000000', 12640000);
         _set_channel_param(ant, '22000000', 12663000);
         _set_channel_param(ant, '22000000', 12670000);
         _set_channel_param(ant, '22000000', 12692000);
         _set_channel_param(ant, '22000000', 12699000);
         _set_channel_param(ant, '22000000', 12722000);
         _set_channel_param(ant, '22000000', 12728000); */

        channelScanOptions.enableNetworkScan = false;
    }

    function oipfSetFreesatSearchFreq() {
        var antid = GetFreesatAntennaId();

        _set_channel_param(antid, '27500000', 11420000);
        channelScanOptions.channelType = 0;
        channelScanOptions.casType = 0;
        channelScanOptions.replaceExisting = 0;
        channelScanOptions.enableNetworkScan = false;
    }

    function oipfSetAstra2AutoSearchFreq() {
        _set_channel_param(1, '22000000', 10714000);
        _set_channel_param(1, '22000000', 10729000);
        _set_channel_param(1, '22000000', 10744000);
        _set_channel_param(1, '22000000', 10758000);
        _set_channel_param(1, '22000000', 10773000);
        _set_channel_param(1, '22000000', 10788000);
        _set_channel_param(1, '22000000', 10803000);
        _set_channel_param(1, '22000000', 10818000);
        _set_channel_param(1, '22000000', 10832000);
        _set_channel_param(1, '22000000', 10847000);
        _set_channel_param(1, '22000000', 10862000);
        _set_channel_param(1, '22000000', 10876000);
        _set_channel_param(1, '22000000', 10891000);
        _set_channel_param(1, '22000000', 10906000);
        _set_channel_param(1, '22000000', 10921000);
        _set_channel_param(1, '22000000', 10936000);
        channelScanOptions.enableNetworkScan = false;
    }

    function oipfSetAstra1AutoSearchFreq() {
        _set_channel_param(1, '22000000', 10744000);
        _set_channel_param(1, '22000000', 10773000);
        _set_channel_param(1, '22000000', 10788000);
        channelScanOptions.enableNetworkScan = false;
    }

    function oipfStartScanNormal() {
        alert('startScan - Normal');
        /*
         if(oipfConf.configuration.operatorId == 8) {
         var szPostcode = oipfConf.configuration.getField('post_code').toString();
         oipfConf.configuration.setField('post_code', szPostcode);

         oipfSetFreesatSearchFreq();
         } else if((0 == oipfConf.configuration.operatorId) || (1 == oipfConf.configuration.operatorId)) {
         // in case of no operator default search tp is astra1 (german)
         oipfSetAstra1AutoSearchFreq();
         } else
         oipfSetAstra2AutoSearchFreq();
         */
        oipfHMSSearchFreq();
        channelConfig.onChannelScan = func_channelscan_event;
        channelConfig.startScan(channelScanOptions, scanParamCollection);
    }

    function oipfStopScan() {
        alert('stopScan');
        channelConfig.stopScan();
    }

    function oipfStartScanTryTune() {
        alert('startScan - TryTune');
        channelConfig.startScan(null, channelScanParams, 'tuneonly');
    }

    function oipfControlScanPause() {
        alert('controlScan - Pause');
        channelConfig.controlScan('pause');
    }

    function oipfControlScanResume() {
        alert('controlScan - Resume');
        channelConfig.controlScan('resume');
    }

    function oipfControlScanSave() {
        alert('controlScan - Save');
        channelConfig.controlScan('save');

        _channel_list_start_index = 0;
        channelConfig.reloadChannelList();
        window.location.reload();
    }

    function oipfControlScanLoad() {
        alert('controlScan - Load');
        channelConfig.controlScan('load');
    }

    function oipfStartScanAntennaConnection() {
        alert('startScan - antennaConnection');

        _set_channel_param(1, '22000000', 10773000, 'auto', 2, 1);
        _set_channel_param(1, '22000000', 10802000, 'auto', 1, 1);
        _set_channel_param(1, '27500000', 12285000, 'auto', 2, 0);

/*
        _set_channel_param(1, '27500000', 11428000, '3/4', 1, 0);
        _set_channel_param(1, '23000000', 10847000, '8/9', 2, 0);
        _set_channel_param(1, '22000000', 10714000, '5/6', 1, 0);
        _set_channel_param(1, '22000000', 10803000, '5/6', 1, 0);
        _set_channel_param(1, '22000000', 10906000, '5/6', 1, 0);
        _set_channel_param(1, '22000000', 10758000, '5/6', 2, 0);
        _set_channel_param(1, '22000000', 10729000, '5/6', 2, 0);
        _set_channel_param(1, '22000000', 10773000, '5/6', 1, 0);
        _set_channel_param(1, '22000000', 10832000, '5/6', 1, 0);
        _set_channel_param(1, '22000000', 10714000, '5/6', 1, 0);
        _set_channel_param(1, '22000000', 10729000, '5/6', 2, 0);
        _set_channel_param(1, '22000000', 10744000, '5/6', 1, 0);
        _set_channel_param(1, '22000000', 10758000, '5/6', 2, 0);
        _set_channel_param(1, '22000000', 10773000, '5/6', 1, 0);
        _set_channel_param(1, '22000000', 10788000, '5/6', 2, 0);
        _set_channel_param(1, '22000000', 10803000, '5/6', 1, 0);
        _set_channel_param(1, '22000000', 10818000, '5/6', 2, 0);
        _set_channel_param(1, '22000000', 10832000, '5/6', 1, 0);
        _set_channel_param(1, '22000000', 10847000, '5/6', 2, 0);
        _set_channel_param(1, '22000000', 10862000, '5/6', 1, 0);
        _set_channel_param(1, '22000000', 10876000, '5/6', 2, 0);
        _set_channel_param(1, '22000000', 10891000, '5/6', 1, 0);
        _set_channel_param(1, '22000000', 10906000, '5/6', 2, 0);
        _set_channel_param(1, '22000000', 10921000, '5/6', 1, 0);
        _set_channel_param(1, '22000000', 10936000, '5/6', 2, 0);
        _set_channel_param(1, '27500000', 11222000, '2/3', 1, 0);
        _set_channel_param(1, '27500000', 11222000, '2/3', 2, 0);
        _set_channel_param(1, '27500000', 11260000, '2/3', 2, 0);
        _set_channel_param(1, '22000000', 11264000, '2/3', 1, 0);
        _set_channel_param(1, '27500000', 11307000, '2/3', 1, 0);
        _set_channel_param(1, '27500000', 11307000, '2/3', 2, 0);
        _set_channel_param(1, '27500000', 11343000, '2/3', 2, 0);
        _set_channel_param(1, '22000000', 11344000, '2/3', 1, 0);
        _set_channel_param(1, '27500000', 11389000, '2/3', 1, 0);
        _set_channel_param(1, '27500000', 11389000, '2/3', 2, 0);
        _set_channel_param(1, '27500000', 11426000, '2/3', 2, 0);
        _set_channel_param(1, '27500000', 11428000, '2/3', 1, 0);
        _set_channel_param(1, '27500000', 11469000, '2/3', 1, 0);
        _set_channel_param(1, '27500000', 11508000, '2/3', 1, 0);
        _set_channel_param(1, '27500000', 11527000, '2/3', 2, 0);
        _set_channel_param(1, '27500000', 11546000, '2/3', 1, 0);
        _set_channel_param(1, '27500000', 11565000, '2/3', 2, 0);
        _set_channel_param(1, '27500000', 11585000, '2/3', 1, 0);
        _set_channel_param(1, '27500000', 11604000, '2/3', 2, 0);
        _set_channel_param(1, '27500000', 11623000, '2/3', 1, 0);
        _set_channel_param(1, '27500000', 11642000, '2/3', 2, 0);
        _set_channel_param(1, '27500000', 11662000, '2/3', 1, 0);
        _set_channel_param(1, '27500000', 11681000, '2/3', 2, 0);
        _set_channel_param(1, '27500000', 11720000, '2/3', 1, 0);
        _set_channel_param(1, '27500000', 11739000, '2/3', 2, 0);
        _set_channel_param(1, '27500000', 11758000, '2/3', 1, 0);
        _set_channel_param(1, '27500000', 11817000, '2/3', 2, 0);
        _set_channel_param(1, '27500000', 11836000, '2/3', 1, 0);
        _set_channel_param(1, '27500000', 11856000, '2/3', 2, 0);
        _set_channel_param(1, '27500000', 11876000, '2/3', 1, 0);
        _set_channel_param(1, '27500000', 11895000, '2/3', 2, 0);
        _set_channel_param(1, '27500000', 11914000, '2/3', 1, 0);
        _set_channel_param(1, '27500000', 11934000, '2/3', 2, 0);
        _set_channel_param(1, '27500000', 11954000, '2/3', 1, 0);
        _set_channel_param(1, '27500000', 11973000, '2/3', 2, 0);
        _set_channel_param(1, '27500000', 11992000, '2/3', 1, 0);
        _set_channel_param(1, '27500000', 12012000, '2/3', 2, 0);
        _set_channel_param(1, '27500000', 12032000, '2/3', 1, 0);
        _set_channel_param(1, '27500000', 12051000, '2/3', 2, 0);
        _set_channel_param(1, '27500000', 12070000, '2/3', 1, 0);
        _set_channel_param(1, '27500000', 12090000, '2/3', 2, 0);
        _set_channel_param(1, '27500000', 12110000, '2/3', 1, 0);
        _set_channel_param(1, '27500000', 12129000, '2/3', 2, 0);
        _set_channel_param(1, '27500000', 12148000, '2/3', 1, 0);
        _set_channel_param(1, '27500000', 12168000, '2/3', 2, 0);
        _set_channel_param(1, '27500000', 12188000, '2/3', 1, 0);
        _set_channel_param(1, '27500000', 12207000, '2/3', 2, 0);
        _set_channel_param(1, '27500000', 12226000, '2/3', 1, 0);
        _set_channel_param(1, '27500000', 12246000, '2/3', 2, 0);
        _set_channel_param(1, '27500000', 12266000, '2/3', 1, 0);
        _set_channel_param(1, '27500000', 12285000, '2/3', 2, 0);
        _set_channel_param(1, '27500000', 12304000, '2/3', 1, 0);
        _set_channel_param(1, '27500000', 12363000, '2/3', 2, 0);
        _set_channel_param(1, '27500000', 12382000, '2/3', 1, 0);
        _set_channel_param(1, '27500000', 12402000, '2/3', 2, 0);
        _set_channel_param(1, '27500000', 12422000, '2/3', 1, 0);
        _set_channel_param(1, '27500000', 12441000, '2/3', 2, 0);
        _set_channel_param(1, '27500000', 12460000, '2/3', 1, 0);
        _set_channel_param(1, '27500000', 12480000, '2/3', 2, 0);
*/

        channelConfig.onChannelScan = func_channelscan_event_connection_;
        channelConfig.startScan(null, scanParamCollection, 'antennaconnection');
    }

    function oipfStartScanDiseqcDetection() {
        alert('startScan - DiseqcDetection');
        _set_channel_param(1, '27500000', 11428000, '2/3', 1, 0);
        _set_channel_param(1, '23000000', 10847000, '8/9', 2, 0);
        _set_channel_param(1, '22000000', 10714000, '5/6', 1, 0);

        channelConfig.onChannelScan = func_channelscan_event_diseqc_;
        channelConfig.startScan(null, scanParamCollection, 'diseqcdetection');
    }

    function oipfStartScanFSatUserScan() {
        alert('startScan - fsatuserscan');
        _set_channel_param(1, '27500000', 11428000, '2/3', 1, 0);
        channelScanOptions.channelType = 0;
        channelScanOptions.casType = 0;
        channelScanOptions.replaceExisting = 0;
        channelScanOptions.enableNetworkScan = false;

        channelConfig.onChannelScan = func_channelscan_event_usercustom;
        channelConfig.startScan(channelScanOptions, scanParamCollection, 'fsatuserscan');

        _custom_search_page = this;
    }

    function oipfCreateAntennaInfo() {
        var antCollection = oipfConf.localSystem.antennaInfoLists;
        var antInfo, antId;

        antId = antCollection.createAntennaInfo();
        antInfo = antCollection.getAntennaInfo(antId);

        antInfo.satelliteType = 'MyTestSatellite';
        antInfo.satelliteName = 'MyTestSatelliteName';
        antInfo.antennaType = antInfo.TYPE_LNB;
        antInfo.lnbFrequency = antInfo.LNBFREQ_UNIVERSAL;
        antInfo.commit();
    }

    function set_autosearch_channel_param(SR, Freq) {
        var channelScanParams = channelConfig.createChannelScanParametersObject(11);

        channelScanParams.symbolRate = SR;
        channelScanParams.startFrequency = Freq;
        channelScanParams.endFrequency = Freq;
        channelScanParams.antennaId = 1;
        channelScanParams.antennaName = 'Astra2';
        scanParamCollection.addChannelScanParam(channelScanParams);
    }

    scanParamCollection = channelConfig.createChannelScanParametersObject();
    channelScanParams = channelConfig.createChannelScanParametersObject(11);
    //  Satellite Type
    channelScanOptions = channelConfig.createChannelScanOptionsObject();

    data = add_table_head('Channel Search Test');
    data += add_oipfObject_info('channelScanOptions', channelScanOptions, CONST_CHANNELSCANOPTIONS_CLASS);
    data += add_oipfObject_info('channelScanParams', 0);
    data += add_oipfObject_info('dummy', 0);

    data += add_oipfObject_info('startScan - normal', oipfStartScanNormal, CONST_FUNCTION_CLASS);
    data += add_oipfObject_info('startScan - tuneonly', oipfStartScanTryTune, CONST_FUNCTION_CLASS);
    data += add_oipfObject_info('startscan - antennaconnection', oipfStartScanAntennaConnection, CONST_FUNCTION_CLASS);
    data += add_oipfObject_info('startScan - diseqcDetection', oipfStartScanDiseqcDetection, CONST_FUNCTION_CLASS);
    data += add_oipfObject_info('startScan - custom', oipfStartScanFSatUserScan, CONST_FUNCTION_CLASS);
    data += add_oipfObject_info('stopScan', oipfStopScan, CONST_FUNCTION_CLASS);
    data += add_oipfObject_info('controlScan - pause', oipfControlScanPause, CONST_FUNCTION_CLASS);
    data += add_oipfObject_info('controlScan - resume', oipfControlScanResume, CONST_FUNCTION_CLASS);
    data += add_oipfObject_info('controlScan - load', oipfControlScanLoad, CONST_FUNCTION_CLASS);
    data += add_oipfObject_info('controlScan - save', oipfControlScanSave, CONST_FUNCTION_CLASS);

    data += add_oipfObject_info('createAntennaInfo', oipfCreateAntennaInfo, CONST_FUNCTION_CLASS);
    data += add_oipfObject_info('AntennaCollection', oipfConf.localSystem.antennaInfoLists, CONST_ANTENNAINFOLISTS_CLASS);

    //data += add_oipfObject_info('startScan', oipfStartScan, CONST_FUNCTION_CLASS);
    //data += add_oipfObject_info('stopScan', oipfStopScan, CONST_FUNCTION_CLASS);
    //data += add_oipfObject_info('commitScan', oipfCommitScanSave, CONST_FUNCTION_CLASS);
    //data += add_oipfObject_info('startTune', oipfStartTune, CONST_FUNCTION_CLASS);
    //data += add_oipfObject_info('stopTune', oipfStopTune, CONST_FUNCTION_CLASS);

    data += add_table_tail();
    data += add_table_explain('Channel Search ---> Step.1: startScan-Normal ----> Step.2: controlScan-Load');
    data += add_table_explain('----> Step.3: controlScan-Save ----> Step.4: StopScan');

    return data;
}

function oipfCommitDiseqcDetection() {
    alert('oipfCommitDiseqcDetection');
    channelConfig.commitDiseqcConnection();

    window.location.reload();
}

function func_channelscan_event_diseqc(type, progress, frequency, signalStrength, channelNumber, channelType, channelCount, transponderCount) {
    var data;

    data = add_table_head('onChannelScan Event');
    data += add_oipfObject_info('type', type);
    data += add_oipfObject_info('progress', progress);
    data += add_oipfObject_info('channelCount', channelCount);
    data += add_oipfObject_info('transponderCount', transponderCount);
    data += add_oipfObject_info('frequency', frequency);
    data += add_oipfObject_info('signalStrength', signalStrength);
    data += add_oipfObject_info('channelType', channelType);
    data += add_oipfObject_info('channelNumber', channelNumber);
    data += add_table_tail();

    $('#oipfTestEvent').html(data);

    data = 'onChannelScan : type(' + type + '), progress(' + progress + '), channelCount(' + channelCount + '), transponderCount(' + transponderCount + ')';
    $('#oipfEventId').html(data);

    if (progress == 100) {
        alert('func_channelscan_event_diseqc.' + ' progress = ' + progress + ' chCount = ' + channelCount);
        alert(data);

        oipfCommitDiseqcDetection();
    }

}

function load_diseqcdetectiontest_info() {
    var data;
    var scanParamCollection;

    function _set_channel_param(sr, freq, coderate, polar, modul) {
        var channelScanParams = channelConfig.createChannelScanParametersObject(11);

        channelScanParams.symbolRate = sr;
        channelScanParams.startFrequency = freq;
        channelScanParams.endFrequency = freq;
        channelScanParams.antennaId = GetFreesatAntennaId();
        channelScanParams.antennaName = 'Astra2';
        channelScanParams.codeRate = coderate;
        channelScanParams.polarisation = polar;
        channelScanParams.modulationModes = modul;

        scanParamCollection.addChannelScanParam(channelScanParams);

    }

    function oipfStartDiseqcDetection() {
        alert('start DiSEqC Connection.');
        channelConfig.onChannelScan = func_channelscan_event_diseqc;
        //          channelConfig.startScan(channelScanOptions, channelScanParams);
        channelConfig.startDiseqcConnection(scanParamCollection);
    }

    function oipfStopDiseqcDetection() {
        alert('stop DiSEqC Connection');
        channelConfig.stopDiseqcConnection();
    }

    scanParamCollection = channelConfig.createChannelScanParametersObject();

    /* Home TP?�좎룞��?�좎럩��???�좎럩��?? �잙갭梨�?繞벿살탳??TP?�좎룞��?�좎럩��??�좎럩�ε뜝占�. */
    _set_channel_param('27500000', 11428000, '2/3', 1, 0);
    _set_channel_param('23000000', 10847000, '8/9', 2, 0);
    _set_channel_param('22000000', 10714000, '5/6', 1, 0);
    //_set_channel_param('22000000', 10803000, '5/6', 1, 0);
    //_set_channel_param('22000000', 10906000, '5/6', 1, 0);
    //_set_channel_param('22000000', 10758000, '5/6', 2, 0);
    //_set_channel_param('22000000', 10729000, '5/6', 2, 0);
    //_set_channel_param('22000000', 10773000, '5/6', 1, 0);
    //_set_channel_param('22000000', 10832000, '5/6', 1, 0);

    /*
     _set_channel_param('22000000', 10714000, '5/6', 1, 0);
     _set_channel_param('22000000', 10729000, '5/6', 2, 0);
     _set_channel_param('22000000', 10744000, '5/6', 1, 0);
     _set_channel_param('22000000', 10758000, '5/6', 2, 0);
     _set_channel_param('22000000', 10773000, '5/6', 1, 0);
     _set_channel_param('22000000', 10788000, '5/6', 2, 0);
     _set_channel_param('22000000', 10803000, '5/6', 1, 0);
     _set_channel_param('22000000', 10818000, '5/6', 2, 0);
     _set_channel_param('22000000', 10832000, '5/6', 1, 0);
     _set_channel_param('22000000', 10847000, '5/6', 2, 0);
     _set_channel_param('22000000', 10862000, '5/6', 1, 0);
     _set_channel_param('22000000', 10876000, '5/6', 2, 0);
     _set_channel_param('22000000', 10891000, '5/6', 1, 0);
     _set_channel_param('22000000', 10906000, '5/6', 2, 0);
     _set_channel_param('22000000', 10921000, '5/6', 1, 0);
     _set_channel_param('22000000', 10936000, '5/6', 2, 0);
     _set_channel_param('27500000', 11222000, '2/3', 1, 0);
     _set_channel_param('27500000', 11222000, '2/3', 2, 0);
     _set_channel_param('27500000', 11260000, '2/3', 2, 0);
     _set_channel_param('22000000', 11264000, '2/3', 1, 0);
     _set_channel_param('27500000', 11307000, '2/3', 1, 0);
     _set_channel_param('27500000', 11307000, '2/3', 2, 0);
     _set_channel_param('27500000', 11343000, '2/3', 2, 0);
     _set_channel_param('22000000', 11344000, '2/3', 1, 0);
     _set_channel_param('27500000', 11389000, '2/3', 1, 0);
     _set_channel_param('27500000', 11389000, '2/3', 2, 0);
     _set_channel_param('27500000', 11426000, '2/3', 2, 0);
     _set_channel_param('27500000', 11428000, '2/3', 1, 0);
     _set_channel_param('27500000', 11469000, '2/3', 1, 0);
     _set_channel_param('27500000', 11508000, '2/3', 1, 0);
     _set_channel_param('27500000', 11527000, '2/3', 2, 0);
     _set_channel_param('27500000', 11546000, '2/3', 1, 0);
     _set_channel_param('27500000', 11565000, '2/3', 2, 0);
     _set_channel_param('27500000', 11585000, '2/3', 1, 0);
     _set_channel_param('27500000', 11604000, '2/3', 2, 0);
     _set_channel_param('27500000', 11623000, '2/3', 1, 0);
     _set_channel_param('27500000', 11642000, '2/3', 2, 0);
     _set_channel_param('27500000', 11662000, '2/3', 1, 0);
     _set_channel_param('27500000', 11681000, '2/3', 2, 0);
     _set_channel_param('27500000', 11720000, '2/3', 1, 0);
     _set_channel_param('27500000', 11739000, '2/3', 2, 0);
     _set_channel_param('27500000', 11758000, '2/3', 1, 0);
     _set_channel_param('27500000', 11817000, '2/3', 2, 0);
     _set_channel_param('27500000', 11836000, '2/3', 1, 0);
     _set_channel_param('27500000', 11856000, '2/3', 2, 0);
     _set_channel_param('27500000', 11876000, '2/3', 1, 0);
     _set_channel_param('27500000', 11895000, '2/3', 2, 0);
     _set_channel_param('27500000', 11914000, '2/3', 1, 0);
     _set_channel_param('27500000', 11934000, '2/3', 2, 0);
     _set_channel_param('27500000', 11954000, '2/3', 1, 0);
     _set_channel_param('27500000', 11973000, '2/3', 2, 0);
     _set_channel_param('27500000', 11992000, '2/3', 1, 0);
     _set_channel_param('27500000', 12012000, '2/3', 2, 0);
     _set_channel_param('27500000', 12032000, '2/3', 1, 0);
     _set_channel_param('27500000', 12051000, '2/3', 2, 0);
     _set_channel_param('27500000', 12070000, '2/3', 1, 0);
     _set_channel_param('27500000', 12090000, '2/3', 2, 0);
     _set_channel_param('27500000', 12110000, '2/3', 1, 0);
     _set_channel_param('27500000', 12129000, '2/3', 2, 0);
     _set_channel_param('27500000', 12148000, '2/3', 1, 0);
     _set_channel_param('27500000', 12168000, '2/3', 2, 0);
     _set_channel_param('27500000', 12188000, '2/3', 1, 0);
     _set_channel_param('27500000', 12207000, '2/3', 2, 0);
     _set_channel_param('27500000', 12226000, '2/3', 1, 0);
     _set_channel_param('27500000', 12246000, '2/3', 2, 0);
     _set_channel_param('27500000', 12266000, '2/3', 1, 0);
     _set_channel_param('27500000', 12285000, '2/3', 2, 0);
     _set_channel_param('27500000', 12304000, '2/3', 1, 0);
     _set_channel_param('27500000', 12363000, '2/3', 2, 0);
     _set_channel_param('27500000', 12382000, '2/3', 1, 0);
     _set_channel_param('27500000', 12402000, '2/3', 2, 0);
     _set_channel_param('27500000', 12422000, '2/3', 1, 0);
     _set_channel_param('27500000', 12441000, '2/3', 2, 0);
     _set_channel_param('27500000', 12460000, '2/3', 1, 0);
     _set_channel_param('27500000', 12480000, '2/3', 2, 0);
     _set_channel_param('2894000', 12510000, '3/4', 2, 0);
     _set_channel_param('3332000', 12529000, '1/2', 2, 0);
     _set_channel_param('2893000', 12546000, '3/4', 2, 0);
     _set_channel_param('2170000', 12564000, '3/4', 2, 0);
     _set_channel_param('2200000', 12567000, '5/6', 2, 0);
     _set_channel_param('2894000', 12571000, '3/4', 2, 0);
     _set_channel_param('2894000', 12575000, '3/4', 2, 0);
     _set_channel_param('6111000', 12593000, '3/4', 2, 0);
     _set_channel_param('6111000', 12602000, '3/4', 2, 0);
     _set_channel_param('27500000', 12607000, '3/4', 1, 0);
     _set_channel_param('6111000', 12611000, '3/4', 2, 0);
     _set_channel_param('6111000', 12620000, '3/4', 2, 0);
     _set_channel_param('6111000', 12629000, '3/4', 2, 0);
     _set_channel_param('6111000', 12638000, '3/4', 2, 0);
     _set_channel_param('27500000', 12643000, '3/4', 1, 0);
     _set_channel_param('6111000', 12647000, '3/4', 2, 0);
     _set_channel_param('6000000', 12656000, '3/4', 2, 0);
     */

    data = add_table_head('DiSEqC Detection');
    data += add_oipfObject_info('start Detection', oipfStartDiseqcDetection, CONST_FUNCTION_CLASS);
    data += add_oipfObject_info('stop Dectection', oipfStopDiseqcDetection, CONST_FUNCTION_CLASS);

    data += add_table_tail();

    return data;

}

function func_channelscan_event_connection(type, progress, frequency, signalStrength, channelNumber, channelType, channelCount, transponderCount) {
    var data;

    data = add_table_head('onChannelScan Event');
    data += add_oipfObject_info('type', type);
    data += add_oipfObject_info('progress', progress);
    data += add_oipfObject_info('connectionType', channelCount);
    data += add_table_tail();

    $('#oipfTestEvent').html(data);

    data = 'onChannelScan : type(' + type + '), progress(' + progress + '), connectionType(' + channelCount + ')';
    $('#oipfEventId').html(data);

    alert('func_channelscan_event_connection.');
    alert(data);

    if (progress == 100) {
        alert('stop Antenna Connection');
        /* ?�좎럩�먲쭗��굲 value ?�좎럩猷�??�좎럩�ζ��쇱굲 ?�좎럩�롦틦�우굲 ?�좎럩猷��좎뜴���좎럩���좎럩猷�?channelCount ?�좎럩猷�?connection type ?�좎럩猷��좎뜴���좎럩��?�좎럩猷��좎뜴���좎럩�뺝뜝占썲뜝�숈삕�좑옙*/
        oipfConf.localSystem.antennaInfoLists.setConnectionType(channelCount);
        channelConfig.stopAntennaConnection();
    }

}

function load_antennaconnection_info() {
    var data;
    var scanParamCollection;

    function _set_channel_param(sr, freq, coderate, polar, modul) {
        var channelScanParams = channelConfig.createChannelScanParametersObject(11);

        channelScanParams.symbolRate = sr;
        channelScanParams.startFrequency = freq;
        channelScanParams.endFrequency = freq;
        channelScanParams.antennaId = GetFreesatAntennaId();
        channelScanParams.antennaName = 'Astra2';
        channelScanParams.codeRate = coderate;
        channelScanParams.polarisation = polar;
        channelScanParams.modulationModes = modul;

        scanParamCollection.addChannelScanParam(channelScanParams);

    }

    function oipfStartConnectionDetection() {
        alert('start Antenna Connection.');
        channelConfig.onChannelScan = func_channelscan_event_connection;
        //          channelConfig.startScan(channelScanOptions, channelScanParams);
        channelConfig.startAntennaConnection(scanParamCollection);
    }

    function oipfStopConnectionDetection() {
        alert('stop Antenna Connection');
        channelConfig.stopAntennaConnection();
    }

    scanParamCollection = channelConfig.createChannelScanParametersObject();

    /* Home TP?�좎룞��?�좎럩��???�좎럩��?? �잙갭梨�?繞벿살탳??TP?�좎룞��?�좎럩��??�좎럩�ε뜝占�. */
    _set_channel_param('27500000', 11428000, '3/4', 1, 0);
    _set_channel_param('23000000', 10847000, '8/9', 2, 0);
    _set_channel_param('22000000', 10714000, '5/6', 1, 0);
    _set_channel_param('22000000', 10803000, '5/6', 1, 0);
    _set_channel_param('22000000', 10906000, '5/6', 1, 0);
    _set_channel_param('22000000', 10758000, '5/6', 2, 0);
    _set_channel_param('22000000', 10729000, '5/6', 2, 0);
    _set_channel_param('22000000', 10773000, '5/6', 1, 0);
    _set_channel_param('22000000', 10832000, '5/6', 1, 0);
    _set_channel_param('22000000', 10714000, '5/6', 1, 0);
    _set_channel_param('22000000', 10729000, '5/6', 2, 0);
    _set_channel_param('22000000', 10744000, '5/6', 1, 0);
    _set_channel_param('22000000', 10758000, '5/6', 2, 0);
    _set_channel_param('22000000', 10773000, '5/6', 1, 0);
    _set_channel_param('22000000', 10788000, '5/6', 2, 0);
    _set_channel_param('22000000', 10803000, '5/6', 1, 0);
    _set_channel_param('22000000', 10818000, '5/6', 2, 0);
    _set_channel_param('22000000', 10832000, '5/6', 1, 0);
    _set_channel_param('22000000', 10847000, '5/6', 2, 0);
    _set_channel_param('22000000', 10862000, '5/6', 1, 0);
    _set_channel_param('22000000', 10876000, '5/6', 2, 0);
    _set_channel_param('22000000', 10891000, '5/6', 1, 0);
    _set_channel_param('22000000', 10906000, '5/6', 2, 0);
    _set_channel_param('22000000', 10921000, '5/6', 1, 0);
    _set_channel_param('22000000', 10936000, '5/6', 2, 0);
    _set_channel_param('27500000', 11222000, '2/3', 1, 0);
    _set_channel_param('27500000', 11222000, '2/3', 2, 0);
    _set_channel_param('27500000', 11260000, '2/3', 2, 0);
    _set_channel_param('22000000', 11264000, '2/3', 1, 0);
    _set_channel_param('27500000', 11307000, '2/3', 1, 0);
    _set_channel_param('27500000', 11307000, '2/3', 2, 0);
    _set_channel_param('27500000', 11343000, '2/3', 2, 0);
    _set_channel_param('22000000', 11344000, '2/3', 1, 0);
    _set_channel_param('27500000', 11389000, '2/3', 1, 0);
    _set_channel_param('27500000', 11389000, '2/3', 2, 0);
    _set_channel_param('27500000', 11426000, '2/3', 2, 0);
    _set_channel_param('27500000', 11428000, '2/3', 1, 0);
    _set_channel_param('27500000', 11469000, '2/3', 1, 0);
    _set_channel_param('27500000', 11508000, '2/3', 1, 0);
    _set_channel_param('27500000', 11527000, '2/3', 2, 0);
    _set_channel_param('27500000', 11546000, '2/3', 1, 0);
    _set_channel_param('27500000', 11565000, '2/3', 2, 0);
    _set_channel_param('27500000', 11585000, '2/3', 1, 0);
    _set_channel_param('27500000', 11604000, '2/3', 2, 0);
    _set_channel_param('27500000', 11623000, '2/3', 1, 0);
    _set_channel_param('27500000', 11642000, '2/3', 2, 0);
    _set_channel_param('27500000', 11662000, '2/3', 1, 0);
    _set_channel_param('27500000', 11681000, '2/3', 2, 0);
    _set_channel_param('27500000', 11720000, '2/3', 1, 0);
    _set_channel_param('27500000', 11739000, '2/3', 2, 0);
    _set_channel_param('27500000', 11758000, '2/3', 1, 0);
    _set_channel_param('27500000', 11817000, '2/3', 2, 0);
    _set_channel_param('27500000', 11836000, '2/3', 1, 0);
    _set_channel_param('27500000', 11856000, '2/3', 2, 0);
    _set_channel_param('27500000', 11876000, '2/3', 1, 0);
    _set_channel_param('27500000', 11895000, '2/3', 2, 0);
    _set_channel_param('27500000', 11914000, '2/3', 1, 0);
    _set_channel_param('27500000', 11934000, '2/3', 2, 0);
    _set_channel_param('27500000', 11954000, '2/3', 1, 0);
    _set_channel_param('27500000', 11973000, '2/3', 2, 0);
    _set_channel_param('27500000', 11992000, '2/3', 1, 0);
    _set_channel_param('27500000', 12012000, '2/3', 2, 0);
    _set_channel_param('27500000', 12032000, '2/3', 1, 0);
    _set_channel_param('27500000', 12051000, '2/3', 2, 0);
    _set_channel_param('27500000', 12070000, '2/3', 1, 0);
    _set_channel_param('27500000', 12090000, '2/3', 2, 0);
    _set_channel_param('27500000', 12110000, '2/3', 1, 0);
    _set_channel_param('27500000', 12129000, '2/3', 2, 0);
    _set_channel_param('27500000', 12148000, '2/3', 1, 0);
    _set_channel_param('27500000', 12168000, '2/3', 2, 0);
    _set_channel_param('27500000', 12188000, '2/3', 1, 0);
    _set_channel_param('27500000', 12207000, '2/3', 2, 0);
    _set_channel_param('27500000', 12226000, '2/3', 1, 0);
    _set_channel_param('27500000', 12246000, '2/3', 2, 0);
    _set_channel_param('27500000', 12266000, '2/3', 1, 0);
    _set_channel_param('27500000', 12285000, '2/3', 2, 0);
    _set_channel_param('27500000', 12304000, '2/3', 1, 0);
    _set_channel_param('27500000', 12363000, '2/3', 2, 0);
    _set_channel_param('27500000', 12382000, '2/3', 1, 0);
    _set_channel_param('27500000', 12402000, '2/3', 2, 0);
    _set_channel_param('27500000', 12422000, '2/3', 1, 0);
    _set_channel_param('27500000', 12441000, '2/3', 2, 0);
    _set_channel_param('27500000', 12460000, '2/3', 1, 0);
    _set_channel_param('27500000', 12480000, '2/3', 2, 0);
    /*
     _set_channel_param('2894000', 12510000, '3/4', 2, 0);
     _set_channel_param('3332000', 12529000, '1/2', 2, 0);
     _set_channel_param('2893000', 12546000, '3/4', 2, 0);
     _set_channel_param('2170000', 12564000, '3/4', 2, 0);
     _set_channel_param('2200000', 12567000, '5/6', 2, 0);
     _set_channel_param('2894000', 12571000, '3/4', 2, 0);
     _set_channel_param('2894000', 12575000, '3/4', 2, 0);
     _set_channel_param('6111000', 12593000, '3/4', 2, 0);
     _set_channel_param('6111000', 12602000, '3/4', 2, 0);
     _set_channel_param('27500000', 12607000, '3/4', 1, 0);
     _set_channel_param('6111000', 12611000, '3/4', 2, 0);
     _set_channel_param('6111000', 12620000, '3/4', 2, 0);
     _set_channel_param('6111000', 12629000, '3/4', 2, 0);
     _set_channel_param('6111000', 12638000, '3/4', 2, 0);
     _set_channel_param('27500000', 12643000, '3/4', 1, 0);
     _set_channel_param('6111000', 12647000, '3/4', 2, 0);
     _set_channel_param('6000000', 12656000, '3/4', 2, 0);
     */
    data = add_table_head('Antenna connection Detection');
    data += add_oipfObject_info('start Detection', oipfStartConnectionDetection, CONST_FUNCTION_CLASS);
    data += add_oipfObject_info('stop Dectection', oipfStopConnectionDetection, CONST_FUNCTION_CLASS);

    data += add_table_tail();

    return data;

}

function oipfStopUserCustomSearch() {
    alert('stopFSatUserCustomScan');
    channelConfig.stopFSatUserCustomScan();
}

function func_channelscan_event_userCustomSearch(type, progress, frequency, signalStrength, channelNumber, channelType, channelCount, transponderCount, searchedInfos) {

    if (progress == 100) {
        alert('stopFSatUserCustomScan');
        oipfStopUserCustomSearch();
        _fsat_custom_searchedInfos = searchedInfos;
        fsat_refresh_custom_search_channel_list(_custom_search_page);
    }

}

function load_userCustomSearchTest_info() {
    var data;
    var scanParamCollection, channelScanOptions;

    function _set_channel_param(sr, freq, coderate, polar, modul) {
        var channelScanParams = channelConfig.createChannelScanParametersObject(11);

        channelScanParams.symbolRate = sr;
        channelScanParams.startFrequency = freq;
        channelScanParams.endFrequency = freq;
        channelScanParams.antennaId = GetFreesatAntennaId();
        channelScanParams.antennaName = 'Astra2';
        channelScanParams.codeRate = coderate;
        channelScanParams.polarisation = polar;
        channelScanParams.modulationModes = modul;

        scanParamCollection.addChannelScanParam(channelScanParams);

    }

    function oipfStartUserCustomSearch() {
        alert('start User Custom Search.');
        channelConfig.onChannelScan = func_channelscan_event_userCustomSearch;
        //          channelConfig.startScan(channelScanOptions, channelScanParams);
        channelConfig.startFSatUserCustomScan(channelScanOptions, scanParamCollection);
    }

    function oipfStopUserCustomSearch() {
        alert('stopFSatUserCustomScan');
        channelConfig.stopFSatUserCustomScan();
    }

    function oipfSetFreesatCustomSearchFreq() {
        _set_channel_param('27500000', 11428000, '2/3', 1, 0);
        channelScanOptions.channelType = 0;
        channelScanOptions.casType = 0;
        channelScanOptions.replaceExisting = 0;
        channelScanOptions.enableNetworkScan = false;
    }

    scanParamCollection = channelConfig.createChannelScanParametersObject();
    channelScanOptions = channelConfig.createChannelScanOptionsObject();

    /* Home TP?�좎룞��?�좎럩��???�좎럩��?? �잙갭梨�?繞벿살탳??TP?�좎룞��?�좎럩��??�좎럩�ε뜝占�. */
    oipfSetFreesatCustomSearchFreq();

    data = add_table_head('User Custom Search');
    data += add_oipfObject_info('start Search', oipfStartUserCustomSearch, CONST_FUNCTION_CLASS);
    data += add_oipfObject_info('stop Search', oipfStopUserCustomSearch, CONST_FUNCTION_CLASS);

    data += add_table_tail();

    _custom_search_page = this;

    return data;

}

var _fsat_custom_channel_list_start_index = 0;

function fsat_refresh_custom_search_channel_list(o) {
    _fsat_custom_channel_list_start_index += 50;
    if (_fsat_custom_channel_list_start_index > _fsat_custom_searchedInfos.length)
        _fsat_custom_channel_list_start_index = 0;
    document.getElementById('oipfTestItem').innerHTML = load_channellist_userCustomSearch_via_oipf();
}

function load_channellist_userCustomSearch_via_oipf() {
    var data, cnt, i;

    data = '<table class="list_table"><caption>User Customizable Channel List (from : ' + _fsat_custom_channel_list_start_index + ')</caption>';
    data += '<thead>';
    data += '<tr><th>LCN</th><th>Name</th><th>LCN</th><th>Name</th><th>LCN</th><th>Name</th><th>LCN</th><th>Name</th><th>LCN</th><th>Name</th></tr>';
    data += '</thead>';
    data += '<tbody>';

    i = _fsat_custom_channel_list_start_index;
    cnt = 50;
    if ((i + cnt) >= _fsat_custom_searchedInfos.length)
        cnt = _fsat_custom_searchedInfos.length - i;

    for ( i = 0; i < cnt; i++) {
        var lcn = _fsat_custom_searchedInfos.getInfo(i + _fsat_custom_channel_list_start_index, "lcn");
        var name = _fsat_custom_searchedInfos.getInfo(i + _fsat_custom_channel_list_start_index, "name");

        if ((i % 5) == 0)
            data += '<tr>';
        data += '<th>' + lcn + '</th><th id="' + '" onclick="select_channel(this)">' + name + '</th>';
        if ((i % 5) == 4)
            data += '</tr>';
    }

    data += '</tbody>';
    data += '</table>';

    if (cnt < _fsat_custom_searchedInfos.length)
        data += '<p onclick="fsat_refresh_custom_search_channel_list(this);">more table is existed...</p>';

    return data;
}

function load_parentalratingtest_info() {
    var pcman = parentalRatingmanager;
    var data;
    var curPincode = '0000';

    function _setParentalControlStatus_false() {
        data = 'setParentalControlStatus result : ' + pcman.setParentalControlStatus(curPincode, false);
        $('#oipfResultId').html(data);
    }

    function _setParentalControlStatus_true() {
        data = 'setParentalControlStatus result : ' + pcman.setParentalControlStatus(curPincode, true);
        $('#oipfResultId').html(data);
    }

    function _getParentalControlStatus() {
        data = 'getParentalControlStatus result : ' + pcman.getParentalControlStatus();
        $('#oipfResultId').html(data);
    }

    function _getBlockUnrated() {
        data = 'getBlockUnrated result : ' + pcman.getBlockUnrated();
        $('#oipfResultId').html(data);
    }

    function _setParentalControlPIN_to1111() {
        var newPincode = '1111';
        data = 'setParentalControlPIN result : ' + pcman.setParentalControlPIN(curPincode, newPincode);
        $('#oipfResultId').html(data);
    }

    function _setParentalControlPIN_to0000() {
        var newPincode = '0000';
        data = 'setParentalControlPIN result : ' + pcman.setParentalControlPIN(curPincode, newPincode);
        $('#oipfResultId').html(data);
    }

    function _unlockWithParentalControlPIN() {
        $('#oipfResultId').html('not supported...');
    }

    function _verifyParentalControlPIN() {
        data = 'verifyParentalControlPIN result : ' + pcman.verifyParentalControlPIN(curPincode);
        $('#oipfResultId').html(data);
    }

    function _setBlockUnrated_true() {
        data = 'setBlockUnrated result : ' + pcman.setBlockUnrated(curPincode, true);
        $('#oipfResultId').html(data);
    }

    function _setBlockUnrated_false() {
        data = 'setBlockUnrated result : ' + pcman.setBlockUnrated(curPincode, false);
        $('#oipfResultId').html(data);
    }

    function _changePINto0000() {
        curPincode = '0000';
        data = 'curPincode : ' + curPincode;
        $('#oipfResultId').html(data);
    }

    function _changePINto1111() {
        curPincode = '1111';
        data = 'curPincode : ' + curPincode;
        $('#oipfResultId').html(data);
    }

    data = add_table_head('oipfParentalControlManager Object V2.1');
    alert(pcman.parentalRatingSchemes);
    data += add_oipfObject_info('parentalRatingSchemes', pcman.parentalRatingSchemes, CONST_PARENTALRATINGSCHEME_COLLECTION);
    data += add_oipfObject_info('isPINEntryLocked', pcman.isPINEntryLocked);
    data += add_oipfObject_info('setParentalControlStatus_toTrue', _setParentalControlStatus_true, CONST_FUNCTION_CLASS);
    data += add_oipfObject_info('setParentalControlStatus_toFalse', _setParentalControlStatus_false, CONST_FUNCTION_CLASS);
    data += add_oipfObject_info('getParentalControlStatus', _getParentalControlStatus, CONST_FUNCTION_CLASS);
    data += add_oipfObject_info('getBlockUnrated', _getBlockUnrated, CONST_FUNCTION_CLASS);
    data += add_oipfObject_info('setParentalControlPIN_to1111', _setParentalControlPIN_to1111, CONST_FUNCTION_CLASS);
    data += add_oipfObject_info('setParentalControlPIN_to0000', _setParentalControlPIN_to0000, CONST_FUNCTION_CLASS);
    data += add_oipfObject_info('unlockWithParentalControlPIN', _unlockWithParentalControlPIN, CONST_FUNCTION_CLASS);
    data += add_oipfObject_info('verifyParentalControlPIN', _verifyParentalControlPIN, CONST_FUNCTION_CLASS);
    data += add_oipfObject_info('setBlockUnrated_toTrue', _setBlockUnrated_true, CONST_FUNCTION_CLASS);
    data += add_oipfObject_info('setBlockUnrated_toFalse', _setBlockUnrated_false, CONST_FUNCTION_CLASS);
    data += add_oipfObject_info('changeCurPIN_to_0000(not oipf function, just integer change)', _changePINto0000, CONST_FUNCTION_CLASS);
    data += add_oipfObject_info('changeCurPIN_to_1111(not oipf function, just integer change)', _changePINto1111, CONST_FUNCTION_CLASS);
    data += add_table_tail();

    return data;
}

function click_submenu_unittest(o) {

    switch (o.id) {
        case 'UnitTestApplicationManager':
            document.location.href = "./unittest/oipf.applicationmanager.html";
            break;
        case 'UnitTestApplicationManagerWidget':
            document.location.href = "./unittest/oipf.widget.html";
            break;
        case 'UnitTestEngineConfig':
            document.location.href = "./unittest/engine.config.html";
            break;
        case 'UnitTestEngineLocalStorage':
            document.location.href = "./unittest/engine.localstorage.html";
            break;
        case 'UnitTestOipfHumaxStorageUtil':
            document.location.href = "./unittest/oipf.hmxstorageutil2.html";
            break;
        case 'UnitTestOipfMeta':
            document.location.href = "./unittest/oipf.metadata.html";
            break;
        case 'UnitTestOipfVideoBroadcast':
            document.location.href = "./unittest/oipf.videobroadcast.html";
            break;
        /*case 'UnitTestOipfVideoBroadcast.sugar':
            document.location.href = "./unittest/oipf.videobroadcast.sugar.html";
            break;  */
        case 'UnitTestOipfRecordingScheduler':
            document.location.href = "./unittest/oipf.recordingscheduler.html";
            break;
        case 'UnitTestOipfChannelConfig':
            document.location.href = "./unittest/oipf.channelconfig.html";
            break;
        case 'UnitTestOipfVOD':
            document.location.href = "./unittest/oipf.vod.html";
            break;
        case 'UnitTestOipfParentalControl':
            document.location.href = "./unittest/oipf.parentalcontrol.html";
            break;
        case 'UnitTestHmxDFBStress':
            document.location.href = "./unittest/dfb/test.html";
            break;
        case 'UnitTestHmxCasUi':
            document.location.href = "./unittest/oipf.hcasui.html";
            break;
        case 'UnitTestDRMAgent':
        	document.location.href = "./unittest/oipf.DRMAgent.html";
        	break;
        case 'UnitTestdHDlna':
        	document.location.href = "./unittest/dlna.html";
        	break;
    	case 'UnitTestFavouriteList':
            document.location.href = "./unittest/oipf.favouriteList.html";
            break;
    	case 'UnitTestBluetooth':
            document.location.href = "./unittest/oipf.bluetoothmanager.html";
        	break;
    	case 'UnitTestFTP':
            document.location.href = "./unittest/oipf.ftpmanager.html";
        	break;
    	case 'UnitTestSamba':
            document.location.href = "./unittest/oipf.sambamanager.html";
        	break;
        case 'ChRemove_Channelconfig':
            document.location.href = "./unittest/chRemove.channelConfig.html";
            break;
        case 'ChRemove_Favourite':
            document.location.href = "./unittest/chRemove.favourite.html";
            break;
    }
}

function click_submenu(o) {
    var data;
    var testurl;

    __object_array.length = 0;

    switch (o.id) {
        case 'testSearchMgr':
            data = load_meta_search_mgr_info();
            break;
        case 'testMetaDataSearch':
            data = load_meta_data_search_class_info();
            break;
        case 'testQuery':
            data = load_meta_data_query_class_info();
            break;
        case 'testSearchResult':
            data = load_meta_data_search_result_class_info();
            break;
        /* begin oipf recording scheduler */

		// Asgard
		case 'testAsgard':
            testurl = "http://10.0.14.42/asgard/box";
            document.location.href = testurl;
			break;	
		case 'testAsgardAging':
			testurl = "http://10.0.14.42/aging";
			document.location.href = testurl;
			break;
		case 'testCATAL':
			testurl = "http://www.test.bbc.co.uk/catal/?config=precert&brand=humax&model=pvr_2015";
			document.location.href = testurl;
			break;
		case 'testiPlayer':
			testurl = "http://www.test.bbc.co.uk/bigscreen-iplayer-incubator/?config=precert&brand=humax&model=pvr_2015";
			document.location.href = testurl;
			break;
        //  Scenario Info
        case 'testScenarioZapping':
            data = load_channellist_via_oipf();
            break;
        case 'testDownloadTrigger':
            data = load_oipf_download_trigger_info();
            break;
        case 'testDownloadManager':
            data = load_oipf_download_manager_info();
            break;
        case 'testScenarioBookmark':
            data = load_bookmark_collection_info();
            break;
        case 'testChannelSearch':
            data = load_channelsearchtest_info();
            break;
        case 'testDiseqcDetection':
            data = load_diseqcdetectiontest_info();
            break;

        case 'testParentalRating':
            data = load_parentalratingtest_info();
            break;

        //  Class Info
        case 'testClassApplicationManager':
            data = load_oipfApplicationManager_info('OIPF Application Manager', appMgr);
            break;
        case 'testClassVideoBroadcast':
            data = load_videobroadcastclass_info('VideoBroadcastObject Info', videoBroadcast);
            break;
        case 'testClassConfiguration':
            data = load_configurationclass_info('Configuration Object Info', oipfConf.configuration);
            break;
        case 'testClassLocalSystem':
            data = load_localsystemclass_info('LocalSystem Object Info', oipfConf.localSystem);
            break;
        case 'testDownload':
            data = load_downloadclass_info('Download Object Info', oipfDownloadManager);
            /* oipfDoiwnloadManager.XXX download object ??�좎럩��?*/
            break;
        case 'testDRMControlInformation':
            data = load_drmcontrolinformationclass_info('DRMControlInformation Object Info', oipfDownloadManager);
            /* oipfDownloadManager.drmControl */
            break;
        case 'testClassParentalRatingScheme':
            data = load_parentalratingschemeclass_info('ParentalRatingSchemes Object Info', parentalRatingmanager.parentalRatingSchemes);
            break;
        case 'testClassScheduledRecordingCollection':
            data = load_scheduledrecordingcollection_info('ScheduledRecording Collection Info', oipfRecordingScheduler.getScheduledRecordings());
            break;
        case 'testClassRecordingCollection':
            data = load_recordingcollection_info('Recording Collection Info', oipfRecordingScheduler.recordings);
            break;
        case 'testMediaPlayBack':
            mediaplayback = oipfObjectFactory.createVideoMpegObject();
            data = load_mediaplayback_info('VideoMpegObject Info', mediaplayback);
            break;
        case 'testStorageUtil':
            hmxstorageutil = oipfObjectFactory.createHumaxStorageUtilObject();
            var devlist = hmxstorageutil.getPhysicalStorages();
            data = load_hmxstorageutil_info('HumaxStorageUtil Object', devlist);
            break;
        case 'testHumaxFreesat':
            hmxopfreesat = oipfObjectFactory.createHumaxOperatorFreesatObject();
            data = load_hmxopfreesat_info('HumaxFreesatInfo Object', hmxopfreesat);
            break;
        //Test ETC
        case 'testCanvas3d':
            testurl = "html5test/canvas3d.html";
            runOnChildApp(testurl, false);
            break;
        case 'appMgrTest':
            testurl = "appmgrtest/childapp.html";
            runOnChildApp(testurl, false);
            break;
        case 'testBrowserScore':
            testurl = "http://html5test.com";
            //          var testurl = "http://g2.platform.freesat.tv/ipchannels/ipchanman.php?channel=901&ui_id=3.0.1";
            runOnChildApp(testurl, true);
            break;
        case 'testKeyInput_Action':
            testurl = "keyinputtest/Javascript_Key_Event_Tester.html";
            runOnChildApp(testurl, false);
            break
        case 'testBBCiPlayerV3_Action':
            testurl = "http://host16.incubator.bbc.co.uk/iplayer/bigscreen/?device=humax-hdr-1000s#tv/featured";
            runOnChildApp(testurl, true);
            break;
        case 'testETC':
            testurl = "http://kevs3d.co.uk/dev/index.html";
            runOnChildApp(testurl, true);
            break;
        case 'testETC2':
            testurl = "http://www.hongkiat.com/blog/48-excellent-html5-demos";
            runOnChildApp(testurl, true);
            break;
        case 'MediaPlayBack Test':
            testurl = "playback.html";
            runOnChildApp(testurl, false);
            break;
        case 'testCasMenu':
            testurl = "casTest.html"
            runOnChildApp(testurl, false);
            break;
        case 'testDLNA_Action':
            testurl = "dlnaTest.html"
			document.location.href = "dlnaTest.html";
            //runOnChildApp(testurl, false);
            break;
		 case 'testDial':
            testurl = "dialTest.html"
			document.location.href = "dialTest.html";
            //runOnChildApp(testurl, false);
            break;
        case 'mediaSearchTest':
            testurl = "medialist/media_search.html";
			document.location.href = "medialist/media_search.html";
			break;
	   case 'networkTest':
    	    testurl = "network/network.html";
    	    document.location.href = "network/network.html";
	       break;
        case 'localMediaTest':
            testurl = 'medialist/contentManager.html'
            document.location.href = testurl;
            break;
		case 'woonTest':
			testurl = "medialist/woon.html";
			//runOnChildApp(testurl, false);
			document.location.href = testurl;
			break;
		//case 'dlnaTest':
			//testurl = "medialist/dlna.html";
			//runOnChildApp(testurl, false);
			//document.location.href = testurl;
			//break;
		case 'sambaTest':
			testurl = "medialist/samba.html";
			//runOnChildApp(testurl, false);
			document.location.href = testurl;
			break;
		case 'testWidget_Action':
            testurl = "widget/default.html";
            //runOnChildApp(testurl, false);
			document.location.href = testurl;
			break;
        case 'testNetwork_Action':
            testurl = "networkTest.html"
            //runOnChildApp(testurl, false);
			document.location.href = "networkTest.html";
			break;
        case 'testWebStorage_Action':
            testurl = "html5test/webStorageTest.html"
            runOnChildApp(testurl, false);
            break;
        case 'testAniPerformance':
            testurl = "./unittest/animation_performance.html"
            runOnChildApp(testurl, false);
            break;
        case 'testFont':
            testurl = "./font_test/default.html"
            runOnChildApp(testurl, false);
            break;
        //Test for Freesat
        case 'FreesatSearchTest':
            data = load_freesatsearchtest_info();
            break;

        case 'FreesatAntInfo':
            data = load_freesatAntenna_info();
            break;
        case 'FreesatShortServiceName':
            data = load_channellist_shortname_via_oipf();
            break;
        case 'FreesatUserCustomSearch':
            data = load_userCustomSearchTest_info();
            break;
        case 'OpenGL_Test_CSS':
            document.location.href = "opengl/css.html";
            break;
        case 'OpenGL_Test_JS':
            document.location.href = "opengl/js.html";
            break;
        case 'OpenGL_Test2_CSS':
            document.location.href = "opengl/css2.html";
            break;

        //Test for Unit Test
        case 'UnitTestApplicationManager':
        case 'UnitTestApplicationManagerWidget':
        case 'UnitTestEngineConfig':
        case 'UnitTestEngineLocalStorage':
        case 'UnitTestOipfHumaxStorageUtil':
        case 'UnitTestOipfMeta':
        case 'UnitTestOipfVideoBroadcast':
        //case 'UnitTestOipfVideoBroadcast.sugar':
        case 'UnitTestOipfRecordingScheduler':
        case 'UnitTestOipfChannelConfig':
        case 'UnitTestOipfVOD':
        case 'UnitTestOipfParentalControl':
        case 'UnitTestHmxDFBStress':
        case 'UnitTestHmxCasUi':
        case 'UnitTestDRMAgent':
        case 'UnitTestdHDlna':
        case 'UnitTestFavouriteList':
        case 'UnitTestBluetooth':
        case 'UnitTestFTP':
        case 'UnitTestSamba':
        case 'ChRemove_Channelconfig':
        case 'ChRemove_Favourite':
            click_submenu_unittest(o);
            break;

        case 'Back_to_Main_App':
            document.location.href = "../default.html";
            break;

        case 'Opera_About':
            document.location.href = "opera:about";
            break;

        case 'multi_font_test':
            document.location.href = "./font_test/default.html";
            break;

        /* end oipf recording scheduler */
        default:
            var item = find_menuItem(o.id);
            if (item && item.onClick)
                data = item.onClick(o);
            else
                data = 'not supported!!!';
            break;
    }
    document.getElementById('oipfTestItem').innerHTML = data;
}

function onClick_SearchManager(o) {
    var html = '';

    html += add_table_head('SearchManager (oipfSearchManager) - OIPF 2.1');
    html += add_oipfObject_info('guideDaysAvailable', oipfMetaSrch.guideDaysAvailable);

    try {
        oipfMetaSrch.onMetadataUpdate = function(action, info, object) {
            /*do nothing...*/
        };
        html += add_oipfObject_info('onMetadataUpdate', 'OK');
    } catch (err) {
        html += add_oipfObject_info('onMetadataUpdate', 'FAIL: ' + err.description);
    }
    try {
        oipfMetaSrch.onMetadataSearch = function(action, info, object) {
            /*do nothing...*/
        };
        html += add_oipfObject_info('onMetadataSearch', 'OK');
    } catch (err) {
        html += add_oipfObject_info('onMetadataSearch', 'FAIL: ' + err.description);
    }
    html += add_oipfObject_info('createSearch(1:scheduled)', oipfMetaSrch.createSearch(1));
    html += add_oipfObject_info('getChannelConfig()', oipfMetaSrch.getChannelConfig());

    html += add_table_tail();

    return html;
}

function onClick_MetadataSearch(o) {
    var html = '';

    var search = oipfMetaSrch.createSearch(1);
    if (search == null || search == undefined) {
        return 'ERROR: createSearch(1)';
    }
    html += add_table_head('MetadataSearch - OIPF 2.1');
    html += add_oipfObject_info('searchTarget', search.searchTarget);
    html += add_oipfObject_info('query', search.query);
    html += add_oipfObject_info('result', search.result);

    var query = search.createQuery('longDescription', 6, 'Steve Jobs');
    if (query) {
        html += add_oipfObject_info('createQuery(longDescription, 6, Steve Jobs)', query);
        try {
            search.setQuery(query);
            html += add_oipfObject_info('setQuery(query)', 'OK');
        } catch (err) {
            html += add_oipfObject_info('setQuery(query)', 'FAIL:' + err.description);
        }
    } else
        html += add_oipfObject_info('createQuery()', null);

    try {
        search.addRatingConstraint(null, 18);
        html += add_oipfObject_info('addRatingConstraint(o, 18)', 'OK');
    } catch (err) {
        html += add_oipfObject_info('addRatingConstraint()', 'FAIL:' + err.description);
    }

    try {
        search.addCurrentRatingConstraint();
        html += add_oipfObject_info('addCurrentRatingConstraint()', 'OK');
    } catch (err) {
        html += add_oipfObject_info('addCurrentRatingConstraint()', 'FAIL:' + err.description);
    }

    var channelList = oipfMetaSrch.getChannelConfig().channelList;

    try {
        search.addChannelConstraint(channelList);
        html += add_oipfObject_info('addChannelConst..(All)', 'OK');
    } catch (err) {
        html += add_oipfObject_info('addChannelConstraint()', 'FAIL:' + err.description);
    }

    try {
        search.addChannelConstraint(channelList.item(0));
        html += add_oipfObject_info('addChannelConstraint(' + channelList.item(0).name + ')', 'OK');
    } catch (err) {
        html += add_oipfObject_info('addChannelConstraint()', 'FAIL:' + err.description);
    }

    try {
        search.orderBy('name', true);
        html += add_oipfObject_info('orderBy("name",true)', 'OK');
    } catch (err) {
        html += add_oipfObject_info('orderBy("name",true)', 'FAIL: ' + err.description);
    }

    try {
        search.findProgrammesFromStream(channelList.item(0), new Date().getTime() / 1000, 10);
        html += add_oipfObject_info('findProgrammesFromStream()', 'OK');
    } catch (err) {
        html += add_oipfObject_info('findProgrammesFromStream()', 'FAIL: ' + err.description);
    }
    html += add_table_tail();
    return html;
}

function onClick_Query(o) {
    var html = '';

    var search = oipfMetaSrch.createSearch(1);
    if (search == null || search == undefined) {
        return 'ERROR: createSearch(1)';
    }
    html += add_table_head('Query - OIPF 2.1');

    var q1 = search.createQuery('longDescription', 6, 'Steve Jobs');
    var q2 = search.createQuery('startTime', 1, (new Date().getTime() / 1000).toString());

    html += add_oipfObject_info('and()', q1.and(q2));
    html += add_oipfObject_info('or()', q1.or(q2));
    html += add_oipfObject_info('not()', q1.not());

    html += add_table_tail();
    return html;
}

var epg = new Array();
var schedule_list = new Array();
var recording_list = new Array();
var episode_list = new Array();
var conflict_schedule_list;
var alternative_schedule_list;
var selected_programme;
var rsv_type;
var selected_index = 0;
var channel_count = 0;
var start_channel_index = 0;
var total_channel = 3;
var guide_query;
var conflict_process = 0;

function LoadRecordingList() {
    var i;
    var recordings = oipfRecordingScheduler.recordings;

    recording_list = new Array();

    if (recordings == null)
        return;

    for ( i = 0; i < recordings.length; i++) {
        if ( typeof recordings.item(i) != "undefined") {
            recording_list.push(recordings.item(i));
        }
    }

}

function LoadScheduleList() {
    var i;
    var schedules = oipfRecordingScheduler.getScheduledRecordings();

    schedule_list = new Array();

    if (schedules == null)
        return;

    for ( i = 0; i < schedules.length; i++) {
        if ( typeof schedules.item(i) != "undefined") {
            alert("add schedule : " + schedules.item(i).name);
            schedule_list.push(schedules.item(i));
        }
    }

}

function CheckReservedProgramme(programme) {
    var schedule;
    var i;

    for ( i = 0; i < schedule_list.length; i++) {
        if (programme.programmeID == schedule_list[i].programmeID && programme.channelID == schedule_list[i].channel.ccid) {
            return true;
        }
    }

    return false;
}

function CheckSeriesProgramme(programme) {
    var groupCRIDs;
    var i, crid = "";

    groupCRIDs = programme.groupCRIDs;
    if (groupCRIDs) {
        for ( i = 0; i < groupCRIDs.length; i += 1) {
            crid = groupCRIDs.item(i);
            if ('2' == crid.charAt(0)) {
                return true;
            }
        }
    }

    return false;
}

function CheckRecommendedProgramme(programme) {
    var groupCRIDs;
    var i, crid = "";

    groupCRIDs = programme.groupCRIDs;
    if (groupCRIDs) {
        for ( i = 0; i < groupCRIDs.length; i += 1) {
            crid = groupCRIDs.item(i);
            if ('3' == crid.charAt(0)) {
                return true;
            }
        }
    }

    return false;
}

function GetFirstRecommendedProgramme(programme) {
    var groupCRIDs;
    var crid = "";
    var i, recomCrid = "";

    groupCRIDs = programme.groupCRIDs;
    if (groupCRIDs) {
        for ( i = 0; i < groupCRIDs.length; i += 1) {
            crid = groupCRIDs.item(i);
            if ('3' == crid.charAt(0)) {
                recomCrid = crid;
                break;
            }
        }
    }

    return recomCrid;
}

function GetProgrammeCrid(programme) {
    var groupCRIDs, crid = "", i, programmeCrid = "";

    groupCRIDs = programme.groupCRIDs;
    if (groupCRIDs) {
        for ( i = 0; i < groupCRIDs.length; i += 1) {
            crid = groupCRIDs.item(i);
            if ('1' == crid.charAt(0)) {
                programmeCrid = crid;
                break;
            }
        }
    }

    return programmeCrid;
}

function GetSeriesCrid(programme) {
    var groupCRIDs;
    var crid = "";
    var i, programmeCrid = "";

    groupCRIDs = programme.groupCRIDs;
    if (groupCRIDs) {
        for ( i = 0; i < groupCRIDs.length; i += 1) {
            crid = groupCRIDs.item(i);
            if ('2' == crid.charAt(0)) {
                programmeCrid = crid;
                break;
            }
        }
    }

    return programmeCrid;
}

function GetChannelByCcid(ccid) {
    var i, len, channel;

    len = channelList.length;
    for ( i = 0; i < len; i += 1) {
        if (channelList.item(i).ccid == ccid) {
            channel = channelList.item(i);
            break;
        }
    }

    return channel;
}

function ConvertUnixtimeToDate(time) {
    var date = new Date();
    var msg;

    date.setTime(time * 1000);
    msg = date.getFullYear();
    msg += "/";
    msg += date.getMonth();
    msg += "/";
    msg += date.getDate();
    msg += "      ";
    msg += date.getHours();
    msg += ":";
    msg += date.getMinutes();

    return msg;
}

function rsv_process(type, programme) {
    var scheduler = oipfRecordingScheduler;

    switch (type) {
        case "2":
            //watch
            // scheduler.onPVREvent = scheduler_Event;
            scheduler.record(programme, 1);
            break;
        case "3":
            //single record
            //scheduler.onPVREvent = scheduler_Event;
            scheduler.record(programme, 0);
            break;
        case "4":
            // series record
            //scheduler.onPVREvent = scheduler_Event;
            scheduler.record(programme, 2);
            break;
        case "5":
            // recommended record
            break;
    }
}

function insertEpisodeList() {
    var data = "";
    var msg;
    var i;
    var programme;

    data = add_table_head("Episode List");

    for ( i = 0; i < episode_list.length; i++) {
        programme = episode_list[i];
        if ( typeof programme != "undefined") {
            data += '<th>' + programme.channel.name + '</th><th></th>';
            data += '<th id="' + i + '" onclick="OnClickRecordingList(this);" >' + programme.name + '</th>';
            msg = "episode";
            data += '<th>' + msg + '</th><th></th>';
            data += '<th>' + '-' + '</th>';

            msg = ConvertUnixtimeToDate(programme.startTime);
            data += '<th>' + msg + '</th><th>~</th>';

            msg = ConvertUnixtimeToDate(programme.startTime + programme.duration);
            data += '<th>' + msg + '</th>';
            data += '<tr>';
            //data += add_oipfObject_info('EBR name', schedule.name);
            //data += add_oipfObject_info('Event id', schedule.programmeID);
            //data += add_oipfObject_info('Channel', schedule.channel.ccid);
            //data += add_oipfObject_info('Start time', schedule.startTime);
        }
    }

    data += add_table_tail();

    return data;
}

function insertRecordingList() {
    var data = "";
    var msg;
    var i;
    var recording;

    data = add_table_head("Recording List");

    for ( i = 0; i < recording_list.length; i++) {
        recording = recording_list[i];
        if ( typeof recording != "undefined") {
            data += '<th>' + recording.channel.name + '</th><th></th>';
            data += '<th id="' + i + '" onclick="OnClickRecordingList(this);" >' + recording.name + '</th>';

            msg = recording.seriesID;

            data += '<th>' + msg + '</th><th></th>';
            msg = recording.watched;
            data += '<th>' + msg + '</th>';

            msg = ConvertUnixtimeToDate(recording.recordingStartTime);
            data += '<th>' + msg + '</th><th>~</th>';

            msg = ConvertUnixtimeToDate(recording.recordingStartTime + recording.recordingDuration);
            data += '<th>' + msg + '</th>';
            data += '<tr>';
            //data += add_oipfObject_info('EBR name', schedule.name);
            //data += add_oipfObject_info('Event id', schedule.programmeID);
            //data += add_oipfObject_info('Channel', schedule.channel.ccid);
            //data += add_oipfObject_info('Start time', schedule.startTime);
        }
    }

    data += add_table_tail();

    return data;
}

function insertScheduleInfo() {
    var data = "";
    var msg;
    var i;
    var schedule;

    data = add_table_head("Reservation Info");

    for ( i = 0; i < schedule_list.length; i++) {
        schedule = schedule_list[i];
        if ( typeof schedule != "undefined") {
            data += '<th>' + schedule.channel.name + '</th><th></th>';
            data += '<th id="' + i + '" onclick="OnClickScheduleList(this);" >' + schedule.name + '</th>';

            if (schedule.isScheduledAsSeries) {
                msg = schedule.seriesID;
            } else {
                msg = "Single";
            }
            data += '<th>' + msg + '</th><th></th>';
            data += '<th>' + '-' + '</th>';

            msg = ConvertUnixtimeToDate(schedule.startTime);
            data += '<th>' + msg + '</th><th>~</th>';

            msg = ConvertUnixtimeToDate(schedule.startTime + schedule.duration);
            data += '<th>' + msg + '</th>';
            data += '<tr>';
            //data += add_oipfObject_info('EBR name', schedule.name);
            //data += add_oipfObject_info('Event id', schedule.programmeID);
            //data += add_oipfObject_info('Channel', schedule.channel.ccid);
            //data += add_oipfObject_info('Start time', schedule.startTime);
        }
    }

    data += add_table_tail();

    return data;
}

function insertEventInfo() {
    var cnt, i, j;
    var data = '';
    var programme;
    var cellNum = 0;
    var RedTag = "style='color:rgb(255, 0, 0)'";
    var SreiesTag = "[S]";
    var RecommandedTag = "[R]";
    var HDAltTag = "[HD]";
    var Tag1 = "", Tag2 = "", Tag3 = "", Tag4 = "";
    var bReserved = false;
    var channel;
    // = videoBroadcast.currentChannel;
    var groupCRIDs;
    var crid = "";
    var hdLinkageInfo;
    var channel_index = 0;
    var programmes;
    var id = 0

    data = '<table id="____table____" class="list_table"><caption>Event List</caption>';
    data += '<thead>';
    data += '<tr><th>channel</th><th>Event 1</th><th>Event 2</th><th>Event 3</th><th>Event 4</th></tr>';
    data += '</thead>';
    data += '<tbody>';

    for ( channel_index = 0; channel_index < total_channel; channel_index++) {
        programmes = epg[channel_index];
        channel = channelList.item(channel_index + start_channel_index);
        cnt = programmes.length;
        if (cnt > 4)
            cnt = 4;

        data += '<tr>';
        data += '<th>' + channel.majorChannel + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + channel.name + '</th>';

        for ( i = 0; i < cnt; i++) {
            programme = programmes[i];
            if (programme) {
                // check reservation
                Tag1 = "";
                Tag2 = "";
                Tag3 = "";
                Tag4 = "";

                if (CheckReservedProgramme(programme)) {
                    Tag1 = RedTag;
                }
                if (CheckSeriesProgramme(programme)) {
                    Tag2 = SreiesTag;
                }
                if (CheckRecommendedProgramme(programme)) {
                    Tag3 = RecommandedTag;
                }

                hdLinkageInfo = programme.getField('hdlinkageinfo');
                var json = jQuery.parseJSON(hdLinkageInfo);

                if (json.hdlinkageinfo.length > 0) {
                    Tag4 = HDAltTag;
                }

                id = channel_index * 4 + i;

                data += '<th id="' + id + '" onclick="OnClickEventCell(this);" ' + Tag1 + '>' + programme.name + '&nbsp;' +
                //'&lt;'+programme.programmeID+'&gt;'+
                Tag2 + Tag3 + Tag4 + '</th>';
            }
            //data += '<th>'+programme.name+'&nbsp;'+programme.channelID+'</th>';
        }
        data += '<tr>';
    }

    data += '</tbody>';
    data += '</table>';

    return data;
}

function insertSelectionTable(msg, programme) {
    var data = '';
    var cnt, i;
    var crid = "";
    var none = "none";
    var groupCRIDs;
    var bSeries = false, bRecommended = false;

    data = '<table id="insertSelectionTable" class="list_table"><caption>' + msg + '&nbsp;&nbsp;' + programme.name + '</caption>';
    data += '<thead>';
    data += '<tr><th>type 1</th><th>type 2</th><th>type 3</th><th>type 4</th><th>type 5</th></tr>';
    data += '</thead>';
    data += '<tbody>';
    data += '<tr>';

    bSeries = CheckSeriesProgramme(programme);

    // cancel
    data += '<th id="1" onclick="OnClickSelectionCell(this);">' + 'cancel' + '</th>';
    //watch
    data += '<th id="2" onclick="OnClickSelectionCell(this);">' + 'watch' + '</th>';
    // single record
    data += '<th id="3" onclick="OnClickSelectionCell(this);">' + 'single record' + '</th>';
    // series record
    if (bSeries == true) {
        data += '<th id="4" onclick="OnClickSelectionCell(this);">' + 'series record' + '</th>';
    }
    // recommended record
    //if(bRecommended == true)
    //{
    //  data += '<th id="5" onclick="OnClickSelectionCell(this);">'+'recommended record'+'</th>';
    //}
    data += '<th>' + GetProgrammeCrid(programme) + '</th>';

    data += '</tbody>';
    data += '</table>';

    return data;
}

// id = 0       : cancle target rsv
// id = 1~9 : cancle original rsv
// id = 10      : alternative target rsv
// id = 11~19: alternative original rsv

function insertConflictTable(error, orgProgramme, schedRecConflict, schedRecAlternative) {
    var data = "";
    var msg;
    var i, id;
    var schedule;
    var msg;

    data += '<table id="insertSelectionTable" class="list_table"><caption>Conflict Window</caption>';
    data += '<thead>';
    data += '<tr><th>.</th>';
    data += '</thead>';
    data += '<tbody>';
    data += '<tr>';

    msg = "Don't record  ";
    msg += orgProgramme.name;
    msg += " [";
    msg += GetChannelByCcid(orgProgramme.channelID).name;
    msg += "]";
    data += '<th id="' + 0 + '" onclick="OnClickConflictList(this);" >' + msg + '</th>';
    data += '<tr>';

    alert(error);

    if (schedRecConflict) {
        for ( i = 0; i < schedRecConflict.length; i++) {
            schedule = schedRecConflict[i];
            if ( typeof schedule != "undefined") {
                id = i + 1;
                msg = "Cancel recording  ";
                msg += schedule.name;
                msg += " [";
                msg += schedule.channel.name;
                msg += "]";
                data += '<th id="' + id + '" onclick="OnClickConflictList(this);" >' + msg + '</th>';
                data += '<tr>';
            }
        }
    }

    if (error == 107) {
        if (schedRecAlternative) {
            for ( i = 0; i < schedRecAlternative.length; i++) {
                schedule = schedRecAlternative[i];
                if ( typeof schedule != "undefined") {
                    id = i + 1 + 10;
                    msg = "Recording the next showing of  ";
                    msg += schedule.name;
                    msg += " [";
                    msg += schedule.channel.name;
                    msg += "]";
                    data += '<th id="' + id + '" onclick="OnClickConflictList(this);" >' + msg + '</th>';
                    data += '<tr>';
                }
            }
        } else {
            id = 10;
            msg = "Recording the next showing of  ";
            msg += orgProgramme.name;
            data += '<th id="' + id + '" onclick="OnClickConflictList(this);" >' + msg + '</th>';
            data += '<tr>';
        }
    }

    data += '</tbody>';
    data += '</table>';

    return data;
}

/*
 typedef enum {
 RECORDING_UNREALIZED = 0,  0
 RECORDING_SCHEDULED,       1
 RECORDING_DEL_SCHEDULED,   2
 RECORDING_REC_PRESTART,        3
 RECORDING_REC_ACQUIRING_RESOURCES,     4
 RECORDING_REC_STARTED,     5
 RECORDING_REC_UPDATED,     6
 RECORDING_REC_COMPLETED,   7
 RECORDING_REC_PARTIALLY_COMPLETED,     8
 RECORDING_TS_ACQUIRING_RESOURCES,      9
 RECORDING_TS_STARTED,      10
 RECORDING_ERROR,               11
 RECORDING_REC_START_ERROR          12
 } RecordingConstants;

 Constants defined in DAE 7.10.5.1, constants for detailed error codes

 typedef enum {
 RECORDING_ERROR_REC_RESOURCE_LIMITATION = 100,
 RECORDING_ERROR_INSUFFICIENT_STORAGE,      101
 RECORDING_ERROR_TUNER_CONFLICT,                102
 RECORDING_ERROR_REC_DRM_RESTRICTION,       103
 RECORDING_ERROR_REC_UNKNOWN,               104
 RECORDING_ERROR_TS_RESOURCE_LIMITATION,    105
 RECORDING_ERROR_TS_DRM_RESTRICTION,        106
 RECORDING_ERROR_HAVE_ALTERNATIVE,          107
 RECORDING_ERROR_TS_UNKNOWN,                108
 } DetailedRecordingErrorsCodes;
 */
/*
 enum QUERY_Comparison
 {
 eMETA_QUERY_EQ,
 eMETA_QUERY_NOT_EQ,
 eMETA_QUERY_GT,
 eMETA_QUERY_GT_OR_EQ,
 eMETA_QUERY_LT,
 eMETA_QUERY_LT_OR_EQ,
 eMETA_QUERY_CONTAINS,
 eMETA_QUERY_EXIST,

 eMETA_QUERY_UNKNOWN
 };
 */
function scheduler_Event(state, recording, error, schedRecConflict, RecConflict, schedRecAlternative) {
    var data = "";
    var msg = "";

    alert(state);
    LoadScheduleList();
    LoadRecordingList();

    if (state == 11)//recording error
    {
        conflict_schedule_list = schedRecConflict;
        alternative_schedule_list = schedRecAlternative;
        data += insertConflictTable(error, selected_programme, conflict_schedule_list, alternative_schedule_list);
        $('#oipfTestItem').html(data);
        return;
    } else if (state == 2)// schedule delete
    {
        if (conflict_process == 1) {
            rsv_process(rsv_type, selected_programme);
            conflict_process = 0;
        }

    } else if (state == 1)// schedule add
    {
        if (CheckRecommendedProgramme(selected_programme)) {
            var search = oipfMetaSrch.createSearch(1);

            function onRecomSearch(metadataSearch, state) {
                var result = metadataSearch.result;
                var data = "";
                var i;

                if (state == 0 || state == 1)
                    result.update();

                selected_programme = result.item(0);

                data += insertSelectionTable("select :", selected_programme)

                $('#oipfTestItem').html(data);
            }


            oipfMetaSrch.onMetadataSearch = onRecomSearch;
            search.setQuery(search.createQuery("criddata", 0, GetFirstRecommendedProgramme(selected_programme)));
            search.orderBy("startTime", true);
            search.result.getResults(0, 10);
        }
    } else if (state == 3) {
        alert("prestart event : " + recording.name);
    }

    data += insertEventInfo();
    data += insertScheduleInfo();
    data += insertRecordingList();

    $('#oipfTestItem').html(data);

}

function OnClickSelectionCell(o) {
    var data = "";

    rsv_type = o.id;

    if (rsv_type == 1) {
        data += insertEventInfo();
        data += insertScheduleInfo();
        data += insertRecordingList();
        $('#oipfTestItem').html(data);
    } else {
        rsv_process(rsv_type, selected_programme);
    }

}

function OnClickEventCell(o) {
    var data = "";
    var bReserved = false;
    var bSeries = false, bRecom = false;
    var index = Number(o.id);
    var hdLinkageInfo;
    var json;
    var channel_index;
    var id;

    channel_index = Math.floor(index / 4);
    id = index % 4;

    selected_programme = epg[channel_index][id];

    bReserved = CheckReservedProgramme(selected_programme);
    if (bReserved == true) {
        alert('reserved');
        return;
    }

    hdLinkageInfo = selected_programme.getField('hdlinkageinfo');

    json = jQuery.parseJSON(hdLinkageInfo);

    //json.hdlinkageinfo.length = 0;
    /*
     if(CheckSeriesProgramme(selected_programme))
     {
     var search = oipfMetaSrch.createSearch(1);
     var index = 0, i;
     var channel;

     function onEpisodeSearch(metadataSearch, state) {
     var result = metadataSearch.result;
     var channel;
     var data = "";
     var i;

     alert("episode num : " + result.length);

     if (state == 0 || state == 1)
     result.update();

     if (state != 0)    //finish
     return;

     for(var i=0; i<result.length; i++)
     {
     episode_list.push(result.item(i));
     }

     data += insertEpisodeList();

     $('#oipfTestItem').html(
     data
     );
     }

     channel = GetChannelByCcid(selected_programme.channelID);

     oipfMetaSrch.onMetadataSearch = onEpisodeSearch;
     alert("series crid : " + GetSeriesCrid(selected_programme));
     search.setQuery(search.createQuery("criddata", 0, GetSeriesCrid(selected_programme)));
     search.addChannelConstraint(channel);
     search.orderBy("startTime", true);
     search.result.getResults(0, 10);
     }
     */
    if (json.hdlinkageinfo.length == 0) {
        data += insertSelectionTable("select :", selected_programme);
    } else {
        var search = oipfMetaSrch.createSearch(1);
        var index = 0, i;
        var altCcid;
        var altEventId;
        var altChannel;

        function onHdAlternativeSearch(metadataSearch, state) {
            var result = metadataSearch.result;
            var channel;
            var data = "";
            var i;

            if (state == 0 || state == 1)
                result.update();

            alert("alternative : " + result.length);

            selected_programme = result.item(0);

            channel = GetChannelByCcid(selected_programme.channelID);

            alert(selected_programme.programmeID);

            data += insertSelectionTable("HD Alternative(" + channel.name + ") :", selected_programme)

            $('#oipfTestItem').html(data);
        }

        altCcid = json.hdlinkageinfo[0].channel;
        altEventId = json.hdlinkageinfo[0].event;
        index = altEventId.indexOf(".") + 1;
        altEventId = altEventId.substring(index);
        alert("event id : " + altEventId);
        altChannel = GetChannelByCcid(altCcid);

        oipfMetaSrch.onMetadataSearch = onHdAlternativeSearch;
        search.setQuery(search.createQuery("eventid", 0, altEventId));
        search.addChannelConstraint(altChannel);
        search.orderBy("startTime", true);
        search.result.getResults(0, 10);

    }

    /*

     {
     var record;
     var    watch;

     scheduler.onPVREvent = scheduler_Event;
     //EBR
     {
     record = scheduler.record(programme);
     //watch  = scheduler.record(programme, 1);
     //record = scheduler.record(programme, 10);
     }

     //TBR
     {
     //var  date = new Date();
     //var startTime = date.getTime() / 1000;
     //var duration  = 5 * 60;
     //var channel   = videoBroadcast.currentChannel;

     //record = scheduler.recordAt(startTime, duration, 0, channel.ccid);
     //watch  = scheduler.recordAt(startTime + 60, duration, 0, channel.ccid, 1);
     //if (typeof watch  != "undefined")
     // data += add_oipfObject_info('watch', watch.name);
     }
     }
     */

    $('#oipfTestItem').html(data);
}

function OnClickScheduleList(o) {
    var index = o.id;
    var schedule;
    var scheduler = oipfRecordingScheduler;

    schedule = schedule_list[index];

    //scheduler.onPVREvent = scheduler_Event;
    scheduler.remove(schedule);
    //scheduler.recordConfirm(schedule, 1);
}

// id = 0       : cancle target rsv
// id = 1~9 : cancle original rsv
// id = 10      : alternative target rsv
// id = 11~19: alternative original rsv

function OnClickConflictList(o) {
    var index = o.id;
    var data = "";
    var schedule;
    var scheduler = oipfRecordingScheduler;

    if (index == 0) {
        data += insertEventInfo();
        data += insertScheduleInfo();
        data += insertRecordingList();
        $('#oipfTestItem').html(data);
    } else if (index > 0 && index < 10) {
        schedule = conflict_schedule_list[index - 1];
        //scheduler.onPVREvent = scheduler_Event;
        scheduler.remove(schedule);
        conflict_process = 1;
    } else {
        rsv_process(rsv_type, selected_programme);
    }
}

function onClick_FsatGuide(o) {
    var search = oipfMetaSrch.createSearch(1);
    var scheduler = oipfRecordingScheduler;
    var channel;

    scheduler.onPVREvent = scheduler_Event;

    if (search == null || search == undefined) {
        return 'ERROR: createSearch(1)';
    }

    $(".submenu:visible").slideUp("middle");

    function onEventSearch(metadataSearch, state) {
        var result = metadataSearch.result;
        var data = "";
        var i;
        var search = oipfMetaSrch.createSearch(1);
        var programmes = new Array();

        if (state == 0 || state == 1)
            result.update();

        if (state != 0)//finish
            return;

        alert('onPVRevent');
        alert(channel_count + '(' + result.length + ')');

        for ( i = 0; i < result.length; i += 1) {
            programmes.push(result.item(i));
        }

        epg.push(programmes);

        if (channel_count < total_channel) {
            oipfMetaSrch.onMetadataSearch = onEventSearch;
            var q1 = search.createQuery("startTime", 3, (new Date().getTime() / 1000 + 0 * 60 * 60).toFixed().toString());
            var q2 = search.createQuery("endTime", 5, (new Date().getTime() / 1000 + 24 * 60 * 60).toFixed().toString());
            guide_query = q1.and(q2)
            search.setQuery(guide_query);
            channel = channelList.item(channel_count + start_channel_index);
            search.addChannelConstraint();
            search.addChannelConstraint(channel);
            channel_count++;
            search.orderBy("startTime", true);
            search.result.getResults(0, 100);
        } else {
            LoadScheduleList();
            LoadRecordingList();

            data += insertEventInfo();
            data += insertScheduleInfo();
            data += insertRecordingList();

            $('#oipfTestItem').html(data);
            //              document.getElementById("____table____").addEventListener("keypress", function() {
            //
            //
        }
    }

    channel_count = 0;
    var q1 = search.createQuery("startTime", 3, (new Date().getTime() / 1000 + 0 * 60 * 60).toFixed().toString());
    var q2 = search.createQuery("endTime", 5, (new Date().getTime() / 1000 + 24 * 60 * 60).toFixed().toString());
    guide_query = q1.and(q2)

    oipfMetaSrch.onMetadataSearch = onEventSearch;

    search.setQuery(guide_query);
    //channel = videoBroadcast.currentChannel;
    //search.addChannelConstraint(channel);

    channel = channelList.item(channel_count + start_channel_index);
    search.addChannelConstraint();
    search.addChannelConstraint(channel);
    channel_count++;
    search.orderBy("startTime", true);

    var html = '';
    if (search.result.getResults(0, 100)) {
        html = insertEventInfo(search.result);
    }

    return html;
}

var search;
function onClick_SearchResults(o) {
    search = oipfMetaSrch.createSearch(1);

    if (search == null || search == undefined) {
        return 'ERROR: createSearch(1)';
    }

    function getResultHtml(msg, result) {
        var html = add_table_head(msg);

        html += add_oipfObject_info('length', result.length);
        html += add_oipfObject_info('offset', result.offset);
        html += add_oipfObject_info('totalSize', result.totalSize);
        html += add_oipfObject_info('item(0)', result.item(0).name);
        html += add_oipfObject_info('getResults()', 'OK');
        // ?�좎럩猷��좎뜴���좎럩���좎럩猷��좎룞��?�좎럩���좎럩猷��좎룞��?�좏룮 ?�좎럩猷�??�좎럩猷�??�좎럩���좎럩��?�좎럩猷��좎뜴�앭뜝占� html += add_oipfObject_info('abort()', 'OK');
        html += add_oipfObject_info('update()', 'OK');

        html += add_table_tail();
        return html;
    }

    function getProgrammeListHtml(msg, result) {
        var html = add_table_head(msg);

        for ( i = 0; i < result.length; i++) {
            html += add_oipfObject_info(i.toString() + ":" + result.item(i).programmeID, result.item(i).name);
        }
        html += add_table_tail();
        return html;
    }

    function onMetadataSearchResult(metadataSearch, state) {
        var result = metadataSearch.result;

        if (state == 0 || state == 1)
            result.update();

        $('#oipfTestItem').html(getResultHtml('onMetadataSearch: state(' + state + ')', result));
    }

    function onMetadataSearchTEST(metadataSearch, state) {
        var result = metadataSearch.result;

        if (state == 0 || state == 1)
            result.update();

        $('#oipfTestItem').html(getProgrammeListHtml('onMetadataSearch: state(' + state + ')', result));
    }

    if (o.id == 'SearchResults')
        oipfMetaSrch.onMetadataSearch = onMetadataSearchResult;
    else
        oipfMetaSrch.onMetadataSearch = onMetadataSearchTEST;

    oipfMetaSrch.onMetadataUpdate = function(action, info, object) {
        $('#oipfEventId').html('action: ' + action + ', info: ' + info + ', search.id: ' + search.id);
    };

    search.addChannelConstraint(videoBroadcast.currentChannel);
    //search.setQuery(search.createQuery("endTime", 3, (new Date().getTime() / 1000)));
    search.setQuery(search.createQuery("eventtext", 6, "BBC"));
    //search.orderBy("startTime", true);

    var html = 'Waiting...';
    if (search.result.getResults(0, 10)) {
        if (o.id == 'SearchResults')
            html = getResultHtml(o.id, search.result);
        else
            html = getProgrammeListHtml(o.id, search.result);
    }
    return html;
}

function onClick_RecordingCollectionTest(o) {
    var html = '';

    var recordingCollection = oipfRecordingScheduler.recordings;
    if (recordingCollection == null || recordingCollection == undefined) {
        return 'ERROR: oipfRecordingScheduler.recordings';
    }

    var recordingFirstItem = recordingCollection.item(0);
    if (recordingFirstItem == null || recordingFirstItem == undefined) {
        return 'ERROR: oipfRecordingScheduler.recordings.item(0)';
    }

    var id = recordingFirstItem.id;

    html += add_table_head('RecordingCollection Test - OIPF 2.1');
    html += add_oipfObject_info('first recording item', recordingFirstItem);

    var getRecordingItem = oipfRecordingScheduler.getRecording(id);
    if (getRecordingItem) {
        html += add_oipfObject_info('getRecording() id =', id);
        html += add_oipfObject_info('getRecording()', getRecordingItem);
    } else {
        html += add_oipfObject_info('getRecording()', null);
    }

    // remove - success
    /*

    try {
    oipfRecordingScheduler.remove(recordingFirstItem);
    html += add_oipfObject_info('remove(first item)', 'OK');
    }
    catch (err)
    {
    html += add_oipfObject_info('remove(first item)', 'FAIL:' + err.description);
    }
    */

    // refresh
    try {
        oipfRecordingScheduler.refresh();
        html += add_oipfObject_info('refresh()', 'OK');
    } catch (err) {
        html += add_oipfObject_info('refresh()', 'FAIL:' + err.description);
    }

    return html;
}// end function onClick_RecordingCollectionTest

function onClick_BookmarkTest(o) {
    var html = '';
    var bmks = oipfRecordingScheduler.recordings.item(0).bookmarks;
    var addedBmk;

    html += add_table_head('Bookmark Test - OIPF 2.1');

    try {
        addedBmk = bmks.addBookmark(1000, "HUMAX");
        html += add_oipfObject_info('addBookmark(1000, "HUMAX")', 'OK');

        html += add_oipfObject_info('added Bookmark time:', addedBmk.time);
        html += add_oipfObject_info('added Bookmark name:', addedBmk.name);
    } catch (ex) {
        html += add_oipfObject_info('bmk.addBookmark(1000, "HUMAX")', 'FAIL:' + err.description);
    }

    try {
        bmks.removeBookmark(addedBmk);
        html += add_oipfObject_info('remove target bookmark', addedBmk);
        html += add_oipfObject_info('removeBookmark(target bookmark)', 'OK');
    } catch (ex) {
        html += add_oipfObject_info('removeBookmark(target bookmark)', 'FAIL:' + err.description);
    }

    return html;
}// end function onClick_BookmarkTest

/* Opera About Page */
function onClick_OperaAbout() {
    document.location.href = "about:";
}

/* HMS Test */
function onClick_hmsAnimationTest() {
    document.location.href = "HMS_Test/hmstest.html";
}

function onClick_hmsNativeKewboardTest() {
    document.location.href = "HMS_Test/keyboard/keyboard1.html";
}

/* New HMS Animation Test */
function onClick_hmsNewAnimationTest() {
    document.location.href = "Animation/aniTestHistory.html";
}

function onClick_hmsNewAnimationTestConfirm() {
    document.location.href = "Animation/aniTestConfirmList.html";
}

/* Freesat Test */
var aszPostCodeTable = ['BR', 'HP23 6', 'MK15', 'HP23 5', 'NN11 1', 'CV2', 'WR13 5', 'BB9', 'LA8', 'DN16', 'DB9', 'S2 2', 'DE6 9', 'CV9 3', 'NG21 0', 'S44', 'CB11', 'CM3 8', 'IP24', 'GL13', 'GL4', 'SN1 5', 'SN38 2'];

function func_freesat_ModeChange() {
    var opid = oipfConf.configuration.operatorId;

    if (opid == 8) {
        document.getElementById("freesatmode").innerHTML = "1 (Non-Freesat Mode)";
        oipfConf.configuration.operatorId = 1;
    } else {
        document.getElementById("freesatmode").innerHTML = "8 (Freesat Mode)";
        oipfConf.configuration.operatorId = 8;
    }
    channelConfig.stopTune();
    channelConfig.reloadChannelList();
    channelList = videoBroadcast.getChannelConfig().channelList;
}

function func_next_freesat_postcode() {
    var i, szPostcode = oipfConf.configuration.getField('post_code').toString();

    for ( i = 0; i < aszPostCodeTable.length; i += 1) {
        if (aszPostCodeTable[i] == szPostcode)
            break;
    }

    if (++i >= aszPostCodeTable.length)
        i = 0;

    oipfConf.configuration.setField('post_code', aszPostCodeTable[i]);

    document.getElementById('PostcodeID').innerHTML = oipfConf.configuration.getField('post_code').toString();
}

function func_prev_freesat_postcode() {
    var i, szPostcode = oipfConf.configuration.getField('post_code').toString();

    for ( i = 0; i < aszPostCodeTable.length; i += 1) {
        if (aszPostCodeTable[i] == szPostcode)
            break;
    }

    if (--i < 0)
        i = aszPostCodeTable.length - 1;

    oipfConf.configuration.setField('post_code', aszPostCodeTable[i]);

    document.getElementById('PostcodeID').innerHTML = oipfConf.configuration.getField('post_code').toString();
}

function load_freesatsearchtest_info() {
    var data;
    var postcode;
    var opid = oipfConf.configuration.operatorId;
    var fsatMode;
    try {
        if (opid == 8)
            fsatMode = '8 (Freesat Mode)';
        // 8: freesat mode, 1: non-freesat mode
        else
            fsatMode = '1 (Non-Freesat Mode)';

        /* DiSEqC Detection */
        //data = load_diseqcdetectiontest_info();

        /* Antenna Connection Type Detection */
        /* data = load_antennadetectiontest_info(); ??? */

        /* Freesat Search */
        data += add_table_head('Freesat Search Test');

        data += '<tr><th> Freesat Mode </th><td> S </td><td id="freesatmode">' + fsatMode + '</td>';
        __oipf_info_index++;

        data += add_oipfObject_info('Mode Change', func_freesat_ModeChange, CONST_FUNCTION_CLASS);

        /* Postcode */
        __oipf_info_index = 0;
        postcode = oipfConf.configuration.getField('post_code');
        data += '<tr><th> POSTCODE </th><td> S </td><td id="PostcodeID">' + postcode.toString() + '</td>';
        __oipf_info_index++;
        data += add_oipfObject_info('Prev Postcode', func_prev_freesat_postcode, CONST_FUNCTION_CLASS);
        data += add_oipfObject_info('Next Postcode', func_next_freesat_postcode, CONST_FUNCTION_CLASS);
        data += add_table_tail();

        /* Search */
        data += load_channelsearchtest_info();
    } catch (ex) {
        alert("error in init_testpage" + ex.message);
    }
    return data;
}

function GetFreesatAntennaId() {
    var i;
    var antInfoLists = oipfConf.localSystem.antennaInfoLists;
    var antInfo;

    antInfoLists.refresh();
    for ( i = 0; i < antInfoLists.length; i++) {
        antInfo = antInfoLists.item(i);
        if (antInfo.satelliteType == 'ASTRA_2') {
            return antInfo.id;
        }
        /*
         alert('GetFreesatAntennaId i = ' + i + '  satellite type = ' + antInfo.satelliteType + '  satelliteName = ' +
         antInfo.satelliteName);
         alert(i);
         alert(antInfo.satelliteType);
         alert(antInfo.satelliteName);
         */
    }

    return 0;
}

function load_freesatAntenna_info() {
    var data;
    var antInfoLists = oipfConf.localSystem.antennaInfoLists;
    var antInfo;
    var msg;
    var i;

    /* DiSEqC Detection */
    data = load_diseqcdetectiontest_info();
    data += load_antennaconnection_info();

    antInfoLists.refresh();
    for ( i = 0; i < antInfoLists.length; i++) {
        antInfo = antInfoLists.item(i);
        if (antInfo.satelliteType == 'ASTRA_2')
            break;
    }

    /* Antenna Connection Type Detection */
    /* data = load_antennadetectiontest_info(); ??? */

    /* Freesat Search */
    data += add_table_head('Freesat Antenna Info');

    data += add_oipfObject_info('Antena Id', i);
    data += add_oipfObject_info('satelliteName', antInfo.satelliteName);

    switch (antInfo.antennaType) {
        case 0:
            msg = 'LNB';
            break;
        case 1:
            msg = 'Diseqc';
            break;
        case 2:
            msg = 'SCD';
            break;
        case 3:
            msg = 'SMATV';
            break;
        case 4:
            msg = 'MonoBlock';
            break;
        default:
            msg = 'unknown';
            break;

    }
    data += add_oipfObject_info('antennaType', msg);

    switch (antInfo.diseqcVersion) {
        case 0:
            msg = '1.0';
            break;
        case 1:
            msg = '1.1';
            break;
        case 2:
            msg = '1.2';
            break;
        case 3:
            msg = '1.3';
            break;
        case 4:
            msg = '2.0';
            break;
        default:
            msg = 'unknown';
            break;

    }
    data += add_oipfObject_info('diseqcVersion', msg);
    //  diseqc 1.0, 1.1 : 0 : none, 1 : a, 2 : b, 3 : c, 4 : d
    //  scd             : 0 : none, 1 : a, 2 : b

    if (antInfo.antennaType == 1 && (antInfo.diseqcVersion == 0 || antInfo.diseqcVersion == 1)) {
        switch (antInfo.switchInput) {
            case 0:
                msg = 'none';
                break;
            case 1:
                msg = 'A';
                break;
            case 2:
                msg = 'B';
                break;
            case 3:
                msg = 'C';
                break;
            case 4:
                msg = 'D';
                break;
            default:
                msg = 'none';
                break;

        }
    } else if (antInfo.antennaType == 2) {
        switch (antInfo.switchInput) {
            case 0:
                msg = 'none';
                break;
            case 1:
                msg = 'A';
                break;
            case 2:
                msg = 'B';
                break;
            default:
                msg = 'unknown';
                break;
        }
    } else {
        msg = 'none';
    }
    data += add_oipfObject_info('switchInput', msg);
    data += add_oipfObject_info('lnbFrequency', antInfo.lnbFrequency);
    //    data += add_oipfObject_info('Antenna connection', antInfoLists.getConnectionType());

    data += add_table_tail();

    return data;
}

function load_freesatUserCustomSearch_info() {
    var data;
    var antInfoLists = oipfConf.localSystem.antennaInfoLists;
    var antInfo;
    var msg;
    var i;

    /* User Custom search */
    data = load_diseqcdetectiontest_info();

    /* Antenna Connection Type Detection */
    /* data = load_antennadetectiontest_info(); ??? */

    /* Freesat Search */
    data += add_table_head('Freesat Antenna Info');

    data += add_table_tail();

    return data;
}

var _fsat_channel_list_start_index = 0;

function fsat_refresh_channel_list(o) {
    _fsat_channel_list_start_index += 50;
    if (_fsat_channel_list_start_index > channelList.length)
        _fsat_channel_list_start_index = 0;
    document.getElementById('oipfTestItem').innerHTML = load_channellist_shortname_via_oipf();
}

function load_channellist_shortname_via_oipf() {
    var data, cnt, i;
    var shortName;

    data = '<table class="list_table"><caption>Channel List (from : ' + _fsat_channel_list_start_index + ')</caption>';
    data += '<thead>';
    data += '<tr><th>LCN</th><th>Short Name</th><th>LCN</th><th>Short Name</th><th>LCN</th><th>Short Name</th><th>LCN</th><th>Short Name</th><th>LCN</th><th>Short Name</th></tr>';
    data += '</thead>';
    data += '<tbody>';

    i = _fsat_channel_list_start_index;
    cnt = 50;
    if ((i + cnt) >= channelList.length)
        cnt = channelList.length - i;

    for ( i = 0; i < cnt; i++) {
        var channel = channelList.item(i + _fsat_channel_list_start_index);

        if (oipfConf.configuration.operatorId == 8 && channel.svcoptype != "freesat")
            continue;
        else if (oipfConf.configuration.operatorId != 8 && channel.svcoptype == "freesat")
            continue;

        shortName = channel.getField('shortname');

        if ((i % 5) == 0)
            data += '<tr>';
        data += '<th>' + channel.majorChannel + '</th><th id="' + channel.ccid + '" onclick="select_channel(this)">' + shortName + '</th>';
        if ((i % 5) == 4)
            data += '</tr>';
    }

    data += '</tbody>';
    data += '</table>';

    if (cnt < channelList.length)
        data += '<p onclick="fsat_refresh_channel_list(this);">more table is existed...</p>';

    return data;
}

var favouriteList = function() {
    return {
        channelConfig : function(o) {
            var html = '';

            html += add_table_head('ChannelConfig.(Favourite related APIs)');

            try {
                var favouriteLists = channelConfig.favouriteLists;
                html += add_oipfObject_info('.favouriteLists', 'Length:' + favouriteLists.length);
            } catch (e) {
                html += add_oipfObject_info('.favouriteLists', 'FAIL');
            }

            try {
                var currFav = channelConfig.currentFavouriteList;
                html += add_oipfObject_info('.currentFavouriteList', currFav ? currFav.favID + ':' + currFav.name : 'FAIL');
            } catch (e) {
                html += add_oipfObject_info('.currentFavouriteList', 'FAIL');
            }

            html += add_table_tail();

            return html;
        },
        favouriteCollection : function(o) {
            var html = '';

            html += add_table_head('FavouriteListCollection APIs');

            var favCollection = channelConfig.favouriteLists;

            try {
                var list = favCollection.item(2);
                var byID = favCollection.getFavouriteList(list.favID);

                html += add_oipfObject_info('.getFavouriteList(' + list.favID + ')', byID ? byID.favID + ':' + byID.name : 'FAIL');
            } catch (e) {
                html += add_oipfObject_info('.getFavouriteList(' + list.favID + ')', 'FAIL');
            }

            try {
                var awesome = favCollection.createFavouriteList('Awesome!!');

                html += add_oipfObject_info('.createFavouriteList()', awesome ? awesome.favID + ':' + awesome.name : 'FAIL');
            } catch (e) {
                html += add_oipfObject_info('.createFavouriteList()', 'FAIL');
            }

            try {
                var remove = favCollection.remove(favCollection.length - 1);

                html += add_oipfObject_info('.remove(' + favCollection.length + ')', remove);
            } catch (e) {
                html += add_oipfObject_info('.remove(' + favCollection.length + ')', 'FAIL');
            }

            /*
             try {
             var commit = favCollection.createFavouriteList('Commit!!');

             for (var i = 0 ; i < 5 ; i++) {
             var channel = channelList.item(i);
             window.debug('favList.insertBefore(' + channel.ccid + ':' + channel.name + ')\n');
             if (commit.insertBefore(i, channel.ccid))
             window.debug("insertBefore(" + i + "," + channel.ccid + ")\n");
             }

             var retval = favCollection.commit();

             html += add_oipfObject_info('.commit()', retval);
             } catch (e) {
             html += add_oipfObject_info('.commit()', 'FAIL');
             }
             */
            html += add_oipfObject_info('.commit()', 'OPERA BUG!');

            try {
                var i, active = favCollection.createFavouriteList('be activated');
                for ( i = 0; i < 5; i += 1) {
                    var channel = channelList.item(i);
                    window.debug('favList.insertBefore(' + channel.ccid + ':' + channel.name + ')\n');
                    if (active.insertBefore(i, channel.ccid))
                        window.debug("insertBefore(" + i + "," + channel.ccid + ")\n");
                }
                active.commit();

                var inactive = favCollection.createFavouriteList('inactive');

                var active1 = favCollection.activateFavouriteList(active.favID);
                var active2 = favCollection.activateFavouriteList(inactive.favID);

                html += add_oipfObject_info('.activateFavouriteList()', active.favID + ':' + active1 + ', ' + inactive.favID + ':' + active2);
            } catch (e) {
                html += add_oipfObject_info('.activateFavouriteList()', 'FAIL');
            }

            html += add_table_tail();

            return html;
        },
        favouriteList : function(o) {
            var html = '';

            html += add_table_head('FavouriteList APIs');

            var collection = channelConfig.favouriteLists;

            var curr = collection.createFavouriteList('BabeBabe~!');

            curr.insertBefore(0, channelList.item(0).ccid);
            curr.insertBefore(1, channelList.item(1).ccid);
            curr.insertBefore(2, channelList.item(2).ccid);

            html += add_oipfObject_info('.favID', curr.favID);
            html += add_oipfObject_info('.name', curr.name);
            html += add_oipfObject_info('.length', curr.length);

            var channel;
            try {
                var ret = curr.item(0);
                channel = ret;

                html += add_oipfObject_info('.getChannel(' + channel.ccid + ')', ret.ccid + ':' + ret.name);
            } catch (e) {
                html += add_oipfObject_info('.getChannel(' + channel.ccid + ')', 'FAIL');
            }

            try {
                var ret = curr.getChannel(channel.ccid);

                html += add_oipfObject_info('.getChannel(' + channel.ccid + ')', ret.ccid + ':' + ret.name);
            } catch (e) {
                html += add_oipfObject_info('.getChannel(' + channel.ccid + ')', 'FAIL');
            }

            try {
                var ret = curr.getChannelByTriplet(channel.onid, channel.tsid, channel.sid);

                html += add_oipfObject_info('.getChannelByTriplet(' + channel.onid + ',' + channel.tsid + ',' + channel.sid + ')', ret.ccid + ':' + ret.name);
            } catch (e) {
                html += add_oipfObject_info('.getChannelByTriplet(' + channel.onid + ',' + channel.tsid + ',' + channel.sid + ')', 'FAIL');
            }
            html += add_oipfObject_info('.getChannelBySourceID()', 'N/A');

            try {
                var ccid = channelList.item(curr.length).ccid;
                var ret = curr.insertBefore(curr.length, ccid);

                html += add_oipfObject_info('.insertBefore(' + ccid + ')', ret);
            } catch (e) {
                html += add_oipfObject_info('.insertBefore(' + ccid + ')', 'FAIL');
            }

            try {
                var ret = curr.remove(curr.length - 1);

                html += add_oipfObject_info('.remove(' + (curr.length - 1) + ')', ret);
            } catch (e) {
                html += add_oipfObject_info('.remove(' + (curr.length - 1) + ')', 'FAIL');
            }

            try {
                var ret = curr.commit();

                html += add_oipfObject_info('.commit()', ret);
            } catch (e) {
                html += add_oipfObject_info('.commit()', 'FAIL');
            }

            var i;
            for ( i = 0; i < curr.length; i += 1) {
                channel = curr.item(i);
                html += add_oipfObject_info('.item(' + i + ')', channel.ccid + ':' + channel.name);
            }

            html += add_table_tail();

            return html;
        }
    }
};

function init_testpage() {
    try {
        var data = '';
        var submenu_items;

		// Asgard
		data += add_mainmenu_group('Asgard', [{
			name : 'Go to asgard',
			id : 'testAsgard'
		}, {
			name : "Go to aging",
			id : 'testAsgardAging'
		}, {
                        name : "Go to CATAL",
                        id : 'testCATAL'
                }, {
                        name : "Go to iPlayer",
                        id : 'testiPlayer'
                }]);

        //  Scenario
        data += add_mainmenu_group('Scenario', [{
            name : 'Load Channel Metadata and Tuning',
            id : 'testScenarioZapping'
        }, {
            name : 'Recording Scheduler Test',
            onClick : onClick_RecordingSchedulerTest
        }, {
            name : 'RecordingCollection Test',
            onClick : onClick_RecordingCollectionTest
        }, {
            name : 'Bookmark Test',
            onClick : onClick_BookmarkTest
        }, {
            name : 'Load Download Trigger',
            id : 'testDownloadTrigger'
        }, {
            name : 'Load Download Manager',
            id : 'testDownloadManager'
        }, {
            name : 'Channel Search Test',
            id : 'testChannelSearch'
        }, {
            name : 'DiSEqC Detection',
            id : 'testDiseqcDetection'
        }, {
            name : 'Parental Rating Test',
            id : 'testParentalRating'
        }]);

        //  Class
        data += add_mainmenu_group('Class', [{
            name : 'Application Manager',
            id : 'testClassApplicationManager'
        }, {
            name : 'VideoBroadcast Class',
            id : 'testClassVideoBroadcast'
        }, {
            name : 'Configuration Class',
            id : 'testClassConfiguration'
        }, {
            name : 'LocalSystem Class',
            id : 'testClassLocalSystem'
        }, {
            name : 'Download Class',
            id : 'testDownload'
        }, {
            name : 'DRMControlInformation Class',
            id : 'testDRMControlInformation'
        }, {
            name : 'ParentalRating Scheme Class',
            id : 'testClassParentalRatingScheme'
        }, {
            name : 'ScheduledRecording Collection',
            id : 'testClassScheduledRecordingCollection'
        }, {
            name : 'Recording Collection',
            id : 'testClassRecordingCollection'
        }, {
            name : 'Media PlayBack',
            id : 'testMediaPlayBack'
        }, {
            name : 'HumaxStorageUtil',
            id : 'testStorageUtil'
        }, {
            name : 'HumaxFreesatInfo',
            id : 'testHumaxFreesat'
        }]);

        data += add_mainmenu_group('7.12 Metadata APIs', [{
            name : 'SearchManager',
            onClick : onClick_SearchManager
        }, {
            name : 'MetadataSearch',
            onClick : onClick_MetadataSearch
        }, {
            name : 'Query',
            onClick : onClick_Query
        }, {
            name : 'SearchResults',
            onClick : onClick_SearchResults
        }, {
            name : 'Test EIT P/F & SCHEDULE',
            onClick : onClick_SearchResults
        }]);
        data += add_mainmenu_group('7.13.# Favourite APIs', [{
            name : 'ChannelConfig',
            onClick : favouriteList().channelConfig
        }, {
            name : 'FavouriteListCollection',
            onClick : favouriteList().favouriteCollection
        }, {
            name : 'FavouriteList',
            onClick : favouriteList().favouriteList
        }]);

        //  ETC
        data += add_mainmenu_group('ETC', [{
            name : 'OpenGL Test (CSS)',
            id : 'OpenGL_Test_CSS'
        },{
            name : 'CSS Transition Performance Test',
            id : 'OpenGL_Test2_CSS'
        },{
            name : 'OpenGL Test (JS)',
            id : 'OpenGL_Test_JS'
        },{
            name : 'MediaPlayBack Test',
            id : 'MediaPlayBack Test'
        }, {
            name : 'Application Manager Test',
            id : 'appMgrTest'
        }, {
            name : 'HTML5 Canvas 3D',
            id : 'testCanvas3d'
        }, {
            name : 'HTML5 Browser Score',
            id : 'testBrowserScore'
        }, {
            name : 'HTML5 Web Storage Test',
            id : 'testWebStorage_Action'
        }, {
            name : 'testETC',
            id : 'testETC'
        }, {
            name : 'testETC2',
            id : 'testETC2'
        }, {
            name : 'CAS Menu Test',
            id : 'testCasMenu'
        }, {
            name : 'DLNA(DMP) Action Test',
            id : 'testDLNA_Action'
        },{
            name : 'Media(Album/Artist) Test',
            id : 'mediaSearchTest'
        },{
            name : 'localMediaTest',
            id : 'localMediaTest'
        },{
            name : 'WoonServer Test',
            id : 'woonTest'
        },{
            name : 'Dlna Test',
            id : 'dlnaTest'
        },{
            name : 'SambaClient Test',
            id : 'sambaTest'
        },{
	    name : 'Network Test',
	    id : 'networkTest'
	},{
            name : 'Widget Test',
            id : 'testWidget_Action'
        },{
            name : 'Network Configuration Test',
            id : 'testNetwork_Action'
        }, {
            name : 'Key Input Test',
            id : 'testKeyInput_Action'
        }, {
            name : 'BBC iPlayer V3',
            id : 'testBBCiPlayerV3_Action'
        }, {
            name : 'Animation Performance Test',
            id : 'testAniPerformance'
        }, {
            name : 'Font Test',
            id : 'testFont'
		}, {
            name : 'Dial Test',
            id : 'testDial'
        }]);

        //  Freesat
        data += add_mainmenu_group('Freesat', [{
            name : 'Freesat Search Test',
            id : 'FreesatSearchTest'
        }, {
            name : 'Freesat Guide',
            onClick : onClick_FsatGuide
        }, {
            name : 'Freesat Ant Info',
            id : 'FreesatAntInfo'
        }, {
            name : 'Freesat Short Service Name',
            id : 'FreesatShortServiceName'
        }, {
            name : 'Freesat User Custom Search',
            id : 'FreesatUserCustomSearch'
        }]);

        //  HMS
        data += add_mainmenu_group('HMS', [{
            name : 'HMS Animation Test',
            onClick : onClick_hmsAnimationTest
        },{
            name : 'HMS New Animation Test History List',
            onClick : onClick_hmsNewAnimationTest
        },{
            name : 'HMS New Animation Test Confirm List',
            onClick : onClick_hmsNewAnimationTestConfirm
        },{
            name : 'HMS Native Keyboard Test',
            onClick : onClick_hmsNativeKewboardTest
        }]);

        // oipf unit test
        data += add_mainmenu_group('OIPF Unit Test', [{
            name : 'oipf FtpManager',
            id : 'UnitTestFTP'
		},{
            name : 'oipf SambaManager',
            id : 'UnitTestSamba'
		}, {
              name : 'ChRemove_Channelconfig',
              id : 'ChRemove_Channelconfig'
        },{
              name : 'ChRemove_Favourite',
              id : 'ChRemove_Favourite'
        },{
              name : 'FavouriteList',
              id : 'UnitTestFavouriteList'
        }, {
            name : 'Application Manager',
            id : 'UnitTestApplicationManager'
        }, {
            name : 'Application Widget',
            id : 'UnitTestApplicationManagerWidget'
        }, {
            name : 'Engine Config',
            id : 'UnitTestEngineConfig'
        }, {
            name : 'Engine LocalStorage',
            id : 'UnitTestEngineLocalStorage'
        }, {
            name : 'oipf HumaxStorageUtil',
            id : 'UnitTestOipfHumaxStorageUtil'
        }, {
            name : 'oipf Metadata',
            id : 'UnitTestOipfMeta'
        }, {
            name : 'oipf VideoBroadcast',
            id : 'UnitTestOipfVideoBroadcast'
        }, {
        /*  name : 'oipf VideoBroadcast 2',
            id : 'UnitTestOipfVideoBroadcast.sugar'
        }, { */
            name : 'oipf RecordingScheduler',
            id : 'UnitTestOipfRecordingScheduler'
        }, {
            name : 'oipf ChannelConfig',
            id : 'UnitTestOipfChannelConfig'
        }, {
            name : 'oipf VOD',
            id : 'UnitTestOipfVOD'
        }, {
            name : 'oipf ParentalControl',
            id : 'UnitTestOipfParentalControl'
        }, {
            name : 'DFB Stress',
            id : 'UnitTestHmxDFBStress'
        }, {
            name : 'CAS UI',
            id : 'UnitTestHmxCasUi'
        }, {
	          name : 'oipf DRMAgent',
	          id : 'UnitTestDRMAgent'
        }, {
	          name : 'dLNA',
	          id : 'UnitTestdHDlna'
        }, {
            name : 'oipf Bluetooth',
            id : 'UnitTestBluetooth'
        }]);

        /* goto Opera About */
        data += add_mainmenu_group('OPERA-ABOUT', [{
            name : 'goto Opera About',
            id : 'Opera_About'
        }]);

        data += add_mainmenu_group('MILTI-FONT-TEST', [{
            name : 'multi font test',
            id : 'multi_font_test'
        }]);

        //  BACK to Main App
        data += add_mainmenu_group('EXIT', [{
            name : 'Back To Main App',
            id : 'Back_to_Main_App'
        }]);

        document.getElementById('dropdown_testmenu').innerHTML = data;

        $(document).keydown(function(event) {
            function_main_event_key_handler(event);
        });

        $(".submenu").hide();
    } catch (ex) {
        alert("error in init_testpage" + ex.message);
    }
};

