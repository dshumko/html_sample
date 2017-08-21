
window.jasmine = jasmineRequire.core(jasmineRequire);
var env = jasmine.getEnv();
var jasmineInterface = jasmineRequire.interface(jasmine, env);

extend(window, jasmineInterface);

function extend(destination, source) {
    for (var property in source) destination[property] = source[property];
    return destination;
}

function printDescription(suite)
{
    if(suite == null) return null;

    var children = suite.children;
    for(var i=0; i<children.length; i++)
    {
        var obj = children[i];
        if(obj.id.indexOf("suite") != -1)
        {
            console.log(obj.description);
            printDescription(obj);
        }
        else if(obj.id.indexOf("spec") != -1)
        {
            console.log(obj.description);
        }
    }
    return null;
}

window.onload = function() {

    var top_suite = env.topSuite();

    printDescription(top_suite);


     var reporter = jasmineInterface.jsApiReporter;

     reporter.jasmineStarted = function(){
     console.log("jasmineStarted");
     };
     reporter.jasmineDone = function(runDetails){
     console.log("jasmineDone");
     };
     reporter.suiteStarted = function(retult){
     console.log("suiteStarted");
     };
     reporter.suiteDone = function(result){
     console.log("suiteDone");
     };
     reporter.specStarted = function(result){
     console.log("specStarted");
     };
     reporter.specDone = function(result){
     console.log("specDone");
    };

    env.addReporter(reporter);
    env.execute();
};
