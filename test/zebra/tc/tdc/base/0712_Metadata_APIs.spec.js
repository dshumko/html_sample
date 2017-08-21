// OIPF-T1-R2_Specification-Volume-5-Declarative-Application-Environment-v2_3-2014-01-24.pdf
describe('7.12 Metadata APIs', function() {
    "use strict";
    describe('7.12.1 The application/oipfSearchManager embedded object', function () {
        var searchMgr;
        beforeEach(function () {
            searchMgr= document.createElement('object');
            searchMgr.setAttribute("type", "application/oipfSearchManager");
            document.body.appendChild(searchMgr);
        });
        describe('7.12.1.1 Properties', function(){
            it('guideDaysAvailable', function(){
                expect(searchMgr.guideDaysAvailable).toBeDefined();
            });
            it('onMetadataSearch', function(){
                expect(searchMgr.onMetadataSearch).toBeDefined();
            });
        });
        describe('7.12.1.3 Methods', function(){
            it('createSearch', function(){
                expect(searchMgr.createSearch).toBeDefined();
            });
            it('getChannelConfig', function(){
                expect(searchMgr.getChannelConfig).toBeDefined();
            });
        });
        afterEach(function () {
            document.body.removeChild(searchMgr);
        });
    });

    describe('7.12.2 The MetadataSearch class', function () {
        var searchMgr, search;
        beforeEach(function () {
            searchMgr= document.createElement('object');
            searchMgr.setAttribute("type", "application/oipfSearchManager");
            document.body.appendChild(searchMgr);

            search = searchMgr.createSearch(2);
        });
        describe('7.12.2.1 Properties', function(){
            it('searchTarget', function(){
                expect(search.searchTarget).toBeDefined();
            });
            it('query', function(){
                expect(search.query).toBeDefined();
            });
            it('result', function(){
                expect(search.result).toBeDefined();
            });
        });
        describe('7.12.2.2 Methods', function(){
            it('setQuery', function(){
                expect(search.setQuery).toBeDefined();
            });
            it('addRatingConstraint', function(){
                expect(search.addRatingConstraint).toBeDefined();
            });
            it('addCurrentRatingConstraint', function(){
                expect(search.addCurrentRatingConstraint).toBeDefined();
            });
            it('addChannelConstraint', function(){
                expect(search.addChannelConstraint).toBeDefined();
            });
            it('orderBy', function(){
                expect(search.orderBy).toBeDefined();
            });
            it('createQuery', function(){
                expect(search.createQuery).toBeDefined();
            });
            it('findProgrammesFromStream', function(){
                expect(search.findProgrammesFromStream).toBeDefined();
            });
        });
        afterEach(function () {
            document.body.removeChild(searchMgr);
        });
    });

    describe('7.12.3 The Query class', function () {
        var searchMgr, query;
        beforeEach(function () {
            searchMgr= document.createElement('object');
            searchMgr.setAttribute("type", "application/oipfSearchManager");
            document.body.appendChild(searchMgr);

            var search = searchMgr.createSearch(2);
            query = search.createQuery("urn:tva:transport:fieldIDs:2002:Title",6,"space");
        });
        describe('7.12.3.1 Methods', function(){
            it('and', function(){
                expect(query.and).toBeDefined();
            });
            it('or', function(){
                expect(query.or).toBeDefined();
            });
            it('not', function(){
                expect(query.not).toBeDefined();
            });
        });
        afterEach(function () {
            document.body.removeChild(searchMgr);
        });
    });

    describe('7.12.4 The SearchResults class', function () {
        var searchMgr, result;
        beforeEach(function () {
            searchMgr= document.createElement('object');
            searchMgr.setAttribute("type", "application/oipfSearchManager");
            document.body.appendChild(searchMgr);

            var search = searchMgr.createSearch(2);
            var query = search.createQuery("urn:tva:transport:fieldIDs:2002:Title",6,"space");
            search.setQuery(query);
            search.orderBy("urn:tva:transport:fieldIDs:2002:Title", true);
            search.onMetadataSearch = function(search, state){
                if((state === 0) || (state === 1 )){
                    search.results.update();
                    result = search.result[0];
                    //search.results.getResults(10,20);
                }
            };
        });
        describe('7.12.4.1 Properties', function(){
            it('length', function(){
                expect(result.length).toBeDefined();
            });
            it('offset', function(){
                expect(result.offset).toBeDefined();
            });
            it('totalSize', function(){
                expect(result.totalSize).toBeDefined();
            });
        });
        describe('7.12.4.2 Methods', function(){
            it('item', function(){
                expect(result.item).toBeDefined();
            });
            it('getResults', function(){
                expect(result.getResults).toBeDefined();
            });
            it('abort', function(){
                expect(result.abort).toBeDefined();
            });
            it('update', function(){
                expect(result.update).toBeDefined();
            });
        });
        afterEach(function () {
            document.body.removeChild(searchMgr);
        });
    });
});