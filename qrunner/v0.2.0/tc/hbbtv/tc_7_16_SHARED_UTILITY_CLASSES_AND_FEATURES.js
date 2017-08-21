var LOG_ON = 1;

var LOG = function(string){
	if( 1 == LOG_ON ) window.debug("#### LOG(Qrunner) : " + string);
};

//start test
var oipfobjectFactory = window.oipfObjectFactory;
var videoBroadcast = undefined;
var programmeCollection = undefined;
var programme = undefined;
var recordingScheduler = undefined;
var discInfo = undefined;
var avControl = undefined;
var avComponent = undefined;
var avVideoComponent = undefined;
var avAudioComponent = undefined;
var avSubtitleComponent = undefined;
var avComponentCollection = undefined;
var avVideoComponentCollection = undefined;
var avAudioComponentCollection = undefined;
var avSubtitleComponentCollection = undefined;
var recording = undefined;

var COMPONENT_TYPE_VIDEO = 0;
var COMPONENT_TYPE_AUDIO = 1;
var COMPONENT_TYPE_SUBTITLE = 2;

//test
var _body = document.getElementById('qrunner');
var vplayer  = document.createElement('object');
vplayer.id = 'video';
vplayer.type = 'video/broadcast';
_body.appendChild(vplayer);



if( oipfobjectFactory !== undefined )
{
    try {
    	videoBroadcast = oipfobjectFactory.createVideoBroadcastObject();
    	programmeCollection = videoBroadcast.programmes;
    	programme = programmeCollection[0];
        avComponentCollection = videoBroadcast.getComponents(COMPONENT_TYPE_VIDEO);
        avComponent = avComponentCollection[0];
        avVideoComponentCollection = videoBroadcast.getComponents(COMPONENT_TYPE_VIDEO);
        avVideoComponent = avVideoComponentCollection[0];
        avAudioComponentCollection = videoBroadcast.getComponents(COMPONENT_TYPE_AUDIO);
        avAudioComponent = avAudioComponentCollection[0];
        avSubtitleComponentCollection = videoBroadcast.getComponents(COMPONENT_TYPE_SUBTITLE);
        avSubtitleComponent = avSubtitleComponentCollection[0];
        avComponentCollection = videoBroadcast.getCurrentActiveComponents(COMPONENT_TYPE_VIDEO);
    } catch (e)
    {
        console.log(e);
    }
}
if( oipfobjectFactory !== undefined )
{
    try {
    	recordingScheduler = oipfobjectFactory.createRecordingSchedulerObject();
    	discInfo = ecordingScheduler.discInfo;
    	recording = recordingScheduler.getRecording("");
    } catch (e)
    {
        console.log(e);
    }
}
if( oipfobjectFactory !== undefined )
{
    try {
    	avControl = oipfobjectFactory.createVideoMpegObject();
    } catch (e)
    {
        console.log(e);
    }
}

