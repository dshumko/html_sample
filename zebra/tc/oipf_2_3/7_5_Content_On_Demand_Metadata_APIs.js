describe("7.5 Content On Demand Metadata APIs", function() {
    var oipfobjectFactory;
    var codManager;
    var contentCatalogueCollection;
    var contentCatalogue;
    var cODFolder;
    var cODAsset;
    var cODService;

    try{
        oipfobjectFactory = window.oipfObjectFactory;
        codManager = oipfobjectFactory.createCodManagerObject();
    }catch(e){
        codManager = undefined;
    }


    describe("7.5.1 The application/oipfCodManager embedded object", function() {
        describe("7.5.1.1 Properties", function() {
            it("catalogues", function() { expect(codManager.catalogues).toBeDefined(); });
            it("onContentCatalogueEvent", function() { expect(codManager.onContentCatalogueEvent).toBeDefined(); });
            it("onContentAction", function() { expect(codManager.onContentAction).toBeDefined(); });
        });
    });
    describe("7.5.2 The ContentCatalogueCollection class", function() {
        beforeEach(function() {
            contentCatalogueCollection = codManager.catalogues;
            contentCatalogue = contentCatalogueCollection[0];
        });
        it("ContentCatalogueCollection", function() { expect(contentCatalogueCollection).toBeDefined(); });
    });
    describe("7.5.3 The ContentCatalogue class", function() {
        beforeEach(function() {
            contentCatalogueCollection = codManager.catalogues;
            contentCatalogue = contentCatalogueCollection[0];
        });
        describe("7.5.3.1 Properties", function() {
            it("name", function() { expect(contentCatalogue.name).toBeDefined(); });
            it("rootFolder", function() { expect(contentCatalogue.rootFolder).toBeDefined(); });
        });
        describe("7.5.3.2 Methods", function() {
            it("getPurchaseHistory", function() { expect(contentCatalogue.getPurchaseHistory).toBeDefined(); });
        });
    });
    describe("7.5.4 The ContentCatalogueEvent class", function() {
    });
    describe("7.5.5 The CODFolder class", function() {
        beforeEach(function() {
            // how to get ??
            cODFolder //= contentCatalogue.rootFolder;
        });
        describe("7.5.5.1 Properties", function() {
            it("type", function() { expect(cODFolder.type).toBeDefined(); });
            it("uri", function() { expect(cODFolder.uri).toBeDefined(); });
            it("name", function() { expect(cODFolder.name).toBeDefined(); });
            it("description", function() { expect(cODFolder.description).toBeDefined(); });
            it("thumbnailUri", function() { expect(cODFolder.thumbnailUri).toBeDefined(); });
            it("length", function() { expect(cODFolder.length).toBeDefined(); });
            it("currentPage", function() { expect(cODFolder.currentPage).toBeDefined(); });
            it("pageSize", function() { expect(cODFolder.pageSize).toBeDefined(); });
            it("totalSize", function() { expect(cODFolder.totalSize).toBeDefined(); });
        });
        describe("7.5.5.2 Methods", function() {
            it("item", function() { expect(cODFolder.item).toBeDefined(); });
            it("getPage", function() { expect(cODFolder.getPage).toBeDefined(); });
            it("abort", function() { expect(cODFolder.abort).toBeDefined(); });
        });
    });
    describe("7.5.6 The CODAsset class", function() {
        beforeEach(function() {
            // how to get ??
            cODAsset;
        });
        describe("7.5.6.1 Properties", function() {
            it("type", function() { expect(cODAsset.type).toBeDefined(); });
            it("uri", function() { expect(cODAsset.uri).toBeDefined(); });
            it("name", function() { expect(cODAsset.name).toBeDefined(); });
            it("description", function() { expect(cODAsset.description).toBeDefined(); });
            it("genres", function() { expect(cODAsset.genres).toBeDefined(); });
            it("parentalRatings", function() { expect(cODAsset.parentalRatings).toBeDefined(); });
            it("blocked", function() { expect(cODAsset.blocked).toBeDefined(); });
            it("locked", function() { expect(cODAsset.locked).toBeDefined(); });
            it("thumbnailUri", function() { expect(cODAsset.thumbnailUri).toBeDefined(); });
            it("price", function() { expect(cODAsset.price).toBeDefined(); });
            it("rentalPeriod", function() { expect(cODAsset.rentalPeriod).toBeDefined(); });
            it("playCount", function() { expect(cODAsset.playCount).toBeDefined(); });
            it("duration", function() { expect(cODAsset.duration).toBeDefined(); });
            it("previewUri", function() { expect(cODAsset.previewUri).toBeDefined(); });
            it("bookmarks", function() { expect(cODAsset.bookmarks).toBeDefined(); });
        });
        describe("7.5.6.2 Methods", function() {
            it("isReady", function() { expect(cODFolder.isReady).toBeDefined(); });
        });
    });
    describe("7.5.7 The CODService class", function() {
        beforeEach(function() {
            // how to get ??
            cODService;
        });
        describe("7.5.7.1 Properties", function() {
            it("length", function() { expect(cODService.length).toBeDefined(); });
            it("currentPage", function() { expect(cODService.currentPage).toBeDefined(); });
            it("pageSize", function() { expect(cODService.pageSize).toBeDefined(); });
            it("totalSize", function() { expect(cODService.totalSize).toBeDefined(); });
            it("type", function() { expect(cODService.type).toBeDefined(); });
            it("uri", function() { expect(cODService.uri).toBeDefined(); });
            it("name", function() { expect(cODService.name).toBeDefined(); });
            it("description", function() { expect(cODService.description).toBeDefined(); });
            it("thumbnailUri", function() { expect(cODService.thumbnailUri).toBeDefined(); });
            it("previewUri", function() { expect(cODService.previewUri).toBeDefined(); });
        });
        describe("7.5.7.2 Methods", function() {
            it("isReady", function() { expect(cODService.isReady).toBeDefined(); });
            it("item", function() { expect(cODService.item).toBeDefined(); });
            it("getPage", function() { expect(cODService.getPage).toBeDefined(); });
        });
    });
});