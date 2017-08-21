var HUMAX_ON = 0;
var HBBTV_ON = 1;

var main_item = {
    items : [
        {
            "id"    : "",
            "title" : "",
            "img"   : "res/images/html5.png",
            "link"  : "index.html",
            "category"    : "html5_item",
            "description_title"   : "",
            "description"         : ""
        },
        {
            "id"    : "",
            "title" : "",
            "img"   : "res/images/ce_html.png",
            "link"  : "index.html",
            "category"    : "cehtml_item",
            "description_title"   : "",
            "description"         : ""
        },
        {
            "id"    : "",
            "title" : "",
            "img"   : "res/images/oipf.png",
            "link"  : "index.html",
            "category"    : "oipf_item",
            "description_title"   : "",
            "description"         : ""
        },
        {
            "id"    : "",
            "title" : "",
            "img"   : "res/images/oipf_2_3.png",
            "link"  : "index.html",
            "category"    : "oipf_2_3_item",
            "description_title"   : "",
            "description"         : ""
        },
        {
            "id"    : "",
            "title" : "",
            "img"   : "res/images/hbbtv.png",
            "link"  : "index.html",
            "category"    : "hbbtv_item",
            "description_title"   : "",
            "description"         : ""
        },
        {
            "id"    : "",
            "title" : "",
            "img"   : "res/images/cobra.png",
            "link"  : "index.html",
            "category"    : "cobra_item",
            "description_title"   : "",
            "description"         : ""
        },
        {
            "id"    : "",
            "title" : "",
            "img"   : "res/images/tdc.png",
            "link"  : "index.html",
            "category"    : "tdc_item",
            "description_title"   : "",
            "description"         : ""
        },
		/*
        {
            "id"    : "",
            "title" : "",
            "img"   : "res/images/network.png",
            "link"  : "index.html",
            "category"    : "network_item",
            "description_title"   : "",
            "description"         : ""
        }
		*/
    ]
};

var cobra_dir = "./tc/module/cobra/";
var cobra_item = {
    items : [
        {
            "id"    : "",
            "title" : "Home",
            "img"   : "res/images/home.png",
            "link"  : "index.html",
            "tc"    : "",
            "description_title"   : "",
            "description"         : ""
        },
        {
            "id"    : 0,
            "link"  : "index.html",
            "title" : "COBRA TEST",
            "description_title"   : "COBRA TEST",
            "description"         : "COBRA TEST",
            "tc"    : cobra_dir + "tc_cobra.js",
            "img"   : "res/images/cobra.png"
        },
    ]
};

var tdc_dir = "./tc/module/tdc/base/";
var cobra_item = {
    items : [
        {
            "id"    : "",
            "title" : "Home",
            "img"   : "res/images/home.png",
            "link"  : "index.html",
            "tc"    : "",
            "description_title"   : "",
            "description"         : ""
        },
        {
"id"    : 0,
    "link"  : "index.html",
    "title" : "TDC TEST",
    "description_title"   : "TDC TEST",
    "description"         : "TDC TEST",
    "tc"    : tdc_dir + "0714_Media_playback_APIs.spec.js",
    "img"   : "res/images/tdc.png"
},
]
};

var html5_dir = "./tc/module/html5/";
var html5_item = {
    items : [
        {
            "id"    : "",
            "title" : "Home",
            "img"   : "res/images/home.png",
            "link"  : "index.html",
            "tc"    : "",
            "description_title"   : "",
            "description"         : ""
        },
        {
            "id"    : 0,
            "title" : "HTML5 Video/Audio",
            "description_title"   : "VIDEO/AUDIO",
            "description"         : "VIDEO/AUDIO",
            "link"  : "index.html",
            "tc"    : html5_dir + "tc_video.js",
            "img"   : "res/images/html5.png"
        },
        {
            "id"    : 1,
            "title" : "HTML5 Communications",
            "description_title"   : "Communications",
            "description"         : "Communications",
            "link"  : "index.html",
            "img"   : "res/images/html5.png",
            "tc"    : html5_dir + "tc_communications.js"
        },
        {
            "id"    : 2,
            "title" : "HTML5 WebWorker",
            "description_title"   : "WebWorker",
            "description"         : "WebWorker",
            "link"  : "index.html",
            "img"   : "res/images/html5.png",
            "tc"    : html5_dir + "tc_worker.js"
        },
        {
            "id"    : 3,
            "title" : "HTML5 2D Canvas",
            "description_title"   : "2DCanvas",
            "description"         : "2DCanvas",
            "link"  : "index.html",
            "img"   : "res/images/html5.png",
            "tc"    : html5_dir + "tc_canvas.js"
        },
        {
            "id"    : 4,
            "title" : "HTML5 CSS Effects",
            "description_title"   : "CSSEffects",
            "description"         : "CSSEffects",
            "link"  : "index.html",
            "img"   : "res/images/html5.png",
            "tc"    : html5_dir + "tc_effects.js"
        },
        {
            "id"    : 6,
            "title" : "HTML5 Storage",
            "description_title"   : "Storage",
            "description"         : "Storage",
            "link"  : "index.html",
            "img"   : "res/images/html5.png",
            "tc"    : html5_dir + "tc_storage.js"
        },
    ]
};

