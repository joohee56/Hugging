using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using Photon.Pun;
using Photon.Realtime;

public class HuggingLauncher : MonoBehaviourPunCallbacks
{
    public Text connectionStatus;
    private string gameVersion = "1";
    public VoiceManager voiceManager;

    private void Awake() {
        PhotonNetwork.AutomaticallySyncScene = true;
    }


    private void Start()
    {
        connect();
    }

    private void connect() { 
        //PhotonNetwork.NickName = nicknameField.text;
        PhotonNetwork.GameVersion = gameVersion;
        PhotonNetwork.ConnectUsingSettings();
    }

    public override void OnConnectedToMaster() {
        PhotonNetwork.JoinOrCreateRoom(GameManager.instance.roomName.text, new RoomOptions { MaxPlayers = 2 }, TypedLobby.Default);
    }

    public override void OnJoinedRoom()
    {       
        string characterName = "Ch_" + GameManager.instance.selectedCharacterNum.ToString();
        GameObject player = PhotonNetwork.Instantiate(characterName, Camera.main.transform.position, Quaternion.identity);
        
        Camera.main.gameObject.SetActive(false);
        GameObject characterCamera = PhotonNetwork.Instantiate("characterCamera", player.transform.position, Quaternion.identity);
        characterCamera.GetComponent<CharacterCamera>().player = player;

        voiceManager.channelName = PhotonNetwork.CurrentRoom.Name;
        voiceManager.JoinChannel();
    }

    public void leaveRoom() {
        PhotonNetwork.LeaveRoom();
        Application.Quit();
    }
}