module("Programme");
test("name", function() {
    try {
    	LOG(programme.name);
        ok(programme.name !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

test("description", function() {
    try {
        ok(programme.description !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("longDescription", function() {
    try {
        ok(programme.longDescription !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("startTime", function() {
    try {
        ok(programme.startTime !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("duration", function() {
    try {
        ok(programme.duration !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("channelID", function() {
    try {
        ok(programme.channelID !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("programmeID", function() {
    try {
        ok(programme.programmeID !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("programmeIDType", function() {
    try {
        ok(programme.programmeIDType !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("parentalRatings", function() {
    try {
        ok(programme.parentalRatings !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

module("DVB-SI extensions");

/**
 * 0x63 Partial Transport Stream descriptor (SIT)
 * 0x85 Broadcaster ID (SIT)
 * 0x88 DTCP (PMT)
 * 0xC0 Hierarchical transmission descriptor (PMT)
 * 0xC1 Digital copy control descriptor (PMT)
 * 0xC2 Network Identification descriptor (SIT)
 * 0xC3 Partial Transport Stream Time descriptor (SIT)
 * 0xC4 Audio component descriptor (EIT)
 * 0xC5 Hyper link descriptor
 * 0xC6 Target Area descriptor
 * 0xC7 Data contents descriptor (EIT)
 * 0xC8 Video decode control descriptor (PMT)
 * 0xC9 Download content descriptor(Note1)
 * 0xCA CA_EMM_TS descriptor 
 * 0xCB CA contract information descriptor 
 * 0xCC CA service descriptor
 * 0xCD TS information descriptor (NIT)
 * 0xCE Extended broadcaster (BIT)
 * 0xCF Logo transmission
 * 0xF9 Cable TS division system (NIT)
 * 0xFA Terrestrial delivery system (NIT)
 * 0xFB Partial reception (NIT)
 * 0xFC Emergency information descriptor (PMT/NIT)
 * 0xFD Data component descriptor (PMT)
 * 0xFE System management descriptor (PMT/NIT/TLV-NIT)
 * 0xD5 Series descriptor (EIT)
 * 0xD6 Event group descriptor
 * 0xD7 SI parameter descriptor (BIT)
 * 0xD8 Broadcaster name descriptor (BIT) 
 * 0xD9 Component group descriptor (EIT)
 * 0xDE Content availability descriptor (EIT)
 */
test("getSIDescriptors()", function() {
    try {
        ok(programme.getSIDescriptors !== undefined, "is exists");
        LOG("getSIDescriptors : 0x85 - length:" + programme.getSIDescriptors(0x85, 0, 0).length);
    } catch (e) {
        ok (false, "not exists");
    }
});

module("ProgrammeCollection");
test("ProgrammeCollection", function() {
    try {
        ok(programmeCollection !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

module("playback of selected media components");
test("label", function() {
    try {
        ok(avControl.label !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("onSelectedComponentChanged", function() {
    try {
        ok(avControl.onSelectedComponentChanged !== undefined, "is exists");
        videoBroadcast.onSelectedComponentChanged = function( componentType ) {
    		LOG("onSelectedComponentChanged : " + componentType);
    	};
    } catch (e) {
        ok (false, "not exists");
    }
});
test("getComponents()", function() {
    try {
        ok(avControl.getComponents !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("getCurrentActiveComponents()", function() {
    try {
        ok(avControl.getCurrentActiveComponents !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("selectComponent()", function() {
    try {
        ok(avControl.selectComponent !== undefined, "is exists");
        videoBroadcast.selectComponent(avAudioComponent);
    } catch (e) {
        ok (false, "not exists");
    }
});
test("unselectComponent()", function() {
    try {
        ok(avControl.unselectComponent !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});


module("AVComponent");

/** 
* @mainpage 8.4.2 AVComponent 
* @brief componentTag 
* @details 
* MP4 FF : Not Defined
* 		MPEG DASH : value of the id attribute in the AdaptationSet
*		MPEG-2 TS ( With DVB-SI component_ descriptor in SDT and/or EIT , Without DVB-SI SDT and EIT ) 
*     		: The contents of the component_tag field in the stream_identifier_descriptor in PMT 
*/
test("componentTag", function() {
    try {
        ok(avComponent.componentTag !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("pid", function() {
    try {
        ok(avComponent.pid !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("type", function() {
    try {
        ok(avComponent.type !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("encoding", function() {
    try {
        ok(avComponent.encoding !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("encrypted", function() {
    try {
        ok(avComponent.encrypted !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

module("AVVideoComponent");
test("aspectRatio", function() {
    try {
        ok(avVideoComponent.aspectRatio !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

module("AVAudioComponent");
test("language", function() {
    try {
        ok(avAudioComponent.language !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("audioDescription", function() {
    try {
        ok(avAudioComponent.audioDescription !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("audioChannels", function() {
    try {
        ok(avAudioComponent.audioChannels !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

module("AVSubtitleComponent");
test("language", function() {
    try {
        ok(avSubtitleComponent.language !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("hearingImpaired", function() {
    try {
        ok(avSubtitleComponent.hearingImpaired !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});


module("AVComponentCollection");
test("avComponentCollection", function() {
    try {
        ok(avComponentCollection !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

module("Additional support for protected content");
test("isEncrypted", function() {
    try {
        ok(recording.isEncrypted !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("DRMSystemIDs", function() {
    try {
        ok(recording.DRMSystemIDs !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("getDRMPrivateData()", function() {
    try {
        ok(recording.getDRMPrivateData !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});