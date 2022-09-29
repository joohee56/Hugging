using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using Photon.Pun;
using Photon.Realtime;

public class HuggingLauncher : MonoBehaviourPunCallbacks
{
    public GameObject canvas;
    public Text roomNameText;
    public Text playerCountText;
    public Text playerListText;
    public string roomName;
    public string nickname;
    public static string subject;
    public int selectedCharacterNum;

    private string gameVersion = "1";
    public VoiceManager voiceManager;

    public GameObject isFullRoomAlert;

    public GameObject StartPanel;
    public GameObject SelectCharacter;
    public GameObject CounselingRoom;

    private void Awake()
    {
        PhotonNetwork.AutomaticallySyncScene = true;
        Connect();
    }

    public void SetCounselInfos(string infos)
    {
        string[] infoArr = infos.Split("|");
        Debug.Log("nickname : " + infoArr[0]);
        Debug.Log("roomName : " + infoArr[1]);
        Debug.Log("subject : " + infoArr[2]);
        this.nickname = infoArr[0];
        this.roomName = infoArr[1];
        HuggingLauncher.subject = infoArr[2];
    }

    private void Connect()
    {

        PhotonNetwork.GameVersion = gameVersion;
        PhotonNetwork.ConnectUsingSettings();
    }

    public override void OnConnectedToMaster()
    {
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
        PhotonNetwork.JoinOrCreateRoom(roomName, new RoomOptions { MaxPlayers = 2 }, TypedLobby.Default);
    }

    public override void OnJoinedRoom()
    {
        Debug.Log("on joined room");
        SelectCharacter.SetActive(false);
        CounselingRoom.SetActive(true);
        SetRoomInfos();
        SpawnPlayer();
        SetVoiceChat();
        photonView.RPC("SetPlayerList", RpcTarget.All);
    }

    private void SetRoomInfos()
    {
        PhotonNetwork.NickName = nickname;
        PhotonNetwork.LocalPlayer.NickName = nickname;
        roomNameText.text = roomName;
    }

    [PunRPC]
    public void SetPlayerList()
    {
        Debug.Log("set player list");
        playerCountText.text = PhotonNetwork.CurrentRoom.PlayerCount.ToString();
        string playerListStr = "";
        foreach (Player item in PhotonNetwork.PlayerList)
        {
            Debug.Log("player : " + item.ToString());
            playerListStr += item.NickName + "\n";
        }
        playerListText.text = playerListStr;
    }

    private void SpawnPlayer()
    {
        string characterName = "Ch_" + selectedCharacterNum.ToString();
        GameObject player = PhotonNetwork.Instantiate(characterName, Camera.main.transform.position, Quaternion.identity);

        Camera.main.gameObject.SetActive(false);
        GameObject characterCamera = PhotonNetwork.Instantiate("characterCamera", player.transform.position, Quaternion.identity);
        characterCamera.GetComponent<CharacterCamera>().player = player;


        // GameObject nickName = PhotonNetwork.Instantiate("Nickname", player.transform.position, Quaternion.identity);
        // nickName.transform.SetParent(canvas.transform);
        // nickName.GetComponent<Text>().text = PhotonNetwork.NickName;
        // nickName.GetComponent<Nickname>().player = player;
    }

    private void SetVoiceChat()
    {
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

    public void leaveRoom()
    {
        PhotonNetwork.LeaveRoom();
        Application.Quit();
    }

    public override void OnPlayerLeftRoom(Player otherPlayer)
    {
        photonView.RPC("SetPlayerList", RpcTarget.All);
    }

    private void OnDestroy()
    {
        if (PhotonNetwork.InRoom)
        {
            PhotonNetwork.LeaveRoom();
        }
    }
}