// OIPF-T1-R2_Specification-Volume-5-Declarative-Application-Environment-v2_3-2014-01-24.pdf
describe('7.9 Parental rating and parental control APIs', function() {
    "use strict";
    describe('7.9.1 The application/oipfParentalControlManager embedded object', function () {
        var pcmanager;
        beforeEach(function () {
            pcmanager = document.createElement('object');
            pcmanager.setAttribute("type", "application/oipfParentalControlManager");
            document.body.appendChild(pcmanager);
        });
        describe('7.9.1.1 Properties', function(){
            it('parentalRatingSchemes', function(){
                expect(pcmanager.parentalRatingSchemes).toBeDefined();
            });
            it('isPINEntryLocked', function(){
                expect(pcmanager.isPINEntryLocked).toBeDefined();
            });
        });
        describe('7.9.1.2 Methods', function(){
            it('setParentalControlStatus', function(){
                expect(pcmanager.setParentalControlStatus).toBeDefined();
            });
            it('getParentalControlStatus', function(){
                expect(pcmanager.getParentalControlStatus).toBeDefined();
            });
            it('getBlockUnrated', function(){
                expect(pcmanager.getBlockUnrated).toBeDefined();
            });
            it('setParentalControlPIN', function(){
                expect(pcmanager.setParentalControlPIN).toBeDefined();
            });
            it('unlockWithParentalControlPIN', function(){
                expect(pcmanager.unlockWithParentalControlPIN).toBeDefined();
            });
            it('verifyParentalControlPIN', function(){
                expect(pcmanager.verifyParentalControlPIN).toBeDefined();
            });
            it('setBlockUnrated', function(){
                expect(pcmanager.setBlockUnrated).toBeDefined();
            });
        });
        afterEach(function () {
            document.body.removeChild(pcmanager);
        });
    });
    describe('7.9.2 The ParentalRatingScheme class', function () {
        var pcmanager, prscheme ;
        beforeEach(function () {
            pcmanager = document.createElement('object');
            pcmanager.setAttribute("type", "application/oipfParentalControlManager");
            document.body.appendChild(pcmanager);

            prscheme = pcmanager.parentalRatingSchemes.item(0);
        });
        describe('7.9.2.1 Properties', function(){
            it('name', function(){
                expect(prscheme.name).toBeDefined();
            });
            it('threshold', function(){
                expect(prscheme.threshold).toBeDefined();
            });
        });
        describe('7.9.2.2 Methods', function(){
            it('indexOf', function(){
                expect(prscheme.indexOf).toBeDefined();
            });
            it('iconUri', function(){
                expect(prscheme.iconUri).toBeDefined();
            });
        });
        afterEach(function () {
            document.body.removeChild(pcmanager);
        });
    });
    describe('7.9.3 The ParentalRatingSchemeCollection class', function () {
        var pcmanager, prschemes ;
        beforeEach(function () {
            pcmanager = document.createElement('object');
            pcmanager.setAttribute("type", "application/oipfParentalControlManager");
            document.body.appendChild(pcmanager);

            prschemes = pcmanager.parentalRatingSchemes;
        });
        describe('7.9.3.1 Methods', function(){
            it('addParentalRatingScheme', function(){
                expect(prschemes.addParentalRatingScheme).toBeDefined();
            });
            it('getParentalRatingScheme', function(){
                expect(prschemes.getParentalRatingScheme).toBeDefined();
            });
        });
        afterEach(function () {
            document.body.removeChild(pcmanager);
        });
    });
    describe('7.9.3 The ParentalRatingSchemeCollection class', function () {
        var pcmanager, prschemes ;
        beforeEach(function () {
            pcmanager = document.createElement('object');
            pcmanager.setAttribute("type", "application/oipfParentalControlManager");
            document.body.appendChild(pcmanager);

            prschemes = pcmanager.parentalRatingSchemes;
        });
        describe('7.9.3.1 Methods', function(){
            it('addParentalRatingScheme', function(){
                expect(prschemes.addParentalRatingScheme).toBeDefined();
            });
            it('getParentalRatingScheme', function(){
                expect(prschemes.getParentalRatingScheme).toBeDefined();
            });
        });
        afterEach(function () {
            document.body.removeChild(pcmanager);
        });
    });
    describe('7.9.4 The ParentalRating class', function () {
        var recorder, parentalrating ;
        beforeEach(function () {
            recorder = document.createElement('object');
            recorder.setAttribute("type", "application/oipfRecordingScheduler");
            document.body.appendChild(recorder);

            parentalrating = recorder.createProgrammeObject().parentalRatings.item(0);
        });
        describe('7.9.4.1 Properties', function(){
            it('name', function(){
                expect(parentalrating.name).toBeDefined();
            });
            it('scheme', function(){
                expect(parentalrating.scheme).toBeDefined();
            });
            it('value', function(){
                expect(parentalrating.value).toBeDefined();
            });
            it('labels', function(){
                expect(parentalrating.labels).toBeDefined();
            });
            it('region', function(){
                expect(parentalrating.region).toBeDefined();
            });
        });
        afterEach(function () {
            document.body.removeChild(recorder);
        });
    });
    describe('7.9.5 The ParentalRatingCollection class', function () {
        var recorder, parentalratings ;
        beforeEach(function () {
            recorder = document.createElement('object');
            recorder.setAttribute("type", "application/oipfRecordingScheduler");
            document.body.appendChild(recorder);

            parentalratings = recorder.createProgrammeObject().parentalRatings;
        });
        describe('7.9.5.1 Methods', function(){
            it('name', function(){
                expect(parentalratings.addParentalRating).toBeDefined();
            });
        });
        afterEach(function () {
            document.body.removeChild(recorder);
        });
    });
});