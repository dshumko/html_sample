function typeCheck(obj, name){ it(name, function() { expect(obj[name]).toBeDefined(); }); };

describe("7.16 Shared Utility classes and features", function() {
        var oipfobjectFactory = window.oipfObjectFactory;

        /* for getting Programme Collection */
        var broadcastObj = oipfobjectFactory.createHumaxVideoBroadcastObject();
        //var broadcastObj = oipfobjectFactory.createVideoBroadcastObject();
        
        var programmes = broadcastObj.programmes;
        var object = programmes[0];

        var recordingScheduler = oipfobjectFactory.createRecordingSchedulerObject()
        var disc = recordingScheduler.discInfo;

        var av  = document.createElement('object');
        av.id = 'video';
        av.type = 'video/mp4';


    describe("7.16.2 The Programme class", function() {
        describe("Constants", function() {
            it("ID_TVA_CRID", function() { expect(object.ID_TVA_CRID).toBeDefined(); });
            it("ID_DVB_EVENT", function() { expect(object.ID_DVB_EVENT).toBeDefined(); });
            it("ID_TVA_GROUP_CRID", function() { expect(object.ID_TVA_GROUP_CRID).toBeDefined(); });
        });
        describe("Properties", function() {
            it("name", function() { expect(object.name).toBeDefined(); });
            it("longName", function() { expect(object.longName).toBeDefined(); });
            it("description", function() { expect(object.description).toBeDefined(); });
            it("longDescription", function() { expect(object.longDescription).toBeDefined(); });
            it("startTime", function() { expect(object.startTime).toBeDefined(); });
            it("duration", function() { expect(object.duration).toBeDefined(); });
            it("channelID", function() { expect(object.channelID).toBeDefined(); });
            it("episode", function() { expect(object.episode).toBeDefined(); });
            it("totalEpisodes", function() { expect(object.totalEpisodes).toBeDefined(); });
            it("is3D", function() { expect(object.is3D).toBeDefined(); });
            it("programmeID", function() { expect(object.programmeID).toBeDefined(); });
            it("programmeIDType", function() { expect(object.programmeIDType).toBeDefined(); });
            it("IMI", function() { expect(object.IMI).toBeDefined(); });
            it("parentalRatings", function() { expect(object.parentalRatings).toBeDefined(); });
            it("groupCRIDs", function() { expect(object.groupCRIDs).toBeDefined(); });
        });

        describe("7.16.2.3 Metadata extensions to Programme", function() {
            describe("7.16.2.3.1 Properties", function() {
                it("channel",  function() { expect(object.channel).toBeDefined(); });
                it("blocked",  function() { expect(object.blocked).toBeDefined(); });
                it("showType",  function() { expect(object.showType).toBeDefined(); });
                it("subtitles",  function() { expect(object.subtitles).toBeDefined(); });
                it("isHD",  function() { expect(object.isHD).toBeDefined(); });
                it("audioType",  function() { expect(object.audioType).toBeDefined(); });
                it("isMultilingual",  function() { expect(object.isMultilingual).toBeDefined(); });
                it("genre",  function() { expect(object.genre).toBeDefined(); });
                it("hasRecording",  function() { expect(object.hasRecording).toBeDefined(); });
                it("audioLanguages",  function() { expect(object.audioLanguages).toBeDefined(); });
                it("subtitleLanguages",  function() { expect(object.subtitleLanguages).toBeDefined(); });
                it("locked",  function() { expect(object.locked).toBeDefined(); });
            });

            describe("7.16.2.3.2 Methods", function() {
                it("getField",  function() { expect(object.getField).toBeDefined(); });
            });

            describe("7.16.2.4 DVB-SI extensions to Programme", function() {
                it("getSIDescriptors",  function() { expect(object.getSIDescriptors).toBeDefined(); });
            });

            describe("7.16.2.5 Recording extensions to Programme", function() {
                it("recording",  function() { expect(object.recording).toBeDefined(); });
            });
        });
    });

    describe("7.16.4 The DiscInfo class", function() {
            describe("7.16.4.1 Properties", function() {
                it("free",  function() { expect(object.locked).toBeDefined(); });
                it("total",  function() { expect(object.locked).toBeDefined(); });
                it("reserved",  function() { expect(object.locked).toBeDefined(); });
            });
    });

    describe("7.16.5 Extensions for playback of selected media components", function() {
        describe("7.16.5.1 Media playback extensions", function() {
            describe("7.16.5.1.1 Constants", function() {
                it("COMPONENT_TYPE_VIDEO",  function() { expect(av.COMPONENT_TYPE_VIDEO).toBeDefined(); });
                it("COMPONENT_TYPE_AUDIO",  function() { expect(av.COMPONENT_TYPE_AUDIO).toBeDefined(); });
                it("COMPONENT_TYPE_SUBTITLE",  function() { expect(av.COMPONENT_TYPE_SUBTITLE).toBeDefined(); });
            });

            describe("Properties", function() {
                it("onSelectedComponentChanged",  function() { expect(av.locked).toBeDefined(); });
            });

            describe("Methods", function() {
                it("getComponents",  function() { expect(av.getComponents).toBeDefined(); });
                it("getCurrentActiveComponents",  function() { expect(av.getCurrentActiveComponents).toBeDefined(); });
                it("selectComponent",  function() { expect(av.selectComponent).toBeDefined(); });
                it("unselectComponent",  function() { expect(av.unselectComponent).toBeDefined(); });
            });

            describe("7.16.5.1.4 Events", function() {
            });
        });

        describe("7.16.5.2 The AVComponent class", function() {
            describe("7.16.5.2.1 Properties", function() {
                it("componentTag",  function() { expect(object.componentTag).toBeDefined(); });
                it("pid",  function() { expect(object.pid).toBeDefined(); });
                it("type",  function() { expect(object.type).toBeDefined(); });
                it("encoding",  function() { expect(object.encoding).toBeDefined(); });
                it("encrypted",  function() { expect(object.encrypted).toBeDefined(); });
            });
        });

        describe("7.16.5.3 The AVVideoComponent class", function() {
            describe("7.16.5.3.1 Properties", function() {
                it("aspectRatio",  function() { expect(object.aspectRatio).toBeDefined(); });
            });
        });

        describe("7.16.5.4 The AVAudioComponent class", function() {
            describe("7.16.5.4.1 Properties", function() {
                it("language",  function() { expect(object.componentTag).toBeDefined(); });
                it("audioDescription",  function() { expect(object.audioDescription).toBeDefined(); });
                it("audioChannels",  function() { expect(object.audioChannels).toBeDefined(); });
            });
        });

        describe("7.16.5.5 The AVSubtitleComponent class", function() {
            describe("7.16.5.5.1 Properties", function() {
                it("language",  function() { expect(object.language).toBeDefined(); });
                it("hearingImpaired",  function() { expect(object.hearingImpaired).toBeDefined(); });
            });
        });

        describe("7.16.6 Additional support for protected content", function() {
                it("isEncrypted",  function() { expect(object.isEncrypted).toBeDefined(); });
                it("DRMSystemIDs",  function() { expect(object.DRMSystemIDs).toBeDefined(); });
                it("getDRMPrivateData",  function() { expect(object.getDRMPrivateData).toBeDefined(); });
        });
    });
});
