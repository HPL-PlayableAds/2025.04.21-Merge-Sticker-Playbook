using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AudioManager : MonoBehaviour
{
    public static AudioManager Instance;

    [Header("Audio Source")]
    public AudioSource audioSource;

    [Header("Audio Clips")]
    public AudioClip buttonClick;
    public AudioClip correctMerge;
    public AudioClip wrongMerge;
    public AudioClip merging;
    public AudioClip win;

    private void Awake()
    {
        if (Instance == null)
        {
            Instance = this;
            DontDestroyOnLoad(gameObject);
        }
        else
        {
            Destroy(gameObject);
        }
    }

    public void PlayButtonClick()
    {
        audioSource.PlayOneShot(buttonClick);
    }

    public void PlayCorrectMerge()
    {
        audioSource.PlayOneShot(correctMerge);
    }

    public void PlayWrongMerge()
    {
        audioSource.PlayOneShot(wrongMerge);
    }

    public void PlayMerging()
    {
        audioSource.PlayOneShot(merging);
    }

    public void PlayWin()
    {
        audioSource.PlayOneShot(win);
    }


}
