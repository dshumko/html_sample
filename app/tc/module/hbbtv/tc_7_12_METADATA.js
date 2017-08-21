
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
if (HBBTV_ON == 0) {
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
}

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
// only the value '1'
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
if (HBBTV_ON == 0) {
	test("addRatingConstraint()", function() {
	    try {
	        ok(metadataSearch.addRatingConstraint !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("addCurrentRatingConstraint()", function() {
	    try {
	        ok(metadataSearch.addCurrentRatingConstraint !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("addChannelConstraint()", function() {
	    try {
	        ok(metadataSearch.addChannelConstraint !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	/*
	test("addChannelConstraint(Channel channel)", function() {
	    try {
	        ok(metadataSearch.addChannelConstraint !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	*/
	test("orderBy()", function() {
	    try {
	        ok(metadataSearch.orderBy !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
}

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
test("totalSize", function() {
    try {
        ok(searchResults.totalSize !== undefined, "is exists");
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
// The MetadataSearchEvent class 7.12.5 NI
// The MetadataUpdateEvent class 7.12.6 NI
var Search_State = {
    FINISHED: 0,
    ABORT: 3,
    LACK_OF_RESOURCE: 4
};
var Search_Comparison = {
    EQUAL: 0,
    NOT_EQUAL: 1,
    GREATER: 2,
    GREATER_OR_EQUAL: 3,
    LESS: 4,
    LESS_OR_EQUAL: 5,
    CONTAIN: 6          // e.g. a value of “term” will match a field value of “Terminator”
};
module("SceniroTest");
test('createSearch', function() {
   try {
       var metadataSearch = searchManager.createSearch(1);
       if(metadataSearch) {
           ok(true, 'createSearch work');
       } else {
           ok(true, 'createSearch does not work');
       }
   }  catch (e) {
       ok(false, e);
   }
});
test('getChannelConfig', function() {
    try {
        var channelConfig = searchManager.getChannelConfig();
        if(channelConfig) {
            if(channelConfig.channelList) {
                channelConfig.channelList.length? ok(true, 'channelConfig.channelList length='+channelConfig.channelList.length) : ok(true, 'Length of channelConfig.channelList is 0');
            } else {
                ok(true, 'channelConfig.channelList does not work');
            }
        } else {
            ok(false, 'getChannelConfig does work');
        }
    }  catch (e) {
        ok(false, e);
    }
});
test('searchTarget', function() {
    try {
        if(metadataSearch.searchTarget === 1) {
            ok(true, 'metadataSearch.searchTarget is right')
        } else {
            ok(false, 'metadataSearch.searchTarget is wrong ['+metadataSearch.searchTarget+']');
        }
    }  catch (e) {
        ok(false, e);
    }
});
var now = new Date();
var currentTime = Math.floor(now.getTime() / 1000);
var startTimeQuery, nameQuery, andQuery, orQuery, notQuery;
test('createQuery', function() {
    try {
        startTimeQuery = metadataSearch.createQuery("startTime", Search_Comparison.LESS, currentTime);
        if(startTimeQuery) {
            nameQuery = metadataSearch.createQuery("name", Search_Comparison.CONTAIN, 'sport');
            ok(true, 'createQuery work');
        } else {
            ok(false, 'createQuery does not work');
        }
    }  catch (e) {
        ok(false, e);
    }
});
test('and', function() {
    try {
        andQuery = startTimeQuery.and(nameQuery);
        if(andQuery) {
            ok(true, 'and work');
        } else {
            ok(false, 'and does not work');
        }
    }  catch (e) {
        ok(false, e);
    }
});
test('or', function() {
    try {
        orQuery = startTimeQuery.or(nameQuery);
        if(orQuery) {
            ok(true, 'or work');
        } else {
            ok(false, 'or does not work');
        }
    }  catch (e) {
        ok(false, e);
    }
});
test('not', function() {
    try {
        notQuery = nameQuery.not();
        if(notQuery) {
            ok(true, 'not work');
        } else {
            ok(false, 'not does not work');
        }
    }  catch (e) {
        ok(false, e);
    }
});
test('setQuery', function() {
    try {
        metadataSearch.setQuery(startTimeQuery);
        ok(true, 'setQuery work');
    } catch (e) {
        ok(false, e);
    }
});
test('result', function() {
    try {
        searchResults = metadataSearch.result;
        if(searchResults) {
            ok(true, 'metadataSearch.result work');
        } else {
            ok(false, 'metadataSearch.result does not work');
        }
    } catch (e) {
        ok(false, e);
    }
});
asyncTest('getResults / onMetadataSearch', function() {
    try {
        searchManager.onMetadataSearch = function(search, state) {
            QUnit.start();
            switch(state) {
                case Search_State.FINISHED:
                    var result = search.result;
                    var length = result.length;
                    if(length <= 0 ) {
                        ok(false, "result data is empty");
                    } else {
                        var fail = false;
                        for(var i=0; i<length; i++) {
                            var item = result.item(i);
                            if(item.startTiem < currentTime) {
                                continue;
                            } else {
                                fail = true;
                                break;
                            }
                        }
                        ok(fail, "result length="+length+', i='+i);
                    }
                    break;
                case Search_State.ABORT:
                    ok(false, "call to SearchResults.abort() or the parameters for the search have been modified");
                    break;
                case Search_State.LACK_OF_RESOURCE:
                    ok(false, "lack of resource");
                    break;
                default :
                    ok(false, "This value is not used");
                    break;
            }
        };
        searchResults.getResults(0, 100);
    } catch (e) {
        QUnit.start();
        ok(false, e);
    }
});
asyncTest('findProgrammesFromStream', function() {
    try {
        var now = new Date();
        var checkTime = Math.floor(now.getTime() / 1000);
        searchManager.onMetadataSearch = function(search, state) {
            QUnit.start();
            switch(state) {
                case Search_State.FINISHED:
                    var result = search.result;
                    var length = result.length;
                    if(length <= 0 ) {
                        ok(false, "result data is empty");
                    } else {
                        var fail = false;
                        for(var i=0; i<length; i++) {
                            var item = result.item(i);
                            if(item.startTiem >= checkTime) {
                                fail = true;
                                break;
                            } else {
                                continue;
                            }
                        }
                        ok(fail, "result length="+length+', i='+i);
                    }
                    break;
                case Search_State.ABORT:
                    ok(false, "call to SearchResults.abort() or the parameters for the search have been modified");
                    break;
                case Search_State.LACK_OF_RESOURCE:
                    ok(false, "lack of resource");
                    break;
                default :
                    ok(false, "This value is not used");
                    break;
            }
        };
        var channalConfig = searchManager.getChannelConfig();
        var channelList = channalConfig.channelList;
        channelList.length? metadataSearch.findProgrammesFromStream(channelList[0], checkTime, 5) : ok(false, 'cannot get channelList');
        var result = metadataSearch.result;
        if(result) {
            result.getResults(0, 100);
        } else {
            ok(false, 'metadataSearch.result does not workt')
        }
    } catch (e) {
        QUnit.start();
        ok(false, e);
    }
});