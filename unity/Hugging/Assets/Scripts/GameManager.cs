using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class GameManager : MonoBehaviour
{
    public static GameManager instance; 
    public int selectedCharacterNum;
    public string subject = "우울";
    public InputField roomName;

    //Singleton Pattern
    private void Awake()
    {
        if (instance != null)
        {
            Destroy(gameObject);
            return;
        }
        instance = this;
        DontDestroyOnLoad(gameObject);
    }

    public void ClickCharacterBtn(int characterNum) {
        selectedCharacterNum = characterNum;
        Enter();
    }

    public void Enter() {
        if (roomName.text.Length == 0) return;
        DontDestroyOnLoad(gameObject);
        SceneManager.LoadScene(1);  
    }
}
