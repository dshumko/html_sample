function listOfContainer()
{
	return 	defineCategory("dvb_remote") +
			defineCategory("dvb_reside") +
			defineCategory("remote") +
			defineCategory("reside") +
			defineCategory("hbb_dash")+
			defineCategory("advertisement") +
			defineCategory("itv-dash") +
			defineCategory("issues") +
			defineCategory("ligada") +
			defineCategory("hevc") +
			defineCategory("milplus") +
			defineCategory("ogg") +
			endOfCategory()
			
}

function listOfContents()
{
	/* defineContents("name","container","url") */
	return  "" +

			/* dvb-dash */
			defineContents("BBC_RD_CTV_EVENTS", "dvb_remote", "http://rdmedia.bbc.co.uk/dash/ondemand/testcard/1/client_manifest-ctv-events.mpd") +
			defineContents("BBC_RD_EVENTS", "dvb_remote", "http://rdmedia.bbc.co.uk/dash/ondemand/testcard/1/client_manifest-events.mpd") +
			defineContents("BBC_RD_WO_EVENTS", "dvb_remote", "http://rdmedia.bbc.co.uk/dash/ondemand/testcard/1/client_manifest.mpd") +
			"" +

			/* dash-reside */
			defineContents("DASH_BASEURL_TEST", "dvb_reside", "http://10.0.14.42/stream/dash-remote/dash-dvb-baseurl-test.mpd") +
			defineContents("DASH_Bigbuckbunny", "dvb_reside", "http://10.0.14.42/stream/dash-reside/big_buck_bunny_720p_h264-DRM/stream.mpd") +
			defineContents("DASH_Haw", "dvb_reside", "http://10.0.14.42/stream/dash-reside/Test-Haw-1080p-DRM/stream.mpd") +

			"" +

			/* hbb-dash */
			defineContents("SleepHollowS2E4", "hbb_dash", "http://networkten-a.akamaihd.net/new/2199827728001/201502/731/2199827728001_4073655856001_0L-sleepyh-SLEEPY2-004-20150223-EVN.mpd") +
			defineContents("SleepHollowS2E3", "hbb_dash", "http://networkten-a.akamaihd.net/new/2199827728001/201502/3497/2199827728001_4054108455001_0L-sleepyh-SLEEPY2-003-20150216-EVN.mpd") +
			defineContents("SleepHollowS2E3", "hbb_dash", "http://networkten-a.akamaihd.net/new/2199827728001/201502/291/2199827728001_4037530671001_0L-sleepyh-SLEEPY2-002-20150209-EVN.mpd") +

			defineContents("Neighbours", "hbb_dash", "http://networkten-a.akamaihd.net/new/2199827728001/201502/595/2199827728001_4074469544001_0L-neighb-NEB19-7067-20150224-EVN.mpd") +
			defineContents("ReefDoctorsS1E13", "hbb_dash", "http://networkten-a.akamaihd.net/2199827728001/201408/3377/2199827728001_3746621949001_0L-reefd-REEFD-013-20130907-EVN.mpd") +
			defineContents("ReefDoctorsS1E12", "hbb_dash", "http://networkten-a.akamaihd.net/2199827728001/201408/3724/2199827728001_3746621950001_0L-reefd-REEFD-012-20130831-EVN.mpd") +
			defineContents("Advertisement", "advertisement", "https://secure-ds.serving-sys.com/BurstingRes/Site-7180/Type-16/450a8b93-f38b-44ab-b755-be96854bf0b3.mp4") +

			/* itv-dash */
			defineContents("ITV-DASH", "itv-dash", "http://test.unified-streaming.com/itv/lorraine/lorraine.ism/.mpd") +
			defineContents("ITV-DASH-AD", "advertisement", "http://mp.adverts.itv.com/priority/wcrbmwa311030_bmw_f45_f45activetourer_30_f076_1200.mp4") +
			defineContents("ITV-DASH-Iss", "itv-dash", "http://itvpnp-usp.test.ott.irdeto.com/S3/1-9360-1373-001/2/20/VAR001/1-9360-1373-001_2_20_VAR001_DVBDASH.ism/.mpd") +
			
			/* switchTV 7 */
			defineContents("MegaWall_DASH_Live", "hbb_dash", "http://liveoutads.switchmedia.asia/megawall/megawall.stream/manifest.mpd") +
			defineContents("MegaWall_DASH_Live2", "hbb_dash", "http://liveoutads.switchmedia.asia/live/smil:liveenc01.smil/manifest.mpd") +
			defineContents("MegaWall_HLS_Live", "hbb_dash", "http://liveoutads.switchmedia.asia/live/smil:liveenc01.smil/playlist.m3u8") +
			defineContents("switchTV_VOD", "hbb_dash", "http://liveoutads.switchmedia.asia/80BA1E/vod-sot/vod/_definst_/smil:247/879827.smil/manifest_mvlist.mpd") +
			
			/* Issue */
			defineContents("Ligada-DASHDRM005", "issues", "http://192.168.0.19/asset/dash/reside/Ligada-DASHDRM005/index.mpd") +
			defineContents("DASH-Live-BBC1HD","issues","http://192.168.0.19/asset/dash/remote/bbc1hd.mpd") +
			defineContents("DASH-Live-BBC1HD_ORG","issues","http://192.168.0.19/asset/dash/remote/bbc1hd_org.mpd") +
			/* Ligada */
			defineContents("DASH-Redirection", "ligada", "http://192.168.0.19/stream/dash/ligada/Ligada-DASHDRM005/index.mpd") +
			defineContents("DASH-DA540300-Jit", "ligada", "http://192.168.0.19/asset/dash/ligada/Ligada-DA540300/DA540300.mpd") +
			defineContents("Ligada-DASHDRM006", "ligada", "http://192.168.0.19/asset/dash/ligada/Ligada-DASHDRM006/mpdserve.php") +
			defineContents("Ligada-DA540820", "ligada", "http://192.168.0.19/asset/dash/ligada/Ligada-DA540820/DA540820.mpd") +
			defineContents("Ligada-DA540850", "ligada", "http://192.168.0.19/asset/dash/ligada/Ligada-DA540850/DA540850.mpd") +
			defineContents("Ligada-DA540850-2", "ligada", "http://192.168.0.19/asset/dash/ligada/Ligada-DA540850/DA540850-2.mpd") +
			defineContents("Ligada-DA540880", "ligada", "http://192.168.0.19/asset/dash/ligada/org.hbbtv_DA540880/DA540880.mpd") +
			defineContents("Ligada-DA540630", "ligada", "http://192.168.0.19/asset/dash/ligada/org.hbbtv_DA540630/mpdserve.php") +
			defineContents("Ligada-DASH-BASEURL0020", "ligada", "http://192.168.0.19/asset/dash/ligada/org.hbbtv_DASH-BASEURL0020/BASEURL0020.mpd")+
			defineContents("Ligada-DASH-BASEURL0060", "ligada", "http://192.168.0.19/asset/dash/ligada/org.hbbtv_DASH-BASEURL0060/BASEURL0060.mpd")+
			defineContents("Ligada-DASH-SE0002", "ligada", "http://192.168.0.19/asset/dash/ligada/org.hbbtv_DASH-SE0002/DASH-SE0002.mpd")+
			defineContents("Ligada-DASH-EVENT0022", "ligada", "http://192.168.0.19/asset/dash/ligada/org.hbbtv_DASH-EVENT0022/mpdserve.php") +
			defineContents("Ligada-DASH-EVENT0020", "ligada", "http://192.168.0.19/asset/dash/ligada/org.hbbtv_DASH-EVENT0020/mpdserve.php") +
			defineContents("Ligada-DA540615", "ligada", "http://192.168.0.19/asset/dash/ligada/org.hbbtv_DA540615/mpdserve.php") +
			defineContents("Ligada-DA540650", "ligada", "http://192.168.0.19/asset/dash/ligada/org.hbbtv_DA540650/mpdserve.php") +
			defineContents("Ligada-DASHMISC0010", "ligada", "http://192.168.0.19/asset/dash/ligada/org.hbbtv_DASH-MISC0010/DASHMISC0010.mpd") +
			defineContents("Ligada-HTML50610", "ligada", "http://192.168.0.19/asset/dash/ligada/org.hbbtv_HTML50610/HTML50610.mpd") +
			defineContents("Ligada-HTML5-DASH034", "ligada", "http://192.168.0.19/asset/dash/ligada/org.hbbtv_HTML5-DASH034/HTML5-DASH034.mpd") +
			defineContents("Ligada-HTML5-DASH034Anc", "ligada", "http://192.168.0.19/asset/dash/ligada/org.hbbtv_HTML5-DASH034/HTML5-DASH034.mpd#t=10") +
			defineContents("Ligada-HTML5-DASH035Anc", "ligada", "http://192.168.0.19/asset/dash/ligada/org.hbbtv_HTML5-DASH035/HTML5-DASH035.mpd#period=bar") +
			defineContents("Ligada-HTML5-DASH036Anc", "ligada", "http://192.168.0.19/asset/dash/ligada/org.hbbtv_HTML5-DASH036/HTML5-DASH036.mpd#period=bar&t=10") +
			defineContents("Ligada-DA540610", "ligada", "http://192.168.0.19/asset/dash/ligada/org.hbbtv_DA540610/mpdserve.php") +
			defineContents("Ligada-ERRORHANDLE0060", "ligada", "http://192.168.0.19/asset/dash/ligada/org.hbbtv_DASH-ERRORHANDLE0060/mpdserve.php") +
			defineContents("Ligada-DASH-BASEURL0060_NoMPD", "ligada", "http://192.168.0.19/asset/dash/ligada/org.hbbtv_DASH-BASEURL0060/BASEURL0060_nompd.mpd")+
			defineContents("Ligada-DASH-BASEURL0060_NoInit", "ligada", "http://192.168.0.19/asset/dash/ligada/org.hbbtv_DASH-BASEURL0060/BASEURL0060_noinit.mpd")+
			defineContents("Ligada-DASH-BASEURL0060_NoSeg", "ligada", "http://192.168.0.19/asset/dash/ligada/org.hbbtv_DASH-BASEURL0060/BASEURL0060_noseg.mpd")+
			defineContents("Ligada-HTML50165", "ligada", "http://192.168.0.19/asset/dash/ligada/org.hbbtv_HTML50165/HTML50165.mpd")+
			/* HEVC */
			defineContents("HEVC-TS","hevc","http://192.168.0.19/asset/hevc/BRCM_Logo_7445C_HEVC_1920x1080p60.v1.ts")+
			defineContents("HEVC-MP4-1","hevc","http://192.168.0.19/asset/hevc/HEVC_24fps_8bits_yvid_SAM_0161-C4K_Sample.MP4")+
			defineContents("HEVC-MP4-2","hevc","http://192.168.0.19/asset/hevc/4K-TCL-H265_29fps_8bits.mp4")+
			defineContents("HEVC-MP4-3","hevc","http://192.168.0.19/asset/hevc/Fifa_WorldCup2014_Uruguay-4k-x265.mp4")+
			defineContents("HEVC-MKV","hevc","http://192.168.0.19/asset/hevc/KAZU_(SUBTITLES)_4K23.98p_HEVC_10Mbits.mkv")+

			/* MILPLUS */
			defineContents("AVCStreaming", "milplus", "http://aka-jcom-hls-vod.uliza.jp/vod/hls/1002/20150819_unenc/dash.mpd")+
			defineContents("AVCStreamingPRDY", "milplus", "http://aka-jcom-hls-vod.uliza.jp/vod/hls/1002/20150819/dash.mpd")+
			defineContents("HEVCStreaming", "milplus", "http://aka-jcom-hls-vod.uliza.jp/vod/hls/1002/football/football4K59p_selected_JCOM_HEVC_3840x2160_5994_P_21M_mux20998104_temporal_id0.mpd")+
			
			/* OGG */
			defineContents("ExampleOGG", "ogg", "http://192.168.0.19/asset/ogg/Example.ogg") +
			defineContents("ExampleOGG2", "ogg", "http://192.168.0.19/asset/ogg/Example2.ogg") +
			defineContents("ExampleMKV-Vorbis", "ogg", "http://10.0.14.42/stream/mkv/test4_vorbis.mkv") +

			/* Temporal test */
			defineContents("DASH provided by PHP", "unknown", "http://10.0.14.42/stream.php") +
			defineContents("DA541040", "unknown", "http://192.168.0.19/test.mpd") +
			defineContents("DASH-AVC3-BBCRD", "unknown", "http://rdmedia.bbc.co.uk/dash/ondemand/bbb/2/client_manifest-high_profile-common_init.mpd") +
			defineContents("iPlayerSample","unknown", "http://192.168.0.19/asset/dash/remote/test_all.mpd") +
			defineContents("DASH-Seven","unknown","http://yahoo7p-a.akamaihd.net/2376984108001/201506/1431/4295620654001/dash.mpd") +
			defineContents("4_3_to_16_9","unknown","http://192.168.0.19/asset/ts/43_to_169_change.ts") +
			defineContents("4_3_to_16_9_211","unknown","http://192.168.0.19/asset/ts/43_to_169_change211.ts") +
			defineContents("4_3_to_16_9MP4","unknown","http://192.168.0.19/asset/mp4/43_to_169_change.mp4") +
			defineContents("LigalHighE11_MKV", "unknown", "http://192.168.0.19/asset/mkv/ligalhigh11.mkv")+
			defineContents("LigalHighE11_MP4", "unknown", "http://192.168.0.19/asset/mp4/ligalhigh11.mp4")+
			defineContents("LigalHighE11_AVI", "unknown", "http://192.168.0.19/asset/avi/ligalhigh11.avi")+
			defineContents("00003540", "unknown", "http://192.168.0.19/asset/mp4/1280x720p_HP40_169_HEAAC_S_4200000.mp4")+
			defineContents("LigadaDirect-VRESHD005", "unknown", "http://hbbtv1.test/_TESTSUITE/TESTS/org.hbbtv_DASH-VRESHD005/DASH-VRESHD005.mpd")+
			defineContents("LigadaRemote-VRESHD005", "unknown", "http://192.168.0.19/asset/dash/remote/DASH-VRESHD005.mpd")+
			defineContents("LigadaDirect-VRESHD005-AACNMP4", "unknown", "http://192.168.0.19/asset/mp4/test_aac.mp4")+
			defineContents("Ligada-uk-prdy","unknown", "http://192.168.0.19/asset/dash/ligada/uk.co.freeview_ADINS1001/ADINS1001.mpd")+
			defineContents("SSTR","unknown","http://10.0.14.41/streams/sstr/h264-high_he-aac/h264-high_he-aac.ism/manifest")+
			defineContents("SSTR2","unknown","http://10.0.14.41/streams/sstr/h264-high_aac_1080p/h264-high_aac_1080p.ism/manifest") + 
			defineContents("MP4-4K","unknown","http://10.0.14.42/stream/mp4/mip2014_japan_video.mp4")+
			defineContents("TS-4K","unknown","http://10.0.14.42/stream/ts/mip2014_japan_video.ts")+
			endOfContents()

}




// --------- Do not touch below 



function defineCategory(name)
{
	    return ' {"name" : "' + name + '"}, ';
}
function endOfCategory()
{
	    return ' {"name" : "endoflist"}' ;
}
function defineContents(name, container, path)
{
	    return ' {"name" : "' + name + '", "container" : "' + container + '", "path" : "' + path + '" ,' + commonStr + '},';
}
function endOfContents()
{   
	    return ' {"name" : "endoflist", "container" : "endoflist", "drm" : "none", "path" : "notavailable", "external":"1" } ';
}

function dbmgr(fname,JSONstring,callback)
{
	    responseText = "";
	    commonStr = '"drm" : "none", "external" : "1"';

	    if(callback == dbResponseContainerData)
	    {
	        responseText = '[' + listOfContainer() + ']';
		}
	    else if(callback == dbResponseMediaData)
		{
			responseText = '[' + listOfContents() + ']';
		}
		callback();
}

