var wsServerUrl = "ws://echo.websocket.org?encoding=text";
var websocket = null; 
var xhr = new XMLHttpRequest();

var res_path = "tc/module/html5/res";

function tc_XHRScenario() {
	module("XMLHttpRequest - scenario");
	
	asyncTest("XHRGETMethod", function() {
		var timerid = setTimeout( function() {
	        QUnit.start();
	        ok(false, "XHRGETMethod fail");
	    }, 10000);
		var getXHR = new XMLHttpRequest();
		getXHR.open("GET", res_path + "/example.xml", true);
		getXHR.send();
		getXHR.onreadystatechange = function() {
			if(getXHR.readyState == 4 && getXHR.status==200) {
				clearTimeout(timerid);
				QUnit.start();
				getXHR.onreadystatechange = null;
				ok(true, "XHRGETXMLMethod success");
			}
		};
	});
	asyncTest("XHRPOSTMethod", function() {
		var timerid = setTimeout( function() {
	        QUnit.start();
	        ok(false, "XHRPOSTMethod fail");
	    }, 10000);
		var postXHR = new XMLHttpRequest();
		postXHR.open("POST", res_path + "/readme.md", true);
		postXHR.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
		postXHR.send("LOG: this is tcXHRPOSTMethod");
		postXHR.onreadystatechange = function() {
			if(postXHR.readyState == postXHR.DONE && postXHR.status==200) {
				clearTimeout(timerid);
				QUnit.start();
				postXHR.onreadystatechange = null;
				ok(true, "XHRPOSTMethod success");
			}
		};
	});
	asyncTest("XHRHEADMethod", function() {
		var timerid = setTimeout( function() {
	        QUnit.start();
	        ok(false, "XHRHEADMethod fail");
	    }, 10000);
		var headXHR = new XMLHttpRequest();
		headXHR.open("HEAD", res_path + "/readme.md", true);
		headXHR.send();
		headXHR.onreadystatechange = function() {
			if(headXHR.readyState == headXHR.DONE && headXHR.status == 200) {
				clearTimeout(timerid);
				QUnit.start();
				headXHR.onreadystatechange = null;
				ok(true, "XHRHEADMethod success");
			}
		};
	});
	asyncTest("XHRGetCORSError", function() {
		var timerid = setTimeout( function() {
	        QUnit.start();
	        ok(false, "XHRGetCORSError fail");
	    }, 10000);
		var errorXHR = new XMLHttpRequest();
		errorXHR.onreadystatechange = function() {

		};
		errorXHR.open("GET", "http://icon.daumcdn.net/w/icon/1406/12/144316956.jpg", true);
		errorXHR.send();
		errorXHR.onerror = function() {
			clearTimeout(timerid);
			QUnit.start();
			errorXHR.onerror = null;
			ok(true, "XHRGetCORSError success");
		};
	});
	asyncTest("XHRGetWrongUrlError", function() {
		var timerid = setTimeout( function() {
	        QUnit.start();
	        ok(false, "XHRGetWrongUrlError fail");
	    }, 10000);
		var errorXHR = new XMLHttpRequest();
		errorXHR.open("GET", "./resources/log", true);
		errorXHR.send();
		errorXHR.onreadystatechange = function() {
			if(errorXHR.readyState == 4 && errorXHR.status == 404 ) {
				clearTimeout(timerid);
				QUnit.start();
				errorXHR.onreadystatechange = null;
				ok(true, "XHRGetWrongUrlError success");
			}
		};
	});
	asyncTest("XHRAbort", function() {
		var timerid = setTimeout( function() {
	        QUnit.start();
	        ok(false, "XHRAbort fail");
	    }, 10000);
		var abortXHR = new XMLHttpRequest();
		abortXHR.open("GET", res_path + "/example.xml", true);

		abortXHR.send();
		abortXHR.onabort = function() {
			abortXHR.onabort = null;
			clearTimeout(timerid);
			QUnit.start();
			ok(true, "XHRAbort success");
		};
		abortXHR.onreadystatechange = function() {
			if(abortXHR.readyState == abortXHR.HEADERS_RECEIVED) {
				abortXHR.abort();
				abortXHR.onreadystatechange = null;
			}
		};
	});
	asyncTest("XHRgetAllResponseHeaders", function() {
		var timerid = setTimeout( function() {
	        QUnit.start();
	        ok(false, "XHRgetAllResponseHeaders fail");
	    }, 10000);
		var getAllXHR = new XMLHttpRequest();
		getAllXHR.open("GET", res_path + "/readme.md", true);

		getAllXHR.send();
		getAllXHR.onreadystatechange = function() {
			if(getAllXHR.readyState ==0 || getAllXHR.readyState == 4)
			{
				var headers = getAllXHR.getAllResponseHeaders();
				if(headers != undefined) {
					clearTimeout(timerid);
					QUnit.start();
					getAllXHR.onreadystatechange = null;
					ok(true, "XHRgetAllResponseHeaders success");
				}
			}
		};
	});
	asyncTest("XHRgetResponseHeader", function() {
		var timerid = setTimeout( function() {
	        QUnit.start();
	        ok(false, "XHRgetResponseHeader fail");
	    }, 10000);
		var getHeaderXHR = new XMLHttpRequest();
		getHeaderXHR.open("GET", res_path + "/readme.md", true);

		getHeaderXHR.send();
		getHeaderXHR.onreadystatechange = function() {
			if(getHeaderXHR.readyState ==0 || getHeaderXHR.readyState == 4)
			{
				var Server = getHeaderXHR.getResponseHeader ("Server");
				var contLength = getHeaderXHR.getResponseHeader ("Content-Length");
				var lastMod = getHeaderXHR.getResponseHeader ("Last-Modified");
				if(Server && contLength && lastMod) {
					clearTimeout(timerid);
					QUnit.start();
					getHeaderXHR.onreadystatechange = null;
					ok(true, "XHRgetResponseHeader success");
				}
			}
		};
	});
	asyncTest("XHRsetRequestHeader", function() {
		var timerid = setTimeout( function() {
	        QUnit.start();
	        ok(false, "XHRsetRequestHeader fail");
	    }, 10000);
		var setReqXHR = new XMLHttpRequest();
		setReqXHR.open("GET", res_path + "/example.xml", true);
		setReqXHR.setRequestHeader("Accept", "text/xml");
		setReqXHR.send();
		setReqXHR.onreadystatechange = function() {
			if(setReqXHR.readyState == 4 && setReqXHR.status==200 && setReqXHR.responseXML != undefined) {
				clearTimeout(timerid);
				QUnit.start();
				setReqXHR.onreadystatechange = null;
				ok(true, "XHRsetRequestHeader success");
			}
		};
	});
	asyncTest("XHRCORSTest", function() {
		var timerid = setTimeout( function() {
	        QUnit.start();
	        ok(false, "XHRCORSTest fail");
	    }, 10000);
		var corsXHR = new XMLHttpRequest();
		// server url that supports CORS
		var cors_url = 'https://cors-test.appspot.com/test';
		corsXHR.open("GET", cors_url, true);
		corsXHR.onreadystatechange = function() {
			if(corsXHR.readyState == 4 && corsXHR.status==200) {
				clearTimeout(timerid);
				QUnit.start();
				corsXHR.onreadystatechange = null;
				ok(true, "XHRCORSTest success");
			}
		};
		corsXHR.send();
	});
}

