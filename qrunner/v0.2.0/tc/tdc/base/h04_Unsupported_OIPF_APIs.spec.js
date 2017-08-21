// Humax_API_v3.5.1.docx
describe('4.	Unsupported OIPF APIs', function() {
    /*
    ApplicationPrivateData class (ApplicationPrivateData.cpp)
        Channel* currentChannel
        boolean wakeupApplication
        boolean wakeupOITF

    AVOutput class (AVOutput.cpp)
        string type
        boolean subtitleEnabled
        videoMode
        string digitalAudioMode
        string audioRange
        string tvAspectRatio

    Capabilities class (Capabilities.cpp)
        Integer extraSDVideoDecodes
        Integer extraHDVideoDecodes

    Configuration class (Configuration.cpp)
        string preferredAudioLanguage
        string preferredSubtitleLanguage
        string preferredUILanguage
        boolean timeShiftSynchronized
        Integer pvrPolicy
        Integer pvrSaveEpisodes
        Integer pvrSaveDays
        Integer pvrStartPadding
        Integer pvrEndPadding

    Download class (Download.cpp)
        Integer totalSize
        Integer state
        Integer amountDownloaded
        Integer reason
        Integer currentBitrate
        string name
        string id
        string contentURL
        string description
        Integer timeElapsed
        Integer timeRemaining
        string transferType
        string originSite
        string originSiteName
        string contentID
        string iconURL

    DownloadTrigger class (DownloadTrigger.cpp)
        Integer DownloadTrigger::registerDownload
        Integer DownloadTrigger::registerDownloadURL
        Integer DownloadTrigger::checkDownloadPossible
        Integer DownloadTrigger::registerDownloadFromCRID
        DrmAgent Class (DrmAgent.cpp)	Integer DrmAgent::DRMSystemStatus

    LocalSystem class (LocalSystem.cpp)
    boolean systemReady
    Integer releaseVersion
    Integer majorVersion
    Integer minorVersion
    string oipfProfile
    boolean pvrEnabled
    boolean ciplusEnabled
    boolean standbyState
    Integer timeCurrentPowerState
    Integer tvStandard
    Integer pvrSupport
    Integer LocalSystem::setScreenSize
    Integer LocalSystem::setPvrSupport
    Integer LocalSystem::setDigestCredentials
    Integer LocalSystem::clearDigestCredentials

    Programme class (Programme.cpp)
    string longName

    VideoBroadcast class (VideoBroadcast.cpp)
        string data

    VideoOnDemand class (VideoOnDemand.cpp)
        Integer nrTracks
        Integer currentTrackIndex
        boolean persist
        string oitfSourceIPAddress
        string oitfSourcePortAddress
        boolean oitfNoRTSPSessionControl
        string oitfRTSPSessionId
        boolean readyToPlay
        Integer currentRepresentation
        Integer maxRepresentation
        Integer minRepresentation

        Integer VideoOnDemand::setVolume
        Integer VideoOnDemand::next
        Integer VideoOnDemand::previous
        Integer VideoOnDemand::getVolume
*/
});