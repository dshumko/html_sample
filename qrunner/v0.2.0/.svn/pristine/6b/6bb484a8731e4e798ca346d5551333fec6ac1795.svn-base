
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

var COMPONENT_TYPE_VIDEO = 0;
var COMPONENT_TYPE_AUDIO = 1;
var COMPONENT_TYPE_SUBTITLE = 2;


if( oipfobjectFactory !== undefined )
{
    try {
    	videoBroadcast = oipfobjectFactory.createVideoBroadcastObject();
    	programmeCollection = videoBroadcast.programmes;
    	programme = programmeCollection[0];
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
        ok(programme.name !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

if(HBBTV_ON==0){
test("longName", function() {
    try {
        ok(programme.longName !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});}

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

if(HBBTV_ON==0){
test("episode", function() {
    try {
        ok(programme.episode !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("totalEpisodes", function() {
    try {
        ok(programme.totalEpisodes !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});}

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

if(HBBTV_ON==0){
test("IMI", function() {
    try {
        ok(programme.IMI !== undefined, "is exists");
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
test("groupCRIDs", function() {
    try {
        ok(programme.groupCRIDs !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("channel", function() {
    try {
        ok(programme.channel !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("blocked", function() {
    try {
        ok(programme.blocked !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("showType", function() {
    try {
        ok(programme.showType !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("subtitles", function() {
    try {
        ok(programme.subtitles !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("isHD", function() {
    try {
        ok(programme.isHD !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("audioType", function() {
    try {
        ok(programme.audioType !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("isMultilingual", function() {
    try {
        ok(programme.isMultilingual !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("genre", function() {
    try {
        ok(programme.genre !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});


test("hasRecording", function() {
    try {
        ok(programme.hasRecording !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("audioLanguages", function() {
    try {
        ok(programme.audioLanguages !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("subtitleLanguages", function() {
    try {
        ok(programme.subtitleLanguages !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("locked", function() {
    try {
        ok(programme.locked !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("getField()", function() {
    try {
        ok(programme.getField !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
}

module("DVB-SI extensions");
test("getSIDescriptors()", function() {
    try {
        ok(programme.getSIDescriptors !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});


if(HBBTV_ON==0){
module("Recording extensions");
test("recording()", function() {
    try {
        ok(programme.recording !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});}


module("ProgrammeCollection");
test("ProgrammeCollection", function() {
    try {
        ok(programmeCollection !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});


if(HBBTV_ON==0){
module("DiscInfo");
test("free", function() {
    try {
        ok(discInfo.free !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("total", function() {
    try {
        ok(discInfo.total !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("reserved", function() {
    try {
        ok(discInfo.reserved !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});}

module("playback of selected media components");


test("onSelectedComponentChanged", function() {
    try {
        ok(avControl.onSelectedComponentChanged !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("getComponents()", function() {
    try {
        ok(avControl.getComponents !== undefined, "is exists");
        avComponentCollection = avControl.getComponents(COMPONENT_TYPE_VIDEO);
        avComponent = avComponentCollection[0];
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


try {
	avVideoComponent = avControl.getComponents(COMPONENT_TYPE_VIDEO)[0];
} catch (e) {

}
module("AVVideoComponent");
test("aspectRatio", function() {
    try {
        ok(avVideoComponent.aspectRatio !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});


try {
	avAudioComponent = avControl.getComponents(COMPONENT_TYPE_AUDIO)[0];
} catch (e) {

}
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


try {
	avSubtitleComponent = avControl.getComponents(COMPONENT_TYPE_SUBTITLE)[0];
} catch (e) {

}
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


try {
	avComponentCollection = avControl.getCurrentActiveComponents(COMPONENT_TYPE_VIDEO);
} catch (e) {

}
module("AVComponentCollection");
test("avComponentCollection", function() {
    try {
        ok(avComponentCollection !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