var tcTypecheckXHREvents = function() {
	if(!xhr)
		xhr = new XMLHttpRequest();
	module("XMLHttpRequest Events");
	test("onreadystatechange", function() {
		try {
		ok(xhr["onreadystatechange"] !== undefined, "is Exists?");
		} catch(e) {
		ok(false, e);
		}
		});
	test("onloadstart", function() {
		try {
		ok(xhr["onloadstart"] !== undefined, "is Exists?");
		} catch(e) {
		ok(false, e);
		}
		});
	test("onprogress", function() {
		try {
		ok(xhr["onprogress"] !== undefined, "is Exists?");
		} catch(e) {
		ok(false, e);
		}
		});
	test("onabort", function() {
		try {
		ok(xhr["onabort"] !== undefined, "is Exists?");
		} catch(e) {
		ok(false, e);
		}
		});
	test("onerror", function() {
		try {
		ok(xhr["onerror"] !== undefined, "is Exists?");
		} catch(e) {
		ok(false, e);
		}
		});
	test("onload", function() {
		try {
		ok(xhr["onload"] !== undefined, "is Exists?");
		} catch(e) {
		ok(false, e);
		}
		});
	test("ontimeout", function() {
		try {
		ok(xhr["ontimeout"] !== undefined, "is Exists?");
		} catch(e) {
		ok(false, e);
		}
		});
	test("onloadend", function() {
		try {
		ok(xhr["onloadend"] !== undefined, "is Exists?");
		} catch(e) {
		ok(false, e);
		}
		});
};

