describe("7.3 Configuration and setting APIs", function() {
    var oipfobjectFactory;
    var oipfConfiguration;
    var configuration;
    var localSystem;
    var networkInterfaceCollection;
    var networkInterface;
    var aVOutputCollection;
    var aVOutput;
    var tunerCollection;
    var tuner;
    var signalInfo;
    var lnbInfo;
    var startupInformation;

    try{
        oipfobjectFactory = window.oipfObjectFactory;
        oipfConfiguration = oipfobjectFactory.createConfigurationObject();
    } catch(e) {
        oipfConfiguration = undefined;
    }


    describe("7.3.1 The application/oipfConfiguration embedded object", function() {
        describe("7.3.1.1 Properties", function() {
            it("configuration", function() { expect(oipfConfiguration.configuration).toBeDefined(); });
            it("localSystem", function() { expect(oipfConfiguration.localSystem).toBeDefined(); });
            it("onIpAddressChange", function() { expect(oipfConfiguration.onIpAddressChange).toBeDefined(); });
        });

    });

    describe("7.3.2 The Configuration class", function() {
        beforeEach(function() {
            configuration = oipfConfiguration.configuration;
        });
        describe("7.3.2.1 Properties", function() {
            it("preferredAudioLanguage", function() { expect(configuration.preferredAudioLanguage).toBeDefined(); });
            it("preferredSubtitleLanguage", function() { expect(configuration.preferredSubtitleLanguage).toBeDefined(); });
            it("preferredUILanguage", function() { expect(configuration.preferredUILanguage).toBeDefined(); });
            it("countryId", function() { expect(configuration.countryId).toBeDefined(); });
            it("regionId", function() { expect(configuration.regionId).toBeDefined(); });
            it("pvrPolicy", function() { expect(configuration.pvrPolicy).toBeDefined(); });
            it("pvrSaveEpisodes", function() { expect(configuration.pvrSaveEpisodes).toBeDefined(); });
            it("pvrSaveDays", function() { expect(configuration.pvrSaveDays).toBeDefined(); });
            it("pvrStartPadding", function() { expect(configuration.pvrStartPadding).toBeDefined(); });
            it("pvrEndPadding", function() { expect(configuration.pvrEndPadding).toBeDefined(); });
            it("preferredTimeShiftMode", function() { expect(configuration.preferredTimeShiftMode).toBeDefined(); });

        });
        describe("7.3.2.2 Methods", function() {
            it("getText", function() { expect(configuration.getText).toBeDefined(); });
            it("setText", function() { expect(configuration.setText).toBeDefined(); });
        });
    });
    describe("7.3.3 The LocalSystem class", function() {
        beforeEach(function() {
            localSystem = oipfConfiguration.localSystem;
        });
        describe("7.3.3.1 Constants", function() {
            it("OFF", function() { expect(localSystem.OFF).toBeDefined(); });
            it("ON", function() { expect(localSystem.ON).toBeDefined(); });
            it("PASSIVE_STANDBY", function() { expect(localSystem.PASSIVE_STANDBY).toBeDefined(); });
            it("ACTIVE_STANDBY", function() { expect(localSystem.ACTIVE_STANDBY).toBeDefined(); });
            it("PASSIVE_STANDBY_HIBERNATE", function() { expect(localSystem.PASSIVE_STANDBY_HIBERNATE).toBeDefined(); });
            it("RESTART", function() { expect(localSystem.RESTART).toBeDefined(); });
            it("FACTORY_RESET", function() { expect(localSystem.FACTORY_RESET).toBeDefined(); });
            it("STARTUP_URL_NONE", function() { expect(localSystem.FACTORY_RESET).toBeDefined(); });
            it("STARTUP_URL_DHCP", function() { expect(localSystem.FACTORY_RESET).toBeDefined(); });
            it("STARTUP_URL_TR069", function() { expect(localSystem.FACTORY_RESET).toBeDefined(); });
            it("STARTUP_URL_PRECONFIGURED", function() { expect(localSystem.FACTORY_RESET).toBeDefined(); });
            it("STARTUP_URL_OTHER", function() { expect(localSystem.FACTORY_RESET).toBeDefined(); });
        });
        describe("7.3.3.2 Properties", function() {
            it("deviceID", function() { expect(localSystem.deviceID).toBeDefined(); });
            it("systemReady", function() { expect(localSystem.systemReady).toBeDefined(); });
            it("vendorName", function() { expect(localSystem.vendorName).toBeDefined(); });
            it("modelName", function() { expect(localSystem.modelName).toBeDefined(); });
            it("familyName", function() { expect(localSystem.familyName).toBeDefined(); });
            it("softwareVersion", function() { expect(localSystem.softwareVersion).toBeDefined(); });
            it("hardwareVersion", function() { expect(localSystem.hardwareVersion).toBeDefined(); });
            it("serialNumber", function() { expect(localSystem.serialNumber).toBeDefined(); });
            it("releaseVersion", function() { expect(localSystem.releaseVersion).toBeDefined(); });
            it("majorVersion", function() { expect(localSystem.majorVersion).toBeDefined(); });
            it("minorVersion", function() { expect(localSystem.minorVersion).toBeDefined(); });
            it("oipfProfile", function() { expect(localSystem.oipfProfile).toBeDefined(); });
            it("pvrEnabled", function() { expect(localSystem.pvrEnabled).toBeDefined(); });
            it("ciplusEnabled", function() { expect(localSystem.ciplusEnabled).toBeDefined(); });
            it("powerState", function() { expect(localSystem.powerState).toBeDefined(); });
            it("previousPowerState", function() { expect(localSystem.previousPowerState).toBeDefined(); });
            it("timeCurrentPowerState", function() { expect(localSystem.timeCurrentPowerState).toBeDefined(); });
            it("onPowerStateChange", function() { expect(localSystem.onPowerStateChange).toBeDefined(); });
            it("volume", function() { expect(localSystem.volume).toBeDefined(); });
            it("mute", function() { expect(localSystem.mute).toBeDefined(); });
            it("outputs", function() { expect(localSystem.outputs).toBeDefined(); });
            it("networkInterfaces", function() { expect(localSystem.networkInterfaces).toBeDefined(); });
            it("tuners", function() { expect(localSystem.tuners).toBeDefined(); });
            it("tvStandardsSupported", function() { expect(localSystem.tvStandardsSupported).toBeDefined(); });
            it("tvStandard", function() { expect(localSystem.tvStandard).toBeDefined(); });
            it("pvrSupport", function() { expect(localSystem.pvrSupport).toBeDefined(); });
            it("startupInformation", function() { expect(localSystem.startupInformation).toBeDefined(); });
            it("onStartupInfoChange", function() { expect(localSystem.onStartupInfoChange).toBeDefined(); });
        });
        describe("7.3.3.3 Methods", function() {
            it("setScreenSize", function() { expect(localSystem.setScreenSize).toBeDefined(); });
            it("setTVStandard", function() { expect(localSystem.setTVStandard).toBeDefined(); });
            it("setPvrSupport", function() { expect(localSystem.setPvrSupport).toBeDefined(); });
            it("setPowerState", function() { expect(localSystem.setPowerState).toBeDefined(); });
            it("setDigestCredentials", function() { expect(localSystem.setDigestCredentials).toBeDefined(); });
            it("clearDigestCredentials", function() { expect(localSystem.clearDigestCredentials).toBeDefined(); });
            it("hasDigestCredentials", function() { expect(localSystem.hasDigestCredentials).toBeDefined(); });
        });
    });
    describe("7.3.4 The NetworkInterface class", function() {
        beforeEach(function() {
            localSystem = oipfConfiguration.localSystem;
            networkInterfaceCollection = localSystem.networkInterfaces;
            networkInterface = networkInterfaceCollection[0];
        });
        describe("7.3.4.1 Properties", function() {
            it("ipAddress", function() { expect(networkInterface.ipAddress).toBeDefined(); });
            it("macAddress", function() { expect(networkInterface.macAddress).toBeDefined(); });
            it("connected", function() { expect(networkInterface.connected).toBeDefined(); });
            it("enabled", function() { expect(networkInterface.enabled).toBeDefined(); });
        });
    });
    describe("7.3.5 The AVOutput class", function() {
        beforeEach(function() {
            localSystem = oipfConfiguration.localSystem;
            aVOutputCollection = localSystem.outputs;
            aVOutput = aVOutputCollection[0];
        });
        describe("7.3.5.1 Properties", function() {
            it("name", function() { expect(aVOutput.name).toBeDefined(); });
            it("type", function() { expect(aVOutput.type).toBeDefined(); });
            it("enabled", function() { expect(aVOutput.enabled).toBeDefined(); });
            it("subtitleEnabled", function() { expect(aVOutput.subtitleEnabled).toBeDefined(); });
            it("videoMode", function() { expect(aVOutput.videoMode).toBeDefined(); });
            it("digitalAudioMode", function() { expect(aVOutput.digitalAudioMode).toBeDefined(); });
            it("audioRange", function() { expect(aVOutput.audioRange).toBeDefined(); });
            it("hdVideoFormat", function() { expect(aVOutput.hdVideoFormat).toBeDefined(); });
            it("tvAspectRatio", function() { expect(aVOutput.tvAspectRatio).toBeDefined(); });
            it("supportedVideoModes", function() { expect(aVOutput.supportedVideoModes).toBeDefined(); });
            it("supportedDigitalAudioModes", function() { expect(aVOutput.supportedDigitalAudioModes).toBeDefined(); });
            it("supportedAudioRanges", function() { expect(aVOutput.supportedAudioRanges).toBeDefined(); });
            it("supportedHdVideoFormats", function() { expect(aVOutput.supportedHdVideoFormats).toBeDefined(); });
            it("supportedAspectRatios", function() { expect(aVOutput.supportedAspectRatios).toBeDefined(); });
            it("current3DMode", function() { expect(aVOutput.current3DMode).toBeDefined(); });
            it("on3DModeChange", function() { expect(aVOutput.on3DModeChange).toBeDefined(); });
        });
    });
    describe("7.3.6 The NetworkInterfaceCollection class", function() {
        beforeEach(function() {
            localSystem = oipfConfiguration.localSystem;
            networkInterfaceCollection = localSystem.networkInterfaces;
        });
        it("NetworkInterfaceCollection", function() { expect(networkInterfaceCollection).toBeDefined(); });
    });
    describe("7.3.7 The AVOutputCollection class", function() {
        beforeEach(function() {
            localSystem = oipfConfiguration.localSystem;
            aVOutputCollection = localSystem.outputs;
        });
        it("AVOutputCollection", function() { expect(aVOutputCollection).toBeDefined(); });
    });
    describe("7.3.8 The TunerCollection class", function() {
        beforeEach(function() {
            localSystem = oipfConfiguration.localSystem;
            tunerCollection = localSystem.tuners;
        });
        it("TunerCollection", function() { expect(tunerCollection).toBeDefined(); });
    });
    describe("7.3.9 The Tuner class", function() {
        beforeEach(function() {
            localSystem = oipfConfiguration.localSystem;
            tunerCollection = localSystem.tuners;
            tuner = tunerCollection[0];
        });
        describe("7.3.9.1 Properties", function() {
            it("id", function() { expect(tuner.id).toBeDefined(); });
            it("name", function() { expect(tuner.name).toBeDefined(); });
            it("idTypes", function() { expect(tuner.idTypes).toBeDefined(); });
            it("enableTuner", function() { expect(tuner.enableTuner).toBeDefined(); });
            it("signalInfo", function() { expect(tuner.signalInfo).toBeDefined(); });
            it("lnbInfo", function() { expect(tuner.lnbInfo).toBeDefined(); });
            it("frontEndPosition", function() { expect(tuner.frontEndPosition).toBeDefined(); });
            it("powerOnExternal", function() { expect(tuner.powerOnExternal).toBeDefined(); });
        });
    });
    describe("7.3.10 The SignalInfo class", function() {
        beforeEach(function() {
            localSystem = oipfConfiguration.localSystem;
            tunerCollection = localSystem.tuners;
            tuner = tunerCollection[0];
            signalInfo = tuner.signalInfo;
        });
        describe("7.3.10.1 Properties", function() {
            it("strength", function() { expect(signalInfo.strength).toBeDefined(); });
            it("quality", function() { expect(signalInfo.quality).toBeDefined(); });
            it("ber", function() { expect(signalInfo.ber).toBeDefined(); });
            it("snr", function() { expect(signalInfo.snr).toBeDefined(); });
            it("lock", function() { expect(signalInfo.lock).toBeDefined(); });
        });
    });
    describe("7.3.11 The LNBInfo class", function() {
        beforeEach(function() {
            localSystem = oipfConfiguration.localSystem;
            tunerCollection = localSystem.tuners;
            tuner = tunerCollection[0];
            lnbInfo = tuner.lnbInfo;
        });
        describe("7.3.11.1 Constants", function() {
            it("DUAL_LO_FREQ_LNB", function() { expect(lnbInfo.DUAL_LO_FREQ_LNB).toBeDefined(); });
            it("SINGLE_LO_FREQ_LNB", function() { expect(lnbInfo.SINGLE_LO_FREQ_LNB).toBeDefined(); });
        });
        describe("7.3.11.2 Properties", function() {
            it("lnbType", function() { expect(lnbInfo.lnbType).toBeDefined(); });
            it("lnbLowFreq", function() { expect(lnbInfo.lnbLowFreq).toBeDefined(); });
            it("lnbHighFreq", function() { expect(lnbInfo.lnbHighFreq).toBeDefined(); });
            it("crossoverFrequency", function() { expect(lnbInfo.crossoverFrequency).toBeDefined(); });
            it("lnbStartFrequency", function() { expect(lnbInfo.lnbStartFrequency).toBeDefined(); });
            it("lnbStopFrequency", function() { expect(lnbInfo.lnbStopFrequency).toBeDefined(); });
            it("orbitalPosition", function() { expect(lnbInfo.orbitalPosition).toBeDefined(); });
        });
    });
    describe("7.3.12 The StartupInformation class", function() {
        beforeEach(function() {
            localSystem = oipfConfiguration.localSystem;
            startupInformation = localSystem.startupInformation;
        });
        describe("7.3.12.1 Properties", function() {
            it("urlSource", function() { expect(startupInformation.urlSource).toBeDefined(); });
            it("url", function() { expect(startupInformation.url).toBeDefined(); });
        });
    });
});
