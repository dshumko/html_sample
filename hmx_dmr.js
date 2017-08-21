var hmxui = function() {
    $("body").append('<div id="humax_media"></div>');
    this.media = $("#humax_media").addClass("humaxmedia");
};

hmxui.prototype = {

};

var hmxplayer = function(ui) {
    this.ui = ui;
    this.timeupdate = null;
    this.durationchange = null;
    this.ended = null;
    this.error = null;
    this.playstate = "none";
    this.src = "";
};

hmxplayer.prototype = {
    setListener: function(type, func, player)
    {
        switch(type)
        {
            case "timeupdate":
                this.timeupdate = func;
                break;
            case "durationchange":
                this.durationchange = func;
                break;
            case "ended":
                this.ended = func;
                break;
            case "error":
                this.error = func;
                break;
            default : break;
        }
    },
    play: function(src, speed) {
        if ( this.ui.media.length )
        {
            var media_obj = $("#hmxmedia");
            if ( (this.playstate == "pause") || ((this.playstate == "play")&&(this.src == src)) )
            {
                if ( media_obj.length ) media_obj.get(0).play();
                this.playstate = "play";
            }
            else
            {
                if ( media_obj.length )
                {
                    media_obj.get(0).src = "";
                    media_obj.get(0).load();
                }
                else
                {
                    this.ui.media.append($("<video id=\"hmxmedia\"></video>"));
                    media_obj = $("#hmxmedia");
                }


                media_obj.get(0).src = src;
                media_obj.get(0).addEventListener("timeupdate", this.onTimeupdate.bind(this));
                media_obj.get(0).addEventListener("durationchange", this.onDurationChange.bind(this));
                media_obj.get(0).addEventListener("ended", this.onEnded.bind(this));
                media_obj.get(0).addEventListener("error", this.onError.bind(this));

                var source = media_obj.get(0).src;
                var sub_index = source.lastIndexOf('.');
                var sub = source.substring(0, sub_index) + ".vtt";
                var track = document.createElement('track');
                track.setAttribute('default', '');
                track.setAttribute('label', 'Korean Subtitle');
                track.setAttribute('kind', 'subtitles');
                track.setAttribute('src', sub);
                track.setAttribute('srclang', 'en');
                media_obj.get(0).appendChild(track);
                media_obj.get(0).play();
                this.playstate = "play";
                this.src = src;
            }
        }
    },
    pause: function() {
        var media_obj = $("#hmxmedia");
        if ( media_obj.length )
        {
            media_obj.get(0).pause();
            this.playstate = "pause";
        }
    },
    seek: function(position) {
        var media_obj = $("#hmxmedia");
        if ( media_obj.length )
        {
            media_obj.get(0).currentTime = position;
        }
    },
    stop: function() {
        var media_obj = $("#hmxmedia");
        if ( media_obj.length )
        {
            media_obj.get(0).src = "";
            media_obj.get(0).load();
            media_obj.get(0).removeEventListener("timeupdate", this.onTimeupdate);
            media_obj.get(0).removeEventListener("durationchange", this.onDurationChange);
            media_obj.get(0).removeEventListener("error", this.onError);
            media_obj.get(0).removeEventListener("ended", this.onEnded);
            media_obj.remove();
            this.playstate = "stop";
            this.src = "";
        }
    },
    onTimeupdate: function() {
        if ( this.timeupdate )
        {
            var media_obj = $("#hmxmedia");
            var position = parseInt(media_obj.get(0).currentTime * 1000); // ms
            if ( media_obj.length ) this.timeupdate(position);
        }
    },
    onDurationChange: function() {
        if ( this.durationchange )
        {
            var media_obj = $("#hmxmedia");
            var duration = parseInt(media_obj.get(0).duration * 1000); // ms
            if ( media_obj.length ) this.durationchange(duration);
        }
    },
    onEnded: function() {
        if (this.ended)
        {
            var media_obj = $("#hmxmedia");
            if ( media_obj.length ) this.ended();
        }
    },
    onError: function() {
        if (this.error)
        {
            var media_obj = $("#hmxmedia");
            if ( media_obj.length ) this.error();
        }
    },
};

function ended() {
    hmx_player.stop();
    changeLocation('index');
};
function error() {
    hmx_player.stop();
    changeLocation('index');
};

function durationchange(duration) {
    if (hmx_dmr) hmx_dmr.setDuration = duration;//(duration);
};
function timeupdate(time) {
    if (hmx_dmr) hmx_dmr.setPosition = time;//(time);
};

function changeLocation(page)
{
    var url = location.href;
    var moveurl = url.replace('dmr', page);
    location.href = moveurl;
};

var hmx_player = null;
var hmx_ui = null;
var hmx_dmr = null;

var dmr_started = 0;
$(document).ready(function(){
    hmx_ui = new hmxui();
    hmx_player = new hmxplayer(hmx_ui);

    hmx_player.setListener("ended", ended);
    hmx_player.setListener("error", error);
    hmx_player.setListener("timeupdate", timeupdate);
    hmx_player.setListener("durationchange", durationchange);

    try {
        hmx_dmr = humaxObjectFactory.createDMRObject();

        dmr_play(hmx_dmr.getUrl(), hmx_dmr.getPlaySpeed());

        hmx_dmr.onReqPlay = function (url, speed) {
            dmr_play(url, speed);
        };
        hmx_dmr.onReqStop = function () {
            dmr_stop();
        };
        hmx_dmr.onReqPause = function () {
            dmr_pause();
        };
        hmx_dmr.onReqSeek = function (pos) {
            dmr_seek(pos);
        };
    }catch(e){console.log("plugin error : " + e)};

    function dmr_play(url, speed) {
        hmx_player.play(url, speed);
    };
    function dmr_pause() {
        hmx_player.pause();
    };
    function dmr_seek(position) {
        hmx_player.seek(position);
    };
    function dmr_stop() {
        hmx_player.stop();
        changeLocation('index');
    };
});

