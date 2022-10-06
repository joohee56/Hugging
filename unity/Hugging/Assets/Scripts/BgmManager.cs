using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BgmManager : MonoBehaviour
{
    public static BgmManager instance;
    private AudioSource audioSource;
    public GameObject audioOnBtn, audioOffBtn;

    private void Awake()
    {
        instance = this;
        //audioSource = GetComponent<AudioSource>();
    }

    public void audioOn()
    {
        //audioSource.Play();
        AudioListener.pause = false;
    }

    public void audioOff()
    {
        AudioListener.pause = true;
    }
}

