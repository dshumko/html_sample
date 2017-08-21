describe('[SETTINGS] language  select', function() {
    "use strict";

    var configuration, languageBackup={};
    beforeAll(function () {
        configuration = oipfObjectFactory.createHumaxConfigurationObject().configuration;

        languageBackup.menu = configuration.preferredMenuLanguage;
        languageBackup.audio = configuration.preferredAudioLanguage;
        languageBackup.subtitle = configuration.preferredSubtitleLanguage;
    });

    afterAll(function(){
        configuration.preferredMenuLanguage = languageBackup.menu;
        configuration.preferredAudioLanguage = languageBackup.audio;
        configuration.preferredSubtitleLanguage = languageBackup.subtitle;
    });

    it('check api : humax configuration', function () {
        expect(configuration).toBeDefined();
        expect(configuration).toHaveProperties(['preferredMenuLanguage','preferredAudioLanguage','preferredSubtitleLanguage']);
    });

    describe('check "set eng" ', function(){
        beforeAll(function(done){
            configuration.preferredMenuLanguage = "eng";
            configuration.preferredAudioLanguage = "eng";
            configuration.preferredSubtitleLanguage = "eng";

            setTimeout(done, 1000);
        });
        it('check "eng" ', function(){
            expect(configuration.preferredMenuLanguage).toBe('eng');
            expect(configuration.preferredAudioLanguage).toBe('eng');
            expect(configuration.preferredSubtitleLanguage).toBe('eng');
        });
    });


    //***Test Scenario:*** <br />
    //1.	Set language setting
    //2.	Check if language setting is done correctly

    describe('check  "change to deu" ', function(){
        beforeAll(function(done){
            configuration.preferredMenuLanguage = "ger";
            configuration.preferredAudioLanguage = "ger";
            configuration.preferredSubtitleLanguage = "ger";

            setTimeout(done, 1000);
        });
        it('check "deu"', function(){
            expect(configuration.preferredMenuLanguage).toBe('ger');
            expect(configuration.preferredAudioLanguage).toBe('ger');
            expect(configuration.preferredSubtitleLanguage).toBe('ger');
        });
    });
});
