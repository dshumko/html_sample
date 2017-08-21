
//start test
var oipfobjectFactory = window.oipfObjectFactory;
var recordingScheduler = undefined;
var scheduledRecording = undefined;
var scheduledRecordingCollection = undefined;
var recording = undefined;
var recordingCollection = undefined;
var bookmark = undefined;
var bookmarkCollection = undefined;
var programme = undefined;

if( oipfobjectFactory !== undefined )
{
    try {
        recordingScheduler = oipfobjectFactory.createRecordingSchedulerObject();
    } catch (e)
    {
        console.log(e);
    }
}


module("RecordingScheduler");
test("record()", function() {
    try {
        ok(recordingScheduler.record !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("recordAt()", function() {
    try {
        ok(recordingScheduler.recordAt !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("getScheduledRecordings()", function() {
    try {
        ok(recordingScheduler.getScheduledRecordings !== undefined, "is exists");
        //scheduledRecordingCollection = recordingScheduler.getScheduledRecordings();
        //scheduledRecording = scheduledRecordingCollection[0];
    } catch (e) {
        ok (false, "not exists");
    }
});
test("getChannelConfig()", function() {
    try {
        ok(recordingScheduler.getChannelConfig !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("remove()", function() {
    try {
        ok(recordingScheduler.remove !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("createProgrammeObject()", function() {
    try {
        ok(recordingScheduler.createProgrammeObject !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});


module("control of recordings");
test("recordings", function() {
    try {
        ok(recordingScheduler.recordings !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("discInfo", function() {
    try {
        ok(recordingScheduler.discInfo !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("onPVREvent", function() {
    try {
        ok(recordingScheduler.onPVREvent !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("getRecording()", function() {
    try {
        ok(recordingScheduler.getRecording !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("stop()", function() {
    try {
        ok(recordingScheduler.stop !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("refresh()", function() {
    try {
        ok(recordingScheduler.refresh !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("update()", function() {
    try {
        ok(recordingScheduler.update !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});


try {
	programme = recordingScheduler.createProgrammeObject();
	scheduledRecordingCollection = recordingScheduler.getScheduledRecordings();
	scheduledRecording = scheduledRecordingCollection[0];//recordingScheduler.record(programme);
} catch (e) {
   
}
module("ScheduledRecording");
test("state", function() {
    try {
        ok(scheduledRecording.state !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("error", function() {
    try {
        ok(scheduledRecording.error !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("scheduleID", function() {
    try {
        ok(scheduledRecording.scheduleID !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("customID", function() {
    try {
        ok(scheduledRecording.customID !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("startPadding", function() {
    try {
        ok(scheduledRecording.startPadding !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("endPadding", function() {
    try {
        ok(scheduledRecording.endPadding !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("repeatDays", function() {
    try {
        ok(scheduledRecording.repeatDays !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("name", function() {
    try {
        ok(scheduledRecording.name !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("longName", function() {
    try {
        ok(scheduledRecording.longName !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("description", function() {
    try {
        ok(scheduledRecording.description !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("longDescription", function() {
    try {
        ok(scheduledRecording.longDescription !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("startTime", function() {
    try {
        ok(scheduledRecording.startTime !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("duration", function() {
    try {
        ok(scheduledRecording.duration !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("channel", function() {
    try {
        ok(scheduledRecording.channel !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("isManual", function() {
    try {
        ok(scheduledRecording.isManual !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("programmeID", function() {
    try {
        ok(scheduledRecording.programmeID !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("programmeIDType", function() {
    try {
        ok(scheduledRecording.programmeIDType !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("episode", function() {
    try {
        ok(scheduledRecording.episode !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("totalEpisodes", function() {
    try {
        ok(scheduledRecording.totalEpisodes !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("parentalRatings", function() {
    try {
        ok(scheduledRecording.parentalRatings !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("customMetadata", function() {
    try {
        ok(scheduledRecording.customMetadata !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});


module("ScheduledRecordingCollection");
test("state", function() {
    try {
        ok(scheduledRecordingCollection !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});


try {
	recording = recordingScheduler.getRecording("");
} catch (e) {
   
}
module("Recording");
test("uri", function() {
    try {
        ok(recording.uri !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("id", function() {
    try {
        ok(recording.id !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("doNotDelete", function() {
    try {
        ok(recording.doNotDelete !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("saveDays", function() {
    try {
        ok(recording.saveDays !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("saveEpisodes", function() {
    try {
        ok(recording.saveEpisodes !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("blocked", function() {
    try {
        ok(recording.blocked !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("showType", function() {
    try {
        ok(recording.showType !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("subtitles", function() {
    try {
        ok(recording.subtitles !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("subtitleLanguages", function() {
    try {
        ok(recording.subtitleLanguages !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("isHD", function() {
    try {
        ok(recording.isHD !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("is3D", function() {
    try {
        ok(recording.is3D !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("audioType", function() {
    try {
        ok(recording.audioType !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("isMultilingual", function() {
    try {
        ok(recording.isMultilingual !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("audioLanguages", function() {
    try {
        ok(recording.audioLanguages !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("genres", function() {
    try {
        ok(recording.genres !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("recordingStartTime", function() {
    try {
        ok(recording.recordingStartTime !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("recordingDuration", function() {
    try {
        ok(recording.recordingDuration !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("bookmarks", function() {
    try {
        ok(recording.bookmarks !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("locked", function() {
    try {
        ok(recording.locked !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});


try {
	bookmarkCollection = recording.bookmarks;
	bookmark = bookmarkCollection[0];
} catch (e) {

}
module("Bookmark");
test("time", function() {
    try {
        ok(bookmark.time !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("name", function() {
    try {
        ok(bookmark.name !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});


module("BookmarkCollection");
test("addBookmark()", function() {
    try {
        ok(bookmarkCollection.addBookmark !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("removeBookmark()", function() {
    try {
        ok(bookmarkCollection.removeBookmark !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
