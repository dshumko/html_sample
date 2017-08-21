describe('[SETTINGS] favourite list ', function() {
    "use strict";
    var video,
        channelConfig,
        channelList,
        favouriteLists;

    beforeAll(function () {
        video = oipfObjectFactory.createVideoBroadcastObject();

        channelConfig = video.getChannelConfig();
        channelList = channelConfig.channelList;
        favouriteLists = channelConfig.favouriteLists;
    });

    it('check api : favourite list', function () {
        expect(video).toBeDefined();
        expect(video).toHaveProperties(['getChannelConfig']);
        expect(channelConfig).toBeDefined();
        expect(channelConfig).toHaveProperties(['favouriteLists']);
        expect(channelList).toBeDefined();
        expect(favouriteLists).toBeDefined();
        expect(favouriteLists).toHaveProperties(['commit', 'getFavouriteList']);
    });

    //***Test Scenario: ***<br />
    //1.	Display current favourite lists information
    //2.	Add/Remove channel to favourite list
    //3.	Check Add/Remove channel is working correctly

    it('scenario 1 : display favourite lists information', function(){
        expect(favouriteLists.length).toBeGreaterThan(0);
        displayFavouriteLists(favouriteLists);
    });

    describe('scenario 2 : add/remove channel to favourite list  ', function(){
        var allFavList, dummyList,  favType = {ALL:1,TV:2,RADIO:3,HDTV:4,FREE:5,PAY:6};
        beforeAll(function(){
            allFavList = favouriteLists.getFavouriteList(favType.ALL);
            dummyList = favouriteLists.createFavouriteList('dummy');
            console.log('dummy fav list : '+ dummyList.name+", fav ID: "+ dummyList.favID+',  length: '+ dummyList.length);
        });
        it('Add channel ', function(){
            jasmine.humax.eachItem(allFavList, function(channel, index){
                dummyList.insertBefore(index, channel.ccid);
            });
            dummyList.commit();
            expect(dummyList.length).toEqual(allFavList.length);
            displayFavouriteList(dummyList);
        });
        it('Remove channel', function(){
            eachReverseItem(dummyList, function(channnel, index){
                dummyList.remove(index);
            });
            dummyList.commit();
            expect(dummyList.length).toBe(0);
            displayFavouriteList(dummyList);
        });
    });

    //***Note:***<br />
    //<font color=red> below 6 kind of favourite lists are made automatically. <br />
    //Use these channel groups to show channel list <br />
    //```All``` channel Group favourite list, <br />
    //```TV ```channel Group favourite list, <br />
    //```Radio``` channel Group favourite list, <br />
    //```HDTV ```channel Group favourite list, <br />
    //```Free``` channel Group favourite list, <br />
    //```Pay``` channel Group favourite list </font><br />

    function displayFavouriteList(favouriteList){
        console.log("["+favouriteList.favID+"] " + favouriteList.name + " - favourite has " + favouriteList.length + "  channels ");
        jasmine.humax.eachItem(favouriteList, function(channel, index){
            console.log(index+" - ["+channel.ccid+"]  - " + channel.name );
        });
    }
    function displayFavouriteLists(favouriteLists){
        jasmine.humax.eachItem(favouriteLists,function(item, index){
            console.log(index + " - ["+item.favID+"] " + item.name + " - favourite has " + item.length + "  channels ");
        });
    }
    function eachReverseItem(obj,fn){
        var len = obj.length, i= len-1;
        for(;i>=0;i-=1){
            fn(obj.item(i),i);
        }
    }
});
