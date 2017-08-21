describe('[SETTINGS] subtitle font select', function() {
    "use strict";

    var configuration;
    beforeEach(function () {
        configuration = oipfObjectFactory.createHumaxConfigurationObject().configuration;
    });

    it('check api : humax configuration', function () {
        expect(configuration).toBeDefined();
    });

    it('display subtitle font', function(done){
        var fontType =  configuration.subtitleFontType;
        console.log("print : " + fontType);
        /*expect(fontType).toBeDefined();*/
        displayFontType(fontType);
        done();
    });

    //***Test Scenario:***
    //1.	Display current subtitle font type setting
    //2.	Change subtitle font type setting

    it('change font type', function(done){  // 0 or 1
        var originalType = configuration.subtitleFontType,
            newType = getOtherFontType(originalType);

        displayFontType(configuration.subtitleFontType);
        configuration.subtitleFontType = newType;
        expect(configuration.subtitleFontType).toBe(newType);
        displayFontType(configuration.subtitleFontType);

        configuration.subtitleFontType = originalType;
        done();
    });

    function getOtherFontType(type){
        return type === jasmine.humax.subtitle.fontType.fixed ?
            jasmine.humax.subtitle.fontType.variable :
            jasmine.humax.subtitle.fontType.fixed;
    }

    function displayFontType(fontType) {
        console.log("subtitle font is " + fontType === jasmine.humax.subtitle.fontType.fixed ? 'fixed' : 'variable');  // fixed or variable
    }
});
