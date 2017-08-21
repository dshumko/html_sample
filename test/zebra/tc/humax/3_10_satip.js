describe("3.10 HSatip", function() {
    var humaxobjectFactory;
    var satipManager;
    var satipServer;
    var satipClient

    beforeEach(function() {
        humaxobjectFactory = window.humaxObjectFactory;
        satipManager = humaxobjectFactory.createSatipManagerObject();
        satipServer = satipManager.server;
        satipClient = satipManager.client;
    });

    describe("3.10.1 HMXsatipManager", function() { 
        describe("3.10.1.1 Properties", function() {
            it("server", function() { expect(satipManager.server).toBeDefined(); });
            it("client", function() { expect(satipManager.client).toBeDefined(); });
        });
    });

    describe("3.10.2 HSatipClient", function() { 
    });

    describe("3.10.3 HSatipServer", function() { 
        describe("3.10.3.1 Properties", function() {
            it("started", function() { expect(satipServer.started).toBeDefined(); });
            it("friendlyName", function() { expect(satipServer.friendlyName).toBeDefined(); });
            it("onStarted", function() { expect(satipServer.onStarted).toBeDefined(); });
            it("onStopped", function() { expect(satipServer.onStopped).toBeDefined(); });
            it("onSatipStatusEvent", function() { expect(satipServer.onSatipStatusEvent).toBeDefined(); });
        });

        describe("3.10.3.2 Methods", function() {
            it("start", function() { expect(satipServer.start).toBeDefined(); });
            it("stop", function() { expect(satipServer.stop).toBeDefined(); });
        });
    });

});
