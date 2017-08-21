/* HUMAX RECORDINGS UTILS */
(function(jasmine) {
    "use strict";
    jasmine.humax = extend(jasmine.humax || {}, {
        net: createNetInstance(),
        subtitle: createSubtitleInstance()
    });

    function createNetInstance(){
        return {
            type: makeNetworkDeviceType(),
            state: makeNetworkState()
        };
    }
    function makeNetworkDeviceType(){
        return {
            LAN : 0,
            WLAN : 1,
            PPPOE : 2,
            NONE : 3
        };
    }
    function makeNetworkState(){
        return {
            NET_WIRE : 0,
            NET_WIRELESS : 1,
            CON_FAIL : 0,
            CON_SUCCESS : 1,
            CABLE_LINK_DISCON : 2,
            CABLE_LINK_CON : 3,
            WIFI_SCAN_AP : 0,
            WIFI_SCAN_SUCCESS : 1,
            WIFI_SCAN_FAIL : 2,
            WIFI_CON_SUCCESS : 3,
            WIFI_CON_FAIL : 4,
            WIFI_KEY_INVALID : 5,
            WIFI_WPS_SUCCESS : 6,
            WIFI_WPS_FAIL : 7,
            GATEWAY_ACCESS_FAIL : 0,
            GATEWAY_ACCESS_SUCCESS : 1,
            DNS_ACCESS_FAIL : 2,
            DNS_ACCESS_SUCCESS : 3,
            INTERNET_CONNECTED_FAIL : 4,
            INTERNET_CONNECTED_SUCCESS : 5,
            RECOMMEND_CONNECTION : 12
        };
    }

    function createSubtitleInstance(){
        var fontType = {
            fixed : 0,
          variable:1
        };
        return {
            fontType:fontType
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