var client_name = "client";
var server_name = "server";
var ip = null;
var cc = null;

function includeJs(jsFilePath) {
        var js = document.createElement("script");

            js.type = "text/javascript";
                js.src = jsFilePath;

                    document.body.appendChild(js);
}
includeJs("./tc/module/cobra/cobraclient_debug.js");
includeJs("./tc/module/cobra/stub.js");


function ip_adr(){
    var ip = prompt("Please type ip address : ");

    if(ip == null)
        alert("Cancled... ");
    else
        alert("ip address is : " + ip);

    return(ip);
}



module("Connect");
test("Connect_test", function() {
		try {
		    var ip = ip_adr();
                    cc = CobraFactory.getCobraClient(client_name);
                    //var tmp = cc.comm.connect("http://10.0.14.169:8083/sync", "ws://10.0.14.169:8083/async");
                    var tmp = cc.comm.connect("http://" + ip + ":8083/sync", "ws://" + ip + ":8083/async"); // ST test
                    //var tmp = cc.comm.connect("http://" + ip + ":8080/sync", "ws://" + ip + ":8080/async"); // BRCM test
                    ok( tmp , "Connection Test Ok"); 
                } catch(e) {
                    ok(false, e);
                }
                });

module("Properties");
test("MinusNumer", function() {
		try {
                    var contact = new Contact(client_name);
                    contact.age = -10;
                    x = contact.age;
                ok( x === -10 , "Minus Number Test Ok"); 
                } catch(e) {
		ok(false, e);
		}
		});
test("PlusNumer", function() {
		try {
                    var contact = new Contact(client_name);
                    contact.age = 10;
                    x = contact.age;
                ok( x === 10 , "Plus Number Test Ok"); 
                } catch(e) {
		ok(false, e);
		}
		});
test("Minus RealNumber", function() {
		try {
                    var contact = new Contact(client_name);
                    contact.age = -10.9999;
                    x = contact.age;
                ok( x === -10.9999 , "Minus Real Number Test Ok"); 
                } catch(e) {
		ok(false, e);
		}
		});
test("Plus RealNumber", function() {
		try {
                    var contact = new Contact(client_name);
                    contact.age = 10.57;
                    x = contact.age;
                ok( x === 10.57 , "Plus Real Number Test Ok"); 
                } catch(e) {
		ok(false, e);
		}
		});
test("Boolean", function() {
		try {
                    var contact = new Contact(client_name);
                    contact.single = false;
                    x = contact.single;
                ok( x === false , "Boolean Test Ok"); 
                } catch(e) {
		ok(false, e);
		}
		});
test("String", function() {
		try {
                    var contact = new Contact(client_name);
                    contact.phone = "skchoi2";
                    x = contact.phone;
                ok( x === "skchoi2" , "String Test Ok"); 
                } catch(e) {
		ok(false, e);
		}
		});
test("WrongDataType", function() {
		try {
                    var contact = new Contact(client_name);
                    contact.phone = -100;
                    x = contact.phone;
                ok( x !== -100 , "WrongDataType Test Ok"); 
                } catch(e) {
		ok(false, e);
		}
		});
test("100Kbyte String", function() {
		try {
		    var string;
		    for( i=0; i<1024; i++)
                    {
                        string += "Hello everyone.this is 2015.Hello everyone. this is 2015.Hello everyone.this is 2015.Hello everyone";  // 100kbstring
                    }
                    var contact = new Contact(client_name);
                    contact.phone = string;
                    x = contact.phone;
                ok( x === string , "100Kbyte String Test Ok"); 
                } catch(e) {
		ok(false, e);
		}
		});



module("Method");
test("MultiParams", function() {
		try {
                    var address = new Address(client_name);
                    var test = address.setAllData("skchoi2","humax");
                    x = address.name;
                    y = address.city;
                ok( x === "skchoi2" && y === "humax" , "MultiParameters Test Ok"); 
                } catch(e) {
		ok(false, e);
		}
		});
test("MinusNumber Return", function() {
		try {
                    var contact = new Contact(client_name);
                    var address = new Address(client_name);
                    var test = contact.setAllData("skchoi2","1234", -123456789, true, address);
                    z = contact.age;
                ok( z === -123456789 , "MinusNumber Return Value Test Ok"); 
                } catch(e) {
		ok(false, e);
		}
		});
test("Plus RealNumber Return", function() {
		try {
                    var contact = new Contact(client_name);
                    var address = new Address(client_name);
                    var test = contact.setAllData("skchoi2","1234", 123456789.876, true, address);
                    z = contact.age;
                ok( z === 123456789.876 , "Plus RealNumber Return Value Test Ok"); 
                } catch(e) {
		ok(false, e);
		}
		});
test("Minus RealNumber Return", function() {
		try {
                    var contact = new Contact(client_name);
                    var address = new Address(client_name);
                    var test = contact.setAllData("skchoi2","1234", -123456789.876, true, address);
                    z = contact.age;
                ok( z === -123456789.876 , "Minus RealNumber Return Value Test Ok"); 
                } catch(e) {
		ok(false, e);
		}
		});
