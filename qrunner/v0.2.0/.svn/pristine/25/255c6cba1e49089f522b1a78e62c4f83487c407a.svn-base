/*
 * TEST CASE for HTML5
 *
 * written by STB-Component Browser Part.
 *
 */

function displayTable(title) {
    var statusDiv =  document.getElementById('storage_table');
    statusDiv.innerHTML = "<p><b>" + "Web Storage table" + "</b></br>" + title + "</p>";
    
    
    var table     =  document.createElement('table');
    table.style.border = "1px gray solid";
    var tr_title = document.createElement('tr');
    var td_key = document.createElement('td');
    td_key.innerText = "key";
    
    var td_val = document.createElement('td');
    td_val.innerText = "value";
    
    tr_title.appendChild(td_key);
    tr_title.appendChild(td_val);
    table.appendChild(tr_title);
    
    
    
    statusDiv.appendChild(table);
    for ( var i = 0, len = localStorage.length; i < len; ++i ) {
        var tr = document.createElement('tr');
        table.appendChild(tr);
        
        var td = document.createElement('td');
        td.innerText = localStorage.key(i);
        
        var td2 = document.createElement('td');
        td2.innerText = localStorage.getItem(localStorage.key(i));
        
        tr.appendChild(td);
        tr.appendChild(td2);
    }
}

module("indexed DB Test");

test("Indexed DB supports", function() {
	window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    try {
        ok(window.indexedDB);
    } catch (e) {
        ok (false, "not exists");
    }
});


module("indexed DB type check");

test("IDBOpenDBRequest", function() {
    try {
    	window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    	var request = indexedDB.open('AddressBook', 15);
    	ok( request.toString(), '[object IDBOpenDBRequest]');
    } catch (e) {
        ok (false, "not exists");
    }
});
test("onblocked()", function() {
    try {
    	window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    	var request = indexedDB.open('AddressBook', 15);
    	equal( request.onblocked, null);
    } catch (e) {
        ok (false, "not exists");
    }
});
test("onupgradeneeded()", function() {
    try {
    	window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    	var request = indexedDB.open('AddressBook', 15);
    	equal( request.onupgradeneeded, null);
    } catch (e) {
        ok (false, "not exists");
    }
});
test("error", function() {
    try {
    	window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    	var request = indexedDB.open('AddressBook', 15);
    	alert(request.error );
    	ok(false);
    } catch (e) {
    	ok(true);
    }
});
test("onerror()", function() {
    try {
    	window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    	var request = indexedDB.open('AddressBook', 15);
    	equal( request.onerror, null);
    } catch (e) {
        ok (false, "not exists");
    }
});
test("onsuccess()", function() {
    try {
    	window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    	var request = indexedDB.open('AddressBook', 15);
    	equal( request.onsuccess, null);
    } catch (e) {
        ok (false, "not exists");
    }
});
test("readyState", function() {
    try {
    	window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    	var request = indexedDB.open('AddressBook', 15);
    	ok( typeof request.readyState , String);
    } catch (e) {
        ok (false, "not exists");
    }
});
test("result", function() {
    try {
    	window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    	var request = indexedDB.open('AddressBook', 15);
    	alert(request.result  );
    	ok(false);
    } catch (e) {
    	ok(true);
    }
});
test("source", function() {
    try {
    	window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    	var request = indexedDB.open('AddressBook', 15);
    	equal( request.source , null);
    } catch (e) {
        ok (false, "not exists");
    }
});
test("IDBTransaction", function() {
    try {
    	window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
    	ok( window.IDBTransaction.toString(), '[object IDBTransaction]');
    } catch (e) {
        ok (false, "not exists");
    }
});


module("indexed DB function check");

asyncTest("open()", function() {
	var timerid = setTimeout( function() {
        QUnit.start();
        ok(IDB_OPEN_FLAG);
    }, 3000);
    
    var IDB_OPEN_FLAG = false;
    window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

    try {       
    	var dbOpenRequest = window.indexedDB.open("BookShop1");
        dbOpenRequest.onsuccess = function(event){
        	clearTimeout(timerid);
        	IDB_OPEN_FLAG = true;
            QUnit.start();
            ok(IDB_OPEN_FLAG);
        };
    } catch (e) {
    	clearTimeout(timerid);
    	IDB_OPEN_FLAG = false;
        QUnit.start();
        ok(IDB_OPEN_FLAG);
    }
});
asyncTest("open() with version", function() {
	var timerid = setTimeout( function() {
        QUnit.start();
        ok(IDB_OPEN_VER1_FLAG);
    }, 3000);
    
    var IDB_OPEN_VER1_FLAG = false;
    window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

    try {       
        var dbOpenRequest = window.indexedDB.open("BookShop1", 1);
        dbOpenRequest.onsuccess = function(event){
        	clearTimeout(timerid);
        	IDB_OPEN_VER1_FLAG = true;
            QUnit.start();
            ok(IDB_OPEN_VER1_FLAG);
        };
    } catch (e) {
    	clearTimeout(timerid);
    	IDB_OPEN_VER1_FLAG = false;
        QUnit.start();
        ok(IDB_OPEN_VER1_FLAG);
    }
});


module("Storage Browser Supports");

