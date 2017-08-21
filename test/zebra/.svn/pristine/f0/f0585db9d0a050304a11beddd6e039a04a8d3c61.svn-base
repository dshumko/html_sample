// OIPF-T1-R2_Specification-Volume-5-Declarative-Application-Environment-v2_3-2014-01-24.pdf
describe('7.4 Content download APIs', function() {
    "use strict";
    describe('7.4.1 The application/oipfDownloadTrigger embedded object ', function () {
        /*An OITF SHALL support a non-visual embedded object of type application/oipfDownloadTrigger, with the
         following Javascript API to enable passing a content-access descriptor to an underlying download manager using
         Javascript.
         The functionality as described in this section is subject to the security model of Section 10.*/
        var downloadTriggerEmbedded, downloadTrigger;
        beforeEach(function () {
            downloadTriggerEmbedded = document.createElement('object');
            downloadTriggerEmbedded.setAttribute("type", "application/oipfDownloadTrigger");
            document.body.appendChild(downloadTriggerEmbedded);
            downloadTrigger = oipfObjectFactory.createDownloadTriggerObject();
        });
        it('download trigger object - ok', function(){
            expect(downloadTriggerEmbedded).toBeDefined();
        });
        describe("7.4.1.1 Methods",function(){
            it('registerDownload', function(){
                expect(downloadTriggerEmbedded.registerDownload).toBeDefined();
                expect(downloadTrigger.registerDownload).toBeDefined();
            });
            it('registerDownloadURL', function(){
                expect(downloadTriggerEmbedded.registerDownloadURL).toBeDefined();
                expect(downloadTrigger.registerDownloadURL).toBeDefined();
            });
            it('checkDownloadPossible', function(){
                expect(downloadTriggerEmbedded.checkDownloadPossible).toBeDefined();
                expect(downloadTrigger.checkDownloadPossible).toBeDefined();
            });
        });
        afterEach(function(){
            document.body.removeChild(downloadTriggerEmbedded);
        });
    });

    describe('7.4.2 Extensions to application/oipfDownloadTrigger', function(){
        /*If an OITF has indicated support for both BCG metadata (i.e. by giving element <clientMetadata> value “true”
         and a type attribute with value “bcg”), and the download management APIs defined in Section 7.4.3 (i.e. by giving
         attribute manageDownloads of the <download> element a value unequal to “none”) in the client capability
         description, then the following additional method SHALL be supported by the
         application/oipfDownloadTrigger object defined in Section 7.4.1
         The functionality as described in this section is subject to the security model of Section 10. */
        var downloadTriggerEmbedded, downloadTrigger;
        beforeEach(function () {
            downloadTriggerEmbedded = document.createElement('object');
            downloadTriggerEmbedded.setAttribute("type", "application/oipfDownloadTrigger");
            document.body.appendChild(downloadTriggerEmbedded);
            downloadTrigger = oipfObjectFactory.createDownloadTriggerObject();
        });
        it('download trigger object - ok', function(){
            expect(downloadTriggerEmbedded).toBeDefined();
        });
        it('registerDownloadFromCRID', function(){
            expect(downloadTriggerEmbedded.registerDownloadFromCRID).toBeDefined();
            expect(downloadTrigger.registerDownloadFromCRID).toBeDefined();
        });
        afterEach(function(){
            document.body.removeChild(downloadTriggerEmbedded);
        });
    });

    describe('7.4.3 The application/oipfDownloadManager embedded object', function(){
        var downloadManagerEmbedded, downloadManager;
        beforeEach(function () {
            downloadManagerEmbedded = document.createElement('object');
            downloadManagerEmbedded.setAttribute("type", "application/oipfDownloadManager");
            document.body.appendChild(downloadManagerEmbedded);
            downloadManager = oipfObjectFactory.createDownloadManagerObject();
        });
        describe('7.4.3.2 Properties', function(){
            it('onDownloadStateChange', function(){
                expect(downloadManagerEmbedded.onDownloadStateChange).toBeDefined();
                expect(downloadManager.onDownloadStateChange).toBeDefined();
            });
            it('discInfo', function(){
                expect(downloadManagerEmbedded.discInfo).toBeDefined();
                expect(downloadManager.discInfo).toBeDefined();
            });
        });
        describe('7.4.3.3 Methods', function(){
            it('pause', function(){
                expect(downloadManagerEmbedded.pause).toBeDefined();
                expect(downloadManager.pause).toBeDefined();
            });
            it('resume', function(){
                expect(downloadManagerEmbedded.resume).toBeDefined();
                expect(downloadManager.resume).toBeDefined();
            });
            it('remove', function(){
                expect(downloadManagerEmbedded.remove).toBeDefined();
                expect(downloadManager.remove).toBeDefined();
            });
            it('getDownloads', function(){
                expect(downloadManagerEmbedded.getDownloads).toBeDefined();
                expect(downloadManager.getDownloads).toBeDefined();
            });
            it('createFilteredList', function(){
                expect(downloadManagerEmbedded.createFilteredList).toBeDefined();
                expect(downloadManager.createFilteredList).toBeDefined();
            });
            it('updateRegisteredDownload', function(){
                expect(downloadManagerEmbedded.updateRegisteredDownload).toBeDefined();
                expect(downloadManager.updateRegisteredDownload).toBeDefined();
            });
        });
        afterEach(function(){
            document.body.removeChild(downloadManagerEmbedded);
        });
    });

    describe('7.4.4 The Download class',function(){
        var downloadManagerEmbedded, downloadEm, download;
        beforeEach(function () {
            downloadManagerEmbedded = document.createElement('object');
            downloadManagerEmbedded.setAttribute("type", "application/oipfDownloadManager");
            document.body.appendChild(downloadManagerEmbedded);
            var downloadManager = oipfObjectFactory.createDownloadManagerObject();
            downloadEm = downloadManagerEmbedded.getDownloads("temporary download list");
            download = downloadManager.getDownloads("temporary download list");
        });
        it('download', function(){
            expect(downloadEm).toBeDefined();
            expect(download).toBeDefined();
        });

        describe('7.4.4.1 Constants',function(){
            it('DOWNLOAD_COMPLETED', function(){
                expect(downloadEm.DOWNLOAD_COMPLETED).toBe(1);
                expect(download.DOWNLOAD_COMPLETED).toBe(1);
            });
            it('DOWNLOAD_IN_PROGRESS', function(){
                expect(downloadEm.DOWNLOAD_IN_PROGRESS).toBe(2);
                expect(download.DOWNLOAD_IN_PROGRESS).toBe(2);
            });
            it('DOWNLOAD_PAUSED', function(){
                expect(downloadEm.DOWNLOAD_PAUSED).toBe(4);
                expect(download.DOWNLOAD_PAUSED).toBe(4);
            });
            it('DOWNLOAD_FAILED', function(){
                expect(downloadEm.DOWNLOAD_FAILED).toBe(8);
                expect(download.DOWNLOAD_FAILED).toBe(8);
            });
            it('DOWNLOAD_NOT_STARTED', function(){
                expect(downloadEm.DOWNLOAD_NOT_STARTED).toBe(16);
                expect(download.DOWNLOAD_NOT_STARTED).toBe(16);
            });
            it('DOWNLOAD_STALLED', function(){
                expect(downloadEm.DOWNLOAD_STALLED).toBe(32);
                expect(download.DOWNLOAD_STALLED).toBe(32);
            });
        });
        describe('7.4.4.2 Properties', function(){
            it('totalSize', function(){
                expect(downloadEm.totalSize).toBeDefined();
                expect(download.totalSize).toBeDefined();
            });
            it('state', function(){
                expect(downloadEm.state).toBeDefined();
                expect(download.state).toBeDefined();
            });
            it('reason', function(){
                expect(downloadEm.reason).toBeDefined();
                expect(download.reason).toBeDefined();
            });
            it('amountDownloaded', function(){
                expect(downloadEm.amountDownloaded).toBeDefined();
                expect(download.amountDownloaded).toBeDefined();
            });
            it('currentBitrate', function(){
                expect(downloadEm.currentBitrate).toBeDefined();
                expect(download.currentBitrate).toBeDefined();
            });
            it('name', function(){
                expect(downloadEm.name).toBeDefined();
                expect(download.name).toBeDefined();
            });
            it('id', function(){
                expect(downloadEm.id).toBeDefined();
                expect(download.id).toBeDefined();
            });
            it('contentURL', function(){
                expect(downloadEm.contentURL).toBeDefined();
                expect(download.contentURL).toBeDefined();
            });
            it('description', function(){
                expect(downloadEm.description).toBeDefined();
                expect(download.description).toBeDefined();
            });
            it('parentalRatings', function(){
                expect(downloadEm.parentalRatings).toBeDefined();
                expect(download.parentalRatings).toBeDefined();
            });
            it('drmControl', function(){
                expect(downloadEm.drmControl).toBeDefined();
                expect(download.drmControl).toBeDefined();
            });
            it('startTime', function(){
                expect(downloadEm.startTime).toBeDefined();
                expect(download.startTime).toBeDefined();
            });
            it('timeElapsed', function(){
                expect(downloadEm.timeElapsed).toBeDefined();
                expect(download.timeElapsed).toBeDefined();
            });
            it('timeRemaining', function(){
                expect(downloadEm.timeRemaining).toBeDefined();
                expect(download.timeRemaining).toBeDefined();
            });
            it('transferType', function(){
                expect(downloadEm.transferType).toBeDefined();
                expect(download.transferType).toBeDefined();
            });
            it('originSite', function(){
                expect(downloadEm.originSite).toBeDefined();
                expect(download.originSite).toBeDefined();
            });
            it('originSiteName', function(){
                expect(downloadEm.originSiteName).toBeDefined();
                expect(download.originSiteName).toBeDefined();
            });
            it('contentID', function(){
                expect(downloadEm.contentID).toBeDefined();
                expect(download.contentID).toBeDefined();
            });
            it('iconURL', function(){
                expect(downloadEm.iconURL).toBeDefined();
                expect(download.iconURL).toBeDefined();
            });
        });
        afterEach(function(){
            document.body.removeChild(downloadManagerEmbedded);
        });
    });
    describe("7.4.5 The DownloadCollection class");
    describe("7.4.6 The DRMControlInformation class", function(){
        var downloadManagerEmbedded, drmInfoEm, drmInfo;
        beforeEach(function () {
            downloadManagerEmbedded = document.createElement('object');
            downloadManagerEmbedded.setAttribute("type", "application/oipfDownloadManager");
            document.body.appendChild(downloadManagerEmbedded);

            var downloadManager = oipfObjectFactory.createDownloadManagerObject();

            var downloadEm = downloadManagerEmbedded.getDownloads("temporary download list");
            var download = downloadManager.getDownloads("temporary download list");

            drmInfoEm = downloadEm.drmControl;
            drmInfo = download.drmControl;
        });
        describe('7.4.6.1 Properties', function(){
            it('drmType', function(){
                expect(drmInfoEm.drmType).toBeDefined();
                expect(drmInfo.drmType).toBeDefined();
            });
            it('rightsIssuerURL', function(){
                expect(drmInfoEm.rightsIssuerURL).toBeDefined();
                expect(drmInfo.rightsIssuerURL).toBeDefined();
            });
            it('silentRightsURL', function(){
                expect(drmInfoEm.silentRightsURL).toBeDefined();
                expect(drmInfo.silentRightsURL).toBeDefined();
            });
            it('drmContentID', function(){
                expect(drmInfoEm.drmContentID).toBeDefined();
                expect(drmInfo.drmContentID).toBeDefined();
            });
            it('previewRightsURL', function(){
                expect(drmInfoEm.previewRightsURL).toBeDefined();
                expect(drmInfo.previewRightsURL).toBeDefined();
            });
            it('drmPrivateData', function(){
                expect(drmInfoEm.drmPrivateData).toBeDefined();
                expect(drmInfo.drmPrivateData).toBeDefined();
            });
            it('doNotRecord', function(){
                expect(drmInfoEm.doNotRecord).toBeDefined();
                expect(drmInfo.doNotRecord).toBeDefined();
            });
            it('doNotTimeShift', function(){
                expect(drmInfoEm.doNotTimeShift).toBeDefined();
                expect(drmInfo.doNotTimeShift).toBeDefined();
            });
        });
        afterEach(function(){
            document.body.removeChild(downloadManagerEmbedded);
        });
    });
});
