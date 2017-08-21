// OIPF-T1-R2_Specification-Volume-5-Declarative-Application-Environment-v2_1-2011-06-21.pdf
/*
describe('7.1 Object factory API', function() {
    "use strict";
    it('Globally accessible object of "OipfObjectFactory"', function() {
        expect(oipfObjectFactory).toBeDefined();
    });
    describe('7.1.1 Methods', function() {
        var isObjectSupported = oipfObjectFactory.isObjectSupported;
        it('to Defined "isObjectSupported" function', function(){
            expect(oipfObjectFactory.isObjectSupported).toBeDefined();
        });
        it("check mime type application/notifsocket ", function(){
            expect(isObjectSupported("application/notifsocket")).toBeTruthy();
            //expect(isObjectSupported("application/notifsocket")).toBeFalsy();
        });
        it("check mime type application/oipfApplicationManager ", function(){
            expect(isObjectSupported("application/oipfApplicationManager")).toBeTruthy();
        });
        it("check mime type application/oipfCapabilities ", function(){
            expect(isObjectSupported("application/oipfCapabilities")).toBeTruthy();
        });
        it("check mime type application/oipfCodManager ", function(){
            expect(isObjectSupported("application/oipfCodManager")).toBeTruthy();
            //expect(isObjectSupported("application/oipfCodManager")).toBeFalsy();
        });
        it("check mime type application/oipfCommunicationServices ", function(){
            expect(isObjectSupported("application/oipfCommunicationServices")).toBeTruthy();
            //expect(isObjectSupported("application/oipfCommunicationServices")).toBeFalsy();
        });
        it("check mime type application/oipfConfiguration ", function(){
            expect(isObjectSupported("application/oipfConfiguration")).toBeTruthy();
        });
        it("check mime type application/oipfDownloadManager ", function(){
            expect(isObjectSupported("application/oipfDownloadManager")).toBeTruthy();
        });
        it("check mime type application/oipfDownloadTrigger ", function(){
            expect(isObjectSupported("application/oipfDownloadTrigger")).toBeTruthy();
        });
        it("check mime type application/oipfDrmAgent ", function(){
            expect(isObjectSupported("application/oipfDrmAgent")).toBeTruthy();
        });
        it("check mime type application/oipfGatewayInfo ", function(){
            expect(isObjectSupported("application/oipfGatewayInfo")).toBeTruthy();
            //expect(isObjectSupported("application/oipfGatewayInfo")).toBeFalsy();
        });
        it("check mime type application/oipfCommunicationServices ", function(){
            expect(isObjectSupported("application/oipfCommunicationServices")).toBeTruthy();
            //expect(isObjectSupported("application/oipfCommunicationServices")).toBeFalsy();
        });
        it("check mime type application/oipfMDTF ", function(){
            expect(isObjectSupported("application/oipfMDTF")).toBeTruthy();
            //expect(isObjectSupported("application/oipfMDTF")).toBeFalsy();
        });
        it("check mime type application/oipfParentalControlManager ", function(){
            expect(isObjectSupported("application/oipfParentalControlManager")).toBeTruthy();
        });
        it("check mime type application/oipfRecordingScheduler ", function(){
            expect(isObjectSupported("application/oipfRecordingScheduler")).toBeTruthy();
        });
        it("check mime type application/oipfRemoteControlFunction ", function(){
            expect(isObjectSupported("application/oipfRemoteControlFunction")).toBeTruthy();
            //expect(isObjectSupported("application/oipfRemoteControlFunction")).toBeFalsy();
        });
        it("check mime type application/oipfRemoteManagement ", function(){
            expect(isObjectSupported("application/oipfRemoteManagement")).toBeTruthy();
            //expect(isObjectSupported("application/oipfRemoteManagement")).toBeFalsy();
        });
        it("check mime type application/oipfSearchManager ", function(){
            expect(isObjectSupported("application/oipfSearchManager")).toBeTruthy();
        });
        it("check mime type application/oipfStatusView ", function(){
            expect(isObjectSupported("application/oipfStatusView")).toBeTruthy();
            //expect(isObjectSupported("application/oipfStatusView")).toBeFalsy();
        });
        it("check mime type video/broadcast ", function(){
            expect(isObjectSupported("video/broadcast")).toBeTruthy();
        });

        describe('7.1.1.1 Visual objects', function() {
            it("check CreateVideoBroadcastObject()", function(){
                //expect(oipfObjectFactory.createBroadcastObject).toBeDefined();
                expect(oipfObjectFactory.createBroadcastObject()).toBeDefined();
            });
            it("check createVideoMpegObject()", function(){
                expect(oipfObjectFactory.createVideoMpegObject).toBeDefined();
                expect(oipfObjectFactory.createVideoMpegObject()).toBeDefined();
            });
            it("check createStatusViewObject()", function(){
                //expect(oipfObjectFactory.createStatusViewObject).toBeDefined();
                expect(oipfObjectFactory.createStatusViewObject()).toBeDefined();
            });
        });

        describe('7.1.1.2 Non-Visual objects', function(){
            it('check createApplicationManagerObject()', function(){
                expect(oipfObjectFactory.createApplicationManagerObject).toBeDefined();
                expect(oipfObjectFactory.createApplicationManagerObject()).toBeDefined();
            });
            it('check createCapabilitiesObject()', function(){
                expect(oipfObjectFactory.createCapabilitiesObject).toBeDefined();
                expect(oipfObjectFactory.createCapabilitiesObject()).toBeDefined();
            });
            it('check createChannelConfig()', function(){
                expect(oipfObjectFactory.createChannelConfig).toBeDefined();
                expect(oipfObjectFactory.createChannelConfig()).toBeDefined();
            });
            it('check createCodManagerObject()', function(){
                //expect(oipfObjectFactory.createCodManagerObject).toBeDefined();
                expect(oipfObjectFactory.createCodManagerObject()).toBeDefined();
            });
            it('check createConfigurationObject()', function(){
                //expect(oipfObjectFactory.createConfigurationObject).toBeDefined();
                expect(oipfObjectFactory.createConfigurationObject()).toBeDefined();
            });
            it('check createDownloadManagerObject()', function(){
                expect(oipfObjectFactory.createDownloadManagerObject).toBeDefined();
                expect(oipfObjectFactory.createDownloadManagerObject()).toBeDefined();
            });
            it('check createDownloadTriggerObject()', function(){
                expect(oipfObjectFactory.createDownloadTriggerObject).toBeDefined();
                expect(oipfObjectFactory.createDownloadTriggerObject()).toBeDefined();
            });
            it('check createDrmAgentObject()', function(){
                expect(oipfObjectFactory.createDrmAgentObject).toBeDefined();
                expect(oipfObjectFactory.createDrmAgentObject()).toBeDefined();
            });
            it('check createGatewayInfoObject()', function(){
                //expect(oipfObjectFactory.createGatewayInfoObject).toBeDefined();
                expect(oipfObjectFactory.createGatewayInfoObject()).toBeDefined();
            });
            it('check createIMSObject()', function(){
                //expect(oipfObjectFactory.createIMSObject).toBeDefined();
                expect(oipfObjectFactory.createIMSObject()).toBeDefined();
            });
            it('check createMDTFObject()', function(){
                //expect(oipfObjectFactory.createMDTFObject).toBeDefined();
                expect(oipfObjectFactory.createMDTFObject()).toBeDefined();
            });
            it('check createNotifSocketObject()', function(){
                //expect(oipfObjectFactory.createNotifSocketObject).toBeDefined();
                expect(oipfObjectFactory.createNotifSocketObject()).toBeDefined();
            });
            it('check createParentalControlManagerObject()', function(){
                expect(oipfObjectFactory.createParentalControlManagerObject).toBeDefined();
                expect(oipfObjectFactory.createParentalControlManagerObject()).toBeDefined();
            });
            it('check createRecordingSchedulerObject()', function(){
                expect(oipfObjectFactory.createRecordingSchedulerObject).toBeDefined();
                expect(oipfObjectFactory.createRecordingSchedulerObject()).toBeDefined();
            });
            it('check createRemoteControlFunctionObject()', function(){
                //expect(oipfObjectFactory.createRemoteControlFunctionObject).toBeDefined();
                expect(oipfObjectFactory.createRemoteControlFunctionObject()).toBeDefined();
            });
            it('check createRemoteManagementObject()', function(){
                //expect(oipfObjectFactory.createRemoteManagementObject).toBeDefined();
                expect(oipfObjectFactory.createRemoteManagementObject()).toBeDefined();
            });
            it('check createSearchManagerObject()', function(){
                expect(oipfObjectFactory.createSearchManagerObject).toBeDefined();
                expect(oipfObjectFactory.createSearchManagerObject()).toBeDefined();
            });
        });
    });
});
*/
