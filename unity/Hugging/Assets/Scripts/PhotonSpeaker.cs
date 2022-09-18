using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using Photon.Voice.PUN;
using Photon.Voice.Unity;
using Photon.Pun;


public class PhotonSpeaker : MonoBehaviour
{
    public bool micOn = false;
    //public Text micStatus;
    
    public Recorder recorder;

    private void Awake()
    {
        PhotonVoiceView photonVoiceView = GetComponent<PhotonVoiceView>();
        if (photonVoiceView.IsRecorder)
        {
            this.recorder = photonVoiceView.RecorderInUse;
        }
    }

    private void Start()
    {
       // micStatus.text = "음소거 해제";
        recorder.TransmitEnabled = false;
    }

    /// <summary>
    /// Update is called every frame, if the MonoBehaviour is enabled.
    /// </summary>
    private void Update()
    {
        if(Input.GetKeyDown(KeyCode.M)) {
            micOnOff();
        }
    }

    public void micOnOff() {
        micOn = !micOn;
        recorder.TransmitEnabled = micOn;
        if(micOn == false) {
           // micStatus.text = "음소거 해제";
        } else {
            //micStatus.text = "음소거 활성화";
        }
    }
}
