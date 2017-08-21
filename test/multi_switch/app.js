var url = {
    //mp4: ["http://www.quirksmode.org/html5/videos/big_buck_bunny.mp4", "https://media.w3.org/2010/05/sintel/trailer.mp4"],
    mp4: ["./Accedo_logo_video.mp4", "./toyStoryTrailer.mp4"],
    hls: ["http://192.168.200.137/testingVideo/EC2/quickFlix/index-1.m3u8", "http://playertest.longtailvideo.com/adaptive/oceans_aes/oceans_aes.m3u8"]
};

function log(msg) {
    var logArea = document.getElementById("logArea");
    logArea.innerHTML = logArea.innerHTML + msg + "<br/>";
}

window.app = {
    eventListeners: {},

    currentVideo: null,

    _createVideo: function (id) {
        var video = document.createElement("video");
        video.id = id;

        return video;
    },

    showVideo: function (v) {
        document.body.appendChild(v);
        this.currentVideo = v;

        for (var type in this.eventListeners) {
            v.addEventListener(type, this.dispatchEvent.bind(this, type));
        }

        this.dispatchEvent("durationchange");
    },

    hideVideo: function (v) {
        this.currentVideo = null;
        document.body.removeChild(v);

        for (var type in this.eventListeners) {
            v.removeEventListener(type, this.dispatchEvent.bind(this, type));
        }
    },

    start: function () {
        var playlist = url.mp4;

        var v1 = this._createVideo("v1");
        var v2 = this._createVideo("v2");

        log("play movie");
        this.showVideo(v1);
        v1.src = playlist[0];
        v1.play();

        // simulate a content break for ad
        setTimeout(function () {
            log("content break");
            v1.pause();
            this.hideVideo(v1);
            this.showVideo(v2);

            v2.addEventListener("ended", function () {
                log("content break ended, resume");
                this.hideVideo(v2);
                this.showVideo(v1);

                v1.play();
            }.bind(this));

            v2.src = playlist[1];
            v2.play();
        }.bind(this), 10000);
    },

    getCurrentTime: function () {
        if (!this.currentVideo) {
            return 0;
        }

        return this.currentVideo.currentTime;
    },

    getDuration: function () {
        if (!this.currentVideo) {
            return 0;
        }

        return this.currentVideo.duration;
    },

    addEventListener: function (type, listener) {
        if (!this.eventListeners[type]) {
            this.eventListeners[type] = [];
        }

        this.eventListeners[type].push(listener);

        if (this.currentVideo) {
            this.currentVideo.addEventListener(type, this.dispatchEvent.bind(this, type));
        }
    },

    dispatchEvent: function (type, obj) {
        if (!this.eventListeners[type]) {
            return;
        }

        for (var i = 0; i < this.eventListeners[type].length; i++) {
            this.eventListeners[type][i](obj);
        }
    },

    removeEventListener: function (type, listener) {
        if (!this.eventListeners[type]) {
            return;
        }

        var index = this.eventListeners[type].indexOf(listener);
        this.eventListeners[type].splice(index, 1);
    }
};