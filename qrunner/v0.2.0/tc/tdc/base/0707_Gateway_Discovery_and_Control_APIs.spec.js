// OIPF-T1-R2_Specification-Volume-5-Declarative-Application-Environment-v2_3-2014-01-24.pdf
describe('7.7 Gateway Discovery and Control APIs', function() {
    "use strict";
    /*The following requirements SHALL apply to OITF and/or server devices which have indicated support for DRM
     protection by providing one or more <drm> elements as specified in Section 9.3.10:*/
    describe('7.7.1 The application/oipfGatewayInfo embedded object', function () {
        var gatewayInfo;
        beforeEach(function () {
            gatewayInfo = document.createElement('object');
            gatewayInfo.setAttribute("type", "application/oipfGatewayInfo");
            document.body.appendChild(gatewayInfo);
        });
        describe('77.7.1.1 Properties', function(){
            it('isIGSupported', function(){
                expect(gatewayInfo.isIGSupported).toBeDefined();
            });
            it('isAGSupported', function(){
                expect(gatewayInfo.isAGSupported).toBeDefined();
            });
            it('isCSPGCIPlusSupported', function(){
                expect(gatewayInfo.isCSPGCIPlusSupported).toBeDefined();
            });
            it('isCSPGDTCPSupported', function(){
                expect(gatewayInfo.isCSPGDTCPSupported).toBeDefined();
            });
            it('isIGDiscovered', function(){
                expect(gatewayInfo.isIGDiscovered).toBeDefined();
            });
            it('isAGDiscovered', function(){
                expect(gatewayInfo.isAGDiscovered).toBeDefined();
            });
            it('isCSPGCIPlusDiscovered', function(){
                expect(gatewayInfo.isCSPGCIPlusDiscovered).toBeDefined();
            });
            it('isCSPGDTCPDiscovered', function(){
                expect(gatewayInfo.isCSPGDTCPDiscovered).toBeDefined();
            });
            it('igURL', function(){
                expect(gatewayInfo.igURL).toBeDefined();
            });
            it('agURL', function(){
                expect(gatewayInfo.agURL).toBeDefined();
            });
            it('cspgDTCPURL', function(){
                expect(gatewayInfo.cspgDTCPURL).toBeDefined();
            });
            it('interval', function(){
                expect(gatewayInfo.interval).toBeDefined();
            });
            it('CSPGCIPlusDRMType', function(){
                expect(gatewayInfo.CSPGCIPlusDRMType).toBeDefined();
            });
            it('onDiscoverIG', function(){
                expect(gatewayInfo.onDiscoverIG).toBeDefined();
            });
            it('onDiscoverAG', function(){
                expect(gatewayInfo.onDiscoverAG).toBeDefined();
            });
            it('onDiscoverCSPGCIPlus', function(){
                expect(gatewayInfo.onDiscoverCSPGCIPlus).toBeDefined();
            });
            it('onDiscoverCSPGDTCP', function(){
                expect(gatewayInfo.onDiscoverCSPGDTCP).toBeDefined();
            });
        });
        describe('7.7.1.2 Methods', function(){
            it('isIGSupportedMethod', function(){
                expect(gatewayInfo.isIGSupportedMethod).toBeDefined();
            });
        });
        afterEach(function(){
            document.body.removeChild(gatewayInfo);
        });
    });
});