var tcTypecheckXHRMethods = function() {
	if(!xhr)
		xhr = new XMLHttpRequest();

	module("XMLHttpRequest Methods");
	test("abort", function() {
		try {
		ok(xhr["abort"] !== undefined, "is Exists?");
		} catch(e) {
		ok(false, e);
		}
		});
	test("getAllResponseHeaders", function() {
		try {
		ok(xhr["getAllResponseHeaders"] !== undefined, "is Exists?");
		} catch(e) {
		ok(false, e);
		}
		});
	test("getResponseHeader", function() {
		try {
		ok(xhr["getResponseHeader"] !== undefined, "is Exists?");
		} catch(e) {
		ok(false, e);
		}
		});
	test("open", function() {
		try {
		ok(xhr["open"] !== undefined, "is Exists?");
		} catch(e) {
		ok(false, e);
		}
		});
	test("send", function() {
		try {
		ok(xhr["send"] !== undefined, "is Exists?");
		} catch(e) {
		ok(false, e);
		}
		});
	test("setRequestHeader", function() {
		try {
		ok(xhr["setRequestHeader"] !== undefined, "is Exists?");
		} catch(e) {
		ok(false, e);
		}
		});
	test("overrideMimeType", function() {
		try {
		ok(xhr["overrideMimeType"] !== undefined, "is Exists?");
		} catch(e) {
		ok(false, e);
		}
		});
};

var tcTypecheckXHRProperties = function() {
	module("XMLHttpRequest Properties");
	
	test("readyState", function() {
		try {
		ok(xhr["readyState"] !== undefined, "is Exists?");
		} catch(e) {
		ok(false, e);
		}
		});
	test("responseText", function() {
		try {
		ok(xhr["responseText"] !== undefined, "is Exists?");
		} catch(e) {
		ok(false, e);
		}
		});
	test("responseXML", function() {
		try {
		ok(xhr["responseXML"] !== undefined, "is Exists?");
		} catch(e) {
		ok(false, e);
		}
		});
	test("response", function() {
		try {
		ok(xhr["response"] !== undefined, "is Exists?");
		} catch(e) {
		ok(false, e);
		}
		});
	test("status", function() {
		try {
		ok(xhr["status"] !== undefined, "is Exists?");
		} catch(e) {
		ok(false, e);
		}
		});
	test("statusText", function() {
		try {
		ok(xhr["statusText"] !== undefined, "is Exists?");
		} catch(e) {
		ok(false, e);
		}
		});
	test("upload", function() {
		try {
		ok(xhr["upload"] !== undefined, "is Exists?");
		} catch(e) {
		ok(false, e);
		}
		});
	test("UNSENT", function() {
		try {
		ok(xhr["UNSENT"] !== undefined, "is Exists?");
		} catch(e) {
		ok(false, e);
		}
		});
	test("OPENED", function() {
		try {
		ok(xhr["OPENED"] !== undefined, "is Exists?");
		} catch(e) {
		ok(false, e);
		}
		});
	test("HEADERS_RECEIVED", function() {
		try {
		ok(xhr["HEADERS_RECEIVED"] !== undefined, "is Exists?");
		} catch(e) {
		ok(false, e);
		}
		});
	test("LOADING", function() {
		try {
		ok(xhr["LOADING"] !== undefined, "is Exists?");
		} catch(e) {
		ok(false, e);
		}
		});
	test("DONE", function() {
		try {
		ok(xhr["DONE"] !== undefined, "is Exists?");
		} catch(e) {
		ok(false, e);
		}
		});
};


function tc_WebSocketScenario() {
	module("Websocket - scenario");
	asyncTest("SocketOpen", function() {
		var openSocket = new WebSocket(wsServerUrl);
		var timerid = setTimeout( function() {
	        QUnit.start();
			openSocket.onopen = null;
			ok(false, "SocketOpen fail");
	    }, 10000);
		
		openSocket.onopen = function() {
			clearTimeout(timerid);
			openSocket.close();
			QUnit.start();
			ok(true, "SocketOpen success");
		};
		
	});
	asyncTest("SocketClose", function() {
		var closeSocket = new WebSocket(wsServerUrl);
		var timerid = setTimeout( function() {
	        QUnit.start();
			closeSocket.onclose = null;
			ok(false, "SocketClose fail");
	    }, 10000);
		
		closeSocket.onopen = function() {
			closeSocket.close();
		};
		closeSocket.onclose = function() {
			if(closeSocket.readyState == closeSocket.CLOSED)
			{
				clearTimeout(timerid);
				QUnit.start();
				ok(true, "SocketClose success");
			}
		};
	});
	asyncTest("SocketOpenError", function() {
		var openSocket = new WebSocket("ws://wrongurl.dummywebserver.php");

		var timerid = setTimeout( function() {
	        QUnit.start();
			openSocket.onerror = null;
			ok(false, "SocketOpenError fail");
	    }, 10000);
		
		openSocket.onerror = function() {
			clearTimeout(timerid);
			QUnit.start();
			ok(true, "SocketOpenError success");
		};
	});
	asyncTest("SocketSend", function() {
		var openSocket = new WebSocket(wsServerUrl);

		var timerid = setTimeout( function() {
	        QUnit.start();
			openSocket.onerror = null;
			ok(false, "SocketOpenError fail");
	    }, 10000);
		var sendtext = "text to send - Hi~! Handshaking.";
		openSocket.onopen = function() {
			openSocket.send(sendtext);
		};
		openSocket.onmessage = function(evt) {
			clearTimeout(timerid);
			QUnit.start();
			openSocket.close();
			ok(true, "SocketSend success");
		};
	});

	//tcSocketSend();
}