test("BigNumber Return", function() {
		try {
                    var contact = new Contact(client_name);
                    var address = new Address(client_name);
                    var test = contact.setAllData("skchoi2","1234", 12345678912345, true, address);
                    z = contact.age;
                ok( z === 12345678912345, "Big Number Return Value Test Ok"); 
                } catch(e) {
		ok(false, e);
		}
		});
test("Boolean Return", function() {
		try {
                    var contact = new Contact(client_name);
                    var address = new Address(client_name);
                    var test = contact.setAllData("skchoi2","1234", -123456789, true, address);
                    z = contact.single;
                ok( z === true , "Boolean Return Value Test Ok"); 
                } catch(e) {
		ok(false, e);
		}
		});
test("String Return", function() {
		try {
                    var contact = new Contact(client_name);
                    var address = new Address(client_name);
                    var test = contact.setAllData("skchoi2","1234", -123456789, true, address);
                    x = contact.name;
                ok( x === "skchoi2" , "String Return Value Test Ok"); 
                } catch(e) {
		ok(false, e);
		}
		});
test("Object Return", function() {
		try {
                    var contact = new Contact(client_name);
                    var address = new Address(client_name);
                    var test = contact.setAllData("skchoi2","1234", -123456789, true, address);
                    address.name = "Test";
                    l = contact.address;
                    w = l.name;
                ok( w === "Test" , "Object Return Value Test Ok"); 
                } catch(e) {
		ok(false, e);
		}
		});
test("ObjectList Return", function() {
		try {
                    var contactcollection = new ContactCollection(client_name);
                    var ccol = contactcollection.length;

                    if( ccol == 0 )
                        ok( true , "ObjectList Return Value Test Ok"); 
                } catch(e) {
		ok(false, e);
		}
		});
             

module("Event");
asyncTest("RegisterEvent", function() {
		try {
                var timerid = setTimeout( function() {
                QUnit.start();
                ok(false, "RegisterEvent Test fail");
                },8000);
                var book = new ContactBook(client_name);
                event_test = function(a,b,c,d,e,f,g,h) {
                        if( f == "hello" ){
                            clearTimeout(timerid);
                            QUnit.start();
                            ok( true , "Register Callback Test Ok"); 
                            book.regist_onAdded(null);
                        }
                };
                book.regist_onAdded(event_test);
                } catch(e) {
		ok(false, e);
                }
		});
asyncTest("UnRegisterEvent", function() {
		try {
                var timerid = setTimeout( function() {
                QUnit.start();
                ok(true, "UnRegisterEvent Test Ok");
                }, 8000);
                var book = new ContactBook(client_name);
                event_test = function(a,b,c,d,e,f,g,h) {
                        if( f == "hello" ){
                            clearTimeout(timerid);
                            QUnit.start();
                            ok( false , "UnRegister Callback Test Fail"); 
                        }
                };
                book.regist_onAdded(event_test);
                book.regist_onAdded(null);
                } catch(e) {
		ok(false, e);
                }
	        });
asyncTest("MinusNumber ParamData", function() {
		try {
                var timerid = setTimeout( function() {
                QUnit.start();
                ok(false, "MinusNumber ParamData Test fail");
                }, 8000);
                var book = new ContactBook(client_name);
                event_test = function(a,b,c,d,e,f,g,h) {
                        if( a == -10 ){
                            clearTimeout(timerid);
                            QUnit.start();
                            ok( true , "MinusNumber ParamData Test Ok"); 
                            book.regist_onAdded(null);
                        }
                };
                book.regist_onAdded(event_test);
                } catch(e) {
		ok(false, e);
                }
		});
asyncTest("Plus RealNumber ParamData", function() {
		try {
                var timerid = setTimeout( function() {
                QUnit.start();
                ok(false, "Plus RealNumber ParamData Test fail");
                }, 8000);
                var book = new ContactBook(client_name);
                event_test = function(a,b,c,d,e,f,g,h) {
                        if( c == 123.456 ){
                            clearTimeout(timerid);
                            QUnit.start();
                            ok( true , "Plus RealNumber ParamData Test Ok"); 
                            book.regist_onAdded(null);
                        }
                };
                book.regist_onAdded(event_test);
                } catch(e) {
		ok(false, e);
                }
		});
asyncTest("Minus RealNumber ParamData", function() {
		try {
                var timerid = setTimeout( function() {
                QUnit.start();
                ok(false, "Minus RealNumber ParamData Test fail");
                }, 8000);
                var book = new ContactBook(client_name);
                event_test = function(a,b,c,d,e,f,g,h) {
                        if( b == -111.222 ){
                            clearTimeout(timerid);
                            QUnit.start();
                            ok( true , "Minus RealNumber ParamData Test Ok"); 
                            book.regist_onAdded(null);
                        }
                };
                book.regist_onAdded(event_test);
                } catch(e) {
		ok(false, e);
                }
		});
