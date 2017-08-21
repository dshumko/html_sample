describe("7.2 Application Management APIs", function() {
    var oipfobjectFactory;
    var applicationManager;
    var applicationCollection;
    var application;
    var applicationPrivateData;

    try{
        oipfobjectFactory = window.oipfObjectFactory;
        applicationManager = oipfobjectFactory.createApplicationManagerObject();
    }catch(e){
        applicationManager = undefined;
    }


    describe("7.2.4 The ApplicationPrivateData class", function() {
        beforeEach(function () {
            application = applicationManager.getOwnerApplication(window.document);
            applicationPrivateData = application.privateData;
        });
        describe("Hmx Properties", function() {
            it("wakeupRepeatDays", function () { expect(applicationPrivateData.wakeupRepeatDays).toBeDefined(); });
            it("wakeupChannel", function () { expect(applicationPrivateData.wakeupChannel).toBeDefined(); });
            it("wakeupTime", function () { expect(applicationPrivateData.wakeupTime).toBeDefined(); });
            it("tvtvWakeupTime", function () { expect(applicationPrivateData.tvtvWakeupTime).toBeDefined(); });
            it("isTvtvStandbyEnable", function () { expect(applicationPrivateData.isTvtvStandbyEnable).toBeDefined(); });
            it("wakeupVolume", function () { expect(applicationPrivateData.wakeupVolume).toBeDefined(); });
            it("widgetContentUrl", function () { expect(applicationPrivateData.widgetContentUrl).toBeDefined(); });
        });
        describe("Hmx Methods", function() {
            it("prepareWakeupOITF", function () { expect(applicationPrivateData.prepareWakeupOITF).toBeDefined(); });
            it("prepareWakeupTvtvUpdate", function () { expect(applicationPrivateData.prepareWakeupTvtvUpdate).toBeDefined(); });
        });
    });
});