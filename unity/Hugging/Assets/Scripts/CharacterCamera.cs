using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Photon.Pun;

public class CharacterCamera : MonoBehaviourPun
{
    public GameObject player;
    private float offsetX = 0;
    private float offsetY = 6.3f;
    private float offsetZ = -6.3f;

    private void Start()
    {
        if(!photonView.IsMine) {
            gameObject.SetActive(false);
        }
    }

    private void FixedUpdate()
    {
        if (!photonView.IsMine) return;
        Vector3 fixedPos = new Vector3(player.transform.position.x + offsetX, player.transform.position.y + offsetY, player.transform.position.z + offsetZ);
        transform.position = fixedPos;
        transform.rotation = Quaternion.Euler(player.transform.rotation.x + 17, player.transform.rotation.y, player.transform.rotation.z);
    }
}
