using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Photon.Pun;

public class MainCamera : MonoBehaviour
{
    [SerializeField]
    public List<GameObject> placePos; 
    public Dictionary<string, Vector3> startPos;

    private void Awake() {
        startPos = new Dictionary<string, Vector3>();
        startPos.Add("우울", placePos[4].transform.position);
        transform.position = startPos.GetValueOrDefault(GameManager.instance.subject);
    }
}
