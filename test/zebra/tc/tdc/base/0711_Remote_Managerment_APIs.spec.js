// OIPF-T1-R2_Specification-Volume-5-Declarative-Application-Environment-v2_3-2014-01-24.pdf
describe('7.11 Remote Management APIs', function() {
    "use strict";
    describe('7.11.1 The application/oipfRemoteManagement embedded object', function () {
        var remoteMgr;
        beforeEach(function () {
            remoteMgr = document.createElement('object');
            remoteMgr.setAttribute("type", "application/oipfRemoteManagement");
            document.body.appendChild(remoteMgr);
        });
        describe('7.11.1.1 Properties', function(){
            it('vendorName', function(){
                expect(remoteMgr.vendorName).toBeDefined();
            });
            it('modelName', function(){
                expect(remoteMgr.modelName).toBeDefined();
            });
            it('softwareVersion', function(){
                expect(remoteMgr.softwareVersion).toBeDefined();
            });
            it('hardwareVersion', function(){
                expect(remoteMgr.hardwareVersion).toBeDefined();
            });
        });
        describe('7.11.1.2 Methods', function(){
            it('getParameter', function(){
                expect(remoteMgr.getParameter).toBeDefined();
            });
            it('setParameter', function(){
                expect(remoteMgr.setParameter).toBeDefined();
            });
            it('triggerSoftwareUpdate', function(){
                expect(remoteMgr.triggerSoftwareUpdate).toBeDefined();
            });
        });
        afterEach(function () {
            document.body.removeChild(remoteMgr);
        });
    });
});