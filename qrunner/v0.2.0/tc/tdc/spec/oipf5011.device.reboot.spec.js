describe('[DEVICE]  stb reset', function() {
    "use strict";
    //***Test Scenario: ***
    //    1.	Do STB reset
    beforeAll(function(done){
				console.log("wait for 20 sec");
        setTimeout(done, 20000);
    },30000);
    it('do stb  reset', function() {
        var humaxConfiguration = oipfObjectFactory.createHumaxConfigurationObject();
        var configuration = humaxConfiguration.configuration;
				console.log("call 'doReboot'");
        configuration.setField("doReboot", "true");
				console.log("end of function call");
    });
});
