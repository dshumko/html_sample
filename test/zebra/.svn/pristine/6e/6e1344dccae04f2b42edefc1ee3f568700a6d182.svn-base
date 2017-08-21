describe('[DEVICE] cold boot', function() {
    "use strict";
//***PreCondition:*** This test code should run when cold boot
    var configuration, localSystem, coldboot;
    beforeEach(function () {
        configuration = oipfObjectFactory.createHumaxConfigurationObject();
        localSystem = configuration.localSystem;
        coldboot = localSystem.coldBootDone;
    });

    it('check api : humax configuration, local system object', function () {
        expect(configuration).toBeDefined();
        expect(localSystem).toBeDefined();
        expect(coldboot).toBeDefined();
    });

    //***Test Scenario:***
    //1.	Wait for cold boot done event from MW
    //2.	Get cold boot done event and finish test

    it('cold boot done ', function(done){
        //```Notes```  When cold boot is done, web app can start live service like channel tune. <br />
        // Before start live service, web app should wait until cold boot is done.
        if(coldboot.getColdBootDone()){
            done();
        } else {
            console.log("wait & check ColdBootDone... each 1 sec (interval)");
            var tick = 0;
            var bColdBootDone = false;
            var TIMEOUT = 120; //It depends on how long Coldboot task of MW takes. Default 120 secs.
            var timer = setInterval(function() {
                tick += 1;
                bColdBootDone = coldboot.getColdBootDone();
                console.log("checkColdBootDone... tick : " + tick);
                console.log("checkColdBootDone... bColdBootDone : " + bColdBootDone);
                if (bColdBootDone || tick >= TIMEOUT) {
                    clearTimeout(timer);
                    setTimeout(function() {
                        done();
                    }, 0);
                }
            }, 1000);
        }
    });

    //***Notes: *** <br />
    //    <font color=red>Web app must wait until get cold boot done by using getColdBootDone(). <br />
    //    After get cold boot done, web app can start live service.</font>
});
