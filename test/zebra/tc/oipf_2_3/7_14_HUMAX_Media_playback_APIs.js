describe("7.14 Media playback APIs", function() {
    var oipfobjectFactory;
    var avControl;

    try{
        oipfobjectFactory = window.oipfObjectFactory;
        avControl = oipfobjectFactory.createVideoMpegObject();
    }catch(e){
        avControl = undefined;
    }

    describe("7.14.1 The A/V Control object", function() {
        describe("Hmx Properties", function() {
            it("BufferingProgress", function() { expect(avControl.BufferingProgress).toBeDefined(); });
            it("BufferingTime", function() { expect(avControl.BufferingTime).toBeDefined(); });
            it("PdlChunks", function() { expect(avControl.PdlChunks).toBeDefined(); });
            it("ReadyState", function() { expect(avControl.ReadyState).toBeDefined(); });
            it("hasSubtitle", function() { expect(avControl.hasSubtitle).toBeDefined(); });
            it("SubtitleDisplay", function() { expect(avControl.SubtitleDisplay).toBeDefined(); });
            it("SubtitleLanguage", function() { expect(avControl.SubtitleLanguage).toBeDefined(); });
            it("SubtitleSyncTime", function() { expect(avControl.SubtitleSyncTime).toBeDefined(); });
            it("SubtitleFontSize", function() { expect(avControl.SubtitleFontSize).toBeDefined(); });
            it("SubtitleTextPosition", function() { expect(avControl.SubtitleTextPosition).toBeDefined(); });
            it("SubtitleSupportLanguages", function() { expect(avControl.SubtitleSupportLanguages).toBeDefined(); });
            it("trickRestrictMode", function() { expect(avControl.trickRestrictMode).toBeDefined(); });
            it("onReadyStateChange", function() { expect(avControl.onReadyStateChange).toBeDefined(); });
            it("onTrickRestrictModeChanged", function() { expect(avControl.onTrickRestrictModeChanged).toBeDefined(); });
            it("onAudioPathAcquired", function() { expect(avControl.onAudioPathAcquired).toBeDefined(); });
            it("onAudioPathReleased", function() { expect(avControl.onAudioPathReleased).toBeDefined(); });

        });
        describe("Hmx Methods", function() {
            it("offComponent", function() { expect(avControl.offComponent).toBeDefined(); });
            it("getPlayingThumbnail", function() { expect(avControl.getPlayingThumbnail).toBeDefined(); });
            it("requestAudioPath", function() { expect(avControl.requestAudioPath).toBeDefined(); });
            it("hasAudioPath", function() { expect(avControl.hasAudioPath).toBeDefined(); });
        });
    });
});