var tcTypecheckWebSocketEvents = function() {
	module("WebSocket Events");
	test("onopen", function() {
		try {
		ok(websocket["onopen"] !== undefined, "is Exists?");
		} catch(e) {
		ok(false, e);
		}
		});
	test("onerror", function() {
		try {
		ok(websocket["onerror"] !== undefined, "is Exists?");
		} catch(e) {
		ok(false, e);
		}
		});
	test("onclose", function() {
		try {
		ok(websocket["onclose"] !== undefined, "is Exists?");
		} catch(e) {
		ok(false, e);
		}
		});
	test("onmessage", function() {
		try {
		ok(websocket["onmessage"] !== undefined, "is Exists?");
		} catch(e) {
		ok(false, e);
		}
		});
};

var tcTypecheckWebSocketMethods = function() {

	module("WebSocket Methods");
	test("send", function() {
		try {
		ok(websocket["send"] !== undefined, "is Exists?");
		} catch(e) {
		ok(false, e);
		}
		});
	test("close", function() {
		try {
		ok(websocket["close"] !== undefined, "is Exists?");
		} catch(e) {
		ok(false, e);
		}
		});
};

var tcTypecheckWebSocketProperties = function() {

	module("WebSocket Properties");
	test("url", function() {
		try {
		ok(websocket["url"] !== undefined, "is Exists?");
		} catch(e) {
		ok(false, e);
		}
		});
	test("readyState", function() {
		try {
		ok(websocket["readyState"] !== undefined, "is Exists?");
		} catch(e) {
		ok(false, e);
		}
		});
	test("bufferedAmount", function() {
		try {
		ok(websocket["bufferedAmount"] !== undefined, "is Exists?");
		} catch(e) {
		ok(false, e);
		}
		});
	test("CONNECTING", function() {
		try {
		ok(websocket["CONNECTING"] !== undefined, "is Exists?");
		} catch(e) {
		ok(false, e);
		}
		});
	test("OPEN", function() {
		try {
		ok(websocket["OPEN"] !== undefined, "is Exists?");
		} catch(e) {
		ok(false, e);
		}
		});
	test("CLOSING", function() {
		try {
		ok(websocket["CLOSING"] !== undefined, "is Exists?");
		} catch(e) {
		ok(false, e);
		}
		});
	test("CLOSED", function() {
		try {
		ok(websocket["CLOSED"] !== undefined, "is Exists?");
		} catch(e) {
		ok(false, e);
		}
		});
	test("binaryType", function() {
		try {
		ok(websocket["binaryType"] !== undefined, "is Exists?");
		} catch(e) {
		ok(false, e);
		}
		});
};

var tcXHRBrowserSupport = function() {
	test("XHRBrowserSupport", function() {
		if(window.XMLHttpRequest != undefined )
			ok(true, "XHRBrowserSupport success");
		else
			ok(false, "XHRBrowserSupport fail");
	});
};

var tcSocketBrowserSupport = function() {
	test("WebSocketBrowserSupport", function() {
		if(window.WebSocket != undefined )
			ok(true, "WebSocketBrowserSupport success");
		else
			ok(false, "WebSocketBrowserSupport fail");
	});
};

function tcBrowserSupport() {
	module("BrowserSupport");
	tcSocketBrowserSupport();
	tcXHRBrowserSupport();
}


//check browsersupport
tcBrowserSupport();

websocket = new WebSocket(wsServerUrl);

//check the properties of WebSocket object
tcTypecheckWebSocketProperties();
// check the methods of WebSocket object
tcTypecheckWebSocketMethods();
//check the events of WebSocket object
tcTypecheckWebSocketEvents();

//websocket.close();

// websocket scenario test
tc_WebSocketScenario();
// check the properties of XMLHttpRequest object
tcTypecheckXHRProperties();
// check the methods of XMLHttpRequest object
tcTypecheckXHRMethods();
// check the events of XMLHttpRequest object
tcTypecheckXHREvents();
// XMLHttpRequest scenario test
tc_XHRScenario();

