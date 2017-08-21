var arr_result = [];
var arr_suite = [];

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
            arr_suite[obj.id] = obj.description;
            refreshUI(obj.id);
            printDescription(obj);
        }
        else if(obj.id.indexOf("spec") != -1)
        {
            arr_suite[obj.id] = obj.description;
            refreshUI(obj.id);
        }
    }
    return null;
}

function suiteReport()
{
    var reporter = jasmineInterface.jsApiReporter;

    env.addReporter(reporter);
    env.execute();
}

var btn = document.getElementById("start_btn");
if( btn )
{
    btn.onclick = function(){
        suiteReport();
    };
}

window.onload = function() {

    var top_suite = env.topSuite();

    printDescription(top_suite);


    var reporter = jasmineInterface.jsApiReporter;

    reporter.jasmineStarted = function(){

    };
    reporter.jasmineDone = function(runDetails){

    };
    reporter.suiteStarted = function(result)
    {
        arr_result[result.id] = "started";
        refreshUI(result.id);
    };
    reporter.suiteDone = function(result)
    {
        arr_result[result.id] = result.status;
        refreshUI(result.id);
    };
    reporter.specStarted = function(result)
    {
        arr_result[result.id] = "started";
        refreshUI(result.id);
    };
    reporter.specDone = function(result)
    {
        arr_result[result.id] = result.status;
        refreshUI(result.id);
    };
};
