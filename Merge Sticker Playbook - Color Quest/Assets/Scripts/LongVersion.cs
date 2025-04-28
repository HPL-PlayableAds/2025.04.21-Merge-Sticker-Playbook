using UnityEngine;

public class LongVersion : MonoBehaviour
{
    public static LongVersion Instance;

    [LunaPlaygroundField("Long Version")]
    public bool isLongVersion;

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

    private void Start()
    {
        
    }
}
