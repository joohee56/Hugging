using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using Photon.Pun;
using Photon.Realtime;

public class HuggingLauncher : MonoBehaviourPunCallbacks
{
    public Text connectionStatus;
    public InputField nicknameField;
    public InputField roomName;
    private string gameVersion = "1";
    private int roomCnt = 1;

    private void Awake() {
        PhotonNetwork.AutomaticallySyncScene = true;
    }


    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if(PhotonNetwork.InRoom) {
            connectionStatus.text = PhotonNetwork.CurrentRoom.Name;
        } else {
            connectionStatus.text = PhotonNetwork.NetworkClientState.ToString();
        }
    }

    public void Connect() { 
        if(nicknameField.text.Equals(string.Empty)) return;
        PhotonNetwork.NickName = nicknameField.text;

        if(PhotonNetwork.IsConnected) {
            Debug.Log("이미 마스터 서버에 접속해있습니다.");
            PhotonNetwork.JoinLobby();
        } else {
            Debug.Log("서버 접속을 시도합니다.");
            PhotonNetwork.GameVersion = gameVersion;
            PhotonNetwork.ConnectUsingSettings();
        }
    }

    public override void OnConnectedToMaster() {
        Debug.Log("마스터 서버 접속에 성공하였습니다.");
        Debug.Log("이제 로비에 접속합니다.");
        PhotonNetwork.JoinLobby();
    }

    public override void OnJoinedLobby() {
        Debug.Log("로비 접속에 성공하였습니다.");
        PhotonNetwork.JoinOrCreateRoom("001", new RoomOptions{ MaxPlayers = 2 }, TypedLobby.Default);
    }

    public void joinRoom() {
        PhotonNetwork.JoinRoom(roomName.text);
    }


    public override void OnJoinedRoom()
    {
        PhotonNetwork.Instantiate("Cube", nicknameField.transform.position, Quaternion.identity);
        Debug.Log("방 접속에 성공하였습니다.");
    }

    public void leaveRoom() {
        PhotonNetwork.LeaveRoom();
    }
}
