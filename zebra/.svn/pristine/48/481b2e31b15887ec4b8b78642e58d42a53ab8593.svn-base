describe('[DEVICE] first time boot', function() {
    "use strict";

    var configuration, localSystem, hConfiguration;
    beforeEach(function () {
        configuration = oipfObjectFactory.createHumaxConfigurationObject();
        localSystem = configuration.localSystem;
        hConfiguration = configuration.configuration;
    });

    it('check api : humax configuration, local system object', function () {
        expect(configuration).toBeDefined();
        expect(localSystem).toBeDefined();
        expect(hConfiguration).toBeDefined();
    });

    //***Test Scenario:***
    //1.	Check first time boot API
    //2.	If first time boot API is true, should set  ```Menu Language```, ```Standby Sleep Mode```, ```Standby Boot Mode```,  ```Standby Wifi Power``` to default value and first time boot API to false

    it('check first time boot', function(done){
        if (hConfiguration.firstTimeBoot) { //When boot STB first time or right after factory default
            /*preferredMenuLanguage, standbyPowerMode, standbySleepMode, standbyBootMode, standbyWifiPower default value should set in first boot time*/
            hConfiguration.preferredMenuLanguage = "eng";
            hConfiguration.standbyPowerMode = 1;  // 0: Normal, 1: Power Save
            hConfiguration.standbySleepMode = 2;  // 1: S2(Light Sleep), 2: S3(Deep Sleep)
            hConfiguration.standbyBootMode = 0;   // 0: warm boot, 1: cold boot
            hConfiguration.standbyWifiPower = 1;  // 0: wifi on standby turn off, 1: wifi on standby turn on
            hConfiguration.firstTimeBoot = false; // next boot time, the value of this flag is false
            setTimeout(function() {
                console.log("hConfiguration.preferredMenuLanguage : " + hConfiguration.preferredMenuLanguage);
                console.log("hConfiguration.standbyPowerMode : " + hConfiguration.standbyPowerMode);
                console.log("hConfiguration.standbySleepMode : " + hConfiguration.standbySleepMode);
                console.log("hConfiguration.standbyBootMode : " + hConfiguration.standbyBootMode);
                console.log("hConfiguration.standbyWifiPower : " + hConfiguration.standbyWifiPower);
                console.log("hConfiguration.firstTimeBoot : " + hConfiguration.firstTimeBoot);
                expect(hConfiguration.preferredMenuLanguage).toBe("eng");
                expect(hConfiguration.standbyPowerMode).toBe(1);
                expect(hConfiguration.standbySleepMode).toBe(2);
                expect(hConfiguration.standbyBootMode).toBe(0);
                expect(hConfiguration.standbyWifiPower).toBe(1);
                expect(hConfiguration.firstTimeBoot).toBe(false);
                done();
            }, 3000);
        } else {
            console.log('Do live service');
            done();
        }
    }, 5000);
    //***Notes: ***<br />
    // If first time boot API is true, should enter Install Wizard and when exit the install wizard should set first time boot to false
});
