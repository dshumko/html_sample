describe('[DEVICE] Standby Mode Scenario', function() {
    "use strict";
    var configuration, localSystem;
    beforeEach(function () {
        configuration = oipfObjectFactory.createHumaxConfigurationObject();
        localSystem = configuration.localSystem;
    });

    it('check api : localSystem ', function () {
        expect(localSystem).toBeDefined();
        expect(localSystem).toHaveProperties(['setPowerState']);
    });

    //***Test Scenario:***
    //1.	Go to standby mode
    //2.	Press STB standby button within 10sec
    //3.	Check if get power state change event from MW

    describe('standby mode', function () {
        var isStandbyTestPass = false;
        beforeEach(function () {
            localSystem.onPowerStateChange = function(powerState) {
                console.log('onPowerStateChange - powerState : ' + powerState);
                if (powerState === jasmine.humax.power.state.on) {// it going to normal mode... (power.state.on)
                    localSystem.setPowerState(jasmine.humax.power.state.on);
                    isStandbyTestPass = true;
                }
            };
        });

        it('go to standby mode', function() {
            console.log('Go To Standby Mode! - Press Power key to power on within 10 sec');
            var result = localSystem.setPowerState(jasmine.humax.power.state.passiveStandby);
            expect(result).toBeTruthy();
        });

        it('check power state change', function(done) {
            setTimeout(function() {
                expect(isStandbyTestPass).toBeTruthy();
                done();
            }, 15 * 1000);
        }, 30 * 1000);
    });
    //***Notes:*** <br />
    //Press not STB backward power button, but front standby button.
});