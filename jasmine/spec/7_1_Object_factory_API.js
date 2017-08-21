function typeCheck(obj, name){ it(name, function()
{
    expect(obj[name]).toBeDefined(); });
};

describe("7.1 Object factory API", function() {
    var oipfobjectFactory;

    describe("7.1.1 Methods", function() {
        beforeEach(function() {
            oipfobjectFactory = window.oipfObjectFactory;
        });
        typeCheck(oipfobjectFactory, "isObjectSupported");
        it("isObjectSupported2", function() {
            expect(oipfobjectFactory.isObjectSupported).toBeDefined();
        });
        it("isObjectSupported3", function() {
            expect(oipfobjectFactory["isObjectSupported"]).toBeDefined();
        });
    });
});

describe("7.17 DLNA RUI Remote Control Function APIs", function() {
    var media = document.createElement('video');

    beforeEach(function() {
    });

    describe("Constants", function() {
        typeCheck(media,"play");
    });
});


/*
describe("7.1.1.1 Visual objects", function() {
    typeCheck(oipfobjectFactory, "createVideoBroadcastObject");
    typeCheck(oipfobjectFactory, "createVideoMpegObject");
    typeCheck(oipfobjectFactory, "createVideoMpegObject");
});
describe("7.1.1.2 Non-Visual objects", function() {
    typeCheck(oipfobjectFactory, "createApplicationManagerObject");
    typeCheck(oipfobjectFactory, "createCapabilitiesObject");
    typeCheck(oipfobjectFactory, "createChannelConfig");
    typeCheck(oipfobjectFactory, "createCodManagerObject");
    typeCheck(oipfobjectFactory, "createConfigurationObject");
    typeCheck(oipfobjectFactory, "createDownloadManagerObject");
    typeCheck(oipfobjectFactory, "createDownloadTriggerObject");
    typeCheck(oipfobjectFactory, "createDrmAgentObject");
    typeCheck(oipfobjectFactory, "createGatewayInfoObject");
    typeCheck(oipfobjectFactory, "createIMSObject");
    typeCheck(oipfobjectFactory, "createMDTFObject");
    typeCheck(oipfobjectFactory, "createNotifSocketObject");
    typeCheck(oipfobjectFactory, "createParentalControlManagerObject");
    typeCheck(oipfobjectFactory, "createRecordingSchedulerObject");
    typeCheck(oipfobjectFactory, "createRemoteControlFunctionObject");
    typeCheck(oipfobjectFactory, "createRemoteManagementObject");
    typeCheck(oipfobjectFactory, "createSearchManagerObject");
});
    */