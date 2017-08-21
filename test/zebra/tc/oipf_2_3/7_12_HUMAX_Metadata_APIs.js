describe("7.12 Metadata APIs", function() {
    var oipfobjectFactory;
    var searchManager;
    var metadataSearch;
    var query;
    var searchResults;

    var searchTarget_scheduled = 1;
    var searchTarget_onDemand = 2;

    try{
        oipfobjectFactory = window.oipfObjectFactory;
        searchManager = oipfobjectFactory.createSearchManagerObject();
    }catch(e){
        searchManager = undefined;
    }

    describe("7.12.2 The MetadataSearch class", function() {
        beforeEach(function() {
            metadataSearch = searchManager.createSearch(searchTarget_scheduled);
        });
        describe("Hmx Properties", function() {
            it("id", function() { expect(metadataSearch.id).toBeDefined(); });
        });
        describe("Hmx Methods", function() {
            it("addConstraint", function() { expect(metadataSearch.addConstraint).toBeDefined(); });
            it("createQuery", function() { expect(metadataSearch.createQuery).toBeDefined(); });
        });
    });
    describe("7.12.4 The SearchResults class", function() {
        beforeEach(function() {
            metadataSearch = searchManager.createSearch(searchTarget_scheduled);
            query = metadataSearch.createQuery("programme.starttime", 1, "name");
            searchResults = metadataSearch.result;
        });
        describe("Hmx Methods", function() {
            it("update", function() { expect(searchResults.update).toBeDefined(); });
        });
    });
});