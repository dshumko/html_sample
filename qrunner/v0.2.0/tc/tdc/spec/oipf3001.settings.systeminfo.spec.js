describe('[SETTINGS] System Information', function() {
    "use strict";

    var configuration, localSystem, networkDevList, networkManager;
    beforeEach(function () {
        configuration = oipfObjectFactory.createHumaxConfigurationObject();
        localSystem = configuration.localSystem;
        networkDevList = localSystem.networkInterfaces;
        networkManager = localSystem.networkManager;
    });
    it('check api : humax configuration, local system object', function () {
        expect(configuration).toBeDefined();
        expect(localSystem).toBeDefined();
    });

    //***Test Scenario:*** <br />
    //1.	Check if modelName, softwareVersion, loader_version, micom_version, system_id, update_date is defined

    it('system info check', function(){
        var wireDev = jasmine.humax.find(networkDevList, function(netDev){
            return (netDev.networkType === jasmine.humax.net.type.LAN);
        });
        var wirelessDevIndex = getWIFIDevindex();
        var wifiConfig = networkManager.getWifiConfig(wirelessDevIndex);

        console.log([
            'modelName : ' + localSystem.modelName,
            'packageVersion : ' + localSystem.packageVersion,
            'softwareVersion : ' + localSystem.softwareVersion,
            'loaderVersion : ' + localSystem.getField('loader_version'),
            'upgrader_version : ' + localSystem.getField("upgrader_version"),
            'QV940 version : ' + wifiConfig.FirmwareVersion,
            'system_id : ' + localSystem.getField('system_id'),
            'update_date : ' + localSystem.getField('update_date'),
            'serialNumber : ' + localSystem.serialNumber,
            'macAddress : ' + wireDev.macAddress,
            'viewright IPTV : ' + localSystem.getField("verimatrix_iptvhybridlib_version"),
            'viewright Web : ' + localSystem.getField("verimatrix_weblib_version"),
            'viewright Gateway : ' + localSystem.getField("verimatrix_gatewaylib_version"),
            'chipId : ' + localSystem.chipId].join('\n'));

        expect(localSystem.modelName).toBeDefined();
        expect(localSystem.packageVersion).toBeDefined();
        expect(localSystem.softwareVersion).toBeDefined();
        expect(localSystem.getField('loader_version')).toBeDefined();
        expect(localSystem.getField('upgrader_version')).toBeDefined();
        expect(wifiConfig.FirmwareVersion).toBeDefined();
        expect(localSystem.getField('system_id')).toBeDefined();
        expect(localSystem.getField('update_date')).toBeDefined();
        expect(localSystem.serialNumber).toBeDefined();
        expect(wireDev.macAddress).toBeDefined();
        expect(localSystem.getField("verimatrix_iptvhybridlib_version")).toBeDefined();
        expect(localSystem.getField("verimatrix_weblib_version")).toBeDefined();
        expect(localSystem.getField("verimatrix_gatewaylib_version")).toBeDefined();
        expect(localSystem.chipId).toBeDefined();
    });

    function getWIFIDevindex() {
        var i, length = networkDevList.length;
        for(i=0; i < length; i+=1) {
            if(networkDevList[i].networkType === 1) //wifi
            {
                return i;
            }
        }
    }
});
