// OIPF-T1-R2_Specification-Volume-5-Declarative-Application-Environment-v2_3-2014-01-24.pdf
describe('7.8 Communication Services APIs', function() {
    "use strict";
    describe('7.8.1 The application/oipfCommunicationServices embedded object', function () {
        var communication;
        beforeEach(function () {
            communication = document.createElement('object');
            communication.setAttribute("type", "application/oipfCommunicationServices");
            document.body.appendChild(communication);
        });
        describe('7.8.1.1 Constants',function(){
            it('STATE_REGISTERED', function(){
                expect(communication.STATE_REGISTERED).toBe(0);
            });
            it('STATE_REGISTERED_SUBSCRIPTION_PENDING', function(){
                expect(communication.STATE_REGISTERED_SUBSCRIPTION_PENDING).toBe(1);
            });
            it('STATE_REGISTERED_SUBSCRIPTION_ACTIVE', function(){
                expect(communication.STATE_REGISTERED_SUBSCRIPTION_ACTIVE).toBe(2);
            });
            it('STATE_DEREGISTERED', function(){
                expect(communication.STATE_DEREGISTERED).toBe(3);
            });
            it('STATE_FAILURE', function(){
                expect(communication.STATE_FAILURE).toBe(4);
            });
        });
        describe('7.8.1.2 Properties', function(){
            it('onNotification', function(){
                expect(communication.onNotification).toBeDefined();
            });
            it('onNotificationResult', function(){
                expect(communication.onNotificationResult).toBeDefined();
            });
            it('currentUser', function(){
                expect(communication.currentUser).toBeDefined();
            });
        });
        describe('7.8.1.3 Methods', function(){
            it('getRegisteredUsers', function(){
                expect(communication.getRegisteredUsers).toBeDefined();
            });
            it('registerUser', function(){
                expect(communication.registerUser).toBeDefined();
            });
            it('deRegisterUser', function(){
                expect(communication.deRegisterUser).toBeDefined();
            });
            it('getAllUsers', function(){
                expect(communication.getAllUsers).toBeDefined();
            });
            it('setUser', function(){
                expect(communication.setUser).toBeDefined();
            });
            it('subscribeNotification', function(){
                expect(communication.subscribeNotification).toBeDefined();
            });
            it('unsubscribeNotification', function(){
                expect(communication.unsubscribeNotification).toBeDefined();
            });
        });
        afterEach(function () {
            document.body.removeChild(communication);
        });
    });
    describe('7.8.2 Extensions to application/oipfCommunicationServices for presence and messaging services', function () {
        var communication;
        beforeEach(function () {
            communication = document.createElement('object');
            communication.setAttribute("type", "application/oipfCommunicationServices");
            document.body.appendChild(communication);
        });
        describe('7.8.2.1 Properties', function(){
            it('onIncomingMessage', function(){
                expect(communication.onIncomingMessage).toBeDefined();
            });
            it('onContactStatusChange', function(){
                expect(communication.onContactStatusChange).toBeDefined();
            });
            it('onNewWatcher', function(){
                expect(communication.onNewWatcher).toBeDefined();
            });
        });
        describe('7.8.2.2 Methods', function(){
            it('openChatSession', function(){
                expect(communication.openChatSession).toBeDefined();
            });
            it('sendMessageInSession', function(){
                expect(communication.sendMessageInSession).toBeDefined();
            });
            it('closeChatSession', function(){
                expect(communication.closeChatSession).toBeDefined();
            });
            it('sendMessage', function(){
                expect(communication.sendMessage).toBeDefined();
            });
            it('setStatus', function(){
                expect(communication.setStatus).toBeDefined();
            });
            it('subscribeToStatus', function(){
                expect(communication.subscribeToStatus).toBeDefined();
            });
            it('getContacts', function(){
                expect(communication.getContacts).toBeDefined();
            });
            it('allowContact', function(){
                expect(communication.allowContact).toBeDefined();
            });
            it('blockContact', function(){
                expect(communication.blockContact).toBeDefined();
            });
            it('createContactList', function(){
                expect(communication.createContactList).toBeDefined();
            });
            it('getContacts', function(){
                expect(communication.getContacts).toBeDefined();
            });
            it('addToContactList', function(){
                expect(communication.addToContactList).toBeDefined();
            });
            it('removeFromContactList', function(){
                expect(communication.removeFromContactList).toBeDefined();
            });
            it('deleteContactList', function(){
                expect(communication.deleteContactList).toBeDefined();
            });
            it('allowAllContacts', function(){
                expect(communication.allowAllContacts).toBeDefined();
            });
            it('blockAllContacts', function(){
                expect(communication.blockAllContacts).toBeDefined();
            });
        });
        afterEach(function () {
            document.body.removeChild(communication);
        });
    });
    describe('7.8.3 The UserData class', function () {
        var communication, user;
        beforeEach(function () {
            communication = document.createElement('object');
            communication.setAttribute("type", "application/oipfCommunicationServices");
            document.body.appendChild(communication);

            user = communication.currentUser;
        });
        describe('7.8.3.1 Properties', function(){
            it('userId', function(){
                expect(user.userId).toBeDefined();
            });
            it('featureTags', function(){
                expect(user.featureTags).toBeDefined();
            });
            it('friendlyName', function(){
                expect(user.friendlyName).toBeDefined();
            });
        });
        afterEach(function () {
            document.body.removeChild(communication);
        });
    });
    describe('7.8.4 The UserDataCollection class');
    describe('7.8.5 The FeatureTag class', function () {
        var communication, feature;
        beforeEach(function () {
            communication = document.createElement('object');
            communication.setAttribute("type", "application/oipfCommunicationServices");
            document.body.appendChild(communication);

            var user = communication.currentUser;
            feature = user.featureTags.item(0);
        });
        describe('7.8.5.1 Properties', function(){
            it('featureTag', function(){
                expect(feature.featureTag).toBeDefined();
            });
        });
        afterEach(function () {
            document.body.removeChild(communication);
        });
    });
    describe('7.8.6 The FeatureTagCollection class');
    describe('7.8.7 The Contact class', function () {
        var communication, contractId = {};
        beforeEach(function () {
            communication = document.createElement('object');
            communication.setAttribute("type", "application/oipfCommunicationServices");
            document.body.appendChild(communication);
        });
        describe('7.8.7.1 Properties', function(){
            it('contactId', function(){
                expect(contractId.contactId).toBeDefined();
            });
            it('friendlyName', function(){
                expect(contractId.friendlyName).toBeDefined();
            });
        });
        afterEach(function () {
            document.body.removeChild(communication);
        });
    });
    describe('7.8.6 The FeatureTagCollection class');
    describe('7.8.8 The ContactCollection class', function () {
        var communication, contracts;
        beforeEach(function () {
            communication = document.createElement('object');
            communication.setAttribute("type", "application/oipfCommunicationServices");
            document.body.appendChild(communication);
            contracts = communication.getContacts('String contractListUri');
        });
        describe('7.8.8.1 Methods', function(){
            it('remove', function(){
                expect(contracts.remove).toBeDefined();
            });
            it('add', function(){
                expect(contracts.add).toBeDefined();
            });
        });
        afterEach(function () {
            document.body.removeChild(communication);
        });
    });
    describe('7.8.9 Extensions to application/oipfIMS for voice telephony services', function () {
        var telephony;
        beforeEach(function () {
            telephony = document.createElement('object');
            telephony.setAttribute("type", "application/oipfIMS");
            document.body.appendChild(telephony);
        });
        describe('7.8.9.1 Properties', function(){
            it('onCallEvent', function(){
                expect(telephony.onCallEvent).toBeDefined();
            });
            it('callParameters', function(){
                expect(telephony.callParameters).toBeDefined();
            });
        });
        describe('7.8.9.2 Methods', function(){
            it('call', function(){
                expect(telephony.call).toBeDefined();
            });
            it('answer', function(){
                expect(telephony.answer).toBeDefined();
            });
            it('hangUp', function(){
                expect(telephony.hangUp).toBeDefined();
            });
            it('getDeviceList', function(){
                expect(telephony.getDeviceList).toBeDefined();
            });
            it('setCaptureDevice', function(){
                expect(telephony.setCaptureDevice).toBeDefined();
            });
            it('getCodecList', function(){
                expect(telephony.getCodecList).toBeDefined();
            });
            it('setPreferredCodecList', function(){
                expect(telephony.setPreferredCodecList).toBeDefined();
            });
            it('getCallParameter', function(){
                expect(telephony.getCallParameter).toBeDefined();
            });
            it('setCallParameter', function(){
                expect(telephony.setCallParameter).toBeDefined();
            });
        });
        afterEach(function () {
            document.body.removeChild(telephony);
        });
    });
    describe('7.8.10 Extensions to application/oipfCommunicationServices for video telephony services', function () {
        var comm;
        beforeEach(function () {
            comm = document.createElement('object');
            comm.setAttribute("type", "application/oipfCommunicationServices");
            document.body.appendChild(comm);
        });
        describe('7.8.10.1 Methods', function(){
            it('showRemoteVideo', function(){
                expect(comm.showRemoteVideo).toBeDefined();
            });
            it('showLocalVideoPreview', function(){
                expect(comm.showLocalVideoPreview).toBeDefined();
            });
            it('callUpdate', function(){
                expect(comm.callUpdate).toBeDefined();
            });
            it('callAnswerUpdate', function(){
                expect(comm.callAnswerUpdate).toBeDefined();
            });
        });
        afterEach(function () {
            document.body.removeChild(comm);
        });
    });
    describe('7.8.11 The DeviceInfo class', function () {
        var telephony, info;
        beforeEach(function () {
            telephony = document.createElement('object');
            telephony.setAttribute("type", "application/oipfIMS");
            document.body.appendChild(telephony);

            info = telephony.getDeviceList(0).item(0); //0: Audio , 1:Video
        });
        describe('7.8.11.1 Properties', function(){
            it('id', function(){
                expect(info.id).toBeDefined();
            });
            it('deviceType', function(){
                expect(info.deviceType).toBeDefined();
            });
            it('deviceName', function(){
                expect(info.deviceName).toBeDefined();
            });
            it('deviceProductName', function(){
                expect(info.deviceProductName).toBeDefined();
            });
        });
        afterEach(function () {
            document.body.removeChild(telephony);
        });
    });
    describe('7.8.12 The DeviceInfoCollection class');
    describe('7.8.13 The CodecInfo class', function () {
        var telephony, codecinfo;
        beforeEach(function () {
            telephony = document.createElement('object');
            telephony.setAttribute("type", "application/oipfIMS");
            document.body.appendChild(telephony);

            codecinfo = telephony.getCodecList(0).item(0);  //0 Audio, 1 Video
        });
        describe('7.8.13.1 Properties', function(){
            it('codecName', function(){
                expect(codecinfo.codecName).toBeDefined();
            });
            it('mimeType', function(){
                expect(codecinfo.mimeType).toBeDefined();
            });
            it('profile', function(){
                expect(codecinfo.profile).toBeDefined();
            });
        });
        afterEach(function () {
            document.body.removeChild(telephony);
        });
    });
    describe('7.8.14 The CodecInfoCollection class', function () {
        var telephony, codecinfos;
        beforeEach(function () {
            telephony = document.createElement('object');
            telephony.setAttribute("type", "application/oipfIMS");
            document.body.appendChild(telephony);

            codecinfos = telephony.getCodecList(0);  //0 Audio, 1 Video
        });
        describe('7.8.14.1 Methods', function(){
            it('moveAt', function(){
                expect(codecinfos.moveAt).toBeDefined();
            });
            it('remove', function(){
                expect(codecinfos.remove).toBeDefined();
            });
        });
        afterEach(function () {
            document.body.removeChild(telephony);
        });
    });
});