var cehtml_dir = "./tc/module/ce_html/";
var cehtml_item = {
    items : [
        {
            "id"    : "",
            "title" : "Home",
            "img"   : "res/images/home.png",
            "link"  : "index.html",
            "tc"    : "",
            "description_title"   : "",
            "description"         : ""
        },
        {
            "id"    : 0,
            "link"  : "index.html",
            "title" : "AV CONTROL",
            "description_title"   : "AV CONTROL",
            "description"         : "AV CONTROL",
            "tc"    : cehtml_dir + "tc_avcontrol.js",
            "img"   : "res/images/ce_html.png"
        },
        {
            "id"    : 1,
            "title" : "KEY CODE",
            "link"  : "index.html",
            "description_title"   : "KEY CODE",
            "description"         : "KEY CODE",
            "tc"    : cehtml_dir + "tc_keycode.js",
            "img"   : "res/images/ce_html.png"
        },
    ]
};

var network_item = {
};

var oipf_dir = "./tc/module/oipf/";
var oipf_item = {
    items : [
        {
            "id"    : "",
            "title" : "Home",
            "img"   : "res/images/home.png",
            "link"  : "index.html",
            "tc"    : "",
            "description_title"   : "",
            "description"         : ""
        },
        {
            "id"    : 0,
            "title" : "7.1 OBJECT FACTORY",
            "img"   : "res/images/oipf.png",
            "link"  : "index.html",
            "tc"    : oipf_dir + "tc_7_1_OBJECT_FACTORY.js",
            "description_title"   : "7.1 OBJECT FACTORY",
            "description"         : "7.1 OBJECT FACTORY"
        },
        {
            "id"    : 1,
            "title" : "7.2 APPLICATION MANAGEMENT",
            "img"   : "res/images/oipf.png",
            "link"  : "index.html",
            "tc"    : oipf_dir + "tc_7_2_APPLICATION MANAGEMENT.js",
            "description_title"   : "7.2 APPLICATION MANAGEMENT",
            "description"         : "7.2 APPLICATION MANAGEMENT"
        },
        {
            "id"    : 2,
            "title" : "7.3 CONFIGURATION AND SETTING",
            "img"   : "res/images/oipf.png",
            "link"  : "index.html",
            "tc"    : oipf_dir + "tc_7_3_CONFIGURATION_AND_SETTING.js",
            "description_title"   : "7.3 CONFIGURATION AND SETTING",
            "description"         : "7.3 CONFIGURATION AND SETTING"
        },
        {
            "id"    : 3,
            "title" : "7.4 CONTENT DOWNLOAD",
            "img"   : "res/images/oipf.png",
            "link"  : "index.html",
            "tc"    : oipf_dir + "tc_7_4_CONTENT_DOWNLOAD.js",
            "description_title"   : "7.4 CONTENT DOWNLOAD",
            "description"         : "7.4 CONTENT DOWNLOAD"
        },
        {
            "id"    : 4,
            "title" : "7.5 CONTENT ON DEMAND METADATA",
            "img"   : "res/images/oipf.png",
            "link"  : "index.html",
            "tc"    : oipf_dir + "tc_7_5_CONTENT_ON_DEMAND_METADATA.js",
            "description_title"   : "7.5 CONTENT ON DEMAND METADATA",
            "description"         : "7.5 CONTENT ON DEMAND METADATA"
        },
        {
            "id"    : 5,
            "title" : "7.6 CONTENT SERVICE PROTECTION",
            "img"   : "res/images/oipf.png",
            "link"  : "index.html",
            "tc"    : oipf_dir + "tc_7_6_CONTENT_SERVICE_PROTECTION.js",
            "description_title"   : "7.6 CONTENT SERVICE PROTECTION",
            "description"         : "7.6 CONTENT SERVICE PROTECTION"
        },
        {
            "id"    : 6,
            "title" : "7.7 GATEWAY DISCOVERY AND CONTROL",
            "img"   : "res/images/oipf.png",
            "link"  : "index.html",
            "tc"    : oipf_dir + "tc_7_7_GATEWAY_DISCOVERY_AND_CONTROL.js",
            "description_title"   : "7.7 GATEWAY DISCOVERY AND CONTROL",
            "description"         : "7.7 GATEWAY DISCOVERY AND CONTROL"
        },
        {
            "id"    : 7,
            "title" : "7.8 COMMUNICATION SERVICES",
            "img"   : "res/images/oipf.png",
            "link"  : "index.html",
            "tc"    : oipf_dir + "tc_7_8_COMMUNICATION_SERVICES.js",
            "description_title"   : "7.8 COMMUNICATION SERVICES",
            "description"         : "7.8 COMMUNICATION SERVICES"
        },
        {
            "id"    : 8,
            "title" : "7.9 PARENTAL RATING AND PARENTAL CONTROL",
            "img"   : "res/images/oipf.png",
            "link"  : "index.html",
            "tc"    : oipf_dir + "tc_7_9_PARENTAL_RATING_AND_PARENTAL_CONTROL.js",
            "description_title"   : "7.9 PARENTAL RATING AND PARENTAL CONTROL",
            "description"         : "7.9 PARENTAL RATING AND PARENTAL CONTROL"
        },
        {
            "id"    : 9,
            "title" : "7.10 SCHEDULED RECORDING APIS",
            "img"   : "res/images/oipf.png",
            "link"  : "index.html",
            "tc"    : oipf_dir + "tc_7_10_SCHEDULED_RECORDING.js",
            "description_title"   : "7.10 SCHEDULED RECORDING APIS",
            "description"         : "7.10 SCHEDULED RECORDING APIS"
        },
        {
            "id"    :10,
            "title" : "7.11 REMOTE MANAGEMENT",
            "img"   : "res/images/oipf.png",
            "link"  : "index.html",
            "tc"    : oipf_dir + "tc_7_11_REMOTE_MANAGEMENT.js",
            "description_title"   : "7.11 REMOTE MANAGEMENT",
            "description"         : "7.11 REMOTE MANAGEMENT"
        },
        {
            "id"    :11,
            "title" : "7.12 METADATA",
            "img"   : "res/images/oipf.png",
            "link"  : "index.html",
            "tc"    : oipf_dir + "tc_7_12_METADATA.js",
            "description_title"   : "7.12 METADATA",
            "description"         : "7.12 METADATA"
        },
        {
            "id"    :12,
            "title" : "7.13.1 SCHEDULED CONTENT AND HYBRID TUNER",
            "img"   : "res/images/oipf.png",
            "link"  : "index.html",
            "tc"    : oipf_dir + "tc_7_13_1_SCHEDULED_CONTENT_AND_HYBRID_TUNER.js",
            "description_title"   : "7.13.1 SCHEDULED CONTENT AND HYBRID TUNER",
            "description"         : "7.13.1 SCHEDULED CONTENT AND HYBRID TUNER"
        },
        {
            "id"    :13,
            "title" : "7.13.2 SCHEDULED CONTENT AND HYBRID TUNER",
            "img"   : "res/images/oipf.png",
            "link"  : "index.html",
            "tc"    : oipf_dir + "tc_7_13_2_SCHEDULED_CONTENT_AND_HYBRID_TUNER.js",
            "description_title"   : "7.13.2 SCHEDULED CONTENT AND HYBRID TUNER",
            "description"         : "7.13.2 SCHEDULED CONTENT AND HYBRID TUNER"
        },
        {
            "id"    :14,
            "title" : "7.14 MEDIA PLAYBACK",
            "img"   : "res/images/oipf.png",
            "link"  : "index.html",
            "tc"    : oipf_dir + "tc_7_14_MEDIA_PLAYBACK.js",
            "description_title"   : "7.14 MEDIA PLAYBACK",
            "description"         : "7.14 MEDIA PLAYBACK"
        },
        {
            "id"    :15,
            "title" : "7.15 MISCELLANEOUS",
            "img"   : "res/images/oipf.png",
            "link"  : "index.html",
            "tc"    : oipf_dir + "tc_7_15_MISCELLANEOUS.js",
            "description_title"   : "7.15 MISCELLANEOUS",
            "description"         : "7.15 MISCELLANEOUS"
        },
        {
            "id"    :16,
            "title" : "7.16 SHARED UTILITY CLASSES AND FEATURES",
            "img"   : "res/images/oipf.png",
            "link"  : "index.html",
            "tc"    : oipf_dir + "tc_7_16_SHARED_UTILITY_CLASSES_AND_FEATURES.js",
            "description_title"   : "7.16 SHARED UTILITY CLASSES AND FEATURES",
            "description"         : "7.16 SHARED UTILITY CLASSES AND FEATURES"
        },
        {
            "id"    :17,
            "title" : "7.17 DLNA RUI REMOTE CONTROL FUNCTION",
            "img"   : "res/images/oipf.png",
            "link"  : "index.html",
            "tc"    : oipf_dir + "tc_7_17_DLNA_RUI_REMOTE_CONTROL_FUNCTION.js",
            "description_title"   : "7.17 DLNA RUI REMOTE CONTROL FUNCTION",
            "description"         : "7.17 DLNA RUI REMOTE CONTROL FUNCTION"
        }]
};

