function typeCheck(obj, name)
{
    it(name, function() { expect(obj[name]).toBeDefined(); });
};

describe("7.2 Application Management APIs", function() {
    var oipfobjectFactory;
    var applicationManager;
    var application;
    var applicationCollection;
    var applicationPrivateData;

    beforeEach(function() {
        oipfobjectFactory = window.oipfObjectFactory;
        applicationManager = oipfobjectFactory.createApplicationManagerObject();
    });

    describe("7.2.1 The application/oipfApplicationManager embedded object", function() {
        describe("7.2.1.2 Properties", function() {
            it("onLowMemory", function() {
                expect(applicationManager.onLowMemory).toBeDefined();
            });
            it("onApplicationLoaded", function() {
                expect(applicationManager.onApplicationLoaded).toBeDefined();
            });
            it("onApplicationUnloaded", function() {
                expect(applicationManager.onApplicationUnloaded).toBeDefined();
            });
            it("onApplicationLoadError", function() {
                expect(applicationManager.onApplicationLoadError).toBeDefined();
            });
            it("onWidgetInstallation", function() {
                expect(applicationManager.onWidgetInstallation).toBeDefined();
            });
            it("onWidgetUninstallation", function() {
                expect(applicationManager.onWidgetUninstallation).toBeDefined();
            });
            it("widgets", function() {
                expect(applicationManager.widgets).toBeDefined();
            });
        });
        describe("7.2.1.3 Methods", function() {
            it("getApplicationVisualizationMode", function() {
                expect(applicationManager.getApplicationVisualizationMode).toBeDefined();
            });
            it("getOwnerApplication", function() {
                expect(applicationManager.getOwnerApplication).toBeDefined();
            });
            it("getChildApplications", function() {
                expect(applicationManager.getChildApplications).toBeDefined();
            });
            it("gc", function() {
                expect(applicationManager.gc).toBeDefined();
            });
            it("installWidget", function() {
                expect(applicationManager.installWidget).toBeDefined();
            });
            it("uninstallWidget", function() {
                expect(applicationManager.uninstallWidget).toBeDefined();
            });
        });
    });

    describe("7.2.2 The Application class", function() {
        beforeEach(function() {
            application = applicationManager.getOwnerApplication(window.document);
        });
        describe("7.2.2.1 Properties", function() {
            it("visible", function() {
                expect(application.visible).toBeDefined();
            });
            it("active", function() {
                expect(application.active).toBeDefined();
            });
            it("permissions", function() {
                expect(application.permissions).toBeDefined();
            });
            it("isPrimaryReceiver", function() {
                expect(application.isPrimaryReceiver).toBeDefined();
            });
            it("window", function() {
                expect(application.window).toBeDefined();
            });
            it("privateData", function() {
                expect(application.privateData).toBeDefined();
            });
            it("onApplicationActivated", function() {
                expect(application.onApplicationActivated).toBeDefined();
            });
            it("onApplicationDeactivated", function() {
                expect(application.onApplicationDeactivated).toBeDefined();
            });
            it("onApplicationShown", function() {
                expect(application.onApplicationShown).toBeDefined();
            });
            it("onApplicationHidden", function() {
                expect(application.onApplicationHidden).toBeDefined();
            });
            it("onApplicationPrimaryReceiver", function() {
                expect(application.onApplicationPrimaryReceiver).toBeDefined();
            });
            it("onApplicationNotPrimaryReceiver", function() {
                expect(application.onApplicationNotPrimaryReceiver).toBeDefined();
            });
            it("onApplicationTopmost", function() {
                expect(application.onApplicationTopmost).toBeDefined();
            });
            it("onApplicationNotTopmost", function() {
                expect(application.onApplicationNotTopmost).toBeDefined();
            });
            it("onApplicationDestroyRequest", function() {
                expect(application.onApplicationDestroyRequest).toBeDefined();
            });
            it("onApplicationHibernateRequest", function() {
                expect(application.onApplicationHibernateRequest).toBeDefined();
            });
            it("onKeyPress", function() {
                expect(application.onKeyPress).toBeDefined();
            });
            it("onKeyUp", function() {
                expect(application.onKeyUp).toBeDefined();
            });
            it("onKeyDown", function() {
                expect(application.onKeyDown).toBeDefined();
            });
        });
        describe("7.2.2.2 Methods", function() {
            it("show", function() {
                expect(application.show).toBeDefined();
            });
            it("hide", function() {
                expect(application.hide).toBeDefined();
            });
            it("activateInput", function() {
                expect(application.activateInput).toBeDefined();
            });
            it("deactivateInput", function() {
                expect(application.deactivateInput).toBeDefined();
            });
            it("createApplication", function() {
                expect(application.createApplication).toBeDefined();
            });
            it("destroyApplication", function() {
                expect(application.destroyApplication).toBeDefined();
            });
            it("startWidget", function() {
                expect(application.startWidget).toBeDefined();
            });
            it("stopWidget", function() {
                expect(application.stopWidget).toBeDefined();
            });
        });
    });

    describe("7.2.3 The ApplicationCollection class", function() {
        beforeEach(function () {
            application = applicationManager.getOwnerApplication(window.document);
            applicationCollection = applicationManager.getChildApplications(application);
        });
        it("ApplicationCollection", function () {
            expect(applicationCollection).toBeDefined();
        });
    });

    describe("7.2.4 The ApplicationPrivateData class", function() {
        beforeEach(function () {
            applicationPrivateData = applicationManager.privateData;
        });
        describe("7.2.4.1 Properties", function() {
            it("keyset", function () {
                expect(applicationPrivateData.keyset).toBeDefined();
            });
            it("currentChannel", function () {
                expect(applicationPrivateData.currentChannel).toBeDefined();
            });
            it("wakeupApplication", function () {
                expect(applicationPrivateData.wakeupApplication).toBeDefined();
            });
            it("wakeupOITF", function () {
                expect(applicationPrivateData.wakeupOITF).toBeDefined();
            });
        });
        describe("7.2.4.2 Methods", function() {
            it("getFreeMem", function () {
                expect(applicationPrivateData.getFreeMem).toBeDefined();
            });
            it("prepareWakeupApplication", function () {
                expect(applicationPrivateData.prepareWakeupApplication).toBeDefined();
            });
            it("prepareWakeupOITF", function () {
                expect(applicationPrivateData.prepareWakeupOITF).toBeDefined();
            });
            it("clearWakeupToken", function () {
                expect(applicationPrivateData.clearWakeupToken).toBeDefined();
            });
        });
    });
});