describe("7.14 Media playback APIs", function() {
    var avControl  = document.createElement('object');
    avControl.id = 'video';
    avControl.type = 'video/mp4';

    try{
     //   oipfobjectFactory = window.oipfObjectFactory;
     //   avControl = oipfobjectFactory.createVideoMpegObject();
    }catch(e){
        avControl = undefined;
    }

    describe("7.14.1 The A/V Control object", function() {
        it("data", function() { expect(avControl.data).toBeDefined(); });
        it("playPosition", function() { expect(avControl.playPosition).toBeDefined(); });
        it("playTime", function() { expect(avControl.playTime).toBeDefined(); });
        it("playState", function() { expect(avControl.playState).toBeDefined(); });
        it("error", function() { expect(avControl.error).toBeDefined(); });
        it("speed", function() { expect(avControl.speed).toBeDefined(); });
        it("onPlayStateChange", function() { expect(avControl.onPlayStateChange).toBeDefined(); });
        it("width", function() { expect(avControl.width).toBeDefined(); });
        it("height", function() { expect(avControl.height).toBeDefined(); });
        it("fullScreen", function() { expect(avControl.fullScreen).toBeDefined(); });
        it("onFullScreenChange", function() { expect(avControl.onFullScreenChange).toBeDefined(); });
        it("onfocus", function() { expect(avControl.onfocus).toBeDefined(); });
        it("onblur", function() { expect(avControl.onblur).toBeDefined(); });
        it("play", function() { expect(avControl.play).toBeDefined(); });
        it("stop", function() { expect(avControl.stop).toBeDefined(); });
        it("seek", function() { expect(avControl.seek).toBeDefined(); });
        it("setVolume", function() { expect(avControl.setVolume).toBeDefined(); });
        it("setFullScreen", function() { expect(avControl.setFullScreen).toBeDefined(); });
        it("focus", function() { expect(avControl.focus).toBeDefined(); });
    });
    describe("7.14.3 Extensions to A/V Control object for trickmodes", function() {
        describe("7.14.3.1 Properties", function() {
            it("onPlaySpeedChanged", function() { expect(avControl.onPlaySpeedChanged).toBeDefined(); });
            it("onPlayPositionChanged", function() { expect(avControl.onPlayPositionChanged).toBeDefined(); });
            it("playSpeeds", function() { expect(avControl.playSpeeds).toBeDefined(); });
            it("onplaySpeedsArrayChanged", function() { expect(avControl.onplaySpeedsArrayChanged).toBeDefined(); });
            it("oitfSourceIPAddress", function() { expect(avControl.oitfSourceIPAddress).toBeDefined(); });
            it("oitfSourcePortAddress", function() { expect(avControl.oitfSourcePortAddress).toBeDefined(); });
            it("oitfNoRTSPSessionControl", function() { expect(avControl.oitfNoRTSPSessionControl).toBeDefined(); });
            it("oitfRTSPSessionId", function() { expect(avControl.oitfRTSPSessionId).toBeDefined(); });
        });
    });
    describe("7.14.5 Extensions to A/V Control object for parental rating errors", function() {
        it("onParentalRatingChange", function() { expect(avControl.onParentalRatingChange).toBeDefined(); });
        it("onParentalRatingError", function() { expect(avControl.onParentalRatingError).toBeDefined(); });
    });
    describe("7.14.6 Extensions to A/V Control object for DRM rights errors", function() {
        it("onDRMRightsError", function() { expect(avControl.onDRMRightsError).toBeDefined(); });
    });
    describe("7.14.7 Extensions to A/V Control object for playing media objects", function() {
        it("setSource", function() { expect(avControl.setSource).toBeDefined(); });
    });
    describe("7.14.8 Extensions to A/V Control object for UI feedback of buffering A/V content", function() {
        describe("7.14.8.1 Properties", function() {
            it("readyToPlay", function() { expect(avControl.readyToPlay).toBeDefined(); });
            it("onReadyToPlay", function() { expect(avControl.onReadyToPlay).toBeDefined(); });
            it("onRepresentationChange", function() { expect(avControl.onRepresentationChange).toBeDefined(); });
            it("onPeriodChange", function() { expect(avControl.onPeriodChange).toBeDefined(); });
            it("availableRepresentationsBandwidth", function() { expect(avControl.availableRepresentationsBandwidth).toBeDefined(); });
            it("availableRepresentationIds", function() { expect(avControl.availableRepresentationIds).toBeDefined(); });
            it("currentRepresentation", function() { expect(avControl.currentRepresentation).toBeDefined(); });
            it("currentRepresentationId", function() { expect(avControl.currentRepresentationId).toBeDefined(); });
            it("maxRepresentation", function() { expect(avControl.maxRepresentation).toBeDefined(); });
            it("minRepresentation", function() { expect(avControl.minRepresentation).toBeDefined(); });
            it("supportedStrategies", function() { expect(avControl.supportedStrategies).toBeDefined(); });
        });
        describe("7.14.8.2 Methods", function() {
            it("getAvailablePlayTime", function() { expect(avControl.getAvailablePlayTime).toBeDefined(); });
            it("setBufferingStrategy", function() { expect(avControl.setBufferingStrategy).toBeDefined(); });
            it("setRepresentationStrategy", function() { expect(avControl.setRepresentationStrategy).toBeDefined(); });
        });
    });
    describe("7.14.11 Extensions to A/V Control object for media queuing", function() {
        it("queue", function() { expect(avControl.queue).toBeDefined(); });
    });
    describe("7.14.12 Extensions to A/V Control object for volume control", function() {
        describe("7.14.12.1 Methods", function() {
            it("getVolume", function() { expect(avControl.getVolume).toBeDefined(); });
        });
    });
    describe("7.14.13 Extensions to A/V Control object for resource management", function() {
        describe("7.14.13.1 Constants", function() {
            it("STATIC_ALLOCATION", function() { expect(avControl.STATIC_ALLOCATION).toBeDefined(); });
            it("DYNAMIC_ALLOCATION", function() { expect(avControl.DYNAMIC_ALLOCATION).toBeDefined(); });
        });
        describe("7.14.13.2 Properties", function() {
            it("playerCapabilities", function() { expect(avControl.playerCapabilities).toBeDefined(); });
            it("allocationMethod", function() { expect(avControl.allocationMethod).toBeDefined(); });
        });
    });
});
