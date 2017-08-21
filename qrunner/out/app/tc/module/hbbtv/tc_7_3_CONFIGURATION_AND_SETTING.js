var HUMAX_ON = 0;
var config = undefined;
var configuration = undefined;
var localSystem = undefined;
var networkInterfaces = undefined;
var outputs = undefined;
var tuners = undefined;
var signalInfo = undefined;
var startupInformation = undefined;
var lnbInfo = undefined;
var oipfobjectFactory = window.oipfObjectFactory;

if( oipfobjectFactory !== undefined )
{
    try {
    	if( HUMAX_ON == 1 )
    		{
    			config = oipfobjectFactory.createHumaxConfigurationObject();
    		}
    	else 
    		{
    			config = oipfobjectFactory.createConfigurationObject();
    		}
    } catch (e)
    {
        console.log(e);
    }
}

module("application/oipfConfiguration");
test("configuration", function() {
    try {
        ok((configuration = config.configuration) !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

if(HBBTV_ON==0){
	test("localSystem", function() {
	    try {
	        ok((localSystem = config.localSystem) !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	//function onIpAddressChange( NetworkInterface item, String ipAddress )
}


module("Configuration");
test("preferredAudioLanguage", function() {
    try {
        ok(configuration.preferredAudioLanguage !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("preferredSubtitleLanguage", function() {
    try {
        ok(configuration.preferredSubtitleLanguage !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("preferredUILanguage", function() {
    try {
        ok(configuration.preferredUILanguage !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("countryId", function() {
    try {
        ok(configuration.countryId !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

if(HBBTV_ON==0){
	test("regionId", function() {
	    try {
	        ok(configuration.regionId !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("pvrPolicy", function() {
	    try {
	        ok(configuration.pvrPolicy !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("pvrSaveEpisodes", function() {
	    try {
	        ok(configuration.pvrSaveEpisodes !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("pvrSaveDays", function() {
	    try {
	        ok(configuration.pvrSaveDays !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("pvrStartPadding", function() {
	    try {
	        ok(configuration.pvrStartPadding !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("pvrEndPadding", function() {
	    try {
	        ok(configuration.pvrEndPadding !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("preferredTimeShiftMode", function() {
	    try {
	        ok(configuration.preferredTimeShiftMode !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("getText()", function() {
	    try {
	        ok(configuration.preferredTimeShiftMode !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("setText()", function() {
	    try {
	        ok(configuration.preferredTimeShiftMode !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
}

if(HBBTV_ON==0){
	module("Localsystem");
	test("deviceID", function() {
	    try {
	        ok(localSystem.deviceID !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("systemReady", function() {
	    try {
	        ok(localSystem.systemReady !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("vendorName", function() {
	    try {
	        ok(localSystem.vendorName !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("modelName", function() {
	    try {
	        ok(localSystem.modelName !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("softwareVersion", function() {
	    try {
	        ok(localSystem.softwareVersion !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("hardwareVersion", function() {
	    try {
	        ok(localSystem.hardwareVersion !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("serialNumber", function() {
	    try {
	        ok(localSystem.serialNumber !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("releaseVersion", function() {
	    try {
	        ok(localSystem.releaseVersion !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("majorVersion", function() {
	    try {
	        ok(localSystem.majorVersion !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("minorVersion", function() {
	    try {
	        ok(localSystem.minorVersion !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("oipfProfile", function() {
	    try {
	        ok(localSystem.oipfProfile !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("pvrEnabled", function() {
	    try {
	        ok(localSystem.pvrEnabled !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("ciplusEnabled", function() {
	    try {
	        ok(localSystem.ciplusEnabled !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("standbyState", function() {
	    try {
	        ok(localSystem.standbyState !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("powerState", function() {
	    try {
	        ok(localSystem.powerState !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("previousPowerState", function() {
	    try {
	        ok(localSystem.previousPowerState !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("timeCurrentPowerState", function() {
	    try {
	        ok(localSystem.timeCurrentPowerState !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("onPowerStateChange", function() {
	    try {
	        ok(localSystem.onPowerStateChange !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("volume", function() {
	    try {
	        ok(localSystem.volume !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("mute", function() {
	    try {
	        ok(localSystem.mute !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("outputs", function() {
	    try {
	    	if( HUMAX_ON == 1 )
	    		{
	    			ok((outputs = localSystem.hmx_outputs) !== undefined, "is exists");
	    		}
	    	else
	    		{
	    			ok((outputs = localSystem.outputs) !== undefined, "is exists");
	    		}
	        
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("networkInterfaces", function() {
	    try {
	        ok((networkInterfaces = localSystem.networkInterfaces) !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("tuners", function() {
	    try {
	        ok((tuners = localSystem.tuners) !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("tvStandard", function() {
	    try {
	        ok(localSystem.tvStandard !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("pvrSupport", function() {
	    try {
	        ok(localSystem.pvrSupport !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("setScreenSize()", function() {
	    try {
	        ok(localSystem.setScreenSize !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("setTVStandard()", function() {
	    try {
	        ok(localSystem.setTVStandard !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("setPvrSupport()", function() {
	    try {
	        ok(localSystem.setPvrSupport !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("setPowerState()", function() {
	    try {
	        ok(localSystem.setPowerState !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("setDigestCredentials()", function() {
	    try {
	        ok(localSystem.setDigestCredentials !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("clearDigestCredentials()", function() {
	    try {
	        ok(localSystem.clearDigestCredentials !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	
	
	module("NetworkInterface");
	test("ipAddress", function() {
	    try {
	        ok(networkInterfaces[0].ipAddress !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("macAddress", function() {
	    try {
	        ok(networkInterfaces[0].macAddress !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("connected", function() {
	    try {
	        ok(networkInterfaces[0].connected !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("enabled", function() {
	    try {
	        ok(networkInterfaces[0].enabled !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	
	
	module("AVOutput");
	test("name", function() {
	    try {
	        ok(outputs[0].name !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("type", function() {
	    try {
	        ok(outputs[0].type !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("enabled", function() {
	    try {
	        ok(outputs[0].enabled !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("subtitleEnabled", function() {
	    try {
	        ok(outputs[0].subtitleEnabled !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("videoMode", function() {
	    try {
	        ok(outputs[0].videoMode !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("digitalAudioMode", function() {
	    try {
	        ok(outputs[0].digitalAudioMode !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("audioRange", function() {
	    try {
	        ok(outputs[0].audioRange !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("hdVideoFormat", function() {
	    try {
	        ok(outputs[0].hdVideoFormat !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("tvAspectRatio", function() {
	    try {
	        ok(outputs[0].tvAspectRatio !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("supportedVideoModes", function() {
	    try {
	        ok(outputs[0].supportedVideoModes !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("supportedDigitalAudioModes", function() {
	    try {
	        ok(outputs[0].supportedDigitalAudioModes !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("supportedAudioRanges", function() {
	    try {
	        ok(outputs[0].supportedAudioRanges !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("supportedHdVideoFormats", function() {
	    try {
	        ok(outputs[0].supportedHdVideoFormats !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("supportedAspectRatios", function() {
	    try {
	        ok(outputs[0].supportedAspectRatios !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	
	
	module("NetworkInterfaceCollection");
	test("networkInterfaceCollection", function() {
	    try {
	        ok(networkInterfaces !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	
	
	module("AVOutputCollection");
	test("AVOutputCollection", function() {
	    try {
	        ok(outputs !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	
	
	module("TunerCollection");
	test("tunerCollection", function() {
	    try {
	        ok(tuners !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	
	
	module("Tuner");
	test("id", function() {
	    try {
	        ok(tuners[0].id !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("name", function() {
	    try {
	        ok(tuners[0].name !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("idTypes", function() {
	    try {
	        ok(tuners[0].idTypes !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("enableTuner", function() {
	    try {
	        ok(tuners[0].enableTuner !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("signalInfo", function() {
	    try {
	        ok((signalInfo = tuners[0].signalInfo) !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("powerOnExternal", function() {
	    try {
	        ok(tuners[0].powerOnExternal !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	
	
	module("SignalInfo");
	test("strength", function() {
	    try {
	        ok(signalInfo.strength !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("quality", function() {
	    try {
	        ok(signalInfo.quality !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("ber", function() {
	    try {
	        ok(signalInfo.ber !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("snr", function() {
	    try {
	        ok(signalInfo[0].snr !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("lock", function() {
	    try {
	        ok(signalInfo[0].lock !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
}