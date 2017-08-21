var items = [];
var tc = null;

function testcase_list(type){
    this.type = type;
    this.count = 0;
    this.path = "";
    this.testcases = null;
}

function test_item(id, type, desc){
    this.tc_type = "jasmine";
    this.id = id;
    this.type = type;
    this.description = desc;
    this.items = [];
}

function search(item, id){
    if(item.id == id){
        return item;
    }else if (item.items.length == 0 ){
        return null;
    }
    else {
        for(var i=0; i<item.items.length; i++){

                if (item.items[i].id == id) {
                    return item.items[i];
                } else {
                    var ret = this.search(item.items[i], id);
                    if (ret != null) return ret;
                }

        }
        return null;
    }

    return null;
}

window.jasmine = jasmineRequire.core(jasmineRequire);
var env = jasmine.getEnv();
var jasmineInterface = jasmineRequire.interface(jasmine, env);

extend(window, jasmineInterface);

function extend(destination, source) {
    for (var property in source) destination[property] = source[property];
    return destination;
}

function makeList(suite)
{
    if(suite == null) return null;

    var children = suite.children;
    console.log(suite.id + "(" + children.length + ")");

    for(var i=0; i<children.length; i++)
    {
        var obj = children[i];
        if(obj.id.indexOf("suite") != -1)
        {
            if (items.length == 0){
                tc.count++;
                items.push(new test_item(obj.id, "suite", obj.description));
            }
            else{
                var m = search(items[0], obj.parentSuite.id);
                if(m != null){
                    console.log("add now suites");
                    tc.count++;
                    m.items.push(new test_item(obj.id, "suite", obj.description));
                }
            }
            makeList(obj);
        }
        else if(obj.id.indexOf("spec") != -1)
        {
           console.log("add spec");
            var m = search(items[0], suite.id);
            if (m != null) {
                console.log("add now spec");
                tc.count++;
                m.items.push(new test_item(obj.id, "spec", obj.description));
            }
        }
    }

    return null;
}

function sendMessage(p){
    parent.postMessage(p,"*");
}

function list() {
    tc = new testcase_list("jasmine");
    tc.testcases = items;

    var top_suite = env.topSuite();
    makeList(top_suite);
    sendMessage(tc);
};