describe("3.13 CAS Extension APIs",function(){
	var oipfobjectFactory = window.oipfObjectFactory;
	var hCasUi=oipfobjectFactory.createHumaxCasUtil();

	describe("3.13.1 HCasUi class", function(){
  		describe("3.13.1.1 Properties",function(){
  			it("onCasUiEvent",function(){expect(hCasUi.onCasUiEvent).toBeDefined();});
			//hgs-1000s error, intrinsic is not implemented in getter
		});
		describe("3.13.1.2 Methods",function(){
			it("openSession",function(){expect(hCasUi.openSession).toBeDefined();});
  			it("closeSession",function(){expect(hCasUi.closeSession).toBeDefined();});
	  		it("sendUiResponse",function(){expect(hCasUi.sendUiResponse).toBeDefined();});
		});
	});
});
