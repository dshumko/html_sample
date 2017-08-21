
//start test
var oipfobjectFactory = window.oipfObjectFactory;
var remoteManagement = undefined;

if( oipfobjectFactory !== undefined )
{
    try {
        remoteManagement = oipfobjectFactory.createRemoteManagementObject();
    } catch (e)
    {
        console.log(e);
    }
}

if(HBBTV_ON==0){
module("application/oipfRemoteManagement");
test("vendorName", function() {
    try {
        ok(remoteManagement.vendorName !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("modelName", function() {
    try {
        ok(remoteManagement.modelName !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("softwareVersion", function() {
    try {
        ok(remoteManagement.softwareVersion !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("hardwareVersion", function() {
    try {
        ok(remoteManagement.hardwareVersion !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("getParameter()", function() {
    try {
        ok(remoteManagement.getParameter !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("setParameter()", function() {
    try {
        ok(remoteManagement.setParameter !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("triggerSoftwareUpdate()", function() {
    try {
        ok(remoteManagement.triggerSoftwareUpdate !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
}