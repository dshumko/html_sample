
//start test
var oipfobjectFactory = window.oipfObjectFactory;
var remoteControl = undefined;


if( oipfobjectFactory !== undefined )
{
    try {
    	remoteControl = oipfobjectFactory.createRemoteControlFunctionObject();
    } catch (e)
    {
        console.log(e);
    }
}

if(HBBTV_ON==0){
module("application/oipfRemoteControlFunction");
test("currentRemoteDeviceHandle", function() {
    try {
        ok(remoteControl.currentRemoteDeviceHandle !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("currentRemoteDeviceUA", function() {
    try {
        ok(remoteControl.currentRemoteDeviceUA !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("onReceiveRemoteMessage", function() {
    try {
        ok(remoteControl.onReceiveRemoteMessage !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("onResultMuticastNotif", function() {
    try {
        ok(remoteControl.onResultMuticastNotif !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("useServerSideXMLUIListing()", function() {
    try {
        ok(remoteControl.useServerSideXMLUIListing !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("sendRemoteMessage()", function() {
    try {
        ok(remoteControl.sendRemoteMessage !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("sendMulticastNotif()", function() {
    try {
        ok(remoteControl.sendMulticastNotif !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("sendInternalServerError()", function() {
    try {
        ok(remoteControl.sendInternalServerError !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("dropConnection()", function() {
    try {
        ok(remoteControl.dropConnection !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
}