// OIPF-T1-R2_Specification-Volume-5-Declarative-Application-Environment-v2_3-2014-01-24.pdf
describe('7.6 Content Service Protection API', function() {
    "use strict";
    /*The following requirements SHALL apply to OITF and/or server devices which have indicated support for DRM
     protection by providing one or more <drm> elements as specified in Section 9.3.10:*/
    describe('7.6.1 The application/oipfDrmAgent embedded object', function () {
        var drmAgent;
        beforeEach(function () {
            drmAgent = document.createElement('object');
            drmAgent.setAttribute("type", "application/oipfDrmAgent");
            document.body.appendChild(drmAgent);
        });
        describe('7.6.1.1 Properties', function(){
            it('onDRMMessageResult', function(){
                expect(drmAgent.onDRMMessageResult).toBeDefined();
            });
            it('onDRMSystemStatusChange', function(){
                expect(drmAgent.onDRMSystemStatusChange).toBeDefined();
            });
            it('onDRMSystemMessage', function(){
                expect(drmAgent.onDRMSystemMessage).toBeDefined();
            });
        });
        describe('7.6.1.2 Methods', function(){
            it('sendDRMMessage', function(){
                expect(drmAgent.sendDRMMessage).toBeDefined();
            });
            it('DRMSystemStatus', function(){
                expect(drmAgent.DRMSystemStatus).toBeDefined();
            });
        });
        afterEach(function(){
            document.body.removeChild(drmAgent);
        });
    });
});