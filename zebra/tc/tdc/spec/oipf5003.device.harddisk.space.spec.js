describe('[DEVICE] Harddisk Left For Recordings', function() {
    "use strict";
    //***PreCondition:***<br />  Internal HDD should be mounted
    var storageUtil, physicalStorages;
    beforeAll(function () {
        storageUtil = oipfObjectFactory.createHumaxStorageUtilObject();
    });

    it('check api : storageUtil', function () {
        expect(storageUtil).toBeDefined();
        expect(storageUtil).toHaveProperties([
            'getPhysicalStorages', 'supportedFormatTypes'
        ]);
    });

    //***Test Scenario: ***
    //1.	Find Internal HDD
    //2.	Display available PVR storage size
    //3.	Display total storage size

    describe('get disk size', function () {
        beforeEach(function () {
            physicalStorages = storageUtil.getPhysicalStorages();

        });
        it('get total size and available pvr size', function () {
            var availableSize = 0, totalSize = 0, storageCnt = 0;
            expect(physicalStorages.length).toBeGreaterThan(0);

            jasmine.humax.each(physicalStorages, function(pStorage){
                if ((pStorage.kind === jasmine.humax.storage.kind.HDD) && pStorage.ismount) {
                    if(pStorage.usage === jasmine.humax.storage.usage.PVR || pStorage.usage === jasmine.humax.storage.usage.subPVR){
                        availableSize += (parseInt(pStorage.availablePvrSize, 10) / (1024 * 1024));  //availablePvrSize is Killo Byte
                        totalSize += (parseInt(pStorage.totalSize, 10) / (1024 * 1024));  //totalSize is Killo Byte
                        storageCnt += 1;
                    }
                }
            });

            console.log([
                'availableSize for Pvr : ' + availableSize + 'GB',
                'totalSize : ' + totalSize + 'GB',
                'storageCnt for Pvr : ' + storageCnt].join('\n'));

            expect((totalSize > availableSize)).toBeTruthy();
            expect(storageCnt).toBeGreaterThan(0);
        });
    });
    //***Notes:*** <br />storage size API unit is on a Killo Byte basis
});