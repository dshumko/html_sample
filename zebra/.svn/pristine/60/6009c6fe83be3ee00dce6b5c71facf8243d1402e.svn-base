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

    describe("7.12.1 The application/oipfSearchManager embedded object", function() {
        describe("7.12.1.1 Properties", function() {
            it("guideDaysAvailable", function() { expect(searchManager.guideDaysAvailable).toBeDefined(); });
            it("onMetadataUpdate", function() { expect(searchManager.onMetadataUpdate).toBeDefined(); });
            it("onMetadataSearch", function() { expect(searchManager.onMetadataSearch).toBeDefined(); });
        });
        describe("7.12.1.3 Methods", function() {
            it("createSearch", function() { expect(searchManager.createSearch).toBeDefined(); });
            it("getChannelConfig", function() { expect(searchManager.getChannelConfig).toBeDefined(); });
        });
    });
    describe("7.12.2 The MetadataSearch class", function() {
        beforeEach(function() {
            metadataSearch = searchManager.createSearch(searchTarget_scheduled);
        });
        describe("7.12.2.1 Properties", function() {
            it("searchTarget", function() { expect(metadataSearch.searchTarget).toBeDefined(); });
            it("result", function() { expect(metadataSearch.result).toBeDefined(); });
        });
        describe("7.12.2.2 Methods", function() {
            it("setQuery", function() { expect(metadataSearch.setQuery).toBeDefined(); });
            it("addRatingConstraint", function() { expect(metadataSearch.addRatingConstraint).toBeDefined(); });
            it("addCurrentRatingConstraint", function() { expect(metadataSearch.addCurrentRatingConstraint).toBeDefined(); });
            it("addChannelConstraint", function() { expect(metadataSearch.addChannelConstraint).toBeDefined(); });
            it("addChannelConstraint", function() { expect(metadataSearch.addChannelConstraint).toBeDefined(); });
            it("orderBy", function() { expect(metadataSearch.orderBy).toBeDefined(); });
            it("createQuery", function() { expect(metadataSearch.createQuery).toBeDefined(); });
            it("findProgrammesFromStream", function() { expect(metadataSearch.findProgrammesFromStream).toBeDefined(); });
        });
    });
    describe("7.12.3 The Query class", function() {
        beforeEach(function() {
            metadataSearch = searchManager.createSearch(searchTarget_scheduled);
            query = metadataSearch.createQuery("programme.starttime", 1, "name");
        });
        describe("7.12.3.1 Properties", function() {
        });
        describe("7.12.3.2 Methods", function() {
            it("and", function() { expect(query.and).toBeDefined(); });
            it("or", function() { expect(query.or).toBeDefined(); });
            it("not", function() { expect(query.not).toBeDefined(); });
        });
    });
    describe("7.12.4 The SearchResults class", function() {
        beforeEach(function() {
            metadataSearch = searchManager.createSearch(searchTarget_scheduled);
            query = metadataSearch.createQuery("programme.starttime", 1, "name");
            searchResults = metadataSearch.result
        });
        describe("7.12.4.1 Properties", function() {
            it("length", function() { expect(searchResults.length).toBeDefined(); });
            it("offset", function() { expect(searchResults.offset).toBeDefined(); });
            it("totalSize", function() { expect(searchResults.totalSize).toBeDefined(); });
        });
        describe("7.12.4.2 Methods", function() {
            it("item", function() { expect(searchResults.item).toBeDefined(); });
            it("getResults", function() { expect(searchResults.getResults).toBeDefined(); });
            it("abort", function() { expect(searchResults.abort).toBeDefined(); });
        });
    });
    describe("7.12.5 The MetadataSearchEvent class", function() {
    });
    describe("7.12.6 The MetadataUpdateEvent class", function() {
    });
});
