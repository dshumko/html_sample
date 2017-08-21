describe("3.1 Application Management Extension APIs", function() {
    var oipfobjectFactory;

    beforeEach(function() {
        oipfobjectFactory = window.oipfObjectFactory;
    });

    describe("3.1.1 HMXApplicationManager", function() {
        it("isObjectSupported", function() { 
            expect(oipfobjectFactory.isObjectSupported).toBeDefined();
            expect(oipfobjectFactory.createHumaxApplicationManagerObject).toBeDefined();
        });
        describe("3.1.1.1 Properties", function() {
            var humax_application_managerl;
            beforeEach(function() {
                humax_application_managerl = oipfobjectFactory.createHumaxApplicationManagerObject();
            });
            
            it("onHumaxApplicationLoaded", function() { expect(humax_application_managerl.onHumaxApplicationLoaded).toBeDefined(); });
            it("onHumaxApplicationUnloaded ", function() { expect(humax_application_managerl.onHumaxApplicationUnloaded).toBeDefined(); });
        });
        describe("3.1.1.2	Methods", function() {
            var humax_application_managerl;
            beforeEach(function() {
                humax_application_managerl = oipfobjectFactory.createHumaxApplicationManagerObject();
            });
            
            it("createPortalApplication", function() { expect(humax_application_managerl.createPortalApplication).toBeDefined(); });
            it("destroyPortalApplication ", function() { expect(humax_application_managerl.destroyPortalApplication).toBeDefined(); });
            it("addOIPFApplication", function() { expect(humax_application_managerl.addOIPFApplication).toBeDefined(); });
            it("removeOIPFApplication", function() { expect(humax_application_managerl.removeOIPFApplication).toBeDefined(); });
            it("removeAllOIPFApplications", function() { expect(humax_application_managerl.removeAllOIPFApplications).toBeDefined(); });
            it("createHbbTVApplication", function() { expect(humax_application_managerl.createHbbTVApplication).toBeDefined(); });
            it("doTeletext", function() { expect(humax_application_managerl.doTeletext).toBeDefined(); });
            it("getHumaxApplications", function() { expect(humax_application_managerl.getHumaxApplications).toBeDefined(); });
            it("createHumaxApplication", function() { expect(humax_application_managerl.createHumaxApplication).toBeDefined(); });
            it("destroyHumaxApplication", function() { expect(humax_application_managerl.destroyHumaxApplication).toBeDefined(); });
        });
    });
});

