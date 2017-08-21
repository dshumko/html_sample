// OIPF-T1-R2_Specification-Volume-5-Declarative-Application-Environment-v2_3-2014-01-24.pdf
describe('7.5 Content On Demand Metadata APIs', function() {
    "use strict";
    describe('7.5.1 The application/oipfCodManager embedded object', function () {
        /*OITFs that have indicated <clientMetadata> with value ¡°true¡± and a type attribute with value ¡°bcg¡± SHALL
         implement an ¡°application/oipfCodManager¡± embedded object with the following interface.
         Content is organised into catalogues, where each catalogue contains a hierarchy of folders that are used to organise
         individual content items. The structure of the catalogue SHALL be determined by the server managing that catalogue and
         SHALL be reflected in the structure of the metadata passed to the OITF.
         The three types of content in a CoD catalogue are:
         ? Assets, represented by the CODAsset class. A CODAsset is a user-level description of a piece of CoD content, and
         so it is more concerned with information such as the price, rental period, description and parental rating rather than
         detailed technical information about the asset such as encoding format. A CoD asset MAY represent a single movie,
         or a bundle of movies offered for a single price.
         ? Folders, represented by the CODFolder class.
         ? Services, represented by the CODService class. CODService objects are a specific type of container representing
         subscription VoD (SVOD) services, where users purchase a group of assets which may change over time rather than
         a single movie or TV show.
         The CODAsset, CODFolder and CODService classes define a type property that allows these classes to be
         distinguished by applications. For each class, this property SHALL take the value defined below:*/

        var codManager;
        beforeEach(function () {
            codManager = document.createElement('object');
            codManager.setAttribute("type", "application/oipfCodManager");
            document.body.appendChild(codManager);
        });
        describe('7.5.1.1 Properties', function(){
            it('catalogues', function(){
                expect(codManager.catalogues).toBeDefined();
            });
            it('onContentCatalogueEvent', function(){
                expect(codManager.onContentCatalogueEvent).toBeDefined();
            });
            it('onContentAction', function(){
                expect(codManager.onContentAction).toBeDefined();
            });
        });
        afterEach(function(){
            document.body.removeChild(codManager);
        });
    });
    describe('7.5.2 The CatalogueCollection class');
    describe('7.5.3 The ContentCatalogue class', function(){
        var codManager;
        beforeEach(function () {
            codManager = document.createElement('object');
            codManager.setAttribute("type", "application/oipfCodManager");
            document.body.appendChild(codManager);
        });
        describe('7.5.3.1 Properties', function(){
            it('name', function(){
                expect(codManager.name).toBeDefined();
            });
            it('rootFolder', function(){
                expect(codManager.rootFolder).toBeDefined();
            });
            it('getPurchaseHistory', function(){
                expect(codManager.getPurchaseHistory).toBeDefined();
            });
        });
        afterEach(function(){
            document.body.removeChild(codManager);
        });
    });
    describe('7.5.4 The ContentCatalogueEvent class');
    describe('7.5.5 The CODFolder class', function(){
        var codManager, dummyCodFolder = {};
        beforeEach(function () {
            codManager = document.createElement('object');
            codManager.setAttribute("type", "application/oipfCodManager");
            document.body.appendChild(codManager);
        });
        describe('7.5.5.1 Properties', function(){
            it('type', function(){
                expect(dummyCodFolder.type).toBeDefined();
            });
            it('uri', function(){
                expect(dummyCodFolder.uri).toBeDefined();
            });
            it('name', function(){
                expect(dummyCodFolder.name).toBeDefined();
            });
            it('description', function(){
                expect(dummyCodFolder.description).toBeDefined();
            });
            it('thumbnailUri', function(){
                expect(dummyCodFolder.thumbnailUri).toBeDefined();
            });
            it('length', function(){
                expect(dummyCodFolder.length).toBeDefined();
            });
            it('currentPage', function(){
                expect(dummyCodFolder.currentPage).toBeDefined();
            });
            it('pageSize', function(){
                expect(dummyCodFolder.pageSize).toBeDefined();
            });
            it('totalSize', function(){
                expect(dummyCodFolder.totalSize).toBeDefined();
            });
        });
        describe('7.5.5.2 Methods', function(){
            it('item', function(){
                expect(dummyCodFolder.item).toBeDefined();
            });
            it('getPage', function(){
                expect(dummyCodFolder.getPage).toBeDefined();
            });
            it('abort', function(){
                expect(dummyCodFolder.abort).toBeDefined();
            });
        });
        afterEach(function(){
            document.body.removeChild(codManager);
        });
    });
    describe('7.5.6 The CODAsset class', function(){
        var codManager, dummyCodAsset = {};
        beforeEach(function () {
            codManager = document.createElement('object');
            codManager.setAttribute("type", "application/oipfCodManager");
            document.body.appendChild(codManager);
        });
        describe('7.5.6.1 Properties', function(){
            it('type', function(){
                expect(dummyCodAsset.type).toBeDefined();
            });
            it('uri', function(){
                expect(dummyCodAsset.uri).toBeDefined();
            });
            it('name', function(){
                expect(dummyCodAsset.name).toBeDefined();
            });
            it('description', function(){
                expect(dummyCodAsset.description).toBeDefined();
            });
            it('genres', function(){
                expect(dummyCodAsset.genres).toBeDefined();
            });
            it('parentalRating', function(){
                expect(dummyCodAsset.parentalRating).toBeDefined();
            });
            it('blocked', function(){
                expect(dummyCodAsset.blocked).toBeDefined();
            });
            it('locked', function(){
                expect(dummyCodAsset.locked).toBeDefined();
            });
            it('thumbnailUri', function(){
                expect(dummyCodAsset.thumbnailUri).toBeDefined();
            });
            it('price', function(){
                expect(dummyCodAsset.price).toBeDefined();
            });
            it('rentalPeriod', function(){
                expect(dummyCodAsset.rentalPeriod).toBeDefined();
            });
            it('playCount', function(){
                expect(dummyCodAsset.playCount).toBeDefined();
            });
            it('duration', function(){
                expect(dummyCodAsset.duration).toBeDefined();
            });
            it('previewUri', function(){
                expect(dummyCodAsset.previewUri).toBeDefined();
            });
            it('bookmarks', function(){
                expect(dummyCodAsset.bookmarks).toBeDefined();
            });
        });
        describe('7.5.6.2 Methods', function(){
            it('isReady', function(){
                expect(dummyCodAsset.isReady).toBeDefined();
            });
            it('lookupMetadata', function(){
                expect(dummyCodAsset.lookupMetadata).toBeDefined();
            });
        });
        afterEach(function(){
            document.body.removeChild(codManager);
        });
    });
    describe('7.5.7 The CODService class', function(){
        var codManager, dummyCodService = {};
        beforeEach(function () {
            codManager = document.createElement('object');
            codManager.setAttribute("type", "application/oipfCodManager");
            document.body.appendChild(codManager);
        });
        describe('7.5.7.1 Properties', function(){
            it('length', function(){
                expect(dummyCodService.length).toBeDefined();
            });
            it('currentPage', function(){
                expect(dummyCodService.currentPage).toBeDefined();
            });
            it('pageSize', function(){
                expect(dummyCodService.pageSize).toBeDefined();
            });
            it('totalSize', function(){
                expect(dummyCodService.totalSize).toBeDefined();
            });
            it('type', function(){
                expect(dummyCodService.type).toBeDefined();
            });
            it('uid', function(){
                expect(dummyCodService.uid).toBeDefined();
            });
            it('uri', function(){
                expect(dummyCodService.uri).toBeDefined();
            });
            it('name', function(){
                expect(dummyCodService.name).toBeDefined();
            });
            it('description', function(){
                expect(dummyCodService.description).toBeDefined();
            });
            it('thumbnailUri', function(){
                expect(dummyCodService.thumbnailUri).toBeDefined();
            });
            it('previewUri', function(){
                expect(dummyCodService.previewUri).toBeDefined();
            });
        });
        describe('7.5.7.1.1 Methods', function(){
            it('item', function(){
                expect(dummyCodService.item).toBeDefined();
            });
            it('getPage', function(){
                expect(dummyCodService.getPage).toBeDefined();
            });
            it('abort', function(){
                expect(dummyCodService.abort).toBeDefined();
            });
            it('isReady', function(){
                expect(dummyCodService.isReady).toBeDefined();
            });
            it('lookupMetadata', function(){
                expect(dummyCodService.lookupMetadata).toBeDefined();
            });
        });
        afterEach(function(){
            document.body.removeChild(codManager);
        });
    });
});