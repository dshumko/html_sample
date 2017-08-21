describe('[SETTINGS] Network Interface', function() {
    "use strict";
    //***PreCondition:***<br /> Lan cable is connected
    var configuration, localSystem, networkManager, wifiConfig, networkDevList, wireDev, wirelessDev, apList;
    beforeEach(function () {
        configuration = oipfObjectFactory.createHumaxConfigurationObject();
        localSystem = configuration.localSystem;
        networkManager = localSystem.networkManager;
        wifiConfig = networkManager.getWifiConfig(1);
        networkDevList = localSystem.networkInterfaces;

        console.log('####### NetworkInfo ######## network device list length  : ' + networkDevList.length);
        jasmine.humax.each(networkDevList, function(netDev){
            if (netDev.networkType === jasmine.humax.net.type.LAN) {
                wireDev = netDev;
                displayNetworkInfo("'####### NetworkInfo ########  wireDev", wireDev);
            }
            if (netDev.networkType === jasmine.humax.net.type.WLAN) {
                wirelessDev = netDev;
                displayNetworkInfo("'####### NetworkInfo ########  wirelessDev", wirelessDev);
            }
        });
    });
    it('check api : humax configuration, local system object', function () {
        expect(configuration).toBeDefined();
        expect(localSystem).toBeDefined();
        expect(networkManager).toBeDefined();
        expect(wifiConfig).toBeDefined();
        expect(networkDevList).toBeDefined();
        expect(networkDevList.length).toBeGreaterThan(0);
        expect(wireDev).toBeDefined();
        expect(wirelessDev).toBeDefined();
    });

    //***Test Scenario:***
    //1.	Display Information of network device
    //2.	Try wire internet connect
    //3.	Check if network is connected successfully

    describe('wire connection', function() {
        var isConnectSuccess = false;
        beforeEach(function(done) {
            wireTryConnect()
                .then(function() {isConnectSuccess = true;},
                            function() {isConnectSuccess = false;})
                .always(done);
        }, 150 * 1000);
        it('wire connection check', function() {
            expect(isConnectSuccess).toBeTruthy();
        });
    }, 150 * 1000);

    xdescribe('wireless ap scanning', function() {
        var isApScanningSuccess = false;
        beforeEach(function (done) {
            apScan()
            .then(function () {isApScanningSuccess = true;},
                        function () {isApScanningSuccess = false;})
            .always(done);
        }, 30 * 1000);
        it('wireless ap scanning check', function () {
            expect(isApScanningSuccess).toBeTruthy();
        });
    }, 30 * 1000);

    describe('wireless WPS ap connection', function() {
        var isWirelessConnect = false;
        beforeEach(function (done) {
            apConnect()
            .then(function () { isWirelessConnect = true;},
                function () {isWirelessConnect = false;})
            .always(done);
        }, 130 * 1000);
        it('wireless ap connection check', function () {
            expect(isWirelessConnect).toBeTruthy();
        });
    }, 130 * 1000);

    function displayNetworkInfo(title, dev){
        console.log([
            title + 'networkType : ' + dev.networkType,
            title + 'ipAddress : ' + dev.ipAddress,
            title + 'netmask : ' + dev.netmask,
            title + 'gateway : ' + dev.gateway,
            title + 'dns1st : ' + dev.dns1st,
            title + 'dns2nd : ' + dev.dns2nd,
            title + 'macAddress : ' + dev.macAddress
        ].join('\n'));
    }

    function wireTryConnect() {
        var deferred = $.Deferred(), timeoutHandle;

        wireDev.onLinkStatusChanged = function(state) {
            var result = "";
            switch (state) {
                case jasmine.humax.net.state.CON_FAIL:
                    result = 'fail';
                    clearTimeout(timeoutHandle);
                    deferred.reject();
                    break;
                case jasmine.humax.net.state.CON_SUCCESS:
                    result = 'success';
                    clearTimeout(timeoutHandle);
                    deferred.resolve();
                    break;
                case jasmine.humax.net.state.CABLE_LINK_DISCON:
                    result = 'discon';
                    break;
                case jasmine.humax.net.state.CABLE_LINK_CON:
                    result = 'con';
                    break;
                default:
                    result = 'fail';
                    break;
            }
            console.log("WireDev - onLinkStatusChanged() - result : " + result);
        };

        /********** DHCP ***************/
        wireDev.dhcpOn = true;
        wireDev.dnsAuto = true;
        wireDev.applyConfigure();
        /*******************************/

        //*** Manual ***<br />
        //wireDev.dhcpOn = false; <br />
        //wireDev.dnsAuto = false; <br />
        //wireDev.ipAddress = wireDev.ipAddress; <br />
        //wireDev.netmask = wireDev.netmask; <br />
        //wireDev.gateway = wireDev.gateway; <br />
        //wireDev.dns1st = wireDev.dns1st; <br />
        //wireDev.dns2nd = wireDev.dns2nd; <br />
        //wireDev.applyConfigure(); <br />

        timeoutHandle = setTimeout(function() {
            deferred.reject();
            console.log('timeout...');
        }, 150 * 1000);

        return deferred;
    }

    function apScan() {
        var deferred = $.Deferred(),
            timeoutHandle;
        apList = [];
        wifiConfig.onAccessPointUpdated = function(state, ap) {
            switch (state) {
                case jasmine.humax.net.state.WIFI_SCAN_AP:
                    apList.push(ap);
                    displayApInfo(ap);
                    break;
                case jasmine.humax.net.state.WIFI_SCAN_SUCCESS:
                    console.log('ap scan success');
                    clearTimeout(timeoutHandle);
                    if (apList.length > 0) {
                        deferred.resolve();
                    } else {
                        deferred.reject();
                    }
                    break;
                case jasmine.humax.net.state.WIFI_SCAN_FAIL :
                    console.log('ap scan fail');
                    clearTimeout(timeoutHandle);
                    deferred.reject();
                    break;
                default:
                    console.log('wireless fail');
            }
        };

        wifiConfig.apScanning();
        /*wifiConfig.stopApScanning();*/

        timeoutHandle = setTimeout(function() {
            deferred.reject();
            console.log('timeout...');
        }, 30 * 1000);

        deferred.always(function(){
            wifiConfig.onAccessPointUpdated = null;
        });

        return deferred;
    }

    function displayApInfo(ap){
        console.log([
            'ap.waveStrength : ' + ap.waveStrength,
            'ap.secure : ' + ap.secure,
            'ap.authen : ' + ap.authen,
            'ap.encrypt : ' + ap.encrypt,
            'ap.isConnected : ' + ap.isConnected,
            'ap.essid : ' + ap.essid,
            'ap.macaddr : ' + ap.macaddr].join('\n'));
    }

    function apConnect() {
        var deferred = $.Deferred(),
            timeoutHandle;
        wifiConfig.onAccessPointUpdated = function (state, ap) {
            console.log('wifiConfig', 'wifiConfig.onAccessPointUpdated : ' + state);
            switch (state) {
                //case jasmine.humax.net.state.WIFI_CON_SUCCESS:
                //    wirelessDev.dhcpOn = true;
                //    wirelessDev.dnsAuto = true;
                //    wirelessDev.applyConfigure();
                //    break;
                case jasmine.humax.net.state.WIFI_CON_FAIL:
                    console.log('ap connect fail');
                    break;
                case jasmine.humax.net.state.WIFI_KEY_INVALID:
                    console.log('invalid');
                    break;
                case jasmine.humax.net.state.WIFI_WPS_SUCCESS:
                    //console.log('ap.essid: ' + ap.essid);
                    console.log('WPS Success');
                    deferred.resolve();
                    break;
                default:
                    console.log('wireless fail');
            }
        };
        /*
        wirelessDev.onLinkStatusChanged = function (state) {
            console.log('mWirelessDevStatus', 'mWirelessDev.onLinkStatusChanged : ' + state);
            switch (state) {
                case jasmine.humax.net.state.CON_SUCCESS:
                    clearTimeout(timeoutHandle);
                    deferred.resolve();
                    break;
                case jasmine.humax.net.state.CON_FAIL:
                    console.log('wireless connection fail');
                    clearTimeout(timeoutHandle);
                    deferred.resolve();
                    break;
                default:
                    console.log('wireless connection fail');
                    clearTimeout(timeoutHandle);
                    deferred.resolve();
                    break;
            }
        };

        if (apList[0].secure || apList[0].authen || apList[0].encrypt) {
            var password = "123456789";
            wifiConfig.applyConnectToAP(apList[0], password);
        } else {
            wifiConfig.applyConnectToAP(apList[0], " ");
        }
        */
        wifiConfig.applyConnectToAPbyWPS(1, "auto"); //0 : eNETAP_WPS_PIN, 1 : eNETAP_WPS_PBC,

        timeoutHandle = setTimeout(function () {
            deferred.reject();
            console.log('timeout...');
        }, 130 * 1000);

        deferred.always(function(){
            wifiConfig.onAccessPointUpdated = null;
            wirelessDev.onLinkStatusChanged = null;
        });

        return deferred;
    }
});
