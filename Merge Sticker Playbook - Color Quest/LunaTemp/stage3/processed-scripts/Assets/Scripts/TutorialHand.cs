using DG.Tweening;
using UnityEngine;

public class TutorialHand : MonoBehaviour
{
    public static TutorialHand Instance;

    public RectTransform handRectTransform;

    public Vector2 pointA;
    public Vector2 pointB;
    public float moveDuration = 1f;
    public float fadeDuration = 1f;

    private CanvasGroup canvasGroup;

    private void Awake()
    {
        if (Instance == null) Instance = this;
        else Destroy(gameObject);

        canvasGroup = GetComponent<CanvasGroup>();
        if (canvasGroup == null)
        {
            canvasGroup = gameObject.AddComponent<CanvasGroup>();
        }
    }

    private void Start()
    {
        StartHandAnimation();
    }

    private void StartHandAnimation()
    {
        Sequence handSequence = DOTween.Sequence();

        handRectTransform.anchoredPosition = pointA;
        canvasGroup.alpha = 1f;

        handSequence.Append(handRectTransform.DOAnchorPos(pointB, moveDuration).SetEase(Ease.InOutSine))
            .Append(canvasGroup.DOFade(0f, fadeDuration))
            .AppendCallback(() => handRectTransform.anchoredPosition = pointA)
            .SetLoops(-1);
    }
}