asyncTest("BigNumber ParamData", function() {
		try {
                var timerid = setTimeout( function() {
                QUnit.start();
                ok(false, "BigNumber ParamData Test fail");
                }, 8000);
                var book = new ContactBook(client_name);
                event_test = function(a,b,c,d,e,f,g,h) {
                        if( d == 1234567891234 ){
                            clearTimeout(timerid);
                            QUnit.start();
                            ok( true , "BigNumber ParamData Test Ok"); 
                            book.regist_onAdded(null);
                        }
                };
                book.regist_onAdded(event_test);
                } catch(e) {
		ok(false, e);
                }
		});
asyncTest("Boolean ParamData", function() {
		try {
                var timerid = setTimeout( function() {
                QUnit.start();
                ok(false, "Boolean ParamData Test fail");
                }, 8000);
                var book = new ContactBook(client_name);
                event_test = function(a,b,c,d,e,f,g,h) {
                        if( e == false ){
                            clearTimeout(timerid);
                            QUnit.start();
                            ok( true , "Boolean ParamData Test Ok"); 
                            book.regist_onAdded(null);
                        }
                };
                book.regist_onAdded(event_test);
                } catch(e) {
		ok(false, e);
                }
		});
asyncTest("String ParamData", function() {
		try {
                var timerid = setTimeout( function() {
                QUnit.start();
                ok(false, "String ParamData Test fail");
                }, 8000);
                var book = new ContactBook(client_name);
                event_test = function(a,b,c,d,e,f,g,h) {
                        if( f == "hello" ){
                            clearTimeout(timerid);
                            QUnit.start();
                            ok( true , "String ParamData Test Ok"); 
                            book.regist_onAdded(null);
                        }
                };
                book.regist_onAdded(event_test);
                } catch(e) {
		ok(false, e);
                }
		});
asyncTest("Object ParamData", function() {
		try {
                var timerid = setTimeout( function() {
                QUnit.start();
                ok(false, "Object ParamData Test fail");
                }, 8000);
                var book = new ContactBook(client_name);
                event_test = function(a,b,c,d,e,f,g,h) {
                        book.regist_onAdded(null);
                        g.name = "skchoi2";
                        if( g.name == "skchoi2" ){
                            clearTimeout(timerid);
                            QUnit.start();
                            ok( true , "Object ParamData Test Ok"); 
                        }
                };
                book.regist_onAdded(event_test);
                } catch(e) {
		ok(false, e);
                }
		});
asyncTest("ObjectList ParamData", function() {
		try {
                var timerid = setTimeout( function() {
                QUnit.start();
                ok(false, "ObjectList ParamData Test fail");
                }, 8000);
                var book = new ContactBook(client_name);
                var length = book.getContacts.length;
                event_test = function(a,b,c,d,e,f,g,h) {
                        if( length == h.length ){
                            clearTimeout(timerid);
                            QUnit.start();
                            ok( true , "ObjectList ParamData Test Ok"); 
                            book.regist_onAdded(null);
                        }
                };
                book.regist_onAdded(event_test);
                } catch(e) {
		ok(false, e);
                }
		});

module("Loop");
test("LoopTest", function() {
		try {
		    var string;
		    for( i=0; i<1024; i++)
                    {
                        string += "Hello everyone.this is 2015.Hello everyone. this is 2015.Hello everyone.this is 2015.Hello everyone";  // 100kbstring
                    }
                    var contact = new Contact(client_name);
                    for( i=0; i<100; i++)
                    {   
                    	contact.phone = string;
                    	x = contact.phone;
                    }
                ok( x === contact.phone , "Loop Test Ok"); 
                } catch(e) {
		ok(false, e);
		}
		});
test("New & Delete", function() {
		try {
		    for( i=0; i<100; i++)
                    {
                        var address = new Address(client_name);
                        address = null;
                        if( address == null || address == undefined )
                            continue;
                        else
                        {
		            ok(false, "Delete Test Fail");
                            break;
                        }
                    }
                            
                ok( true  , "New & Delete Test Ok"); 
                } catch(e) {
		ok(false, e);
		}
		});
test("Delete", function() {
		try {
		    for( i=0; i<2; i++)
                    {
                        var address = new Address(client_name);
                        //address.name = "test";
                        delete address;
                        //var x = address.name; 

                    }
                            
                ok( true  , "New & Delete Test Ok"); 
                } catch(e) {
		ok(false, e);
		}
		});

/*
test("EventTest", function() {
		try {
                        var book = new ContactBook(client_name);
		    for( i=0; i<100; i++)
                    {
                        book.run();
                    }
                            
                ok( true  , "Event 100times Test Ok"); 
                } catch(e) {
		ok(false, e);
		}
		});
*/

module("Disconnect");
test("DisConnect_test", function() {
		try {
                    //var cc = CobraFactory.getCobraClient(client_name);
                    //var tmp = cc.comm.disconnect("http://10.0.14.169:8083/sync", "ws://10.0.14.169:8083/async");
                    //var tmp = cc.comm.disconnect("http://" + ip + ":8083/sync", "ws://" + ip + ":8083/async");
                    var tmp = cc.comm.disconnect();
                    ok( tmp , "DisConnection Test Ok"); 
                } catch(e) {
                    ok(false, e);
                }
                });

