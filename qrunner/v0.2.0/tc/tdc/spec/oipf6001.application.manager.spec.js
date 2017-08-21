describe('[APPLICATION]. application manager scenario', function() {
    "use strict";
    var appMgr = oipfObjectFactory.createApplicationManagerObject(),
        self = appMgr.getOwnerApplication(window.document);

    //***Test Scenario:***
    //1.	Get main application object
    //2.	Check the application's property

    it('check api : application manager / own application ', function(){
        expect(appMgr).toBeDefined();
        expect(self).toBeDefined();
        /*OIPF 7.2.2*/
        expect(self).toHaveProperties([
            'visible', 'active', 'isPrimaryReceiver','privateData']);
        expect(self).toHaveProperties([
            'onApplicationActivated', 'onApplicationDeactivated',
            'onApplicationShown', 'onApplicationHidden',
            'onApplicationPrimaryReceiver','onApplicationNotPrimaryReceiver',
            'onApplicationTopmost','onApplicationNotTopmost',
            'onApplicationDestroyRequest','onApplicationHibernateRequest',
            'onKeyPress','onKeyUp','onKeyDown']);
        expect(self).toHaveProperties([
            'show', 'hide',
            'activateInput', 'deactivateInput',
            'createApplication', 'destroyApplication']);
    });
});