///<reference path='../../src/qrunner.d.ts'/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var tcOipfObjectFactory = (function (_super) {
    __extends(tcOipfObjectFactory, _super);
    function tcOipfObjectFactory() {
        _super.call(this);
        this.test_2_ = function () {
            try {
                QUnit.ok(this.oipfobjectFactory.createHumaxVideoBroadcastObject !== undefined, "is exists");
            }
            catch (e) {
            }
            finally {
                console.debug("called test_2_");
            }
        };
        this.test_3_ = function () {
            try {
                QUnit.ok(true, "is exists");
            }
            catch (e) {
            }
            finally {
                console.debug("called test_3_");
            }
        };
        this.test_4_ = function () {
            try {
                QUnit.ok(this.oipfobjectFactory.createHumaxVideoBroadcastObject !== undefined, "is exists");
            }
            catch (e) {
            }
            finally {
                console.debug("called test_4_");
            }
        };
        this.test_5_ = function () {
            try {
                QUnit.ok(this.oipfobjectFactory.createHumaxVideoBroadcastObject !== undefined, "is exists");
            }
            catch (e) {
            }
            finally {
                console.debug("called test_5_");
            }
        };
        this.addModule("ObjectFactory.1");
        this.addCase("test_1_", this.test_1_, this.pre_test_1_);
        this.addCase("test_2_", this.test_2_, this.pre_test_2_);
        this.addCase("test_3_", this.test_3_, null, 500);
        this.addCase("test_4_", this.test_4_, null, 500);
        this.addCase("test_5_", this.test_5_, null, 500);
        this.addModule("ObjectFactory.2");
        this.addCase("test_6_", this.test_6_, null, 500);
        this.addCase("test_7_", this.test_7_, null, 500);
        this.addCase("test_8_", this.test_8_, null, 500);
        this.addCase("test_9_", this.test_9_, null, 1000);
        this.addCase("test_10_", this.test_10_, null);
    }
    /**
     * Test Module 1
     */
    tcOipfObjectFactory.prototype.pre_test_1_ = function () {
        console.log("pre_test_1_");
    };
    tcOipfObjectFactory.prototype.test_1_ = function () {
        try {
            QUnit.ok(this.oipfobjectFactory.createVideoBroadcastObject !== undefined, "is exists");
        }
        catch (e) {
        }
        finally {
            console.debug("called test_1_");
        }
    };
    tcOipfObjectFactory.prototype.pre_test_2_ = function () {
        console.log("pre_test_2_");
    };
    /**
     * Test Module 2
     */
    tcOipfObjectFactory.prototype.test_6_ = function () {
        try {
            QUnit.ok(true, "is exists");
        }
        catch (e) {
        }
        finally {
            console.debug("called test_6_");
        }
    };
    tcOipfObjectFactory.prototype.test_7_ = function () {
        try {
            QUnit.ok(true, "is exists");
        }
        catch (e) {
        }
        finally {
            console.debug("called test_7_");
        }
    };
    tcOipfObjectFactory.prototype.test_8_ = function () {
        try {
            QUnit.ok(true, "is exists");
        }
        catch (e) {
        }
        finally {
            console.debug("called test_8_");
        }
    };
    tcOipfObjectFactory.prototype.test_9_ = function () {
        try {
            QUnit.ok(true, "is exists");
        }
        catch (e) {
        }
        finally {
            console.debug("called test_9_");
        }
    };
    tcOipfObjectFactory.prototype.test_10_ = function () {
        try {
            QUnit.ok(this.oipfobjectFactory.createHumaxVideoBroadcastObject !== undefined, "is exists");
        }
        catch (e) {
        }
        finally {
            console.debug("called test_10_");
        }
    };
    return tcOipfObjectFactory;
})(QTest);
