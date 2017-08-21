describe("7.9 Parental rating and parental control APIs", function() {
    var oipfobjectFactory;
    var parentalControlManager;
    var parentalRatingSchemeCollection;
    var parentalRatingScheme;
    var parentalRatingCollection;
    var parentalRating;

    var recordingScheduler;
    var scheduledRecordingCollection;
    var scheduledRecording;

    try{
        oipfobjectFactory = window.oipfObjectFactory;
        parentalControlManager = oipfobjectFactory.createParentalControlManagerObject();
    }catch(e){
        parentalControlManager = undefined;
    }

    describe("7.9.1 The application/oipfParentalControlManager embedded object", function() {
        describe("7.9.1.1 Properties", function() {
            it("parentalRatingSchemes", function() { expect(parentalControlManager.parentalRatingSchemes).toBeDefined(); });
            it("isPINEntryLocked", function() { expect(parentalControlManager.isPINEntryLocked).toBeDefined(); });
        });
        describe("7.9.1.2 Methods", function() {
            it("setParentalControlStatus", function() { expect(parentalControlManager.setParentalControlStatus).toBeDefined(); });
            it("getParentalControlStatus", function() { expect(parentalControlManager.getParentalControlStatus).toBeDefined(); });
            it("getBlockUnrated", function() { expect(parentalControlManager.getBlockUnrated).toBeDefined(); });
            it("setParentalControlPIN", function() { expect(parentalControlManager.setParentalControlPIN).toBeDefined(); });
            it("unlockWithParentalControlPIN", function() { expect(parentalControlManager.unlockWithParentalControlPIN).toBeDefined(); });
            it("verifyParentalControlPIN", function() { expect(parentalControlManager.verifyParentalControlPIN).toBeDefined(); });
            it("setBlockUnrated", function() { expect(parentalControlManager.setBlockUnrated).toBeDefined(); });
        });
    });
    describe("7.9.2 The ParentalRatingScheme class", function() {
        beforeEach(function() {
            parentalRatingSchemeCollection = parentalControlManager.parentalRatingSchemes;
            parentalRatingScheme = parentalRatingSchemeCollection[0];
        });
        describe("7.9.2.1 Properties", function() {
            it("name", function() { expect(parentalRatingScheme.name).toBeDefined(); });
            it("threshold", function() { expect(parentalRatingScheme.threshold).toBeDefined(); });
        });
        describe("7.9.2.2 Methods", function() {
            it("indexOf", function() { expect(parentalRatingScheme.indexOf).toBeDefined(); });
            it("iconUri", function() { expect(parentalRatingScheme.iconUri).toBeDefined(); });
        });
    });
    describe("7.9.3 The ParentalRatingSchemeCollection class", function() {
        beforeEach(function() {
            parentalRatingSchemeCollection = parentalControlManager.parentalRatingSchemes;
        });
        describe("7.9.3.1 Methods", function() {
            it("addParentalRatingScheme", function() { expect(parentalRatingSchemeCollection.addParentalRatingScheme).toBeDefined(); });
            it("getParentalRatingScheme", function() { expect(parentalRatingSchemeCollection.getParentalRatingScheme).toBeDefined(); });
        });
    });
    describe("7.9.4 The ParentalRating class", function() {
        beforeEach(function() {
            parentalRatingSchemeCollection = parentalControlManager.parentalRatingSchemes;
            parentalRatingScheme = parentalRatingSchemeCollection[0];
            parentalRating = parentalRatingScheme.threshold;
        });
        describe("7.9.4.1 Properties", function() {
            it("name", function() { expect(parentalRating.name).toBeDefined(); });
            it("scheme", function() { expect(parentalRating.scheme).toBeDefined(); });
            it("value", function() { expect(parentalRating.value).toBeDefined(); });
            it("labels", function() { expect(parentalRating.labels).toBeDefined(); });
            it("region", function() { expect(parentalRating.region).toBeDefined(); });
        });
    });
    describe("7.9.5 The ParentalRatingCollection class", function() {
        beforeEach(function() {
            recordingScheduler = oipfobjectFactory.createRecordingSchedulerObject();
            scheduledRecordingCollection = recordingScheduler.getScheduledRecordings();
            scheduledRecording = scheduledRecordingCollection[0];
            parentalRatingCollection = scheduledRecording.parentalRatings;
        });
        it("ParentalRatingCollection", function() { expect(parentalRatingCollection).toBeDefined(); });
        describe("7.9.5.1 Methods", function() {
            it("addParentalRating", function() { expect(parentalRatingCollection.addParentalRating).toBeDefined(); });
        });
    });
});
