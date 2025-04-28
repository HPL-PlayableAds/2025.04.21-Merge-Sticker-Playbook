using DG.Tweening;
using UnityEngine;

public class EndCardAnimation : MonoBehaviour
{
    [Header("TO DISABLE")]
    public CanvasGroup canvasGroupInGame;
    public CanvasGroup canvasGroupInGameBG;

    [Header("TO ENABLE")]
    public CanvasGroup canvasGroupEndCard;
    public CanvasGroup canvasGroupEndCardBG;

    [Header("Fade In Settings")]
    public float fadeDuration = 1f;

    [Header("Download Button Settings")]
    public RectTransform downloadButton;
    public float scaleDuration = 0.5f;
    public float scaleFactor = 1.2f;

    private void OnEnable()
    {
        FadeOut();
    }

    private void FadeOut()
    {
        canvasGroupInGame.alpha = 0;
        canvasGroupInGame.interactable = false;
        canvasGroupInGame.blocksRaycasts = false;

        canvasGroupInGame.DOFade(0f, fadeDuration);

        FadeIn();
    }

    private void FadeIn()
    {
        canvasGroupEndCard.alpha = 0;
        canvasGroupEndCard.interactable = false;
        canvasGroupEndCard.blocksRaycasts = false;

        canvasGroupEndCardBG.DOFade(1f, fadeDuration / 2f)
            .OnComplete(() =>
            {
                canvasGroupInGameBG.alpha = 0f;
                canvasGroupInGameBG.interactable = false;
                canvasGroupInGameBG.blocksRaycasts = false;

                canvasGroupEndCard.DOFade(1f, fadeDuration / 2f)
                    .OnComplete(() =>
                    {
                        canvasGroupEndCard.interactable = true;
                        canvasGroupEndCard.blocksRaycasts = true;

                        ScaleUpAndDown();
                    });
            });
    }

    private void ScaleUpAndDown()
    {
        downloadButton.DOScale(scaleFactor, scaleDuration)
            .SetEase(Ease.InOutSine)
            .SetLoops(-1, LoopType.Yoyo);
    }
}
