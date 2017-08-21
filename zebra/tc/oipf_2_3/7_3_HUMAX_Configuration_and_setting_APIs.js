describe("7.3 Configuration and setting APIs", function() {
    var oipfobjectFactory;
    var oipfConfiguration;
    var localSystem;
    var tunerCollection;
    var tuner;
    var signalInfo;

    try{
        oipfobjectFactory = window.oipfObjectFactory;
        oipfConfiguration = oipfobjectFactory.createConfigurationObject();
    }catch(e){
        oipfConfiguration = undefined;
    }

    describe("7.3.10 The SignalInfo class", function() {
        beforeEach(function() {
            localSystem = oipfConfiguration.localSystem;
            tunerCollection = localSystem.tuners;
            tuner = tunerCollection[0];
            signalInfo = tuner.signalInfo;
        });
        describe("Hmx Properties", function() {
            it("tuningParams", function() { expect(signalInfo.tuningParams).toBeDefined(); });
        });
    });
});