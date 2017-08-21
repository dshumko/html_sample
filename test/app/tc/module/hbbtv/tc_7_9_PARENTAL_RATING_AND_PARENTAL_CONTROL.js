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

if(HBBTV_ON==0){
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
}

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
if(HBBTV_ON==0) {
	test("addParentalRatingScheme()", function() {
	    try {
	        ok(parentalRatingSchemes.addParentalRatingScheme !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
}
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


module("ParentalRatingCollection");
test("addParentalRating()", function() {
    try {
        scheduledRecordingCollection = recordingScheduler.getScheduledRecordings();
        scheduledRecording = scheduledRecordingCollection[0];//recordingScheduler.record(programme);
        parentalRatingCollection = scheduledRecording.parentalRatings;
        try {
            ok(parentalRatingCollection.addParentalRating !== undefined, "is exists");
        } catch (e) {
            ok (false, "not exists");
        }
    } catch (e) {
        ok (false, "we cannot get parentalRatings");
    }
});


var parentalRatingSchemeCollection;
var tempParentalRatingScheme;
var tempParentalRating;
module("SceniroTest");
test("parentalRatingSchemes & getParentalRatingScheme", function() {
    try {
        parentalRatingSchemeCollection = parentalControlManager.parentalRatingSchemes;
        if (parentalRatingSchemeCollection) {
            // need parentalRatingScheme name !!
            var name = 'urn:oipf:GermanyFSKCS';
            tempParentalRatingScheme = parentalRatingSchemeCollection.getParentalRatingScheme(name);
            if (tempParentalRatingScheme) {
                tempParentalRatingScheme.name === name? ok (true, "ParentalRatingScheme is correct") : ok (false, "ParentalRatingScheme is not correct");
            } else {
                ok (false, "ParentalRatingScheme dees not exist");
            }
        } else {
            ok (false, "parentalRatingSchemes does not exist");
        }
    } catch (e) {
        ok (false, "parentalRatingSchemes or getParentalRatingScheme does not work");
    }
});
test("parentalRatingScheme threshold", function() {
    try {
        if (tempParentalRatingScheme) {
            var tempParentalRating = tempParentalRatingScheme.threshold;
            if (tempParentalRating) {
                // TODP check threshold
                ok (true, "threshold works well");
            } else {
                ok (false, "threshold dees not work");
            }
        } else {
            ok (false, "getParentalRatingScheme does not work");
        }
    } catch (e) {
        ok (false, "threshold does not work");
    }
});
test("parentalRatingScheme indexOf", function() {
    try {
        if (tempParentalRatingScheme) {
            // TODO we have to know ratingVaule that is ParentalRating scheme.
            var ratingValue = '';
            var index = tempParentalRatingScheme.indexOf(ratingValue);
            if (index === -1) {
                ok (false, "we cannot find ParentalRating of ["+ratingValue+']');
            } else {
                ok (true, "indexOf works well ["+index+']');
            }
        } else {
            ok (false, "getParentalRatingScheme does not work");
        }
    } catch (e) {
        ok (false, "indexOf does not work");
    }
});
test("parentalRatingScheme iconUrl", function() {
    try {
        if (tempParentalRatingScheme) {
            var iconUrl = tempParentalRatingScheme.iconUrl(0);
            if (iconUrl === undefined) {
                ok (true, "ParentalRatingScheme has no item");
            } else if (iconUrl === null) {
                ok (false, "this ParentalRating has no icon");
            } else {
                ok (true, "iconUrl works well ["+iconUrl+']');
            }
        } else {
            ok (false, "getParentalRatingScheme does not work");
        }
    } catch (e) {
        ok (false, "iconUrl does not work");
    }
});