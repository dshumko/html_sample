var oipfobjectFactory = window.oipfObjectFactory;
var drmAgent = null;
module("7.6 CONTENT_SERVICE PROTECTION API");

if( oipfobjectFactory !== undefined )
{
    try {
        drmAgent = oipfobjectFactory.createDrmAgentObject();
    } catch (e)
    {
        console.log(e);
    }
}


module("application/oipfDrmAgent");
test("onDRMMessageResult", function() {
    try {
        ok(drmAgent.onDRMMessageResult !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("onDRMSystemStatusChange", function() {
    try {
        ok(drmAgent.onDRMSystemStatusChange !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("onDRMSystemMessage", function() {
    try {
        ok(drmAgent.onDRMSystemMessage !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("sendDRMMessage()", function() {
    try {
        ok(drmAgent.sendDRMMessage !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("DRMSystemStatus()", function() {
    try {
        ok(drmAgent.DRMSystemStatus !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
