
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
test("familyName", function() {
    try {
        ok(remoteManagement.familyName !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("onSoftwareUpdate", function() {
    try {
        ok(remoteManagement.onSoftwareUpdate !== undefined, "is exists");
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
test("triggerSoftwareUpdate()", function() {
    try {
        ok(remoteManagement.triggerSoftwareUpdate !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("softwareUpdateStatus()", function() {
    try {
        ok(remoteManagement.softwareUpdateStatus !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});