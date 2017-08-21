var application = undefined, child = undefined;
var applicationManager = undefined;
var applicationPrivateData = undefined;
var keyset = undefined;

var appMgrobject = document.createElement("OBJECT");
appMgrobject.setAttribute("id", "appMgr");
appMgrobject.setAttribute("type", "application/oipfApplicationManager");
document.body.appendChild(appMgrobject);

/*
    ApplicationManager - getOwnerApplication, onLowMemory, onApplicationLoadError
 */
module("ApplicationManager");
test("applicationManager - by object tag", function() {
    try {
        applicationManager = document.getElementById("appMgr");
        ok(applicationManager !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

test("applicationManager - by ObjectFactory", function() {
    try {
        applicationManager = oipfObjectFactory.createApplicationManagerObject();
        ok(applicationManager !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

test("getOwnerApplication", function(){
    try{
        var self = applicationManager.getOwnerApplication(document);
        ok(self!==null, "work out well");
    } catch (e) {
        ok(false, "doesn't work out");
    }
});

// how to invoke lowmemory/applicationloaderror here?
test("onLowMemory", function(){
    try{
        applicationManager.onLowMemory = function() {
           ok(self!==null, "work out well");
        };
        
        ok(true, "is exists");
    } catch (e) {
        ok(false, "doesn't work out");
    }
});

test("onApplicationLoadError - typecheck", function(){
    try{
        applicationManager.onApplicationLoadError = function() {
           ok(self!==null, "work out well");
        };
        
        ok(true, "is exists");
    } catch (e) {
        ok(false, "doesn't work out");
    }
});

/* On BI Application, ApplicationLoadError event isn't sent to parent Application.
     So, this TC succeeds at BR Application but fails at BI Application.
*/
asyncTest("onApplicationLoadError - invoke", function(){
    try{
        var timerid = setTimeout(function(){
            QUnit.start();
            applicationManager.onApplicationLoadError = null;
            ok(false, "doesn't work out");
        },5000);
        
        applicationManager.onApplicationLoadError = function(appl){
            clearTimeout(timerid);
            QUnit.start();
            applicationManager.onApplicationLoadError = null;
            ok(true, "work out well");
        };
        
        var self = applicationManager.getOwnerApplication(document);
        var child = self.createApplication("http://10.0.12.34/notfound", false);
    } catch (e) {
        ok(false, "doesn't work out");
    }
});

/* DOM 2 Event - LowMemory , ApplicationLoadError */
test("DOM2Event Regist - LowMemory", function(){
    try{
        applicationManager.addEventListener("LowMemory", function(evt) {
           ok(true, "work out well");
        }, false);
        
        ok(true, "work out well");
    } catch (e) {
        ok(false, "doesn't work out");
    }
});

test("DOM2Event Regist - ApplicationLoadError", function(){
    try{
        applicationManager.addEventListener("ApplicationLoadError", function(evt) {
           ok(true, "work out well");
        }, false);
        
        ok(true, "work out well");
    } catch (e) {
        ok(false, "doesn't work out");
    }
});

asyncTest("DOM2Event invoke - ApplicationLoadError", function(){
    try{
        var timerid = undefined;
        var errorhandler = function(evt) {
           clearTimeout(timerid);
           QUnit.start();
           applicationManager.removeEventListener("ApplicationLoadError", errorhandler);
           ok(true, "work out well");
        };

        timerid = setTimeout(function(){
            QUnit.start();
            applicationManager.removeEventListener("ApplicationLoadError", errorhandler);
            ok(false, "doesn't work out");
        },5000);
       
        applicationManager.addEventListener("ApplicationLoadError", errorhandler, false);
       
        var self = applicationManager.getOwnerApplication(document);
        var child = self.createApplication("http://10.0.12.34/notfound", false);
    } catch (e) {
        ok(false, "doesn't work out");
    }
});


/*
   Application - privateData, createApplication, destroyApplication, show, hide 
 */
module("Application");
test("createApplication", function(){
    try{
        if(application==undefined)
           application = applicationManager.getOwnerApplication(document);
/* When BR application calls 'createApplication', the original application will be stopped at the time of new application's start. */
        //child = application.createApplication("http://www.google.com", false);
        //QRunner.view.console.log("typeof child : " + typeof(child));
        //ok(child !== null && typeof(child) == "object", "work out well");
        ok(application.createApplication!== undefined, "work out well");
    } catch (e) {
        ok(false, "doesn't work out");
    }
});

test("destroyApplication", function(){
    try{
        if(application==undefined)
           application = applicationManager.getOwnerApplication(document);
/* When BR application calls 'createApplication', the original application will be stopped at the time of new application's start. 
     So, child.destroyApplication effects that whole application's destroy. 
*/
        //if(child == undefined)
        //   child = application.createApplication("http://www.google.com", false);
        //child.destroyApplication();
        //ok(true, "work out well");
        ok(application.destroyApplication!== undefined, "work out well");
    } catch (e) {
        ok(false, "doesn't work out");
    }
});


test("hide", function(){
    try{
        if(application==undefined)
           application = applicationManager.getOwnerApplication(document);
        application.hide();
        ok(application.hide !== undefined, "work out well");        
    } catch (e) {
        ok(false, "doesn't work out");
    }
});

test("show", function(){
    try{
        if(application==undefined)
           application = applicationManager.getOwnerApplication(document);
        application.show();
        ok(application.show !== undefined, "work out well");
    } catch (e) {
        ok(false, "doesn't work out");
    }
});


/*
   keyset, currentChannel, getFreeMem 
 */
module("ApplicationPrivateData");
test("ApplicationPrivateData", function(){
    try{
        var self = applicationManager.getOwnerApplication(document);
        var privateData = self.privateData;
        ok(privateData !== null, "is exists");
    } catch (e) {
        ok(false, "doesn't work out");
    }
});

test("keyset", function(){
    try{
        var self = applicationManager.getOwnerApplication(document);
        var privateData = self.privateData;
        var keyset = privateData.keyset;
        ok(keyset !== null, "is exists");
    } catch (e) {
        ok(false, "doesn't work out");
    }
});
test("currentChannel", function(){
    try{
        var self = applicationManager.getOwnerApplication(document);
        var privateData = self.privateData;
        var currentChannel = privateData.currentChannel;
        ok(currentChannel !== null && typeof(currentChannel) == "object", "is exists");
    } catch (e) {
        ok(false, "doesn't work out");
    }
});

test("getFreeMem", function(){
    try{
        var self = applicationManager.getOwnerApplication(document);
        var privateData = self.privateData;
        var mem = privateData.getFreeMem();
        ok(mem !== undefined, "work out well");
    } catch (e) {
        ok(false, "doesn't work out");
    }
});

/*
   value, maximumValue, supportsPointer, setValue, getKeyIcon
 */
module("KeySet");
test("value", function(){
    try{
        var self = applicationManager.getOwnerApplication(document);
        var keyset = self.privateData.keyset;

        ok(keyset.value != undefined, "is exists");
    } catch (e) {
        ok(false, "doesn't work out");
    }
});

test("maximumValue", function(){
    try{
        var self = applicationManager.getOwnerApplication(document);
        var keyset = self.privateData.keyset;

        ok(keyset.maximumValue != undefined, "is exists");
    } catch (e) {
        ok(false, "doesn't work out");
    }
});

test("supportsPointer", function(){
    try{
        var self = applicationManager.getOwnerApplication(document);
        var keyset = self.privateData.keyset;

        ok(keyset.supportsPointer != undefined, "is exists");
    } catch (e) {
        ok(false, "doesn't work out");
    }
});


asyncTest("setValue", function(){
    try{        
        var self = applicationManager.getOwnerApplication(document);
        var keyset = self.privateData.keyset;
        var origin_val = keyset.value;
        var consumed = false;
        var keyhandler = function (evt) {
            if(evt.keyCode == KeyEvent.VK_ENTER)
               consumed = true;
            evt.preventDefault();
        };
        keyset.setValue(keyset.RED);

        // when press OK key in 2sec, it must not to be sent to web.  
        document.addEventListener("keydown", keyhandler);
        

        var timerid = setTimeout(function(){
            QUnit.start();
            keyset.setValue(origin_val);
            document.removeEventListener("keydown", keyhandler);
            if(consumed == true)
               ok(false, "doesn't work out");
            else
               ok(true, "work out well");
        },2000);

    } catch (e) {
        ok(false, "doesn't work out");
    }
});

test("getKeyIcon", function(){
    try{
        var self = applicationManager.getOwnerApplication(document);
        var keyset = self.privateData.keyset;
        var icon = keyset.getKeyIcon(KeyEvent.VK_A);
        // icon shell be null if the key has no icon. 
        ok(true, "work out well");
    } catch (e) {
        ok(false, "doesn't work out");
    }
});

