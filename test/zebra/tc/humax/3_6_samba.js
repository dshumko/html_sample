describe("3.6 HSamba", function() {
    var humaxobjectFactory;
    var sambaManager;
    var sambaServer;
    var sambaClient;

    beforeEach(function() {
        humaxobjectFactory = window.humaxObjectFactory;
        sambaManager = humaxobjectFactory.createSambaManagerObject();
        sambaServer = sambaManager.server;
        sambaClient = sambaManager.client;
    });

    describe("3.6.1 HSambaManager", function() { 
        describe("3.6.1.1 Properties", function() {
            it("server", function() { expect(sambaManager.server).toBeDefined(); });
            it("client", function() { expect(sambaManager.client).toBeDefined(); });
            it("onScanResult", function() { expect(sambaManager.onScanResult).toBeDefined(); });
            it("onMountResult", function() { expect(sambaManager.onMountResult).toBeDefined(); });
        });

        describe("3.6.1.2 Methods", function() {
            it("startScan", function() { expect(sambaManager.startScan).toBeDefined(); });
            it("stopScan", function() { expect(sambaManager.stopScan).toBeDefined(); });
            it("mount", function() { expect(sambaManager.mount).toBeDefined(); });
            it("unmount", function() { expect(sambaManager.unmount).toBeDefined(); });
            it("unmountAll", function() { expect(sambaManager.unmountAll).toBeDefined(); });
            it("getAvailableList", function() { expect(sambaManager.getAvailableList).toBeDefined(); });
        });
    });

    describe("3.6.2 HSambaServer", function() { 
        describe("3.5.2.1 Properties", function() {
            it("serverName", function() { expect(sambaServer.serverName).toBeDefined(); });
            it("workgroup", function() { expect(sambaServer.workgroup).toBeDefined(); });
            it("started", function() { expect(sambaServer.started).toBeDefined(); });
            it("users", function() { expect(sambaServer.users).toBeDefined(); });
            it("onStateUpdated", function() { expect(sambaServer.onStateUpdated).toBeDefined(); });
        });

        describe("3.6.2.2 Methods", function() {
            it("start", function() { expect(sambaServer.start).toBeDefined(); });
            it("stop", function() { expect(sambaServer.stop).toBeDefined(); });
            it("setPassword", function() { expect(sambaServer.setPassword).toBeDefined(); });
            it("isValidPassword", function() { expect(sambaServer.isValidPassword).toBeDefined(); });
            it("setShareFolder", function() { expect(sambaServer.setShareFolder).toBeDefined(); });
            it("getShareFolder", function() { expect(sambaServer.getShareFolder).toBeDefined(); });
            it("setPublicAccess", function() { expect(sambaServer.setPublicAccess).toBeDefined(); });
            it("getPublicAccess", function() { expect(sambaServer.getPublicAccess).toBeDefined(); });
        });
    });

    describe("3.6.3 HSambaShareFolder", function() { 
        describe("3.6.3.1 Properties", function() {
            // To Do - senario test
            /*
            it("fullPath", function() { expect(sambaShareFolder.fullPath).toBeDefined(); });
            it("name", function() { expect(sambaShareFolder.name).toBeDefined(); });
            it("user", function() { expect(sambaShareFolder.user).toBeDefined(); });
            it("writable", function() { expect(sambaShareFolder.writable).toBeDefined(); });
            */
        });
    });

    describe("3.6.4 HSambaClient", function() { 
        describe("3.6.4.1 Properties", function() {
            it("onScanResult", function() { expect(sambaClient.onScanResult).toBeDefined(); });
            it("onMountResult", function() { expect(sambaClient.onMountResult).toBeDefined(); });
        });

        describe("3.6.4.2 Methods", function() {
            it("startScan", function() { expect(sambaClient.startScan).toBeDefined(); });
            it("stopScan", function() { expect(sambaClient.stopScan).toBeDefined(); });
            it("mount", function() { expect(sambaClient.mount).toBeDefined(); });
            it("unmount", function() { expect(sambaClient.unmount).toBeDefined(); });
            it("unmountAll", function() { expect(sambaClient.unmountAll).toBeDefined(); });
            it("getAvailableList", function() { expect(sambaClient.getAvailableList).toBeDefined(); });
        });
    });

    describe("3.6.5 HSambaSearchedServer", function() { 
        describe("3.6.5.1 Properties", function() {
            // To Do - senario test
            /*
            it("serverName", function() { expect(sambaSearchedServer.serverName).toBeDefined(); });
            it("sharedName", function() { expect(sambaSearchedServer.sharedName).toBeDefined(); });
            it("ip", function() { expect(sambaSearchedServer.ip).toBeDefined(); });
            it("isMounted", function() { expect(sambaSearchedServer.isMounted).toBeDefined(); });
            it("mountPath", function() { expect(sambaSearchedServer.mountPath).toBeDefined(); });
            it("log", function() { expect(sambaSearchedServer.log).toBeDefined(); });
            it("id", function() { expect(sambaSearchedServer.id).toBeDefined(); });
            it("password", function() { expect(sambaSearchedServer.password).toBeDefined(); });
            */
        });
    });

});
