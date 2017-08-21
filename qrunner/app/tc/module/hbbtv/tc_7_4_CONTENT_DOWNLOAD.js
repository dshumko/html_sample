var oipfobjectFactory = window.oipfObjectFactory;
var downloadTrigger = undefined;
var downloadManager = undefined;
var downloads = undefined;
var drmControlInformation = undefined;

if( oipfobjectFactory !== undefined )
{
    try {
        downloadTrigger = oipfobjectFactory.createDownloadTriggerObject();
    } catch (e)
    {
        console.log(e);
    }
}

if( oipfobjectFactory !== undefined )
{
    try {
        downloadManager = oipfobjectFactory.createDownloadManagerObject();
    } catch (e)
    {
        console.log(e);
    }
}

module("application/oipfDownloadTrigger");
test("registerDownload", function() {
    try {
        ok(downloadTrigger.registerDownload !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("registerDownloadURL", function() {
    try {
        ok(downloadTrigger.registerDownloadURL !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("checkDownloadPossible", function() {
    try{
        ok(downloadTrigger.checkDownloadPossible !== undefined, "is exists");
    }catch(e){
        ok(false, "not exists");
    }
});

if(HBBTV_ON==0){
	module("Extensions to oipfDownloadTrigger");
	test("registerDownloadFromCRID", function() {
	    try{
	        ok(downloadTrigger.registerDownloadFromCRID !== undefined, "is exists");
	    }catch(e){
	        ok(false, "not exists");
	    }
	});
}


module("DownloadManager");
test("onDownloadStateChange", function() {
    try {
        ok(downloadManager.onDownloadStateChange !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

if(HBBTV_ON==0){
	test("discInfo", function() {
	    try {
	        ok(downloadManager.discInfo !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
}

test("hasReserved", function() {
    try {
        ok(downloadManager.hasReserved !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("allocated", function() {
    try {
        ok(downloadManager.allocated !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

if(HBBTV_ON==0){
	test("pause()", function() {
	    try {
	        ok(downloadManager.pause !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("resume()", function() {
	    try {
	        ok(downloadManager.resume !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
}

test("remove()", function() {
    try {
        ok(downloadManager.remove !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

if(HBBTV_ON==0){
	test("getDownloads()", function() {
	    try {
	        ok(downloadManager.getDownloads !== undefined, "is exists");
	        downloads = downloadManager.getDownloads("");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
}

test("createFilteredList()", function() {
    try {
        ok(downloadManager.createFilteredList !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("updateRegisteredDownload()", function() {
    try {
        ok(downloadManager.updateRegisteredDownload !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("reserve()", function() {
    try {
        ok(downloadManager.reserve !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});


module("Download");
test("totalSize", function() {
    try {
        ok(downloads[0].totalSize !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("state", function() {
    try {
        ok(downloads[0].state !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("reason", function() {
    try {
        ok(downloads[0].reason !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("amountDownloaded", function() {
    try {
        ok(downloads[0].amountDownloaded !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

if(HBBTV_ON==0){
	test("currentBitrate", function() {
	    try {
	        ok(downloads[0].currentBitrate !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
}

test("name", function() {
    try {
        ok(downloads[0].name !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("id", function() {
    try {
        ok(downloads[0].id !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("uri", function() {
    try {
        ok(downloads[0].uri !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("contentURL", function() {
    try {
        ok(downloads[0].contentURL !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("description", function() {
    try {
        ok(downloads[0].description !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("parentalRatings", function() {
    try {
        ok(downloads[0].parentalRatings !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("drmControl", function() {
    try {
        ok((drmControlInformation = downloads[0].drmControl) !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("startTime", function() {
    try {
        ok(downloads[0].startTime !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("timeElapsed", function() {
    try {
        ok(downloads[0].timeElapsed !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("timeRemaining", function() {
    try {
        ok(downloads[0].timeRemaining !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("transferType", function() {
    try {
        ok(downloads[0].transferType !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("originSite", function() {
    try {
        ok(downloads[0].originSite !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("originSiteName", function() {
    try {
        ok(downloads[0].originSiteName !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("contentID", function() {
    try {
        ok(downloads[0].contentID !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("iconURL", function() {
    try {
        ok(downloads[0].iconURL !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("metadata", function() {
    try {
        ok(downloads[0].metadata !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("priority", function() {
    try {
        ok(downloads[0].priority !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("suspendedByTerminal", function() {
    try {
        ok(downloads[0].suspendedByTerminal !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
if(HBBTV_ON==1){
	// clause A.2.11
	test("errorLevel", function() {
	    try {
	        ok(downloads[0].errorLevel !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	// clause 8.2.4
	test("flaggedForDeletion", function() {
	    try {
	        ok(downloads[0].flaggedForDeletion !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
}

module("DownloadCollection");
test("downloadCollection", function() {
    try {
        ok(downloads !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

module("DRMControlInformation");
test("drmType", function() {
    try {
        ok(drmControlInformation[0].drmType !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("rightsIssuerURL", function() {
    try {
        ok(drmControlInformation[0].rightsIssuerURL !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("silentRightsURL", function() {
    try {
        ok(drmControlInformation[0].silentRightsURL !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("drmContentID", function() {
    try {
        ok(drmControlInformation[0].drmContentID !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("previewRightsURL", function() {
    try {
        ok(drmControlInformation[0].previewRightsURL !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("drmPrivateData", function() {
    try {
        ok(drmControlInformation[0].drmPrivateData !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("doNotRecord", function() {
    try {
        ok(drmControlInformation[0].doNotRecord !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("doNotTimeShift", function() {
    try {
        ok(drmControlInformation[0].doNotTimeShift !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});


module("DRMControlInfoCollection");
test("DRMControlInfoCollection", function() {
    try {
        ok(drmControlInformation !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
