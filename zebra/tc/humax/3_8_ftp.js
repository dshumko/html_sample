describe("3.8 FTP Extension APIs",function(){
	var oipfobjectFactory = window.oipfObjectFactory;
	var hFtpManager=oipfobjectFactory.createFtpManagerObject();
	var hFtpServer = hFtpManager.server;

	describe("3.8.1 HFtpManager class", function(){
  		describe("3.8.1.1 Properties",function(){
  			it("server",function(){expect(hFtpManager.server).toBeDefined();});
			});
	});
	
	describe("3.8.2 HFtpServer class", function(){
			
  		describe("3.8.2.1 Properties",function(){
  			it("serverName",function(){expect(hFtpServer.serverName).toBeDefined();});
  			it("started",function(){expect(hFtpServer.started).toBeDefined();});
  			it("port",function(){expect(hFtpServer.port).toBeDefined();});
  			it("users",function(){expect(hFtpServer.users).toBeDefined();});
  			it("onStateUpdated",function(){expect(hFtpServer.onStateUpdated).toBeDefined();});
			});
			
			describe("3.8.2.2 Methods",function(){
  			it("start",function(){expect(hFtpServer.start).toBeDefined();});
  			it("stop",function(){expect(hFtpServer.stop).toBeDefined();});
  			it("setPassword",function(){expect(hFtpServer.setPassword).toBeDefined();});  			
  			it("isValidPassword",function(){expect(hFtpServer.isValidPassword).toBeDefined();});
  			it("setShareFolder",function(){expect(hFtpServer.setShareFolder).toBeDefined();});
  			it("getShareFolder",function(){expect(hFtpServer.getShareFolder).toBeDefined();});
  			it("setPublicAccess",function(){expect(hFtpServer.setPublicAccess).toBeDefined();});
  			it("setPublicAccess",function(){expect(hFtpServer.setPublicAccess).toBeDefined();});
			});
	});

	describe("3.8.3 HFtpShareFolder class", function(){
			var hFtpsShareFolder = hFtpServer.getShareFolder('admin');
			var hFtpsShareFolder0 = hFtpsShareFolder.item(0);
  		describe("3.8.3.1 Properties",function(){
  			it("fullPath",function(){expect(hFtpsShareFolder0.fullPath).toBeDefined();});
  			it("name",function(){expect(hFtpsShareFolder0.name).toBeDefined();});
  			it("user",function(){expect(hFtpsShareFolder0.user).toBeDefined();});
  			it("writable",function(){expect(hFtpsShareFolder0.writable).toBeDefined();});
  			it("isValid",function(){expect(hFtpsShareFolder0.isValid).toBeDefined();});
			});
	});
});
