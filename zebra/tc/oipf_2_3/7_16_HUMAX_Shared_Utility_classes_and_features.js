function typeCheck(obj, name){ it(name, function() { expect(obj[name]).toBeDefined(); }); };

describe("7.16 Shared Utility classes and features", function() {
    var object;

    try{
        var oipfobjectFactory = window.oipfObjectFactory;
        object = oipfobjectFactory.createRemoteControlFunctionObject;
    }catch(e){
        object = undefined;
    }

    describe("7.16.2 The Programme class", function() {
        describe("Hmx Properties", function() {
            it("recording", function() { expect(object.recording).toBeDefined(); });
            it("subtitleType", function() { expect(object.subtitleType).toBeDefined(); });
            it("subtitleTypes", function() { expect(object.subtitleTypes).toBeDefined(); });
            it("scheduledRecording", function() { expect(object.scheduledRecording).toBeDefined(); });
            it("recordings", function() { expect(object.recordings).toBeDefined(); });
            it("programmeCRID", function() { expect(object.programmeCRID).toBeDefined(); });
            it("recommendationCRID", function() { expect(object.recommendationCRID).toBeDefined(); });
            it("mediaDeeplinkID", function() { expect(object.mediaDeeplinkID).toBeDefined(); });
            it("mediaDeeplinkUrl", function() { expect(object.mediaDeeplinkUrl).toBeDefined(); });
            it("mediaDeeplinkExpireDate", function() { expect(object.mediaDeeplinkExpireDate).toBeDefined(); });
            it("onDemandStartOfAvailability", function() { expect(object.onDemandStartOfAvailability).toBeDefined(); });
            it("onDemandEndOfAvailability", function() { expect(object.onDemandEndOfAvailability).toBeDefined(); });
            it("onDemandPublishedDuration", function() { expect(object.onDemandPublishedDuration).toBeDefined(); });
            it("onDemandIsFree ", function() { expect(object.onDemandIsFree ).toBeDefined(); });
            it("onDemandIsHD", function() { expect(object.onDemandIsHD).toBeDefined(); });
            it("onDemandIsMediaAvailable", function() { expect(object.onDemandIsMediaAvailable).toBeDefined(); });
            it("onDemandIsFEPGAvailable", function() { expect(object.onDemandIsFEPGAvailable).toBeDefined(); });
            it("onDemandProgramUrl", function() { expect(object.onDemandProgramUrl).toBeDefined(); });
            it("onDemandAuxiliaryUrl", function() { expect(object.onDemandAuxiliaryUrl).toBeDefined(); });
            it("onDemandDeliveryMode", function() { expect(object.onDemandDeliveryMode).toBeDefined(); });
        });
        describe("7.16.5.2 The AVComponent class", function() {
            describe("Hmx Properties", function() {
                it("subType",  function() { expect(object.subType).toBeDefined(); });
                it("language2",  function() { expect(object.language2).toBeDefined(); });
            });
        });
        describe("7.16.5.5 The AVSubtitleComponent class", function() {
            describe("Hmx Properties", function() {
                it("subType",  function() { expect(object.subType).toBeDefined(); });
            });
        });
    });
});
