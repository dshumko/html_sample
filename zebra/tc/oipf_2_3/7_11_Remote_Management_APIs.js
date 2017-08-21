describe("7.11 Remote Management APIs", function() {
    var oipfobjectFactory;
    var remoteManagement;

    try{
        oipfobjectFactory = window.oipfObjectFactory;
        remoteManagement = oipfobjectFactory.createRemoteManagementObject();
    }catch(e){
        remoteManagement = undefined;
    }

    describe("7.11.1 The application/oipfRemoteManagement embedded object", function() {
        describe("7.11.1.1 Properties", function() {
            it("vendorName", function() { expect(remoteManagement.vendorName).toBeDefined(); });
            it("modelName", function() { expect(remoteManagement.modelName).toBeDefined(); });
            it("softwareVersion", function() { expect(remoteManagement.softwareVersion).toBeDefined(); });
            it("hardwareVersion", function() { expect(remoteManagement.hardwareVersion).toBeDefined(); });
            it("familyName", function() { expect(remoteManagement.familyName).toBeDefined(); });
            it("onSoftwareUpdate", function() { expect(remoteManagement.onSoftwareUpdate).toBeDefined(); });
        });
        describe("7.11.1.2 Methods", function() {
            it("getParameter", function() { expect(remoteManagement.getParameter).toBeDefined(); });
            it("triggerSoftwareUpdate", function() { expect(remoteManagement.triggerSoftwareUpdate).toBeDefined(); });
            it("softwareUpdateStatus", function() { expect(remoteManagement.softwareUpdateStatus).toBeDefined(); });
        });
    });
});