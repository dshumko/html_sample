describe('[SETTINGS] Dynamic update flag setting', function() {
    "use strict";

    var configuration, localSystem;
    beforeEach(function () {
        configuration = oipfObjectFactory.createHumaxConfigurationObject();
        localSystem = configuration.localSystem;
    });
    it('check api : humax configuration, local system object', function () {
        expect(configuration).toBeDefined();
        expect(localSystem).toBeDefined();
    });

    //***Test Scenario:*** <br />
    //1.	check flag value and set to inverse boolean value

    it('check boxServiceUpdateFlag  ', function(){
        var flag, flagNew;
        flag = localSystem.boxServiceUpdateFlag;
        console.log('get boxServiceUpdateFlag first: ' + flag + " - set " + (!flag));

        localSystem.boxServiceUpdateFlag = !flag;
        flagNew =  localSystem.boxServiceUpdateFlag;
        console.log('get boxServiceUpdateFlag second: '  + flagNew);

        localSystem.boxServiceUpdateFlag = flag;
        expect(localSystem.boxServiceUpdateFlag).toBe(flag);
    });
});
