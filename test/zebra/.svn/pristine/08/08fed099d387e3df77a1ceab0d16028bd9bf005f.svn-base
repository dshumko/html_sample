/* HUMAX RECORDINGS UTILS */
(function(jasmine){
    "use strict";
    jasmine.humax = extend(jasmine.humax||{}, {
        fileOp : createFileOpInstance(),
        pvr : createPVRInstance()
    });

    /** PRIMITIVE UTILITIES */
    function createFileOpInstance(){
        var fileOpStates = {
            doing:0,  // RECORDING_SCHEDULER_FILEOP_STATE_ING = 0,
            complete:1,  //RECORDING_SCHEDULER_FILEOP_STATE_COMPLETE = 1,
            error:2,  //RECORDING_SCHEDULER_FILEOP_STATE_ERROR = 2,
            unknown:3, //RECORDING_SCHEDULER_FILEOP_STATE_UNKNOWN = 3,
            stop:4,  //RECORDING_SCHEDULER_FILEOP_STATE_STOP = 4,
            notEnoughSpace:5,  //RECORDING_SCHEDULER_FILEOP_NOT_ENOUGH_SPACE = 5,
            sizeLimit4g:6  //RECORDING_SCHEDULER_FILEOP_STATE_SIZE_LIMIT_4G = 6,
        },
            fileOpStatesArray = toArray(fileOpStates);

        return {
            state : fileOpStates,
            print : printInfo /** function(state) */
        };

        /*File Operation - Implementation section*/
        function printInfo(state){
            console.log("FileOp  :state: "+ fileOpStatesArray[state] );
        }
    }

    function createPVRInstance(){
        //***API*** HUMAX EXTEND SPEC 2.4.2 PVR Event class
        var pvrStates = {
            RECORDING_UNREALIZED:0,
            RECORDING_SCHEDULED:1,
            RECORDING_DEL_SCHEDULED:2,
            RECORDING_REC_PRESTART:3,
            RECORDING_REC_ACQUIRING_RESOURCES:4,
            RECORDING_REC_STARTED:5,
            RECORDING_REC_UPDATED:6,
            RECORDING_REC_COMPLETED:7,
            RECORDING_REC_PARTIALLY_COMPLETED:8,
            RECORDING_TS_ACQUIRING_RESOURCES:9,
            RECORDING_TS_STARTED:10,
            RECORDING_ERROR:11,
            RECORDING_REC_START_ERROR:12,
            RECORDING_REC_START_CONFLICT:13
        }, pvrStatesArray = toArray(pvrStates),
        pvrErrors = {
            RECORDING_ERROR_REC_RESOURCE_LIMITATION:0,
            RECORDING_ERROR_INSUFFICIENT_STORAGE:1,
            RECORDING_ERROR_TUNER_CONFLICT:2,
            RECORDING_ERROR_REC_DRM_RESTRICTION:3,
            RECORDING_ERROR_REC_UNKNOWN:4,
            RECORDING_ERROR_TS_RESOURCE_LIMITATION:5,
            RECORDING_ERROR_TS_DRM_RESTRICTION:6,
            RECORDING_ERROR_HAVE_ALTERNATIVE:7,
            RECORDING_ERROR_TS_UNKNOWN:8,
            RECORDING_ERROR_RFOTA:9,
            RECORDING_ERROR_NO_AV:10,
            RECORDING_ERROR_POWER_OFF:11
        }, pvrErrorsArray =  toArray(pvrErrors),
        //*** API*** OIPF 7.10.1
        /*pvrRepeatDays = {
            SUNDAY: 0x01,
            MONDAY: 0x02,
            TUESDAY: 0x04,
            WEDNESDAY: 0x08,
            THURSDAY: 0x10,
            FRIDAY: 0x20,
            SATURDAY: 0x40
        },*/
        makeRepeatDays = (function(){
            var days = [0x01,0x02,0x04,0x08,0x10,0x20,0x40],
                repeatTypes = {
                   once: function(){
                       return 0;
                   },
                    daily: function(){
                        return 0x7f;  // summation of days all items
                    },
                    weekly:function(){
                        return days[(new Date()).getDay()];
                    }
                };
            return function(option){
                return (repeatTypes[option]||repeatTypes.once)();
            };
        }()),
        //***API*** HUMAX EXTENSION API 2.4.1 <br />
        //> recording : `0`
        //> remind : `1`
        //> power on timer : `6`
        //> series recording : `10`
        factoryType = {
            recording : 0,
            remind : 1,
            powerOnTimer : 6,
            seriesRecording : 10
        },
        //***API*** HUMAX Extension API 2.4.1 <br />
        //>TARGET_MANUAL = 0
        //>TARGET_INTHDD = 1 (default)
        //>TARGET_INTSUBHDD = 2
        //>TAGET_EXTHDD = 3
        target = {
            manual : 0,
            internalHDD : 1,
            internalSubHDD : 2,
            externalHDD : 3
        };

        return {
            target:target,
            type:factoryType,
            state:pvrStates,
            error:pvrErrors,
            repeatDays:makeRepeatDays,
            print:printInfo  /** function print(state , error ) */
        };

        /*PVR Implementation section*/
        function printInfo(state, error){
            console.log("PVREvent  :state: "+ (pvrStatesArray[state] ||"unknown") +  "  :error : "+ (pvrErrorsArray[error]||"unknown"));
        }
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

    function toArray(table){
        var n, a =[];
        for(n in table){
            if(table.hasOwnProperty(n)){
                a[table[n]] = n;
            }
        }
        return a;
    }
}(jasmine));