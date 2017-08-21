describe('[RECORDING] Recording Detail info Scenario', function() {
    "use strict";
    //***PreCondition:***<br /> recording file should exist.
    var recordingScheduler,recordingList,currentRecording;
    beforeAll(function () {
        recordingScheduler = oipfObjectFactory.createRecordingSchedulerObject();
    });

    it('check api : recordings ', function(){
        expect(recordingScheduler).toBeDefined();
        expect(recordingScheduler).toHaveProperties([
            'recordings'
        ]);
    });

    describe('recording list', function() {
        it('check recording list', function() {
            expect(recordingScheduler.recordings).toBeDefined();
            recordingList = jasmine.humax.filter(recordingScheduler.recordings||[], function(recording){
                return !!recording.id;
            });
            expect(recordingList.length).toBeGreaterThan(0);
            currentRecording = recordingList[0];
        });
    });

    //***Test Scenario:***
    //1.	Display Recording detail information
    describe('recording detail info', function() {
       it('check recording detail info', function() {
           displayRecordingInfo(currentRecording);
           expect(true).toBeTruthy();
       });
    });

    function displayRecordingInfo(recording){
        var startTime = new Date(recording.startTime * 1000),
            endTime = new Date(startTime.getTime() + recording.recordingDuration * 1000),
        /*  OIPF 7.10.5 The Recording class
            0        The show is live.
            1        The show is a first-run show.
            2        The show is a rerun.   */
            isRecordingOnGoing = (recording.showType === 0),
            isNew = (recording.showType  === 1);

        console.log([
            'id : ' + recording.id,
            '- startTime : ' + startTime,
            '- endTime : ' + endTime,
            'name : ' + recording.name,
            'description : ' + recording.description,
            'longDescription : ' + recording.longDescription,
            'thumbnail : ' + recording.thumbnail,
            'episode : ' + recording.episode,
            'recordingDuration : ' + recording.recordingDuration,
            '- channelName : ' +  (recording.channel?recording.channel.name:""),
            '- channelNumber : ' + (recording.channel?recording.channel.majorChannel:""),
            '- channelThumbnailUrl : ' + (recording.channel?recording.channel.logoURL:""),
            'seriesID : ' + recording.seriesID,
            '- StorageId : ' + recording.discId,
            'isScrambled : ' + recording.isScrambled,
            'programmeID : ' + recording.programmeID,
            'lastPlayPosition : ' + recording.lastPlayPosition,
            'error : ' + recording.error,
            'isScheduledAsSeries : ' + recording.isScheduledAsSeries,
            '- isLocked : ' + recording.isManualLocked,
            '- SeasonNo : ' + recording.season,
            '- EpisodeNo : ' + recording.episode,
            'currentRecording - isNew : ' + isNew,
            'currentRecording - isRecordingOnGoing : ' + isRecordingOnGoing
        ].join('\n'));
    }
});