var oipf_2_3_dir = "./tc/module/oipf_2_3/";
var oipf_2_3_item = {
    items : [
        {
            "id"    : "",
            "title" : "Home",
            "img"   : "res/images/home.png",
            "link"  : "index.html",
            "tc"    : "",
            "description_title"   : "",
            "description"         : ""
        },
        {
            "id"    : 0,
            "title" : "7.1 OBJECT FACTORY",
            "img"   : "res/images/oipf_2_3.png",
            "link"  : "index.html",
            "tc"    : oipf_2_3_dir + "tc_7_1_OBJECT_FACTORY.js",
            "description_title"   : "7.1 OBJECT FACTORY",
            "description"         : "7.1 OBJECT FACTORY"
        },
        {
            "id"    : 1,
            "title" : "7.2 APPLICATION MANAGEMENT",
            "img"   : "res/images/oipf_2_3.png",
            "link"  : "index.html",
            "tc"    : oipf_2_3_dir + "tc_7_2_APPLICATION MANAGEMENT.js",
            "description_title"   : "7.2 APPLICATION MANAGEMENT",
            "description"         : "7.2 APPLICATION MANAGEMENT"
        },
        {
            "id"    : 2,
            "title" : "7.3 CONFIGURATION AND SETTING",
            "img"   : "res/images/oipf_2_3.png",
            "link"  : "index.html",
            "tc"    : oipf_2_3_dir + "tc_7_3_CONFIGURATION_AND_SETTING.js",
            "description_title"   : "7.3 CONFIGURATION AND SETTING",
            "description"         : "7.3 CONFIGURATION AND SETTING"
        },
        {
            "id"    : 3,
            "title" : "7.4 CONTENT DOWNLOAD",
            "img"   : "res/images/oipf_2_3.png",
            "link"  : "index.html",
            "tc"    : oipf_2_3_dir + "tc_7_4_CONTENT_DOWNLOAD.js",
            "description_title"   : "7.4 CONTENT DOWNLOAD",
            "description"         : "7.4 CONTENT DOWNLOAD"
        },
        {
            "id"    : 4,
            "title" : "7.5 CONTENT ON DEMAND METADATA",
            "img"   : "res/images/oipf_2_3.png",
            "link"  : "index.html",
            "tc"    : oipf_2_3_dir + "tc_7_5_CONTENT_ON_DEMAND_METADATA.js",
            "description_title"   : "7.5 CONTENT ON DEMAND METADATA",
            "description"         : "7.5 CONTENT ON DEMAND METADATA"
        },
        {
            "id"    : 5,
            "title" : "7.6 CONTENT SERVICE PROTECTION",
            "img"   : "res/images/oipf_2_3.png",
            "link"  : "index.html",
            "tc"    : oipf_2_3_dir + "tc_7_6_CONTENT_SERVICE_PROTECTION.js",
            "description_title"   : "7.6 CONTENT SERVICE PROTECTION",
            "description"         : "7.6 CONTENT SERVICE PROTECTION"
        },
        {
            "id"    : 6,
            "title" : "7.7 GATEWAY DISCOVERY AND CONTROL",
            "img"   : "res/images/oipf_2_3.png",
            "link"  : "index.html",
            "tc"    : oipf_2_3_dir + "tc_7_7_GATEWAY_DISCOVERY_AND_CONTROL.js",
            "description_title"   : "7.7 GATEWAY DISCOVERY AND CONTROL",
            "description"         : "7.7 GATEWAY DISCOVERY AND CONTROL"
        },
        {
            "id"    : 7,
            "title" : "7.8 COMMUNICATION SERVICES",
            "img"   : "res/images/oipf_2_3.png",
            "link"  : "index.html",
            "tc"    : oipf_2_3_dir + "tc_7_8_COMMUNICATION_SERVICES.js",
            "description_title"   : "7.8 COMMUNICATION SERVICES",
            "description"         : "7.8 COMMUNICATION SERVICES"
        },
        {
            "id"    : 8,
            "title" : "7.9 PARENTAL RATING AND PARENTAL CONTROL",
            "img"   : "res/images/oipf_2_3.png",
            "link"  : "index.html",
            "tc"    : oipf_2_3_dir + "tc_7_9_PARENTAL_RATING_AND_PARENTAL_CONTROL.js",
            "description_title"   : "7.9 PARENTAL RATING AND PARENTAL CONTROL",
            "description"         : "7.9 PARENTAL RATING AND PARENTAL CONTROL"
        },
        {
            "id"    : 9,
            "title" : "7.10 SCHEDULED RECORDING APIS",
            "img"   : "res/images/oipf_2_3.png",
            "link"  : "index.html",
            "tc"    : oipf_2_3_dir + "tc_7_10_SCHEDULED_RECORDING.js",
            "description_title"   : "7.10 SCHEDULED RECORDING APIS",
            "description"         : "7.10 SCHEDULED RECORDING APIS"
        },
        {
            "id"    :10,
            "title" : "7.11 REMOTE MANAGEMENT",
            "img"   : "res/images/oipf_2_3.png",
            "link"  : "index.html",
            "tc"    : oipf_2_3_dir + "tc_7_11_REMOTE_MANAGEMENT.js",
            "description_title"   : "7.11 REMOTE MANAGEMENT",
            "description"         : "7.11 REMOTE MANAGEMENT"
        },
        {
            "id"    :11,
            "title" : "7.12 METADATA",
            "img"   : "res/images/oipf_2_3.png",
            "link"  : "index.html",
            "tc"    : oipf_2_3_dir + "tc_7_12_METADATA.js",
            "description_title"   : "7.12 METADATA",
            "description"         : "7.12 METADATA"
        },
        {
            "id"    :12,
            "title" : "7.13.1 SCHEDULED CONTENT AND HYBRID TUNER",
            "img"   : "res/images/oipf_2_3.png",
            "link"  : "index.html",
            "tc"    : oipf_2_3_dir + "tc_7_13_1_SCHEDULED_CONTENT_AND_HYBRID_TUNER.js",
            "description_title"   : "7.13.1 SCHEDULED CONTENT AND HYBRID TUNER",
            "description"         : "7.13.1 SCHEDULED CONTENT AND HYBRID TUNER"
        },
        {
            "id"    :13,
            "title" : "7.13.2 SCHEDULED CONTENT AND HYBRID TUNER",
            "img"   : "res/images/oipf_2_3.png",
            "link"  : "index.html",
            "tc"    : oipf_2_3_dir + "tc_7_13_2_SCHEDULED_CONTENT_AND_HYBRID_TUNER.js",
            "description_title"   : "7.13.2 SCHEDULED CONTENT AND HYBRID TUNER",
            "description"         : "7.13.2 SCHEDULED CONTENT AND HYBRID TUNER"
        },
        {
            "id"    :14,
            "title" : "7.14 MEDIA PLAYBACK",
            "img"   : "res/images/oipf_2_3.png",
            "link"  : "index.html",
            "tc"    : oipf_2_3_dir + "tc_7_14_MEDIA_PLAYBACK.js",
            "description_title"   : "7.14 MEDIA PLAYBACK",
            "description"         : "7.14 MEDIA PLAYBACK"
        },
        {
            "id"    :15,
            "title" : "7.15 MISCELLANEOUS",
            "img"   : "res/images/oipf_2_3.png",
            "link"  : "index.html",
            "tc"    : oipf_2_3_dir + "tc_7_15_MISCELLANEOUS.js",
            "description_title"   : "7.15 MISCELLANEOUS",
            "description"         : "7.15 MISCELLANEOUS"
        },
        {
            "id"    :16,
            "title" : "7.16 SHARED UTILITY CLASSES AND FEATURES",
            "img"   : "res/images/oipf_2_3.png",
            "link"  : "index.html",
            "tc"    : oipf_2_3_dir + "tc_7_16_SHARED_UTILITY_CLASSES_AND_FEATURES.js",
            "description_title"   : "7.16 SHARED UTILITY CLASSES AND FEATURES",
            "description"         : "7.16 SHARED UTILITY CLASSES AND FEATURES"
        },
        {
            "id"    :17,
            "title" : "7.17 DLNA RUI REMOTE CONTROL FUNCTION",
            "img"   : "res/images/oipf_2_3.png",
            "link"  : "index.html",
            "tc"    : oipf_2_3_dir + "tc_7_17_DLNA_RUI_REMOTE_CONTROL_FUNCTION.js",
            "description_title"   : "7.17 DLNA RUI REMOTE CONTROL FUNCTION",
            "description"         : "7.17 DLNA RUI REMOTE CONTROL FUNCTION"
        }]
};

