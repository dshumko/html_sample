describe("3.14 Operator Extension APIs",function(){
	var oipfobjectFactory = window.oipfObjectFactory;
	var hOperatorFreesat=oipfobjectFactory.createHumaxOperatorFreesatObject();    
	//createHumaxOperatorFreesatObject is also defined and works same as createHumaxOperatorFreesatObject.
	//but webapp use only createHumaxOperatorFreesatObject
	//need to update document & this TC

	describe("3.14.1 HOperatorFeature class", function(){
  		describe("3.14.1.1 Properties",function(){
  			it("name",function(){expect(hOperatorFreesat.name).toBeDefined();});
		});
		describe("3.14.1.2 Method",function(){
				it("listenHomeTp",function(){expect(hOperatorFreesat.listenHomeTp).toBeDefined();});
		});
	});
});
