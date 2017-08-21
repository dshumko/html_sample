QUnit.module("ImportModule.1");

QUnit.test("Test1", function(assert) {
		console.debug("ImportModule - Test1");
		QUnit.ok(true, "Hello");
	});

QUnit.test("Test2", function(assert) {
		console.debug("ImportModule - Test2");
		QUnit.ok(true, "Hello");
	});

QUnit.test("Test3", function(assert) {
		console.debug("ImportModule - Test3");
		QUnit.ok(true, "Hello");
	});

QUnit.test("Test4", function(assert) {
		console.debug("ImportModule - Test4");
		QUnit.ok(true, "Hello");
	});
QUnit.test("Test5", function(assert) {
		console.debug("ImportModule - Test5");
		QUnit.ok(true, "Hello");
	});

QUnit.module("ImportModule.2");
QUnit.test("Test6", function(assert) {
		console.debug("ImportModule - Test6");
		QUnit.ok(false, "Hello");
	});
QUnit.test("Test7", function(assert) {
		console.debug("ImportModule - Test7");
		QUnit.ok(false, "Hello");
	});
QUnit.test("Test8", function(assert) {
		console.debug("ImportModule - Test8");
		QUnit.ok(false, "Hello");
	});
QUnit.test("Test9", function(assert) {
		console.debug("ImportModule - Test9");
		QUnit.ok(false, "Hello");
	});
QUnit.test("Test10", function(assert) {
		console.debug("ImportModule - Test10");
		QUnit.ok(false, "Hello");
	});
