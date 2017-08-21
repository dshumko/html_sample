describe("7.15 Miscellaneous APIs", function() {
        var oipfobjectFactory;
        var oipfCapabilitie;
        var mdtfObject;
        var statusView;


    try{
        oipfobjectFactory = window.oipfObjectFactory;
    }catch(e){
        object = undefined;
    }

    describe("7.15.1 The application/oipfMDTF embedded object", function() {
        /* todo - mime type <object type="application/oipfMDTF> */
        beforeEach(function() {
            mdtfObject = oipfobjectFactory.createRemoteControlFunctionObject();
        });

        describe("7.15.1.1 Properties", function() {
            it("onFLUTEListenerResult", function() { expect(mdtfObject.onFLUTEListenerResult).toBeDefined(); });
        });

        describe("7.15.1.2 Methods", function() {
            it("addFLUTEListener", function() { expect(mdtfObject.addFLUTEListener).not.toBeDefined(); });
            it("addFLUTEListenerTags", function() { expect(mdtfObject.addFLUTEListenerTags).not.toBeDefined(); });
            it("getFLUTEListeners", function() { expect(mdtfObject.getFLUTEListeners).toBeDefined(); });
            it("getTags", function() { expect(mdtfObject.getTags).toBeDefined(); });
            it("removeFLUTEListener", function() { expect(mdtfObject.removeFLUTEListener).toBeDefined(); });
        });

        describe("7.15.1.3 Events", function() {
            it("onFLUTEListenerResult", function() { expect(mdtfObject.onFLUTEListenerResult).toBeDefined(); });
        });
    });

    describe("7.15.2 The application/oipfStatusView embedded object", function() {
        beforeEach(function() {
            statusView = oipfobjectFactory.createStatusViewObject();
        });

        /* todo - mime type <object type="application/oipfStatusView>" /> */
       describe("7.15.2.1.1 Methods", function() {
            it("getMinimumItemWidth", function() { expect(object.getMinimumItemWidth).toBeDefined(); });
            it("getMinimumItemHeight", function() { expect(object.getMinimumItemHeight).toBeDefined(); });
        });
    });

    describe("7.15.3 The application/oipfCapabilities embedded object", function() {
        beforeEach(function() {
            oipfCapabilities = oipfobjectFactory.createCapabilitiesObject();
        });

       describe("7.15.3.1 Properties", function() {
            it("xmlCapabilities", function() { expect(oipfCapabilities.xmlCapabilities).toBeDefined(); });
            it("extraSDVideoDecodes", function() { expect(oipfCapabilities.extraSDVideoDecodes).toBeDefined(); });
            it("extraHDVideoDecodes", function() { expect(oipfCapabilities.extraHDVideoDecodes).toBeDefined(); });
        });
       describe("7.15.3.2 Methods", function() {
            it("hasCapability", function() { expect(oipfCapabilities.hasCapability).toBeDefined(); });
        });

    });

    describe("7.15.4 The Navigator class", function() {
    });

    describe("7.15.5 Debug print API", function() {
        it("debug", function() { expect(debug).toBeDefined(); });
    });
});
