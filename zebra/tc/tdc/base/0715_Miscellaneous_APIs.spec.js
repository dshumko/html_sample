// OIPF-T1-R2_Specification-Volume-5-Declarative-Application-Environment-v2_3-2014-01-24.pdf
describe('7.15 Miscellaneous APIs', function() {
    "use strict";
    describe('7.15.1 The application/oipfMDTF embedded object', function () {
        var mdtf;
        beforeEach(function () {
            mdtf= document.createElement('object');
            mdtf.setAttribute("type", "application/oipfMDTF");
            document.body.appendChild(mdtf);
        });
        describe('7.15.1.1 Properties', function(){
            it('onFLUTEListenerResult', function(){
                expect(mdtf.onFLUTEListenerResult).toBeDefined();
            });
        });
        describe('7.15.1.2 Methods', function(){
            it('addFLUTEListener', function(){
                expect(mdtf.addFLUTEListener).toBeDefined();
            });
            it('addFLUTEListenerTags', function(){
                expect(mdtf.addFLUTEListenerTags).toBeDefined();
            });
            it('getFLUTEListeners', function(){
                expect(mdtf.getFLUTEListeners).toBeDefined();
            });
            it('getTags', function(){
                expect(mdtf.getTags).toBeDefined();
            });
            it('removeFLUTEListener', function(){
                expect(mdtf.removeFLUTEListener).toBeDefined();
            });
        });
        afterEach(function () {
            document.body.removeChild(mdtf);
        });
    });

    describe('7.15.2 The application/oipfStatusView embedded object', function () {
        var statusview;
        beforeEach(function () {
            statusview= document.createElement('object');
            statusview.setAttribute("type", "application/oipfStatusView");
            /*<object id=¡±d1¡± type=¡±application/oipfStatusView¡± width=¡±200¡± height=¡±100¡±>
             <param name=¡±state¡± value=¡±list_of_recent_downloads¡±/>
             <param name=¡±nritems¡± value=¡±2¡±/>
             <param name=¡±background-color¡± value=¡±black¡±/>
             <param name=¡°font-size¡± value=¡°16px¡±/>
             </object>*/
            document.body.appendChild(statusview);
        });
        describe('7.15.2.1 Overview of download status', function(){
            describe('7.15.2.1.1 Methods', function(){
                it('getMinimumItemWidth', function(){
                    expect(statusview.getMinimumItemWidth).toBeDefined();
                });
                it('getMinimumItemHeight', function(){
                    expect(statusview.getMinimumItemHeight).toBeDefined();
                });
            });
        });

        afterEach(function () {
            document.body.removeChild(statusview);
        });
    });

    describe('7.15.3 The application/oipfCapabilities embedded object', function () {
        var capabilities;
        beforeEach(function () {
            capabilities= document.createElement('object');
            capabilities.setAttribute("type", "application/oipfCapabilities.");
            document.body.appendChild(capabilities);
        });
        describe('7.15.3.1 Properties', function(){
            it('xmlCapabilities', function(){
                expect(capabilities.xmlCapabilities).toBeDefined();
            });
            it('extraSDVideoDecodes', function(){
                expect(capabilities.extraSDVideoDecodes).toBeDefined();
            });
            it('extraHDVideoDecodes', function(){
                expect(capabilities.extraHDVideoDecodes).toBeDefined();
            });
        });
        describe('7.15.3.2 Methods', function(){
            it('hasCapability', function(){
                expect(capabilities.hasCapability).toBeDefined();
            });
        });
        afterEach(function () {
            document.body.removeChild(capabilities);
        });
    });

    describe('7.15.4 The Navigator class', function () {
        describe('7.15.4.1 Properties', function(){
            it('appName', function(){
                expect(navigator.appName).toBeDefined();
            });
            it('appVersion', function(){
                expect(navigator.appVersion).toBeDefined();
            });
        });
    });

    describe('7.15.5 Debug print API', function () {
        it('debug', function(){
            expect(window.debug).toBeDefined();
        });
    });
});