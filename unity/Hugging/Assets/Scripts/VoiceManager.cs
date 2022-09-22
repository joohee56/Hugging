using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using agora_gaming_rtc;
using agora_utilities;

public class VoiceManager : MonoBehaviour
{
    [SerializeField]
    private string appId;
    public string channelName = "";

    public static VoiceManager instance;

    internal IRtcEngine RtcEngine = null;

    public GameObject micOn, micOff;
    public bool micMute = true;

    private void Awake()
    {
        if (instance)
        {
            Destroy(gameObject);
        }
        else
        {
            instance = this;
            DontDestroyOnLoad(gameObject);
        }
    }
    // Start is called before the first frame update
    void Start()
    {
        RtcEngine = IRtcEngine.getEngine(appId);
        RtcEngine.SetLogFilter(LOG_FILTER.DEBUG | LOG_FILTER.INFO | LOG_FILTER.WARNING | LOG_FILTER.ERROR | LOG_FILTER.CRITICAL);

        RtcEngine.SetChannelProfile(CHANNEL_PROFILE.CHANNEL_PROFILE_LIVE_BROADCASTING);
        RtcEngine.OnJoinChannelSuccess = OnJoinChannelSuccessHandler;
        RtcEngine.OnUserJoined = OnUserJoined;
        //RtcEngine.OnUserOffline = onUserOffline;
        RtcEngine.OnLeaveChannel += OnLeaveChannelHandler;

        RtcEngine.OnWarning = (int warn, string msg) => {
            Debug.LogWarningFormat("Warning code:{0} msg:{1}", warn, IRtcEngine.GetErrorDescription(warn));
        };
        RtcEngine.OnError = HandleError;

        // assign user id here, or use 0 for local user
        TokenClient.Instance.RtcEngine = RtcEngine;
        //TokenClient.Instance.RtmClient = RtmClient;
        
    }

    private void Update()
    {
        PermissionHelper.RequestMicrophontPermission();
    }

    public void JoinChannel()
    {
        RtcEngine.EnableAudio();
        RtcEngine.SetDefaultMuteAllRemoteAudioStreams(true);
        RtcEngine.DisableVideo();
        RtcEngine.DisableVideoObserver();
        RtcEngine.SetClientRole(CLIENT_ROLE_TYPE.CLIENT_ROLE_BROADCASTER);

        TokenClient.Instance.GetTokens(channelName, 0,
            (rtcToken, rtmToken) =>
            {
                // join channel with token
                RtcEngine.JoinChannelByKey(rtcToken, channelName, null, 0);
                //mRtmClient.Login(rtmToken, UserName);
            }
        );
    }

    public void ToggleMicState()
    {
        micMute = !micMute;
        micOn.SetActive(!micMute);
        micOff.SetActive(micMute);

        if(micMute)
        {
            RtcEngine.AdjustRecordingSignalVolume(0);
        } else
        {
            RtcEngine.AdjustRecordingSignalVolume(100);
        }
    }

    private void OnJoinChannelSuccessHandler(string channelName, uint uid, int elapsed)
    {
        Debug.Log("JoinChannelSuccessHandler: uid = " + uid);
    }

    private void OnUserJoined(uint uid, int elapsed)
    {
        Debug.Log("Agora: onUserJoined: uid = " + uid + " elapsed = " + elapsed);
        // this is called in main thread

        // find a game object to render video stream from 'uid'
        Debug.Log(uid.ToString());
    }

    void OnLeaveChannelHandler(RtcStats stats)
    {
        Debug.Log("OnLeaveChannelSuccess ---- TEST");
        if(RtcEngine == null)
            return;
        RtcEngine.LeaveChannel();
    }

    private void HandleError(int error, string msg)
    {
        Debug.Log(string.Format("OnError err: {0}, msg: {1}", error, msg));
    }

    private void OnDestroy()
    {
        Debug.Log("OnDestroy");
        if (RtcEngine == null) return;
        RtcEngine.LeaveChannel();
    }
}
