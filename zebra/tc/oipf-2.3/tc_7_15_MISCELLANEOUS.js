
//start test
var oipfobjectFactory = window.oipfObjectFactory;
var MDTF = undefined;
var statusView = undefined;
var capabilities = undefined;

if( oipfobjectFactory !== undefined )
{
    try {
    	MDTF = oipfobjectFactory.createMDTFObject();
    } catch (e)
    {
        console.log(e);
    }
}
if( oipfobjectFactory !== undefined )
{
    try {
    	statusView = oipfobjectFactory.createStatusViewObject();
    } catch (e)
    {
        console.log(e);
    }
}
if( oipfobjectFactory !== undefined )
{
    try {
    	capabilities = oipfobjectFactory.createCapabilitiesObject();
    } catch (e)
    {
        console.log(e);
    }
}


module("application/oipfMDTF");
test("MDTF", function() {
    try {
        ok(MDTF !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("onFLUTEListenerResult", function() {
    try {
        ok(MDTF.onFLUTEListenerResult !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("addFLUTEListener()", function() {
    try {
        ok(MDTF.addFLUTEListener !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("addFLUTEListenerTags()", function() {
    try {
        ok(MDTF.addFLUTEListenerTags !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("getFLUTEListeners()", function() {
    try {
        ok(MDTF.getFLUTEListeners !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("getTags()", function() {
    try {
        ok(MDTF.getTags !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("removeFLUTEListener()", function() {
    try {
        ok(MDTF.removeFLUTEListener !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});


module("application/oipfStatusView");
test("statusView", function() {
    try {
        ok(statusView !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("getMinimumItemWidth()", function() {
    try {
        ok(statusView.getMinimumItemWidth !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("getMinimumItemHeight()", function() {
    try {
        ok(statusView.getMinimumItemHeight !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});


module("application/oipfCapabilities");
test("xmlCapabilities", function() {
    try {
        ok(capabilities.xmlCapabilities !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("extraSDVideoDecodes", function() {
    try {
        ok(capabilities.extraSDVideoDecodes !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("extraHDVideoDecodes", function() {
    try {
        ok(capabilities.extraHDVideoDecodes !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("hasCapability()", function() {
    try {
        ok(capabilities.hasCapability !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});




