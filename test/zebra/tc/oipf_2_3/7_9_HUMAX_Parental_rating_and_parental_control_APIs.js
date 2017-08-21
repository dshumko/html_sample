describe("7.9 Parental rating and parental control APIs", function() {
    var oipfobjectFactory;
    var parentalControlManager;
    var parentalRatingSchemeCollection;
    var parentalRatingScheme;

    try{
        oipfobjectFactory = window.oipfObjectFactory;
        parentalControlManager = oipfobjectFactory.createParentalControlManagerObject();
    }catch(e){
        parentalControlManager = undefined;
    }

    describe("7.9.1 The application/oipfParentalControlManager embedded object", function() {
        describe("Hmx Methods", function() {
            it("resetParentalControlPIN", function() { expect(parentalControlManager.resetParentalControlPIN).toBeDefined(); });
            it("isNagraSmartCardInserted", function() { expect(parentalControlManager.isNagraSmartCardInserted).toBeDefined(); });
            it("setNargaSmartCardPIN", function() { expect(parentalControlManager.setNargaSmartCardPIN).toBeDefined(); });
            it("getNargaSmartCardPINRetryCount", function() { expect(parentalControlManager.getNargaSmartCardPINRetryCount).toBeDefined(); });
            it("getNargaSmartCardPINAccessibleState", function() { expect(parentalControlManager.getNargaSmartCardPINAccessibleState).toBeDefined(); });
            it("unlockAV", function() { expect(parentalControlManager.unlockAV).toBeDefined(); });
            it("getNargaSmartCardPINRemainTime", function() { expect(parentalControlManager.getNargaSmartCardPINRemainTime).toBeDefined(); });
            it("verifyNargaSmartCardPIN", function() { expect(parentalControlManager.verifyNargaSmartCardPIN).toBeDefined(); });
        });
    });
    describe("7.9.2 The ParentalRatingScheme class", function() {
        beforeEach(function() {
            parentalRatingSchemeCollection = parentalControlManager.parentalRatingSchemes;
            parentalRatingScheme = parentalRatingSchemeCollection[0];
        });
        describe("Hmx Methods", function() {
            it("changeThreshold", function() { expect(parentalRatingScheme.changeThreshold).toBeDefined(); });
            it("resetParentalControlPIN", function() { expect(parentalRatingScheme.resetParentalControlPIN).toBeDefined(); });
        });
    });
});