var oipfobjectFactory = window.oipfObjectFactory;
var gatewayInfo = undefined;


module("7.6 CONTENT_SERVICE PROTECTION API");

if( oipfobjectFactory !== undefined )
{
    try {
    	gatewayInfo = oipfobjectFactory.createGatewayInfoObject();
    } catch (e)
    {
        console.log(e);
    }
}

module("application/oipfGatewayInfo");
test("isIGDiscovered", function() {
    try {
        ok(gatewayInfo.isIGDiscovered!== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("isAGDiscovered", function() {
    try {
        ok(gatewayInfo.isAGDiscovered !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("isCSPGCIPlusDiscovered", function() {
    try {
        ok(gatewayInfo.isCSPGCIPlusDiscovered !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("isCSPGDTCPDiscovered", function() {
    try {
        ok(gatewayInfo.isCSPGDTCPDiscovered !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("igURL", function() {
    try {
        ok(gatewayInfo.igURL !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("agURL", function() {
    try {
        ok(gatewayInfo.agURL !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("cspgDTCPURL", function() {
    try {
        ok(gatewayInfo.cspgDTCPURL !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("interval", function() {
    try {
        ok(gatewayInfo.interval !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("onDiscoverIG", function() {
    try {
        ok(gatewayInfo.onDiscoverIG !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("onDiscoverAG", function() {
    try {
        ok(gatewayInfo.onDiscoverAG !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

test("onDiscoverCSPGDTCP", function() {
    try {
        ok(gatewayInfo.onDiscoverCSPGDTCP !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("isIGSupported", function() {
    try {
        ok(gatewayInfo.isIGSupported !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("isAGSupported", function() {
    try {
        ok(gatewayInfo.isAGSupported !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("isCSPGCIPlusSupported", function() {
    try {
        ok(gatewayInfo.isCSPGCIPlusSupported !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("isCSPGDTCPSupported", function() {
    try {
        ok(gatewayInfo.isCSPGDTCPSupported !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("onDiscoverCSPGCIPlus", function() {
    try {
        ok(gatewayInfo.onDiscoverCSPGCIPlus !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("CSPGCIPlusDRMType", function() {
    try {
        ok(gatewayInfo.CSPGCIPlusDRMType !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("isIGSupportedMethod()", function() {
    try {
        ok(gatewayInfo.isIGSupportedMethod !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
