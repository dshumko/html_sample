describe('[SETTINGS] recording option select', function() {
    "use strict";

    var configuration, hConfiguration;

    beforeEach(function () {
        configuration = oipfObjectFactory.createHumaxConfigurationObject();
        hConfiguration = configuration.configuration;
    });

    it('check api : humax configuration', function () {
        expect(configuration).toBeDefined();
        expect(hConfiguration).toBeDefined();
    });

    //***Test Scenario:***
    //1.	Recording start padding set to 10min and check setting is done correctly
    //2.	Recording end padding set to 10min and check setting is done correctly
    //3.	TSR Option turn on or turn off

    it('start padding get, set', function (done) {  //0(off), 180(3min), 300(5min), 600(10min), 1200(20min)
        expect(hConfiguration.pvrStartPadding).toBeDefined();
        console.log('hConfiguration.pvrStartPadding : ' + hConfiguration.pvrStartPadding);
        var startPadding = 10 * 60; // 10 min
        hConfiguration.pvrStartPadding = startPadding;
        setTimeout(function() {
            console.log('hConfiguration.pvrStartPadding : ' + hConfiguration.pvrStartPadding);
            expect(hConfiguration.pvrStartPadding).toBe(10 * 60);
            done();
        }, 3000);
    }, 4000);

    it('end padding get, set', function (done) {   //0(off), 180(3min), 300(5min), 600(10min), 1200(20min)
        expect(hConfiguration.pvrEndPadding).toBeDefined();
        console.log('hConfiguration.pvrEndPadding : ' + hConfiguration.pvrEndPadding);
        var endPadding = 10 * 60; // 10 min
        hConfiguration.pvrEndPadding = endPadding;
        setTimeout(function() {
            console.log('hConfiguration.pvrEndPadding : ' + hConfiguration.pvrEndPadding);
            expect(hConfiguration.pvrEndPadding).toBe(10 * 60);
            done();
        }, 3000);
    }, 4000);

    it('tsr on, off', function () {
        expect(hConfiguration.timeShiftEnabled).toBeDefined();
        console.log('hConfiguration.timeShiftEnabled : ' + hConfiguration.timeShiftEnabled);

        if (hConfiguration.timeShiftEnabled) {
            hConfiguration.timeShiftEnabled = false;  // tsr off
            expect(hConfiguration.timeShiftEnabled).toBe(false);
        } else {
            hConfiguration.timeShiftEnabled = true; // tsr on
            expect(hConfiguration.timeShiftEnabled).toBe(true);
        }
        console.log('hConfiguration.timeShiftEnabled : ' + hConfiguration.timeShiftEnabled);
    });
});