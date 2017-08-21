
//start test
var oipfobjectFactory = window.oipfObjectFactory;
var searchManager = undefined;
var metadataSearch = undefined;
var query = undefined;
var searchResults = undefined;

var searchTarget_scheduled = 1;
var searchTarget_onDemand = 2;

if( oipfobjectFactory !== undefined )
{
    try {
        searchManager = oipfobjectFactory.createSearchManagerObject();
    } catch (e)
    {
        console.log(e);
    }
}


module("SearchManager");
test("guideDaysAvailable", function() {
    try {
        ok(searchManager.guideDaysAvailable !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("onMetadataUpdate", function() {
    try {
        ok(searchManager.onMetadataUpdate !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("onMetadataSearch", function() {
    try {
        ok(searchManager.onMetadataSearch !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("createSearch()", function() {
    try {
        ok(searchManager.createSearch !== undefined, "is exists");
        metadataSearch = searchManager.createSearch(searchTarget_scheduled);
    } catch (e) {
        ok (false, "not exists");
    }
});
test("getChannelConfig()", function() {
    try {
        ok(searchManager.getChannelConfig !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});



module("MetadataSearch");
test("searchTarget", function() {
    try {
        ok(metadataSearch.searchTarget !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("result", function() {
    try {
        ok((searchResults = metadataSearch.result) !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("setQuery()", function() {
    try {
        ok(metadataSearch.setQuery !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("addRatingConstraint()", function() {
    try {
        ok(metadataSearch.addRatingConstraint !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("orderBy()", function() {
    try {
        ok(metadataSearch.orderBy !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("createQuery()", function() {
    try {
        ok(metadataSearch.createQuery !== undefined, "is exists");
        query = metadataSearch.createQuery("programme.starttime", 1, "name");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("findProgrammesFromStream()", function() {
    try {
        ok(metadataSearch.findProgrammesFromStream !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});


module("Query");
test("and()", function() {
    try {
        ok(query.and !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("or()", function() {
    try {
        ok(query.or !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("not()", function() {
    try {
        ok(query.not !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

module("SearchResults");
test("length", function() {
    try {
        ok(searchResults.length !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("offset", function() {
    try {
        ok(searchResults.offset !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("item()", function() {
    try {
        ok(searchResults.item !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("getResults()", function() {
    try {
        ok(searchResults.getResults !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("abort()", function() {
    try {
        ok(searchResults.abort !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
