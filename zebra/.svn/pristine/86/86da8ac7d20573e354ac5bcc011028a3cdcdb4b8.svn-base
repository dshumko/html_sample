fdescribe('[LIVE] Parental rate control scenario', function() {
    "use strict";
    // ***PreCondition:***<br /> Channel Search is done. Signal cable should be connected.
    var video,
        channelConfig,
        channelList,
        parentalRatingControlMgr,
        parentalRatingSchemeCollection,
        parentalRatingScheme;

    beforeAll(function () {
        video = oipfObjectFactory.createVideoBroadcastObject();

        channelConfig = video.getChannelConfig();
        channelList = channelConfig.channelList;

        parentalRatingControlMgr = oipfObjectFactory.createParentalControlManagerObject();
        parentalRatingSchemeCollection =  parentalRatingControlMgr.parentalRatingSchemes;
        parentalRatingScheme = parentalRatingSchemeCollection.getParentalRatingScheme("dvb-si");
    });
    afterAll(function(){
        video.stop();
    });

    it('check api : channel, channel list', function () {
        expect(video).toBeDefined();
        expect(video).toHaveProperties(['getChannelConfig']);
        expect(video).toHaveProperties(['onParentalRatingChange','onParentalRatingError']);
        expect(channelConfig).toBeDefined();
        expect(channelConfig).toHaveProperties(['channelList']);
        expect(channelList.length).toBeGreaterThan(0);
    });

    it('check api: parental rating control manager, scheme, scheme collection', function(){
        expect(parentalRatingControlMgr).toBeDefined();
        expect(parentalRatingControlMgr).toHaveProperties([
            /*OIPF 7.9.1.1*/
            'parentalRatingSchemes',
            'isPINEntryLocked',
            /* OIPF 7.9.1.2*/
            'setParentalControlStatus',
            'getParentalControlStatus',
            'getBlockUnrated',
            'setParentalControlPIN',
            'unlockWithParentalControlPIN',
            'verifyParentalControlPIN',
            'setBlockUnrated',
             /*Humax Extension 2.3.1*/
            'resetParentalControlPIN']);

        expect(parentalRatingScheme).toHaveProperties([
            /*OIPF 7.9.2*/
            'name', 'threshold', 'indexOf', 'iconUri',
             /*Humax Extension 2.3.2*/
            'changeThreshold'
        ]);

        expect(parentalRatingSchemeCollection).toHaveProperties([
            /*OIPF 7.9.3.1*/
             'addParentalRatingScheme', 'getParentalRatingScheme',
             /*Humax Extension 2.3.3*/
            'getParentalRatingScheme'
         ]);
    });

    //***Test Scenario:***
    //1.	Change threshold, and check threshold ( lock all, 15 age, view all )
    //2.	Change pin code, and check pin code to changed, verify pin code
    //3.	Change other channel and check “ParentalRatingChange” event fired

    describe(' parental rating, simple scenario ', function(){
        //```Note : EN 300 468``` - Parental rating descriptor (age = value + 3 years ) <br />
        //* 0x00 : undefined<br />
        //* 0x01 to 0x0F : minimum age = value + 3 years<br />
        //* 0x10 to 0xFF : defined by the broadcaster<br />
        //*   Humax define<br />
        //* 0x00 : all view<br />
        //* 0x7F : all lock<br />

        //```API``` humax extension 2.3.2<br />
        //     RATING_VIEW_ALL	= 0<br />
        //     RATING_AGE_4		= 1<br />
        //     RATING_AGE_5		= 2<br />
        //     RATING_AGE_6	= 3<br />
        //     RATING_AGE_7		= 4<br /><br />
        //     RATING_AGE_8		= 5<br />
        //     RATING_AGE_9	= 6<br />
        //     RATING_AGE_10	= 7<br />
        //     RATING_AGE_11	= 8<br />
        //     RATING_AGE_12	= 9<br /><br />
        //     RATING_AGE_13	= 10<br />
        //     RATING_AGE_14	= 11<br />
        //     RATING_AGE_15	= 12<br />
        //     RATING_AGE_16	= 13<br />
        //     RATING_AGE_17	= 14<br /><br />
        //     RATING_AGE_18	= 15<br />
        //     RATING_AGE_19	= 16<br />
        //     RATING_AGE_20	= 17<br />
        //     RATING_AGE_ALL_AGE	= 0x1D<br />
        //     RATING_AGE_CHILDREN	= 0x1E<br /><br />
        //     RATING_AGE_X_RATED	= 0x1F<br />
        //     RATING_AGE_LOCK_ALL	= 0x7F<br />

        it('change threshold RATING_AGE_LOCK_ALL', function() {
            parentalRatingScheme.changeThreshold(0x7F);
            expect(parentalRatingScheme.threshold.value).toBe(0x7F);
        });

        xit('change threshold RATING_AGE_X_RATED', function() {
            parentalRatingScheme.changeThreshold(0x1F);
            expect(parentalRatingScheme.threshold.value).toBe(0x1F);
        });

        it('change threshold RATING_AGE_15', function() {
            parentalRatingScheme.changeThreshold(15);
            expect(parentalRatingScheme.threshold.value).toBe(15);
        });

        it('change threshold RATING_VIEW_ALL', function() {
            parentalRatingScheme.changeThreshold(0);
            expect(parentalRatingScheme.threshold.value).toBe(0);
        });

        //```API```
        //0  : The PIN is correct <br />
        //1 :  The PIN is incorrect <br />
        //2 : PIN entry is locked
        it(' change pincode : 0000 to 1111', function(){
            expect(parentalRatingControlMgr.setParentalControlPIN('0000','1111')).toBe(0);
        });

        it(' change pincode : 1111 to 0000', function(){
            expect(parentalRatingControlMgr.setParentalControlPIN('1111','0000')).toBe(0);
        });

        it(' verify pincode : 0000', function(){
            expect(parentalRatingControlMgr.verifyParentalControlPIN('0000')).toBe(0);
        });

        it(' verify pincode : 1111', function(){
            expect(parentalRatingControlMgr.verifyParentalControlPIN('1111')).toBe(1);
        });

        it(' change status pincode : 0000, enable: false', function(){
            expect(parentalRatingControlMgr.setParentalControlStatus('0000', false)).toBe(0);
        });
    });

    describe(' parental rating, event scenario ', function(){
        var verifyResultByFirst, verifyResultBySecond;
        beforeAll(function(done){
            console.log("Set : RATING_AGE_LOCK_ALL");
            parentalRatingScheme.changeThreshold(0x7F); /*RATING_AGE_LOCK_ALL*/

            tune().done(function(contentID, rating, DRMSystemID, blocked){
                console.log(" CHANGE EVENT  - contentID : " + contentID + " , rating : " + rating + " , DRMSystemID : " + DRMSystemID + " , blocked : " + blocked);
                verifyResultByFirst = parentalRatingControlMgr.verifyParentalControlPIN('0000');
                verifyResultBySecond = parentalRatingControlMgr.verifyParentalControlPIN('1111');
            }).always(function(){
                parentalRatingScheme.changeThreshold(0); /*RATING_VIEW_ALL*/
            }).always(done);
        }, 30000+30000+ 60000);

        it('Verification pincode ',function(){
            expect(verifyResultByFirst).toBe(0);
            expect(verifyResultBySecond).toBe(1);
        }, 30000+30000+ 60000);
    });

    function tune() {
        var deferred = $.Deferred(),
            noRatedChannel = channelList[1],
            ratedChannel = channelList[0];

        $.when({})
            .pipe(function(){return jasmine.humax.setChannel(video, noRatedChannel, 30000);})
            .pipe(function(){return jasmine.humax.setChannel(video, ratedChannel, 30000);})
            .pipe(function(){return setParentalEvent();})
            .then(function(contentID, rating, DRMSystemID, blocked){
                deferred.resolve(contentID, rating, DRMSystemID, blocked);
            }, function(){
                deferred.reject();
            });
        return deferred;

        function setParentalEvent(){
            var deferred = $.Deferred(),
            eventUnbindFn = jasmine.humax.events(video, {
                /*OIPF 7.13.5*/
                ParentalRatingChange : function(e){
                    deferred.resolve(e.contentID, e.rating, e.DRMSystemID, e.blocked);
                },
                ParentalRatingError : function(e) {
                    console.log(" ERROR EVENT  - contentID : " + e.contentID + " , rating : " + e.ratings + " , DRMSystemID : " + e.DRMSystemID);
                }
            });
            setTimeout(function () {
                deferred.reject();
            }, 30000);
            deferred.always(eventUnbindFn);
            return deferred;
        }
   }
});