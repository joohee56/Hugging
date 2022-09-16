using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class GameManager : MonoBehaviour
{
    public static GameManager instance; 
    public int selectedCharacterNum;
    public string subject = "우울";

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

    public void clickCharacterBtn(int characterNum) {
        selectedCharacterNum = characterNum;
        enter();
    }

    public void enter() {
        DontDestroyOnLoad(this.gameObject);
        SceneManager.LoadScene(1);  
    }
}
