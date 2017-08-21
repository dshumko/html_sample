// OIPF-T1-R2_Specification-Volume-5-Declarative-Application-Environment-v2_3-2014-01-24.pdf
describe('7.14 Media playback APIs', function() {
    "use strict";
    var avcontrol;
    beforeEach(function () {
        avcontrol= document.createElement('object');
        avcontrol.setAttribute("type", "video/mpeg");
        document.body.appendChild(avcontrol);
    });
    //describe('7.14.1 The CEA 2014 A/V Control embedded object', function () {
    //    describe('7.14.1.1 State diagram for A/V control objects', function () {});
    //    describe('7.14.1.2 Using an A/V control object to play streaming content', function () {});
    //    describe('7.14.1.3 Using an A/V control object to play downloaded content', function () {});
    //    describe('7.14.1.4 Using an A/V control object to play recorded content', function () {});
    //});
    //describe('7.14.2 Extensions to A/V Control object for playback through Content-Access Streaming Descriptor', function () {});
    describe('7.14.3 Extensions to A/V Control object for trickmodes', function () {
        describe('7.14.3.1 Properties', function(){
            it('onPlaySpeedChanged', function(){
                expect(avcontrol.onPlaySpeedChanged).toBeDefined();
            });
            it('onPlayPositionChanged', function(){
                expect(avcontrol.onPlayPositionChanged).toBeDefined();
            });
            it('playSpeeds', function(){
                expect(avcontrol.playSpeeds).toBeDefined();
            });
            it('onplaySpeedsArrayChanged', function(){
                expect(avcontrol.onplaySpeedsArrayChanged).toBeDefined();
            });
            it('oitfSourceIPAddress', function(){
                expect(avcontrol.oitfSourceIPAddress).toBeDefined();
            });
            it('oitfSourcePortAddress', function(){
                expect(avcontrol.oitfSourcePortAddress).toBeDefined();
            });
            it('oitfNoRTSPSessionControl', function(){
                expect(avcontrol.oitfNoRTSPSessionControl).toBeDefined();
            });
            it('oitfRTSPSessionId', function(){
                expect(avcontrol.oitfRTSPSessionId).toBeDefined();
            });
        });
    });
    //describe('7.14.4 Extensions to A/V Control object for playback of selected  components', function(){});
    describe('7.14.5 Extensions to A/V Control object for parental rating errors', function(){
        it('onParentalRatingChange', function () {
            expect(avcontrol.onParentalRatingChange).toBeDefined();
        });
        it('onParentalRatingError', function () {
            expect(avcontrol.onParentalRatingError).toBeDefined();
        });
    });

    describe('7.14.6 Extensions to A/V Control object for DRM rights errors', function(){
        it('onDRMRightsError', function () {
            expect(avcontrol.onDRMRightsError).toBeDefined();
        });
    });

    describe('7.14.7 Extensions to A/V Control object for playing media objects', function(){
        it('setSource', function () {
            expect(avcontrol.setSource).toBeDefined();
        });
    });

    describe('7.14.8 Extensions to A/V Control object for UI feedback of buffering A/V  content', function(){
        describe('7.14.8.1 Properties', function(){
            it('onReadyToPlay', function () {
                expect(avcontrol.onReadyToPlay).toBeDefined();
            });
            it('readyToPlay', function () {
                expect(avcontrol.readyToPlay).toBeDefined();
            });
            it('onRepresentationChange', function () {
                expect(avcontrol.onRepresentationChange).toBeDefined();
            });
            it('onPeriodChange', function () {
                expect(avcontrol.onPeriodChange).toBeDefined();
            });
            it('availableRepresentationsBandwidth', function () {
                expect(avcontrol.availableRepresentationsBandwidth).toBeDefined();
            });
            it('currentRepresentation', function () {
                expect(avcontrol.currentRepresentation).toBeDefined();
            });
            it('maxRepresentation', function () {
                expect(avcontrol.maxRepresentation).toBeDefined();
            });
            it('minRepresentation', function () {
                expect(avcontrol.minRepresentation).toBeDefined();
            });
            it('supportedStrategies', function () {
                expect(avcontrol.supportedStrategies).toBeDefined();
            });
        });
        describe('7.14.8.2 Methods', function(){
            it('getAvailablePlayTime', function () {
                expect(avcontrol.getAvailablePlayTime).toBeDefined();
            });
            it('setBufferingStrategy', function () {
                expect(avcontrol.setBufferingStrategy).toBeDefined();
            });
            it('setRepresentationStrategy', function () {
                expect(avcontrol.setRepresentationStrategy).toBeDefined();
            });
        });
    });

    describe('7.14.9 DOM 2 events for A/V Control object', function(){
        it('onfocus', function () {
            expect(avcontrol.onfocus).toBeDefined();
        });
        it('onblur', function () {
            expect(avcontrol.onblur).toBeDefined();
        });
        it('onPlayStateChange', function () {
            expect(avcontrol.onPlayStateChange).toBeDefined();
        });
        it('onFullScreenChange', function () {
            expect(avcontrol.onFullScreenChange).toBeDefined();
        });
    });

    //describe('7.14.10 Playback of audio from memory', function(){});
    describe('7.14.11 Extensions to A/V Control object for media queuing', function(){
        it('queue', function () {
            expect(avcontrol.queue).toBeDefined();
        });
    });

    describe('7.14.12 Extensions to A/V Control object for volume control', function(){
        describe('7.14.12.1 Methods', function(){
            it('getVolume', function () {
                expect(avcontrol.getVolume).toBeDefined();
            });
        });
    });
    afterEach(function () {
        document.body.removeChild(avcontrol);
    });
});