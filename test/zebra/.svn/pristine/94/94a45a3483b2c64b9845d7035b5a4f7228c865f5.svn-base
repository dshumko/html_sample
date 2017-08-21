
describe("3.2	Configuration and Setting Extension APIs", function() {
  describe("3.2.1 HMasterConfiguration", function() {
    var oipfobjectFactory;
    var masterconfig;

    beforeEach(function() {
        oipfobjectFactory = window.oipfObjectFactory;
        masterconfig = oipfobjectFactory.createHumaxConfigurationObject();
    });

    describe("3.2.1.1 Properties",function(){
      it("configuration", function() { expect(masterconfig.configuration).toBeDefined(); });
      it("localSystem", function() { expect(masterconfig.localSystem).toBeDefined(); });
    });
  });

  describe("3.2.2 HConfiguration", function() {
    var oipfobjectFactory;
    var masterconfig;
    var config;

    beforeEach(function() {
        oipfobjectFactory = window.oipfObjectFactory;
        masterconfig = oipfobjectFactory.createHumaxConfigurationObject();
        config = masterconfig.configuration;
    });

    describe("3.2.2.1 Constants",function(){
      it("TYPE_SUBTITLE_FONT_FIXED", function(){ expect(config.TYPE_SUBTITLE_FONT_FIXED).toBeDefined();});
      it("TYPE_SUBTITLE_FONT_VARIABLE", function(){ expect(config.TYPE_SUBTITLE_FONT_VARIABLE).toBeDefined();});
      it("TYPE_DB_RESTORE_LAST", function(){ expect(config.TYPE_DB_RESTORE_LAST).toBeDefined();});
      it("TYPE_DB_RESTORE_FACTORY", function(){ expect(config.TYPE_DB_RESTORE_FACTORY).toBeDefined();});
      it("TYPE_STANDBY_NORMAL", function(){ expect(config.TYPE_STANDBY_NORMAL).toBeDefined();});
      it("TYPE_STANDBY_POWERSAVING", function(){ expect(config.TYPE_STANDBY_POWERSAVING).toBeDefined();});
      it("TYPE_STANDBY_WAKEUPONLAN", function(){ expect(config.TYPE_STANDBY_WAKEUPONLAN).toBeDefined();});
    });

    describe("3.2.2.2 Properties",function(){
      it("isPINEntryLocked", function() { expect(config.isPINEntryLocked).toBeDefined(); });
      it("operatorId", function() { expect(config.operatorId).toBeDefined(); });
      it("preferredMenuLanguage", function() { expect(config.preferredMenuLanguage).toBeDefined(); });
      it("standbyPowerMode", function() { expect(config.standbyPowerMode).toBeDefined(); });
      it("automaticStandby", function() { expect(config.automaticStandby).toBeDefined(); });
      it("autoDelete", function() { expect(config.autoDelete).toBeDefined(); });
      it("audioBleepEnabled", function() { expect(config.audioBleepEnabled).toBeDefined(); });
      it("subtitleFontType", function() { expect(config.subtitleFontType).toBeDefined(); });
      it("infoDisplayTimeout", function() { expect(config.infoDisplayTimeout).toBeDefined(); });
      it("timeShiftEnabled", function() { expect(config.timeShiftEnabled).toBeDefined(); });
      it("descrambleOnOff", function() { expect(config.descrambleOnOff).toBeDefined(); });
      it("skipForwardTime", function() { expect(config.skipForwardTime).toBeDefined(); });
      it("instantReplayTime", function() { expect(config.instantReplayTime).toBeDefined(); });
      it("firstTimeBoot", function() { expect(config.firstTimeBoot).toBeDefined(); });
      it("channelsetupPin", function() { expect(config.channelsetupPin).toBeDefined(); });
      it("guidancepolicy", function() { expect(config.guidancepolicy).toBeDefined(); });
      it("hdmiCecMode", function() { expect(config.hdmiCecMode).toBeDefined(); });
      it("targetStorage", function() { expect(config.targetStorage).toBeDefined(); });
      it("hbbTvEnbled", function() { expect(config.hbbTvEnbled).toBeDefined(); });
      it("batupdatemode", function() { expect(config.batupdatemode).toBeDefined(); });
      it("nitlcnupdatemode", function() { expect(config.nitlcnupdatemode).toBeDefined(); });
    });

    describe("3.2.2.3 Methods", function() {
        it("setParentalControlPINEnable", function() {expect(config.setParentalControlPINEnable).toBeDefined();    });
        it("getParentalControlPINEnable", function() {expect(config.getParentalControlPINEnable).toBeDefined();    });
        it("unlockWithParentalControlPIN", function() {expect(config.unlockWithParentalControlPIN).toBeDefined();    });
        it("verifyParentalControlPIN", function() {expect(config.verifyParentalControlPIN).toBeDefined();    });
        it("setBlockUnrated", function() {expect(config.setBlockUnrated).toBeDefined();    });
        it("getBlockUnrated", function() {expect(config.getBlockUnrated).toBeDefined();    });
        it("getField", function() {expect(config.getField).toBeDefined();    });
        it("setField", function() {expect(config.setField).toBeDefined();    });
        it("doFactoryDefault", function() {expect(config.doFactoryDefault).toBeDefined();    });
        it("doDBRestore", function() {expect(config.doDBRestore).toBeDefined();    });
        it("getCamNameBySlot", function() {expect(config.getCamNameBySlot).toBeDefined();    });
        it("setServerActivationTime ", function() {expect(config.setServerActivationTime).toBeDefined();    });
        it("getSatRecordConfirmCode  ", function() {expect(config.getSatRecordConfirmCode).toBeDefined();    });
    });
  });

  describe("3.2.3	HLocalSystem", function() {
    var localsystem=null;

    beforeEach(function() {
        try{
            localsystem = window.oipfObjectFactory.createHumaxConfigurationObject().localSystem;
            it("get HLocalSystem Object", function() { expect(localsystem).not.toBe(null); });
        }
        catch (err) {
            console.log(" Fail to get HLocalSystem object ");
            it("get HLocalSystem Object", function() {
              expect(window.oipfObjectFactory.createHumaxConfigurationObject()).not.toBe(null);
              expect(localsystem).not.toBe(null);
            });
        }
    });

    describe("3.2.3.1  Constants ", function() {
        it("OFF", function() { expect(localsystem.OFF).toBeDefined(); });
        it("ON", function() { expect(localsystem.ON).toBeDefined(); });
        it("PASSIVE_STANDBY", function() { expect(localsystem.PASSIVE_STANDBY).toBeDefined(); });
        it("ACTIVE_STANDBY", function() { expect(localsystem.ACTIVE_STANDBY).toBeDefined(); });
        it("PASSIVE_STANDBY_HIBERATE", function() { expect(localsystem.PASSIVE_STANDBY_HIBERATE).toBeDefined(); });
      });
    describe("3.2.3.2 Properties ", function() {
        it("updatedList", function() {
          expect(localsystem.updatedList).toBeDefined();
          expect(localsystem.updatedList).toEqual(jasmine.any(String));
        });
        it("standbyState", function() {
          expect(localsystem.standbyState).toBeDefined();
          expect(localsystem.standbyState).toEqual(jasmine.any(Boolean));
        });
        it("chipId", function() {
          expect(localsystem.chipId).toBeDefined();
          expect(localsystem.chipId).toEqual(jasmine.any(String));
        });
        it("chipId", function() {
          expect(localsystem.chipId).toBeDefined();
          expect(localsystem.chipId).toEqual(jasmine.any(String));
        });
        it("hcrdata", function() {
          expect(localsystem.hcrdata).toBeDefined();
          expect(localsystem.hcrdata).toEqual(jasmine.any(String));
        });
        it("checkHcrData", function() {
          expect(localsystem.checkHcrData).toBeDefined();
          expect(localsystem.checkHcrData).toEqual(jasmine.any(Boolean));
        });
        it("powerState", function() {
          expect(localsystem.powerState).toBeDefined();
          expect(localsystem.powerState).toEqual(jasmine.any(Number));
        });
        it("releaseVersion", function() {
          expect(localsystem.releaseVersion).toBeDefined();
          expect(localsystem.releaseVersion).toEqual(jasmine.any(Number));
        });
        it("majorVersion", function() {
          expect(localsystem.majorVersion).toBeDefined();
          expect(localsystem.majorVersion).toEqual(jasmine.any(Number));
        });
        it("minorVersion", function() {
          expect(localsystem.minorVersion).toBeDefined();
          expect(localsystem.minorVersion).toEqual(jasmine.any(Number));
        });
        it("previousPowerState", function() {
          expect(localsystem.previousPowerState).toBeDefined();
          expect(localsystem.previousPowerState).toEqual(jasmine.any(Number));
        });
        it("boxFirstBootStatus", function() {
          expect(localsystem.boxFirstBootStatus).toBeDefined();
          expect(localsystem.boxFirstBootStatus).toEqual(jasmine.any(Boolean));
        });
        it("boxAntennaPowerStatus", function() {
          expect(localsystem.boxAntennaPowerStatus).toBeDefined();
          expect(localsystem.boxAntennaPowerStatus).toEqual(jasmine.any(Boolean));
        });
        it("boxServiceUpdateFlag", function() {
          expect(localsystem.boxServiceUpdateFlag).toBeDefined();
          expect(localsystem.boxServiceUpdateFlag).toEqual(jasmine.any(Boolean));
        });
        it("microphoneVolume", function() {
          expect(localsystem.microphoneVolume).toBeDefined();
          expect(localsystem.microphoneVolume).toEqual(jasmine.any(Number));
        });
        it("microphoneEnabled", function() {
          expect(localsystem.microphoneEnabled).toBeDefined();
          expect(localsystem.microphoneEnabled).toEqual(jasmine.any(Boolean));
        });
        it("connectedMicrophone", function() {
          expect(localsystem.connectedMicrophone).toBeDefined();
          expect(localsystem.connectedMicrophone).toEqual(jasmine.any(Number));
        });
        it("isHbbTVActive", function() {
          expect(localsystem.isHbbTVActive).toBeDefined();
          expect(localsystem.isHbbTVActive).toEqual(jasmine.any(Number));
        });
        //for objects Properties
        it("tuners", function() {
          expect(localsystem.tuners).toBeDefined();
          expect(localsystem.tuners).toEqual(jasmine.any(Object));
        });
        it("hmx_outputs", function() {
          expect(localsystem.hmx_outputs).toBeDefined();
          expect(localsystem.hmx_outputs).toEqual(jasmine.any(Object));
        });
        it("hmx_audios", function() {
          expect(localsystem.hmx_audios).toBeDefined();
          expect(localsystem.hmx_audios).toEqual(jasmine.any(Object));
        });
        it("networkManager", function() {
          expect(localsystem.networkManager).toBeDefined();
          expect(localsystem.networkManager).toEqual(jasmine.any(Object));
        });
        it("networkInterfaces", function() {
          expect(localsystem.networkInterfaces).toBeDefined();
          expect(localsystem.networkInterfaces).toEqual(jasmine.any(Object));
        });
        it("frontPanel", function() {
          expect(localsystem.frontPanel).toBeDefined();
          expect(localsystem.frontPanel).toEqual(jasmine.any(Object));
        });
        it("swupdate", function() {
          expect(localsystem.swupdate).toBeDefined();
          expect(localsystem.swupdate).toEqual(jasmine.any(Object));
        });
        it("channelImportExport", function() {
          expect(localsystem.channelImportExport).toBeDefined();
          expect(localsystem.channelImportExport).toEqual(jasmine.any(Object));
        });

        it("coldBootDone", function() {
          expect(localsystem.coldBootDone).toBeDefined();
          expect(localsystem.coldBootDone).toEqual(jasmine.any(Object));
        });
        it("casactionIrEmmForcedOta", function() {
          expect(localsystem.casactionIrEmmForcedOta).toBeDefined();
          expect(localsystem.casactionIrEmmForcedOta).toEqual(jasmine.any(Object));
        });
        it("lcnupdate", function() {
          expect(localsystem.lcnupdate).toBeDefined();
          expect(localsystem.lcnupdate).toEqual(jasmine.any(Object));
        });
        it("clockRecovery", function() {
          expect(localsystem.clockRecovery).toBeDefined();
          expect(localsystem.clockRecovery).toEqual(jasmine.any(Object));
        });
        it("trdconflict", function() {
          expect(localsystem.trdconflict).toBeDefined();
          expect(localsystem.trdconflict).toEqual(jasmine.any(Object));
        });
        it("antennaInfoLists", function() {
          expect(localsystem.antennaInfoLists).toBeDefined();
          expect(localsystem.antennaInfoLists).toEqual(jasmine.any(Object));
        });
        // event Properties
        it("onPowerStateChange", function() {expect(localsystem.onPowerStateChange).toBeDefined();    });
        it("onUserActionIdle", function() {expect(localsystem.onUserActionIdle).toBeDefined();    });
        it("onKeyboardResult", function() {expect(localsystem.onKeyboardResult).toBeDefined();    });
        it("onCamStateChange", function() {expect(localsystem.onCamStateChange).toBeDefined();    });
        it("onSmartcardStateChanged", function() {expect(localsystem.onSmartcardStateChanged).toBeDefined();    });
        it("onAttachedMicrophone", function() {expect(localsystem.onAttachedMicrophone).toBeDefined();    });
        it("onDetachedMicrophone", function() {expect(localsystem.onDetachedMicrophone).toBeDefined();    });
        it("onUsbWirelessStateChanged", function() {expect(localsystem.onUsbWirelessStateChanged).toBeDefined();    });
    });

    // method Properties
    describe("3.2.3.3 Methods ", function() {
        it("setApplicationReady", function() {expect(localsystem.setApplicationReady).toBeDefined();    });
        it("showMsgbox", function() {expect(localsystem.showMsgbox).toBeDefined();    });
        it("showKeyboard", function() {expect(localsystem.showKeyboard).toBeDefined();    });
        it("getField", function() {expect(localsystem.getField).toBeDefined();    });
        it("setField", function() {expect(localsystem.setField).toBeDefined();    });
        it("checkFileExistence", function() {expect(localsystem.checkFileExistence).toBeDefined();    });
        it("startTVBrowser", function() {expect(localsystem.startTVBrowser).toBeDefined();    });
        it("getStatusOfTVBrowser", function() {expect(localsystem.getStatusOfTVBrowser ).toBeDefined();    });
    });

  });  // 3.2.3
  describe("3.2.4 HMX_Output", function() {
    var output = null;
    beforeEach(function() {
        try{
            var outputs = window.oipfObjectFactory.createHumaxConfigurationObject().localSystem.hmx_outputs;
            output = outputs[0];
            it("get HMX_Output Object", function() {expect(output).not.toBe(null); });
        }
        catch (err) {
            console.log(" Fail to get output object ");
        }

    });  // beforeEach

    describe("3.2.3.1  Properties ", function() {
      it("name", function() {expect(output.name).toBeDefined();});
      it("type", function() {expect(output.type).toBeDefined();});
      it("enabled", function() {expect(output.enabled).toBeDefined();});
      it("scartEnabled", function() {expect(output.scartEnabled).toBeDefined();});
      it("compositeEnabled", function() {expect(output.compositeEnabled).toBeDefined();});
      it("componentEnabled", function() {expect(output.componentEnabled).toBeDefined();});
      it("rfEnabled", function() {expect(output.rfEnabled).toBeDefined();});
      it("compositeEnabled", function() {expect(output.compositeEnabled).toBeDefined();});
      it("hdmiEnabled", function() {expect(output.hdmiEnabled).toBeDefined();});
      it("spdifEnabled", function() {expect(output.spdifEnabled).toBeDefined();});
      it("tvscartEnabled", function() {expect(output.tvscartEnabled).toBeDefined();});
      it("tvscartFormat", function() {expect(output.tvscartFormat).toBeDefined();});
      it("supportedTvScartFormats", function() {expect(output.supportedTvScartFormats).toBeDefined();});
      it("vcrscartEnabled", function() {expect(output.vcrscartEnabled).toBeDefined();});
      it("vcrscartFormat", function() {expect(output.vcrscartFormat).toBeDefined();});
      it("supportedTvScartFormats", function() {expect(output.supportedTvScartFormats).toBeDefined();});
      it("supportedVcrScartFormats", function() {expect(output.supportedVcrScartFormats).toBeDefined();});
      it("videoStandard", function() {expect(output.videoStandard).toBeDefined();});
      it("avAdditionalSignal", function() {expect(output.avAdditionalSignal).toBeDefined();});
      it("tvAspectRatio", function() {expect(output.tvAspectRatio).toBeDefined();});
      it("wss2hdmiMode", function() {expect(output.wss2hdmiMode).toBeDefined();});
      it("videoDisplayFormat", function() {expect(output.videoDisplayFormat).toBeDefined();});
      it("curResolution", function() {expect(output.curResolution).toBeDefined();});
      it("supportedResolutions", function() {expect(output.supportedResolutions).toBeDefined();});
      it("audioDescriptionEnabled", function() {expect(output.audioDescriptionEnabled).toBeDefined();});
      it("subtitleEnabled", function() {expect(output.subtitleEnabled).toBeDefined();});
      it("hardOfHearingEnabled", function() {expect(output.hardOfHearingEnabled).toBeDefined();});
    });

  }); //3.2.4.	HMX_Output

  describe("3.2.5	HMX_Audio", function() {
    var audio=null;
    beforeEach(function() {
        try{
            audios = window.oipfObjectFactory.createHumaxConfigurationObject().localSystem.hmx_audios;
            audio = audios[0];
            it("get HMX_Audio Object", function() { expect(audio).not.toBe(null); });
        }
        catch (err) {
            console.log(" Fail to get HMX_Audio object ");
        }

    });  // beforeEach

    describe("3.2.5.1  Properties ", function() {
      it("name", function() {expect(audio.name).toBeDefined();});
      it("type", function() {expect(audio.type).toBeDefined();});
      it("enabled", function() {expect(audio.enabled).toBeDefined();});
      it("maxVolume", function() {expect(audio.maxVolume).toBeDefined();});
      it("minVolume", function() {expect(audio.minVolume).toBeDefined();});
      it("lipSyncDelay", function() {expect(audio.lipSyncDelay).toBeDefined();});
      it("soundMode", function() {expect(audio.soundMode).toBeDefined();});
      it("transcodingEnabled", function() {expect(audio.transcodingEnabled).toBeDefined();});
      it("modeDigitalAudioOutput", function() {expect(audio.modeDigitalAudioOutput).toBeDefined();});
      it("codecDigitalAudioOutput", function() {expect(audio.codecDigitalAudioOutput).toBeDefined();});
      it("modeTranscoding", function() {expect(audio.modeTranscoding).toBeDefined();});
      /*it("supportedSoundModes", function() {expect(audio.supportedSoundModes).toBeDefined();});  // die
      it("supportedDigitalAudioOutputCodecs", function() {expect(audio.supportedDigitalAudioOutputCodecs).toBeDefined();});
      it("supportedDigitalAudioOutputModes", function() {expect(audio.supportedDigitalAudioOutputModes).toBeDefined();});
      it("supportedTranscodingModes", function() {expect(audio.supportedTranscodingModes).toBeDefined();});*/
    });

  }); //3.2.5.	HMX_Audio
  describe("3.2.6 HNetworkInterface ", function() {
    var network=null;
    beforeEach(function() {
        try{
            var networks = window.oipfObjectFactory.createHumaxConfigurationObject().localSystem.networkInterfaces;
            network =networks[0];
            it("get HNetworkInterface Object", function() { expect(network).not.toBe(null); });
        }
        catch (err) {
            console.log(" Fail to get HNetworkInterface object ");
        }
    });  // beforeEach

    describe("3.2.6.1  Properties ", function() {
      it("ipAddress", function() {expect(network.ipAddress).toBeDefined();});
      it("macAddress", function() {expect(network.macAddress).toBeDefined();});
      it("connected", function() {expect(network.connected).toBeDefined();});
      it("enabled", function() {expect(network.enabled).toBeDefined();});
      it("netmask", function() {expect(network.netmask).toBeDefined();});
      it("gateway", function() {expect(network.gateway).toBeDefined();});
      it("dns1st", function() {expect(network.dns1st).toBeDefined();});
      it("dns2nd", function() {expect(network.dns2nd).toBeDefined();});
      it("networkType ", function() {expect(network.networkType ).toBeDefined();});
      it("dhcpOn", function() {expect(network.dhcpOn).toBeDefined();});
      it("dnsAuto", function() {expect(network.dnsAuto).toBeDefined();});
      it("ipv6Address", function() {expect(network.ipv6Address).toBeDefined();});
      it("ipv6Prefix", function() {expect(network.ipv6Prefix).toBeDefined();});
      it("ipv6Gateway", function() {expect(network.ipv6Gateway).toBeDefined();});
      it("ipv6dns1st", function() {expect(network.ipv6dns1st).toBeDefined();});
      it("ipv6dns2nd", function() {expect(network.ipv6dns2nd).toBeDefined();});
      it("ipv6dhcpOn", function() {expect(network.ipv6dhcpOn).toBeDefined();});
      it("ipv6dnsAuto", function() {expect(network.ipv6dnsAuto).toBeDefined();});
      it("onLinkStatusChanged", function() {expect(network.onLinkStatusChanged).toBeDefined();});
      it("onAccessStatusUpdated", function() {expect(network.onAccessStatusUpdated).toBeDefined();});
    });
    describe("3.2.6.2 Methods ", function() {
      it("applyConfigure", function() {expect(network.applyConfigure).toBeDefined();});
      it("stopConnecting", function() {expect(network.stopConnecting).toBeDefined();});
      it("checkGatewayAccess", function() {expect(network.checkGatewayAccess).toBeDefined();});
      it("checkDnsAccess", function() {expect(network.checkDnsAccess).toBeDefined();});
    });
  }); //3.2.6.	HNetworkInterface
  describe("3.2.7 HMX_NetworkManager", function() {
    var network=null;
    beforeEach(function() {
        try{
            var localsystem = window.oipfObjectFactory.createHumaxConfigurationObject().localSystem;
            network = localsystem.networkManager;
            it("get HMX_NetworkManager Object", function() { expect(network).not.toBe(null); });
        }
        catch (err) {
            console.log(" Fail to get HMX_NetworkManager object ");
        }

    });  // beforeEach

    describe("3.2.7.1  Properties ", function() {
      it("applyConfigure", function() {expect(network.applyConfigure).toBeDefined();});
      it("defaultDevIndex", function() {expect(network.defaultDevIndex).toBeDefined();});
      it("linkStatus", function() {expect(network.linkStatus).toBeDefined();});
      // event Properties
      it("onNetworkStatusChanged", function() {expect(network.applyConfigure).toBeDefined();});
    });
    describe("3.2.7.2  Methods ", function() {
      it("getWifiConfig", function() {expect(network.getWifiConfig).toBeDefined();});
      it("getDMSConfig", function() {expect(network.getDMSConfig).toBeDefined();});
      it("getFTPConfig", function() {expect(network.getFTPConfig).toBeDefined();});
      it("getPPPoEConfig", function() {expect(network.getPPPoEConfig).toBeDefined();});
    });

  }); //3.2.7.	HMX_NetworkManager
  function getDevindex(type)
  {

    try {
      var n = window.oipfObjectFactory.createHumaxConfigurationObject().localSystem.networkInterfaces;

      for(i=0; i < n.length; i++)			{
        if(n[i].networkType == type)   {
              return i;       }
      }
      return -1;
    }
    catch(err) 		 {
      colsole.log("local system get field error ");
    }
  }
  describe("3.2.8 HMX_NetworkWiFiConfig ", function() {
    var wifi=null;
    beforeEach(function() {
        try{
            var network = window.oipfObjectFactory.createHumaxConfigurationObject().localSystem.networkManager;
            var index = getDevindex(1);
            wifi = network.getWifiConfig(index);
            it("get HMX_NetworkWiFiConfig Object", function() { expect(wifi).not.toBe(null); });
        }
        catch (err) {
            console.log(" Fail to get HMX_NetworkWiFiConfig object ");
        }

    });  // beforeEach

    describe("3.2.8.1  Properties ", function() {
      it("onAccessPointUpdated", function() {expect(wifi.onAccessPointUpdated).toBeDefined();});
    });

    describe("3.2.8.2  Methods ", function() {
      it("isConnectedAP", function() {expect(wifi.isConnectedAP).toBeDefined();});
      it("apScanning", function() {expect(wifi.apScanning).toBeDefined();});
      it("stopApScanning", function() {expect(wifi.stopApScanning).toBeDefined();});
      it("setKey", function() {expect(wifi.setKey).toBeDefined();});
      it("applyConnectToAP", function() {expect(wifi.applyConnectToAP).toBeDefined();});
      it("applyConnectToAPbyWPS", function() {expect(wifi.applyConnectToAPbyWPS).toBeDefined();});
      it("getWaveStrength", function() {expect(wifi.getWaveStrength).toBeDefined();});
      it("getConnectedAPInfo", function() {expect(wifi.getConnectedAPInfo).toBeDefined();});
      it("getUserAP", function() {expect(wifi.getUserAP).toBeDefined();});
    });

  }); //3.2.8	HMX_NetworkWiFiConfig


  describe("3.2.9 HMX_NetworkDMSConfig", function() {
    var dms=null;
    beforeEach(function() {
        try{
          var network = window.oipfObjectFactory.createHumaxConfigurationObject().localSystem.networkManager;
          dms = network.getDMSConfig();
            it("get HMX_NetworkDMSConfig Object", function() { expect(dms).not.toBe(null); });
        }
        catch (err) {
            console.log(" Fail to get HMX_NetworkDMSConfig object ");
        }

    });  // beforeEach

    describe("3.2.9.1  Properties ", function() {
      it("actionStatus", function() {expect(dms.actionStatus).toBeDefined();});
    });
    describe("3.2.9.2  Methods ", function() {
      it("start", function() {expect(dms.start).toBeDefined();});
      it("stop", function() {expect(dms.stop).toBeDefined();});
    });

  }); //3.2.9.	HMX_NetworkDMSConfig
  describe("3.2.10 HMX_NetworkFTPConfig ", function() {
    var ftp=null;
    beforeEach(function() {
        try{
          var network = window.oipfObjectFactory.createHumaxConfigurationObject().localSystem.networkManager;
          ftp = network.getFTPConfig();
            it("get HMX_NetworkFTPConfig Object", function() { expect(ftp).not.toBe(null); });
        }
        catch (err) {
            console.log(" Fail to get HMX_NetworkFTPConfig object ");
        }

    });  // beforeEach

    describe("3.2.10.1  Properties ", function() {
      it("ftpStatus", function() {expect(ftp.ftpStatus).toBeDefined();});
    });
    describe("3.2.10.2  Methods ", function() {
      it("FTPServerOn", function() {expect(ftp.FTPServerOn).toBeDefined();});
      it("FTPServerOff", function() {expect(ftp.FTPServerOff).toBeDefined();});
    });


  }); //3.2.10.	HMX_NetworkFTPConfig

  describe("3.2.11 HMX_NetworkPPPoEConfig ", function() {
    var obj=null;
    beforeEach(function() {
        try{
          var network = window.oipfObjectFactory.createHumaxConfigurationObject().localSystem.networkManager;
          var index = getDevindex(2);
          obj = network.getPPPoEConfig(index);
            it("get HMX_NetworkPPPoEConfig Object", function() { expect(obj).not.toBe(null); });
        }
        catch (err) {
            console.log(" Fail to get HMX_NetworkPPPoEConfig object ");
        }

    });  // beforeEach

    describe("3.2.11.1  Properties ", function() {
      it("onPPPoEStatusChanged", function() {expect(obj.onPPPoEStatusChanged).toBeDefined();});
    });
    describe("3.2.11.2  Methods ", function() {
      it("getOn", function() {expect(obj.getOn).toBeDefined();});
      it("getID", function() {expect(obj.getID).toBeDefined();});
      it("getPassword", function() {expect(obj.getPassword).toBeDefined();});
      it("setOn", function() {expect(obj.setOn).toBeDefined();});
      it("setID", function() {expect(obj.setID).toBeDefined();});
      it("setPassword", function() {expect(obj.setPassword).toBeDefined();});
      it("connect", function() {expect(obj.connect).toBeDefined();});
      it("disconnect", function() {expect(obj.disconnect).toBeDefined();});
    });

  }); //3.2.11.	HMX_NetworkPPPoEConfig
  describe("3.2.12	HMX_NetworkAccessPoint", function() {
    var obj=null;
    beforeEach(function() {
        try{
          var network = window.oipfObjectFactory.createHumaxConfigurationObject().localSystem.networkManager;
          var index = getDevindex(1);
          var network = network.getWifiConfig(index);
          obj = network.getUserAP();
            it("get HMX_NetworkAccessPoint Object", function() { expect(obj).not.toBe(null); });
        }
        catch (err) {
            console.log(" Fail to get HMX_NetworkAccessPoint object ");
        }

    });  // beforeEach

    describe("3.2.12.1  Properties ", function() {
      it("essid", function() {expect(obj.essid).toBeDefined();});
      it("secure", function() {expect(obj.secure).toBeDefined();});
      it("authen", function() {expect(obj.authen).toBeDefined();});
      it("encrypt", function() {expect(obj.encrypt).toBeDefined();});
      it("macaddr", function() {expect(obj.macaddr).toBeDefined();});
      it("waveStrength", function() {expect(obj.waveStrength).toBeDefined();});
      it("connectSpeed", function() {expect(obj.connectSpeed).toBeDefined();});
      it("isConnected", function() {expect(obj.isConnected).toBeDefined();});
    });

  }); //3.2.12.	HMX_NetworkAccessPoint

  describe("3.2.13 HFrontPanel  ", function() {
    var obj=null;
    beforeEach(function() {
        try{
            var localsystem = window.oipfObjectFactory.createHumaxConfigurationObject().localSystem;
            obj = localsystem.frontPanel;
            it("get HFrontPanel Object", function() { expect(obj).not.toBe(null); });
        }
        catch (err) {
            console.log(" Fail to get HFrontPanel object ");
        }

    });  // beforeEach

    describe("3.2.13.1  Methods ", function() {
      it("setString ", function() {expect(obj.setString ).toBeDefined();});
      it("setLed  ", function() {expect(obj.setLed  ).toBeDefined();});
      it("setAnimation  ", function() {expect(obj.setAnimation  ).toBeDefined();});
      it("setCurrentMediaInform  ", function() {expect(obj.setCurrentMediaInform  ).toBeDefined();});
    });

  }); //3.2.13.	HFrontPanel
  describe("3.2.14 	HSoftwareUpdate ", function() {
    var obj=null;
    beforeEach(function() {
        try{
            var localsystem = window.oipfObjectFactory.createHumaxConfigurationObject().localSystem;
            obj = localsystem.swupdate;
            it("get HSoftwareUpdate Object", function() { expect(obj).not.toBe(null); });
        }
        catch (err) {
            console.log(" Fail to get HSoftwareUpdate object ");
        }

    });  // beforeEach

    describe("3.2.14.1  Properties ", function() {
      it("Frequency  ", function() {expect(obj.Frequency  ).toBeDefined();});
      it("SymbolRate  ", function() {expect(obj.SymbolRate  ).toBeDefined();});
      it("Polarization  ", function() {expect(obj.Polarization  ).toBeDefined();});
      it("TransSpec  ", function() {expect(obj.TransSpec  ).toBeDefined();});
      it("PskMod  ", function() {expect(obj.PskMod  ).toBeDefined();});
      it("FecCodeRate  ", function() {expect(obj.FecCodeRate  ).toBeDefined();});
      it("verBootupHumaxOta  ", function() {expect(obj.verBootupHumaxOta  ).toBeDefined();});
      // event Properties
      it("onUpdateEvent  ", function() {expect(obj.onUpdateEvent  ).toBeDefined();});
      it("onDetectEvent  ", function() {expect(obj.onDetectEvent  ).toBeDefined();});
    });
    describe("3.2.14.2  Methods ", function() {
      it("startDetect  ", function() {expect(obj.startDetect  ).toBeDefined();});
      it("cancelDetect  ", function() {expect(obj.cancelDetect  ).toBeDefined();});
      it("cancelDownload  ", function() {expect(obj.cancelDownload  ).toBeDefined();});
      it("startInstall  ", function() {expect(obj.startInstall  ).toBeDefined();});
      it("cancelInstall  ", function() {expect(obj.cancelInstall  ).toBeDefined();});
      it("restartSystem  ", function() {expect(obj.restartSystem  ).toBeDefined();});
      it("swupdateInit  ", function() {expect(obj.swupdateInit  ).toBeDefined();});
      it("startDetectWithType  ", function() {expect(obj.startDetectWithType  ).toBeDefined();});
      it("startUpdate  ", function() {expect(obj.startUpdate  ).toBeDefined();});
      it("cancelUpdate  ", function() {expect(obj.cancelUpdate  ).toBeDefined();});
      it("startManualDetect  ", function() {expect(obj.startManualDetect  ).toBeDefined();});
      it("cancelManualDetect  ", function() {expect(obj.cancelManualDetect  ).toBeDefined();});
      it("startSwupdateState  ", function() {expect(obj.startSwupdateState  ).toBeDefined();});
    });

  }); //3.2.14.	HSoftwareUpdate

  describe("3.2.15 CSwUpdateInfo", function() {
    var cswupdateinfo=null;
    beforeEach(function() {
        try{
            it("get CSwUpdateInfo Object", function() { expect(cswupdateinfo).not.toBe(null); });
        }
        catch (err) {
            console.log(" Fail to get CSwUpdateInfo object ");
        }
    });  // beforeEach

    describe("3.2.15.1  Methods ", function() {
      it("getInfo", function(){expect(cswupdateinfo.getInfo).toBeDefined();});
    });
  }); //3.2.15 CSwUpdateInfo
  describe("3.2.16 HChannelImportExport ", function() {
    var channelimportexport=null;
    beforeEach(function() {
        try{
            var localsystem = window.oipfObjectFactory.createHumaxConfigurationObject().localSystem;
            channelimportexport = localsystem.channelImportExport;
            it("get HChannelImportExport Object", function() { expect(channelimportexport).not.toBe(null); });
        }
        catch (err) {
            console.log(" Fail to get HChannelImportExport object ");
        }
    });  // beforeEach

    describe("3.2.16.1  Properties ", function() {
      it("onChannelImportExport", function(){expect(channelimportexport.onChannelImportExport).toBeDefined();});
    });

    describe("3.2.16.2  Methods ", function() {
      it("startChannelExport", function(){expect(channelimportexport.startChannelExport).toBeDefined();});
      it("startChannelImport", function(){expect(channelimportexport.startChannelImport).toBeDefined();});
    });
  }); //3.2.16 HChannelImportExport
  describe("3.2.17 HColdBootDone ", function() {
    var coldbootdone=null;
    beforeEach(function() {
        try{
            var localsystem = window.oipfObjectFactory.createHumaxConfigurationObject().localSystem;
            coldbootdone = localsystem.coldBootDone;
            it("get HColdBootDone Object", function() { expect(coldbootdone).not.toBe(null); });
        }
        catch (err) {
            console.log(" Fail to get HColdBootDone object ");
        }
    });  // beforeEach

    describe("3.2.17.1  Properties ", function() {
      it("onColdBootDone", function(){expect(coldbootdone.onColdBootDone).toBeDefined();});
    });

    describe("3.2.17.2  Methods ", function() {
      it("getColdBootDone", function(){expect(coldbootdone.getColdBootDone).toBeDefined();});
      it("releaseColdBootDoneListener", function(){expect(coldbootdone.releaseColdBootDoneListener).toBeDefined();});
    });
  }); //3.2.17 HColdBootDone
  describe("3.2.18 HCasActionIrEmmForcedOta", function() {
    var casactioniremmforcedota=null;
    beforeEach(function() {
        try{
            var localsystem = window.oipfObjectFactory.createHumaxConfigurationObject().localSystem;
            casactioniremmforcedota = localsystem.casactionIrEmmForcedOta;
            it("get HCasActionIrEmmForcedOta Object", function() { expect(casactioniremmforcedota).not.toBe(null); });
        }
        catch (err) {
            console.log(" Fail to get HCasActionIrEmmForcedOta object ");
        }
    });  // beforeEach

    describe("3.2.18.1  Properties ", function() {
      it("onCasActionIrEmmForcedOta", function(){expect(casactioniremmforcedota.onCasActionIrEmmForcedOta).toBeDefined();});
    });

    describe("3.2.18.2  Methods ", function() {
      it("setListener", function(){expect(casactioniremmforcedota.setListener).toBeDefined();});
      it("releaseListener", function(){expect(casactioniremmforcedota.releaseListener).toBeDefined();});
    });
  }); //3.2.18 HCasActionIrEmmForcedOta
  describe("3.2.19 HLcnUpdate ", function() {
    var lcnupdate=null;
    beforeEach(function() {
        try{
            var localsystem = window.oipfObjectFactory.createHumaxConfigurationObject().localSystem;
            lcnupdate = localsystem.lcnupdate;
            it("get HLcnUpdate Object", function() { expect(lcnupdate).not.toBe(null); });
        }
        catch (err) {
            console.log(" Fail to get HLcnUpdate object ");
        }
    });  // beforeEach

    describe("3.2.19.1  Properties ", function() {
      it("onLcnUpdate", function(){expect(lcnupdate.onLcnUpdate).toBeDefined();});
    });

    describe("3.2.19.2  Methods ", function() {
      it("startLcnUpdate", function(){expect(lcnupdate.startLcnUpdate).toBeDefined();});
      it("stopLcnUpdate", function(){expect(lcnupdate.stopLcnUpdate).toBeDefined();});
      it("saveLcnUpdate", function(){expect(lcnupdate.saveLcnUpdate).toBeDefined();});
      it("getLcnUpdateInfo", function(){expect(lcnupdate.getLcnUpdateInfo).toBeDefined();});
      it("removeLcnUpdateInfo", function(){expect(lcnupdate.removeLcnUpdateInfo).toBeDefined();});
    });
  }); //3.2.19 HLcnUpdate
  describe("3.2.20	CLcnUpdateSvcList", function() {
    var clcnupdatesvclist=null;
    beforeEach(function() {
        try{
            it("get CLcnUpdateSvcList Object", function() { expect(clcnupdatesvclist).not.toBe(null); });
        }
        catch (err) {
            console.log(" Fail to get CLcnUpdateSvcList object ");
        }
    });  // beforeEach

    describe("3.2.20.1  Properties ", function() {
      it("length", function(){expect(clcnupdatesvclist.length).toBeDefined();});
    });

    describe("3.2.20.2  Methods ", function() {
      it("getInfo", function(){expect(clcnupdatesvclist.getInfo).toBeDefined();});
    });
  }); //3.2.20	CLcnUpdateSvcList
  describe("3.2.21 CLcnUpdateSvc ", function() {
    var clcnupdatesvc=null;
    beforeEach(function() {
        try{
            it("get CLcnUpdateSvc Object", function() { expect(clcnupdatesvc).not.toBe(null); });
        }
        catch (err) {
            console.log(" Fail to get CLcnUpdateSvc object ");
        }
    });  // beforeEach

    describe("3.2.21.1  Properties ", function() {
      it("length", function(){expect(clcnupdatesvc.length).toBeDefined();});
    });

    describe("3.2.21.2  Methods ", function() {
      it("getInfo", function(){expect(clcnupdatesvc.getInfo).toBeDefined();});
    });
  }); //3.2.21 CLcnUpdateSvc
  describe("3.2.22	HClockRecovery ", function() {
    var clockrecovery=null;
    beforeEach(function() {
        try{
            var localsystem = window.oipfObjectFactory.createHumaxConfigurationObject().localSystem;
            clockrecovery = localsystem.clockRecovery;
            it("get HClockRecovery Object", function() { expect(clockrecovery).not.toBe(null); });
        }
        catch (err) {
            console.log(" Fail to get HClockRecovery object ");
        }
    });  // beforeEach

    describe("3.2.22.1  Properties ", function() {
      it("onClockRecovery", function(){expect(clockrecovery.onClockRecovery).toBeDefined();});
    });

    describe("3.2.22.2  Methods ", function() {
      it("startClockRecovery", function(){expect(clockrecovery.startClockRecovery).toBeDefined();});
    });
  }); //3.2.22	HClockRecovery
  describe("3.2.23 HTrdConflict ", function() {
    var outputs=null;
    beforeEach(function() {
        try{
            var trdconflict = window.oipfObjectFactory.createHumaxConfigurationObject().localSystem;
            trdconflict = localsystem.trdconflict;
            it("get HTrdConflict Object", function() { expect(trdconflict).not.toBe(null); });
        }
        catch (err) {
            console.log(" Fail to get HTrdConflict object ");
        }
    });  // beforeEach

    describe("3.2.23.1  Properties ", function() {
      it("onTrdConflict", function(){expect(trdconflict.onTrdConflict).toBeDefined();});
    });

    describe("3.2.23.2  Methods ", function() {
      it("setTrdConflict", function(){expect(trdconflict.setTrdConflict).toBeDefined();});
      it("getTrdConflict", function(){expect(trdconflict.getTrdConflict).toBeDefined();});
    });
  }); //3.2.23 HTrdConflict
  describe("3.2.24 AntennaInfoCollection ", function() {
    var antennainfolists=null;
    beforeEach(function() {
        try{
            var localsystem = window.oipfObjectFactory.createHumaxConfigurationObject().localSystem;
            antennainfolists = localsystem.antennaInfoLists;
            it("get AntennaInfoCollection Object", function() { expect(antennainfolists).not.toBe(null); });
        }
        catch (err) {
            console.log(" Fail to get AntennaInfoCollection object ");
        }
    });  // beforeEach

    describe("3.2.24.1  Constants ", function() {
      it("UNDEFINED", function(){expect(antennainfolists.UNDEFINED).toBeDefined();});
      it("EAST", function(){ expect(antennainfolists.EAST).toBeDefined();});
      it("WEST", function(){ expect(antennainfolists.WEST).toBeDefined();});
      it("STEP", function(){ expect(antennainfolists.STEP).toBeDefined();});
      it("TIMEOUT", function(){ expect(antennainfolists.TIMEOUT).toBeDefined();});
      it("CONTINUOUS", function(){ expect(antennainfolists.CONTINUOUS).toBeDefined();});
    });

    describe("3.2.24.2  Methods ", function() {
      it("commit", function(){expect(antennainfolists.commit).toBeDefined();});
      it("refresh", function(){ expect(antennainfolists.refresh).toBeDefined();});
      it("createAntennaInfo", function(){ expect(antennainfolists.createAntennaInfo).toBeDefined();});
      it("getAntennaInfo", function(){ expect(antennainfolists.getAntennaInfo).toBeDefined();});
      it("removeAll", function(){ expect(antennainfolists.removeAll).toBeDefined();});
      it("getConnectionType", function(){ expect(antennainfolists.getConnectionType).toBeDefined();});
      it("setConnectionType", function(){expect(antennainfolists.setConnectionType).toBeDefined();});
      it("gotoPosition", function(){ expect(antennainfolists.gotoPosition).toBeDefined();});
      it("storePosition", function(){ expect(antennainfolists.storePosition).toBeDefined();});
      it("recalculate", function(){ expect(antennainfolists.recalculate).toBeDefined();});
      it("stop", function(){ expect(antennainfolists.stop).toBeDefined();});
      it("setLimit", function(){ expect(antennainfolists.setLimit).toBeDefined();});
      it("enableLimit", function(){ expect(antennainfolists.enableLimit).toBeDefined();});
      it("disableLimit", function(){ expect(antennainfolists.disableLimit).toBeDefined();});
      it("gotoDegree", function(){ expect(antennainfolists.gotoDegree).toBeDefined();});
      it("gotoSatellite", function(){ expect(antennainfolists.gotoSatellite).toBeDefined();});
      it("drive", function(){ expect(antennainfolists.drive).toBeDefined();});
      it("getMyLatitude", function(){ expect(antennainfolists.getMyLatitude).toBeDefined();});
      it("getMyLongitude", function(){ expect(antennainfolists.getMyLongitude).toBeDefined();});
      it("setMyLatitude", function(){ expect(antennainfolists.setMyLatitude).toBeDefined();});
      it("setMyLongitude", function(){ expect(antennainfolists.setMyLongitude).toBeDefined();});
    });

  }); //3.2.24 AntennaInfoCollection
  describe("3.2.25	AntennaInfo ", function() {
    var antennainfo=null;
    beforeEach(function() {
        try{
            var localsystem = window.oipfObjectFactory.createHumaxConfigurationObject().localSystem;
            var antennainfolists = localsystem.antennaInfoLists;
            var antid = antennainfolists.createAntennaInfo();
            antennainfo = antennainfolists.getAntennaInfo(antid);
            it("get AntennaInfo Object", function() { expect(antennainfo).not.toBe(null); });
        }
        catch (err) {
            console.log(" Fail to get AntennaInfo object ");
        }
    });  // beforeEach

    describe("3.2.25.1  Constants ", function() {
      it("SATTYPE_LIST", function(){expect(antennainfo.SATTYPE_LIST).toBeDefined();});
      it("TYPE_LNB", function(){ expect(antennainfo.TYPE_LNB).toBeDefined();});
      it("TYPE_DISEQC", function(){ expect(antennainfo.TYPE_DISEQC).toBeDefined();});
      it("TYPE_SCD", function(){ expect(antennainfo.TYPE_SCD).toBeDefined();});
      it("TYPE_SMATV", function(){ expect(antennainfo.TYPE_SMATV).toBeDefined();});
      it("TYPE_MONOBLOCK", function(){ expect(antennainfo.TYPE_MONOBLOCK).toBeDefined();});
      it("LNBFREQ_UNIVERSAL", function(){ expect(antennainfo.LNBFREQ_UNIVERSAL).toBeDefined();});
      it("LNBVOLT_STD", function(){ expect(antennainfo.LNBVOLT_STD).toBeDefined();});
      it("LNBVOLT_HIGH", function(){ expect(antennainfo.LNBVOLT_HIGH).toBeDefined();});
      it("DISEQC_1_0", function(){ expect(antennainfo.DISEQC_1_0).toBeDefined();});
      it("DISEQC_1_1", function(){ expect(antennainfo.DISEQC_1_1).toBeDefined();});
      it("DISEQC_1_2", function(){ expect(antennainfo.DISEQC_1_2).toBeDefined();});
      it("DISEQC_1_3", function(){ expect(antennainfo.DISEQC_1_3).toBeDefined();});
      it("DISEQC_2_0", function(){ expect(antennainfo.DISEQC_2_0).toBeDefined();});
      it("SW_N", function(){ expect(antennainfo.SW_N).toBeDefined();});
      it("SW_A", function(){ expect(antennainfo.SW_A).toBeDefined();});
      it("SW_B", function(){ expect(antennainfo.SW_B).toBeDefined();});
      it("SW_C", function(){ expect(antennainfo.SW_C).toBeDefined();});
      it("SW_D", function(){ expect(antennainfo.SW_D).toBeDefined();});
      it("TONEBURST_A", function(){ expect(antennainfo.TONEBURST_A).toBeDefined();});
      it("TONEBURST_B", function(){ expect(antennainfo.TONEBURST_B).toBeDefined();});
    });

    describe("3.2.25.2  Properties ", function() {
      it("id", function(){expect(antennainfo.id).toBeDefined();});
      it("antennaType", function(){ expect(antennainfo.antennaType).toBeDefined();});
      it("satelliteType", function(){ expect(antennainfo.satelliteType).toBeDefined();});
      it("satelliteName", function(){ expect(antennainfo.satelliteName).toBeDefined();});
      it("lnbFrequency", function(){ expect(antennainfo.lnbFrequency).toBeDefined();});
      it("lnbVoltage", function(){ expect(antennainfo.lnbVoltage).toBeDefined();});
      it("diseqcVersion", function(){ expect(antennainfo.diseqcVersion).toBeDefined();});
      it("switchInput", function(){ expect(antennainfo.switchInput).toBeDefined();});
      it("enable22KHzTone", function(){ expect(antennainfo.enable22KHzTone).toBeDefined();});
      it("toneBurst", function(){ expect(antennainfo.toneBurst).toBeDefined();});
      it("position", function(){ expect(antennainfo.position).toBeDefined();});
      it("longitude", function(){ expect(antennainfo.longitude).toBeDefined();});
      it("scdBandNo0", function(){ expect(antennainfo.scdBandNo0).toBeDefined();});
      it("scdBandNo1", function(){ expect(antennainfo.scdBandNo1).toBeDefined();});
      it("scdBandNo2", function(){ expect(antennainfo.scdBandNo2).toBeDefined();});
      it("scdBandNo3", function(){ expect(antennainfo.scdBandNo3).toBeDefined();});
      it("scdBandFreq0", function(){ expect(antennainfo.scdBandFreq0).toBeDefined();});
      it("scdBandFreq1", function(){ expect(antennainfo.scdBandFreq1).toBeDefined();});
      it("scdBandFreq2", function(){ expect(antennainfo.scdBandFreq2).toBeDefined();});
      it("scdBandFreq3", function(){ expect(antennainfo.scdBandFreq3).toBeDefined();});
    });

    describe("3.2.25.3  Methods ", function() {
      it("commit", function(){expect(antennainfo.commit).toBeDefined();});
      it("refresh", function(){ expect(antennainfo.refresh).toBeDefined();});
    });
  }); //3.2.25	AntennaInfo
  describe("3.2.26 SignalInfo ", function() {
    var signalinfo=null;
    beforeEach(function() {
        try{
            var localsystem = window.oipfObjectFactory.createHumaxConfigurationObject().localSystem;
            var tuners = localsystem.tuners;
            signalinfo = tuners.item(0).signalInfo;
            it("get SignalInfo Object", function() { expect(signalinfo).not.toBe(null); });
        }
        catch (err) {
            console.log(" Fail to get SignalInfo object ");
        }
    });  // beforeEach

    describe("3.2.26.1  Properties ", function() {
      it("tuningParams", function(){ expect(signalinfo.tuningParams).toBeDefined();});
    });
  }); //3.2.26 SignalInfo

});
