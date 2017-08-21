describe('[DEVICE] Fusing info Scenario', function() {
    "use strict";
    var configuration, localSystem, hConfiguration;

    beforeEach(function () {
        configuration = oipfObjectFactory.createHumaxConfigurationObject();
        localSystem = configuration.localSystem;
        hConfiguration = configuration.configuration;
    });

    it('check api : localSystem, configuration', function () {
        expect(localSystem).toBeDefined();
        expect(hConfiguration).toBeDefined();
    });

    //***Test Scenario:***
    // 1. Check box first boot status API
    //2.	If box first boot status is true, set the status to false
    //3.	Check fusing information is defined and display

    describe('box first boot status', function() {
        it('check box first boot status', function() {
            console.log('localSystem.boxFirstBootStatus : ' + localSystem.boxFirstBootStatus);
            if (localSystem.boxFirstBootStatus) {
                console.log('must show fusing info');
                localSystem.boxFirstBootStatus = false;
            }
            expect(localSystem.boxFirstBootStatus).toBeDefined();
        });
    });

    describe('check fusing info', function () {
        var serialNumber, language, fusingInfo;
        var secureBoot = 0, jtag = 0, otlLock = 0, secureCW = 0;
        beforeEach(function () {
            var temp = $.parseJSON(localSystem.getField('fusing_info'));
            fusingInfo = temp.FUSINGINFO;
            jasmine.humax.each(fusingInfo, function(item){
                if (item.NAME === 'SCS') {
                    secureBoot = item.VALUE;
                } else if (item.NAME === 'JTAG') {
                    jtag = item.VALUE;
                } else if (item.NAME === 'OTP') {
                    otlLock = item.VALUE;
                } else if (item.NAME === 'CWE') {
                    secureCW = item.VALUE;
                }
            });
            serialNumber = localSystem.serialNumber;
            language = hConfiguration.preferredMenuLanguage;
        });

        it('check fusing infos', function() {
            serialNumber = convertSN(serialNumber);
            console.log(['serialNumber : ' + serialNumber,
                'language : ' + language,
                'secureBoot : ' + secureBoot,
                'jtag : ' + jtag,
                'OTPLock : ' + otlLock,
                'secureCW : ' + secureCW].join('\n'));

            expect(serialNumber).toBeDefined();
            expect(language).toBeDefined();
            expect(secureBoot).toBeDefined();
            expect(jtag).toBeDefined();
            expect(otlLock).toBeDefined();
            expect(secureCW).toBeDefined();
        });
    });
    //***Notes:*** <br />
    //Fusing info should be displayed only when box first boot status is true
    //Fusing info display must be shown as a same UI with Humax UI
    //Fusing info display UI format will be passed in drop 4.

    function convertSN(hex) {
        var str = '', i;
        for ( i = 1; i < hex.length; i += 2) {
            str += hex[i];
        }
        return str;
    }
});