test("Storage supports", function() {
    try {
    	ok( typeof(Storage) !== "undefined" );
    } catch (e) {
        ok (false, "not exists");
    }
});
test("localStorage supports", function() {
    try {
    	ok( typeof(localStorage) !== "undefined");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("sessionStorage supports", function() {
    try {
    	ok( typeof(sessionStorage) !== "undefined");
    } catch (e) {
        ok (false, "not exists");
    }
});


module("Storage methods, properties");

test("localStorage setItem()", function() {
    try {
    	ok( typeof(localStorage.setItem) === "function");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("localStorage getItem()", function() {
    try {
    	ok( typeof(localStorage.getItem) === "function");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("localStorage clear()", function() {
    try {
    	ok( typeof(localStorage.clear) === "function");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("localStorage key()", function() {
    try {
    	ok( typeof(localStorage.key) === "function");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("localStorage length()", function() {
    try {
    	ok( typeof(localStorage.length) !== "undefined");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("localStorage removeItem()", function() {
    try {
    	ok( typeof(localStorage.removeItem) === "function");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("sessionStorage setItem()", function() {
    try {
    	ok( typeof(sessionStorage.setItem) === "function");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("sessionStorage getItem()", function() {
    try {
    	ok( typeof(sessionStorage.getItem) === "function");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("sessionStorage clear()", function() {
    try {
    	ok( typeof(sessionStorage.clear) === "function");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("sessionStorage key()", function() {
    try {
    	ok( typeof(sessionStorage.key) === "function");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("sessionStorage length", function() {
    try {
    	ok( typeof(sessionStorage.length) !== "undefined");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("sessionStorage removeItem()", function() {
    try {
    	ok( typeof(sessionStorage.removeItem) === "function");
    } catch (e) {
        ok (false, "not exists");
    }
});


module("Storage function test");

var statusDiv = document.createElement('div');
statusDiv.id = 'video';
document.body.appendChild(statusDiv);
var tableDiv = document.createElement('div');
tableDiv.id = 'storage_table';
statusDiv.appendChild(tableDiv);

asyncTest("localStorage setItem, getItem", function() {
	setTimeout( function() {
        QUnit.start();
        ok( typeof(localStorage.getItem("test") !== "undefined")); 
        ok( typeof(localStorage.getItem("test") === 1)); 
        ok( typeof(localStorage.getItem("test2") !== 1)); 
        ok( typeof(localStorage.getItem("test2") === "undefined")); 
    }, 1500);
    localStorage.clear();
    localStorage.setItem("test1", 1);
    displayTable("localStorage setItem, getItem");
});
asyncTest("localStorage clear", function() {
	setTimeout( function() {
        QUnit.start();
        ok( typeof(localStorage.getItem("test") === "undefined")); 
        ok( typeof(localStorage.getItem("test") !== 1)); 
        ok( typeof(localStorage.getItem("test2") !== 1)); 
        ok( typeof(localStorage.getItem("test2") === "undefined"));  
    }, 1500);
    localStorage.setItem("test", 1); 
    localStorage.clear();
    displayTable("localStorage clear");
});
asyncTest("localStorage key", function() {
	setTimeout( function() {
        QUnit.start();
        ok( typeof(localStorage.key(100) === "myKey")); 
        ok( typeof(localStorage.key(101) === "myKey2")); 
        ok( typeof(localStorage.key(103) === "undefined")); 
        ok( typeof(localStorage.key(99)  === "undefined")); 
    }, 1500);
    localStorage.clear();
    localStorage.setItem("myKey", 100); 
    localStorage.setItem("myKey2", 101);
    displayTable("localStorage key");
});
asyncTest("sessionStorage setItem, getItem", function() {
	setTimeout( function() {
        QUnit.start();
        ok( typeof(sessionStorage.getItem("test") !== "undefined")); 
        ok( typeof(sessionStorage.getItem("test") === 1)); 
        ok( typeof(sessionStorage.getItem("test2") !== 1)); 
        ok( typeof(sessionStorage.getItem("test2") === "undefined")); 
    }, 1500);
    sessionStorage.clear();
    sessionStorage.setItem("test1", 1);
    displayTable("sessionStorage setItem, getItem");
});
asyncTest("sessionStorage clear", function() {
	setTimeout( function() {
        QUnit.start();
        ok( typeof(sessionStorage.getItem("test") === "undefined")); 
        ok( typeof(sessionStorage.getItem("test") !== 1)); 
        ok( typeof(sessionStorage.getItem("test2") !== 1)); 
        ok( typeof(sessionStorage.getItem("test2") === "undefined")); 
    }, 1500);
    sessionStorage.setItem("test", 1); 
    sessionStorage.clear();
    displayTable("sessionStorage clear");
});
asyncTest("sessionStorage key", function() {
	setTimeout( function() {
        QUnit.start();
        ok( typeof(sessionStorage.key(100) === "myKey")); 
        ok( typeof(sessionStorage.key(101) === "myKey2")); 
        ok( typeof(sessionStorage.key(103) === "undefined")); 
        ok( typeof(sessionStorage.key(99)  === "undefined")); 
    }, 1500);
	sessionStorage.clear();   
	sessionStorage.setItem("myKey", 100); 
	sessionStorage.setItem("myKey2", 101);
	displayTable("sessionStorage key"); 
});

/*
var button = document.createElement('button');
button.type = "button";
button.innerHTML="storage performanceTest";
button.id = "run-tests";
var video = document.getElementById('video');
video.appendChild(button);
*/