var hbbtv_dir = "./tc/module/hbbtv/";
var hbbtv_item = {
    items : [
        {
            "id"    : "",
            "title" : "Home",
            "img"   : "res/images/home.png",
            "link"  : "index.html",
            "tc"    : "",
            "description_title"   : "",
            "description"         : ""
        },
        {
            "id"    : 0,
            "title" : "7.1 OBJECT FACTORY",
            "img"   : "res/images/hbbtv.png",
            "link"  : "index.html",
            "tc"    : hbbtv_dir + "tc_7_1_OBJECT_FACTORY.js",
            "description_title"   : "7.1 OBJECT FACTORY",
            "description"         : "7.1 OBJECT FACTORY"
        },
        {
            "id"    : 1,
            "title" : "7.2 APPLICATION MANAGEMENT",
            "img"   : "res/images/hbbtv.png",
            "link"  : "index.html",
            "tc"    : hbbtv_dir + "tc_7_2_APPLICATION MANAGEMENT.js",
            "description_title"   : "7.2 APPLICATION MANAGEMENT",
            "description"         : "7.2 APPLICATION MANAGEMENT"
        },
        {
            "id"    : 2,
            "title" : "7.3 CONFIGURATION AND SETTING",
            "img"   : "res/images/hbbtv.png",
            "link"  : "index.html",
            "tc"    : hbbtv_dir + "tc_7_3_CONFIGURATION_AND_SETTING.js",
            "description_title"   : "7.3 CONFIGURATION AND SETTING",
            "description"         : "7.3 CONFIGURATION AND SETTING"
        },
        {
            "id"    : 3,
            "title" : "7.4 CONTENT DOWNLOAD",
            "img"   : "res/images/hbbtv.png",
            "link"  : "index.html",
            "tc"    : hbbtv_dir + "tc_7_4_CONTENT_DOWNLOAD.js",
            "description_title"   : "7.4 CONTENT DOWNLOAD",
            "description"         : "7.4 CONTENT DOWNLOAD"
        },
        {
            "id"    : 4,
            "title" : "7.5 CONTENT ON DEMAND METADATA",
            "img"   : "res/images/hbbtv.png",
            "link"  : "index.html",
            "tc"    : hbbtv_dir + "tc_7_5_CONTENT_ON_DEMAND_METADATA.js",
            "description_title"   : "7.5 CONTENT ON DEMAND METADATA",
            "description"         : "7.5 CONTENT ON DEMAND METADATA"
        },
        {
            "id"    : 5,
            "title" : "7.6 CONTENT SERVICE PROTECTION",
            "img"   : "res/images/hbbtv.png",
            "link"  : "index.html",
            "tc"    : hbbtv_dir + "tc_7_6_CONTENT_SERVICE_PROTECTION.js",
            "description_title"   : "7.6 CONTENT SERVICE PROTECTION",
            "description"         : "7.6 CONTENT SERVICE PROTECTION"
        },
        {
            "id"    : 6,
            "title" : "7.7 GATEWAY DISCOVERY AND CONTROL",
            "img"   : "res/images/hbbtv.png",
            "link"  : "index.html",
            "tc"    : hbbtv_dir + "tc_7_7_GATEWAY_DISCOVERY_AND_CONTROL.js",
            "description_title"   : "7.7 GATEWAY DISCOVERY AND CONTROL",
            "description"         : "7.7 GATEWAY DISCOVERY AND CONTROL"
        },
        {
            "id"    : 7,
            "title" : "7.8 COMMUNICATION SERVICES",
            "img"   : "res/images/hbbtv.png",
            "link"  : "index.html",
            "tc"    : hbbtv_dir + "tc_7_8_COMMUNICATION_SERVICES.js",
            "description_title"   : "7.8 COMMUNICATION SERVICES",
            "description"         : "7.8 COMMUNICATION SERVICES"
        },
        {
            "id"    : 8,
            "title" : "7.9 PARENTAL RATING AND PARENTAL CONTROL",
            "img"   : "res/images/hbbtv.png",
            "link"  : "index.html",
            "tc"    : hbbtv_dir + "tc_7_9_PARENTAL_RATING_AND_PARENTAL_CONTROL.js",
            "description_title"   : "7.9 PARENTAL RATING AND PARENTAL CONTROL",
            "description"         : "7.9 PARENTAL RATING AND PARENTAL CONTROL"
        },
        {
            "id"    : 9,
            "title" : "7.10 SCHEDULED RECORDING APIS",
            "img"   : "res/images/hbbtv.png",
            "link"  : "index.html",
            "tc"    : hbbtv_dir + "tc_7_10_SCHEDULED_RECORDING.js",
            "description_title"   : "7.10 SCHEDULED RECORDING APIS",
            "description"         : "7.10 SCHEDULED RECORDING APIS"
        },
        {
            "id"    :10,
            "title" : "7.11 REMOTE MANAGEMENT",
            "img"   : "res/images/hbbtv.png",
            "link"  : "index.html",
            "tc"    : hbbtv_dir + "tc_7_11_REMOTE_MANAGEMENT.js",
            "description_title"   : "7.11 REMOTE MANAGEMENT",
            "description"         : "7.11 REMOTE MANAGEMENT"
        },
        {
            "id"    :11,
            "title" : "7.12 METADATA",
            "img"   : "res/images/hbbtv.png",
            "link"  : "index.html",
            "tc"    : hbbtv_dir + "tc_7_12_METADATA.js",
            "description_title"   : "7.12 METADATA",
            "description"         : "7.12 METADATA"
        },
        {
            "id"    :12,
            "title" : "7.13.1 SCHEDULED CONTENT AND HYBRID TUNER",
            "img"   : "res/images/hbbtv.png",
            "link"  : "index.html",
            "tc"    : hbbtv_dir + "tc_7_13_1_SCHEDULED_CONTENT_AND_HYBRID_TUNER.js",
            "description_title"   : "7.13.1 SCHEDULED CONTENT AND HYBRID TUNER",
            "description"         : "7.13.1 SCHEDULED CONTENT AND HYBRID TUNER"
        },
        {
            "id"    :13,
            "title" : "7.13.2 SCHEDULED CONTENT AND HYBRID TUNER",
            "img"   : "res/images/hbbtv.png",
            "link"  : "index.html",
            "tc"    : hbbtv_dir + "tc_7_13_2_SCHEDULED_CONTENT_AND_HYBRID_TUNER.js",
            "description_title"   : "7.13.2 SCHEDULED CONTENT AND HYBRID TUNER",
            "description"         : "7.13.2 SCHEDULED CONTENT AND HYBRID TUNER"
        },
        {
            "id"    :14,
            "title" : "7.14 MEDIA PLAYBACK",
            "img"   : "res/images/hbbtv.png",
            "link"  : "index.html",
            "tc"    : hbbtv_dir + "tc_7_14_MEDIA_PLAYBACK.js",
            "description_title"   : "7.14 MEDIA PLAYBACK",
            "description"         : "7.14 MEDIA PLAYBACK"
        },
        {
            "id"    :15,
            "title" : "7.15 MISCELLANEOUS",
            "img"   : "res/images/hbbtv.png",
            "link"  : "index.html",
            "tc"    : hbbtv_dir + "tc_7_15_MISCELLANEOUS.js",
            "description_title"   : "7.15 MISCELLANEOUS",
            "description"         : "7.15 MISCELLANEOUS"
        },
        {
            "id"    :16,
            "title" : "7.16 SHARED UTILITY CLASSES AND FEATURES",
            "img"   : "res/images/hbbtv.png",
            "link"  : "index.html",
            "tc"    : hbbtv_dir + "tc_7_16_SHARED_UTILITY_CLASSES_AND_FEATURES.js",
            "description_title"   : "7.16 SHARED UTILITY CLASSES AND FEATURES",
            "description"         : "7.16 SHARED UTILITY CLASSES AND FEATURES"
        },
        {
            "id"    :17,
            "title" : "7.17 DLNA RUI REMOTE CONTROL FUNCTION",
            "img"   : "res/images/hbbtv.png",
            "link"  : "index.html",
            "tc"    : hbbtv_dir + "tc_7_17_DLNA_RUI_REMOTE_CONTROL_FUNCTION.js",
            "description_title"   : "7.17 DLNA RUI REMOTE CONTROL FUNCTION",
            "description"         : "7.17 DLNA RUI REMOTE CONTROL FUNCTION"
        }]
};

