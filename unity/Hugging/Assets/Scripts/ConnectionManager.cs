using Photon.Pun;
using Photon.Realtime;
using UnityEngine;
using UnityEngine.UI;

public class ConnectionManager : MonoBehaviourPunCallbacks
{
    public Text ConnectionStatus;
    public Text IDText;
    public GameObject Cube;

    public Button ConnectBtn;

    void Start()
    {
        
    }

    void Update()
    {
        ConnectionStatus.text = PhotonNetwork.NetworkClientState.ToString();
    }

    public void Connect() { 
        PhotonNetwork.ConnectUsingSettings();
    }

    public override void OnConnectedToMaster()
  {
      PhotonNetwork.JoinRandomRoom();
  }

  public override void OnJoinedRoom()
  {
      PhotonNetwork.Instantiate("Cube", Cube.transform.position, Quaternion.identity);
  }

  public override void OnJoinRandomFailed(short returnCode, string message)
  {
      this.CreateRoom();
  }

  void CreateRoom()
  {
      PhotonNetwork.CreateRoom(null, new RoomOptions { MaxPlayers = 4 });
  }

    // Update is called once per frame
    // public override void OnConnectedToMaster()
    // {
    //     print("서버 접속 완료");
    //     PhotonNetwork.LocalPlayer.NickName = IDText.text;
    //     PhotonNetwork.JoinLobby();
    // }

    public override void OnJoinedLobby()
    {
        print("로비 접속 완료");
    }
}
