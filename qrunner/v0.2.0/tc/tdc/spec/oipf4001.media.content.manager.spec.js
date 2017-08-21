describe('[MEDIA] Content Manager', function() {
    "use strict";
    //***PreCondition:***<br />
    // Internal HDD and USB Memory should be mounted. <br />
    //Internal HDD should have video file<br />
    var configuration, localSystem, contentManager, storageUtil, physicalStorages, avControl, internalHDD, usbMemory, mediaList;
    beforeEach(function () {
        configuration = oipfObjectFactory.createHumaxConfigurationObject();
        localSystem = configuration.localSystem;
        contentManager = oipfObjectFactory.createContentManagerObject();
        storageUtil = oipfObjectFactory.createHumaxStorageUtilObject();
        avControl = oipfObjectFactory.createHumaxVideoOnDemandObject();
    });
    it('check api : contentManager, storageUtil object', function () {
        expect(configuration).toBeDefined();
        expect(localSystem).toBeDefined();
        expect(contentManager).toBeDefined();
        expect(storageUtil).toBeDefined();
        expect(avControl).toBeDefined();
    });

    //***Test Scenario:***
    //1.	Find Internal HDD and USB Memory from storage list
    //2.	Find video files from Internal HDD
    //3.	Copy found video file from Internal HDD to USB Memory
    //4.	Play the video file and check if playback is successful

    describe('get Internal HDD', function() {
        beforeEach(function(done) {
            setTimeout(function() {
                physicalStorages = storageUtil.getPhysicalStorages();
                console.log('physicalStorages.length : ' + physicalStorages.length);
                jasmine.humax.each(physicalStorages, function(pStorage, i){
                    console.log(['pStorage[' + i + '].kind : ' + pStorage.kind,
                        'pStorage[' + i + '].usage : ' + pStorage.usage,
                        'pStorage[' + i + '].type : ' + pStorage.type].join('\n'));

                    if (pStorage.kind === jasmine.humax.storage.kind.HDD) {
                        if (pStorage.usage === jasmine.humax.storage.usage.PVR) {
                            console.log('found Internal HDD');
                            internalHDD = {
                                storageObj : pStorage,
                                storageType : "InternalHDD"
                            };
                        } else if (pStorage.usage === jasmine.humax.storage.usage.needFormat) {
                            if (pStorage.type === jasmine.humax.storage.type.internal) {
                                console.log('found Internal HDD');
                                internalHDD = {
                                    storageObj : pStorage,
                                    storageType : "InternalHDD"
                                };
                            }
                        }
                    } else if (pStorage.kind === jasmine.humax.storage.kind.USB) {
                        console.log('found USB Memory');
                        usbMemory = {
                            storageObj : pStorage,
                            storageType : "UsbMemory"
                        };
                    }
                });
                done();
            }, 12000 * 2);
        }, 12000 * 2 + 5000);
        it('get Internal HDD check', function() {
            expect(internalHDD).toBeDefined();
        });
    });

    describe('content browse in Internal HDD', function() {
        var path, type, count, ext, sort, rootPath, isContentBrowseDone = false;
        beforeEach(function(done) {
            if (internalHDD) {
                path = getPath(jasmine.humax.content.type.video, internalHDD);
                type = jasmine.humax.content.viewType.folderView;
                count = 16;
                ext = getExtensionList(jasmine.humax.content.type.video);
                sort = 0;  // 1 : rasc, 0 : asc
                rootPath = getPath(jasmine.humax.content.type.video, internalHDD);
                browseContent(path, type, count, ext, sort, rootPath)
                    .then( function() { isContentBrowseDone = true;},
                                function() { isContentBrowseDone = false; })
                    .always(done);
            } else {
                isContentBrowseDone = true;
            }
        }, 120000 + 5000);
        it('check content browse success', function () {
            expect(isContentBrowseDone).toBeTruthy();
        });
    });

    describe('copy content from Internal HDD to USB', function() {
        var dest, ext, isContentCopyDone = false;
        beforeEach(function (done) {
            if (usbMemory && mediaList && mediaList.length > 0) {
                dest = getPath(jasmine.humax.content.type.video, usbMemory);
                ext = getExtensionList(jasmine.humax.content.type.video);
                copyContent(dest, ext, mediaList)
                    .then(function() {
                        isContentCopyDone = true;
                        done();
                    }, function () {
                        isContentCopyDone = false;
                        done();
                    });
            } else {
                isContentCopyDone = true;
                done();
            }
        }, 120000 + 5000);
        it('check copy content', function () {
            expect(isContentCopyDone).toBeTruthy();
        });
    });

    describe('content playback', function() {
        var playbackSuccess = false;
        beforeEach(function(done) {
            if (mediaList[0]) {
                contentPlayback(mediaList[0])
                    .then(function() {
                        playbackSuccess = true;
                        done();
                    }, function() {
                        playbackSuccess = false;
                        done();
                    });
            } else {
                done();
            }
        }, 12000 + 5000);
        it('check content playback success', function() {
           expect(playbackSuccess).toBeTruthy();
        });
    });

    //***Notes:***<br /> If video file size is too big, test could fail because timeout
    function getPath(contentType, storage) {
        /*storage should be LogicalStorage*/
        var path, logicalStorages = storage.storageObj.getLogicalStorages();
        if (storage.storageType === "InternalHDD") {
            jasmine.humax.each(logicalStorages, function(item){
                if (item.pvr === 1) {  //Internal HDD Only Use pvr Partition
                    path = item.path;
                }
            });
        } else {
            if (logicalStorages.length > 0) {
                path = logicalStorages.item(0).path;
            }
        }
        if (storage.storageType === "InternalHDD") {
            switch(contentType) {
                case jasmine.humax.content.type.video:
                    path += '/Media/Video';
                    break;
                case jasmine.humax.content.type.music:
                    path += '/Media/Music';
                    break;
                case jasmine.humax.content.type.photo:
                    path += '/Media/Photo';
                    break;
                default:
                    break;
            }
        }
        return path;
    }

    function getExtensionList(contentType) {
        var ext;
        switch(contentType) {
            case jasmine.humax.content.type.video:
                ext = "3gp|3g2|mov|flv|swf|m2ts|rm|ts|mkv|avi|mp4|asf|wmv|tp|m2v|m4v|mts|mpg|vob|divx|mpeg|mpe|dat|ogm|ogg|rmvb|trp";
                break;
            case jasmine.humax.content.type.music:
                ext = "mp3|wav|f4a|m4a|flac";
                break;
            case jasmine.humax.content.type.photo:
                ext = "jpg|jpeg|bmp|gif|jpe";
                break;
            default:
                break;
        }
        return ext;
    }

    function browseContent(path, type, count, ext, sort, rootPath) {
        var deferred = $.Deferred(), browseTicket, timeoutHandle, mediaList = [];

        jasmine.humax.extend(contentManager, {
            onContentBrowse: function (contents, state, ticket) {
                if (browseTicket === ticket) {
                    console.log('onContentBrowse() - state: ' + state);
                    if (state === jasmine.humax.content.browseState.error) {
                        clearTimeout(timeoutHandle);
                        deferred.reject();
                    } else if (state === jasmine.humax.content.browseState.add) {
                        console.log('onContentBrowse() - contents.length: ' + contents.length);
                        mediaList = jasmine.humax.map(contents, function(item){
                            return item;
                        });
                    } else if (state === jasmine.humax.content.browseState.complete) {
                        clearTimeout(timeoutHandle);
                        deferred.resolve();
                    }
                } else {
                    console.log('ticket is not same');
                    clearTimeout(timeoutHandle);
                    deferred.reject();
                }
            }
        });
        console.log([
            'browseContent - path : ' + path,
            'browseContent - type : ' + type,
            'browseContent - count : ' + count,
            'browseContent - ext : ' + ext,
            'browseContent - sort : ' + sort,
            'browseContent - rootPath : ' + rootPath].join('\n'));
        browseTicket = contentManager.browseContent(path, type, count, ext, sort, rootPath);

        timeoutHandle = setTimeout(function(){
            deferred.reject();
        }, 120000);

        return deferred;
    }

    function copyContent(dest, ext, fileList) {
        var deferred = $.Deferred(), copyTicket, timeoutHandle;

        jasmine.humax.extend(contentManager, {
            onContentOperate: function (ticket, result) {
                console.log('onContentOperate() - ticket: ' + ticket);
                console.log('onContentOperate() - result: ' + result);
                switch (result) {
                    case jasmine.humax.content.operationState.copyComplete:
                        if (ticket === copyTicket) {
                            clearTimeout(timeoutHandle);
                            deferred.resolve();
                        }
                        break;
                    case jasmine.humax.content.operationState.copyError:
                        if (ticket === copyTicket) {
                            clearTimeout(timeoutHandle);
                            deferred.reject();
                        }
                        break;
                    default:
                        break;
                }
            }
        });

        var src, token;
        token = contentManager.createOperationToken(ext);
        jasmine.humax.each(fileList, function(file){
            src = file.fullPath;
            console.log('file.fullPath : ' + file.fullPath);
            token.addPath(src);
        });
        copyTicket = contentManager.copyContent(token, dest);

        timeoutHandle = setTimeout(function(){
            deferred.reject();
        }, 120000);

        return deferred;
    }

    function contentPlayback(content) {
        var deferred = $.Deferred(), timeouthandle;
        var fullPath = content.fullPath;
        var playPath = fullPath.indexOf('//') > -1 ? fullPath : 'file:/' + fullPath;
        console.log('contentPlayback - playPath : ' + playPath);

        jasmine.humax.extend(avControl, {
            /*OIPF 7.13.2.2*/
            onPlaySpeedChanged: function(speed){
                console.log("SPEED : "+speed);
            },
            onPlayPositionChanged: function(position){
                console.log("POSITION: "+position);
                if (position > 0) {
                    clearTimeout(timeouthandle);
                    deferred.resolve();
                }
            },
            onPlayStateChange: function() {
                var playState = avControl.playState;
                var error = avControl.error;
                var source = avControl.data;
                console.log("state:" + playState + " :  error :" + error + ":  soure:" + source);
            }
        });

        avControl.setSource(playPath);
        avControl.play(1);

        timeouthandle = setTimeout(function() {
            deferred.reject();
        }, 12000);

        return deferred;
    }
});