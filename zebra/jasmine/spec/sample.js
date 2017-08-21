function typeCheck(obj, name){ it(name, function() { expect(obj[name]).toBeDefined(); }); };

describe("7.17 DLNA RUI Remote Control Function APIs", function() {
    var media = document.createElement('video');

    beforeEach(function() {
    });

    describe("Constants", function() {
        typeCheck(media,"play");
    });
});

