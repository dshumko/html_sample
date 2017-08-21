describe("3.7 Bluetooth Extension APIs",function(){
	var oipfobjectFactory = window.oipfObjectFactory;
	var hBluetoothManager=oipfobjectFactory.createBluetoothManagerObject();	

  describe("3.7.1 HBluetoothManager class", function(){
  	describe("3.7.1.1 Properties",function(){
  		it("enabled",function(){expect(hBluetoothManager.enabled).toBeDefined();});  		
  		it("onStateUpdate",function(){expect(hBluetoothManager.onStateUpdate).toBeDefined();});
		});
		describe("3.7.1.2 Methods",function(){
			it("startScan",function(){expect(hBluetoothManager.startScan).toBeDefined();});
  		it("stopScan",function(){expect(hBluetoothManager.stopScan).toBeDefined();});
  		it("connect",function(){expect(hBluetoothManager.connect).toBeDefined();});
  		it("disconnect",function(){expect(hBluetoothManager.disconnect).toBeDefined();});
  		it("remove",function(){expect(hBluetoothManager.remove).toBeDefined();});
  		it("getDeviceList",function(){expect(hBluetoothManager.getDeviceList).toBeDefined();});
  		it("sendPincode",function(){expect(hBluetoothManager.sendPincode).toBeDefined();});
  		it("getMacAddress",function(){expect(hBluetoothManager.getMacAddress).toBeDefined();});
		});
	});

	//before test this suite, go to setting->network->bluetooth, set bluetooth on and check list updated.
	//after that, this test could pass
	describe("3.7.2 HBluetoothDevice class", function(){		
		var hBluetoothDevices = hBluetoothManager.getDeviceList();				
		it("hBluetoothDevices length",function(){expect(hBluetoothDevices.length).toBeGreaterThan(0)});
		var hBluetoothDevice0 = hBluetoothDevices.item(0);
				
  	describe("3.7.2.1 Properties",function(){
  		it("id",function(){expect(hBluetoothDevice0.id).toBeDefined();});
  		it("name",function(){expect(hBluetoothDevice0.name).toBeDefined();});
  		it("status",function(){expect(hBluetoothDevice0.status).toBeDefined();});
  		it("index",function(){expect(hBluetoothDevice0.index).toBeDefined();});
  		it("address",function(){expect(hBluetoothDevice0.address).toBeDefined();});
  		it("supportedProfile",function(){expect(hBluetoothDevice0.supportedProfile).toBeDefined();});
  		it("devClass",function(){expect(hBluetoothDevice0.devClass).toBeDefined();});
		});
		describe("3.7.2.2 Methods",function(){
			it("connect",function(){expect(hBluetoothDevice0.connect).toBeDefined();});
			it("disconnect",function(){expect(hBluetoothDevice0.disconnect).toBeDefined();});
			it("remove",function(){expect(hBluetoothDevice0.remove).toBeDefined();});
			it("sendPincode",function(){expect(hBluetoothDevice0.sendPincode).toBeDefined();});
		});
	});
	
	describe("3.7.3 HBluetoothDeviceCollection class",function(){
	});
});
