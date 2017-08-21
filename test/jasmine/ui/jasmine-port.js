/**
 * Created by kskim2 on 2016-01-22.
 */

window.jasmine = jasmineRequire.core(jasmineRequire);
var env = jasmine.getEnv();
var jasmineInterface = jasmineRequire.interface(jasmine, env);

extend(window, jasmineInterface);

function extend(destination, source) {
    for (var property in source) destination[property] = source[property];
    return destination;
}

function TCInfo()
{
    var arr_tc_obj = [];
    var level = 0;
    var j = 0;

    function get_tc_arr(suite, arr)
    {
        if(suite == null) return null;

        level += 1;

        var children = suite.children;
        for(var i=0; i<children.length; i++)
        {
            var obj = children[i];

            var tcobj = new Object();
            tcobj.id = obj.id;
            tcobj.level = level;
            tcobj.type = "spec";
            tcobj.description = obj.description;
            tcobj.status = obj.status;
            arr[j++] = tcobj;

            if(obj.id.indexOf("suite") != -1)
            {
                tcobj.type = "suite";
                get_tc_arr(obj, arr);
            }
        }

        level -= 1;
        return null;
    };

    this.getAll = function()
    {
        return arr_tc_obj;
    };
}

window.onload = function() {

    var top_suite = env.topSuite();

    get_tc_arr(top_suite, arr_tc_obj);

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
