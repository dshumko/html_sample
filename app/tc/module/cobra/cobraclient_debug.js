var securityError = function (message) {
    throw ReferenceError("SecurityError: " + message);
};
var readonlyError = function () {
    return securityError("attempted to write protected variable");
};
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["INFO"] = 0] = "INFO";
    LogLevel[LogLevel["DEBUG"] = 1] = "DEBUG";
    LogLevel[LogLevel["WARN"] = 2] = "WARN";
    LogLevel[LogLevel["ERROR"] = 3] = "ERROR";
    LogLevel[LogLevel["CRIT"] = 4] = "CRIT";
})(LogLevel || (LogLevel = {}));
var CobraLogger = (function () {
    function CobraLogger() {
        this.m_enabled = false;
        this.m_level = 2 /* WARN */;
    }
    Object.defineProperty(CobraLogger.prototype, "enabled", {
        get: function () {
            return this.m_enabled;
        },
        set: function (bEnabled) {
            this.m_enabled = bEnabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CobraLogger.prototype, "setLogLebel", {
        get: function () {
            return this.m_level;
        },
        set: function (level) {
            this.m_level = level;
        },
        enumerable: true,
        configurable: true
    });
    CobraLogger.prototype.debug = function (message) {
        this._log(1 /* DEBUG */, message);
    };
    CobraLogger.prototype.warn = function (message) {
        this._log(2 /* WARN */, message);
    };
    CobraLogger.prototype.error = function (message) {
        this._log(3 /* ERROR */, message);
    };
    CobraLogger.prototype.info = function (message) {
        this._log(0 /* INFO */, message);
    };
    CobraLogger.prototype.critical = function (message) {
        this._log(4 /* CRIT */, message);
    };
    CobraLogger.prototype._log = function (level, message) {
        if (this.enabled != true)
            return;
        if (this.m_level > level)
            return;
        var prefix;
        var color;
        switch (level) {
            case 0 /* INFO */:
                prefix = "[INFO] ";
                color = "CadetBlue;";
                console.info("%c" + prefix + message, "color:" + color);
                break;
            case 2 /* WARN */:
                prefix = "[WARN] ";
                console.warn("%c" + prefix + message, "color:" + color);
                break;
            case 3 /* ERROR */:
                prefix = "[ERROR] ";
                color = "red;";
                console.error("%c" + prefix + message, "color:" + color);
                break;
            case 4 /* CRIT */:
                prefix = "[CRITICAL] ";
                color = "red; font-weight:bold;";
                console.error("%c" + prefix + message, "color:" + color);
                break;
            case 1 /* DEBUG */:
                color = "DarkBlue;";
                prefix = "[DEBUG] ";
                console.debug("%c" + prefix + message, "color:" + color);
                break;
            default:
                color = "block;";
                console.log("%c" + prefix + message, "color:" + color);
                break;
        }
        //console.log('%cBlue! %cRed!', 'color: blue;', 'color: red;');
    };
    return CobraLogger;
})();
var cobraLogger = new CobraLogger();
///<reference path='./logger.ts'/>
var SocketWS = (function () {
    function SocketWS() {
        var _this = this;
        this.__onopen = function () {
            cobraLogger.debug("[SocketWS] web socket open");
            _this.m_status = 1;
            if (_this.m_onconnected)
                _this.m_onconnected();
        };
        this.__onclose = function () {
            cobraLogger.debug("[SocketWS] web socket close");
            if (_this.m_onclosed)
                _this.m_onclosed();
        };
        this.__onmessage = function (message) {
            if (_this.m_onreceived) {
                if (message.data) {
                    //cobraLogger.debug("[SocketWS] web socket message - " + message.data);
                    _this.m_onreceived(message.data);
                }
            }
        };
        this.__onerror = function (message) {
            if (_this.m_onerror)
                _this.m_onerror(message);
        };
        this.m_onconnected = null;
        this.m_onreceived = null;
        this.m_onclosed = null;
        this.m_onerror = null;
        this.m_status = 0;
        this.m_sock = null;
        cobraLogger.debug("[SocketWS] Constructor");
    }
    Object.defineProperty(SocketWS.prototype, "onConnected", {
        /* Properties */
        get: function () {
            return this.m_onconnected;
        },
        set: function (callback) {
            this.m_onconnected = callback;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SocketWS.prototype, "onDisonnected", {
        /* Properties */
        get: function () {
            return this.m_ondisconnected;
        },
        set: function (callback) {
            this.m_ondisconnected = callback;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SocketWS.prototype, "onClosed", {
        get: function () {
            return this.m_onclosed;
        },
        set: function (callback) {
            this.m_onclosed = callback;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SocketWS.prototype, "onReceived", {
        get: function () {
            return this.m_onreceived;
        },
        set: function (callback) {
            this.m_onreceived = callback;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SocketWS.prototype, "onError", {
        get: function () {
            return this.m_onerror;
        },
        set: function (callback) {
            this.m_onerror = callback;
        },
        enumerable: true,
        configurable: true
    });
    /* Functions */
    SocketWS.prototype.connect = function (host) {
        try {
            this.m_sock = new WebSocket(host);
            this.m_sock.onopen = this.__onopen;
            this.m_sock.onclose = this.__onclose;
            this.m_sock.onmessage = this.__onmessage;
            this.m_sock.onerror = this.__onerror;
        }
        catch (e) {
            cobraLogger.critical(e);
        }
        return true;
    };
    SocketWS.prototype.disconnect = function () {
        if (this.m_sock == null) {
            cobraLogger.error("[SocketWS] close: socket is null");
            return false;
        }
        this.m_onconnected = null;
        this.m_ondisconnected = null;
        this.m_onreceived = null;
        this.m_onclosed = null;
        this.m_onerror = null;
        this.m_sock.close();
        this.m_sock = null;
    };
    SocketWS.prototype.send = function (message) {
        if (this.m_sock == null) {
            cobraLogger.error("[SocketWS] send: socket is null");
            return false;
        }
        cobraLogger.debug("[SocketWS] send : " + message);
        if (this.m_status == 1) {
            this.m_sock.send(message);
            return true;
        }
        return false;
    };
    return SocketWS;
})();
///<reference path='./logger.ts'/>
var SocketXHR = (function () {
    function SocketXHR() {
        var _this = this;
        this.__onreadystatechange = function () {
            switch (_this.m_sock.readyState) {
                case 0:
                    _this.m_onreadystatechange("UNSENT");
                    break;
                case 1:
                    _this.m_onreadystatechange("OPENED");
                    break;
                case 2:
                    _this.m_onreadystatechange("HEADERS_RECEIVED");
                    break;
                case 3:
                    _this.m_onreadystatechange("LOADING");
                    break;
                case 4:
                    _this.m_onreadystatechange("DONE");
                    break;
                default:
                    break;
            }
        };
        this.__onloadstart = function () {
            cobraLogger.debug("[SocketXHR] onloadstart");
            if (_this.m_onloadstart)
                _this.m_onloadstart();
        };
        this.__onprogress = function () {
            cobraLogger.debug("[SocketXHR] onprogress");
            if (_this.m_onprogress)
                _this.m_onprogress();
        };
        this.__onabort = function () {
            cobraLogger.debug("[SocketXHR] onbort");
            if (_this.m_onabort)
                _this.m_onabort();
        };
        this.__onerror = function () {
            cobraLogger.debug("[SocketXHR] onerror");
            if (_this.m_onerror)
                _this.m_onerror();
        };
        this.__onload = function () {
            //cobraLogger.debug("[SocketXHR] onload");
            if (_this.m_onload)
                _this.m_onload();
        };
        this.__ontimeout = function () {
            cobraLogger.critical("[SocketXHR] ontimeout");
            if (_this.m_ontimeout)
                _this.m_ontimeout();
        };
        this.__onloadend = function () {
            //cobraLogger.debug("[SocketXHR] onloadend");
            if (_this.m_onloadend)
                _this.m_onloadend();
        };
        this.m_onreadystatechange = null;
        this.m_onloadstart = null;
        this.m_onprogress = null;
        this.m_onabort = null;
        this.m_onerror = null;
        this.m_onload = null;
        this.m_ontimeout = null;
        this.m_onloadend = null;
        this.m_sock = null;
        this.m_serverUrl = null;
        this.m_asyncflag = false;
        cobraLogger.debug("[SocketXHR] constructor");
    }
    Object.defineProperty(SocketXHR.prototype, "onReadystatechange", {
        /* event */
        get: function () {
            return this.m_onreadystatechange;
        },
        set: function (callback) {
            this.m_onreadystatechange = callback;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SocketXHR.prototype, "onLoadstart", {
        get: function () {
            return this.m_onloadstart;
        },
        set: function (callback) {
            this.m_onloadstart = callback;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SocketXHR.prototype, "onProgress", {
        get: function () {
            return this.m_onprogress;
        },
        set: function (callback) {
            this.m_onprogress = callback;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SocketXHR.prototype, "onAbort", {
        get: function () {
            return this.m_onabort;
        },
        set: function (callback) {
            this.m_onabort = callback;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SocketXHR.prototype, "onError", {
        get: function () {
            return this.m_onerror;
        },
        set: function (callback) {
            this.m_onerror = callback;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SocketXHR.prototype, "onLoad", {
        get: function () {
            return this.m_onload;
        },
        set: function (callback) {
            this.m_onload = callback;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SocketXHR.prototype, "onTimeout", {
        get: function () {
            return this.m_ontimeout;
        },
        set: function (callback) {
            this.m_ontimeout = callback;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SocketXHR.prototype, "onLoaded", {
        get: function () {
            return this.m_onloadend;
        },
        set: function (callback) {
            this.m_onload = callback;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SocketXHR.prototype, "status", {
        /* property */
        /* Request */
        /* timeout; only async  */
        /* withCredentials; only async */
        /* Response */
        /* status */
        get: function () {
            return this.m_sock.status;
        },
        set: function (status) {
            readonlyError();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SocketXHR.prototype, "statusText", {
        /* statusText */
        get: function () {
            return this.m_sock.statusText;
        },
        set: function (statusText) {
            readonlyError();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SocketXHR.prototype, "response", {
        /* response */
        get: function () {
            return this.m_sock.response;
        },
        set: function (response) {
            readonlyError();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SocketXHR.prototype, "responseType", {
        /* responseType */
        get: function () {
            return this.m_sock.responseType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SocketXHR.prototype, "responsetype", {
        set: function (responseType) {
            readonlyError();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SocketXHR.prototype, "responseText", {
        /* responseText */
        get: function () {
            return this.m_sock.responseText;
        },
        set: function (responseText) {
            readonlyError();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SocketXHR.prototype, "responseXML", {
        /* responseXML */
        get: function () {
            return this.m_sock.responseXML;
        },
        set: function (responseXML) {
            readonlyError();
        },
        enumerable: true,
        configurable: true
    });
    /* method */
    SocketXHR.prototype.open = function (url, type) {
        if (this.m_sock == null) {
            this.m_sock = new XMLHttpRequest();
            this.m_sock.onreadystatechange = this.__onreadystatechange;
            this.m_sock.onloadstart = this.__onloadstart;
            this.m_sock.onprogress = this.__onprogress;
            this.m_sock.onabort = this.__onabort;
            this.m_sock.onerror = this.__onerror;
            this.m_sock.onload = this.__onload;
            this.m_sock.ontimeout = this.__ontimeout;
            this.m_sock.onloadend = this.__onloadend;
        }
        this.m_sock.open("POST", url, type);
        this.m_asyncflag = type;
        this.m_serverUrl = url;
        return true;
    };
    SocketXHR.prototype.close = function () {
        if (this.m_serverUrl)
            this.m_serverUrl = null;
    };
    SocketXHR.prototype.setRequestHeader = function (header, value) {
        this.m_sock.setRequestHeader(header, value);
    };
    SocketXHR.prototype.send = function (msg) {
        try {
            if (this.m_sock.readyState != 1)
                this.m_sock.open("POST", this.m_serverUrl, this.m_asyncflag);
            this.m_sock.send(msg);
        }
        catch (e) {
            cobraLogger.error("[SocketXHR] (" + this.m_sock.status + ")send error : " + e);
            cobraLogger.error("[SocketXHR] retry..");
            this.m_sock = null;
            this.open(this.m_serverUrl, this.m_asyncflag);
            this.m_sock.send(msg);
        }
        var receive_message = this.m_sock.responseText;
        //cobraLogger.debug("[SocketXHR] received - " + receive_message);
        return receive_message;
    };
    SocketXHR.prototype.abort = function () {
        this.m_sock.abort();
    };
    /* Response */
    SocketXHR.prototype.getResponseHeader = function (header) {
        this.m_sock.getResponseHeader(header);
    };
    SocketXHR.prototype.getAllResponseHeaders = function () {
        this.m_sock.getAllResponseHeaders();
    };
    SocketXHR.prototype.overrideMineType = function (mine) {
        this.m_sock.overrideMimeType(mine);
    };
    return SocketXHR;
})();
///<reference path='./libs/logger.ts'/>
///<reference path='./libs/socket_ws.ts'/>
///<reference path='./libs/socket_xhr.ts'/>
var CobraCommunicator = (function () {
    function CobraCommunicator() {
        var _this = this;
        /* XHR Event Listener */
        this.onXhrConnect = function (e) {
        };
        /* WebSocket Event Listener */
        this._onWSConnect = function () {
            cobraLogger.debug("web socket connected");
            var ws_startMsg = { header: { session_id: _this.m_session_id, action: "start" }, body: null };
            _this.m_async_sock.send(JSON.stringify(ws_startMsg));
        };
        this._onWSMessage = function (message) {
            try {
                var res_obj = JSON.parse(message);
                var hdr = res_obj.header;
                console.group("Communicator ASync Event Message");
                cobraLogger.info("[res >> ] " + message);
                console.groupEnd();
            }
            catch (e) {
                cobraLogger.error("[CobraCommunicator / onWSMessage]" + message);
                throw "received event message json format error ";
            }
            if (_this.m_onreceived)
                _this.m_onreceived(message);
        };
        this._onerror = function () {
            if (_this.m_onerror)
                _this.m_onerror();
        };
        this.__onunload = function () {
            if (_this.m_onunload != null)
                _this.m_onunload(_this, arguments);
            if (_this.m_auto_disconnect == true)
                _this.disconnect();
        };
        this.m_onerror = null;
        this.m_onconnected = null;
        this.m_ondisconnected = null;
        this.m_onreceived = null;
        this.m_xhr_url = null;
        this.m_ws_url = null;
        this.m_session_id = null;
        this.m_sync_sock = new SocketXHR();
        this.m_async_sock = new SocketWS();
        this.m_onunload = null;
        this.m_auto_disconnect = true;
        cobraLogger.debug("[CobraCommunicator / constructor]");
    }
    Object.defineProperty(CobraCommunicator.prototype, "onConnected", {
        get: function () {
            return this.m_onconnected;
        },
        set: function (callback) {
            this.m_onconnected = callback;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CobraCommunicator.prototype, "onDisconnected", {
        get: function () {
            return this.m_ondisconnected;
        },
        set: function (callback) {
            this.m_ondisconnected = callback;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CobraCommunicator.prototype, "onReceived", {
        get: function () {
            return this.m_onreceived;
        },
        set: function (callback) {
            this.m_onreceived = callback;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CobraCommunicator.prototype, "onError", {
        get: function () {
            return this.m_onerror;
        },
        set: function (callback) {
            this.m_onerror = callback;
        },
        enumerable: true,
        configurable: true
    });
    CobraCommunicator.prototype.connect = function (xhr, ws) {
        if (this.m_xhr_url == null) {
            this.m_sync_sock.onReadystatechange = this.onXhrConnect;
            this.m_sync_sock.onError = this._onerror;
            this.m_sync_sock.open(xhr, false);
            try {
                var start_req_msg = { header: { session_id: null, action: "start" }, body: null };
                var start_res_msg = this.m_sync_sock.send(JSON.stringify(start_req_msg));
                cobraLogger.debug("[CobraCommunicator / connect] start response : " + start_res_msg);
                var start_res_obj = JSON.parse(start_res_msg);
                var res_hdr = start_res_obj.header;
                var res_body = start_res_obj.body;
                if (res_body.status.code != "200")
                    throw "server error. code - " + res_body.status.code + "(" + res_body.status.desc + ")";
                if (start_req_msg.header.action == res_hdr.action) {
                    if (res_body.result.type == "string") {
                        cobraLogger.info("start session id : " + res_body.result.value);
                        this.m_session_id = res_body.result.value;
                        this.m_onconnected(this.m_session_id);
                    }
                    else
                        throw "the session id is not invalid.";
                }
            }
            catch (e) {
                cobraLogger.error("[CobraCommunicator / connect] (" + e + ") JSON Parse Error ");
                return false;
            }
            this.m_xhr_url = xhr;
            this.m_onunload = window.onunload;
            window.onunload = this.__onunload;
        }
        if (this.m_ws_url == null) {
            this.m_async_sock.onConnected = this._onWSConnect;
            this.m_async_sock.onReceived = this._onWSMessage;
            this.m_async_sock.onError = this._onerror;
            this.m_async_sock.connect(ws + "?session_id=" + this.m_session_id);
            this.m_ws_url = ws;
        }
        return true;
    };
    CobraCommunicator.prototype.disconnect = function () {
        try {
            var stop_req_msg = { header: { session_id: this.m_session_id, action: "stop" }, body: null };
            var stop_res_msg = this.m_sync_sock.send(JSON.stringify(stop_req_msg));
            cobraLogger.debug("[CobraCommunicator / disconnect] stop response : " + stop_res_msg);
            var start_res_obj = JSON.parse(stop_res_msg);
            var res_hdr = start_res_obj.header;
            var res_body = start_res_obj.body;
            if (res_body.status.code != "200")
                throw "code - " + res_body.status.code + "(" + res_body.status.desc + ") the response error status of start message is not invalid.";
            if (stop_req_msg.header.action == res_hdr.action) {
                if (res_body.result.type != "boolean" || res_body.result.value != "true") {
                    throw "server stop error.";
                }
                this.m_ondisconnected(this.m_session_id);
            }
        }
        catch (e) {
            cobraLogger.critical(e);
            return false;
        }
        this.m_xhr_url = null;
        this.m_ws_url = null;
        this.m_session_id = null;
        this.m_async_sock.disconnect();
        return true;
    };
    CobraCommunicator.prototype.send = function (message, bsync) {
        if (bsync == true) {
            console.group("Communicator Sync Message");
            cobraLogger.info("[req >> ] " + message);
            var res_msg = this.m_sync_sock.send(message);
            cobraLogger.info("[res << ] " + res_msg);
            console.groupEnd();
            return res_msg;
        }
        else {
            console.group("Communicator ASync Message");
            cobraLogger.info("[req >> ] " + message);
            this.m_async_sock.send(message);
            console.groupEnd();
            return null;
        }
    };
    CobraCommunicator.prototype.setAutoDisconnect = function (on) {
        this.m_auto_disconnect = on;
    };
    return CobraCommunicator;
})();
///<reference path='./libs/logger.ts'/>
var CobraJsonCodec = (function () {
    function CobraJsonCodec() {
    }
    CobraJsonCodec.prototype.jsonEncode = function (session_id, type, object_id, name, params) {
        var header = { session_id: session_id, action: type };
        var body = null;
        if (type == "new") {
            body = { name: name };
        }
        else if (type == "delete") {
            body = { object_id: object_id };
        }
        else if (type == "invoke") {
            if (params == null)
                body = { object_id: object_id, name: name, param: null };
            else
                body = { object_id: object_id, name: name, param: params };
        }
        else if (type == "registercallback") {
            body = { object_id: object_id, name: name };
        }
        else if (type == "unregistercallback") {
            body = { object_id: object_id, name: name };
        }
        var pack = { header: header, body: body };
        //console.dir( pack);
        //cobraLogger.info("[CobraJsonCode] encode string - " + JSON.stringify(pack));
        return (JSON.stringify(pack));
    };
    CobraJsonCodec.prototype.jsonDecode = function (message) {
        try {
            //cobraLogger.info("[CobraJsonCode] decode string - " + message + "\n");
            var ret_obj = JSON.parse(message);
            var header = ret_obj.header;
            var body = ret_obj.body;
            //console.dir(ret_obj);
            if (this.checkError(body.status) != true) {
                cobraLogger.error("[CobraJsonCodec/json_decode] message error by status code");
                return null;
            }
            var ret_val = { action: header.action, status: body.status, value: body.result };
            return ret_val;
        }
        catch (e) {
            cobraLogger.error("[CobraJsonCode] json decode error !!! - " + e);
        }
        return null;
    };
    CobraJsonCodec.prototype.checkError = function (status) {
        try {
            if (status.code == "200")
                return true;
            cobraLogger.error("STATUS ERRROR CODE (" + status.code + ") ERROR MSG - " + status.desc);
            return false;
        }
        catch (e) {
            cobraLogger.error("Status Object is invalid.");
        }
        return false;
    };
    return CobraJsonCodec;
})();
///<reference path='./cobra_client.ts'/>
var StubBaseEvent = (function () {
    function StubBaseEvent(name) {
        var _this = this;
        this.dispatcher = function (name, args) {
            var params = _this.covEvtParam(args);
            if (_this.listener)
                _this.listener.apply(_this, params);
            if (_this.evt_handler)
                _this.evt_handler(name, params);
        };
        this.name = null;
        this.listener = null;
        this.evt_handler = null;
        this.name = name;
    }
    StubBaseEvent.prototype.covEvtParam = function (args) {
        if (args == undefined)
            return null;
        var argc = args.length;
        if (argc > 0) {
            var ap_args = new Array();
            for (var i = 0; i < argc; i++) {
                if (typeof (args[i]) == 'object')
                    ap_args.push(new window[args[i].object_name](args[i]));
                else
                    ap_args.push(args[i]);
            }
            return ap_args;
        }
        return null;
    };
    return StubBaseEvent;
})();
var StubBase = (function () {
    //constructor(name:string, param:any, argc?:number) {
    function StubBase() {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i - 0] = arguments[_i];
        }
        this.object_id = null;
        this.object_name = null;
        this.m_listeners = null;
        this.m_evt_handler = null;
        this.m_cc = null;
        try {
            if ((params.length == 2) && (typeof (params[1]) == 'string') && (typeof (params[0]) == 'string')) {
                this.object_name = params[0];
                this.m_cc = CobraFactory.findCobraClient(params[1]);
                if (this.m_cc == null)
                    throw "[StubBase] application stub object create fail";
                var new_obj = this.m_cc.roa.newObject(this, this.object_name);
                if (new_obj == null)
                    throw "[StubBase] application stub object create fail";
                cobraLogger.info("[StubBase] Application Object(" + name + ") Create");
            }
            else if ((params.length == 3) && (typeof (params[0]) == 'string')) {
                if (typeof (params[1]) == 'string') {
                    this.object_name = params[0];
                    this.object_id = params[1];
                    this.m_cc = CobraFactory.findCobraClient_sessionid(params[2]);
                }
                else
                    throw "[StubBase] ROA stub object create fail";
                cobraLogger.debug("[StubBase] Cobra ROA Object Create - " + arguments[1]);
            }
            else if ((params.length == 2) && (typeof (params[1]) == 'object') && (typeof (params[0]) == 'string')) {
                if (params[1] == null)
                    throw "[StubBase] Stub Object fail. (param is null.)";
                this.object_id = params[1].object_id;
                this.object_name = params[1].object_name;
                this.m_cc = params[1].m_cc;
                cobraLogger.info("[StubBase] JavaScript(" + name + ") Stub Create by StubBase - invoke or event");
            }
            else {
                throw "[StubBase] - constructor param is not invalid";
            }
        }
        catch (err) {
            throw err;
        }
    }
    StubBase.prototype.getClassName = function () {
        var funcNameRegex = /function (.{1,})\(/;
        var results = (funcNameRegex).exec(this.constructor.toString());
        return (results && results.length > 1) ? results[1] : "";
    };
    StubBase.prototype.addStubEventListener = function (name, callback, priority) {
        if (!this.m_listeners) {
            this.m_listeners = new Array();
        }
        var h = new StubBaseEvent(name);
        if (priority) {
            h.listener = callback;
            h.evt_handler = this.m_evt_handler;
        }
        this.m_listeners.push(h);
    };
    StubBase.prototype.removeStubEventListener = function (name) {
        if (!this.m_listeners)
            return;
        for (var i = this.m_listeners.length; i--;) {
            if (this.m_listeners[i].name === name) {
                this.m_listeners.splice(i, 1);
                return true;
            }
        }
        return false;
    };
    StubBase.prototype.findStubEventListener = function (name) {
        if (!this.m_listeners) {
            cobraLogger.error("stub event listener list is empty");
            return null;
        }
        for (var i = 0; i < this.m_listeners.length; i++) {
            if (this.m_listeners[i].name == name) {
                cobraLogger.debug("[StubBase / findStubEventListener] object(" + this.object_name + ") event(" + name + ")");
                return this.m_listeners[i];
            }
        }
        return null;
    };
    StubBase.prototype.registEventHandler = function (cb) {
        this.m_evt_handler = cb;
        if (this.m_listeners) {
            for (var i = 0; i < this.m_listeners.length; i++) {
                this.m_listeners[i].evt_handler = cb;
            }
        }
    };
    return StubBase;
})();
///<reference path='./stubbase.ts'/>
var CobraStubManager = (function () {
    function CobraStubManager() {
        this.m_stubs = null;
    }
    CobraStubManager.prototype.addStub = function (stub) {
        if (this.m_stubs == null)
            this.m_stubs = new Array();
        this.m_stubs.push(stub);
        return true;
    };
    CobraStubManager.prototype.removeStub = function (stub) {
        for (var i = this.m_stubs.length; i--;) {
            if (this.m_stubs[i] === stub) {
                this.m_stubs.splice(i, 1);
                return true;
            }
        }
        return false;
    };
    CobraStubManager.prototype.findStubByID = function (id) {
        if ((this.m_stubs == null) || (this.m_stubs.length == 0)) {
            return null;
        }
        for (var i = 0; i < this.m_stubs.length; i++) {
            if (this.m_stubs[i].object_id === id)
                return this.m_stubs[i];
        }
        return null;
    };
    return CobraStubManager;
})();
///<reference path='./cobra_communicator.ts'/>
///<reference path='./cobra_json_codec.ts'/>
///<reference path='./cobra_stubmanager.ts'/>
var CobraROA = (function () {
    function CobraROA() {
        var _this = this;
        this.onEventReceived = function (msg) {
            try {
                var event = JSON.parse(msg);
                var hdr = event.header;
                var ret = event.body.result;
                var status = event.body.status;
                var val = ret.param;
                if ((hdr.action == 'start') && (_this.m_onevent_init == false)) {
                    _this.m_onevent_init = true;
                    return;
                }
                var stub = _this.m_cc_stub_mgr.findStubByID(ret.object_id);
                if (stub != null) {
                    cobraLogger.debug("[CobraROA / onEventReceived] Event Object(" + stub.object_name + "/" + stub.object_id + ") - Event Name " + ret.name);
                    var cb = stub.findStubEventListener(ret.name);
                    if (cb == null) {
                        throw "can't find listener in stub ";
                    }
                }
                else {
                    cobraLogger.error("[CobraROA / onEventReceived] can't find stub");
                    return;
                }
                if (cb != null) {
                    console.log(typeof (val));
                    console.log(val);
                    console.dir(val);
                    var param_argc = val.length;
                    cobraLogger.debug("[CobraROA / onEventReceived] event argc - " + param_argc);
                    if (param_argc > 0) {
                        var cb_param = new Array();
                        var p = null;
                        for (var i = 0; i < param_argc; i++) {
                            p = _this.covParam(val[i]);
                            if (typeof (p) == 'object') {
                                if (_this.m_cc_stub_mgr.findStubByID(p.object_id) == null) {
                                    _this.m_cc_stub_mgr.addStub(p);
                                    cobraLogger.debug("new event object -" + p.object_id);
                                }
                            }
                            cb_param.push(p);
                        }
                        cb.dispatcher(ret.name, cb_param);
                    }
                    else {
                        cb.dispatcher(ret.name);
                        return;
                    }
                }
            }
            catch (e) {
                cobraLogger.error("[CobraROA / onEventReceived] (" + e + ")" + msg);
                //throw "onEvent event message parsing error";
                return;
            }
        };
        this.m_comm = null;
        this.m_cc_codec = new CobraJsonCodec();
        this.m_cc_stub_mgr = new CobraStubManager();
        this.m_session_id = null;
        this.m_onevent_init = false;
    }
    CobraROA.prototype.setCommunicator = function (comm, id) {
        if (id == null)
            return false;
        this.m_comm = comm;
        this.m_session_id = id;
        this.m_comm.onReceived = this.onEventReceived;
        cobraLogger.debug("[CobraROA / setCommunicator] session id : " + id);
        return true;
    };
    Object.defineProperty(CobraROA.prototype, "session", {
        get: function () {
            return this.m_session_id;
        },
        enumerable: true,
        configurable: true
    });
    CobraROA.prototype.newObject = function (obj, name) {
        try {
            var ret_msg = this.m_comm.send(this.m_cc_codec.jsonEncode(this.m_session_id, "new", null, name, null), true);
            if (ret_msg) {
                var ret_obj = this.m_cc_codec.jsonDecode(ret_msg);
                if (ret_obj && ret_obj.action == "new") {
                    var new_obj = this.covParam(ret_obj.value);
                    cobraLogger.debug("[CobraROA / new](" + new_obj.object_name + ") - " + new_obj.object_id);
                    if (new_obj.object_name == name) {
                        if (this.m_cc_stub_mgr.findStubByID(new_obj.object_id))
                            cobraLogger.error("[CobraROA / new] returned server object exist !!");
                        this.m_cc_stub_mgr.addStub(obj);
                        obj.object_id = new_obj.object_id;
                        return new_obj;
                    }
                    else {
                        cobraLogger.error("[CobraROA / new] returned server object is not mismatch !!");
                        throw "new stub error";
                    }
                }
            }
        }
        catch (e) {
            cobraLogger.error("[CobraROA / new] Object(" + name + ") create  error");
            throw "new stub error";
        }
        return null;
    };
    CobraROA.prototype.deleteObject = function (obj) {
        try {
            var ret_msg = this.m_comm.send(this.m_cc_codec.jsonEncode(this.m_session_id, "delete", obj.object_id, null, null), true);
            if (ret_msg) {
                var ret_obj = this.m_cc_codec.jsonDecode(ret_msg);
                if (ret_obj != null) {
                    if (ret_obj.action == "delete") {
                        this.m_cc_stub_mgr.removeStub(obj);
                        return this.covParam(ret_obj.value);
                    }
                }
            }
        }
        catch (e) {
            cobraLogger.error("[CobraROA / delete] Object(" + obj.object_name + ") delete error");
        }
        return false;
    };
    CobraROA.prototype.invoke = function (obj, bsync, name, type) {
        var params = [];
        for (var _i = 4; _i < arguments.length; _i++) {
            params[_i - 4] = arguments[_i];
        }
        try {
            if (params.length > 0) {
                var params_obj = new Array();
                if (params.length == type.length) {
                    for (var i = 0; i < type.length; i++) {
                        if ((type.charAt(i) == 's') && (typeof (params[i]) == 'string'))
                            params_obj.push({ type: "string", value: params[i] });
                        else if ((type.charAt(i) == 'n') && (typeof (params[i]) == 'number')) {
                            params_obj.push({ type: "number", value: params[i].toString() });
                        }
                        else if ((type.charAt(i) == 'b') && (typeof (params[i]) == 'boolean')) {
                            params_obj.push({ type: "boolean", value: params[i].toString() });
                        }
                        else if ((type.charAt(i) == 'o') && (typeof (params[i]) == 'object')) {
                            var _obj = this.m_cc_stub_mgr.findStubByID(params[i].object_id);
                            params_obj.push({ type: "object", value: { object_id: _obj.object_id, name: _obj.object_name } });
                        }
                        else
                            throw "invoke param type is invalid. (mismatch type string and param )";
                    }
                    cobraLogger.debug("[CobraROA / invoke] invoke params encode message - " + JSON.stringify(params_obj));
                }
                else {
                    cobraLogger.error("[CobraROA / invoke] invoke params is error");
                }
            }
            var ret_msg = this.m_comm.send(this.m_cc_codec.jsonEncode(this.m_session_id, "invoke", obj.object_id, name, params_obj), bsync);
            if (bsync == false)
                return true;
            var ret_obj = this.m_cc_codec.jsonDecode(ret_msg);
            if (ret_obj == "null")
                return;
            else if (ret_obj != null) {
                return this.covParam(ret_obj.value);
            }
        }
        catch (e) {
            cobraLogger.error("[CobraROA / invoke] function(" + name + ") call error -" + e);
        }
        return undefined;
    };
    CobraROA.prototype.registerCallback = function (obj, name, fnc, priority) {
        if (priority == undefined)
            priority = true;
        var StubEvt = obj.findStubEventListener(name);
        if (StubEvt) {
            if (priority == true)
                StubEvt.listener = fnc;
            return true;
        }
        try {
            var ret = this.m_comm.send(this.m_cc_codec.jsonEncode(this.m_session_id, "registercallback", obj.object_id, name, null), true);
            if (ret != null) {
                var ret_obj = this.m_cc_codec.jsonDecode(ret);
                if (ret_obj) {
                    obj.addStubEventListener(name, fnc, priority);
                    cobraLogger.debug("[CobraROA / register_callback] object(" + obj.object_id + ") event name(" + name + ") result(" + ret_obj + ")");
                    return this.covParam(ret_obj.value);
                }
            }
        }
        catch (e) {
            cobraLogger.error("[CobraROA / register_callback] event name(" + name + ") error (" + e + ")");
        }
        return false;
    };
    CobraROA.prototype.unregisterCallback = function (obj, name) {
        try {
            var ret = this.m_comm.send(this.m_cc_codec.jsonEncode(this.m_session_id, "unregistercallback", obj.object_id, name, null), true);
            if (ret) {
                var ret_obj = this.m_cc_codec.jsonDecode(ret);
                if (ret_obj != null) {
                    obj.removeStubEventListener(name);
                    cobraLogger.debug("[CobraROA / unregist_callback] Object(" + obj.object_id + ") EventName(" + name + ") result(" + ret_obj + ")");
                    return this.covParam(ret_obj.value);
                }
            }
        }
        catch (e) {
            cobraLogger.error("[CobraROA / unregister_callback] Object(" + name + ") - error (" + e + ")");
        }
        return false;
    };
    CobraROA.prototype.covParam = function (arg) {
        //to check COBRA_DATA_TYPE.NONE 
        if (arg.type == "")
            return null;
        if (arg.type == undefined || arg.value == undefined) {
            console.log("invoke return object(type or value) is invalid or null.");
        }
        if (arg.type == "string") {
            return arg.value;
        }
        else if (arg.type == "number") {
            //return parseFloat(arg.value);
            return Number(arg.value);
        }
        else if (arg.type == "boolean") {
            if (arg.value == "true")
                return true;
            else
                return false;
        }
        else if (arg.type == "object") {
            var obj = arg.value;
            var stub = new StubBase(obj.name, obj.object_id, this.m_session_id);
            return stub;
        }
        else
            return null;
    };
    return CobraROA;
})();
///<reference path='./cobra_communicator.ts'/>
///<reference path='./cobra_roa.ts'/>
///<reference path='./libs/logger.ts'/>
var CobraConfig = (function () {
    function CobraConfig() {
        this.onConfigChanged = null;
        this.m_auto_disconnect = true;
    }
    Object.defineProperty(CobraConfig.prototype, "autodisconnect", {
        get: function () {
            return this.m_auto_disconnect;
        },
        set: function (conn) {
            this.m_auto_disconnect = conn;
            if (this.onConfigChanged)
                this.onConfigChanged("autodisconnect", conn);
        },
        enumerable: true,
        configurable: true
    });
    return CobraConfig;
})();
var CobraClient = (function () {
    function CobraClient(name) {
        var _this = this;
        this.onConnect = function (session_id) {
            if (_this.m_roa == null)
                _this.m_roa = new CobraROA();
            cobraLogger.debug("[CobraClient] CONNECTED " + session_id);
            _this.roa.setCommunicator(_this.comm, session_id);
        };
        this.onDisconnect = function (session_id) {
            if (_this.m_roa != null)
                delete _this.m_roa;

            cobraLogger.debug("[CobraClient] DISCONNECTED " + session_id);
        };
        this.onError = function () {
            cobraLogger.critical("[CobraClient] connection error");
        };
        this.onConfigChanged = function (config, on) {
            if (config == "autodisconnect") {
                _this.m_comm.setAutoDisconnect(on);
            }
        };
        this.config = null;
        this.m_comm = null;
        this.m_roa = null;
        this.m_name = null;
        cobraLogger.debug("[CobraClient] constructor..");
        if (this.m_comm == null) {
            this.m_comm = new CobraCommunicator();
            this.m_comm.onConnected = this.onConnect;
            this.m_comm.onDisconnected = this.onDisconnect;
            this.m_comm.onError = this.onError;
        }
        if (this.config == null) {
            this.config = new CobraConfig();
            this.config.onConfigChanged = this.onConfigChanged;
        }
        this.m_name = name;
    }
    Object.defineProperty(CobraClient.prototype, "roa", {
        get: function () {
            if (this.m_roa == null) {
                cobraLogger.error("[CobraClient] NOT CNNECTED ");
                throw "[CobraClient] not connected to server";
                return null;
            }
            return this.m_roa;
        },
        set: function (roa) {
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CobraClient.prototype, "comm", {
        get: function () {
            return this.m_comm;
        },
        set: function (comm) {
        },
        enumerable: true,
        configurable: true
    });
    return CobraClient;
})();
var CobraClientManager = (function () {
    function CobraClientManager() {
        this.m_clients = {};
    }
    CobraClientManager.prototype.getCobraClient = function (name) {
        if (this.m_clients[name] != null)
            return this.m_clients[name];
        var cc = new CobraClient(name);
        this.m_clients[name] = cc; // OK
        return cc;
    };
    CobraClientManager.prototype.findCobraClient = function (name) {
        return this.m_clients[name];
    };
    CobraClientManager.prototype.findCobraClient_sessionid = function (session) {
        for (var index = 0; index < Object.keys(this.m_clients).length; index++) {
            var name = Object.keys(this.m_clients)[index];
            var client = this.m_clients[name];
            if (client != undefined && client.roa.session == session)
                return client;
        }
        return null;
    };
    return CobraClientManager;
})();
var ccm = new CobraClientManager();
var CobraFactory = {
    getCobraClient: function (server_name) {
        return ccm.getCobraClient(server_name);
    },
    findCobraClient: function (server_name) {
        return ccm.findCobraClient(server_name);
    },
    findCobraClient_sessionid: function (session) {
        return ccm.findCobraClient_sessionid(session);
    },
};
