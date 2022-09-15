using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MainCamera : MonoBehaviour
{
    [SerializeField]
    public List<GameObject> placePos; 
    public Dictionary<string, Vector3> startPos;

    private void Awake() {
        startPos = new Dictionary<string, Vector3>();
        startPos.Add("우울", placePos[0].transform.position);

        gameObject.transform.position = startPos.GetValueOrDefault(SelectCharacter.instance.subject);
    }

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
