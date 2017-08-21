describe('[SETTINGS] Display select', function() {
    "use strict";

    var configuration, localSystem, output, resolutions;
    beforeEach(function () {
        configuration = oipfObjectFactory.createHumaxConfigurationObject();
        localSystem = configuration.localSystem;
        output = localSystem.hmx_outputs[0];
        resolutions  = output.supportedResolutions;
    });

    it('check api : humax configuration, local system object', function () {
        expect(configuration).toBeDefined();
        expect(localSystem).toBeDefined();
        expect(output).toBeDefined();
        expect(output).toHaveProperties(['tvAspectRatio','videoDisplayFormat','supportedResolutions', 'curResolution']);
        expect(resolutions).toBeDefined();
    });

    //***Test Scenario: ***<br />
    //1.	Set display setting
    //2.	Check if display setting is done correctly

    it('display resolution list', function(done){
        expect(resolutions.length).toBeGreaterThan(0);
        console.log('output option : ' + localSystem.priorityOutputs);
        console.log("resolutions count : " + resolutions.length);
        console.log("current resolution : " + output.curResolution);
        jasmine.humax.eachItem(resolutions, function(item,i){
            console.log("RESOLUTION["+i+"]:"+item);
        });
        console.log("aspect ratio:" + output.tvAspectRatio);
        console.log("video display format :" + output.videoDisplayFormat);
        done();
    });

    it('set output option ', function(done){  //HDMI & Scart, HDMI Only
        var optionHDMISCART = 0, optionHDMI = 1;
        localSystem.priorityOutputs = optionHDMI;
        setTimeout(function() {
            expect(localSystem.priorityOutputs).toBe(optionHDMI);
            done();
        }, 5000);
    }, 6000);

    it('set aspect ratio ', function(done){  //"4:3", "16:9"
        output.tvAspectRatio = "4:3";
        expect(output.tvAspectRatio).toBe("4:3");

        output.tvAspectRatio = "16:9";
        expect(output.tvAspectRatio).toBe("16:9");
        done();
    });

    it('set resolution', function(done){
        var original = output.curResolution;
        output.curResolution = resolutions.item(0);
        expect(output.curResolution).toBe(resolutions.item(0));

        setTimeout(function(){
            output.curResolution = original;
        }, 5000);
        done();
    },6000);

    it('set video', function(done){  // output.videoDisplayFormat
        //```video format``` "Sqeeze", "CenterCutOut", "Auto", "Anamorphic"
        var original = output.videoDisplayFormat;
        output.videoDisplayFormat = "Auto";
        expect(output.videoDisplayFormat).toBe("Auto");

        setTimeout(function(){
            output.videoDisplayFormat = original;
            done();
        }, 5000);
    },6000);
});
