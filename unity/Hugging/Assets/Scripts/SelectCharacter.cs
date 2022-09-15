using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class SelectCharacter : MonoBehaviour
{
    public static SelectCharacter instance; 
    public int selectedNum;
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
        selectedNum = characterNum;
        enter();
    }

    public void enter() {
        DontDestroyOnLoad(this.gameObject);
        SceneManager.LoadScene(1);
        
    }
}
