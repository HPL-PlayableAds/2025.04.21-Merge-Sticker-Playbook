using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine.SceneManagement;
using UnityEngine;

public class LevelManager : MonoBehaviour
{
    public static LevelManager Instance;

    [Header("Colors to Achieve")]
    public List<string> requiredColors = new List<string>();

    [Header("Object corresponding to color")]
    public List<GameObject> colorGoalObjects = new List<GameObject>();

    [Header("Object corresponding to color")]
    public List<GameObject> colorCheckmarkObjects = new List<GameObject>();

    [Header("Color GameObject Map")]
    public Dictionary<string, GameObject> colorGameObjectMap = new Dictionary<string, GameObject>();

    [Header("Color Checkmark Map")]
    public Dictionary<string, GameObject> colorCheckmarkMap = new Dictionary<string, GameObject>();

    [Header("Color counter")]
    private int maxColorCount = 0;
    public TextMeshProUGUI colorCounterText;

    [Header("End Card")]
    public GameObject EndCard;

    [Header("Level Settings")]
    public bool isLongVersion;
    public string nextLevelName;

    private void Awake()
    {
        if (Instance == null) Instance = this;
        else Destroy(gameObject);

        maxColorCount = requiredColors.Count;
    }

    private void Start()
    {
        PopulateMaps();

        UpdateColorCounter();
    }

    private void PopulateMaps()
    {
        colorGameObjectMap.Clear();
        colorCheckmarkMap.Clear();

        for (int i = 0; i < requiredColors.Count; i++)
        {
            if (i < colorGoalObjects.Count)
            {
                colorGameObjectMap[requiredColors[i]] = colorGoalObjects[i];
            }
        }

        for (int i = 0; i < requiredColors.Count; i++)
        {
            if (i < colorGoalObjects.Count)
            {
                colorCheckmarkMap[requiredColors[i]] = colorCheckmarkObjects[i];
            }
        }

    }

    public bool TryCompleteColor(string color)
    {
        if (requiredColors.Contains(color))
        {
            requiredColors.Remove(color);

            if (colorGameObjectMap.ContainsKey(color))
            {
                GameObject colorObject = colorGameObjectMap[color];
                if (colorObject != null) colorObject.SetActive(true);
            }

            if (colorCheckmarkMap.ContainsKey(color))
            {
                GameObject checkmarkObject = colorCheckmarkMap[color];
                if (checkmarkObject != null) checkmarkObject.SetActive(true);
            }

            if (requiredColors.Count == 0)
            {
                AudioManager.Instance.PlayWin();
                if (!LongVersion.Instance.isLongVersion) StartCoroutine(StartEndCard());
                else StartCoroutine(NextScene());
            }
            return true;
        }
        else return false;
    }

    public void UpdateColorCounter()
    {
        int remainingColors = requiredColors.Count;
        colorCounterText.text = $"Colors Restored: {maxColorCount - remainingColors}/{maxColorCount}";
    }

    private IEnumerator StartEndCard()
    {
        yield return new WaitForSeconds(1f);

        EndCard.SetActive(true);
    }

    private IEnumerator NextScene()
    {
        yield return new WaitForSeconds(1f);

        string currentSceneName = SceneManager.GetActiveScene().name;

        if (currentSceneName != "Level 3 Scene") SceneManager.LoadScene(nextLevelName);
        else StartCoroutine(StartEndCard());
    }
}
