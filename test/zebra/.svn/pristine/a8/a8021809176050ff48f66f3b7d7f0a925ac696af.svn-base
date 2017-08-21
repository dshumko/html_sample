var oipfobjectFactory = window.oipfObjectFactory;
var application = undefined;
var applicationManager = undefined;
var applicationPrivateData = undefined;
var keyset = undefined;
var widgetDescriptorCollection = undefined;

if( oipfobjectFactory !== undefined )
{
    try {
        applicationManager = oipfobjectFactory.createApplicationManagerObject();
    } catch (e)
    {
        console.error(e);
    }
}

module("ApplicationManager");

test("applicationManager", function() {
    try {
        ok(applicationManager !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("onLowMemory", function() {
    try {
        ok(applicationManager.onLowMemory !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

if(HBBTV_ON==0){
test("onApplicationLoaded", function() {
    try {
        ok(applicationManager.onApplicationLoaded !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("onApplicationUnloaded", function() {
    try {
        ok(applicationManager.onApplicationUnloaded !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});}

test("onApplicationLoadError", function() {
    try {
        ok(applicationManager.onApplicationLoadError !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

if(HBBTV_ON==0){
test("onWidgetInstallation", function() {
    try {
        ok(applicationManager.onWidgetInstallation !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("onWidgetUninstallation", function() {
    try {
        ok(applicationManager.onWidgetUninstallation !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("widgets", function() {
    try {
        ok((widgetDescriptorCollection = applicationManager.widgets) !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});}

if(HBBTV_ON==0){
test("getApplicationVisualizationMode()", function() {
    try {
        ok(applicationManager.getApplicationVisualizationMode !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});}

test("getOwnerApplication()", function() {
    try {
        ok(applicationManager.getOwnerApplication !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

if(HBBTV_ON==0){
test("getChildApplications()", function() {
    try {
        ok(applicationManager.getChildApplications !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("gc()", function() {
    try {
        ok(applicationManager.gc !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("installWidget()", function() {
    try {
        ok(applicationManager.installWidget !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("uninstallWidget()", function() {
    try {
        ok(applicationManager.uninstallWidget !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});}



if( undefined !== applicationManager )
{
    application = applicationManager.getOwnerApplication(window.document);
}
module("Application");

if(HBBTV_ON==0){
test("visible", function() {
    try {
        ok(application.visible !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("active", function() {
    try {
        ok(application.active !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("permissions", function() {
    try {
        ok(application.permissions !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("isPrimaryReceiver", function() {
    try {
        ok(application.isPrimaryReceiver !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("window", function() {
    try {
        ok(application.window !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});}

test("privateData", function() {
    try {
        ok((applicationPrivateData = application.privateData) !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("show()", function() {
    try {
        ok(application.show !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("hide()", function() {
    try {
        ok(application.hide !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

if(HBBTV_ON==0){
test("activateInput()", function() {
    try {
        ok(application.activateInput !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("deactivateInput()", function() {
    try {
        ok(application.deactivateInput !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});}

test("createApplication()", function() {
    try {
        ok(application.createApplication !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("destroyApplication()", function() {
    try {
        ok(application.destroyApplication !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

if(HBBTV_ON==0){
test("startWidget()", function() {
    try {
        ok(application.startWidget !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("stopWidget()", function() {
    try {
        ok(application.stopWidget !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});}


module("ApplicationPrivateData");
test("keyset", function() {
    try {
        ok((keyset = applicationPrivateData.keyset) !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("currentChannel", function() {
    try {
        ok(applicationPrivateData.currentChannel !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

if(HBBTV_ON==0){
test("wakeupApplication", function() {
    try {
        ok(applicationPrivateData.wakeupApplication !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("wakeupOITF", function() {
    try {
        ok(applicationPrivateData.wakeupOITF !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});}

test("getFreeMem()", function() {
    try {
        ok(applicationPrivateData.getFreeMem !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

if(HBBTV_ON==0){
test("prepareWakeupApplication()", function() {
    try {
        ok(applicationPrivateData.prepareWakeupApplication !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("prepareWakeupOITF()", function() {
    try {
        ok(applicationPrivateData.prepareWakeupOITF !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("clearWakeupToken()", function() {
    try {
        ok(applicationPrivateData.clearWakeupToken !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});}


module("Keyset");
test("value", function() {
    try {
        ok(keyset.value !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

if(HBBTV_ON==0){
test("otherKeys[]", function() {
    try {
        ok(keyset.otherKeys !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});}

test("maximumValue", function() {
    try {
        ok(keyset.maximumValue !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

if(HBBTV_ON==0){
test("maximumOtherKeys[]", function() {
    try {
        ok(keyset.maximumOtherKeys !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});}

test("setValue()", function() {
    try {
        ok(keyset.setValue !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

if(HBBTV_ON==0){
module("Widget");
test("localURI", function() {
    try {
        ok(widgetDescriptorCollection[0].localURI !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("defaultIcon", function() {
    try {
        ok(widgetDescriptorCollection[0].defaultIcon !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("customIcons", function() {
    try {
        ok(widgetDescriptorCollection[0].customIcons !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("running", function() {
    try {
        ok(widgetDescriptorCollection[0].running !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});


module("WidgetDescriptorCollection");
test("localURI", function() {
    try {
        ok(widgetDescriptorCollection !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});}
