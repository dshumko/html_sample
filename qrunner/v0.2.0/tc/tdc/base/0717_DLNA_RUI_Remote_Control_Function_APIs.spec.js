// OIPF-T1-R2_Specification-Volume-5-Declarative-Application-Environment-v2_3-2014-01-24.pdf
describe('7.17 DLNA RUI Remote Control Function APIs', function() {
    "use strict";
    describe('7.17.1 The application/oipfRemoteControlFunction embedded object', function () {
        var remotecontrol;
        beforeEach(function () {
            remotecontrol= document.createElement('object');
            remotecontrol.setAttribute("type", "application/oipfRemoteControlFunction");
            document.body.appendChild(remotecontrol);
        });
        describe('7.17.1.1 Constants', function(){
            it('REQUEST_CUI', function(){
                expect(remotecontrol.REQUEST_CUI).toBe(0);
            });
            it('REQUEST_MSG', function(){
                expect(remotecontrol.REQUEST_MSG).toBe(1);
            });
            it('CREATE_APP', function(){
                expect(remotecontrol.CREATE_APP).toBe(2);
            });
        });
        describe('7.17.1.2 Properties', function(){
            it('currentRemoteDeviceHandle', function(){
                expect(remotecontrol.currentRemoteDeviceHandle).toBeDefined();
            });
            it('currentRemoteDeviceUA', function(){
                expect(remotecontrol.currentRemoteDeviceUA).toBeDefined();
            });
            it('onReceiveRemoteMessage', function(){
                expect(remotecontrol.onReceiveRemoteMessage).toBeDefined();
            });
            it('onResultMuticastNotif', function(){
                expect(remotecontrol.onResultMuticastNotif).toBeDefined();
            });
        });
        describe('7.17.1.3 Methods', function(){
            it('useServerSideXMLUIListing', function(){
                expect(remotecontrol.useServerSideXMLUIListing).toBeDefined();
            });
            it('sendRemoteMessage', function(){
                expect(remotecontrol.sendRemoteMessage).toBeDefined();
            });
            it('sendMulticastNotif', function(){
                expect(remotecontrol.sendMulticastNotif).toBeDefined();
            });
            it('sendInternalServerError', function(){
                expect(remotecontrol.sendInternalServerError).toBeDefined();
            });
            it('dropConnection', function(){
                expect(remotecontrol.dropConnection).toBeDefined();
            });
        });
        afterEach(function () {
            document.body.removeChild(remotecontrol);
        });
    });
});