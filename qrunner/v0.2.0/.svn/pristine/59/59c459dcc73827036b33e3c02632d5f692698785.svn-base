describe('[LIVE] avcontrol option', function() {
    "use strict";
    //***PreCondition:***<br /> Channel Search is done. Signal cable should be connected
    var video,
        channelConfig,
        channelList,
        removeVideoWrapFn;

    beforeAll(function () {
        video = oipfObjectFactory.createVideoBroadcastObject();
        removeVideoWrapFn = jasmine.humax.videoWrapper(video);
        channelConfig = video.getChannelConfig();
        channelList = channelConfig.channelList;
    });

    afterAll(function () {
        removeVideoWrapFn();
    });

    //***Test Scenario:***
    //1.	Channel tune
    //2.	Check current channel's audio component list and current active audio component
    //3.	Change the current active audio component
    //4.	Check current channel's subtitle component list and current active subtitle component
    //5.	Change the current active subtitle component

    it('check api : channel, channel list, video', function (done) {
        expect(video).toBeDefined();
        expect(video).toHaveProperties(['getChannelConfig', 'getComponents', 'getCurrentActiveComponents', 'unselectComponent', 'selectComponent']);
        expect(channelConfig).toBeDefined();
        expect(channelConfig).toHaveProperties(['channelList']);
        expect(channelList.length).toBeGreaterThan(0);

        jasmine.humax.setChannel(video, channelList[0], 5000).always(function(){
            setTimeout(done, 15000);
        });
    }, 5000 + 15000 + 1000);

    describe('live audio component', function() {
        var audioCompList, curAudio, curAudioComp, len,  isFoundComp = false;
        beforeEach(function() {
            audioCompList = video.getComponents(jasmine.humax.media.component.COMPONENT_TYPE_AUDIO);
            curAudio = video.getCurrentActiveComponents(jasmine.humax.media.component.COMPONENT_TYPE_AUDIO);
            len = curAudio.length;
            if (curAudio !== null && len > 0) {
                curAudioComp = curAudio.item(0);  //Get current audio component
                console.log('curAudioComp.language : ' + curAudioComp.language+ '\n' +
                    'curAudioComp.pid : ' + curAudioComp.pid);
            }
        });
        it('find current audio component', function() {
            len = audioCompList.length;
            console.log('audioCompList.length : ' + len);
            expect(len).toBeGreaterThan(0);

            jasmine.humax.each(audioCompList, function(audioItem, i){
                console.log('audioCompList.item(' + i + ').language : ' +  audioItem.language + '\n' +
                    'audioCompList.item(' + i + ').pid : ' +  audioItem.pid);

                if ((curAudioComp.pid === audioItem.pid) && (curAudioComp.language === audioItem.language) &&
                    (curAudioComp.componentTag === audioItem.componentTag)) {
                    console.log('found current Audio Component in List');
                    isFoundComp = true;
                }
            });

            expect(curAudioComp).toBeDefined();
            //***Note:*** when change the audio component, unselectComponent and selectComponent are must be called.
            video.unselectComponent(curAudioComp); //This param should be previous value
            video.selectComponent(curAudioComp);   //This param should be next value
            expect(isFoundComp).toBeTruthy();
        });
    });

    describe('live subtitle component', function() {
        var subtitleCompList, curSubtitle, curSubtitleComp, len,  isFoundComp = false;
        beforeEach(function() {
            subtitleCompList = video.getComponents(jasmine.humax.media.component.COMPONENT_TYPE_SUBTITLE);
            curSubtitle = video.getCurrentActiveComponents(jasmine.humax.media.component.COMPONENT_TYPE_SUBTITLE);
            len = curSubtitle.length;
            if (curSubtitle !== null && len > 0) {
                curSubtitleComp = curSubtitle.item(0);   //Get current subtitle component
                console.log('curSubtitleComp.language : ' + curSubtitleComp.language +'\n'+
                    'curSubtitleComp.pid : ' + curSubtitleComp.pid);
            }
        });
        it('find current subtitle component', function() {
            len = subtitleCompList.length;
            console.log('subtitleCompList.length : ' + len);
            if (len > 0) {
                jasmine.humax.each(subtitleCompList, function(item,i){
                    console.log('subtitleCompList.item(' + i + ').language : ' +  item.language + '\n' +
                        'subtitleCompList.item(' + i + ').pid : ' +  item.pid);
                    if ((curSubtitleComp.pid === item.pid) && (curSubtitleComp.language === item.language) &&
                        (curSubtitleComp.componentTag === item.componentTag)) {
                        console.log('found current subtitle Component in List');
                        isFoundComp = true;
                    }
                });
                expect(curSubtitleComp).toBeDefined();

                //***Note:*** When change the component, call api unselectComponent, selectComponent
                video.unselectComponent(curSubtitleComp); //This param should be previous value
                video.selectComponent(curSubtitleComp);   //This param should be next value

                //***Note:*** When turn off the subtitle, call api unselectComponent, offComponent
                video.unselectComponent(curSubtitleComp);
                video.offComponent(jasmine.humax.media.component.COMPONENT_TYPE_SUBTITLE, -1); //Subtitle Off API

                //***Note:*** After turn off the subtitle, if you want to turn on subtitle call api selectComponent
                video.selectComponent(curSubtitleComp);

                expect(isFoundComp).toBeTruthy();
            } else {
                console.log('there is no subtitle component');
            }
        });
    });

    //***Notes:*** <br />  Current test code change the component with same component like below because stream is needed which have two or more components to change the active component.
    // ```javascript
    //video.unselectComponent(curAudioComp);
    //  // This param should be previous value
    //video.selectComponent(curAudioComp);
    //  //This param should be next value
    // ```

});
