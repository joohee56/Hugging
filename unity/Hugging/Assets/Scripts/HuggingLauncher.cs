using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using Photon.Pun;
using Photon.Realtime;

public class HuggingLauncher : MonoBehaviourPunCallbacks
{
    public Text connectionStatus;
    public InputField roomName;
    public int selectedCharacterNum;
    public static string subject = "우울";

    private string gameVersion = "1";
    public VoiceManager voiceManager;

    [SerializeField]
    public GameObject isFullRoomAlert;

    public GameObject StartPanel;
    public GameObject SelectCharacter;
    public GameObject CounselingRoom;

    private void Awake()
    {
        PhotonNetwork.AutomaticallySyncScene = true;
        Connect();
    }

    private void Connect() { 
        //PhotonNetwork.NickName = nicknameField.text;
        PhotonNetwork.GameVersion = gameVersion;
        PhotonNetwork.ConnectUsingSettings();
    }

    public override void OnConnectedToMaster() {
        Debug.Log("connect to master");

        PhotonNetwork.JoinLobby();
    }

    public override void OnJoinedLobby()
    {
        StartPanel.SetActive(false);
        SelectCharacter.SetActive(true);
        CounselingRoom.SetActive(false);
    }

    public void Enter(int characterNum)
    {
        selectedCharacterNum = characterNum;
        if (roomName.text.Length == 0) return;
        PhotonNetwork.JoinOrCreateRoom(roomName.text, new RoomOptions { MaxPlayers = 2 }, TypedLobby.Default);

    }

    public void JoinRoom()
    {
    }

    public override void OnJoinedRoom()
    {
        Debug.Log("on joined room");
        SelectCharacter.SetActive(false);
        CounselingRoom.SetActive(true);

        string characterName = "Ch_" + selectedCharacterNum.ToString();
        GameObject player = PhotonNetwork.Instantiate(characterName, Camera.main.transform.position, Quaternion.identity);
        
        Camera.main.gameObject.SetActive(false);
        GameObject characterCamera = PhotonNetwork.Instantiate("characterCamera", player.transform.position, Quaternion.identity);
        characterCamera.GetComponent<CharacterCamera>().player = player;
        
        voiceManager.channelName = PhotonNetwork.CurrentRoom.Name;
        voiceManager.JoinChannel();
    }

    public override void OnJoinRoomFailed(short returnCode, string message)
    {
        Debug.Log("on join room failed");

        isFullRoomAlert.SetActive(true);
        Debug.Log(returnCode);
        PhotonNetwork.JoinLobby();
        
    }

    public void leaveRoom() {
        PhotonNetwork.LeaveRoom();
        Application.Quit();
    }

    private void OnDestroy()
    {
        if (PhotonNetwork.InRoom)
        {
            PhotonNetwork.LeaveRoom();
        }
    }

}
