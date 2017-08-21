var oipfobjectFactory = window.oipfObjectFactory;
var communicationServices = undefined;
var userDataCollection = undefined;
var featureTags = undefined;
var contacts = undefined;
var deviceInfoCollection = undefined;
var codecInfo = undefined;
var codecInfoCollection = undefined;

var Audio = 0;
var Video = 1;

if( oipfobjectFactory !== undefined )
{
    try {
    	communicationServices = oipfobjectFactory.createCommunicationServicesObject();
    } catch (e)
    {
        console.log(e);
    }
}
if(HBBTV_ON==0){
	module("application/oipfCommunicationServices");
	test("onNotification", function() {
	    try {
	        ok(communicationServices.onNotification !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("onNotificationResult", function() {
	    try {
	        ok(communicationServices.onNotificationResult !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("onRegistrationContextUpdate", function() {
	    try {
	        ok(communicationServices.onRegistrationContextUpdate !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("currentUser", function() {
	    try {
	        ok(communicationServices.currentUser !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("getRegisteredUsers()", function() {
	    try {
	        ok((userDataCollection = communicationServices.getRegisteredUsers) !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("registerUser()", function() {
	    try {
	        ok(communicationServices.registerUser !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("deRegisterUser()", function() {
	    try {
	        ok(communicationServices.deRegisterUser !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("getAllUsers()", function() {
	    try {
	        ok(communicationServices.getAllUsers !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("setUser()", function() {
	    try {
	        ok(communicationServices.setUser !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("subscribeNotification()", function() {
	    try {
	        ok(communicationServices.subscribeNotification !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("unsubscribeNotification()", function() {
	    try {
	        ok(communicationServices.unsubscribeNotification !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	
	
	module("presence and messaging services");
	test("onIncomingMessage", function() {
	    try {
	        ok(communicationServices.onIncomingMessage !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("onContactStatusChange", function() {
	    try {
	        ok(communicationServices.onContactStatusChange !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("onNewWatcher", function() {
	    try {
	        ok(communicationServices.onNewWatcher !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("openChatSession()", function() {
	    try {
	        ok(communicationServices.openChatSession !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("sendMessageInSession()", function() {
	    try {
	        ok(communicationServices.sendMessageInSession !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("closeChatSession()", function() {
	    try {
	        ok(communicationServices.closeChatSession !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("sendMessage()", function() {
	    try {
	        ok(communicationServices.sendMessage !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("setStatus()", function() {
	    try {
	        ok(communicationServices.setStatus !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("subscribeToStatus()", function() {
	    try {
	        ok(communicationServices.subscribeToStatus !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("getContacts()", function() {
	    try {
	        ok((contacts = communicationServices.getContacts) !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("allowContact()", function() {
	    try {
	        ok(communicationServices.allowContact !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("blockContact()", function() {
	    try {
	        ok(communicationServices.blockContact !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("createContactList()", function() {
	    try {
	        ok(communicationServices.createContactList !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("getContacts()", function() {
	    try {
	        ok(communicationServices.getContacts !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("addToContactList()", function() {
	    try {
	        ok(communicationServices.addToContactList !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("removeFromContactList()", function() {
	    try {
	        ok(communicationServices.removeFromContactList !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("deleteContactList()", function() {
	    try {
	        ok(communicationServices.deleteContactList !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("allowAllContacts()", function() {
	    try {
	        ok(communicationServices.allowAllContacts !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("blockAllContacts()", function() {
	    try {
	        ok(communicationServices.blockAllContacts !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	
	
	module("UserData");
	test("userId", function() {
	    try {
	        ok(userDataCollection[0].userId !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("featureTags", function() {
	    try {
	        ok(userDataCollection[0].featureTags !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("friendlyName", function() {
	    try {
	        ok(userDataCollection[0].friendlyName !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	
	
	module("UserDataCollection");
	test("userDataCollection", function() {
	    try {
	        ok(userDataCollection !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	
	
	
	module("FeatureTag");
	test("featureTag", function() {
	    try {
	        ok(featureTags[0].featureTag !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	
	
	module("FeatureTagCollection");
	test("featureTagCollection", function() {
	    try {
	        ok(featureTags !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	
	
	module("Contact");
	test("contactId", function() {
	    try {
	        ok(contacts[0].contactId !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("friendlyName", function() {
	    try {
	        ok(contacts[0].friendlyName !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	
	
	module("ContactCollection");
	test("remove()", function() {
	    try {
	        ok(contacts.remove !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("add()", function() {
	    try {
	        ok(contacts.add !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	
	
	module("voice telephony services");
	test("onCallEvent", function() {
	    try {
	        ok(communicationServices.onCallEvent !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("callParameters", function() {
	    try {
	        ok(communicationServices.callParameters !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("call()", function() {
	    try {
	        ok(communicationServices.call !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("answer()", function() {
	    try {
	        ok(communicationServices.answer !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("hangUp()", function() {
	    try {
	        ok(communicationServices.hangUp !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("getDeviceList()", function() {
	    try {
	        ok(communicationServices.getDeviceList !== undefined, "is exists");
	        deviceInfoCollection = communicationServices.getDeviceList();
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("setCaptureDevice()", function() {
	    try {
	        ok(communicationServices.setCaptureDevice !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("getCodecList()", function() {
	    try {
	        ok(communicationServices.getCodecList !== undefined, "is exists");
	        codecInfoCollection = communicationServices.getCodecList(Audio);
	        codecInfo = codecInfoCollection[0];
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("setPreferredCodecList()", function() {
	    try {
	        ok(communicationServices.setPreferredCodecList !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("getCallParameter()", function() {
	    try {
	        ok(communicationServices.getCallParameter !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("setCallParameter()", function() {
	    try {
	        ok(communicationServices.setCallParameter !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	
	
	module("video telephony services");
	test("showRemoteVideo()", function() {
	    try {
	        ok(communicationServices.showRemoteVideo !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("showLocalVideoPreview()", function() {
	    try {
	        ok(communicationServices.showLocalVideoPreview !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("callUpdate()", function() {
	    try {
	        ok(communicationServices.callUpdate !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("callAnswerUpdate()", function() {
	    try {
	        ok(communicationServices.callAnswerUpdate !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	
	
	module("DeviceInfo");
	test("id", function() {
	    try {
	        ok(deviceInfoCollection[0].id !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("deviceType", function() {
	    try {
	        ok(deviceInfoCollection[0].deviceType !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("deviceName", function() {
	    try {
	        ok(deviceInfoCollection[0].deviceName !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("deviceProductName", function() {
	    try {
	        ok(deviceInfoCollection[0].deviceProductName !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	
	
	module("DeviceInfoCollection");
	test("moveAt()", function() {
	    try {
	        ok(deviceInfoCollection.moveAt() !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("remove", function() {
	    try {
	        ok(deviceInfoCollection.remove() !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	
	
	module("CodecInfo");
	test("codecName", function() {
	    try {
	        ok(codecInfo.codecName !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("mimeType", function() {
	    try {
	        ok(codecInfo.mimeType !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("profile", function() {
	    try {
	        ok(codecInfo.profile !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	
	
	module("CodecInfoCollection");
	test("moveAt()", function() {
	    try {
	        ok(codecInfoCollection.moveAt !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("remove()", function() {
	    try {
	        ok(codecInfoCollection.remove !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
}