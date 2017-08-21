describe('[DEVICE] Network Server Scenario', function() {
    "use strict";
    //***PreCondition:*** network is connected
    var dlna, dms, dmr;

    beforeEach(function () {
        dlna = oipfObjectFactory.createDlnaManagerObject();
        dms = dlna.dms;
        dmr = dlna.dmr;
    });

    it('check api : dlna, dms, dmr', function () {
        expect(dlna).toBeDefined();
        expect(dms).toBeDefined();
        expect(dmr).toBeDefined();
    });

    //***Test Scenario:***
    //1.	Check if network server is working
    //2.	Change network server name
    //3.	Network server turn on or turn off
    //4.	Check network server is turned on or turned off

    describe('network server control', function () {
        it('check net server work', function() {
            var isNetServerWork = dms.started;
            console.log('isNetServerWork : ' + isNetServerWork);
            expect(isNetServerWork).toBeDefined();
        });

        it('network server name change', function() {
            var networkServerName = dms.friendlyName;
            console.log(networkServerName);
            expect(networkServerName).toBeDefined();

            dms.friendlyName = 'new name';
            dmr.friendlyName = 'new name';
            expect(dms.friendlyName).toBe('new name');
            expect(dmr.friendlyName).toBe('new name');
        });

        it('network server on off', function() {
            //When network server turn on, both dms.start and dmr.start are should be called. <br />
            //When network server turn off, both dms.stop and dmr.stop are should be called.
            if (dms.started) {
                console.log('dms off');
                dms.stop();
                setTimeout(function() {
                    expect(dms.started).toBe(false);
                },5000);
            } else {
                console.log('dms on');
                dms.start();
                setTimeout(function() {
                    expect(dms.started).toBe(true);
                },5000);
            }

            if (dmr.started) {
                console.log('dmr off');
                dmr.stop();
                setTimeout(function() {
                    expect(dmr.started).toBe(false);
                },5000);
            } else {
                console.log('dmr on');
                dmr.start();
                setTimeout(function() {
                    expect(dmr.started).toBe(true);
                },5000);
            }
        }, 8000);
    });
});