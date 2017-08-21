/* HUMAX RECORDINGS UTILS */
(function(jasmine) {
    "use strict";
    jasmine.humax = extend(jasmine.humax || {}, {
        storage: createStorageInstance()
    });

    function createStorageInstance(){
        var  kindOfStorage = {
                unknown:0,
                HDD:1,
                USB:2,
                SD:3
            },
            usageType = {
                unknown:0,
                PVR:1,
                subPVR:2,
                storage:3,
                needFormat:4
            },
            storageType = {
                unknown:0,
                internal:1,
                external:2
            },
            formatProgress = {
                none:0,
                onGoing:1,
                finished:2,
                error:3
            },
            state = {
                unknown : 0,
                needFormat : 1,
                formatting : 2,
                formatDone : 3,
                formatFail : 4,
                pairingDone : 5,
                unPairingDone : 6,
                pairingFail : 7,
                unPairingFail : 8,
                setNameFail : 9,
                disableHddFail : 10,
                safeRemoveFail : 11,
                checkDiskStarted : 12,
                checkUsbSpeedDone : 13,
                setNameDone : 14,
                unmountFail : 15,
                overCurrent : 16,
                overCurrentDone : 17,
                max : 18
            };
        return {
            kind:kindOfStorage,
            usage:usageType,
            type:storageType,
            formatProgress:formatProgress,
            state:state
        };
    }

    function extend(obj, data) {
        var n;
        for( n in data){
            if(data.hasOwnProperty(n)){
                obj[n] = data[n];
            }
        }
        return obj;
    }
}(jasmine));