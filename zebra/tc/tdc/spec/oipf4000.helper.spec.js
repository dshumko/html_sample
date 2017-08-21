/* HUMAX RECORDINGS UTILS */
(function(jasmine) {
    "use strict";
    jasmine.humax = extend(jasmine.humax || {}, {
        media: createMediaInstance(),
        content: createContentsInstance(),
        power: createPowerInstance(),
        softwareUpdate:createSoftwareUpdateInstance()
    });

    function createMediaInstance(){
        var
        //***API*** OIPF 7.16.5.1.1
        //>COMPONENT_TYPE_VIDEO `0` Represents a video component. This constant is used for all  video components regardless of encoding.
        //>COMPONENT_TYPE_AUDIO `1` Represents an audio component. This constant is used for all  audio components regardless of encoding.
        //>COMPONENT_TYPE_SUBTITLE `2` Represents a subtitle component. This constant is used for all  subtitle components regardless of subtitle format. NOTE: A  subtitle component may also be related to closed captioning as part of a video stream.
            component = {
                COMPONENT_TYPE_VIDEO:0,
                COMPONENT_TYPE_AUDIO:1,
                COMPONENT_TYPE_SUBTITLE:2
            };
        return {
            component:component
        };
    }

    function createContentsInstance(){
        var type = {
            video:0,
            music:1,
            photo:2,
            unknown:3
        },
        viewType = {
            oneDepthView:0,
            folderView:1
        },
        browseState = {
            start : 0,
            add : 1,
            complete : 2,
            error : 3
        },
        operationState = { //oplfilemgr.h
            idle : 0,
            copying : 1,
            copyComplete : 2,
            copyError : 3,
            removing : 4,
            removeComplete : 5,
            removeError : 6,
            moving : 7,
            moveComplete : 8,
            moveError : 9,
            renaming : 10,
            renameComplete : 11,
            renameError : 12,
            makingDir : 13,
            makeDirComplete : 14,
            makeDirError : 15,
            stopping : 16,
            stopComplete : 17,
            stopError : 18,
            scanning : 19,
            scanComplete : 20,
            scanError : 21,
            removingDir : 22,
            removeDirComplete : 23,
            removeDirError : 24,
            autoScanStarted : 25,
            autoScanComplete : 26,
            autoScanError : 27,
            infoError : 80,
            fat324g : 81,
            lackSpace : 82,
            unknownTicket : 238
        };

        return {
            type:type,
            viewType:viewType,
            browseState:browseState,
            operationState:operationState
        };
    }

    function createPowerInstance(){
        var state  = {
            off:0,
            on:1,
            passiveStandby:2,
            activeStandby:3
        };
        return {
            state:state
        };
    }

    function createSoftwareUpdateInstance(){
        var spec = { // MUST be same with DxSwUpdate_Spec_e @ dlib_swupdate.h
            NONE: 0,
            ASTRA: 1,
            SATDVBSSU: 2,
            DTT: 3,
            SKYD: 4,
            APS: 5,
            IRDETO: 6,
            HUMAX: 7,
            FSATSSU: 8,
            UPC: 9,
            KDG: 10
        },
        event = { // MUST be same with DxSwUpdate_Event_e @ dlib_swupdate.h
            connectSuccess: 0,
            connectFail: 1,
            detectSuccess: 2,
            detectSuccessInLive: 3,
            detectFail: 4,
            downloadSuccess: 5,
            downloadFail: 6,
            downloadProgress: 7,
            installSuccess: 8,
            installFail: 9,
            installProgress: 10,
            erorr: 11,
            finish: 12
        },
        source = { // MUST be same with DxSwUpdate_Source_e @ dlib_swupdate.h
            none: 0,
            rf: 1,
            ip: 2,
            file: 3,
            usb: 4
        };

        return {
            spec:spec,
            event:event,
            source:source
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