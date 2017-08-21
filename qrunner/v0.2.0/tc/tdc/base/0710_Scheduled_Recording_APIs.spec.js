// OIPF-T1-R2_Specification-Volume-5-Declarative-Application-Environment-v2_3-2014-01-24.pdf
describe('7.10 Scheduled Recording APIs', function() {
    "use strict";
    var record;
    beforeEach(function () {
        record = document.createElement('object');
        record.setAttribute("type", "application/oipfRecordingScheduler");
        document.body.appendChild(record);
    });

    describe('7.10.1 The application/oipfRecordingScheduler embedded object', function () {
        describe('7.10.1.1 Methods', function(){
            it('record', function(){
                expect(record.record).toBeDefined();
            });
            it('recordAt', function(){
                expect(record.recordAt).toBeDefined();
            });
            it('getScheduledRecordings', function(){
                expect(record.getScheduledRecordings).toBeDefined();
            });
            it('getChannelConfig', function(){
                expect(record.getChannelConfig).toBeDefined();
            });
            it('remove', function(){
                expect(record.remove).toBeDefined();
            });
            it('createProgrammeObject', function(){
                expect(record.createProgrammeObject).toBeDefined();
            });
        });
    });
    describe('7.10.2 The ScheduledRecording class', function () {
        var recording;
        beforeEach(function () {
            recording = record.getScheduledRecordings().item(0);
            //recording = record.record(record.createProgrammeObject());
        });
        describe('7.10.2.1 Constants', function(){
            it('ID_TVA_CRID', function(){
                expect(recording.ID_TVA_CRID).toBe(0);
            });
            it('ID_DVB_EVENT', function(){
                expect(recording.ID_DVB_EVENT).toBe(1);
            });
            it('ID_TVA_GROUP_CRID', function(){
                expect(recording.ID_TVA_GROUP_CRID).toBe(2);
            });
        });
        describe('7.10.2.2 Properties', function(){
            it('startPadding', function(){
                expect(recording.startPadding).toBeDefined();
            });
            it('endPadding', function(){
                expect(recording.endPadding).toBeDefined();
            });
            it('repeatDays', function(){
                expect(recording.repeatDays).toBeDefined();
            });
            it('name', function(){
                expect(recording.name).toBeDefined();
            });
            it('longName', function(){
                expect(recording.longName).toBeDefined();
            });
            it('description', function(){
                expect(recording.description).toBeDefined();
            });
            it('longDescription', function(){
                expect(recording.longDescription).toBeDefined();
            });
            it('startTime', function(){
                expect(recording.startTime).toBeDefined();
            });
            it('duration', function(){
                expect(recording.duration).toBeDefined();
            });
            it('channel', function(){
                expect(recording.channel).toBeDefined();
            });
            it('programmeID', function(){
                expect(recording.programmeID).toBeDefined();
            });
            it('programmeIDType', function(){
                expect(recording.programmeIDType).toBeDefined();
            });
            it('episode', function(){
                expect(recording.episode).toBeDefined();
            });
            it('totalEpisodes', function(){
                expect(recording.totalEpisodes).toBeDefined();
            });
            it('parentalRatings', function(){
                expect(recording.parentalRatings).toBeDefined();
            });
        });
    });
    //describe('7.10.3 The ScheduledRecordingCollection class');
    describe('7.10.4 Extension to application/oipfRecordingScheduler for control of  recordings', function () {
        describe('7.10.4.1 Properties', function(){
            it('recordings', function(){
                expect(record.recordings).toBeDefined();
            });
            it('discInfo', function(){
                expect(record.discInfo).toBeDefined();
            });
            it('onPVREvent', function(){
                expect(record.onPVREvent).toBeDefined();
            });
        });
        describe('7.10.4.2 Methods', function(){
            it('getRecording', function(){
                expect(record.getRecording).toBeDefined();
            });
            it('stop', function(){
                expect(record.stop).toBeDefined();
            });
            it('refresh', function(){
                expect(record.refresh).toBeDefined();
            });
        });
    });

    describe('7.10.5 The Recording class', function () {
        var recording;
        beforeEach(function () {
            recording = record.recordings;
        });
        describe('7.10.5.1 Constants', function(){
            it('RECORDING_UNREALIZED', function(){
                expect(recording.RECORDING_UNREALIZED).toBeDefined();
            });
            it('RECORDING_SCHEDULED', function(){
                expect(recording.RECORDING_SCHEDULED).toBeDefined();
            });
            it('RECORDING_DEL_SCHEDULED', function(){
                expect(recording.RECORDING_DEL_SCHEDULED).toBeDefined();
            });
            it('RECORDING_REC_PRESTART', function(){
                expect(recording.RECORDING_REC_PRESTART).toBeDefined();
            });
            it('RECORDING_REC_ACQUIRING_RESOURCES', function(){
                expect(recording.RECORDING_REC_ACQUIRING_RESOURCES).toBeDefined();
            });
            it('RECORDING_REC_STARTED', function(){
                expect(recording.RECORDING_REC_STARTED).toBeDefined();
            });
            it('RECORDING_REC_UPDATED', function(){
                expect(recording.RECORDING_REC_UPDATED).toBeDefined();
            });
            it('RECORDING_REC_COMPLETED', function(){
                expect(recording.RECORDING_REC_COMPLETED).toBeDefined();
            });
            it('RECORDING_REC_PARTIALLY_COMPLETED', function(){
                expect(recording.RECORDING_REC_PARTIALLY_COMPLETED).toBeDefined();
            });
            it('RECORDING_TS_ACQUIRING_RESOURCES', function(){
                expect(recording.RECORDING_TS_ACQUIRING_RESOURCES).toBeDefined();
            });
            it('RECORDING_TS_STARTED', function(){
                expect(recording.RECORDING_TS_STARTED).toBeDefined();
            });
            it('RECORDING_ERROR', function(){
                expect(recording.RECORDING_ERROR).toBeDefined();
            });

            it('ERROR_REC_RESOURCE_LIMITATION', function(){
                expect(recording.ERROR_REC_RESOURCE_LIMITATION).toBeDefined();
            });
            it('ERROR_INSUFFICIENT_STORAGE', function(){
                expect(recording.ERROR_INSUFFICIENT_STORAGE).toBeDefined();
            });
            it('ERROR_TUNER_CONFLICT', function(){
                expect(recording.ERROR_TUNER_CONFLICT).toBeDefined();
            });
            it('ERROR_REC_DRM_RESTRICTION', function(){
                expect(recording.ERROR_REC_DRM_RESTRICTION).toBeDefined();
            });
            it('ERROR_REC_UNKNOWN', function(){
                expect(recording.ERROR_REC_UNKNOWN).toBeDefined();
            });
            it('ERROR_TS_RESOURCE_LIMITATION', function(){
                expect(recording.ERROR_TS_RESOURCE_LIMITATION).toBeDefined();
            });
            it('ERROR_TS_DRM_RESTRICTION', function(){
                expect(recording.ERROR_TS_DRM_RESTRICTION).toBeDefined();
            });
            it('ERROR_TS_UNKNOWN', function(){
                expect(recording.ERROR_TS_UNKNOWN).toBeDefined();
            });
        });
        describe('7.10.5.2 Properties', function(){
            it('state', function(){
                expect(recording.state).toBeDefined();
            });
            it('error', function(){
                expect(recording.error).toBeDefined();
            });
            it('id', function(){
                expect(recording.id).toBeDefined();
            });
            it('isManual', function(){
                expect(recording.isManual).toBeDefined();
            });
            it('doNotDelete', function(){
                expect(recording.doNotDelete).toBeDefined();
            });
            it('saveDays', function(){
                expect(recording.saveDays).toBeDefined();
            });
            it('saveEpisodes', function(){
                expect(recording.saveEpisodes).toBeDefined();
            });
            it('blocked', function(){
                expect(recording.blocked).toBeDefined();
            });
            it('showType', function(){
                expect(recording.showType).toBeDefined();
            });
            it('subtitles', function(){
                expect(recording.subtitles).toBeDefined();
            });
            it('subtitleLanguages', function(){
                expect(recording.subtitleLanguages).toBeDefined();
            });
            it('isHD', function(){
                expect(recording.isHD).toBeDefined();
            });
            it('isWidescreen', function(){
                expect(recording.isWidescreen).toBeDefined();
            });
            it('audioType', function(){
                expect(recording.audioType).toBeDefined();
            });
            it('isMultilingual', function(){
                expect(recording.isMultilingual).toBeDefined();
            });
            it('audioLanguages', function(){
                expect(recording.audioLanguages).toBeDefined();
            });
            it('genres', function(){
                expect(recording.genres).toBeDefined();
            });
            it('recordingStartTime', function(){
                expect(recording.recordingStartTime).toBeDefined();
            });
            it('recordingDuration', function(){
                expect(recording.recordingDuration).toBeDefined();
            });
            it('bookmarks', function(){
                expect(recording.bookmarks).toBeDefined();
            });
            it('locked', function(){
                expect(recording.locked).toBeDefined();
            });
        });
    });
    //describe('7.10.6 The RecordingCollection class');
    //describe('7.10.7 The PVREvent class');
    describe('7.10.8 The Bookmark class', function(){
        var bookmark;
        beforeEach(function () {
            var recording = record.recordings.item(0);
            bookmark = recording.bookmarks.item(0);
        });
        describe('7.10.8.1 Properties', function(){
            it('time', function(){
                expect(bookmark.time).toBeDefined();
            });
            it('name', function(){
                expect(bookmark.name).toBeDefined();
            });
        });
    });
    describe('7.10.9 The BookmarkCollection class', function(){
        var bookmarks;
        beforeEach(function () {
            var recording = record.recordings.item(0);
            bookmarks = recording.bookmarks;
        });
        describe('7.10.9.1 Methods', function(){
            it('addBookmark', function(){
                expect(bookmarks.addBookmark).toBeDefined();
            });
            it('removeBookmark', function(){
                expect(bookmarks.removeBookmark).toBeDefined();
            });
        });
    });
    afterEach(function () {
        document.body.removeChild(record);
    });
});