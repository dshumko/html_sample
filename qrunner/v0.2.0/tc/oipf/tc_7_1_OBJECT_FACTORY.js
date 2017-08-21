var oipfobjectFactory = window.oipfObjectFactory;

module("7.1 OBJECT FACTORY API");
module("Objectfactory");

test("createVideoBroadcastObject", function() {
    try {
        ok(oipfobjectFactory.createVideoBroadcastObject !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("createVideoMpegObject", function() {
    try {
        ok(oipfobjectFactory.createVideoMpegObject !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

if(HBBTV_ON==0){
test("createStatusViewObject", function() {
    try {
        ok(oipfobjectFactory.createStatusViewObject !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});}

test("createApplicationManagerObject", function() {
    try {
        ok(oipfobjectFactory.createApplicationManagerObject !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("createCapabilitiesObject", function() {
    try {
        ok(oipfobjectFactory.createCapabilitiesObject !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("createChannelConfig", function() {
    try {
        ok(oipfobjectFactory.createChannelConfig !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

if(HBBTV_ON==0){
test("createCodManagerObject", function() {
    try {
        ok(oipfobjectFactory.createCodManagerObject !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});}

test("createConfigurationObject", function() {
    try {
        ok(oipfobjectFactory.createConfigurationObject !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("createDownloadManagerObject", function() {
    try {
        ok(oipfobjectFactory.createDownloadManagerObject !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("createDownloadTriggerObject", function() {
    try {
        ok(oipfobjectFactory.createDownloadTriggerObject !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("createDrmAgentObject", function() {
    try {
        ok(oipfobjectFactory.createDrmAgentObject !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

if(HBBTV_ON==0){
test("createGatewayInfoObject", function() {
    try {
        ok(oipfobjectFactory.createGatewayInfoObject !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("createIMSObject", function() {
    try {
        ok(oipfobjectFactory.createIMSObject !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("createMDTFObject", function() {
    try {
        ok(oipfobjectFactory.createMDTFObject !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("createNotifSocketObject", function() {
    try {
        ok(oipfobjectFactory.createNotifSocketObject !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});}

test("createParentalControlManagerObject", function() {
    try {
        ok(oipfobjectFactory.createParentalControlManagerObject !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("createRecordingSchedulerObject", function() {
    try {
        ok(oipfobjectFactory.createRecordingSchedulerObject !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

if(HBBTV_ON==0){
test("createRemoteControlFunctionObject", function() {
    try {
        ok(oipfobjectFactory.createRemoteControlFunctionObject !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("createRemoteManagementObject", function() {
    try {
        ok(oipfobjectFactory.createRemoteManagementObject !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});}

test("createSearchManagerObject", function() {
    try {
        ok(oipfobjectFactory.createSearchManagerObject !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

module("Objectfactory.isObjectSupported");

if(HBBTV_ON==0){
test("application/notifsocket", function() {
    try {
        ok(oipfobjectFactory.isObjectSupported("application/notifsocket") !== false, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});}

test("application/oipfApplicationManager", function() {
    try {
        ok(oipfobjectFactory.isObjectSupported("application/oipfApplicationManager") !== false, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("application/oipfCapabilities", function() {
    try {
        ok(oipfobjectFactory.isObjectSupported("application/oipfCapabilities") !== false, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

if(HBBTV_ON==0){
test("application/oipfCodManager", function() {
    try {
        ok(oipfobjectFactory.isObjectSupported("application/oipfCodManager") !== false, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});}

test("application/oipfConfiguration", function() {
    try {
        ok(oipfobjectFactory.isObjectSupported("application/oipfConfiguration") !== false, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("application/oipfDownloadManager", function() {
    try {
        ok(oipfobjectFactory.isObjectSupported("application/oipfDownloadManager") !== false, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("application/oipfDownloadTrigger", function() {
    try {
        ok(oipfobjectFactory.isObjectSupported("application/oipfDownloadTrigger") !== false, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("application/oipfDrmAgent", function() {
    try {
        ok(oipfobjectFactory.isObjectSupported("application/oipfDrmAgent") !== false, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

if(HBBTV_ON==0){
test("application/oipfGatewayInfo", function() {
    try {
        ok(oipfobjectFactory.isObjectSupported("application/oipfGatewayInfo") !== false, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("application/oipfCommunicationServices", function() {
    try {
        ok(oipfobjectFactory.isObjectSupported("application/oipfCommunicationServices") !== false, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("application/oipfMDTF", function() {
    try {
        ok(oipfobjectFactory.isObjectSupported("application/oipfMDTF") !== false, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});}

test("application/oipfParentalControlManager", function() {
    try {
        ok(oipfobjectFactory.isObjectSupported("application/oipfParentalControlManager") !== false, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("application/oipfRecordingScheduler", function() {
    try {
        ok(oipfobjectFactory.isObjectSupported("application/oipfRecordingScheduler") !== false, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

if(HBBTV_ON==0){
test("application/oipfRemoteControlFunction", function() {
    try {
        ok(oipfobjectFactory.isObjectSupported("application/oipfRemoteControlFunction") !== false, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("application/oipfRemoteManagement", function() {
    try {
        ok(oipfobjectFactory.isObjectSupported("application/oipfRemoteManagement") !== false, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});}

test("application/oipfSearchManager", function() {
    try {
        ok(oipfobjectFactory.isObjectSupported("application/oipfSearchManager") !== false, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

if(HBBTV_ON==0){
test("application/oipfStatusView", function() {
    try {
        ok(oipfobjectFactory.isObjectSupported("application/oipfStatusView") !== false, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});}

test("video/broadcast", function() {
    try {
        ok(oipfobjectFactory.isObjectSupported("video/broadcast") !== false, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

