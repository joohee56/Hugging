using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Agora.Rtc;
using Agora.Util;

public class VoiceManager : MonoBehaviour
{
    string appId = "d";
    string token = "";

    public static VoiceManager instance;

    internal IRtcEngine RtcEngine = null;

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
        RtcEngine = Agora.Rtc.RtcEngine.CreateAgoraRtcEngine();
        RtcEngineContext context = new RtcEngineContext(appId, 0,
                                        CHANNEL_PROFILE_TYPE.CHANNEL_PROFILE_LIVE_BROADCASTING,
                                        AUDIO_SCENARIO_TYPE.AUDIO_SCENARIO_DEFAULT);
        RtcEngine.Initialize(context);

        UserEventHandler handler = new UserEventHandler(this);
        RtcEngine.InitEventHandler(handler);
    }

    private void Update()
    {
        PermissionHelper.RequestMicrophontPermission();
    }

    public void joinChannel(string channelName)
    {
        RtcEngine.EnableAudio();
        RtcEngine.SetClientRole(CLIENT_ROLE_TYPE.CLIENT_ROLE_BROADCASTER);
        RtcEngine.JoinChannel(token, channelName);
    }

    public void leaveChannel()
    {
        RtcEngine.InitEventHandler(null);
        RtcEngine.LeaveChannel();
    }

    private void OnDestroy()
    {
        Debug.Log("OnDestroy");
        if (RtcEngine == null) return;
        RtcEngine.InitEventHandler(null);
        RtcEngine.LeaveChannel();
        RtcEngine.Dispose();
    }


    #region -- Agora Event ---

    internal class UserEventHandler : IRtcEngineEventHandler
    {
        private readonly VoiceManager _audioSample;

        internal UserEventHandler(VoiceManager audioSample)
        {
            _audioSample = audioSample;
        }


        public override void OnError(int err, string msg)
        {
            Debug.Log(string.Format("OnError err: {0}, msg: {1}", err, msg));
        }

        public override void OnJoinChannelSuccess(RtcConnection connection, int elapsed)
        {
            int build = 0;
            Debug.Log(string.Format("sdk version: ${0}",
                _audioSample.RtcEngine.GetVersion(ref build)));
            Debug.Log(
                string.Format("OnJoinChannelSuccess channelName: {0}, uid: {1}, elapsed: {2}",
                                connection.channelId, connection.localUid, elapsed));
        }

        public override void OnRejoinChannelSuccess(RtcConnection connection, int elapsed)
        {
            Debug.Log("OnRejoinChannelSuccess");
        }

        public override void OnLeaveChannel(RtcConnection connection, RtcStats stats)
        {
            Debug.Log("OnLeaveChannel");
        }

        public override void OnClientRoleChanged(RtcConnection connection, CLIENT_ROLE_TYPE oldRole, CLIENT_ROLE_TYPE newRole)
        {
            Debug.Log("OnClientRoleChanged");
        }

        public override void OnUserJoined(RtcConnection connection, uint uid, int elapsed)
        {
            Debug.Log(string.Format("OnUserJoined uid: ${0} elapsed: ${1}", uid, elapsed));
        }

        public override void OnUserOffline(RtcConnection connection, uint uid, USER_OFFLINE_REASON_TYPE reason)
        {
            Debug.Log(string.Format("OnUserOffLine uid: ${0}, reason: ${1}", uid,
                (int)reason));
        }
    }

    #endregion

    //void OnJoinChannelSuccessHandler(string channelName, uint uid, int elapsed) {
    //    Debug.Log(channelName);
    //    if(!photonView.IsMine) {
    //        return;
    //    }

    //    photonView.RPC("UpdateNetworedPlayer", RpcTarget.All, uid.ToString());

    //}

    //void OnUserJoinedHandler(uint uid, int elapsed)
    //{
    //    if (!photonView.IsMine)
    //    {
    //        return;
    //    }
    //    photonView.RPC("UpdateNetworedPlayer", RpcTarget.All, uid.ToString());

    //}

    //void OnLeaveChannelHandler(RtcStats stats) {
    //    Debug.Log("left");
    //}

    //void OnErrorHandler(int error, string msg) {
    //    Debug.Log("error msg:" + error + ": " + msg);
    //}

    //public void JoinVoiceChat(string roomName) {
    //    Debug.Log("joined " + roomName);
    //    rtcEngine.EnableAudio();
    //    rtcEngine.EnableLocalAudio(true);
    //    rtcEngine.JoinChannel(token, roomName);
    //}

    //public void leftVoiceChat() {
    //    rtcEngine.LeaveChannel();
    //}

    //private void OnDestroy() {
    //    IRtcEngine.Destroy();
    //}
}
