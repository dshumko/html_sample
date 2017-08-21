beforeEach(function(){
    'use strict';
    jasmine.addMatchers({
        toHaveProperties: function () {
            return {
                compare: function (actual, properties) {
                    var pass = true, i= 0, len = properties.length, nohaveProperties=[];
                    for(;i<len;i+=1){
                        if(actual[properties[i]] === undefined){
                            nohaveProperties.push(' " '+ properties[i] +' " ');
                            pass = false;
                        }
                    }
                    return {
                        pass: pass,
                        message: 'There are no have ' + nohaveProperties.join('') + ' properties'
                    };
                }
            };
        }
    });
});

/* HUMAX UTILITIES */
(function(jasmine){
    "use strict";
    jasmine.humax = extend(jasmine.humax||{}, {
        extend:extend,
        each:eachFn,
        map:mapFn,
        filter:filterFn,
        find:findFn,
        unique:uniqueFn,

        eachItem:eachItem,

        tick:timeCheck,
        timer:timer,
        events: manageEvents,

        screenMessage: screenMessage,

        videoWrapper: videoWrapper,
        setChannel : setChannel
    });

    /** PRIMITIVE UTILITIES */
    function extend(obj, data) {
        var n;
        for( n in data){
            if(data.hasOwnProperty(n)){
                obj[n] = data[n];
            }
        }
        return obj;
    }

    function eachFn(obj,fn) {
        /*not work for collection object  - I dont know what is the problem*/
        /*return Array.prototype.forEach.bind(obj)(fn);*/
        if(!obj){
            return;
        }
        var i= 0, len = obj.length||0;
        for(;i<len;i+=1){
            fn(obj[i],i,obj);
        }
    }

    function mapFn(obj,fn){
        /*return Array.prototype.map.bind(obj)(fn);*/
        if(!obj){
            return [];
        }
        var i= 0, len = obj.length|| 0, a=[], fx = fn || function(obj){return obj;};
        for(;i<len;i+=1){
            a.push(fx(obj[i],i,obj));
        }
        return a;
    }

    function filterFn(obj,fn){
        /*return Array.prototype.filter.bind(obj)(fn);*/
        var i= 0, len = obj.length|| 0, a=[];
        for(;i<len;i+=1){
            if(fn(obj[i],i,obj)){
                a.push(obj[i]);
            }
        }
        return a;
    }

    function findFn(obj,fn){
        /*This browser not supported*/
        /*return Array.prototype.find.bind(obj)(fn);*/
        if(!obj){
            return;
        }
        var i= 0, len=obj.length;
        for(;i<len;i+=1){
            if(fn(obj[i],i,obj)){
                return obj[i];
            }
        }
    }

    function uniqueFn(obj, fn){
        return filterFn(obj, function(item, i, a){
            return !!findFn(a,fn);
        });
    }

    function evenEach(obj, fn){
        var i= 0, len = obj.length;
        for(;i<len;i+=2){
            fn(obj[i],obj[i+1],i);
        }
    }

    function eachIn(obj, fn) {
        var n;
        for( n in obj){
            if(obj.hasOwnProperty(n)){
                fn(obj[n], n);
            }
        }
    }

    function eachItem(obj,fn) {
        var i= 0, len = obj.length;
        for(;i<len;i+=1){
            fn(obj.item(i),i);
        }
    }

    function timeout(fn, timelimit){
        var handler = setTimeout(fn, timelimit);
        return function(){
            clearTimeout(handler);
        };
    }

    /** PERFORMANCE TUNING UTILITIES */
    function timeCheck(msg){
        var now = new Date();
        console.log("[TIME: " +
            addZero(now.getHours())   + ":" +
            addZero(now.getMinutes())   + ":" +
            addZero(now.getSeconds())   + ":" +
            now.getMilliseconds() + ":" +  msg + " ]");

        function addZero(i){
            return i < 10 ? "0" + i : i;
        }
    }

    function timer(msg) {
        var start = new Date();
        console.log("[START:>>>>> " +  msg );
        return function(){
            console.log("<<<<< END: " + ( (new Date()).valueOf() - start.valueOf() ) +"ms : "+  msg + " ]");
        };
    }

    /**  TEST HELPER */
    function manageEvents(){
        var a = arguments, closeSet = [];
        if(!$.isArray(a)){
            a = [[arguments[0],arguments[1]]];
        }
        eachFn(a, function(item){
            closeSet.push(appendEvents(item[0], item[1]));
        });
        return function(){
            eachFn(closeSet,function(fn){
                fn();
            });
        };
    }

    function appendEvents(targetObject, listener){
        eachIn(listener,function(fn, name){
            targetObject.addEventListener(name,fn,false);
        });
        return function(){
            eachIn(listener,function(fn, name){
                targetObject.removeEventListener(name,fn);
            });
        };
    }

    function indexer(arr, defaultValue) {
        return function(index){
            return arr[index] || defaultValue;
        };
    }

    function assignedArray(){
        var arr = [] ;
        evenEach(arguments, function(index, value){
            arr[index] = value;
        });
        return arr;
    }

    function screenMessage(msg){
        var box =  document.createElement('div');
        box.setAttribute('style', "position:absolute; left:0px; top:200px; width:100%;  height:100px;"+
            "color:#555;" +
            "font-family:Tahoma,Geneva,Arial,sans-serif;font-size:50px;" +
            "padding:10px 10px 10px 100px;" +
            "margin:10px;" +
            "background:#e3f7fc; border:4px solid #8ed9f6;" +
            "opacity: 0.9;"
        );
        box.innerText = msg;
        document.body.appendChild(box);
        return function(){
            document.body.removeChild(box);
        };
    }

    function videoWrapper(video){
        var houser =  document.createElement('div');
        houser.setAttribute('style', "position:absolute; left:0px; top:0px; width:1280px;  height:720px;");
        document.body.appendChild(houser);
        video.setAttribute('style', "position:absolute; width:100%; height:100%;");
        houser.appendChild(video);
        return function(){
            document.body.removeChild(houser);
        };
    }

    function setChannel(video, channel, timelimit){
        var deferred = $.Deferred();
        if(!channel){
            console.log("no channel");
            return deferred.reject();
        }
        if(isSameChannel(video, channel)) {
            console.log("same channel");
            return deferred.resolve();
        }

        var clearTimelimitFn = function(){},
        eventUnbinderFn = appendEvents(video, {
            PlayStateChange:function(e){
                console.log("-->"+e+":"+playStateToStringFn(e.state) +
                    ( e.error!==undefined?":error:" + e.error + ":"+ playErrorToStringFn(e.error):""));
            },
            ChannelChangeError: function (e) {
                console.log("-->"+e+":"+playErrorToStringFn(e.error));
            },
            ChannelChangeSucceeded: function (e) {
                console.log("-->" +e+"  -channel : " + e.channel.name + " -state : " + playStateToStringFn(video.playState) );
                deferred.resolve(e.channel);
                clearTimelimitFn();
            }
        });

        timeCheck("before setChannel :  playState :"+ playStateToStringFn(video.playState) + ":" + channel.name);
        video.setChannel(channel, false, "");

        clearTimelimitFn = timeout( function() {
            if(video.playState === 2 /*PRESENTING*/  /*&& isSameChannel(video,channel)*/){
                console.log("setChannel timeout resolve : playState : "+ playStateToStringFn(video.playState));
                deferred.resolve();
            } else {
                console.log("setChannel timeout reject : playState : "+ playStateToStringFn(video.playState));
                deferred.reject();
            }
        }, timelimit);
        deferred.always(eventUnbinderFn);
        return deferred;
    }

    function isSameChannel(video, channel){
        return !!video.currentChannel && video.currentChannel.ccid === channel.ccid;
    }

    var playStateToStringFn = indexer(["Unrealized", "Connecting", "Presenting", "Stopped"], "Undefined");
    var playErrorToStringFn = indexer([
            "Channel not supported by tuner.",
            "Cannot tune to given transport stream (e.g. no signal)",
            "Tuner locked by other object.",
            "Parental lock on channel.",
            "Encrypted channel, key/module missing.",
            "Unknown channel (e.g. can't resolve DVB or ISDB triplet).",
            "Channel switch interrupted ",
            "Channel cannot be changed, because it is currently being recorded.",
            "Cannot resolve URI of referenced IP channel.",
            "Insufficient bandwidth.",
            "Channel cannot be changed by the nextChannel()/prevChannel() methods either",
            "Insufficient resources are available to present the given channel",
            "Specified channel not found in transport stream"]
            .concat(assignedArray(100,"Unidentified error.")),
        "Undefined");

}(jasmine));