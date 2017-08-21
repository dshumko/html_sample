describe('[DEVICE] automatic power down', function() {
    "use strict";
    var configuration, localSystem;
    beforeEach(function () {
        configuration = oipfObjectFactory.createHumaxConfigurationObject();
        localSystem = configuration.localSystem;
    });

    it('check api : localSystem', function () {
        expect(configuration).toBeDefined();
        expect(localSystem).toBeDefined();
        expect(localSystem).toHaveProperties(['setPowerState']);
    });

    //***Test Scenario:***
    //1.	Set automatic power down time to 3 hours
    //2.	Check ```User Action Idle Event``` callback is defined

    it('set automaticPowerdown time & UserActionIdle event', function () {
        //localSystem.automaticPowerdown is msec. So convert to hour
        var currentAutoDownHourTime = Math.floor(localSystem.automaticPowerdown / (60 * 60 * 1000));
        console.log('current auto power down tme by the hour : ' + currentAutoDownHourTime);
        expect(localSystem.automaticPowerdown).toBeDefined();

        var hours = 3;
        localSystem.automaticPowerdown = hours * 60 * 60 * 1000; // set auto power down time to 3 hours.

        localSystem.onUserActionIdle = function() {  //When there is no user action for 3 hours, this event will be called.
            localSystem.setPowerState(jasmine.humax.power.state.passiveStandby);
        };
        expect(localSystem.onUserActionIdle).toBeDefined();
    });

    //***Notes:***<br />
    //    For 3 hours if there are no user inputs,  ```User Action Idle Event``` will be delivered.
});