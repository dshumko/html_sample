//start test
var oipfobjectFactory = window.oipfObjectFactory;
var codManager = undefined;
var contentCatalogue = undefined;

// 
var codFolder = undefined;
var codAsset  = undefined;
var codService = undefined;

if( oipfobjectFactory !== undefined )
{
    try {
        codManager = oipfobjectFactory.createCodManagerObject();
    } catch (e)
    {
        console.log(e);
    }
}

if(HBBTV_ON==0){
	module("application/oipfCodManager");
	test("catalogues", function() {
	    try {
	        ok((contentCatalogue = codManager.catalogues) !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("onContentCatalogueEvent", function() {
	    try {
	        ok(codManager.onContentCatalogueEvent !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("onContentAction", function() {
	    try {
	        ok(codManager.onContentAction !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	
	
	module("ContentCatalogueCollection");
	test("name", function() {
	    try {
	        ok(contentCatalogue !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	
	
	module("ContentCatalogue");
	test("name", function() {
	    try {
	        ok(contentCatalogue[0].name !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("rootFolder", function() {
	    try {
	        ok(contentCatalogue[0].rootFolder !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("getPurchaseHistory()", function() {
	    try {
	        ok(contentCatalogue[0].getPurchaseHistory !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	
	
	module("CODFolder");
	test("type", function() {
	    try {
	        ok(codFolder.type!== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("url", function() {
	    try {
	        ok(codFolder.url!== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("name", function() {
	    try {
	        ok(codFolder.name!== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("description", function() {
	    try {
	        ok(codFolder.description!== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("thumbnailUrl", function() {
	    try {
	        ok(codFolder.thumbnailUrl!== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("length", function() {
	    try {
	        ok(codFolder.length!== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("currentPage", function() {
	    try {
	        ok(codFolder.currentPage!== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("pageSize", function() {
	    try {
	        ok(codFolder.pageSize!== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("totalSize", function() {
	    try {
	        ok(codFolder.totalSize!== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("item()", function() {
	    try {
	        ok(codFolder.item!== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("getPage()", function() {
	    try {
	        ok(codFolder.getPage!== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("abort()", function() {
	    try {
	        ok(codFolder.abort!== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	
	
	module("CODAsset");
	test("type", function() {
	    try {
	        ok(codAsset.type!== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("uri", function() {
	    try {
	        ok(codAsset.uri!== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("name", function() {
	    try {
	        ok(codAsset.name !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("description", function() {
	    try {
	        ok(codAsset.description!== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("genres", function() {
	    try {
	        ok(codAsset.genres!== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("parentalRations", function() {
	    try {
	        ok(codAsset.parentalRatings!== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("blocked", function() {
	    try {
	        ok(codAsset.blocked!== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("loacked", function() {
	    try {
	        ok(codAsset.locked !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("thumbnailUri", function() {
	    try {
	        ok(codAsset.thumbnailUri !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("price", function() {
	    try {
	        ok(codAsset.price!== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("rentalPeriod", function() {
	    try {
	        ok(codAsset.rentalPeriod!== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("playCount", function() {
	    try {
	        ok(codAsset.playCount!== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("duration", function() {
	    try {
	        ok(codAsset.duration!== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("previewUri", function() {
	    try {
	        ok(codAsset.previewUri!== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("bookmarks", function() {
	    try {
	        ok(codAsset.bookmarks!== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("isReady()", function() {
	    try {
	        ok(codAsset.isReady!== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("lookupMetadata()", function() {
	    try {
	        ok(codAsset.lookupMetadata!== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	
	module("CODService");
	test("length", function() {
	    try {
	        ok(codService.length !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("currentPage", function() {
	    try {
	        ok(codService.currentPage!== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("pageSize", function() {
	    try {
	        ok(codService.pageSize !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("totalSize", function() {
	    try {
	        ok(codService.totalSize!== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("type", function() {
	    try {
	        ok(codService.type !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("uid", function() {
	    try {
	        ok(codService.uid !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("uri", function() {
	    try {
	        ok(codService.uri !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("name", function() {
	    try {
	        ok(codService.name !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("description", function() {
	    try {
	        ok(codService.description !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("thumbnailUri", function() {
	    try {
	        ok(codService.thumbnailUri!== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("previewUri", function() {
	    try {
	        ok(codService.previewUri!== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("item()", function() {
	    try {
	        ok(codService.item!== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("getPage()", function() {
	    try {
	        ok(codService.getPage !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("abort()", function() {
	    try {
	        ok(codService.abort !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("isReady()", function() {
	    try {
	        ok(codService.name !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("lookupMetadata()", function() {
	    try {
	        ok(codService.lookupMetadata !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
}

