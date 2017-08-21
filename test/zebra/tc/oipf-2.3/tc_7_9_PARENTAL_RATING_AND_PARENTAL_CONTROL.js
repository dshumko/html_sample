var oipfobjectFactory = window.oipfObjectFactory;
var parentalControlManager = undefined;
var parentalRatingSchemes = undefined;
var parentalRating = undefined;
var parentalRatingCollection = undefined;
var recordingScheduler = undefined;
var scheduledRecordingCollection = undefined;
var scheduledRecording = undefined;

if( oipfobjectFactory !== undefined )
{
    try {
        parentalControlManager = oipfobjectFactory.createParentalControlManagerObject();
    } catch (e)
    {
        console.log(e);
    }
}
if( oipfobjectFactory !== undefined )
{
    try {
        recordingScheduler = oipfobjectFactory.createRecordingSchedulerObject();
    } catch (e)
    {
        console.log(e);
    }
}

module("application/oipfParentalControlManager");
test("parentalRatingSchemes", function() {
    try {
        ok((parentalRatingSchemes = parentalControlManager.parentalRatingSchemes) !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("isPINEntryLocked", function() {
    try {
        ok(parentalControlManager.isPINEntryLocked !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("setParentalControlStatus()", function() {
    try {
        ok(parentalControlManager.setParentalControlStatus !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("getParentalControlStatus()", function() {
    try {
        ok(parentalControlManager.getParentalControlStatus !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("getBlockUnrated()", function() {
    try {
        ok(parentalControlManager.getBlockUnrated !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("setParentalControlPIN()", function() {
    try {
        ok(parentalControlManager.setParentalControlPIN !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("unlockWithParentalControlPIN()", function() {
    try {
        ok(parentalControlManager.unlockWithParentalControlPIN !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("verifyParentalControlPIN()", function() {
    try {
        ok(parentalControlManager.verifyParentalControlPIN !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("setBlockUnrated()", function() {
    try {
        ok(parentalControlManager.setBlockUnrated !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});


module("ParentalRatingScheme");
test("name", function() {
    try {
        ok(parentalRatingSchemes[0].name !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("threshold", function() {
    try {
        ok((parentalRating = parentalRatingSchemes[0].threshold) !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("indexOf()", function() {
    try {
        ok(parentalRatingSchemes[0].indexOf !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("iconUri()", function() {
    try {
        ok(parentalRatingSchemes[0].iconUri !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});


module("ParentalRatingSchemeCollection");
test("addParentalRatingScheme()", function() {
    try {
        ok(parentalRatingSchemes.addParentalRatingScheme !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("getParentalRatingScheme()", function() {
    try {
        ok(parentalRatingSchemes.getParentalRatingScheme !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

module("ParentalRating");
test("name", function() {
    try {
        ok(parentalRating.name !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("scheme", function() {
    try {
        ok(parentalRating.scheme !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("value", function() {
    try {
        ok(parentalRating.value !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("labels", function() {
    try {
        ok(parentalRating.labels !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("region", function() {
    try {
        ok(parentalRating.region !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});


try {
	scheduledRecordingCollection = recordingScheduler.getScheduledRecordings();
	scheduledRecording = scheduledRecordingCollection[0];//recordingScheduler.record(programme);
	parentalRatingCollection = scheduledRecording.parentalRatings;
} catch (e) {
   
}
module("ParentalRatingCollection");
test("addParentalRating()", function() {
    try {
        ok(parentalRatingCollection.addParentalRating !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

