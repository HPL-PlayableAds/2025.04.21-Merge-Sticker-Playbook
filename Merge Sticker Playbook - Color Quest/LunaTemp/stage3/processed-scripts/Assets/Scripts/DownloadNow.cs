using System.Collections;
using System.Collections.Generic;
using Luna.Unity;
using UnityEngine;

public class DownloadNow : MonoBehaviour
{
    public string iosLink;
    public string androidLink;

    public void Download()
    {
        Playable.InstallFullGame(iosLink, androidLink);
    }
}
