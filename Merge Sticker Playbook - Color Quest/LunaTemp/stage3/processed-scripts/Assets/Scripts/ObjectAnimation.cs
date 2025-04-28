using DG.Tweening;
using UnityEngine;

public class ObjectAnimation : MonoBehaviour
{
    public float fadeDuration = 1f;

    private CanvasGroup canvasGroup;

    private void Awake()
    {
        canvasGroup = GetComponent<CanvasGroup>();
    }

    private void OnEnable()
    {
        FadeIn();
    }

    private void FadeIn()
    {
        canvasGroup.alpha = 0;
        canvasGroup.interactable = false;
        canvasGroup.blocksRaycasts = true;

        canvasGroup.DOFade(1, fadeDuration)
            .SetEase(Ease.InOutQuad);
    }
}
