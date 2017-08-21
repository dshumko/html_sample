// OIPF-T1-R2_Specification-Volume-5-Declarative-Application-Environment-v2_1-2011-06-21.pdf
describe('7.3 Configuration and settings APIs', function() {
    "use strict";
    describe('7.3.1 The application/oipfConfiguration embedded object ', function(){
        var configurationManager;
        beforeEach(function() {
            configurationManager = document.createElement('object');
            configurationManager.setAttribute("type", "application/oipfConfiguration");
            document.body.appendChild(configurationManager);
            //or
            //configurationManager = oipfObjectFactory.createConfigurationObject();
        });
        describe('7.3.1.1 Properties',function(){
            it('configuration', function(){
                expect(configurationManager.configuration).toBeDefined();
            });
            it('localSystem', function(){
                expect(configurationManager.localSystem).toBeDefined();
            });
            it('onIpAddressChange', function(){
                expect(configurationManager.onIpAddressChange).toBeDefined();
            });
        });
        afterEach(function(){
            document.body.removeChild(configurationManager);
        });
    });
    describe('7.3.2 The Configuration class', function(){
        var configuration;
        beforeEach(function(){
            var configurationManager = oipfObjectFactory.createConfigurationObject();
            configuration = configurationManager.configuration;
        });
        describe('7.3.2.1 Properties', function(){
            it('preferredAudioLanguage', function(){
                expect(configuration.preferredAudioLanguage).toBeDefined();
            });
            it('preferredSubtitleLanguage', function(){
                expect(configuration.preferredSubtitleLanguage).toBeDefined();
            });
            it('preferredUILanguage', function(){
                expect(configuration.preferredUILanguage).toBeDefined();
            });
            it('countryId', function(){
                expect(configuration.countryId).toBeDefined();
            });
            it('regionId', function(){
                expect(configuration.regionId).toBeDefined();
            });
            it('pvrPolicy', function(){
                expect(configuration.pvrPolicy).toBeDefined();
            });
            it('pvrSaveEpisodes', function(){
                expect(configuration.pvrSaveEpisodes).toBeDefined();
            });
            it('pvrSaveDays', function(){
                expect(configuration.pvrSaveDays).toBeDefined();
            });
            it('pvrStartPadding', function(){
                expect(configuration.pvrStartPadding).toBeDefined();
            });
            it('pvrEndPadding', function(){
                expect(configuration.pvrEndPadding).toBeDefined();
            });
            it('preferredTimeShiftMode', function(){
                expect(configuration.preferredTimeShiftMode).toBeDefined();
            });
        });
        describe('7.3.2.2 Methods', function(){
            it('getText', function(){
                expect(configuration.getText).toBeDefined();
            });
            it('setText', function(){
                expect(configuration.setText).toBeDefined();
            });
        });
    });
    describe('7.3.3 The LocalSystem class', function() {
        var localsystem;
        beforeEach(function () {
            var configurationManager = oipfObjectFactory.createConfigurationObject();
            localsystem = configurationManager.localsystem;
        });
        describe('7.3.3.1 Constants', function(){
            it('OFF', function(){
                expect(localsystem.OFF).toBe(0);
            });
            it('ON', function(){
                expect(localsystem.ON).toBe(1);
            });
            it('PASSIVE_STANDBY', function(){
                expect(localsystem.PASSIVE_STANDBY).toBe(2);
            });
            it('ACTIVE_STANDBY', function(){
                expect(localsystem.ACTIVE_STANDBY).toBe(3);
            });
            it('PASSIVE_STANDBY_HIBERNATE', function(){
                expect(localsystem.PASSIVE_STANDBY_HIBERNATE).toBe(4);
            });
            // v2.3
            //it('RESTART', function(){
            //    expect(localsystem.RESTART).toBe(5);
            //});
            //it('FACTORY_RESET', function(){
            //    expect(localsystem.FACTORY_RESET).toBe(6);
            //});
        });
        describe('7.3.3.2 Properties', function(){
            it('deviceID', function(){
                expect(localsystem.deviceID).toBeDefined();
            });
            it('systemReady', function(){
                expect(localsystem.systemReady).toBeDefined();
            });
            it('vendorName', function(){
                expect(localsystem.vendorName).toBeDefined();
            });
            it('modelName', function(){
                expect(localsystem.modelName).toBeDefined();
            });
            it('softwareVersion', function(){
                expect(localsystem.softwareVersion).toBeDefined();
            });
            it('hardwareVersion', function(){
                expect(localsystem.hardwareVersion).toBeDefined();
            });
            it('serialNumber', function(){
                expect(localsystem.serialNumber).toBeDefined();
            });
            it('releaseVersion', function(){
                expect(localsystem.releaseVersion).toBeDefined();
            });
            it('majorVersion', function(){
                expect(localsystem.majorVersion).toBeDefined();
            });
            it('minorVersion', function(){
                expect(localsystem.minorVersion).toBeDefined();
            });
            it('oipfProfile', function(){
                expect(localsystem.oipfProfile).toBeDefined();
            });
            it('pvrEnabled', function(){
                expect(localsystem.pvrEnabled).toBeDefined();
            });
            it('ciplusEnabled', function(){
                expect(localsystem.ciplusEnabled).toBeDefined();
            });
            it('standbyState', function(){
                expect(localsystem.standbyState).toBeDefined();
            });
            it('powerState', function(){
                expect(localsystem.powerState).toBeDefined();
            });
            it('previousPowerState', function(){
                expect(localsystem.previousPowerState).toBeDefined();
            });
            it('timeCurrentPowerState', function(){
                expect(localsystem.timeCurrentPowerState).toBeDefined();
            });
            it('onPowerStateChange', function(){
                expect(localsystem.onPowerStateChange).toBeDefined();
            });
            it('volume', function(){
                expect(localsystem.volume).toBeDefined();
            });
            it('mute', function(){
                expect(localsystem.mute).toBeDefined();
            });
            it('outputs', function(){
                expect(localsystem.outputs).toBeDefined();
            });
            it('networkInterfaces', function(){
                expect(localsystem.networkInterfaces).toBeDefined();
            });
            it('tuners', function(){
                expect(localsystem.tuners).toBeDefined();
            });
            it('tvStandard', function(){
                expect(localsystem.tvStandard).toBeDefined();
            });
            it('pvrSupport', function(){
                expect(localsystem.pvrSupport).toBeDefined();
            });
        });
        describe('7.3.3.3 Methods', function(){
            it('setScreenSize', function(){
                expect(localsystem.setScreenSize).toBeDefined();
            });
            it('setPvrSupport', function(){
                expect(localsystem.setPvrSupport).toBeDefined();
            });
            it('setPowerState', function(){
                expect(localsystem.setPowerState).toBeDefined();
            });
            it('setDigestCredentials', function(){
                expect(localsystem.setDigestCredentials).toBeDefined();
            });
            it('clearDigestCredentials', function(){
                expect(localsystem.clearDigestCredentials).toBeDefined();
            });
        });
        describe('7.3.3.4 Events', function(){
            it('onPowerStateChange', function(){
                expect(localsystem.onPowerStateChange).toBeDefined();
            });
        });
    });
    describe('7.3.4 The NetworkInterface class', function(){
        /*The NetworkInterface class represents a physical or logical network interface in the receiver.*/
        var networkInterface;
        beforeEach(function () {
            var configurationManager = oipfObjectFactory.createConfigurationObject();
            var localsystem = configurationManager.localsystem;
            networkInterface = localsystem.networkInterfaces.item(0);   //TODO verify me
        });
        describe('7.3.4.1 Properties', function(){
            it('ipAddress', function(){
                expect(networkInterface.ipAddress).toBeDefined();
            });
            it('macAddress', function(){
                expect(networkInterface.macAddress).toBeDefined();
            });
            it('connected', function(){
                expect(networkInterface.connected).toBeDefined();
            });
            it('enabled', function(){
                expect(networkInterface.enabled).toBeDefined();
            });
        });
    });
    describe('7.3.5 The AVOutput class', function(){
        /*The AVOutput class represents an audio or video output on the local platform.*/
        var outputs;
        beforeEach(function () {
            var configurationManager = oipfObjectFactory.createConfigurationObject();
            var localsystem = configurationManager.localsystem;
            outputs = localsystem.outputs.item(0);   //TODO verify me
        });
        describe('7.3.5.1 Properties', function(){
            it('name', function(){
                expect(outputs.name).toBeDefined();
            });
            it('type', function(){
                expect(outputs.type).toBeDefined();
            });
            it('enabled', function(){
                expect(outputs.enabled).toBeDefined();
            });
            it('digitalAudioMode', function(){
                expect(outputs.digitalAudioMode).toBeDefined();
            });
            it('audioRange', function(){
                expect(outputs.audioRange).toBeDefined();
            });
            it('hdVideoFormat', function(){
                expect(outputs.hdVideoFormat).toBeDefined();
            });
            it('tvAspectRatio', function(){
                expect(outputs.tvAspectRatio).toBeDefined();
            });
            it('supportedVideoModes', function(){
                expect(outputs.supportedVideoModes).toBeDefined();
            });
            it('supportedVideoModes', function(){
                expect(outputs.supportedVideoModes).toBeDefined();
            });
            it('supportedDigitalAudioModes', function(){
                expect(outputs.supportedDigitalAudioModes).toBeDefined();
            });
            it('supportedAudioRanges', function(){
                expect(outputs.supportedAudioRanges).toBeDefined();
            });
            it('supportedHdVideoFormats', function(){
                expect(outputs.supportedHdVideoFormats).toBeDefined();
            });
            it('supportedAspectRatios', function(){
                expect(outputs.supportedAspectRatios).toBeDefined();
            });
        });
    });
    describe('7.3.6 The NetworkInterfaceCollection class');
    describe('7.3.7 The AVOutputCollection class');
    describe('7.3.8 The TunerCollection class');
    describe('7.3.9 The Tuner class', function(){
        var tuner;
        beforeEach(function () {
            var configurationManager = oipfObjectFactory.createConfigurationObject();
            var localsystem = configurationManager.localsystem;
            tuner = localsystem.tuners.item(0);   //TODO verify me
        });
        describe('7.3.9.1 Properties', function(){
            it('id', function(){
                expect(tuner.id).toBeDefined();
            });
            it('name', function(){
                expect(tuner.name).toBeDefined();
            });
            it('idTypes', function(){
                expect(tuner.idTypes).toBeDefined();
            });
            it('enableTuner', function(){
                expect(tuner.enableTuner).toBeDefined();
            });
            it('signalInfo', function(){
                expect(tuner.signalInfo).toBeDefined();
            });
            it('powerOnExternal', function(){
                expect(tuner.powerOnExternal).toBeDefined();
            });
        });
    });
    describe('7.3.10 The SignalInfo class', function(){
        /** The SignalInfo object provides details on the signal strength of the tuner. If the tuner is not tuned to a transponder the
        all properties SHALL have the value undefined. */
        var signalInfo;
        beforeEach(function () {
            var configurationManager = oipfObjectFactory.createConfigurationObject();
            var localsystem = configurationManager.localsystem;
            var tuner = localsystem.tuners.item(0);   //TODO verify me
            signalInfo = tuner.signalInfo;
        });
        describe('7.3.10.1 Properties', function(){
            it('strength', function(){
                expect(signalInfo.strength).toBeDefined();
            });
            it('quality', function(){
                expect(signalInfo.quality).toBeDefined();
            });
            it('ber', function(){
                expect(signalInfo.ber).toBeDefined();
            });
            it('snr', function(){
                expect(signalInfo.snr).toBeDefined();
            });
            it('lock', function(){
                expect(signalInfo.lock).toBeDefined();
            });
        });
    });
});