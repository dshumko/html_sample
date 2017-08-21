/*
 * TEST CASE for HTML5
 *
 * written by STB-Component Browser Part.
 *
 */

var benchmark = function() {
(function () {
    var b, a;
    (function (S) {
        var o;
        var i = [],
            t = [];
        var L = 0;
        var j = {};
        var c = +new Date + "";
        var d = 75;
        var n = 40;
        var y = /\b__p \+= '';/g,
            W = /\b(__p \+=) '' \+/g,
            g = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
        var H = /&(?:amp|lt|gt|quot|#39);/g;
        var B = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
        var F = /\w*$/;
        var p = /<%=([\s\S]+?)%>/g;
        var l = (l = /\bthis\b/) && l.test(ad) && l;
        var I = (" \t\x0B\f\xA0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000");
        var ac = RegExp("^[" + I + "]*0+(?=.$)");
        var U = /($^)/;
        var C = /[&<>"']/g;
        var Z = /['\n\r\t\u2028\u2029\\]/g;
        var z = ["Array", "Boolean", "Date", "Error", "Function", "Math", "Number", "Object", "RegExp", "String", "_", "attachEvent", "clearTimeout", "isFinite", "isNaN", "parseInt", "setImmediate", "setTimeout"];
        var E = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
        var af = 0;
        var Y = "[object Arguments]",
            v = "[object Array]",
            D = "[object Boolean]",
            N = "[object Date]",
            M = "[object Error]",
            ag = "[object Function]",
            J = "[object Number]",
            e = "[object Object]",
            O = "[object RegExp]",
            K = "[object String]";
        var w = {};
        w[ag] = false;
        w[Y] = w[v] = w[D] = w[N] = w[J] = w[e] = w[O] = w[K] = true;
        var G = {
            "boolean": false,
            "function": true,
            object: true,
            number: false,
            string: false,
            "undefined": false
        };
        var Q = {
            "\\": "\\",
            "'": "'",
            "\n": "n",
            "\r": "r",
            "\t": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        };
        var aa = G[typeof exports] && exports;
        var A = G[typeof module] && module && module.exports == aa && module;
        var x = G[typeof global] && global;
        if (x && (x.global === x || x.window === x)) {
            S = x;
        }

        function T(al, ak, ai) {
            var ah = (ai || 0) - 1,
                aj = al.length;
            while (++ah < aj) {
                if (al[ah] === ak) {
                    return ah;
                }
            }
            return -1;
        }

        function R(ah, ak) {
            var aj = typeof ak;
            ah = ah.cache;
            if (aj == "boolean" || ak == null) {
                return ah[ak];
            }
            if (aj != "number" && aj != "string") {
                aj = "object";
            }
            var ai = aj == "number" ? ak : c + ak;
            ah = ah[aj] || (ah[aj] = {});
            return aj == "object" ? (ah[ai] && T(ah[ai], ak) > -1 ? 0 : -1) : (ah[ai] ? 0 : -1);
        }

        function P(al) {
            var ai = this.cache,
                ak = typeof al;
            if (ak == "boolean" || al == null) {
                ai[al] = true;
            } else {
                if (ak != "number" && ak != "string") {
                    ak = "object";
                }
                var aj = ak == "number" ? al : c + al,
                    ah = ai[ak] || (ai[ak] = {});
                if (ak == "object") {
                    if ((ah[aj] || (ah[aj] = [])).push(al) == this.array.length) {
                        ai[ak] = false;
                    }
                } else {
                    ah[aj] = true;
                }
            }
        }

        function r(ah) {
            return ah.charCodeAt(0);
        }

        function ab(ak, aj) {
            var ah = ak.index,
                al = aj.index;
            ak = ak.criteria;
            aj = aj.criteria;
            if (ak !== aj) {
                if (ak > aj || typeof ak == "undefined") {
                    return 1;
                }
                if (ak < aj || typeof aj == "undefined") {
                    return -1;
                }
            }
            return ah < al ? -1 : 1;
        }

        function ae(al) {
            var aj = -1,
                ak = al.length;
            var ai = s();
            ai["false"] = ai["null"] = ai["true"] = ai["undefined"] = false;
            var ah = s();
            ah.array = al;
            ah.cache = ai;
            ah.push = P;
            while (++aj < ak) {
                ah.push(al[aj]);
            }
            return ai.object === false ? (q(ah), null) : ah;
        }

        function h(ah) {
            return "\\" + Q[ah];
        }

        function f() {
            return i.pop() || [];
        }

        function s() {
            return t.pop() || {
                args: "",
                array: null,
                bottom: "",
                cache: null,
                criteria: null,
                "false": false,
                firstArg: "",
                index: 0,
                init: "",
                leading: false,
                loop: "",
                maxWait: 0,
                "null": false,
                number: null,
                object: null,
                push: null,
                shadowedProps: null,
                string: null,
                top: "",
                trailing: false,
                "true": false,
                "undefined": false,
                useHas: false,
                useKeys: false,
                value: null
            };
        }

        function m(ah) {
            return typeof ah.toString != "function" && typeof (ah + "") == "string";
        }

        function X() {}

        function V(ah) {
            ah.length = 0;
            if (i.length < n) {
                i.push(ah);
            }
        }

        function q(ai) {
            var ah = ai.cache;
            if (ah) {
                q(ah);
            }
            ai.array = ai.cache = ai.criteria = ai.object = ai.number = ai.string = ai.value = null;
            if (t.length < n) {
                t.push(ai);
            }
        }

        function u(am, al, ai) {
            al || (al = 0);
            if (typeof ai == "undefined") {
                ai = am ? am.length : 0;
            }
            var aj = -1,
                ak = ai - al || 0,
                ah = Array(ak < 0 ? 0 : ak);
            while (++aj < ak) {
                ah[aj] = am[al + aj];
            }
            return ah;
        }

        function ad(aj) {
            aj = aj ? b.defaults(S.Object(), aj, b.pick(S, z)) : S;
            var aH = aj.Array,
                ca = aj.Boolean,
                cb = aj.Date,
                cL = aj.Error,
                a0 = aj.Function,
                b1 = aj.Math,
                bg = aj.Number,
                cO = aj.Object,
                cw = aj.RegExp,
                ci = aj.String,
                aI = aj.TypeError;
            var b5 = [];
            var a7 = cL.prototype,
                cy = cO.prototype,
                aC = ci.prototype;
            var cH = aj._;
            var bY = cw("^" + ci(cy.valueOf).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/valueOf|for [^\]]+/g, ".+?") + "$");
            var aX = b1.ceil,
                bS = aj.clearTimeout,
                bG = b5.concat,
                cB = b1.floor,
                bB = a0.prototype.toString,
                au = bY.test(au = cO.getPrototypeOf) && au,
                a1 = cy.hasOwnProperty,
                ax = b5.push,
                ap = cy.propertyIsEnumerable,
                bW = aj.setImmediate,
                aY = aj.setTimeout,
                aA = cy.toString;
            var b3 = bY.test(b3 = aA.bind) && b3,
                aw = bY.test(aw = cO.create) && aw,
                bh = bY.test(bh = aH.isArray) && bh,
                aL = aj.isFinite,
                bD = aj.isNaN,
                cd = bY.test(cd = cO.keys) && cd,
                ce = b1.max,
                ao = b1.min,
                cW = aj.parseInt,
                bK = b1.random,
                aK = b5.slice;
            var a2 = bY.test(aj.attachEvent),
                ar = b3 && !/\n|true/.test(b3 + a2);
            var cz = {};
            cz[v] = aH;
            cz[D] = ca;
            cz[N] = cb;
            cz[ag] = a0;
            cz[e] = cO;
            cz[J] = bg;
            cz[O] = cw;
            cz[K] = ci;
            var bA = {};
            bA[v] = bA[N] = bA[J] = {
                constructor: true,
                toLocaleString: true,
                toString: true,
                valueOf: true
            };
            bA[D] = bA[K] = {
                constructor: true,
                toString: true,
                valueOf: true
            };
            bA[M] = bA[ag] = bA[O] = {
                constructor: true,
                toString: true
            };
            bA[e] = {
                constructor: true
            };
            (function () {
                var c1 = E.length;
                while (c1--) {
                    var c2 = E[c1];
                    for (var at in bA) {
                        if (a1.call(bA, at) && !a1.call(bA[at], c2)) {
                            bA[at][c2] = false;
                        }
                    }
                }
            }());

            function aV(at) {
                return (at && typeof at == "object" && !bC(at) && a1.call(at, "__wrapped__")) ? at : new cC(at);
            }

            function cC(at) {
                this.__wrapped__ = at;
            }
            cC.prototype = aV.prototype;
            var aG = aV.support = {};
            (function () {
                var c2 = function () {
                        this.x = 1;
                    },
                    at = {
                        "0": 1,
                        length: 1
                    },
                    c1 = [];
                c2.prototype = {
                    valueOf: 1,
                    y: 1
                };
                for (var c4 in new c2) {
                    c1.push(c4);
                }
                for (c4 in arguments) {}
                aG.argsObject = arguments.constructor == cO && !(arguments instanceof aH);
                aG.argsClass = a6(arguments);
                aG.enumErrorProps = ap.call(a7, "message") || ap.call(a7, "name");
                aG.enumPrototypes = ap.call(c2, "prototype");
                aG.fastBind = b3 && !ar;
                aG.ownLast = c1[0] != "x";
                aG.nonEnumArgs = c4 != 0;
                aG.nonEnumShadows = !/valueOf/.test(c1);
                aG.spliceObjects = (b5.splice.call(at, 0, 1), !at[0]);
                aG.unindexedChars = ("x" [0] + cO("x")[0]) != "xx";
                try {
                    aG.nodeClass = !(aA.call(document) == e && !({
                        toString: 0
                    } + ""));
                } catch (c3) {
                    aG.nodeClass = true;
                }
            }(1));
            aV.templateSettings = {
                escape: /<%-([\s\S]+?)%>/g,
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: p,
                variable: "",
                imports: {
                    _: aV
                }
            };
            var bM = function (c2) {
                var at = "var index, iterable = " + (c2.firstArg) + ", result = " + (c2.init) + ";\nif (!iterable) return result;\n" + (c2.top) + ";";
                if (c2.array) {
                    at += "\nvar length = iterable.length; index = -1;\nif (" + (c2.array) + ") {  ";
                    if (aG.unindexedChars) {
                        at += "\n  if (isString(iterable)) {\n    iterable = iterable.split('')\n  }  ";
                    }
                    at += "\n  while (++index < length) {\n    " + (c2.loop) + ";\n  }\n}\nelse {  ";
                } else {
                    if (aG.nonEnumArgs) {
                        at += "\n  var length = iterable.length; index = -1;\n  if (length && isArguments(iterable)) {\n    while (++index < length) {\n      index += '';\n      " + (c2.loop) + ";\n    }\n  } else {  ";
                    }
                } if (aG.enumPrototypes) {
                    at += "\n  var skipProto = typeof iterable == 'function';\n  ";
                }
                if (aG.enumErrorProps) {
                    at += "\n  var skipErrorProps = iterable === errorProto || iterable instanceof Error;\n  ";
                }
                var c1 = [];
                if (aG.enumPrototypes) {
                    c1.push('!(skipProto && index == "prototype")');
                }
                if (aG.enumErrorProps) {
                    c1.push('!(skipErrorProps && (index == "message" || index == "name"))');
                }
                if (c2.useHas && c2.useKeys) {
                    at += "\n  var ownIndex = -1,\n      ownProps = objectTypes[typeof iterable] && keys(iterable),\n      length = ownProps ? ownProps.length : 0;\n\n  while (++ownIndex < length) {\n    index = ownProps[ownIndex];\n";
                    if (c1.length) {
                        at += "    if (" + (c1.join(" && ")) + ") {\n  ";
                    }
                    at += (c2.loop) + ";    ";
                    if (c1.length) {
                        at += "\n    }";
                    }
                    at += "\n  }  ";
                } else {
                    at += "\n  for (index in iterable) {\n";
                    if (c2.useHas) {
                        c1.push("hasOwnProperty.call(iterable, index)");
                    }
                    if (c1.length) {
                        at += "    if (" + (c1.join(" && ")) + ") {\n  ";
                    }
                    at += (c2.loop) + ";    ";
                    if (c1.length) {
                        at += "\n    }";
                    }
                    at += "\n  }    ";
                    if (aG.nonEnumShadows) {
                        at += "\n\n  if (iterable !== objectProto) {\n    var ctor = iterable.constructor,\n        isProto = iterable === (ctor && ctor.prototype),\n        className = iterable === stringProto ? stringClass : iterable === errorProto ? errorClass : toString.call(iterable),\n        nonEnum = nonEnumProps[className];\n      ";
                        for (k = 0; k < 7; k++) {
                            at += "\n    index = '" + (c2.shadowedProps[k]) + "';\n    if ((!(isProto && nonEnum[index]) && hasOwnProperty.call(iterable, index))";
                            if (!c2.useHas) {
                                at += " || (!nonEnum[index] && iterable[index] !== objectProto[index])";
                            }
                            at += ") {\n      " + (c2.loop) + ";\n    }      ";
                        }
                        at += "\n  }    ";
                    }
                } if (c2.array || aG.nonEnumArgs) {
                    at += "\n}";
                }
                at += (c2.bottom) + ";\nreturn result";
                return at;
            };
            var b6 = {
                args: "object, source, guard",
                top: "var args = arguments,\n    argsIndex = 0,\n    argsLength = typeof guard == 'number' ? 2 : args.length;\nwhile (++argsIndex < argsLength) {\n  iterable = args[argsIndex];\n  if (iterable && objectTypes[typeof iterable]) {",
                loop: "if (typeof result[index] == 'undefined') result[index] = iterable[index]",
                bottom: "  }\n}"
            };
            var bp = {
                args: "collection, callback, thisArg",
                top: "callback = callback && typeof thisArg == 'undefined' ? callback : lodash.createCallback(callback, thisArg)",
                array: "typeof length == 'number'",
                loop: "if (callback(iterable[index], index, collection) === false) return result"
            };
            var ah = {
                top: "if (!objectTypes[typeof iterable]) return result;\n" + bp.top,
                array: false
            };

            function aQ(c2, c5, c4, c7) {
                var c6 = ay(c2),
                    at = !c4,
                    c8 = c5;
                if (at) {
                    var c1 = c7;
                    c4 = c5;
                } else {
                    if (!c6) {
                        if (!c7) {
                            throw new aI;
                        }
                        c5 = c2;
                    }
                }

                function c3() {
                    var db = arguments,
                        da = at ? this : c5;
                    if (!c6) {
                        c2 = c5[c8];
                    }
                    if (c4.length) {
                        db = db.length ? (db = aK.call(db), c1 ? db.concat(c4) : c4.concat(db)) : c4;
                    }
                    if (this instanceof c3) {
                        da = bf(c2.prototype);
                        var c9 = c2.apply(da, db);
                        return cZ(c9) ? c9 : da;
                    }
                    return c2.apply(da, db);
                }
                return c3;
            }

            function aT() {
                var c5 = s();
                c5.shadowedProps = E;
                c5.array = c5.bottom = c5.loop = c5.top = "";
                c5.init = "iterable";
                c5.useHas = true;
                c5.useKeys = !!b8;
                for (var c3, c2 = 0; c3 = arguments[c2]; c2++) {
                    for (var c4 in c3) {
                        c5[c4] = c3[c4];
                    }
                }
                var c1 = c5.args;
                c5.firstArg = /^[^,]+/.exec(c1)[0];
                var at = a0("errorClass, errorProto, hasOwnProperty, isArguments, isArray, isString, keys, lodash, objectProto, objectTypes, nonEnumProps, stringClass, stringProto, toString", "return function(" + c1 + ") {\n" + bM(c5) + "\n}");
                q(c5);
                return at(M, a7, a1, a6, bC, cp, b8, aV, cy, G, bA, K, aC, aA);
            }

            function bf(at) {
                return cZ(at) ? aw(at) : {};
            }
            if (!aw) {
                var bf = function (c1) {
                    if (cZ(c1)) {
                        X.prototype = c1;
                        var at = new X;
                        X.prototype = null;
                    }
                    return at || {};
                };
            }

            function bn(at) {
                return aU[at];
            }

            function b2(c3, c2, c1) {
                var at = (at = aV.indexOf) === cS ? T : at;
                return at;
            }

            function cY(at) {
                return function (c4, c2, c3, c1) {
                    if (typeof c2 != "boolean" && c2 != null) {
                        c1 = c3;
                        c3 = !(c1 && c1[c2] === c4) ? c2 : o;
                        c2 = false;
                    }
                    if (c3 != null) {
                        c3 = aV.createCallback(c3, c1);
                    }
                    return at(c4, c2, c3, c1);
                };
            }

            function aN(c2) {
                var c1, at;
                if (!(c2 && aA.call(c2) == e) || (c1 = c2.constructor, ay(c1) && !(c1 instanceof c1)) || (!aG.argsClass && a6(c2)) || (!aG.nodeClass && m(c2))) {
                    return false;
                }
                if (aG.ownLast) {
                    ak(c2, function (c5, c4, c3) {
                        at = a1.call(c3, c4);
                        return false;
                    });
                    return at !== false;
                }
                ak(c2, function (c4, c3) {
                    at = c3;
                });
                return at === o || a1.call(c2, at);
            }

            function bo(at) {
                return bT[at];
            }

            function a6(at) {
                return aA.call(at) == Y;
            }
            if (!aG.argsClass) {
                a6 = function (at) {
                    return at ? a1.call(at, "callee") : false;
                };
            }
            var bC = bh || function (at) {
                return at ? (typeof at == "object" && aA.call(at) == v) : false;
            };
            var be = aT({
                args: "object",
                init: "[]",
                top: "if (!(objectTypes[typeof object])) return result",
                loop: "result.push(index)"
            });
            var b8 = !cd ? be : function (at) {
                if (!cZ(at)) {
                    return [];
                }
                if ((aG.enumPrototypes && typeof at == "function") || (aG.nonEnumArgs && at.length && a6(at))) {
                    return be(at);
                }
                return cd(at);
            };
            var cK = aT(bp);
            var aU = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            };
            var bT = b4(aU);
            var bs = aT(b6, {
                top: b6.top.replace(";", ";\nif (argsLength > 3 && typeof args[argsLength - 2] == 'function') {\n  var callback = lodash.createCallback(args[--argsLength - 1], args[argsLength--], 2);\n} else if (argsLength > 2 && typeof args[argsLength - 1] == 'function') {\n  callback = args[--argsLength];\n}"),
                loop: "result[index] = callback ? callback(result[index], iterable[index]) : iterable[index]"
            });

            function cs(c9, da, db, c7, c4, c2) {
                var dc = c9;
                if (typeof da != "boolean" && da != null) {
                    c7 = db;
                    db = da;
                    da = false;
                }
                if (typeof db == "function") {
                    db = (typeof c7 == "undefined") ? db : aV.createCallback(db, c7, 1);
                    dc = db(dc);
                    if (typeof dc != "undefined") {
                        return dc;
                    }
                    dc = c9;
                }
                var c3 = cZ(dc);
                if (c3) {
                    var c6 = aA.call(dc);
                    if (!w[c6] || (!aG.nodeClass && m(dc))) {
                        return dc;
                    }
                    var c5 = bC(dc);
                }
                if (!c3 || !da) {
                    return c3 ? (c5 ? u(dc) : bs({}, dc)) : dc;
                }
                var c8 = cz[c6];
                switch (c6) {
                case D:
                case N:
                    return new c8(+dc);
                case J:
                case K:
                    return new c8(dc);
                case O:
                    return c8(dc.source, F.exec(dc));
                }
                var c1 = !c4;
                c4 || (c4 = f());
                c2 || (c2 = f());
                var at = c4.length;
                while (at--) {
                    if (c4[at] == c9) {
                        return c2[at];
                    }
                }
                dc = c5 ? c8(dc.length) : {};
                if (c5) {
                    if (a1.call(c9, "index")) {
                        dc.index = c9.index;
                    }
                    if (a1.call(c9, "input")) {
                        dc.input = c9.input;
                    }
                }
                c4.push(c9);
                c2.push(dc);
                (c5 ? cK : bO)(c9, function (dd, de) {
                    dc[de] = cs(dd, da, db, o, c4, c2);
                });
                if (c1) {
                    V(c4);
                    V(c2);
                }
                return dc;
            }

            function cV(c1, c2, at) {
                return cs(c1, true, c2, at);
            }
            var bt = aT(b6);

            function cl(c2, c3, c1) {
                var at;
                c3 = aV.createCallback(c3, c1);
                bO(c2, function (c6, c5, c4) {
                    if (c3(c6, c5, c4)) {
                        at = c5;
                        return false;
                    }
                });
                return at;
            }
            var ak = aT(bp, ah, {
                useHas: false
            });
            var bO = aT(bp, ah);

            function cx(c1) {
                var at = [];
                ak(c1, function (c3, c2) {
                    if (ay(c3)) {
                        at.push(c2);
                    }
                });
                return at.sort();
            }

            function cJ(at, c1) {
                return at ? a1.call(at, c1) : false;
            }

            function b4(c2) {
                var c1 = -1,
                    c4 = b8(c2),
                    c5 = c4.length,
                    at = {};
                while (++c1 < c5) {
                    var c3 = c4[c1];
                    at[c2[c3]] = c3;
                }
                return at;
            }

            function bH(at) {
                return at === true || at === false || aA.call(at) == D;
            }

            function ba(at) {
                return at ? (typeof at == "object" && aA.call(at) == N) : false;
            }

            function bZ(at) {
                return at ? at.nodeType === 1 : false;
            }

            function cj(c3) {
                var at = true;
                if (!c3) {
                    return at;
                }
                var c1 = aA.call(c3),
                    c2 = c3.length;
                if ((c1 == v || c1 == K || (aG.argsClass ? c1 == Y : a6(c3))) || (c1 == e && typeof c2 == "number" && ay(c3.splice))) {
                    return !c2;
                }
                bO(c3, function () {
                    return (at = false);
                });
                return at;
            }

            function b0(dh, dg, c7, df, dj, di) {
                var c6 = c7 === j;
                if (typeof c7 == "function" && !c6) {
                    c7 = aV.createCallback(c7, df, 2);
                    var dc = c7(dh, dg);
                    if (typeof dc != "undefined") {
                        return !!dc;
                    }
                }
                if (dh === dg) {
                    return dh !== 0 || (1 / dh == 1 / dg);
                }
                var c4 = typeof dh,
                    c2 = typeof dg;
                if (dh === dh && (!dh || (c4 != "function" && c4 != "object")) && (!dg || (c2 != "function" && c2 != "object"))) {
                    return false;
                }
                if (dh == null || dg == null) {
                    return dh === dg;
                }
                var at = aA.call(dh),
                    da = aA.call(dg);
                if (at == Y) {
                    at = e;
                }
                if (da == Y) {
                    da = e;
                }
                if (at != da) {
                    return false;
                }
                switch (at) {
                case D:
                case N:
                    return +dh == +dg;
                case J:
                    return (dh != +dh) ? dg != +dg : (dh == 0 ? (1 / dh == 1 / dg) : dh == +dg);
                case O:
                case K:
                    return dh == ci(dg);
                }
                var c8 = at == v;
                if (!c8) {
                    if (a1.call(dh, "__wrapped__ ") || a1.call(dg, "__wrapped__")) {
                        return b0(dh.__wrapped__ || dh, dg.__wrapped__ || dg, c7, df, dj, di);
                    }
                    if (at != e || (!aG.nodeClass && (m(dh) || m(dg)))) {
                        return false;
                    }
                    var c3 = !aG.argsObject && a6(dh) ? cO : dh.constructor,
                        c1 = !aG.argsObject && a6(dg) ? cO : dg.constructor;
                    if (c3 != c1 && !(ay(c3) && c3 instanceof c3 && ay(c1) && c1 instanceof c1)) {
                        return false;
                    }
                }
                var db = !dj;
                dj || (dj = f());
                di || (di = f());
                var c5 = dj.length;
                while (c5--) {
                    if (dj[c5] == dh) {
                        return di[c5] == dg;
                    }
                }
                var dd = 0;
                dc = true;
                dj.push(dh);
                di.push(dg);
                if (c8) {
                    c5 = dh.length;
                    dd = dg.length;
                    dc = dd == dh.length;
                    if (!dc && !c6) {
                        return dc;
                    }
                    while (dd--) {
                        var c9 = c5,
                            de = dg[dd];
                        if (c6) {
                            while (c9--) {
                                if ((dc = b0(dh[c9], de, c7, df, dj, di))) {
                                    break;
                                }
                            }
                        } else {
                            if (!(dc = b0(dh[dd], de, c7, df, dj, di))) {
                                break;
                            }
                        }
                    }
                    return dc;
                }
                ak(dg, function (dm, dl, dk) {
                    if (a1.call(dk, dl)) {
                        dd++;
                        return (dc = a1.call(dh, dl) && b0(dh[dl], dm, c7, df, dj, di));
                    }
                });
                if (dc && !c6) {
                    ak(dh, function (dm, dl, dk) {
                        if (a1.call(dk, dl)) {
                            return (dc = --dd > -1);
                        }
                    });
                }
                if (db) {
                    V(dj);
                    V(di);
                }
                return dc;
            }

            function aM(at) {
                return aL(at) && !bD(parseFloat(at));
            }

            function ay(at) {
                return typeof at == "function";
            }
            if (ay(/x/)) {
                ay = function (at) {
                    return typeof at == "function" && aA.call(at) == ag;
                };
            }

            function cZ(at) {
                return !!(at && G[typeof at]);
            }

            function bQ(at) {
                return br(at) && at != +at;
            }

            function cQ(at) {
                return at === null;
            }

            function br(at) {
                return typeof at == "number" || aA.call(at) == J;
            }
            var aO = !au ? aN : function (c2) {
                if (!(c2 && aA.call(c2) == e) || (!aG.argsClass && a6(c2))) {
                    return false;
                }
                var at = c2.valueOf,
                    c1 = typeof at == "function" && (c1 = au(at)) && au(c1);
                return c1 ? (c2 == c1 || au(c2) == c1) : aN(c2);
            };

            function cE(at) {
                return !!(at && G[typeof at]) && aA.call(at) == O;
            }

            function cp(at) {
                return typeof at == "string" || aA.call(at) == K;
            }

            function bV(at) {
                return typeof at == "undefined";
            }

            function bJ(c4, at, c5) {
                var c8 = arguments,
                    c7 = 0,
                    c2 = 2;
                if (!cZ(c4)) {
                    return c4;
                }
                if (c5 === j) {
                    var c9 = c8[3],
                        c6 = c8[4],
                        c3 = c8[5];
                } else {
                    var c1 = true;
                    c6 = f();
                    c3 = f();
                    if (typeof c5 != "number") {
                        c2 = c8.length;
                    }
                    if (c2 > 3 && typeof c8[c2 - 2] == "function") {
                        c9 = aV.createCallback(c8[--c2 - 1], c8[c2--], 2);
                    } else {
                        if (c2 > 2 && typeof c8[c2 - 1] == "function") {
                            c9 = c8[--c2];
                        }
                    }
                }
                while (++c7 < c2) {
                    (bC(c8[c7]) ? bz : bO)(c8[c7], function (dg, dc) {
                        var df, dd, db = dg,
                            de = c4[dc];
                        if (dg && ((dd = bC(dg)) || aO(dg))) {
                            var dh = c6.length;
                            while (dh--) {
                                if ((df = c6[dh] == dg)) {
                                    de = c3[dh];
                                    break;
                                }
                            }
                            if (!df) {
                                var da;
                                if (c9) {
                                    db = c9(de, dg);
                                    if ((da = typeof db != "undefined")) {
                                        de = db;
                                    }
                                }
                                if (!da) {
                                    de = dd ? (bC(de) ? de : []) : (aO(de) ? de : {});
                                }
                                c6.push(dg);
                                c3.push(de);
                                if (!da) {
                                    de = bJ(de, dg, j, c9, c6, c3);
                                }
                            }
                        } else {
                            if (c9) {
                                db = c9(de, dg);
                                if (typeof db == "undefined") {
                                    db = dg;
                                }
                            }
                            if (typeof db != "undefined") {
                                de = db;
                            }
                        }
                        c4[dc] = de;
                    });
                }
                if (c1) {
                    V(c6);
                    V(c3);
                }
                return c4;
            }

            function cm(c2, c6, c1) {
                var c4 = b2(),
                    c5 = typeof c6 == "function",
                    at = {};
                if (c5) {
                    c6 = aV.createCallback(c6, c1);
                } else {
                    var c3 = bG.apply(b5, aK.call(arguments, 1));
                }
                ak(c2, function (c9, c8, c7) {
                    if (c5 ? !c6(c9, c8, c7) : c4(c3, c8) < 0) {
                        at[c8] = c9;
                    }
                });
                return at;
            }

            function by(c2) {
                var c1 = -1,
                    c4 = b8(c2),
                    c5 = c4.length,
                    at = aH(c5);
                while (++c1 < c5) {
                    var c3 = c4[c1];
                    at[c1] = [c3, c2[c3]];
                }
                return at;
            }

            function bL(c3, c7, c1) {
                var at = {};
                if (typeof c7 != "function") {
                    var c2 = -1,
                        c5 = bG.apply(b5, aK.call(arguments, 1)),
                        c6 = cZ(c3) ? c5.length : 0;
                    while (++c2 < c6) {
                        var c4 = c5[c2];
                        if (c4 in c3) {
                            at[c4] = c3[c4];
                        }
                    }
                } else {
                    c7 = aV.createCallback(c7, c1);
                    ak(c3, function (da, c9, c8) {
                        if (c7(da, c9, c8)) {
                            at[c9] = da;
                        }
                    });
                }
                return at;
            }

            function cI(c2, c6, c1, at) {
                var c5 = bC(c2);
                c6 = aV.createCallback(c6, at, 4);
                if (c1 == null) {
                    if (c5) {
                        c1 = [];
                    } else {
                        var c4 = c2 && c2.constructor,
                            c3 = c4 && c4.prototype;
                        c1 = bf(c3);
                    }
                }(c5 ? cK : bO)(c2, function (c9, c8, c7) {
                    return c6(c1, c9, c8, c7);
                });
                return c1;
            }

            function bw(c2) {
                var c1 = -1,
                    c3 = b8(c2),
                    c4 = c3.length,
                    at = aH(c4);
                while (++c1 < c4) {
                    at[c1] = c2[c3[c1]];
                }
                return at;
            }

            function cA(c4) {
                var c1 = -1,
                    c2 = bG.apply(b5, aK.call(arguments, 1)),
                    c3 = c2.length,
                    at = aH(c3);
                if (aG.unindexedChars && cp(c4)) {
                    c4 = c4.split("");
                }
                while (++c1 < c3) {
                    at[c1] = c4[c2[c1]];
                }
                return at;
            }

            function a5(c6, c5, c3) {
                var c1 = -1,
                    c2 = b2(),
                    c4 = c6 ? c6.length : 0,
                    at = false;
                c3 = (c3 < 0 ? ce(0, c4 + c3) : c3) || 0;
                if (c4 && typeof c4 == "number") {
                    at = (cp(c6) ? c6.indexOf(c5, c3) : c2(c6, c5, c3)) > -1;
                } else {
                    cK(c6, function (c7) {
                        if (++c1 >= c3) {
                            return !(at = c7 === c5);
                        }
                    });
                }
                return at;
            }

            function bI(c2, c3, c1) {
                var at = {};
                c3 = aV.createCallback(c3, c1);
                bz(c2, function (c5, c4, c6) {
                    c4 = ci(c3(c5, c4, c6));
                    (a1.call(at, c4) ? at[c4]++ : at[c4] = 1);
                });
                return at;
            }

            function az(c4, c5, c1) {
                var at = true;
                c5 = aV.createCallback(c5, c1);
                if (bC(c4)) {
                    var c2 = -1,
                        c3 = c4.length;
                    while (++c2 < c3) {
                        if (!(at = !!c5(c4[c2], c2, c4))) {
                            break;
                        }
                    }
                } else {
                    cK(c4, function (c7, c6, c8) {
                        return (at = !!c5(c7, c6, c8));
                    });
                }
                return at;
            }

            function bP(c5, c6, c1) {
                var at = [];
                c6 = aV.createCallback(c6, c1);
                if (bC(c5)) {
                    var c2 = -1,
                        c3 = c5.length;
                    while (++c2 < c3) {
                        var c4 = c5[c2];
                        if (c6(c4, c2, c5)) {
                            at.push(c4);
                        }
                    }
                } else {
                    cK(c5, function (c8, c7, c9) {
                        if (c6(c8, c7, c9)) {
                            at.push(c8);
                        }
                    });
                }
                return at;
            }

            function bF(c5, c6, c1) {
                c6 = aV.createCallback(c6, c1);
                if (bC(c5)) {
                    var c2 = -1,
                        c3 = c5.length;
                    while (++c2 < c3) {
                        var c4 = c5[c2];
                        if (c6(c4, c2, c5)) {
                            return c4;
                        }
                    }
                } else {
                    var at;
                    cK(c5, function (c8, c7, c9) {
                        if (c6(c8, c7, c9)) {
                            at = c8;
                            return false;
                        }
                    });
                    return at;
                }
            }

            function bz(c3, c4, at) {
                if (c4 && typeof at == "undefined" && bC(c3)) {
                    var c1 = -1,
                        c2 = c3.length;
                    while (++c1 < c2) {
                        if (c4(c3[c1], c1, c3) === false) {
                            break;
                        }
                    }
                } else {
                    cK(c3, c4, at);
                }
                return c3;
            }

            function bq(c2, c3, c1) {
                var at = {};
                c3 = aV.createCallback(c3, c1);
                bz(c2, function (c5, c4, c6) {
                    c4 = ci(c3(c5, c4, c6));
                    (a1.call(at, c4) ? at[c4] : at[c4] = []).push(c5);
                });
                return at;
            }

            function aJ(c6, c1) {
                var c3 = aK.call(arguments, 2),
                    c2 = -1,
                    c5 = typeof c1 == "function",
                    c4 = c6 ? c6.length : 0,
                    at = aH(typeof c4 == "number" ? c4 : 0);
                bz(c6, function (c7) {
                    at[++c2] = (c5 ? c1 : c7[c1]).apply(c7, c3);
                });
                return at;
            }

            function bl(c4, c5, c1) {
                var c2 = -1,
                    c3 = c4 ? c4.length : 0,
                    at = aH(typeof c3 == "number" ? c3 : 0);
                c5 = aV.createCallback(c5, c1);
                if (bC(c4)) {
                    while (++c2 < c3) {
                        at[c2] = c5(c4[c2], c2, c4);
                    }
                } else {
                    cK(c4, function (c7, c6, c8) {
                        at[++c2] = c5(c7, c6, c8);
                    });
                }
                return at;
            }

            function bj(c6, c7, c1) {
                var c4 = -Infinity,
                    at = c4;
                if (!c7 && bC(c6)) {
                    var c2 = -1,
                        c3 = c6.length;
                    while (++c2 < c3) {
                        var c5 = c6[c2];
                        if (c5 > at) {
                            at = c5;
                        }
                    }
                } else {
                    c7 = (!c7 && cp(c6)) ? r : aV.createCallback(c7, c1);
                    cK(c6, function (c9, c8, db) {
                        var da = c7(c9, c8, db);
                        if (da > c4) {
                            c4 = da;
                            at = c9;
                        }
                    });
                }
                return at;
            }

            function cg(c6, c7, c1) {
                var c4 = Infinity,
                    at = c4;
                if (!c7 && bC(c6)) {
                    var c2 = -1,
                        c3 = c6.length;
                    while (++c2 < c3) {
                        var c5 = c6[c2];
                        if (c5 < at) {
                            at = c5;
                        }
                    }
                } else {
                    c7 = (!c7 && cp(c6)) ? r : aV.createCallback(c7, c1);
                    cK(c6, function (c9, c8, db) {
                        var da = c7(c9, c8, db);
                        if (da < c4) {
                            c4 = da;
                            at = c9;
                        }
                    });
                }
                return at;
            }
            var cU = bl;

            function ch(c5, c6, c1, at) {
                var c3 = arguments.length < 3;
                c6 = aV.createCallback(c6, at, 4);
                if (bC(c5)) {
                    var c2 = -1,
                        c4 = c5.length;
                    if (c3) {
                        c1 = c5[++c2];
                    }
                    while (++c2 < c4) {
                        c1 = c6(c1, c5[c2], c2, c5);
                    }
                } else {
                    cK(c5, function (c8, c7, c9) {
                        c1 = c3 ? (c3 = false, c8) : c6(c1, c8, c7, c9);
                    });
                }
                return c1;
            }

            function cF(c6, c7, c1, at) {
                var c5 = c6,
                    c4 = c6 ? c6.length : 0,
                    c3 = arguments.length < 3;
                if (typeof c4 != "number") {
                    var c2 = b8(c6);
                    c4 = c2.length;
                } else {
                    if (aG.unindexedChars && cp(c6)) {
                        c5 = c6.split("");
                    }
                }
                c7 = aV.createCallback(c7, at, 4);
                bz(c6, function (c9, c8, da) {
                    c8 = c2 ? c2[--c4] : --c4;
                    c1 = c3 ? (c3 = false, c5[c8]) : c7(c1, c5[c8], c8, da);
                });
                return c1;
            }

            function aB(c1, c2, at) {
                c2 = aV.createCallback(c2, at);
                return bP(c1, function (c4, c3, c5) {
                    return !c2(c4, c3, c5);
                });
            }

            function bx(c3) {
                var c1 = -1,
                    c2 = c3 ? c3.length : 0,
                    at = aH(typeof c2 == "number" ? c2 : 0);
                bz(c3, function (c5) {
                    var c4 = cB(bK() * (++c1 + 1));
                    at[c1] = at[c4];
                    at[c4] = c5;
                });
                return at;
            }

            function a9(c1) {
                var at = c1 ? c1.length : 0;
                return typeof at == "number" ? at : b8(c1).length;
            }

            function a8(c4, c5, c1) {
                var at;
                c5 = aV.createCallback(c5, c1);
                if (bC(c4)) {
                    var c2 = -1,
                        c3 = c4.length;
                    while (++c2 < c3) {
                        if ((at = c5(c4[c2], c2, c4))) {
                            break;
                        }
                    }
                } else {
                    cK(c4, function (c7, c6, c8) {
                        return !(at = c5(c7, c6, c8));
                    });
                }
                return !!at;
            }

            function bb(c5, c6, c1) {
                var c3 = -1,
                    c4 = c5 ? c5.length : 0,
                    at = aH(typeof c4 == "number" ? c4 : 0);
                c6 = aV.createCallback(c6, c1);
                bz(c5, function (c9, c8, da) {
                    var c7 = at[++c3] = s();
                    c7.criteria = c6(c9, c8, da);
                    c7.index = c3;
                    c7.value = c9;
                });
                c4 = at.length;
                at.sort(ab);
                while (c4--) {
                    var c2 = at[c4];
                    at[c4] = c2.value;
                    q(c2);
                }
                return at;
            }

            function aE(at) {
                if (at && typeof at.length == "number") {
                    return (aG.unindexedChars && cp(at)) ? at.split("") : u(at);
                }
                return bw(at);
            }
            var al = bP;

            function aP(c4) {
                var c1 = -1,
                    c2 = c4 ? c4.length : 0,
                    at = [];
                while (++c1 < c2) {
                    var c3 = c4[c1];
                    if (c3) {
                        at.push(c3);
                    }
                }
                return at;
            }

            function ai(c4) {
                var c3 = -1,
                    c5 = b2(),
                    c2 = c4 ? c4.length : 0,
                    at = bG.apply(b5, aK.call(arguments, 1)),
                    c8 = [];
                var c6 = c2 >= d && c5 === T;
                if (c6) {
                    var c1 = ae(at);
                    if (c1) {
                        c5 = R;
                        at = c1;
                    } else {
                        c6 = false;
                    }
                }
                while (++c3 < c2) {
                    var c7 = c4[c3];
                    if (c5(at, c7) < 0) {
                        c8.push(c7);
                    }
                }
                if (c6) {
                    q(at);
                }
                return c8;
            }

            function cP(c4, c3, at) {
                var c1 = -1,
                    c2 = c4 ? c4.length : 0;
                c3 = aV.createCallback(c3, at);
                while (++c1 < c2) {
                    if (c3(c4[c1], c1, c4)) {
                        return c1;
                    }
                }
                return -1;
            }

            function bi(c5, c4, at) {
                if (c5) {
                    var c3 = 0,
                        c2 = c5.length;
                    if (typeof c4 != "number" && c4 != null) {
                        var c1 = -1;
                        c4 = aV.createCallback(c4, at);
                        while (++c1 < c2 && c4(c5[c1], c1, c5)) {
                            c3++;
                        }
                    } else {
                        c3 = c4;
                        if (c3 == null || at) {
                            return c5[0];
                        }
                    }
                    return u(c5, 0, ao(ce(0, c3), c2));
                }
            }
            var cr = cY(function cr(c6, c1, c5) {
                var c2 = -1,
                    c3 = c6 ? c6.length : 0,
                    at = [];
                while (++c2 < c3) {
                    var c4 = c6[c2];
                    if (c5) {
                        c4 = c5(c4, c2, c6);
                    }
                    if (bC(c4)) {
                        ax.apply(at, c1 ? c4 : cr(c4));
                    } else {
                        at.push(c4);
                    }
                }
                return at;
            });

            function cS(c4, c3, c1) {
                if (typeof c1 == "number") {
                    var c2 = c4 ? c4.length : 0;
                    c1 = (c1 < 0 ? ce(0, c2 + c1) : c1 || 0);
                } else {
                    if (c1) {
                        var at = bc(c4, c3);
                        return c4[at] === c3 ? at : -1;
                    }
                }
                return c4 ? T(c4, c3, c1) : -1;
            }

            function cT(c5, c4, at) {
                if (!c5) {
                    return [];
                }
                var c3 = 0,
                    c2 = c5.length;
                if (typeof c4 != "number" && c4 != null) {
                    var c1 = c2;
                    c4 = aV.createCallback(c4, at);
                    while (c1-- && c4(c5[c1], c1, c5)) {
                        c3++;
                    }
                } else {
                    c3 = (c4 == null || at) ? 1 : c4 || c3;
                }
                return u(c5, 0, ao(ce(0, c2 - c3), c2));
            }

            function co(c6) {
                var c8 = arguments,
                    c4 = c8.length,
                    c2 = -1,
                    c7 = f(),
                    c5 = -1,
                    c9 = b2(),
                    c3 = c6 ? c6.length : 0,
                    db = [],
                    c1 = f();
                while (++c2 < c4) {
                    var da = c8[c2];
                    c7[c2] = c9 === T && (da ? da.length : 0) >= d && ae(c2 ? c8[c2] : c1);
                }
                outer: while (++c5 < c3) {
                    var at = c7[0];
                    da = c6[c5];
                    if ((at ? R(at, da) : c9(c1, da)) < 0) {
                        c2 = c4;
                        (at || c1).push(da);
                        while (--c2) {
                            at = c7[c2];
                            if ((at ? R(at, da) : c9(c8[c2], da)) < 0) {
                                continue outer;
                            }
                        }
                        db.push(da);
                    }
                }
                while (c4--) {
                    at = c7[c4];
                    if (at) {
                        q(at);
                    }
                }
                V(c7);
                V(c1);
                return db;
            }

            function bu(c5, c4, at) {
                if (c5) {
                    var c3 = 0,
                        c2 = c5.length;
                    if (typeof c4 != "number" && c4 != null) {
                        var c1 = c2;
                        c4 = aV.createCallback(c4, at);
                        while (c1-- && c4(c5[c1], c1, c5)) {
                            c3++;
                        }
                    } else {
                        c3 = c4;
                        if (c3 == null || at) {
                            return c5[c2 - 1];
                        }
                    }
                    return u(c5, ce(0, c2 - c3));
                }
            }

            function c0(c3, c2, c1) {
                var at = c3 ? c3.length : 0;
                if (typeof c1 == "number") {
                    at = (c1 < 0 ? ce(0, at + c1) : ao(c1, at - 1)) + 1;
                }
                while (at--) {
                    if (c3[at] === c2) {
                        return at;
                    }
                }
                return -1;
            }

            function aZ(c5, c1, c4) {
                c5 = +c5 || 0;
                c4 = +c4 || 1;
                if (c1 == null) {
                    c1 = c5;
                    c5 = 0;
                }
                var c2 = -1,
                    c3 = ce(0, aX((c1 - c5) / c4)),
                    at = aH(c3);
                while (++c2 < c3) {
                    at[c2] = c5;
                    c5 += c4;
                }
                return at;
            }

            function b7(c5, c4, at) {
                if (typeof c4 != "number" && c4 != null) {
                    var c3 = 0,
                        c1 = -1,
                        c2 = c5 ? c5.length : 0;
                    c4 = aV.createCallback(c4, at);
                    while (++c1 < c2 && c4(c5[c1], c1, c5)) {
                        c3++;
                    }
                } else {
                    c3 = (c4 == null || at) ? 1 : ce(0, c4);
                }
                return u(c5, c3);
            }

            function bc(c6, c4, c5, c1) {
                var at = 0,
                    c3 = c6 ? c6.length : at;
                c5 = c5 ? aV.createCallback(c5, c1, 1) : bk;
                c4 = c5(c4);
                while (at < c3) {
                    var c2 = (at + c3) >>> 1;
                    (c5(c6[c2]) < c4) ? at = c2 + 1: c3 = c2;
                }
                return at;
            }

            function av(at) {
                if (!bC(at)) {
                    arguments[0] = at ? aK.call(at) : b5;
                }
                return bR(bG.apply(b5, arguments));
            }
            var bR = cY(function (c6, c3, da) {
                var c5 = -1,
                    c7 = b2(),
                    c2 = c6 ? c6.length : 0,
                    db = [];
                var c8 = !c3 && c2 >= d && c7 === T,
                    c1 = (da || c8) ? f() : db;
                if (c8) {
                    var at = ae(c1);
                    if (at) {
                        c7 = R;
                        c1 = at;
                    } else {
                        c8 = false;
                        c1 = da ? c1 : (V(c1), db);
                    }
                }
                while (++c5 < c2) {
                    var c9 = c6[c5],
                        c4 = da ? da(c9, c5, c6) : c9;
                    if (c3 ? !c5 || c1[c1.length - 1] !== c4 : c7(c1, c4) < 0) {
                        if (da || c8) {
                            c1.push(c4);
                        }
                        db.push(c9);
                    }
                }
                if (c8) {
                    V(c1.array);
                    q(c1);
                } else {
                    if (da) {
                        V(c1);
                    }
                }
                return db;
            });

            function cR(c3) {
                var c1 = -1,
                    c2 = c3 ? bj(cU(c3, "length")) : 0,
                    at = aH(c2 < 0 ? 0 : c2);
                while (++c1 < c2) {
                    at[c1] = cU(c3, c1);
                }
                return at;
            }

            function cN(at) {
                return ai(at, aK.call(arguments, 1));
            }

            function aq(at) {
                return at ? cR(arguments) : [];
            }

            function ct(c5, c1) {
                var c2 = -1,
                    c4 = c5 ? c5.length : 0,
                    at = {};
                while (++c2 < c4) {
                    var c3 = c5[c2];
                    if (c1) {
                        at[c3] = c1[c2];
                    } else {
                        at[c3[0]] = c3[1];
                    }
                }
                return at;
            }

            function aS(c1, at) {
                if (c1 < 1) {
                    return at();
                }
                return function () {
                    if (--c1 < 1) {
                        return at.apply(this, arguments);
                    }
                };
            }

            function bX(c1, at) {
                return aG.fastBind || (b3 && arguments.length > 2) ? b3.call.apply(b3, arguments) : aQ(c1, at, aK.call(arguments, 2));
            }

            function bv(c2) {
                var at = arguments.length > 1 ? bG.apply(b5, aK.call(arguments, 1)) : cx(c2),
                    c1 = -1,
                    c4 = at.length;
                while (++c1 < c4) {
                    var c3 = at[c1];
                    c2[c3] = bX(c2[c3], c2);
                }
                return c2;
            }

            function cD(at, c1) {
                return aQ(at, c1, aK.call(arguments, 2), j);
            }

            function cv() {
                var at = arguments;
                return function () {
                    var c1 = arguments,
                        c2 = at.length;
                    while (c2--) {
                        c1 = [at[c2].apply(this, c1)];
                    }
                    return c1[0];
                };
            }

            function aF(c3, at, c4) {
                if (c3 == null) {
                    return bk;
                }
                var c2 = typeof c3;
                if (c2 != "function") {
                    if (c2 != "object") {
                        return function (c5) {
                            return c5[c3];
                        };
                    }
                    var c1 = b8(c3);
                    return function (c6) {
                        var c7 = c1.length,
                            c5 = false;
                        while (c7--) {
                            if (!(c5 = b0(c6[c1[c7]], c3[c1[c7]], j))) {
                                break;
                            }
                        }
                        return c5;
                    };
                }
                if (typeof at == "undefined" || (l && !l.test(bB.call(c3)))) {
                    return c3;
                }
                if (c4 === 1) {
                    return function (c5) {
                        return c3.call(at, c5);
                    };
                }
                if (c4 === 2) {
                    return function (c6, c5) {
                        return c3.call(at, c6, c5);
                    };
                }
                if (c4 === 4) {
                    return function (c5, c7, c6, c8) {
                        return c3.call(at, c5, c7, c6, c8);
                    };
                }
                return function (c6, c5, c7) {
                    return c3.call(at, c6, c5, c7);
                };
            }

            function cu(c2, c7, de) {
                var db, df, dc, c8 = 0,
                    c9 = 0,
                    c4 = false,
                    c5 = null,
                    dd = null,
                    da = true;

                function c6() {
                    bS(c5);
                    bS(dd);
                    c8 = 0;
                    c5 = dd = null;
                }

                function c3() {
                    var dg = da && (!at || c8 > 1);
                    c6();
                    if (dg) {
                        if (c4 !== false) {
                            c9 = new cb;
                        }
                        df = c2.apply(dc, db);
                    }
                }

                function c1() {
                    c6();
                    if (da || (c4 !== c7)) {
                        c9 = new cb;
                        df = c2.apply(dc, db);
                    }
                }
                c7 = ce(0, c7 || 0);
                if (de === true) {
                    var at = true;
                    da = false;
                } else {
                    if (cZ(de)) {
                        at = de.leading;
                        c4 = "maxWait" in de && ce(c7, de.maxWait || 0);
                        da = "trailing" in de ? de.trailing : da;
                    }
                }
                return function () {
                    db = arguments;
                    dc = this;
                    c8++;
                    bS(dd);
                    if (c4 === false) {
                        if (at && c8 < 2) {
                            df = c2.apply(dc, db);
                        }
                    } else {
                        var dg = new cb;
                        if (!c5 && !at) {
                            c9 = dg;
                        }
                        var dh = c4 - (dg - c9);
                        if (dh <= 0) {
                            bS(c5);
                            c5 = null;
                            c9 = dg;
                            df = c2.apply(dc, db);
                        } else {
                            if (!c5) {
                                c5 = aY(c1, dh);
                            }
                        }
                    } if (c7 !== c4) {
                        dd = aY(c3, c7);
                    }
                    return df;
                };
            }

            function a3(c1) {
                var at = aK.call(arguments, 1);
                return aY(function () {
                    c1.apply(o, at);
                }, 1);
            }
            if (ar && A && typeof bW == "function") {
                a3 = bX(bW, aj);
            }

            function bN(c1, c2) {
                var at = aK.call(arguments, 2);
                return aY(function () {
                    c1.apply(o, at);
                }, c2);
            }

            function a4(c1, c2) {
                function at() {
                    var c3 = at.cache,
                        c4 = c + (c2 ? c2.apply(this, arguments) : arguments[0]);
                    return a1.call(c3, c4) ? c3[c4] : (c3[c4] = c1.apply(this, arguments));
                }
                at.cache = {};
                return at;
            }

            function cn(c2) {
                var c1, at;
                return function () {
                    if (c1) {
                        return at;
                    }
                    c1 = true;
                    at = c2.apply(this, arguments);
                    c2 = null;
                    return at;
                };
            }

            function cG(at) {
                return aQ(at, aK.call(arguments, 1));
            }

            function ck(at) {
                return aQ(at, aK.call(arguments, 1), null, j);
            }

            function cf(c2, c3, c1) {
                var c5 = true,
                    c4 = true;
                if (c1 === false) {
                    c5 = false;
                } else {
                    if (cZ(c1)) {
                        c5 = "leading" in c1 ? c1.leading : c5;
                        c4 = "trailing" in c1 ? c1.trailing : c4;
                    }
                }
                c1 = s();
                c1.leading = c5;
                c1.maxWait = c3;
                c1.trailing = c4;
                var at = cu(c2, c3, c1);
                q(c1);
                return at;
            }

            function bU(at, c1) {
                return function () {
                    var c2 = [at];
                    ax.apply(c2, arguments);
                    return c1.apply(this, c2);
                };
            }

            function bd(at) {
                return at == null ? "" : ci(at).replace(C, bn);
            }

            function bk(at) {
                return at;
            }

            function aD(at) {
                bz(cx(at), function (c1) {
                    var c2 = aV[c1] = at[c1];
                    aV.prototype[c1] = function () {
                        var c5 = this.__wrapped__,
                            c4 = [c5];
                        ax.apply(c4, arguments);
                        var c3 = c2.apply(aV, c4);
                        return (c5 && typeof c5 == "object" && c5 === c3) ? this : new cC(c3);
                    };
                });
            }

            function cM() {
                aj._ = cH;
                return this;
            }
            var cX = cW(I + "08") == 8 ? cW : function (c1, at) {
                return cW(cp(c1) ? c1.replace(ac, "") : c1, at || 0);
            };

            function b9(c1, at) {
                if (c1 == null && at == null) {
                    at = 1;
                }
                c1 = +c1 || 0;
                if (at == null) {
                    at = c1;
                    c1 = 0;
                } else {
                    at = +at || 0;
                }
                var c2 = bK();
                return (c1 % 1 || at % 1) ? c1 + ao(c2 * (at - c1 + parseFloat("1e-" + ((c2 + "").length - 1))), at) : c1 + cB(c2 * (at - c1 + 1));
            }

            function aR(at, c2) {
                var c1 = at ? at[c2] : o;
                return ay(c1) ? at[c2]() : c1;
            }

            function bE(dd, c7, dg) {
                var c4 = aV.templateSettings;
                dd || (dd = "");
                dg = bt({}, dg, c4);
                var c2 = bt({}, dg.imports, c4.imports),
                    c8 = b8(c2),
                    c3 = bw(c2);
                var dc, c9 = 0,
                    db = dg.interpolate || U,
                    c1 = "__p += '";
                var df = cw((dg.escape || U).source + "|" + db.source + "|" + (db === p ? B : U).source + "|" + (dg.evaluate || U).source + "|$", "g");
                dd.replace(df, function (dh, dl, dj, di, dk, dm) {
                    dj || (dj = di);
                    c1 += dd.slice(c9, dm).replace(Z, h);
                    if (dl) {
                        c1 += "' +\n__e(" + dl + ") +\n'";
                    }
                    if (dk) {
                        dc = true;
                        c1 += "';\n" + dk + ";\n__p += '";
                    }
                    if (dj) {
                        c1 += "' +\n((__t = (" + dj + ")) == null ? '' : __t) +\n'";
                    }
                    c9 = dm + dh.length;
                    return dh;
                });
                c1 += "';\n";
                var c5 = dg.variable,
                    c6 = c5;
                if (!c6) {
                    c5 = "obj";
                    c1 = "with (" + c5 + ") {\n" + c1 + "\n}\n";
                }
                c1 = (dc ? c1.replace(y, "") : c1).replace(W, "$1").replace(g, "$1;");
                c1 = "function(" + c5 + ") {\n" + (c6 ? "" : c5 + " || (" + c5 + " = {});\n") + "var __t, __p = '', __e = _.escape" + (dc ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + c1 + "return __p\n}";
                var at = "\n/*\n//@ sourceURL=" + (dg.sourceURL || "/lodash/template/source[" + (af++) + "]") + "\n*/";
                try {
                    var de = a0(c8, "return " + c1 + at).apply(o, c3);
                } catch (da) {
                    da.source = c1;
                    throw da;
                }
                if (c7) {
                    return de(c7);
                }
                de.source = c1;
                return de;
            }

            function am(c4, c3, c1) {
                c4 = (c4 = +c4) > -1 ? c4 : 0;
                var c2 = -1,
                    at = aH(c4);
                c3 = aV.createCallback(c3, c1, 1);
                while (++c2 < c4) {
                    at[c2] = c3(c2);
                }
                return at;
            }

            function an(at) {
                return at == null ? "" : ci(at).replace(H, bo);
            }

            function cc(at) {
                var c1 = ++L;
                return ci(at == null ? "" : at) + c1;
            }

            function cq(at, c1) {
                c1(at);
                return at;
            }

            function bm() {
                return ci(this.__wrapped__);
            }

            function aW() {
                return this.__wrapped__;
            }
            aV.after = aS;
            aV.assign = bs;
            aV.at = cA;
            aV.bind = bX;
            aV.bindAll = bv;
            aV.bindKey = cD;
            aV.compact = aP;
            aV.compose = cv;
            aV.countBy = bI;
            aV.createCallback = aF;
            aV.debounce = cu;
            aV.defaults = bt;
            aV.defer = a3;
            aV.delay = bN;
            aV.difference = ai;
            aV.filter = bP;
            aV.flatten = cr;
            aV.forEach = bz;
            aV.forIn = ak;
            aV.forOwn = bO;
            aV.functions = cx;
            aV.groupBy = bq;
            aV.initial = cT;
            aV.intersection = co;
            aV.invert = b4;
            aV.invoke = aJ;
            aV.keys = b8;
            aV.map = bl;
            aV.max = bj;
            aV.memoize = a4;
            aV.merge = bJ;
            aV.min = cg;
            aV.omit = cm;
            aV.once = cn;
            aV.pairs = by;
            aV.partial = cG;
            aV.partialRight = ck;
            aV.pick = bL;
            aV.pluck = cU;
            aV.range = aZ;
            aV.reject = aB;
            aV.rest = b7;
            aV.shuffle = bx;
            aV.sortBy = bb;
            aV.tap = cq;
            aV.throttle = cf;
            aV.times = am;
            aV.toArray = aE;
            aV.transform = cI;
            aV.union = av;
            aV.uniq = bR;
            aV.unzip = cR;
            aV.values = bw;
            aV.where = al;
            aV.without = cN;
            aV.wrap = bU;
            aV.zip = aq;
            aV.zipObject = ct;
            aV.collect = bl;
            aV.drop = b7;
            aV.each = bz;
            aV.extend = bs;
            aV.methods = cx;
            aV.object = ct;
            aV.select = bP;
            aV.tail = b7;
            aV.unique = bR;
            aD(aV);
            aV.chain = aV;
            aV.prototype.chain = function () {
                return this;
            };
            aV.clone = cs;
            aV.cloneDeep = cV;
            aV.contains = a5;
            aV.escape = bd;
            aV.every = az;
            aV.find = bF;
            aV.findIndex = cP;
            aV.findKey = cl;
            aV.has = cJ;
            aV.identity = bk;
            aV.indexOf = cS;
            aV.isArguments = a6;
            aV.isArray = bC;
            aV.isBoolean = bH;
            aV.isDate = ba;
            aV.isElement = bZ;
            aV.isEmpty = cj;
            aV.isEqual = b0;
            aV.isFinite = aM;
            aV.isFunction = ay;
            aV.isNaN = bQ;
            aV.isNull = cQ;
            aV.isNumber = br;
            aV.isObject = cZ;
            aV.isPlainObject = aO;
            aV.isRegExp = cE;
            aV.isString = cp;
            aV.isUndefined = bV;
            aV.lastIndexOf = c0;
            aV.mixin = aD;
            aV.noConflict = cM;
            aV.parseInt = cX;
            aV.random = b9;
            aV.reduce = ch;
            aV.reduceRight = cF;
            aV.result = aR;
            aV.runInContext = ad;
            aV.size = a9;
            aV.some = a8;
            aV.sortedIndex = bc;
            aV.template = bE;
            aV.unescape = an;
            aV.uniqueId = cc;
            aV.all = az;
            aV.any = a8;
            aV.detect = bF;
            aV.findWhere = bF;
            aV.foldl = ch;
            aV.foldr = cF;
            aV.include = a5;
            aV.inject = ch;
            bO(aV, function (c1, at) {
                if (!aV.prototype[at]) {
                    aV.prototype[at] = function () {
                        var c2 = [this.__wrapped__];
                        ax.apply(c2, arguments);
                        return c1.apply(aV, c2);
                    };
                }
            });
            aV.first = bi;
            aV.last = bu;
            aV.take = bi;
            aV.head = bi;
            bO(aV, function (c1, at) {
                if (!aV.prototype[at]) {
                    aV.prototype[at] = function (c4, c3) {
                        var c2 = c1(this.__wrapped__, c4, c3);
                        return c4 == null || (c3 && typeof c4 != "function") ? c2 : new cC(c2);
                    };
                }
            });
            aV.VERSION = "1.3.1";
            aV.prototype.toString = bm;
            aV.prototype.value = aW;
            aV.prototype.valueOf = aW;
            cK(["join", "pop", "shift"], function (at) {
                var c1 = b5[at];
                aV.prototype[at] = function () {
                    return c1.apply(this.__wrapped__, arguments);
                };
            });
            cK(["push", "reverse", "sort", "unshift"], function (at) {
                var c1 = b5[at];
                aV.prototype[at] = function () {
                    c1.apply(this.__wrapped__, arguments);
                    return this;
                };
            });
            cK(["concat", "slice", "splice"], function (at) {
                var c1 = b5[at];
                aV.prototype[at] = function () {
                    return new cC(c1.apply(this.__wrapped__, arguments));
                };
            });
            if (!aG.spliceObjects) {
                cK(["pop", "shift", "splice"], function (at) {
                    var c1 = b5[at],
                        c2 = at == "splice";
                    aV.prototype[at] = function () {
                        var c4 = this.__wrapped__,
                            c3 = c1.apply(c4, arguments);
                        if (c4.length === 0) {
                            delete c4[0];
                        }
                        return c2 ? new cC(c3) : c3;
                    };
                });
            }
            return aV;
        }
        b = ad();
        return;
        if (false == "function" && typeof define.amd == "object" && define.amd) {
            S._ = b;
            define(function () {
                return b;
            });
        } else {
            if (false) {
                if (A) {
                    (A.exports = b)._ = b;
                } else {
                    aa._ = b;
                }
            } else {
                S._ = b;
            }
        }
    }(this));
    /*!
     * Platform.js v1.0.0 <http://mths.be/platform>
     * Copyright 2010-2013 John-David Dalton <http://allyoucanleet.com/>
     * Available under MIT license <http://mths.be/mit>
     */
    ;
    (function (s) {
        var r = s;
        var e = typeof exports == "object" && exports;
        var p = typeof global == "object" && global && (global == global.global ? (s = global) : global);
        var m = /Opera/;
        var t = Object.prototype.toString;
        var n = /Java/.test(z(s.java)) && s.java;
        var E = n && z(s.environment) == "Environment";
        var d = n ? "a" : "��";
        var A = n ? "b" : "��";
        var D = s.document || {};
        var i = {}.hasOwnProperty;
        var g = s.navigator || {};
        var x = s.operamini || s.opera;
        var l = m.test(l = z(x)) ? l : (x = null);
        var f = this;
        var B = g.userAgent || "";

        function h(F) {
            F = String(F);
            return F.charAt(0).toUpperCase() + F.slice(1);
        }

        function c(G, I) {
            var F = -1,
                H = G.length;
            if (H == H >>> 0) {
                while (++F < H) {
                    I(G[F], F, G);
                }
            } else {
                y(G, I);
            }
        }

        function w(F) {
            F = v(F);
            return /^(?:webOS|i(?:OS|P))/.test(F) ? F : h(F);
        }

        function y(F, H) {
            for (var G in F) {
                C(F, G) && H(F[G], G, F);
            }
        }

        function z(F) {
            return F == null ? h(F) : t.call(F).slice(8, -1);
        }

        function C() {
            C = function (F, G) {
                var H = F != null && (F.constructor || Object).prototype;
                return !!H && G in Object(F) && !(G in H && F[G] === H[G]);
            };
            if (z(i) == "Function") {
                C = function (F, G) {
                    return F != null && i.call(F, G);
                };
            } else {
                if ({}.__proto__ == Object.prototype) {
                    C = function (G, H) {
                        var F = false;
                        if (G != null) {
                            G = Object(G);
                            G.__proto__ = [G.__proto__, G.__proto__ = null, F = H in G][0];
                        }
                        return F;
                    };
                }
            }
            return C.apply(this, arguments);
        }

        function q(F, H) {
            var G = F != null ? typeof F[H] : "number";
            return !/^(?:boolean|number|string|undefined)$/.test(G) && (G == "object" ? !!F[H] : true);
        }

        function u(F) {
            return String(F).replace(/([ -])(?!$)/g, "$1?");
        }

        function j(H, G) {
            var F = null;
            c(H, function (J, I) {
                F = G(F, J, I, H);
            });
            return F;
        }

        function v(F) {
            return String(F).replace(/^ +| +$/g, "");
        }

        function o(N) {
            N || (N = B);
            var W;
            var X = N;
            var M = [];
            var I = null;
            var O = N == B;
            var G = O && x && typeof x.version == "function" && x.version();
            var S = P([{
                label: "WebKit",
                pattern: "AppleWebKit"
            }, "iCab", "Presto", "NetFront", "Tasman", "Trident", "KHTML", "Gecko"]);
            var Y = L(["Adobe AIR", "Arora", "Avant Browser", "Camino", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "Iron", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", "Midori", "Nook Browser", "PhantomJS", "Raven", "Rekonq", "RockMelt", "SeaMonkey", {
                label: "Silk",
                pattern: "(?:Cloud9|Silk-Accelerated)"
            }, "Sleipnir", "SlimBrowser", "Sunrise", "Swiftfox", "WebPositive", "Opera Mini", "Opera", {
                label: "Opera",
                pattern: "OPR"
            }, "Chrome", {
                label: "Chrome Mobile",
                pattern: "(?:CriOS|CrMo)"
            }, {
                label: "Firefox",
                pattern: "(?:Firefox|Minefield)"
            }, {
                label: "IE",
                pattern: "MSIE"
            }, "Safari"]);
            var F = Q(["BlackBerry", {
                label: "Galaxy S",
                pattern: "GT-I9000"
            }, {
                label: "Galaxy S2",
                pattern: "GT-I9100"
            }, "Google TV", "iPad", "iPod", "iPhone", "Kindle", {
                label: "Kindle Fire",
                pattern: "(?:Cloud9|Silk-Accelerated)"
            }, "Nook", "PlayBook", "PlayStation Vita", "TouchPad", "Transformer", "Xoom"]);
            var V = K({
                Apple: {
                    iPad: 1,
                    iPhone: 1,
                    iPod: 1
                },
                Amazon: {
                    Kindle: 1,
                    "Kindle Fire": 1
                },
                Asus: {
                    Transformer: 1
                },
                "Barnes & Noble": {
                    Nook: 1
                },
                BlackBerry: {
                    PlayBook: 1
                },
                Google: {
                    "Google TV": 1
                },
                HP: {
                    TouchPad: 1
                },
                LG: {},
                Motorola: {
                    Xoom: 1
                },
                Nokia: {},
                Samsung: {
                    "Galaxy S": 1,
                    "Galaxy S2": 1
                },
                Sony: {
                    "PlayStation Vita": 1
                }
            });
            var H = T(["Android", "CentOS", "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "]);

            function P(Z) {
                return j(Z, function (aa, ab) {
                    return aa || RegExp("\\b" + (ab.pattern || u(ab)) + "\\b", "i").exec(N) && (ab.label || ab);
                });
            }

            function K(Z) {
                return j(Z, function (aa, ac, ab) {
                    return aa || (ac[F] || ac[0, /^[a-z]+(?: +[a-z]+\b)*/i.exec(F)] || RegExp("\\b" + (ab.pattern || u(ab)) + "(?:\\b|\\w*\\d)", "i").exec(N)) && (ab.label || ab);
                });
            }

            function L(Z) {
                return j(Z, function (aa, ab) {
                    return aa || RegExp("\\b" + (ab.pattern || u(ab)) + "\\b", "i").exec(N) && (ab.label || ab);
                });
            }

            function T(Z) {
                return j(Z, function (aa, ac) {
                    var ab = ac.pattern || u(ac);
                    if (!aa && (aa = RegExp("\\b" + ab + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(N))) {
                        W = {
                            "6.2": "8",
                            "6.1": "Server 2008 R2 / 7",
                            "6.0": "Server 2008 / Vista",
                            "5.2": "Server 2003 / XP 64-bit",
                            "5.1": "XP",
                            "5.01": "2000 SP1",
                            "5.0": "2000",
                            "4.0": "NT",
                            "4.90": "ME"
                        };
                        if (/^Win/i.test(aa) && (W = W[0, /[\d.]+$/.exec(aa)])) {
                            aa = "Windows " + W;
                        }
                        aa = w(String(aa).replace(RegExp(ab, "i"), ac.label || ac).replace(/ ce$/i, " CE").replace(/hpw/i, "web").replace(/Macintosh/, "Mac OS").replace(/_PowerPC/i, " OS").replace(/(OS X) [^ \d]+/i, "$1").replace(/Mac (OS X)/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/x86\.64/gi, "x86_64").split(" on ")[0]);
                    }
                    return aa;
                });
            }

            function Q(Z) {
                return j(Z, function (aa, ac) {
                    var ab = ac.pattern || u(ac);
                    if (!aa && (aa = RegExp("\\b" + ab + " *\\d+[.\\w_]*", "i").exec(N) || RegExp("\\b" + ab + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(N))) {
                        if ((aa = String(ac.label || aa).split("/"))[1] && !/[\d.]+/.test(aa[0])) {
                            aa[0] += " " + aa[1];
                        }
                        ac = ac.label || ac;
                        aa = w(aa[0].replace(RegExp(ab, "i"), ac).replace(RegExp("; *(?:" + ac + "[_-])?", "i"), " ").replace(RegExp("(" + ac + ")(\\w)", "i"), "$1 $2"));
                    }
                    return aa;
                });
            }

            function J(Z) {
                return j(Z, function (aa, ab) {
                    return aa || (RegExp(ab + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(N) || 0)[1] || null;
                });
            }

            function U() {
                return this.description || "";
            }
            S && (S = [S]);
            if (V && !F) {
                F = Q([V]);
            }
            if ((W = /Google TV/.exec(F))) {
                F = W[0];
            }
            if (/\bSimulator\b/i.test(N)) {
                F = (F ? F + " " : "") + "Simulator";
            }
            if (/^iP/.test(F)) {
                Y || (Y = "Safari");
                H = "iOS" + ((W = / OS ([\d_]+)/i.exec(N)) ? " " + W[1].replace(/_/g, ".") : "");
            } else {
                if (Y == "Konqueror" && !/buntu/i.test(H)) {
                    H = "Kubuntu";
                } else {
                    if (V && V != "Google" && ((/Chrome/.test(Y) && !/Mobile Safari/.test(N)) || /Vita/.test(F))) {
                        Y = "Android Browser";
                        H = /Android/.test(H) ? H : "Android";
                    } else {
                        if (!Y || (W = !/\bMinefield\b/i.test(N) && /Firefox|Safari/.exec(Y))) {
                            if (Y && !F && /[\/,]|^[^(]+?\)/.test(N.slice(N.indexOf(W + "/") + 8))) {
                                Y = null;
                            }
                            if ((W = F || V || H) && (F || V || /Android|Symbian OS|Tablet OS|webOS/.test(H))) {
                                Y = /[a-z]+(?: Hat)?/i.exec(/Android/.test(H) ? H : W) + " Browser";
                            }
                        }
                    }
                }
            } if (!G) {
                G = J(["(?:Cloud9|CriOS|CrMo|Opera ?Mini|OPR|Raven|Silk(?!/[\\d.]+$))", "Version", u(Y), "(?:Firefox|Minefield|NetFront)"]);
            }
            if (S == "iCab" && parseFloat(G) > 3) {
                S = ["WebKit"];
            } else {
                if ((W = /Opera/.test(Y) && (/OPR/.test(N) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(N) && "WebKit" || !S && /\bMSIE\b/i.test(N) && (H == "Mac OS" ? "Tasman" : "Trident"))) {
                    S = [W];
                }
            } if (O) {
                if (q(s, "global")) {
                    if (n) {
                        W = n.lang.System;
                        X = W.getProperty("os.arch");
                        H = H || W.getProperty("os.name") + " " + W.getProperty("os.version");
                    }
                    if (e) {
                        if (f == r && typeof system == "object" && (W = [system])[0]) {
                            H || (H = W[0].os || null);
                            try {
                                W[1] = require("ringo/engine").version;
                                G = W[1].join(".");
                                Y = "RingoJS";
                            } catch (R) {
                                if (W[0].global == p) {
                                    Y = "Narwhal";
                                }
                            }
                        } else {
                            if (typeof process == "object" && (W = process)) {
                                Y = "Node.js";
                                X = W.arch;
                                H = W.platform;
                                G = /[\d.]+/.exec(W.version)[0];
                            } else {
                                if (E) {
                                    Y = "Rhino";
                                }
                            }
                        }
                    } else {
                        if (E) {
                            Y = "Rhino";
                        }
                    }
                } else {
                    if (z((W = s.runtime)) == "ScriptBridgingProxyObject") {
                        Y = "Adobe AIR";
                        H = W.flash.system.Capabilities.os;
                    } else {
                        if (z((W = s.phantom)) == "RuntimeObject") {
                            Y = "PhantomJS";
                            G = (W = W.version || null) && (W.major + "." + W.minor + "." + W.patch);
                        } else {
                            if (typeof D.documentMode == "number" && (W = /\bTrident\/(\d+)/i.exec(N))) {
                                G = [G, D.documentMode];
                                if ((W = +W[1] + 4) != G[1]) {
                                    M.push("IE " + G[1] + " mode");
                                    S[1] = "";
                                    G[1] = W;
                                }
                                G = Y == "IE" ? String(G[1].toFixed(1)) : G[0];
                            }
                        }
                    }
                }
                H = H && w(H);
            }
            if (G && (W = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(G) || /(?:alpha|beta)(?: ?\d)?/i.exec(N + ";" + (O && g.appMinorVersion)) || /\bMinefield\b/i.test(N) && "a")) {
                I = /b/i.test(W) ? "beta" : "alpha";
                G = G.replace(RegExp(W + "\\+?$"), "") + (I == "beta" ? A : d) + (/\d+\+?/.exec(W) || "");
            }
            if (Y == "Fennec") {
                Y = "Firefox Mobile";
            } else {
                if (Y == "Maxthon" && G) {
                    G = G.replace(/\.[\d.]+/, ".x");
                } else {
                    if (Y == "Silk") {
                        if (!/Mobi/i.test(N)) {
                            H = "Android";
                            M.unshift("desktop mode");
                        }
                        if (/Accelerated *= *true/i.test(N)) {
                            M.unshift("accelerated");
                        }
                    } else {
                        if (Y == "IE" && (W = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(N) || 0)[1])) {
                            Y += " Mobile";
                            H = "Windows Phone OS " + W + ".x";
                            M.unshift("desktop mode");
                        } else {
                            if ((Y == "Chrome" || Y == "IE" || Y && !F && !/Browser|Mobi/.test(Y)) && (H == "Windows CE" || /Mobi/i.test(N))) {
                                Y += " Mobile";
                            } else {
                                if (Y == "IE" && O && typeof external == "object" && !external) {
                                    M.unshift("platform preview");
                                } else {
                                    if (/BlackBerry/.test(F) && (W = (RegExp(F.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(N) || 0)[1] || G)) {
                                        H = "Device Software " + W;
                                        G = null;
                                    } else {
                                        if (this != y && ((O && x) || (/Opera/.test(Y) && /\b(?:MSIE|Firefox)\b/i.test(N)) || (Y == "Firefox" && /OS X (?:\d+\.){2,}/.test(H)) || (Y == "IE" && ((H && !/^Win/.test(H) && G > 5.5) || /Windows XP/.test(H) && G > 8 || G == 8 && !/Trident/.test(N)))) && !m.test((W = o.call(y, N.replace(m, "") + ";"))) && W.name) {
                                            W = "ing as " + W.name + ((W = W.version) ? " " + W : "");
                                            if (m.test(Y)) {
                                                if (/IE/.test(W) && H == "Mac OS") {
                                                    H = null;
                                                }
                                                W = "identify" + W;
                                            } else {
                                                W = "mask" + W;
                                                if (l) {
                                                    Y = w(l.replace(/([a-z])([A-Z])/g, "$1 $2"));
                                                } else {
                                                    Y = "Opera";
                                                } if (/IE/.test(W)) {
                                                    H = null;
                                                }
                                                if (!O) {
                                                    G = null;
                                                }
                                            }
                                            S = ["Presto"];
                                            M.push(W);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } if ((W = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(N) || 0)[1])) {
                W = [parseFloat(W.replace(/\.(\d)$/, ".0$1")), W];
                if (Y == "Safari" && W[1].slice(-1) == "+") {
                    Y = "WebKit Nightly";
                    I = "alpha";
                    G = W[1].slice(0, -1);
                } else {
                    if (G == W[1] || G == (/\bSafari\/([\d.]+\+?)/i.exec(N) || 0)[1]) {
                        G = null;
                    }
                }
                W = [W[0], (/\bChrome\/([\d.]+)/i.exec(N) || 0)[1]];
                if (!O || (/internal|\n/i.test(t.toString()) && !W[1])) {
                    S[1] = "like Safari";
                    W = (W = W[0], W < 400 ? 1 : W < 500 ? 2 : W < 526 ? 3 : W < 533 ? 4 : W < 534 ? "4+" : W < 535 ? 5 : "5");
                } else {
                    S[1] = "like Chrome";
                    W = W[1] || (W = W[0], W < 530 ? 1 : W < 532 ? 2 : W < 532.05 ? 3 : W < 533 ? 4 : W < 534.03 ? 5 : W < 534.07 ? 6 : W < 534.1 ? 7 : W < 534.13 ? 8 : W < 534.16 ? 9 : W < 534.24 ? 10 : W < 534.3 ? 11 : W < 535.01 ? 12 : W < 535.02 ? "13+" : W < 535.07 ? 15 : W < 535.11 ? 16 : W < 535.19 ? 17 : W < 536.05 ? 18 : W < 536.1 ? 19 : W < 537.01 ? 20 : "21");
                }
                S[1] += " " + (W += typeof W == "number" ? ".x" : /[.+]/.test(W) ? "" : "+");
                if (Y == "Safari" && (!G || parseInt(G) > 45)) {
                    G = W;
                }
            }
            if (Y == "Opera" && (W = /(?:zbov|zvav)$/.exec(H))) {
                Y += " ";
                M.unshift("desktop mode");
                if (W == "zvav") {
                    Y += "Mini";
                    G = null;
                } else {
                    Y += "Mobile";
                }
            } else {
                if (Y == "Safari" && /Chrome/.exec(S[1])) {
                    M.unshift("desktop mode");
                    Y = "Chrome Mobile";
                    G = null;
                    if (/OS X/.test(H)) {
                        V = "Apple";
                        H = "iOS 4.3+";
                    } else {
                        H = null;
                    }
                }
            } if (G && G.indexOf((W = /[\d.]+$/.exec(H))) == 0 && N.indexOf("/" + W + "-") > -1) {
                H = v(H.replace(W, ""));
            }
            if (S && !/Avant|Nook/.test(Y) && (/Browser|Lunascape|Maxthon/.test(Y) || /^(?:Adobe|Arora|Midori|Phantom|Rekonq|Rock|Sleipnir|Web)/.test(Y) && S[1])) {
                (W = S[S.length - 1]) && M.push(W);
            }
            if (M.length) {
                M = ["(" + M.join("; ") + ")"];
            }
            if (V && F && F.indexOf(V) < 0) {
                M.push("on " + V);
            }
            if (F) {
                M.push((/^on /.test(M[M.length - 1]) ? "" : "on ") + F);
            }
            if (H) {
                W = / ([\d.+]+)$/.exec(H);
                H = {
                    architecture: 32,
                    family: W ? H.replace(W[0], "") : H,
                    version: W ? W[1] : null,
                    toString: function () {
                        var Z = this.version;
                        return this.family + (Z ? " " + Z : "") + (this.architecture == 64 ? " 64-bit" : "");
                    }
                };
            }
            if ((W = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(X)) && !/\bi686\b/i.test(X)) {
                if (H) {
                    H.architecture = 64;
                    H.family = H.family.replace(RegExp(" *" + W), "");
                }
                if (Y && (/WOW64/i.test(N) || (O && /\w(?:86|32)$/.test(g.cpuClass || g.platform)))) {
                    M.unshift("32-bit");
                }
            }
            N || (N = null);
            return {
                version: Y && G && (M.unshift(G), G),
                name: Y && (M.unshift(Y), Y),
                os: H ? (Y && !(H == String(H).split(" ")[0] && (H == Y.split(" ")[0] || F)) && M.push(F ? "(" + H + ")" : "on " + H), H) : {
                    architecture: null,
                    family: null,
                    version: null,
                    toString: function () {
                        return "null";
                    }
                },
                description: M.length ? M.join(" ") : N,
                layout: S && S[0],
                manufacturer: V,
                prerelease: I,
                product: F,
                ua: N,
                parse: o,
                toString: U
            };
        }
        if (false == "function" && typeof define.amd == "object" && define.amd) {
            define(function () {
                return o();
            });
        } else {
            if (false) {
                y(o(), function (G, F) {
                    e[F] = G;
                });
            } else {
                a = o();
            }
        }
    }(this));
    /*!
     * Benchmark.js v1.0.0 <http://benchmarkjs.com/>
     * Copyright 2010-2013 Mathias Bynens <http://mths.be/>
     * Based on JSLitmus.js, copyright Robert Kieffer <http://broofa.com/>
     * Modified by John-David Dalton <http://allyoucanleet.com/>
     * Available under MIT license <http://mths.be/mit>
     */
    ;
    (function (p, h) {
        var j = typeof define == "function" && typeof define.amd == "object" && define.amd && define;
        var o = typeof exports == "object" && exports;
        var f = typeof module == "object" && module && module.exports == o && module;
        var m = typeof require == "function" && require;
        var d = typeof global == "object" && global;
        if (d.global === d || d.window === d) {
            p = d;
        }
        var c = 0;
        var g = 0;
        var e = /^(?:boolean|number|string|undefined)$/;
        var s = ["Array", "Date", "Function", "Math", "Object", "RegExp", "String", "_", "clearTimeout", "chrome", "chromium", "document", "java", "navigator", "performance", "platform", "process", "runtime", "setTimeout"];
        var n = {
            "1": 4096,
            "2": 512,
            "3": 64,
            "4": 8,
            "5": 0
        };
        var i = {
            "1": 12.706,
            "2": 4.303,
            "3": 3.182,
            "4": 2.776,
            "5": 2.571,
            "6": 2.447,
            "7": 2.365,
            "8": 2.306,
            "9": 2.262,
            "10": 2.228,
            "11": 2.201,
            "12": 2.179,
            "13": 2.16,
            "14": 2.145,
            "15": 2.131,
            "16": 2.12,
            "17": 2.11,
            "18": 2.101,
            "19": 2.093,
            "20": 2.086,
            "21": 2.08,
            "22": 2.074,
            "23": 2.069,
            "24": 2.064,
            "25": 2.06,
            "26": 2.056,
            "27": 2.052,
            "28": 2.048,
            "29": 2.045,
            "30": 2.042,
            infinity: 1.96
        };
        var l = {
            "5": [0, 1, 2],
            "6": [1, 2, 3, 5],
            "7": [1, 3, 5, 6, 8],
            "8": [2, 4, 6, 8, 10, 13],
            "9": [2, 4, 7, 10, 12, 15, 17],
            "10": [3, 5, 8, 11, 14, 17, 20, 23],
            "11": [3, 6, 9, 13, 16, 19, 23, 26, 30],
            "12": [4, 7, 11, 14, 18, 22, 26, 29, 33, 37],
            "13": [4, 8, 12, 16, 20, 24, 28, 33, 37, 41, 45],
            "14": [5, 9, 13, 17, 22, 26, 31, 36, 40, 45, 50, 55],
            "15": [5, 10, 14, 19, 24, 29, 34, 39, 44, 49, 54, 59, 64],
            "16": [6, 11, 15, 21, 26, 31, 37, 42, 47, 53, 59, 64, 70, 75],
            "17": [6, 11, 17, 22, 28, 34, 39, 45, 51, 57, 63, 67, 75, 81, 87],
            "18": [7, 12, 18, 24, 30, 36, 42, 48, 55, 61, 67, 74, 80, 86, 93, 99],
            "19": [7, 13, 19, 25, 32, 38, 45, 52, 58, 65, 72, 78, 85, 92, 99, 106, 113],
            "20": [8, 14, 20, 27, 34, 41, 48, 55, 62, 69, 76, 83, 90, 98, 105, 112, 119, 127],
            "21": [8, 15, 22, 29, 36, 43, 50, 58, 65, 73, 80, 88, 96, 103, 111, 119, 126, 134, 142],
            "22": [9, 16, 23, 30, 38, 45, 53, 61, 69, 77, 85, 93, 101, 109, 117, 125, 133, 141, 150, 158],
            "23": [9, 17, 24, 32, 40, 48, 56, 64, 73, 81, 89, 98, 106, 115, 123, 132, 140, 149, 157, 166, 175],
            "24": [10, 17, 25, 33, 42, 50, 59, 67, 76, 85, 94, 102, 111, 120, 129, 138, 147, 156, 165, 174, 183, 192],
            "25": [10, 18, 27, 35, 44, 53, 62, 71, 80, 89, 98, 107, 117, 126, 135, 145, 154, 163, 173, 182, 192, 201, 211],
            "26": [11, 19, 28, 37, 46, 55, 64, 74, 83, 93, 102, 112, 122, 132, 141, 151, 161, 171, 181, 191, 200, 210, 220, 230],
            "27": [11, 20, 29, 38, 48, 57, 67, 77, 87, 97, 107, 118, 125, 138, 147, 158, 168, 178, 188, 199, 209, 219, 230, 240, 250],
            "28": [12, 21, 30, 40, 50, 60, 70, 80, 90, 101, 111, 122, 132, 143, 154, 164, 175, 186, 196, 207, 218, 228, 239, 250, 261, 272],
            "29": [13, 22, 32, 42, 52, 62, 73, 83, 94, 105, 116, 127, 138, 149, 160, 171, 182, 193, 204, 215, 226, 238, 249, 260, 271, 282, 294],
            "30": [13, 23, 33, 43, 54, 65, 76, 87, 98, 109, 120, 131, 143, 154, 166, 177, 189, 200, 212, 223, 235, 247, 258, 270, 282, 293, 305, 317]
        };

        function r(au) {
            if (!b) {
                aR.runInContext = r;
                return aR;
            }
            au = au ? b.defaults(p.Object(), au, b.pick(p, s)) : p;
            var aE = au.Array,
                V = au.Date,
                ac = au.Function,
                an = au.Math,
                aA = au.Object,
                F = au.RegExp,
                Q = au.String;
            var z = [],
                aK = aA.prototype;
            var aa = an.abs,
                aG = au.clearTimeout,
                af = an.floor,
                w = an.log,
                H = an.max,
                aO = an.min,
                aH = an.pow,
                u = z.push,
                ay = au.setTimeout,
                al = z.shift,
                J = z.slice,
                R = an.sqrt,
                at = aK.toString;
            var O = aP(au, "document") && au.document;
            var N = Z("microtime");
            var T = aP(au, "performance") && au.performance;
            var ai = T && (T.now && "now" || T.webkitNow && "webkitNow");
            var x = aP(au, "process") && au.process;
            var aJ = O && O.createElement("div");
            var aB = "uid" + (+new V);
            var am = {};
            var aL = {};
            (function () {
                aL.air = ae(au.runtime, "ScriptBridgingProxyObject");
                aL.browser = O && aP(au, "navigator") && !aP(au, "phantom");
                aL.java = ae(au.java, "JavaPackage");
                aL.timeout = aP(au, "setTimeout") && aP(au, "clearTimeout");
                try {
                    aL.decompilation = ac("return (" + (function (aT) {
                        return {
                            x: "" + (1 + aT) + "",
                            y: 0
                        };
                    }) + ")")()(0).x === "1";
                } catch (aS) {
                    aL.decompilation = false;
                }
            }());
            var ad = {
                ns: V,
                start: null,
                stop: null
            };

            function aR(aT, aV, aS) {
                var aU = this;
                if (aU == null || aU.constructor != aR) {
                    return new aR(aT, aV, aS);
                }
                if (b.isPlainObject(aT)) {
                    aS = aT;
                } else {
                    if (b.isFunction(aT)) {
                        aS = aV;
                        aV = aT;
                    } else {
                        if (b.isPlainObject(aV)) {
                            aS = aV;
                            aV = null;
                            aU.name = aT;
                        } else {
                            aU.name = aT;
                        }
                    }
                }
                aq(aU, aS);
                aU.id || (aU.id = ++c);
                aU.fn == null && (aU.fn = aV);
                aU.stats = aD(aU.stats);
                aU.times = aD(aU.times);
            }

            function y(aT) {
                var aS = this;
                if (aS == null || aS.constructor != y) {
                    return new y(aT);
                }
                aS.benchmark = aT;
                v(aS);
            }

            function ab(aS) {
                var aT = this;
                return (aT == null || aT.constructor != ab) ? new ab(aS) : (aS instanceof ab ? aS : b.extend(aT, {
                    timeStamp: +new V
                }, typeof aS == "string" ? {
                    type: aS
                } : aS));
            }

            function aC(aT, aS) {
                var aU = this;
                if (aU == null || aU.constructor != aC) {
                    return new aC(aT, aS);
                }
                if (ae(aT, "Object")) {
                    aS = aT;
                } else {
                    aU.name = aT;
                }
                aq(aU, aS);
            }
            var aD = b.partialRight(b.cloneDeep, function (aS) {
                return (typeof aS == "object" && !b.isArray(aS) && !b.isPlainObject(aS)) ? aS : h;
            });

            function E() {
                E = function (aV, aT) {
                    var aS, aU = j ? j.amd : aR,
                        aW = aB + "createFunction";
                    ap((j ? "define.amd." : "Benchmark.") + aW + "=function(" + aV + "){" + aT + "}");
                    aS = aU[aW];
                    delete aU[aW];
                    return aS;
                };
                E = aL.browser && (E("", 'return"' + aB + '"') || aF)() == aB ? E : ac;
                return E.apply(null, arguments);
            }

            function t(aS, aT) {
                aS._timerId = b.delay(aT, aS.delay * 1000);
            }

            function aM(aS) {
                aJ.appendChild(aS);
                aJ.innerHTML = "";
            }

            function X(aS) {
                return (!b.has(aS, "toString") && (/^[\s(]*function[^(]*\(([^\s,)]+)/.exec(aS) || 0)[1]) || "";
            }

            function K(aS) {
                return aH(an.E, b.reduce(aS, function (aU, aT) {
                    return aU + w(aT);
                }) / aS.length) || 0;
            }

            function B(aS) {
                return (b.reduce(aS, function (aU, aT) {
                    return aU + aT;
                }) / aS.length) || 0;
            }

            function ao(aT, aU) {
                var aS = aU;
                if (U(aT)) {
                    aS = Q(aT);
                } else {
                    if (aL.decompilation) {
                        aS = (/^[^{]+\{([\s\S]*)\}\s*$/.exec(aT) || 0)[1];
                    }
                }
                aS = (aS || "").replace(/^\s+|\s+$/g, "");
                return /^(?:\/\*+[\w|\W]*?\*\/|\/\/.*?[\n\r\u2028\u2029]|\s)*(["'])use strict\1;?$/.test(aS) ? "" : aS;
            }

            function ae(aT, aS) {
                return aT != null && at.call(aT) == "[object " + aS + "]";
            }

            function aP(aS, aU) {
                if (aS == null) {
                    return false;
                }
                var aT = typeof aS[aU];
                return !e.test(aT) && (aT != "object" || !!aS[aU]);
            }

            function U(aS) {
                return b.has(aS, "toString") || ae(aS, "String");
            }

            function aF() {}

            function Z(aU) {
                try {
                    var aS = o && m(aU);
                } catch (aT) {}
                return aS || null;
            }

            function ap(aW) {
                var aT = j ? define.amd : aR,
                    aS = O.createElement("script"),
                    aV = O.getElementsByTagName("script")[0],
                    aU = aV.parentNode,
                    aZ = aB + "runScript",
                    aX = "(" + (j ? "define.amd." : "Benchmark.") + aZ + "||function(){})();";
                try {
                    aS.appendChild(O.createTextNode(aX + aW));
                    aT[aZ] = function () {
                        aM(aS);
                    };
                } catch (aY) {
                    aU = aU.cloneNode(false);
                    aV = null;
                    aS.text = aW;
                }
                aU.insertBefore(aS, aV);
                delete aT[aZ];
            }

            function aq(aT, aS) {
                aS = b.extend({}, aT.constructor.options, aS);
                aT.options = b.forOwn(aS, function (aV, aU) {
                    if (aV != null) {
                        if (/^on[A-Z]/.test(aU)) {
                            b.each(aU.split(" "), function (aW) {
                                aT.on(aW.slice(2).toLowerCase(), aV);
                            });
                        } else {
                            if (!b.has(aT, aU)) {
                                aT[aU] = aD(aV);
                            }
                        }
                    }
                });
            }

            function aj() {
                var aS = this,
                    aU = aS.benchmark,
                    aT = aU._original;
                if (aT.aborted) {
                    aS.teardown();
                    aU.running = false;
                    P(aS);
                } else {
                    if (++aS.cycles < aU.count) {
                        aU.compiled.call(aS, au, ad);
                    } else {
                        ad.stop(aS);
                        aS.teardown();
                        t(aU, function () {
                            P(aS);
                        });
                    }
                }
            }

            function M(aV, aU, aT) {
                if (aU === "successful") {
                    aU = function (aW) {
                        return aW.cycles && b.isFinite(aW.hz);
                    };
                } else {
                    if (aU === "fastest" || aU === "slowest") {
                        var aS = M(aV, "successful").sort(function (aX, aW) {
                            aX = aX.stats;
                            aW = aW.stats;
                            return (aX.mean + aX.moe > aW.mean + aW.moe ? 1 : -1) * (aU === "fastest" ? 1 : -1);
                        });
                        return b.filter(aS, function (aW) {
                            return aS[0].compare(aW) == 0;
                        });
                    }
                }
                return b.filter(aV, aU, aT);
            }

            function D(aS) {
                aS = Q(aS).split(".");
                return aS[0].replace(/(?=(?:\d{3})+$)(?!\b)/g, ",") + (aS[1] ? "." + aS[1] : "");
            }

            function S(aV, aU) {
                var a0, aT, aS, aZ = -1,
                    aW = {
                        currentTarget: aV
                    },
                    a4 = {
                        onStart: aF,
                        onCycle: aF,
                        onComplete: aF
                    },
                    a3 = b.toArray(aV);

                function a1() {
                    var a6, a5 = aX(aT);
                    if (a5) {
                        aT.on("complete", aY);
                        a6 = aT.events.complete;
                        a6.splice(0, 0, a6.pop());
                    }
                    a3[aZ] = b.isFunction(aT && aT[aU]) ? aT[aU].apply(aT, a0) : h;
                    return !a5 && aY();
                }

                function aY(a8) {
                    var a5, a7 = aT,
                        a6 = aX(a7);
                    if (a6) {
                        a7.off("complete", aY);
                        a7.emit("complete");
                    }
                    aW.type = "cycle";
                    aW.target = a7;
                    a5 = ab(aW);
                    a4.onCycle.call(aV, a5);
                    if (!a5.aborted && a2() !== false) {
                        aT = aS ? aV[0] : a3[aZ];
                        if (aX(aT)) {
                            t(aT, a1);
                        } else {
                            if (a6) {
                                while (a1()) {}
                            } else {
                                return true;
                            }
                        }
                    } else {
                        aW.type = "complete";
                        a4.onComplete.call(aV, ab(aW));
                    } if (a8) {
                        a8.aborted = true;
                    } else {
                        return false;
                    }
                }

                function aX(a5) {
                    var a6 = a0[0] && a0[0].async;
                    return aA(a5).constructor == aR && aU == "run" && ((a6 == null ? a5.options.async : a6) && aL.timeout || a5.defer);
                }

                function a2() {
                    aZ++;
                    if (aS && aZ > 0) {
                        al.call(aV);
                    }
                    return (aS ? aV.length : aZ < a3.length) ? aZ : (aZ = false);
                }
                if (b.isString(aU)) {
                    a0 = J.call(arguments, 2);
                } else {
                    a4 = b.extend(a4, aU);
                    aU = a4.name;
                    a0 = b.isArray(a0 = "args" in a4 ? a4.args : []) ? a0 : [a0];
                    aS = a4.queued;
                } if (a2() !== false) {
                    aT = a3[aZ];
                    aW.type = "start";
                    aW.target = aT;
                    a4.onStart.call(aV, ab(aW));
                    if (aV.aborted && aV.constructor == aC && aU == "run") {
                        aW.type = "cycle";
                        a4.onCycle.call(aV, ab(aW));
                        aW.type = "complete";
                        a4.onComplete.call(aV, ab(aW));
                    } else {
                        if (aX(aT)) {
                            t(aT, a1);
                        } else {
                            while (a1()) {}
                        }
                    }
                }
                return a3;
            }

            function ar(aV, aW, aU) {
                var aT = [],
                    aX = (aV = aA(aV)).length,
                    aS = aX === aX >>> 0;
                aU || (aU = ": ");
                b.each(aV, function (aZ, aY) {
                    aT.push(aS ? aZ : aY + aU + aZ);
                });
                return aT.join(aW || ",");
            }

            function ag() {
                var aT, aS = this,
                    aU = am.resetSuite;
                if (aS.running) {
                    aT = ab("abort");
                    aS.emit(aT);
                    if (!aT.cancelled || aU) {
                        am.abortSuite = true;
                        aS.reset();
                        delete am.abortSuite;
                        if (!aU) {
                            aS.aborted = true;
                            S(aS, "abort");
                        }
                    }
                }
                return aS;
            }

            function G(aT, aW, aS) {
                var aV = this,
                    aU = new aR(aT, aW, aS),
                    aX = ab({
                        type: "add",
                        target: aU
                    });
                if (aV.emit(aX), !aX.cancelled) {
                    aV.push(aU);
                }
                return aV;
            }

            function ax(aT) {
                var aU = this,
                    aS = new aU.constructor(b.extend({}, aU.options, aT));
                b.forOwn(aU, function (aW, aV) {
                    if (!b.has(aS, aV)) {
                        aS[aV] = aW && b.isFunction(aW.clone) ? aW.clone() : aD(aW);
                    }
                });
                return aS;
            }

            function A(aU) {
                var aT = this,
                    aS = new aT.constructor;
                aS.push.apply(aS, M(aT, aU));
                return aS;
            }

            function C() {
                var aT, aS = this,
                    aU = am.abortSuite;
                if (aS.running && !aU) {
                    am.resetSuite = true;
                    aS.abort();
                    delete am.resetSuite;
                } else {
                    if ((aS.aborted || aS.running) && (aS.emit(aT = ab("reset")), !aT.cancelled)) {
                        aS.aborted = aS.running = false;
                        if (!aU) {
                            S(aS, "reset");
                        }
                    }
                }
                return aS;
            }

            function I(aS) {
                var aT = this;
                aT.reset();
                aT.running = true;
                aS || (aS = {});
                S(aT, {
                    name: "run",
                    args: aS,
                    queued: aS.queued,
                    onStart: function (aU) {
                        aT.emit(aU);
                    },
                    onCycle: function (aV) {
                        var aU = aV.target;
                        if (aU.error) {
                            aT.emit({
                                type: "error",
                                target: aU
                            });
                        }
                        aT.emit(aV);
                        aV.aborted = aT.aborted;
                    },
                    onComplete: function (aU) {
                        aT.running = false;
                        aT.emit(aU);
                    }
                });
                return aT;
            }

            function ak(aW) {
                var aV, aT = this,
                    aX = ab(aW),
                    aU = aT.events,
                    aS = (arguments[0] = aX, arguments);
                aX.currentTarget || (aX.currentTarget = aT);
                aX.target || (aX.target = aT);
                delete aX.result;
                if (aU && (aV = b.has(aU, aX.type) && aU[aX.type])) {
                    b.each(aV.slice(), function (aY) {
                        if ((aX.result = aY.apply(aT, aS)) === false) {
                            aX.cancelled = true;
                        }
                        return !aX.aborted;
                    });
                }
                return aX.result;
            }

            function az(aU) {
                var aS = this,
                    aT = aS.events || (aS.events = {});
                return b.has(aT, aU) ? aT[aU] : (aT[aU] = []);
            }

            function Y(aU, aV) {
                var aS = this,
                    aT = aS.events;
                if (!aT) {
                    return aS;
                }
                b.each(aU ? aU.split(" ") : aT, function (aY, aX) {
                    var aW;
                    if (typeof aY == "string") {
                        aX = aY;
                        aY = b.has(aT, aX) && aT[aX];
                    }
                    if (aY) {
                        if (aV) {
                            aW = b.indexOf(aY, aV);
                            if (aW > -1) {
                                aY.splice(aW, 1);
                            }
                        } else {
                            aY.length = 0;
                        }
                    }
                });
                return aS;
            }

            function W(aU, aV) {
                var aS = this,
                    aT = aS.events || (aS.events = {});
                b.each(aU.split(" "), function (aW) {
                    (b.has(aT, aW) ? aT[aW] : (aT[aW] = [])).push(aV);
                });
                return aS;
            }

            function av() {
                var aT, aS = this,
                    aU = am.reset;
                if (aS.running) {
                    aT = ab("abort");
                    aS.emit(aT);
                    if (!aT.cancelled || aU) {
                        am.abort = true;
                        aS.reset();
                        delete am.abort;
                        if (aL.timeout) {
                            aG(aS._timerId);
                            delete aS._timerId;
                        }
                        if (!aU) {
                            aS.aborted = true;
                            aS.running = false;
                        }
                    }
                }
                return aS;
            }

            function L(aT) {
                var aU = this,
                    aV = aU.stats.sample,
                    aS = new aU.constructor(b.extend({}, aU, aT));
                aS.options = b.extend({}, aU.options, aT);
                b.forOwn(aU, function (aX, aW) {
                    if (!b.has(aS, aW)) {
                        aS[aW] = aD(aX);
                    }
                });
                return aS;
            }

            function aN(a0) {
                var a1, aX, aT = this,
                    aZ = aT.stats.sample,
                    aY = a0.stats.sample,
                    a6 = aZ.length,
                    a5 = aY.length,
                    a4 = H(a6, a5),
                    aV = aO(a6, a5),
                    aW = aS(aZ, aY),
                    aU = aS(aY, aZ),
                    a7 = aO(aW, aU);

                function a3(a9, a8) {
                    return b.reduce(a8, function (ba, bb) {
                        return ba + (bb > a9 ? 0 : bb < a9 ? 1 : 0.5);
                    }, 0);
                }

                function aS(a9, a8) {
                    return b.reduce(a9, function (ba, bb) {
                        return ba + a3(bb, a8);
                    }, 0);
                }

                function a2(a8) {
                    return (a8 - ((a6 * a5) / 2)) / R((a6 * a5 * (a6 + a5 + 1)) / 12);
                }
                if (aT == a0) {
                    return 0;
                }
                if (a6 + a5 > 30) {
                    aX = a2(a7);
                    return aa(aX) > 1.96 ? (a7 == aW ? 1 : -1) : 0;
                }
                a1 = a4 < 5 || aV < 3 ? 0 : l[a4][aV - 3];
                return a7 <= a1 ? (a7 == aW ? 1 : -1) : 0;
            }

            function ah() {
                var aX, aW, aU = this,
                    aT = 0,
                    aV = {
                        length: 0
                    },
                    aS = {
                        length: 0
                    };
                if (aU.running && !am.abort) {
                    am.reset = true;
                    aU.abort();
                    delete am.reset;
                } else {
                    aX = {
                        destination: aU,
                        source: b.extend({}, aU.constructor.prototype, aU.options)
                    };
                    do {
                        b.forOwn(aX.source, function (a1, a0) {
                            var a2, aY = aX.destination,
                                aZ = aY[a0];
                            if (a1 && typeof a1 == "object") {
                                if (b.isArray(a1)) {
                                    if (!b.isArray(aZ)) {
                                        a2 = aZ = [];
                                    }
                                    if (aZ.length != a1.length) {
                                        a2 = aZ = aZ.slice(0, a1.length);
                                        aZ.length = a1.length;
                                    }
                                } else {
                                    if (!aZ || typeof aZ != "object") {
                                        a2 = aZ = {};
                                    }
                                } if (a2) {
                                    aV[aV.length++] = {
                                        destination: aY,
                                        key: a0,
                                        value: aZ
                                    };
                                }
                                aS[aS.length++] = {
                                    destination: aZ,
                                    source: a1
                                };
                            } else {
                                if (a1 !== aZ && !(a1 == null || b.isFunction(a1))) {
                                    aV[aV.length++] = {
                                        destination: aY,
                                        key: a0,
                                        value: a1
                                    };
                                }
                            }
                        });
                    } while ((aX = aS[aT++]));
                    if (aV.length && (aU.emit(aW = ab("reset")), !aW.cancelled)) {
                        b.each(aV, function (aY) {
                            aY.destination[aY.key] = aY.value;
                        });
                    }
                }
                return aU;
            }

            function aw() {
                var aX = this,
                    aT = aX.error,
                    aY = aX.hz,
                    aZ = aX.id,
                    aW = aX.stats,
                    aV = aW.sample.length,
                    aU = aL.java ? "+/-" : "\xb1",
                    aS = aX.name || (b.isNaN(aZ) ? aZ : "<Test #" + aZ + ">");
                if (aT) {
                    aS += ": " + ar(aT);
                } else {
                    aS += " x " + D(aY.toFixed(aY < 100 ? 2 : 0)) + " ops/sec " + aU + aW.rme.toFixed(2) + "% (" + aV + " run" + (aV == 1 ? "" : "s") + " sampled)";
                }
                return aS;
            }

            function v() {
                var aV, aU = aR.options,
                    aW = {},
                    aX = [{
                        ns: ad.ns,
                        res: H(0.0015, aT("ms")),
                        unit: "ms"
                    }];
                v = function (a8) {
                    var bb;
                    if (a8 instanceof y) {
                        bb = a8;
                        a8 = bb.benchmark;
                    }
                    var a0 = a8._original,
                        a9 = U(a0.fn),
                        a5 = a0.count = a8.count,
                        ba = aL.decompilation || a9,
                        a3 = a0.id,
                        a1 = a0.name || (typeof a3 == "number" ? "<Test #" + a3 + ">" : a3),
                        bc = 0;
                    a8.minTime = a0.minTime || (a0.minTime = a0.options.minTime = aU.minTime);
                    if (aV) {
                        try {
                            ad.ns.nanoTime();
                        } catch (a6) {
                            ad.ns = new aV.Packages.nano;
                        }
                    }
                    var a2 = bb ? 'var d#=this,${fnArg}=d#,m#=d#.benchmark._original,f#=m#.fn,su#=m#.setup,td#=m#.teardown;if(!d#.cycles){d#.fn=function(){var ${fnArg}=d#;if(typeof f#=="function"){try{${fn}\n}catch(e#){f#(d#)}}else{${fn}\n}};d#.teardown=function(){d#.cycles=0;if(typeof td#=="function"){try{${teardown}\n}catch(e#){td#()}}else{${teardown}\n}};if(typeof su#=="function"){try{${setup}\n}catch(e#){su#()}}else{${setup}\n};t#.start(d#);}d#.fn();return{uid:"${uid}"}' : 'var r#,s#,m#=this,f#=m#.fn,i#=m#.count,n#=t#.ns;${setup}\n${begin};while(i#--){${fn}\n}${end};${teardown}\nreturn{elapsed:r#,uid:"${uid}"}';
                    var a7 = a0.compiled = a8.compiled = aZ(a0, bb, a2),
                        a4 = !(aW.fn || a9);
                    try {
                        if (a4) {
                            throw new Error('The test "' + a1 + '" is empty. This may be the result of dead code removal.');
                        } else {
                            if (!bb) {
                                a0.count = 1;
                                a7 = (a7.call(a0, au, ad) || {}).uid == aW.uid && a7;
                                a0.count = a5;
                            }
                        }
                    } catch (a6) {
                        a7 = null;
                        a8.error = a6 || new Error(Q(a6));
                        a0.count = a5;
                    }
                    if (ba && !a7 && !bb && !a4) {
                        a2 = (a8.error && !a9 ? "var r#,s#,m#=this,f#=m#.fn,i#=m#.count" : "function f#(){${fn}\n}var r#,s#,m#=this,i#=m#.count") + ",n#=t#.ns;${setup}\n${begin};m#.f#=f#;while(i#--){m#.f#()}${end};delete m#.f#;${teardown}\nreturn{elapsed:r#}";
                        a7 = aZ(a0, bb, a2);
                        try {
                            a0.count = 1;
                            a7.call(a0, au, ad);
                            a0.count = a5;
                            delete a8.error;
                        } catch (a6) {
                            a0.count = a5;
                            if (!a8.error) {
                                a8.error = a6 || new Error(Q(a6));
                            }
                        }
                    }
                    if (!a8.error) {
                        a7 = a0.compiled = a8.compiled = aZ(a0, bb, a2);
                        bc = a7.call(bb || a0, au, ad).elapsed;
                    }
                    return bc;
                };

                function aZ(a3, a1, a0) {
                    var a4 = a3.fn,
                        a2 = a1 ? X(a4) || "deferred" : "";
                    aW.uid = aB + g++;
                    b.extend(aW, {
                        setup: ao(a3.setup, aS("m#.setup()")),
                        fn: ao(a4, aS("m#.fn(" + a2 + ")")),
                        fnArg: a2,
                        teardown: ao(a3.teardown, aS("m#.teardown()"))
                    });
                    if (ad.unit == "ns") {
                        if (ad.ns.nanoTime) {
                            b.extend(aW, {
                                begin: aS("s#=n#.nanoTime()"),
                                end: aS("r#=(n#.nanoTime()-s#)/1e9")
                            });
                        } else {
                            b.extend(aW, {
                                begin: aS("s#=n#()"),
                                end: aS("r#=n#(s#);r#=r#[0]+(r#[1]/1e9)")
                            });
                        }
                    } else {
                        if (ad.unit == "us") {
                            if (ad.ns.stop) {
                                b.extend(aW, {
                                    begin: aS("s#=n#.start()"),
                                    end: aS("r#=n#.microseconds()/1e6")
                                });
                            } else {
                                if (ai) {
                                    b.extend(aW, {
                                        begin: aS("s#=n#." + ai + "()"),
                                        end: aS("r#=(n#." + ai + "()-s#)/1e3")
                                    });
                                } else {
                                    b.extend(aW, {
                                        begin: aS("s#=n#()"),
                                        end: aS("r#=(n#()-s#)/1e6")
                                    });
                                }
                            }
                        } else {
                            b.extend(aW, {
                                begin: aS("s#=new n#"),
                                end: aS("r#=(new n#-s#)/1e3")
                            });
                        }
                    }
                    ad.start = E(aS("o#"), aS("var n#=this.ns,${begin};o#.elapsed=0;o#.timeStamp=s#"));
                    ad.stop = E(aS("o#"), aS("var n#=this.ns,s#=o#.timeStamp,${end};o#.elapsed=r#"));
                    return E(aS("window,t#"), "var global = window, clearTimeout = global.clearTimeout, setTimeout = global.setTimeout;\n" + aS(a0));
                }

                function aT(a5) {
                    var a0, a2, a4 = 30,
                        a6 = 1000,
                        a1 = ad.ns,
                        a3 = [];
                    while (a4--) {
                        if (a5 == "us") {
                            a6 = 1000000;
                            if (a1.stop) {
                                a1.start();
                                while (!(a0 = a1.microseconds())) {}
                            } else {
                                if (a1[ai]) {
                                    a6 = 1000;
                                    a0 = ac("n", "var r,s=n." + ai + "();while(!(r=n." + ai + "()-s)){};return r")(a1);
                                } else {
                                    a2 = a1();
                                    while (!(a0 = a1() - a2)) {}
                                }
                            }
                        } else {
                            if (a5 == "ns") {
                                a6 = 1000000000;
                                if (a1.nanoTime) {
                                    a2 = a1.nanoTime();
                                    while (!(a0 = a1.nanoTime() - a2)) {}
                                } else {
                                    a2 = (a2 = a1())[0] + (a2[1] / a6);
                                    while (!(a0 = ((a0 = a1())[0] + (a0[1] / a6)) - a2)) {}
                                    a6 = 1;
                                }
                            } else {
                                a2 = new a1;
                                while (!(a0 = new a1 - a2)) {}
                            }
                        } if (a0 > 0) {
                            a3.push(a0);
                        } else {
                            a3.push(Infinity);
                            break;
                        }
                    }
                    return B(a3) / a6;
                }

                function aS(a0) {
                    return b.template(a0.replace(/\#/g, /\d+/.exec(aW.uid)), aW);
                }
                b.each(O && O.applets || [], function (a0) {
                    return !(ad.ns = aV = "nanoTime" in a0 && a0);
                });
                try {
                    if (typeof ad.ns.nanoTime() == "number") {
                        aX.push({
                            ns: ad.ns,
                            res: aT("ns"),
                            unit: "ns"
                        });
                    }
                } catch (aY) {}
                try {
                    if ((ad.ns = new(au.chrome || au.chromium).Interval)) {
                        aX.push({
                            ns: ad.ns,
                            res: aT("us"),
                            unit: "us"
                        });
                    }
                } catch (aY) {}
                if ((ad.ns = ai && T)) {
                    aX.push({
                        ns: ad.ns,
                        res: aT("us"),
                        unit: "us"
                    });
                }
                if (x && typeof (ad.ns = x.hrtime) == "function") {
                    aX.push({
                        ns: ad.ns,
                        res: aT("ns"),
                        unit: "ns"
                    });
                }
                if (N && typeof (ad.ns = N.now) == "function") {
                    aX.push({
                        ns: ad.ns,
                        res: aT("us"),
                        unit: "us"
                    });
                }
                ad = b.reduce(aX, function (a1, a0) {
                    return a0.res < a1.res ? a0 : a1;
                });
                if (ad.unit != "ns" && aV) {
                    aV = aM(aV);
                }
                if (ad.res == Infinity) {
                    throw new Error("Benchmark.js was unable to find a working timer.");
                }
                aU.minTime || (aU.minTime = H(ad.res / 2 / 0.01, 0.05));
                return v.apply(null, arguments);
            }

            function aQ(aS, a2) {
                a2 || (a2 = {});
                var aV = a2.async,
                    a1 = 0,
                    aX = aS.initCount,
                    a0 = aS.minSamples,
                    aY = [],
                    aZ = aS.stats.sample;

                function aT() {
                    aY.push(aS.clone({
                        _original: aS,
                        events: {
                            abort: [aW],
                            cycle: [aW],
                            error: [aW],
                            start: [aW]
                        }
                    }));
                }

                function aW(a4) {
                    var a5 = this,
                        a3 = a4.type;
                    if (aS.running) {
                        if (a3 == "start") {
                            a5.count = aS.initCount;
                        } else {
                            if (a3 == "error") {
                                aS.error = a5.error;
                            }
                            if (a3 == "abort") {
                                aS.abort();
                                aS.emit("cycle");
                            } else {
                                a4.currentTarget = a4.target = aS;
                                aS.emit(a4);
                            }
                        }
                    } else {
                        if (aS.aborted) {
                            a5.events.abort.length = 0;
                            a5.abort();
                        }
                    }
                }

                function aU(a5) {
                    var bf, bg, bi, be, ba, bc, a7, a4, bd = a5.target,
                        a9 = aS.aborted,
                        a6 = +new V,
                        bh = aZ.push(bd.times.period),
                        bb = bh >= a0 && (a1 += a6 - bd.times.timeStamp) / 1000 > aS.maxTime,
                        a3 = aS.times,
                        a8 = function (bk, bj) {
                            return bk + aH(bj - bi, 2);
                        };
                    if (a9 || bd.hz == Infinity) {
                        bb = !(bh = aZ.length = aY.length = 0);
                    }
                    if (!a9) {
                        bi = B(aZ);
                        a4 = b.reduce(aZ, a8, 0) / (bh - 1) || 0;
                        bc = R(a4);
                        a7 = bc / R(bh);
                        bg = bh - 1;
                        bf = i[an.round(bg) || 1] || i.infinity;
                        be = a7 * bf;
                        ba = (be / bi) * 100 || 0;
                        b.extend(aS.stats, {
                            deviation: bc,
                            mean: bi,
                            moe: be,
                            rme: ba,
                            sem: a7,
                            variance: a4
                        });
                        if (bb) {
                            aS.initCount = aX;
                            aS.running = false;
                            a9 = true;
                            a3.elapsed = (a6 - a3.timeStamp) / 1000;
                        }
                        if (aS.hz != Infinity) {
                            aS.hz = 1 / bi;
                            a3.cycle = bi * aS.count;
                            a3.period = bi;
                        }
                    }
                    if (aY.length < 2 && !bb) {
                        aT();
                    }
                    a5.aborted = a9;
                }
                aT();
                S(aY, {
                    name: "run",
                    args: {
                        async: aV
                    },
                    queued: true,
                    onCycle: aU,
                    onComplete: function () {
                        aS.emit("complete");
                    }
                });
            }

            function P(a2, a4) {
                a4 || (a4 = {});
                var a3;
                if (a2 instanceof y) {
                    a3 = a2;
                    a2 = a2.benchmark;
                }
                var aW, aY, aV, aU, aZ, a1, aX = a4.async,
                    aT = a2._original,
                    a0 = a2.count,
                    aS = a2.times;
                if (a2.running) {
                    aY = ++a2.cycles;
                    aW = a3 ? a3.elapsed : v(a2);
                    aZ = a2.minTime;
                    if (aY > aT.cycles) {
                        aT.cycles = aY;
                    }
                    if (a2.error) {
                        aU = ab("error");
                        aU.message = a2.error;
                        a2.emit(aU);
                        if (!aU.cancelled) {
                            a2.abort();
                        }
                    }
                }
                if (a2.running) {
                    aT.times.cycle = aS.cycle = aW;
                    a1 = aT.times.period = aS.period = aW / a0;
                    aT.hz = a2.hz = 1 / a1;
                    aT.initCount = a2.initCount = a0;
                    a2.running = aW < aZ;
                    if (a2.running) {
                        if (!aW && (aV = n[a2.cycles]) != null) {
                            a0 = af(4000000 / aV);
                        }
                        if (a0 <= a2.count) {
                            a0 += an.ceil((aZ - aW) / a1);
                        }
                        a2.running = a0 != Infinity;
                    }
                }
                aU = ab("cycle");
                a2.emit(aU);
                if (aU.aborted) {
                    a2.abort();
                }
                if (a2.running) {
                    a2.count = a0;
                    if (a3) {
                        a2.compiled.call(a3, au, ad);
                    } else {
                        if (aX) {
                            t(a2, function () {
                                P(a2, a4);
                            });
                        } else {
                            P(a2);
                        }
                    }
                } else {
                    if (aL.browser) {
                        ap(aB + "=1;delete " + aB);
                    }
                    a2.emit("complete");
                }
            }

            function aI(aS) {
                var aT = this,
                    aU = ab("start");
                aT.running = false;
                aT.reset();
                aT.running = true;
                aT.count = aT.initCount;
                aT.times.timeStamp = +new V;
                aT.emit(aU);
                if (!aU.cancelled) {
                    aS = {
                        async: ((aS = aS && aS.async) == null ? aT.async : aS) && aL.timeout
                    };
                    if (aT._original) {
                        if (aT.defer) {
                            y(aT);
                        } else {
                            P(aT, aS);
                        }
                    } else {
                        aQ(aT, aS);
                    }
                }
                return aT;
            }
            b.extend(aR, {
                options: {
                    async: false,
                    defer: false,
                    delay: 0.005,
                    id: h,
                    initCount: 1,
                    maxTime: 5,
                    minSamples: 5,
                    minTime: 0,
                    name: h,
                    onAbort: h,
                    onComplete: h,
                    onCycle: h,
                    onError: h,
                    onReset: h,
                    onStart: h
                },
                platform: a || Z("platform") || ({
                    description: au.navigator && au.navigator.userAgent || null,
                    layout: null,
                    product: null,
                    name: null,
                    manufacturer: null,
                    os: null,
                    prerelease: null,
                    version: null,
                    toString: function () {
                        return this.description || "";
                    }
                }),
                version: "1.0.0"
            });
            b.extend(aR, {
                filter: M,
                formatNumber: D,
                invoke: S,
                join: ar,
                runInContext: r,
                support: aL
            });
            b.each(["each", "forEach", "forOwn", "has", "indexOf", "map", "pluck", "reduce"], function (aS) {
                aR[aS] = b[aS];
            });
            b.extend(aR.prototype, {
                count: 0,
                cycles: 0,
                hz: 0,
                compiled: h,
                error: h,
                fn: h,
                aborted: false,
                running: false,
                setup: aF,
                teardown: aF,
                stats: {
                    moe: 0,
                    rme: 0,
                    sem: 0,
                    deviation: 0,
                    mean: 0,
                    sample: [],
                    variance: 0
                },
                times: {
                    cycle: 0,
                    elapsed: 0,
                    period: 0,
                    timeStamp: 0
                }
            });
            b.extend(aR.prototype, {
                abort: av,
                clone: L,
                compare: aN,
                emit: ak,
                listeners: az,
                off: Y,
                on: W,
                reset: ah,
                run: aI,
                toString: aw
            });
            b.extend(y.prototype, {
                benchmark: null,
                cycles: 0,
                elapsed: 0,
                timeStamp: 0
            });
            b.extend(y.prototype, {
                resolve: aj
            });
            b.extend(ab.prototype, {
                aborted: false,
                cancelled: false,
                currentTarget: h,
                result: h,
                target: h,
                timeStamp: 0,
                type: ""
            });
            aC.options = {
                name: h
            };
            b.extend(aC.prototype, {
                length: 0,
                aborted: false,
                running: false
            });
            b.extend(aC.prototype, {
                abort: ag,
                add: G,
                clone: ax,
                emit: ak,
                filter: A,
                join: z.join,
                listeners: az,
                off: Y,
                on: W,
                pop: z.pop,
                push: u,
                reset: C,
                run: I,
                reverse: z.reverse,
                shift: al,
                slice: z.slice,
                sort: z.sort,
                splice: z.splice,
                unshift: z.unshift
            });
            b.extend(aR, {
                Deferred: y,
                Event: ab,
                Suite: aC
            });
            b.each(["each", "forEach", "indexOf", "map", "pluck", "reduce"], function (aS) {
                var aT = b[aS];
                aC.prototype[aS] = function () {
                    var aU = [this];
                    u.apply(aU, arguments);
                    return aT.apply(b, aU);
                };
            });
            if (!b.support.spliceObjects) {
                b.each(["pop", "shift", "splice"], function (aS) {
                    var aT = z[aS];
                    aC.prototype[aS] = function () {
                        var aV = this,
                            aU = aT.apply(aV, arguments);
                        if (aV.length === 0) {
                            delete aV[0];
                        }
                        return aU;
                    };
                });
            }
            if (aL.air) {
                v({
                    _original: {
                        fn: aF,
                        count: 1,
                        options: {}
                    }
                });
            }
            return aR;
        }
        if (false == "function" && typeof define.amd == "object" && define.amd) {
            define(["lodash", "platform"], function (u, t) {
                return r({
                    _: u,
                    platform: t
                });
            });
        } else {
            var q = r();
            if (false) {
                if (f) {
                    (f.exports = q).Benchmark = q;
                } else {
                    o.Benchmark = q;
                }
            } else {
                p.Benchmark = q;
            }
        }
    }(this));
    /*!
     * ui.js
     * Copyright Mathias Bynens <http://mths.be/>
     * Modified by John-David Dalton <http://allyoucanleet.com/>
     * Available under MIT license <http://mths.be/mit>
     */
    (function (m, w) {
        var p = "/_jar/nano.jar";
        var o = [];
        var B = "UA-6065217-40";
        var y = {};
        var t = false;
        var C = "results-";
        var f = w.body;
        var A = {}.toString;
        var v = new Benchmark.Suite;
        var G = {
            error: "error",
            show: "show",
            results: "results"
        };
        var g = {
            localStorage: !! function () {
                try {
                    return !localStorage.getItem(+new Date);
                } catch (I) {}
            }(),
            runner: !!j("runner")
        };
        var d = {
            run: {
                again: "Run again",
                ready: "Run tests",
                running: "Stop running"
            },
            status: {
                again: "Done. Ready to run again.",
                ready: "Ready to run."
            }
        };
        var h = {
            async: true,
            queued: true
        };
        var r = Benchmark.filter,
            n = Benchmark.formatNumber,
            u = Benchmark.join;
        y.benchmark = {
            cycle: function () {
                var J = this,
                    I = J.stats.sample.length;
                if (!J.aborted) {
                    l(J.name + " x " + n(J.count) + " (" + I + " sample" + (I == 1 ? "" : "s") + ")");
                }
            },
            start: function () {
                if (c(m.init)) {
                    init();
                }
            }
        };
        y.button = {
            run: function () {
                var I = !v.running;
                v.abort();
                v.length = 0;
                if (I) {
                    E({
                        clear: true
                    });
                    v.push.apply(v, b.filter(v.benchmarks, function (J) {
                        return !J.error && J.reset();
                    }));
                    v.run(h);
                }
            }
        };
        y.title = {
            click: function (J) {
                J || (J = m.event);
                var L, I, K = J.target || J.srcElement;
                while (K && !(L = K.id)) {
                    K = K.parentNode;
                }
                I = L && --L.split("-")[1] || 0;
                v.push(v.benchmarks[I].reset());
                v.running ? v.render(I) : v.run(h);
            },
            keyup: function (I) {
                if (13 == (I || m.event).keyCode) {
                    y.title.click(I);
                }
            }
        };
        y.window = {
            hashchange: function () {
                v.parseHash();
                var K, L = v.params,
                    J = L.chart,
                    I = L.filterby;
                if (t) {
                    v.browserscope.postable = g.runner && !("nopost" in L);
                    if (J || I) {
                        K = j("results").offsetTop;
                        v.browserscope.render({
                            chart: J,
                            filterBy: I
                        });
                    }
                    if (g.runner) {
                        if (c(m.init)) {
                            init();
                        }
                        if ("run" in L) {
                            K = j("runner").offsetTop;
                            setTimeout(y.button.run, 1);
                        }
                        if (K) {
                            f.scrollTop = K;
                        }
                    }
                }
            },
            load: function () {
                if (g.runner) {
                    s("controls", G.show);
                    q("run", "click", y.button.run);
                    D("run", d.run.ready);
                    D("user-agent", Benchmark.platform);
                    l(d.status.ready);
                    j("question").value = "no";
                    if (g.localStorage) {
                        b.each([j("author"), j("author-email"), j("author-url")], function (J) {
                            J.value = localStorage[J.id] || "";
                            J.oninput = J.onkeydown = function (K) {
                                K && K.type < "k" && (J.onkeydown = null);
                                localStorage[J.id] = J.value;
                            };
                        });
                    }
                    try {
                        if (console.firebug || /firebug/i.test(console.table())) {
                            s("firebug", G.show);
                        }
                    } catch (I) {}
                }
                v.length = 0;
                b.defer(function () {
                    t = true;
                    y.window.hashchange();
                });
            }
        };

        function j(I) {
            return typeof I == "string" ? w.getElementById(I) : I;
        }

        function s(I, J) {
            if ((I = j(I)) && !e(I, J)) {
                I.className += (I.className ? " " : "") + J;
            }
            return I;
        }

        function q(J, I, K) {
            if ((J = j(J))) {
                if (typeof J.addEventListener != "undefined") {
                    J.addEventListener(I, K, false);
                } else {
                    if (typeof J.attachEvent != "undefined") {
                        J.attachEvent("on" + I, K);
                    }
                }
            }
            return J;
        }

        function F(J, I) {
            if ((J = j(J)) && I != null) {
                J.innerHTML += I;
            }
            return J;
        }

        function x(I) {
            return w.createElement(I);
        }

        function e(I, J) {
            return !!(I = j(I)) && (" " + I.className + " ").indexOf(" " + J + " ") > -1;
        }

        function D(J, I) {
            if ((J = j(J))) {
                J.innerHTML = I == null ? "" : I;
            }
            return J;
        }

        function z(I) {
            return 1 / (I.stats.mean + I.stats.moe);
        }

        function c(I) {
            return A.call(I) == "[object Function]";
        }

        function E(K) {
            var J, L = j("error-info"),
                I = {};
            if (typeof K == "object" && K) {
                I = K;
                K = I.text;
            } else {
                if (arguments.length) {
                    I.text = K;
                }
            } if (!L) {
                J = j("test-table");
                L = x("div");
                L.id = "error-info";
                J.parentNode.insertBefore(L, J.nextSibling);
            }
            if (I.clear) {
                L.className = L.innerHTML = "";
                o.length = 0;
            }
            if ("text" in I && b.indexOf(o, K) < 0) {
                o.push(K);
                s(L, G.show);
                F(L, K);
            }
        }

        function l(I) {
            D("status", I);
        }

        function i() {
            var J = this,
                I = location.hash.slice(1).split("&"),
                K = J.params || (J.params = {});
            b.forOwn(K, function (M, L) {
                delete K[L];
            });
            b.each(I[0] && I, function (L) {
                L = L.split("=");
                K[L[0].toLowerCase()] = (L[1] || "").toLowerCase();
            });
            return J;
        }

        function H(I) {
            b.each(I == null ? (I = 0, v.benchmarks) : [v.benchmarks[I]], function (M) {
                var K, J = j(C + (++I)),
                    L = M.error,
                    N = M.hz;
                J.title = "";
                J.className = G.results;
                if (L) {
                    D(J, "Error");
                    s(J, G.error);
                    K = u(L, "</li><li>");
                    E("<p>" + L + ".</p>" + (K ? "<ul><li>" + K + "</li></ul>" : ""));
                } else {
                    if (M.running) {
                        D(J, "running��");
                    } else {
                        if (M.cycles) {
                            if (v.running) {
                                D(J, "completed");
                            } else {
                                J.title = "Ran " + n(M.count) + " times in " + M.times.cycle.toFixed(3) + " seconds.";
                                D(J, n(N.toFixed(N < 100 ? 2 : 0)) );
                            }
                        } else {
                            if (v.running && v.indexOf(M) > -1) {
                                D(J, "pending..");
                            } else {
                                D(J, "ready");
                            }
                        }
                    }
                }
            });
            return v;
        }
        v.on("add", function (K) {
            var J = K.target,
                I = v.benchmarks.length,
                M = I + 1,
                L = j("title-" + M);
            v.benchmarks.push(J);
            if (g.runner) {
                L.tabIndex = 0;
                L.title = "Click to run this test again.";
                q(L, "click", y.title.click);
                q(L, "keyup", y.title.keyup);
                J.on("start", y.benchmark.start);
                J.on("start cycle", y.benchmark.cycle);
                v.render(I);
            }
        }).on("start cycle", function () {
            v.render();
            D("run", d.run.running);
        }).on("complete", function () {
            var I = r(v.benchmarks, "successful"),
                J = r(I, "fastest"),
                K = r(I, "slowest");
            v.render();
            D("run", d.run.again);
            l(d.status.again);
            b.each(I, function (M) {
                var L = j(C + (b.indexOf(v.benchmarks, M) + 1)),
                    R = z(J[0]),
                    P = z(M),
                    O = (1 - (P / R)) * 100,
                    N = L.getElementsByTagName("span")[0],
                    Q = "fastest";
                if (b.indexOf(J, M) > -1) {
                    s(L, Q);
                } else {
                    Q = isFinite(P) ? n(O < 1 ? O.toFixed(2) : Math.round(O)) + "% slower" : "";
                    if (b.indexOf(K, M) > -1) {
                        s(L, "slowest");
                    }
                } if (N) {
                    D(N, Q);
                } else {
                    F(L, "<span>" + Q + "</span>");
                }
            });
            v.browserscope.post();
        });
        v.benchmarks = [];
        v.params = {};
        v.parseHash = i;
        v.render = H;
        m.ui = v;
        m.alert = m.confirm = m.prompt = m.open = function () {};
        q(m, "hashchange", y.window.hashchange);
        q(m, "load", y.window.load);
        v.parseHash();

        if (g.runner) {
            (function () {
                var N, P = w.createElement("div"),
                    K = w.body,
                    J = K.style,
                    O = J.height,
                    M = w.documentElement,
                    I = M.style,
                    L = I.height;
                J.height = I.height = "auto";
                P.style.cssText = "display:block;height:9001px;";
                K.insertBefore(P, K.firstChild);
                N = M.scrollTop;
                if (M.clientWidth !== 0 && ++M.scrollTop && M.scrollTop == N + 1) {
                    f = M;
                }
                K.removeChild(P);
                J.height = O;
                I.height = L;
                M.scrollTop = N;
            }());
            (function () {
                var J, I, K = new Date;
                if ("nojava" in v.params) {
                    return s("java", G.show);
                }
                while (!(J = new Date - K)) {}
                if (J != 1 && !((I = m.performance) && typeof (I.now || I.webkitNow) == "function")) {
                    w.body.insertBefore(D(x("div"), "<applet code=nano archive=" + p + ">").lastChild, w.body.firstChild);
                }
            }());

        } else {
            v.render = function () {};
            v.off("start cycle complete");
            setTimeout(function () {
                v.off();
                v.browserscope.post = function () {};
                b.invoke(v.benchmarks, "off");
            }, 1);
        } if (B) {
            (function () {
                var I = x("script"),
                    J = w.getElementsByTagName("script")[0];
                m._gaq = [
                    ["_setAccount", B],
                    ["_trackPageview"]
                ];
                I.src = "//www.google-analytics.com/ga.js";
                J.parentNode.insertBefore(I, J);
            }());
        }
    }(this, document));
    (function (m, v) {
        var u = {
            counter: 0,
            lastAction: "load",
            lastChart: "bar",
            lastFilterBy: "all",
            responses: {},
            timers: {}
        };
        var E = {
            all: 3,
            desktop: "top-d",
            family: 0,
            major: 1,
            minor: 2,
            mobile: "top-m",
            popular: "top",
            prerelease: "top-d-e"
        };
        var J = /css/i.test(v.compatMode) ? "<!doctype html>" : "";
        var G = "\u2028";
        var C = Math.floor,
            B = Math.max,
            y = Math.min;
        var r = Benchmark.filter,
            n = Benchmark.formatNumber;

        function p(M, L, N) {
            if ((M = typeof M == "string" ? h(M)[0] : M)) {
                if (typeof M.addEventListener != "undefined") {
                    M.addEventListener(L, N, false);
                } else {
                    if (typeof M.attachEvent != "undefined") {
                        M.attachEvent("on" + L, N);
                    }
                }
            }
            return M;
        }

        function w(O, M, N) {
            var L;
            M && M.nodeType && (N = M, M = "");
            N = N ? N.ownerDocument || N : v;
            M || (M = "");
            try {
                L = N.createElement("<" + O + ' name="' + M + '">');
            } catch (P) {
                (L = N.createElement(O)).name = M;
            }
            return L;
        }

        function x(M, L) {
            var N = w("div", L);
            N.innerHTML = "x<style>" + M + "</style>";
            return N.lastChild;
        }

        function d(M, L) {
            M = h(M, L)[0];
            return M && (M.textContent || M.innerText) || "";
        }

        function q(P, N, M) {
            M = N ? N.ownerDocument || [N, N = 0][0] : M;
            var L = w("script", M),
                O = N ? N.nextSibling : h("script", M).pop();
            L.src = P;
            return (N || O).parentNode.insertBefore(L, O);
        }

        function h(M, N) {
            var L = [];
            M || (M = "");
            N = typeof N == "string" ? h(N)[0] : N || v;
            if (M.nodeType) {
                L = [M];
            } else {
                if (N) {
                    b.each(M.split(","), function (O) {
                        b.each(/^#/.test(O) ? [N.getElementById(O.slice(1))] : N.getElementsByTagName(O), function (P) {
                            L.push(P);
                        });
                    });
                }
            }
            return L;
        }

        function D(N, M, L) {
            if ((N = h(N)[0])) {
                N.innerHTML = b.template(M, L || {});
            }
            return N;
        }

        function f(O, M) {
            var N = ui.browserscope,
                L = N.container;
            if (L) {
                L.className = "bs-rt-message";
                D(L, O, M);
            }
        }

        function c() {
            var S = ui.browserscope,
                N = [],
                M = S.uaClass;
            var Q = S.chartWindow,
                T = Q.document,
                O = h("iframe", S.container)[0];
            var R = O ? Q.frames[O.name].document : h("#bs-chart", T)[0];
            var P = h("text,textpath", R),
                L = O ? R : T,
                U = false;
            if (O && P.length) {
                b.each(h("link,style", T), function (W) {
                    try {
                        var V = W.sheet || W.styleSheet;
                        b.each(V.cssRules || V.rules, function (Y) {
                            if ((Y.selectorText || Y.cssText).indexOf("." + M) > -1) {
                                N.push(Y.style && Y.style.cssText || /[^{}]*(?=})/.exec(Y.cssText) || "");
                            }
                        });
                    } catch (X) {}
                });
                h("head", L)[0].appendChild(x("." + M + "{" + N.join(";") + "}", L));
            }
            b.some(P, function (V) {
                var W;
                if ((V.string || d(V)).charAt(0) != G) {
                    return false;
                }
                if (V.string) {
                    V.className = M;
                    W = V.nextSibling;
                    V.parentNode.insertBefore(V.removeNode(), W);
                } else {
                    V.setAttribute("class", M);
                }
                return (U = true);
            });
            return U;
        }

        function H(O) {
            var M, N, L = O;
            if (b.isArray(O)) {
                L = b.map(O, H);
            } else {
                if (O === Object(O)) {
                    N = O.constructor;
                    L = N == Object ? {} : (M = function () {}, M.prototype = N.prototype, new M);
                    b.forOwn(O, function (Q, P) {
                        L[P] = H(Q);
                    });
                }
            }
            return L;
        }

        function F() {
            var L = b.invoke(r(ui.benchmarks, "successful"), "clone"),
                M = r(L, "fastest"),
                N = r(L, "slowest");
            var P = b.filter(L, function (Q) {
                return b.indexOf(M, Q) + b.indexOf(N, Q) == -2;
            });

            function O(Q, R) {
                Q.count = R.count;
                Q.cycles = R.cycles;
                Q.hz = R.hz;
                Q.stats = b.extend({}, R.stats);
            }
            b.each(M.concat(N), function (Q) {
                O(Q, b.indexOf(M, Q) > -1 ? M[M.length - 1] : N[0]);
            });
            P.sort(function (R, Q) {
                R = R.stats;
                Q = Q.stats;
                return (R.mean + R.moe > Q.mean + Q.moe) ? -1 : 1;
            });
            b.reduce(P, function (R, Q) {
                if (R.compare(Q) == 0) {
                    O(Q, R);
                }
                return Q;
            });
            return b.reduce(L, function (Q, T, S) {
                var R = T.stats;
                Q || (Q = {});
                S = A(T.name);
                Q[S && !b.has(Q, S) ? S : S + T.id] = C(1 / (R.mean + R.moe));
                return Q;
            }, null);
        }

        function e(M) {
            var L = [];
            b.forOwn(M, function (N) {
                return !(b.isArray(N) && (L = N));
            });
            return b.compact(L);
        }

        function i(M) {
            var L = [],
                N = {};
            b.forOwn(M, function (O) {
                return !(b.isArray(O) && 0 in O && "type" in O[0] && (L = O));
            });
            b.each(ui.benchmarks, function (P) {
                var O = A(P.name);
                N[O && !b.has(N, O) ? O : O + P.id] = P.name;
            });
            return b.each(L, function (O) {
                var P = N[O.label];
                P && (O.label = P);
            });
        }

        function I(P) {
            var O, R = ui.browserscope,
                N = u.lastFilterBy,
                M = h("#bs-ua", R.chartWindow.document)[0],
                S = g(d(h("strong", M)[0]), N),
                Q = R.uaClass,
                L = [];
            b.forOwn(P, function (U, T) {
                return !(b.isArray(U) && 0 in U && !("type" in U[0]) && (O = T, L = U));
            });
            if (L.length) {
                L = P[O] = b.filter(L, function (V) {
                    var U = e(V),
                        W = U[0],
                        T = U[1];
                    if (W && T && T.f) {
                        delete W.p.className;
                        if (S == g(W.f, N)) {
                            W.p.className = Q;
                        }
                        return true;
                    }
                });
            }
            return L;
        }

        function t(N, L) {
            function M(O) {
                if (O || N() !== false) {
                    setTimeout(M, L * 1000);
                }
            }
            M(true);
        }

        function o(L) {
            clearTimeout(u.timers[u.lastAction]);
            u.lastAction = L;
        }

        function g(M, L) {
            M || (M = "");
            if (L == "all") {
                M = M.replace(/(\d+)[.0]+$/, "$1");
            } else {
                if (L == "family") {
                    M = M.replace(/[.\d\s]+$/, "");
                } else {
                    if (/minor|popular/.test(L) && /\d+(?:\.[1-9])+$/.test(M)) {
                        M = M.replace(/(\d+\.[1-9])(\.[.\d]+$)/, "$1");
                    } else {
                        M = M.replace(/(\d+)(?:(\.[1-9]$)|(\.[.\d]+$))/, "$1$2");
                    }
                }
            }
            return M;
        }

        function A(L) {
            return (L || "").replace(/[^a-z0-9]+/gi, " ");
        }

        function j() {
            var M = ui.browserscope,
                N = M.chartWindow.document,
                O = N.documentElement,
                L = N.body;
            M.chartFrame.style.height = B(O.clientHeight, O.offsetHeight, L.offsetHeight, O.scrollHeight, L.scrollHeight) + "px";
        }

        function l(T) {
            T || (T = {});
            var L, Q = ui.browserscope,
                U = Q.container,
                R = u.lastFilterBy = T.filterBy || u.lastFilterBy,
                O = Q.chartWindow.google,
                P = u.responses,
                N = u.responses[R],
                S = O && O.visualization;

            function M(V) {
                var W = P[R];
                if (!L) {
                    L = true;
                    if (R == u.lastFilterBy) {
                        Q.render({
                            force: true,
                            response: W || V
                        });
                    } else {
                        if (!W && V && !V.isError()) {
                            P[R] = V;
                        }
                    }
                }
            }
            o("load");
            if (!U || !S || !S.Query || N) {
                f("");
                U && M(N);
            } else {
                if (!ui.running) {
                    u.timers.load = setTimeout(M, Q.timings.timeout * 1000);
                    f(Q.texts.loading);
                    (new S.Query("//www.browserscope.org/gviz_table_data?category=usertest_" + Q.key + "&v=" + E[R], {
                        sendMethod: "scriptInjection"
                    })).send(M);
                }
            }
        }
        function s(L) {
            var M = u.responses;
            if (L) {
                delete M[L];
            } else {
                b.forOwn(M, function (O, N) {
                    delete M[N];
                });
            }
        }

        function K(aj) {
            aj || (aj = {});
            var ae, aq, ad = ui.browserscope,
                am = ad.container,
                R = ad.chartWindow.google,
                at = u.responses,
                ab = R && R.visualization,
                ah = u.lastChart,
                aw = u.lastChart = aj.chart || ah,
                M = u.lastFilterBy,
                an = u.lastFilterBy = aj.filterBy || M,
                ai = at[an],
                Q = at[an] = "response" in aj ? (Q = aj.response) && !Q.isError() && Q : ai,
                Y = "100%",
                ar = 80,
                aa = 13,
                O = "auto",
                N = "operations per second (higher is better)",
                U = 48,
                S = 240,
                ap = "top",
                af = 0,
                ao = 20,
                P = 0,
                ag = 480,
                Z = am && am.offsetWidth || 948,
                al = "",
                T = 50,
                X = "",
                ax = 48,
                L = Z;

            function ac(az) {
                var ay = u.lastAction;
                if (az || ui.running) {
                    u.timers[ay] = setTimeout(ac, ad.timings.retry * 1000);
                } else {
                    ad[ay].apply(ad, ay == "render" ? [aj] : []);
                }
            }
            o(Q ? "render" : u.lastAction);
            if (!am || ab && (an != M || (!aj.force && aw == ah && Q == ai))) {
                am && an != M && l(aj);
            } else {
                if (!Q || !ab) {
                    !Q && ab && f(ad.texts.error);
                    ac(true);
                } else {
                    if (!ui.running) {
                        var av = H(Q.getDataTable()),
                            W = i(av),
                            au = I(av),
                            V = au.length;
                        aw = aw.charAt(0).toUpperCase() + aw.slice(1).toLowerCase();
                        am.className = "";
                        if (aw != "Table") {
                            W.pop();
                            b.each(au, function (ay) {
                                b.each(e(ay), function (az, aB, aA) {
                                    var aC = aA.length - 1;
                                    if (/^[\d.,]+$/.test(az.f)) {
                                        az.v = +az.f.replace(/,/g, "");
                                        az.f += " ops/sec";
                                        P = B(P, az.v);
                                    } else {
                                        if (az.f) {
                                            az.f += aw == "Pie" ? "" : " (" + (aA[aC].v || 1) + ")";
                                            af = y(ao, B(af, az.f.length));
                                        }
                                    } if (aw == "Pie") {
                                        if (aB == aC) {
                                            aA[1].f = n(aA[1].v) + " total ops/sec";
                                        } else {
                                            if (aB > 1 && typeof az.v == "number") {
                                                aA[1].v += az.v;
                                            }
                                        }
                                    }
                                    if (az.p && az.p.className) {
                                        az.f = G + az.f;
                                        t(function () {
                                            return !c(ad.chartWindow.document);
                                        }, 0.01);
                                    }
                                });
                            });
                            if (aw == "Bar") {
                                O = B(ag, T + (V * ar));
                                S = (af * (aa / 1.6)) + 10;
                                Y = (100 - (((S + 50) / L) * 100)) + "%";
                            } else {
                                X = [N, N = X][0];
                                O = ag;
                                if (aw == "Pie") {
                                    ap = "right";
                                    al = "Total operations per second by browser (higher is better)";
                                } else {
                                    U = 28;
                                    S = ax + (n(P).length * (aa / 1.6)) + 13;
                                    aq = (af * (aa / 2)) + 26;
                                    L = B(Z, S + (V * aq));
                                }
                            }
                            ae = (100 - (((U + aa + T + 8) / O) * 100)) + "%";
                            aw += "Chart";
                        }
                        if (V && ab[aw]) {
                            var ak = new ab[aw](am);
                            ab.events.addListener(ak, "ready", j);
                            ak.draw(av, {
                                colors: ui.browserscope.colors,
                                fontSize: aa,
                                height: O,
                                is3D: true,
                                legend: ap,
                                title: al,
                                width: L,
                                chartArea: {
                                    height: ae,
                                    left: S,
                                    top: T,
                                    width: Y
                                },
                                hAxis: {
                                    baseline: 0,
                                    title: N
                                },
                                vAxis: {
                                    baseline: 0,
                                    title: X
                                }
                            });
                        } else {
                            f(ad.texts.empty);
                        }
                    }
                }
            }
        }
        ui.browserscope = {
            key: "",
            postable: true,
            selector: "#bs-results",
            uaClass: "rt-ua-cur",
            timings: {
                refresh: 3,
                retry: 5,
                timeout: 10
            },
            texts: {
                empty: "No data available",
                error: "The get/post request has failed :(",
                loading: "Loading cumulative results data��",
                post: "Posting results snapshot��",
                wait: "Benchmarks running. Please wait��"
            },
            load: l,
            purge: s,
            render: K
        };
        p(m, "load", function () {
            var R = ui.browserscope,
                P = R.key,
                S = P && h(R.selector)[0];
            if (!S) {
                return;
            }
            var O = "bs-chart-frame",
                Q = w("iframe", O);
            Q.id = O;
            Q.frameBorder = 0;
            Q.scrolling = "no";
            S.parentNode.replaceChild(Q, S);
            var M = frames[O],
                L = M.document,
                N = "main.css";
            b.some(v.styleSheets, function (T) {
                var U = T.href;
                return U && U.indexOf(location.hostname) > -1 && (N = U);
            });
            L.write(b.template('${doctype}<html><head><meta charset="utf-8"><title></title><link rel="stylesheet" href="${href}"><script>ui=parent.ui<\/script></head><body><div id=bs-results><h1 id=bs-logo><a href=//www.browserscope.org/user/tests/table/${key}><span>Browserscope</span></a></h1><div class=bs-rt><div id=bs-chart></div></div></div></body></html>', {
                doctype: J,
                href: N,
                key: P
            }));
            L.close();
            R.chartFrame = Q;
            R.chartWindow = M;
            R.container = h("#bs-chart", L)[0];
            q("//www.browserscope.org/ua?o=js", R.container).id = "bs-ua-script";
            q("//www.google.com/jsapi?autoload=" + encodeURIComponent('{modules:[{name:"visualization",version:1,packages:["corechart","table"],callback:ui.browserscope.load}]}'), L);
        });
        ui.on("start", function () {
            f(ui.browserscope.texts.wait);
        }).on("abort", function () {
            ui.browserscope.render({
                force: true
            });
        });
    }(this, document));
}.call(this))
    ui.browserscope.key = 'agt1YS1wcm9maWxlcnIRCxIEVGVzdBiAgICSx6q0Cgw';

  ui.add('Single thread', '\
    single(1e6);'
  )
  .add('1 thread (Worker)', {
    'defer': true,
    'fn': '\
      parallel(1e6, 1)'
  })
  .add('2 threads', {
    'defer': true,
    'fn': '\
      parallel(1e6, 2)'
  })
  .add('4 threads', {
    'defer': true,
    'fn': '\
      parallel(1e6, 4)'
  })
  .add('8 threads', {
    'defer': true,
    'fn': '\
      parallel(1e6, 8)'
  });

  Benchmark.prototype.setup = '\
    window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL || window.oURL;\n\
    \n\
    function parallel(t, count) {\n\
      count = count || 4;\n\
      var threads = [];\n\
      var step = Math.ceil(t / count);\n\
      var sum = 0;\n\
      var code = \'function calc(from, to){var sum = 0; for(var i = from; i\x3C= to; i++) sum += i;return sum;} onmessage = function(e) {postMessage(calc(e.data.from, e.data.to));close();}\';\n\
      var bb = new Blob([code], {\n\
        type: \'text/javascript\'\n\
      });\n\
      var bbURL = URL.createObjectURL(bb);\n\
      for (var from = 1, to = step; from \x3C= t; from += step, to += step) {\n\
        var worker = new Worker(bbURL);\n\
        worker.onmessage = function(e) {\n\
          sum += e.data;\n\
          if (--count === 0) {\n\
            threads = null;\n\
            URL.revokeObjectURL(bbURL);\n\
            deferred.resolve();\n\
          }\n\
        };\n\
        worker.postMessage({\n\
          from: from,\n\
          to: (to > t ? t : to)\n\
        });\n\
        //console.log({from: from, to: (to > t? t: to)});\n\
        threads.push(worker);\n\
      }\n\
    }\n\
    \n\
    function single(t) {\n\
      var sum = 0;\n\
      for (var i = 1; i \x3C= t; i++)\n\
        sum += i;\n\
      return sum;\n\
    }';

};

/***************************************************************************
 * WebWorker TC
/***************************************************************************/

var isWorkerDone = false;
var running = false;

var TC_NAME_WORKER_WORK;
var TC_NAME_WORKER_PERF;
var TC_WORKER_PERF_DONE = false;

var worker = new Worker('./tc/module/html5/tc_worker_background.js');

module("Browser Supports");

test("Worker\ in window", function() {ok( "Worker" in window ); });

//  test("var worker (exists)", function() { ok( worker); });

module("Properties");

//  test("worker", function() { ok( worker.toString(), '[object Worker]', "worker.toString() === '[object Worker]'");});

//  test("[object Worker]", function() {equal( toString.call( worker ), '[object Worker]', "toString.call( worker ) === '[object Worker]'");});

//  test("toString.call( worker ) === '[object Worker]'", function() {equal( toString.call( worker ), '[object Worker]', "toString.call( worker ) === '[object Worker]'");});

test("onmessage", function() {
    equal( worker.onmessage, null, 'worker.onmessage === null' );
});

test("onerror", function() {
    equal( worker.onerror, null, 'worker.onerror === null' );
});

/*
 test("addEventListener", function() {ok( worker.addEventListener, 'worker.addEventListener implemented');});
 test("dispatchEvent", function() { ok( worker.dispatchEvent, 'worker.dispatchEvent implemented');});
 test("postMessage", function() { ok( worker.postMessage, 'worker.postMessage implemented');});
 test("removeEventListener", function() {ok( worker.removeEventListener, 'worker.removeEventListener implemented');});
 test("terminate", function() {ok( worker.terminate, 'worker.terminate implemented');    });
 */

module("Methods");

test("addEventListener()", function() {
    equal( typeof worker.addEventListener, 'function', 'typeof worker.addEventListener function' );
});

test("dispatchEvent ()", function() {
    equal( typeof worker.dispatchEvent, 'function', 'typeof worker.dispatchEvent function' );
});

test("postMessage()", function() {
    equal( typeof worker.postMessage, 'function', 'typeof worker.postMessage function' );
});

test("removeEventListener()", function() {
    equal( typeof worker.removeEventListener, 'function', 'typeof worker.removeEventListener function' );
});

test("terminate()", function() {
    equal( typeof worker.terminate, 'function', 'typeof worker.terminate function' );
});


var tc_worker_working = function() {
    if (checkTC(TC_NAME_WORKER_WORK)) {
        if (isWorkerDone)
            ok(true, "worker works");
        else
            ok(false, "worker not works");
    }
}

module("Working Test");

asyncTest("Worker working Test", function() {
		var worker = new Worker('./tc/module/html5/tc_worker_background.js');
		var statusDiv = document.getElementById('text-test-error');

		setTimeout( function() {
			QUnit.start();
			if (isWorkerDone)
			ok(true, "worker works");
			else
			ok(false, "worker not works");
		}, 60000);

		worker.addEventListener('message', function (event) {
			QRunner.view.console.log(event.data);

			if (event.data === "Done!") {
			running = false;
			isWorkerDone = true;
			//doNow(tc_worker_working);
			}
		});

		running = !running;
		/*
		if (running) {
			statusDiv.innerHTML = "";
			//        button.value = "stop worker";
		} else {
			//        button.value = "start worker";
		}
		*/
		worker.postMessage('');
});

var tc_worker_working2 = function() {

    if (checkTC(TC_NAME_WORKER_WORK)) {
        if (isWorkerDone)
            ok(true, "worker works");
        else
            ok(false, "worker not works");
    }
}

var tcWorkerPerfTestRunner = function() {
    test("Worker Performance Test", function() {
        var testRunner = document.getElementById('perftests');
        testRunner.style.visibility = "visible";
        document.getElementById("title-1").click();
        ok(true);
    });
}

window.addEventListener('load', function(){
		console.log("tc page load")
    /*
    var banner = document.getElementById('qunit-header');
    var button = document.createElement('button');
    button.type = "button";
    button.innerHTML="performanceTest";

    button.onclick = function() {

        var qunit = document.getElementById('qunit');
        var performTest = document.getElementById("iframeDiv");
        if ( performTest === null) {
            var performTest = document.createElement("div");
            performTest.setAttribute("align", "left");
            performTest.id = "iframeDiv";
            performTest.innerHTML = "<iframe src='http://jsperf.com/webworker-vs-single-thread/19' id='iframe01'  name='iframe01' width='800' height='430' > </iframe>";
            qunit.appendChild(performTest);
        } else {
            performTest.style.visibility = "visible";
        }
        var tc_table = document.getElementById('dev-qunit-test');
        tc_table.style.visibility = "hidden";
        document.getElementById('player_layer').style.visibility = "hidden";
        document.getElementById('text-test-error').style.visibility = "hidden";

        document.getElementById("title-1").click();
    }

    banner.appendChild(button);
    */

    //var div = document.getElementById('player');
    var statusDiv = document.createElement('div');
    statusDiv.id = 'video';
    document.body.appendChild(statusDiv);

    var testRunner = "<section id=\"runner\">"
    +"<h2>Performance Test runner</h2>"
    +"<p id=\"status\">Status.<noscript><strong>To run the tests, please <a href=\"http://enable-javascript.com/\">enable JavaScript</a> and reload the page.</strong></noscript></p>"
    +"<table id=\"test-table\">"
    +"	<thead>"
    +"		<tr>"
    +"			<th colspan=\"2\">Test</th>"
    +"			<th title=\"Operations per second (higher is better)\">Ops/sec</th>"
    +"		</tr>"
    +"	</thead>"
    +"	<tbody>"
    +"		<tr>"
    +"			<th scope=\"row\" id=\"title-1\"><div>Single thread</div></th>"
    +"			<td class=\"code\"><pre><code>single<span class=\"br0\">&#40;</span>1e6<span class=\"br0\">&#41;</span><span class=\"sy0\">;</span></code></pre></td>"
    +"			<td id=\"results-1\" class=\"results\">pending��</td>"
    +"		</tr>"
    +"		<tr>"
    +"			<th scope=\"row\" id=\"title-2\"><div>1 thread (Worker)</div></th>"
    +"			<td class=\"code\"><pre><code><strong class=\"co1\">// async test</strong><br>parallel<span class=\"br0\">&#40;</span>1e6<span class=\"sy0\">,</span> <span class=\"nu0\">1</span><span class=\"br0\">&#41;</span></code></pre></td>"
    +"			<td id=\"results-2\" class=\"results\">pending��</td>"
    +"		</tr>"
    +"		<tr>"
    +"			<th scope=\"row\" id=\"title-3\"><div>2 threads</div></th>"
    +"			<td class=\"code\"><pre><code><strong class=\"co1\">// async test</strong><br>parallel<span class=\"br0\">&#40;</span>1e6<span class=\"sy0\">,</span> <span class=\"nu0\">2</span><span class=\"br0\">&#41;</span></code></pre></td>"
    +"			<td id=\"results-3\" class=\"results\">pending��</td>"
    +"		</tr>"
    +"		<tr>"
    +"			<th scope=\"row\" id=\"title-4\"><div>4 threads</div></th>"
    +"			<td class=\"code\"><pre><code><strong class=\"co1\">// async test</strong><br>parallel<span class=\"br0\">&#40;</span>1e6<span class=\"sy0\">,</span> <span class=\"nu0\">4</span><span class=\"br0\">&#41;</span></code></pre></td>"
    +"			<td id=\"results-4\" class=\"results\">pending��</td>"
    +"		</tr>"
    +"		<tr>"
    +"			<th scope=\"row\" id=\"title-5\"><div>8 threads</div></th>"
    +"			<td class=\"code\"><pre><code><strong class=\"co1\">// async test</strong><br>parallel<span class=\"br0\">&#40;</span>1e6<span class=\"sy0\">,</span> <span class=\"nu0\">8</span><span class=\"br0\">&#41;</span></code></pre></td>"
    +"			<td id=\"results-5\" class=\"results\">pending��</td>"
    +"		</tr>"
    +"	</tbody>"
    +"</table>"
    +"</section>"
    +"<section>"
    +"<div id=\"bs-results\"></div>"
    +"</section>";

    var button = document.createElement('div');
    button.innerHTML=testRunner;
    button.id = "perftests";
    button.style.visibility = "hidden";
    statusDiv.appendChild(button);

    benchmark();

    //tcWorkerPerfTestRunner();
});


