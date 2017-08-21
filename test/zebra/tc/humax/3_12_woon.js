describe("3.12 HWoon", function() {
    var humaxobjectFactory;
    var woonManager;
    var woonServer;
    var woonClient;

    beforeEach(function() {
        humaxobjectFactory = window.humaxObjectFactory;
        woonManager = humaxobjectFactory.createWoonManagerObject();
        woonServer = woonManager.server;
        woonClient = woonManager.client;
    });

    describe("3.12.1 HWoon", function() { 
        describe("3.12.1.1 Properties", function() {
            it("server", function() { expect(woonManager.server).toBeDefined(); });
            it("client", function() { expect(woonManager.client).toBeDefined(); });
        });
    });

    describe("3.12.2 HWoonClient", function() { 
        describe("3.12.2.1 Properties", function() {
            it("onFriendScan", function() { expect(woonClient.onFriendScan).toBeDefined(); });
        });

        describe("3.12.2.2 Methods", function() {
            it("startScan", function() { expect(woonClient.startScan).toBeDefined(); });
            it("stopScan", function() { expect(woonClient.stopScan).toBeDefined(); });
            it("addFriend", function() { expect(woonClient.addFriend).toBeDefined(); });
            it("removeFriend", function() { expect(woonClient.removeFriend).toBeDefined(); });
            it("getWoonFriendList", function() { expect(woonClient.getWoonFriendList).toBeDefined(); });
        });
    });

    describe("3.12.3 HWoonServer", function() { 
        describe("3.12.3.1 Properties", function() {
            it("started", function() { expect(woonServer.started).toBeDefined(); });
            it("friendlyName", function() { expect(woonServer.friendlyName).toBeDefined(); });
            it("onResultEvent", function() { expect(woonServer.onResultEvent).toBeDefined(); });
            it("onNotifyPinCode", function() { expect(woonServer.onNotifyPinCode).toBeDefined(); });
        });

        describe("3.12.3.2 Methods", function() {
            it("start", function() { expect(woonServer.start).toBeDefined(); });
            it("stop", function() { expect(woonServer.stop).toBeDefined(); });
            it("testConnection", function() { expect(woonServer.testConnection).toBeDefined(); });
        });
    });

    describe("3.12.4 HWoonServerConnectInfo", function() { 
        describe("3.12.4.1 Properties", function() {
            // To Do - senario test
            /*
            it("state", function() { expect(woonServerConnectInfo.state).toBeDefined(); });
            it("localip", function() { expect(woonServerConnectInfo.localip).toBeDefined(); });
            it("publicip", function() { expect(woonServerConnectInfo.publicip).toBeDefined(); });
            it("externalip", function() { expect(woonServerConnectInfo.externalip).toBeDefined(); });
            it("publicport", function() { expect(woonServerConnectInfo.publicport).toBeDefined(); });
            it("externalport", function() { expect(woonServerConnectInfo.externalport).toBeDefined(); });
            */
        });
    });

});