function drow_main_header(){
    var div = document.createElement("div");
    div.innerHTML = "<div class='maia-header' id='maia-header' role='banner'>" +
                    "<div class='maia-aux'>" +
                    "<h1> <img alt='Humax' src='res/images/auto.png'></h1>" +
                    "</div> </div>";

    document.body.appendChild(div);
}

function drow_module_header() {
    var div = document.createElement("div");
    div.innerHTML =  "<div id='main'>" +
                        "<h1 id='main-header'>" +
                         "<a>Select Test Suite</a>" +
                        "</h1>" +
                    "</div>";
    document.body.appendChild(div);
}

function drow_coverflow_menu(menu) {
    var div = document.createElement("div");
    div.innerHTML = "<div id='coverflow' class='coverflow'>" +
                        "<div class='coverflow-wrapper'>" +
                            "<ul id='coverflow-list' class='coverflow-list'></ul>" +
                        "</div>" +
                    "</div>";
    document.body.appendChild(div);

    var list = document.getElementById("coverflow-list");

    if(!list){
        console.error("cann't find <coverflow-list>");
        return;
    }

    for (var i = 0; i < menu.items.length; i++) {
        var item = menu.items[i];

        var list_item = document.createElement("li");
        list_item.className = "coverflow-item";
        list_item.setAttribute("goto", item.link + "?category=" + item.category+ "&title=" + item.title + "&tc=" + item.tc);

        var list_div_label = document.createElement("div");
        list_div_label.className = "coverflow-label";
        list_div_label.innerHTML = item.title;

        var list_div_infos = document.createElement("div");
        list_div_infos.className = "coverflow-infos";

        var img = document.createElement("img");
        img.setAttribute("src", item.img);
        img.className = "item";

        list_item.appendChild(list_div_label);
        list_item.appendChild(list_div_infos);
        list_item.appendChild(img);

        list.appendChild(list_item);
    }
}

/* from http://james.padolsey.com/javascript/parsing-urls-with-the-dom/ */
function parseURL(url) {
    var a =  document.createElement('a');
    a.href = url;
    return {
        source: url,
        protocol: a.protocol.replace(':',''),
        host: a.hostname,
        port: a.port,
        query: a.search,
        params: (function(){
            var ret = {},
                seg = a.search.replace(/^\?/,'').split('&'),
                len = seg.length, i = 0, s;
            for (;i<len;i++) {
                if (!seg[i]) { continue; }
                s = seg[i].split('=');
                ret[s[0]] = s[1];
            }
            return ret;
        })(),
        file: (a.pathname.match(/\/([^\/?#]+)$/i) || [,''])[1],
        hash: a.hash.replace('#',''),
        path: a.pathname.replace(/^([^\/])/,'/$1'),
        relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [,''])[1],
        segments: a.pathname.replace(/^\//,'').split('/')
    };
}


function load_coverflow() {
    var cover  = document.createElement('script');
    cover.src = "./js/jquery.coverflow.js";
    cover.onload = function(){
        var coverflow = new $.coverflow($('#coverflow'));
    };

    document.head.appendChild(cover);
}

