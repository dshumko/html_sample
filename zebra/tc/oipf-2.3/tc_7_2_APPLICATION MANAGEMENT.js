var oipfobjectFactory = window.oipfObjectFactory;
var application = undefined;
var applicationManager = undefined;


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

test("WIDGET_INSTALLATION_STARTED", function() {
    try {
        ok(applicationManager.WIDGET_INSTALLATION_STARTED !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

test("WIDGET_INSTALLATION_COMPLETED", function() {
    try {
        ok(applicationManager.WIDGET_INSTALLATION_COMPLETED !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

test("WIDGET_INSTALLATION_FAILED", function() {
    try {
        ok(applicationManager.WIDGET_INSTALLATION_FAILED !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

test("WIDGET_UNINSTALLATION_STARTED", function() {
    try {
        ok(applicationManager.WIDGET_UNINSTALLATION_STARTED !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

test("WIDGET_UNINSTALLATION_COMPLETED", function() {
    try {
        ok(applicationManager.WIDGET_UNINSTALLATION_COMPLETED !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

test("WIDGET_UNINSTALLATION_FAILED", function() {
    try {
        ok(applicationManager.WIDGET_UNINSTALLATION_FAILED !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

test("WIDGET_ERROR_STORAGE_AREA_FULL", function() {
    try {
        ok(applicationManager.WIDGET_ERROR_STORAGE_AREA_FULL !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

test("WIDGET_ERROR_DOWNLOAD", function() {
    try {
        ok(applicationManager.WIDGET_ERROR_DOWNLOAD !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

test("WIDGET_ERROR_INVALID_ZIP_ARCHIVE", function() {
    try {
        ok(applicationManager.WIDGET_ERROR_INVALID_ZIP_ARCHIVE !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

test("WIDGET_ERROR_INVALID_SIGNATURE", function() {
    try {
        ok(applicationManager.WIDGET_ERROR_INVALID_SIGNATURE !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

test("WIDGET_ERROR_GENERIC", function() {
    try {
        ok(applicationManager.WIDGET_ERROR_GENERIC !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

test("WIDGET_ERROR_SIZE_EXCEEDED", function() {
    try {
        ok(applicationManager.WIDGET_ERROR_SIZE_EXCEEDED !== undefined, "is exists");
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
});

test("onApplicationLoadError", function() {
    try {
        ok(applicationManager.onApplicationLoadError !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

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

//module("ApplicationManager ");
test("getApplicationVisualizationMode", function() {
    try {
        ok(applicationManager.getApplicationVisualizationMode !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

test("getOwnerApplication", function() {
    try {
        ok(applicationManager.getOwnerApplication !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

test("getChildApplications", function() {
    try {
        ok(applicationManager.getChildApplications !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

test("gc", function() {
    try {
        ok(applicationManager.gc !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

test("installWidget", function() {
    try {
        ok(applicationManager.installWidget !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

module("ApplicationManager ");

test("uninstallWidget", function() {
    try {
        ok(applicationManager.uninstallWidget !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

test("getWidgetInstallProgress", function() {
    try {
        ok(applicationManager.getWidgetInstallProgress !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

test("addOIPFApplication", function() {
    try {
        ok(applicationManager.addOIPFApplication !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

test("removeOIPFApplication", function() {
    try {
        ok(applicationManager.removeOIPFApplication !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

test("removeAllOIPFApplications", function() {
    try {
        ok(applicationManager.removeAllOIPFApplications !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

if( undefined !== applicationManager )
{
    application = applicationManager.getOwnerApplication(window.document);
}

module("Application");

test("application", function() {
    try {
        ok(application !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

test("createApplication", function() {
    try {
        ok(application.createApplication !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

test("destroyApplication", function() {
    try {
        ok(application.destroyApplication !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

test("startWidget", function() {
    try {
        ok(application.startWidget !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

test("stopWidget", function() {
    try {
        ok(application.stopWidget !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

test("show", function() {
    try {
        ok(application.show !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

test("hide", function() {
    try {
        ok(application.hide !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

test("activateInput", function() {
    try {
        ok(application.activateInput !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

//module("Application ");
test("_requestActviateInput", function() {
    try {
        ok(application._requestActviateInput !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

test("deactivateInput", function() {
    try {
        ok(application.deactivateInput !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

test("_requestDeactivateInput", function() {
    try {
        ok(application._requestDeactivateInput !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

test("onApplicationActivated", function() {
    try {
        ok(application.onApplicationActivated !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

test("onApplicationDeactivate", function() {
    try {
        ok(application.onApplicationDeactivate !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

test("onApplicationShown", function() {
    try {
        ok(application.onApplicationShown !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

test("onApplicationHidden", function() {
    try {
        ok(application.onApplicationHidden !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

test("onApplicationPrimaryReceiver", function() {
    try {
        ok(application.onApplicationPrimaryReceiver !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

test("onApplicationNotPrimaryReceiver", function() {
    try {
        ok(application.onApplicationNotPrimaryReceiver !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

test("onApplicationTopmost", function() {
    try {
        ok(application.onApplicationTopmost !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

module("Application ");
test("onApplicationNotTopmost", function() {
    try {
        ok(application.onApplicationNotTopmost !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

test("onApplicationDestroyRequest", function() {
    try {
        ok(application.onApplicationDestroyRequest !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

test("onApplicationHibernateRequest", function() {
    try {
        ok(application.onApplicationHibernateRequest !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

test("onKeyPress", function() {
    try {
        ok(application.onKeyPress !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

test("onKeyUp", function() {
    try {
        ok(application.onKeyUp !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

test("onKeyDown", function() {
    try {
        ok(application.onKeyDown !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

