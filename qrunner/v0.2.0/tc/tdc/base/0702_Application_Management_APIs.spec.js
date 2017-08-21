// OIPF-T1-R2_Specification-Volume-5-Declarative-Application-Environment-v2_1-2011-06-21.pdf
describe('7.2 Application Management APIs', function() {
    "use strict";
    describe('7.2.1 The application/oipfApplicationManager embedded object', function(){
        var applicationManager;
        beforeEach(function() {
            applicationManager = document.createElement('object');
            applicationManager.setAttribute("type", "application/oipfApplicationManager");
            document.body.appendChild(applicationManager);
        });
        it("7.2.1.1 Constants", function(){
            expect(applicationManager.WIDGET_INSTALLATION_STARTED).toBe(0);
            expect(applicationManager.WIDGET_INSTALLATION_COMPLETED).toBe(1);
            expect(applicationManager.WIDGET_INSTALLATION_FAILED).toBe(2);
            expect(applicationManager.WIDGET_UNINSTALLATION_STARTED).toBe(3);
            expect(applicationManager.WIDGET_UNINSTALLATION_COMPLETED).toBe(4);
            expect(applicationManager.WIDGET_UNINSTALLATION_FAILED).toBe(5);
            expect(applicationManager.WIDGET_ERROR_STORAGE_AREA_FULL).toBe(10);
            expect(applicationManager.WIDGET_ERROR_DOWNLOAD).toBe(11);
            expect(applicationManager.WIDGET_ERROR_INVALID_ZIP_ARCHIVE).toBe(12);
            expect(applicationManager.WIDGET_ERROR_INVALID_SIGNATURE).toBe(13);
            expect(applicationManager.WIDGET_ERROR_GENERIC).toBe(14);
            expect(applicationManager.WIDGET_ERROR_SIZE_EXCEEDED).toBe(15);
            //expect(applicationManager.WIDGET_ERROR_PERMISSION_DENIED).toBe(16);  // v2.3
        });

        describe("7.2.1.2 Properties", function(){
            it("onLowMemory", function(){
                expect(applicationManager.onLowMemory).toBeDefined();
            });
            it("onApplicationLoaded", function(){
                expect(applicationManager.onApplicationLoaded).toBeDefined();
            });
            it("onApplicationUnloaded", function(){
                expect(applicationManager.onApplicationUnloaded).toBeDefined();
            });
            it("onApplicationLoadError", function(){
                expect(applicationManager.onApplicationLoadError).toBeDefined();
            });
            it("onWidgetInstallation", function(){
                expect(applicationManager.onWidgetInstallation).toBeDefined();
            });
            it("onWidgetUninstallation", function(){
                expect(applicationManager.onWidgetUninstallation).toBeDefined();
            });
            it("widgets", function(){
                expect(applicationManager.widgets).toBeDefined();
            });
        });

        describe("7.2.1.3 Methods", function(){
            it("getApplicationVisualizationMode", function(){
                expect(applicationManager.getApplicationVisualizationMode).toBeDefined();
            });
            it("getOwnerApplication", function(){
                expect(applicationManager.getOwnerApplication).toBeDefined();
            });
            it("getChildApplications", function(){
                expect(applicationManager.getChildApplications).toBeDefined();
            });
            it("gc", function(){
                expect(applicationManager.gc).toBeDefined();
            });
            it("installWidget", function(){
                expect(applicationManager.installWidget).toBeDefined();
            });
            it("uninstallWidget", function(){
                expect(applicationManager.uninstallWidget).toBeDefined();
            });
        });

        describe("7.2.1.4 Events", function(){
            it("onLowMemory", function(){
                expect(applicationManager.onLowMemory).toBeDefined();
            });
            it("onApplicationLoaded", function(){
                expect(applicationManager.onApplicationLoaded).toBeDefined();
            });
            it("onApplicationUnloaded", function(){
                expect(applicationManager.onApplicationUnloaded).toBeDefined();
            });
            it("onApplicationLoadError", function(){
                expect(applicationManager.onApplicationLoadError).toBeDefined();
            });
            it("onWidgetInstallation", function(){
                expect(applicationManager.onWidgetInstallation).toBeDefined();
            });
            it("onWidgetUninstallation", function(){
                expect(applicationManager.onWidgetUninstallation).toBeDefined();
            });
        });
        afterEach(function() {
            document.body.removeChild(applicationManager);
        });
    });

    describe('7.2.2 The Application class', function(){
        var app;
        beforeEach(function(){
            var applicationManager = window.oipfObjectFactory.createApplicationManagerObject();
            app = applicationManager.getOwnerApplication(window.document);
        });
        describe('7.2.2.1 Properties', function(){
            it("visible", function(){
                expect(app.visible).toBeDefined();
            });
            it("active", function(){
                expect(app.active).toBeDefined();
            });
            it("permissions", function(){
                //expect(app.permissions).toBeDefined();
                expect(app.permissions).toBeUndefined();
            });
            it("isPrimaryReceiver", function(){
                expect(app.isPrimaryReceiver).toBeDefined();
            });
            //it("window", function(){
            //    expect(app.window).toBeDefined();
            //});
            it("privateData", function(){
                expect(app.privateData).toBeDefined();
            });
            it("onApplicationActivated", function(){
                expect(app.onApplicationActivated).toBeDefined();
            });
            it("onApplicationDeactivated", function(){
                expect(app.onApplicationDeactivated).toBeDefined();
            });
            it("onApplicationShown", function(){
                expect(app.onApplicationShown).toBeDefined();
            });
            it("onApplicationHidden", function(){
                expect(app.onApplicationHidden).toBeDefined();
            });
            it("onApplicationPrimaryReceiver", function(){
                expect(app.onApplicationPrimaryReceiver).toBeDefined();
            });
            it("onApplicationNotPrimaryReceiver", function(){
                expect(app.onApplicationNotPrimaryReceiver).toBeDefined();
            });
            it("onApplicationTopmost", function(){
                expect(app.onApplicationTopmost).toBeDefined();
            });
            it("onApplicationNotTopmost", function(){
                expect(app.onApplicationNotTopmost).toBeDefined();
            });
            it("onApplicationDestroyRequest", function(){
                expect(app.onApplicationDestroyRequest).toBeDefined();
            });
            it("onApplicationHibernateRequest", function(){
                expect(app.onApplicationHibernateRequest).toBeDefined();
            });
            it("onKeyPress", function(){
                expect(app.onKeyPress).toBeDefined();
            });
            it("onKeyUp", function(){
                expect(app.onKeyUp).toBeDefined();
            });
            it("onKeyDown", function(){
                expect(app.onKeyDown).toBeDefined();
            });
        });
        describe('7.2.2.2 Methods', function(){
            it('show', function(){
                expect(app.show).toBeDefined();
            });
            it('hide', function(){
                expect(app.show).toBeDefined();
            });
            it('activateInput', function(){
                expect(app.activateInput).toBeDefined();
            });
            it('deactivateInput', function(){
                expect(app.deactivateInput).toBeDefined();
            });
            it('createApplication', function(){
                expect(app.createApplication).toBeDefined();
            });
            it('destroyApplication', function(){
                expect(app.destroyApplication).toBeDefined();
            });
            it('startWidget', function(){
                expect(app.startWidget).toBeDefined();
            });
            it('stopWidget', function(){
                expect(app.stopWidget).toBeDefined();
            });
        });
    });
    describe('7.2.3 The ApplicationCollection class', function(){});
    describe('7.2.4 The ApplicationPrivateData class', function(){
        var privateData;
        beforeEach(function(){
            var applicationManager = window.oipfObjectFactory.createApplicationManagerObject();
            var app = applicationManager.getOwnerApplication(window.document);
            privateData = app.privateData;
        });
        describe('7.2.4.1 Properties', function(){
            it('keyset', function(){
                expect(privateData.keyset).toBeDefined();
            });
            it('currentChannel', function(){
                expect(privateData.currentChannel).toBeDefined();
            });
            it('wakeupApplication', function(){
                expect(privateData.wakeupApplication).toBeDefined();
            });
            it('wakeupOITF', function(){
                expect(privateData.wakeupOITF).toBeDefined();
            });
        });
        describe('7.2.4.2 Methods', function(){
            it('getFreeMem', function(){
                expect(privateData.getFreeMem).toBeDefined();
            });
            it('prepareWakeupApplication', function(){
                expect(privateData.prepareWakeupApplication).toBeDefined();
            });
            it('prepareWakeupOITF', function(){
                expect(privateData.prepareWakeupOITF).toBeDefined();
            });
            it('clearWakeupToken', function(){
                expect(privateData.clearWakeupToken).toBeDefined();
            });
        });
    });
    describe('7.2.5 The Keyset class', function(){
        /**
         *  The Keyset object permits applications to define which key events they request to receive. There are two means of
         *  defining this. Common key events are represented by constants defined in this class which are combined in a bit-wise
         *  mask to identify a set of key events. Less common key events are not included in one of the defined constants and form
         *  part of an array.
         *  The supported key events indicated through the capability mechanism in section 9.3 SHALL be the same as the
         *  maximum set of key events available to the browser as indicated through this object
         *  The default set of key events available to broadcast-related applications shall be none. The default set of key events
         *  available to broadcast-independent or service provider related applications which do not call Keyset.setValue()
         *  SHALL be all those indicated by the constants in this class which are supported by the OITF excluding those indicated
         *  by OTHER. */
        var keyset;
        beforeEach(function(){
            var applicationManager = window.oipfObjectFactory.createApplicationManagerObject();
            var app = applicationManager.getOwnerApplication(window.document);
            var privateData = app.privateData;
            keyset = privateData.keyset;
        });
        describe('7.2.5.1 Constants', function(){
            it('RED 0x1', function(){
                expect(keyset.RED).toBe(0x1);
            });
            it('GREEN 0x2', function(){
                expect(keyset.GREEN).toBe(0x2);
            });
            it('YELLOW 0x4', function(){
                expect(keyset.YELLOW).toBe(0x4);
            });
            it('BLUE 0x8', function(){
                expect(keyset.BLUE).toBe(0x8);
            });
            it('NAVIGATION 0x10', function(){
                expect(keyset.NAVIGATION).toBe(0x10);
            });
            it('VCR 0x20', function(){
                expect(keyset.VCR).toBe(0x20);
            });
            it('SCROLL 0x40', function(){
                expect(keyset.SCROLL).toBe(0x40);
            });
            it('INFO 0x80', function(){
                expect(keyset.INFO).toBe(0x80);
            });
            it('NUMERIC 0x100', function(){
                expect(keyset.NUMERIC).toBe(0x100);
            });
            it('ALPHA 0x200', function(){
                expect(keyset.ALPHA).toBe(0x200);
            });
            it('OTHER 0x400', function(){
                expect(keyset.OTHER).toBe(0x400);
            });
        });
        describe('7.2.5.2 Properties', function(){
            it('value', function(){
                expect(keyset.value).toBeDefined();
            });
            it('otherKeys', function(){
                //expect(keyset.otherKeys).toBeDefined();
                expect(keyset.otherKeys).toBeUndefined();
            });
            it('maximumValue', function(){
                expect(keyset.maximumValue).toBeDefined();
            });
            it('maximumOtherKeys', function(){
                //expect(keyset.maximumOtherKeys).toBeDefined();
                expect(keyset.maximumOtherKeys).toBeUndefined();
            });
            it('supportsPointer', function(){
                expect(keyset.supportsPointer).toBeDefined();
            });
        });
        describe('7.2.5.3 Methods', function(){
            it('setValue', function(){
                expect(keyset.setValue).toBeDefined();
            });
            it('getKeyIcon', function(){
                expect(keyset.getKeyIcon).toBeDefined();
            });
            it('getKeyLabel', function(){
                //expect(keyset.getKeyLabel).toBeDefined();
                expect(keyset.getKeyLabel).toBeUndefined();
            });
        });
    });
    describe('7.2.6 New DOM events for application support', function(){
        /**
         * New events have been created that are raised on the Application objects in the application tree. These are normal
         * events, not cross-application events, and are used to indicate changes in the state of an application. */
        /**
         * ApplicationActivated
         * ApplicationDeactivated
         * ApplicationShown
         * ApplicationHidden
         * ApplicationPrimaryReceiver
         * ApplicationNotPrimaryReceiver
         * ApplicationTopmost
         * ApplicationNotTopmost
         * ApplicationDestroyRequest
         * ApplicationHibernateRequest  */
    });

    describe('7.2.7 Examples (informative)', function(){
        var child;
        beforeEach(function(){
            //var self = applicationManager.getOwnerApplication(window.document);
            var applicationManager = window.oipfObjectFactory.createApplicationManagerObject();
            var self = applicationManager.getOwnerApplication(window.document);
            child = self.createApplication("http://www.google.com", true);
        });
        describe('7.2.7.2 Creating a new application', function(){
            it('create child', function(){
                expect(child).toBeDefined();
            });
        });
    });

    describe('7.2.8 Widget APIs', function(){
        var child;
        beforeEach(function(){
            //var self = applicationManager.getOwnerApplication(window.document);
            var applicationManager = window.oipfObjectFactory.createApplicationManagerObject();
            var self = applicationManager.getOwnerApplication(window.document);
            child = self.createApplication("http://www.google.com", false);
        });
        describe('7.2.8.1 The WidgetDescriptor class', function(){
            describe('7.2.8.1.1 Properties', function(){
                it('localURI', function(){
                    expect(child.localURI).toBeDefined();
                });
                it('downloadURI', function(){
                    expect(child.downloadURI).toBeDefined();
                });
                it('defaultIcon', function(){
                    expect(child.defaultIcon).toBeDefined();
                });
                it('customIcons', function(){
                    expect(child.customIcons).toBeDefined();
                });
                it('running', function(){
                    expect(child.running).toBeDefined();
                });
            });
        });
    });
});