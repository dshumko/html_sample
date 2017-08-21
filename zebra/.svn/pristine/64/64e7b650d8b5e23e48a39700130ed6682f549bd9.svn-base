// OIPF-T1-R2_Specification-Volume-5-Declarative-Application-Environment-v2_3-2014-01-24.pdf
describe('7.16 Shared Utility classes and features', function() {
    "use strict";
    //describe('7.16.1 The StringCollection class', function(){});
    describe('7.16.2 The Programme class', function () {
        var record, programme;
        beforeEach(function () {
            record = document.createElement('object');
            record.setAttribute("type", "application/oipfRecordingScheduler");
            document.body.appendChild(record);

            programme = record.createProgrammObject();
        });
        describe('7.16.2.1 Constants', function(){
            it('ID_TVA_CRID', function(){
                expect(programme.ID_TVA_CRID).toBe(0);
            });
            it('ID_DVB_EVENT', function(){
                expect(programme.ID_TVA_CRID).toBe(1);
            });
            it('ID_TVA_GROUP_CRID', function(){
                expect(programme.ID_TVA_CRID).toBe(2);
            });
        });
        describe('7.16.2.2 Properties', function(){
            it('name', function(){
                expect(programme.name).toBeDefined();
            });
            it('longName', function(){
                expect(programme.longName).toBeDefined();
            });
            it('description', function(){
                expect(programme.description).toBeDefined();
            });
            it('longDescription', function(){
                expect(programme.longDescription).toBeDefined();
            });
            it('startTime', function(){
                expect(programme.startTime).toBeDefined();
            });
            it('duration', function(){
                expect(programme.duration).toBeDefined();
            });
            it('channelID', function(){
                expect(programme.channelID).toBeDefined();
            });
            it('episode', function(){
                expect(programme.episode).toBeDefined();
            });
            it('totalEpisodes', function(){
                expect(programme.totalEpisodes).toBeDefined();
            });
            it('programmeID', function(){
                expect(programme.programmeID).toBeDefined();
            });
            it('programmeIDType', function(){
                expect(programme.programmeIDType).toBeDefined();
            });
            it('IMI', function(){
                expect(programme.IMI).toBeDefined();
            });
            it('groupCRIDs', function(){
                expect(programme.groupCRIDs).toBeDefined();
            });
            it('parentalRating', function(){
                expect(programme.parentalRating).toBeDefined();
            });
            describe('7.16.2.3 Metadata extensions to Programme', function() {
                describe('7.16.2.3.1 Properties', function(){
                    it('channel', function () {
                        expect(programme.channel).toBeDefined();
                    });
                    it('blocked', function () {
                        expect(programme.blocked).toBeDefined();
                    });
                    it('showType', function () {
                        expect(programme.showType).toBeDefined();
                    });
                    it('subtitles', function () {
                        expect(programme.subtitles).toBeDefined();
                    });
                    it('isHD', function () {
                        expect(programme.isHD).toBeDefined();
                    });
                    it('audioType', function () {
                        expect(programme.audioType).toBeDefined();
                    });
                    it('isMultilingual', function () {
                        expect(programme.isMultilingual).toBeDefined();
                    });
                    it('genre', function () {
                        expect(programme.genre).toBeDefined();
                    });
                    it('hasRecording', function () {
                        expect(programme.hasRecording).toBeDefined();
                    });
                    it('audioLanguages', function () {
                        expect(programme.audioLanguages).toBeDefined();
                    });
                    it('subtitleLanguages', function () {
                        expect(programme.subtitleLanguages).toBeDefined();
                    });
                    it('locked', function () {
                        expect(programme.locked).toBeDefined();
                    });
                });
                describe('7.16.2.3.2 Methods', function(){
                    it('getField', function () {
                        expect(programme.getField).toBeDefined();
                    });
                });
            });
            describe('7.16.2.4 DVB-SI extensions to Programme', function(){
                it('getSIDescriptors', function () {
                    expect(programme.getSIDescriptors).toBeDefined();
                });
            });
            describe('7.16.2.5 Recording extensions to Programme', function(){
                it('recording', function () {
                    expect(programme.recording).toBeDefined();
                });
            });
        });
        afterEach(function(){
            document.body.removeChild(record);
        });
    });
    //describe('7.16.3 The ProgrammeCollection class');
    describe('7.16.4 The DiscInfo class', function(){
        var downloadManager, discinfo;
        beforeEach(function () {
            downloadManager = document.createElement('object');
            downloadManager.setAttribute("type", "application/oipfDownloadManager");
            document.body.appendChild(downloadManager);

            discinfo = downloadManager.discInfo;
        });
        describe('7.16.4.1 Properties', function(){
            it('free', function () {
                expect(discinfo.free).toBeDefined();
            });
            it('total', function () {
                expect(discinfo.total).toBeDefined();
            });
            it('reserved', function () {
                expect(discinfo.reserved).toBeDefined();
            });
        });
        afterEach(function(){
            document.body.removeChild(downloadManager);
        });
    });
    describe('7.16.5 Extensions for playback of selected media components', function() {
        var avcontrol;
        beforeEach(function () {
            avcontrol = document.createElement('object');
            avcontrol.setAttribute("type", "video/mpeg");
            document.body.appendChild(avcontrol);
        });
        describe('7.16.5.1 Media playback extensions', function(){
            describe('7.16.5.1.1 Constants', function(){
                it('COMPONENT_TYPE_VIDEO', function(){
                    expect(avcontrol.COMPONENT_TYPE_VIDEO).toBe(0);
                });
                it('COMPONENT_TYPE_AUDIO', function(){
                    expect(avcontrol.COMPONENT_TYPE_AUDIO).toBe(1);
                });
                it('COMPONENT_TYPE_SUBTITLE', function(){
                    expect(avcontrol.COMPONENT_TYPE_SUBTITLE).toBe(2);
                });
            });
            describe('7.16.5.1.2 Properties', function(){
                it('onSelectedComponentChanged', function(){
                    expect(avcontrol.onSelectedComponentChanged).toBeDefined();
                });
            });
            describe('7.16.5.1.3 Methods', function(){
                it('getComponents', function(){
                    expect(avcontrol.getComponents).toBeDefined();
                });
                it('getCurrentActiveComponents', function(){
                    expect(avcontrol.getCurrentActiveComponents).toBeDefined();
                });
                it('selectComponent', function(){
                    expect(avcontrol.selectComponent).toBeDefined();
                });
                it('unselectComponent', function(){
                    expect(avcontrol.unselectComponent).toBeDefined();
                });
                it('selectComponent', function(){
                    expect(avcontrol.selectComponent).toBeDefined();
                });
                it('unselectComponent', function(){
                    expect(avcontrol.unselectComponent).toBeDefined();
                });
            });
        });

        describe('7.16.5.2 The AVComponent class', function(){
            var component;
            beforeEach(function(){
                component = avcontrol.getComponents(avcontrol.COMPONENT_TYPE_VIDEO);
            });
            describe('7.16.5.2.1 Properties', function(){
                it('componentTag', function(){
                    expect(component.componentTag).toBeDefined();
                });
                it('pid', function(){
                    expect(component.pid).toBeDefined();
                });
                it('type', function(){
                    expect(component.type).toBeDefined();
                });
                it('encoding', function(){
                    expect(component.encoding).toBeDefined();
                });
                it('encrypted', function(){
                    expect(component.encrypted).toBeDefined();
                });
            });
        });

        describe('7.16.5.3 The AVVideoComponent class', function(){
            var component;
            beforeEach(function(){
                component = avcontrol.getComponents(avcontrol.COMPONENT_TYPE_VIDEO).item(0);
            });
            describe('7.16.5.3.1 Properties', function(){
                it('aspectRatio', function(){
                    expect(component.componentTag).toBeDefined();
                });
            });
        });

        describe('7.16.5.4 The AVAudioComponent class', function(){
            var component;
            beforeEach(function(){
                component = avcontrol.getComponents(avcontrol.COMPONENT_TYPE_AUDIO).item(0);
            });
            describe('7.16.5.4.1 Properties', function(){
                it('language', function(){
                    expect(component.language).toBeDefined();
                });
                it('audioDescription', function(){
                    expect(component.audioDescription).toBeDefined();
                });
                it('audioChannels', function(){
                    expect(component.audioChannels).toBeDefined();
                });
            });
        });

        describe('7.16.5.5 The AVSubtitleComponent class', function(){
            var component;
            beforeEach(function(){
                component = avcontrol.getComponents(avcontrol.COMPONENT_TYPE_SUBTITLE).item(0);
            });
            describe('7.16.5.5.1 Properties', function(){
                it('language', function(){
                    expect(component.language).toBeDefined();
                });
                it('hearingImpaired', function(){
                    expect(component.hearingImpaired).toBeDefined();
                });
            });
        });

        //describe('7.16.5.6 The AVComponentCollection class', function(){});

        afterEach(function(){
            document.body.removeChild(avcontrol);
        });
    });
});