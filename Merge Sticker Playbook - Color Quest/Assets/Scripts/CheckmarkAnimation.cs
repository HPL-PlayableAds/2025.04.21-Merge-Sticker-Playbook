using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class CheckmarkAnimation : MonoBehaviour
{
    public float scaleUpDuration = 0.5f;
    public float scaleUpAmount = 1.2f;

    private Vector3 originalScale;
    private RectTransform rectTransform;

    private void Awake()
    {
        rectTransform = GetComponent<RectTransform>();
        originalScale = rectTransform.localScale;
    }

    private void OnEnable()
    {
        PlayScaleUpAndBack();
    }

    public void PlayScaleUpAndBack()
    {
        rectTransform.DOScale(originalScale * scaleUpAmount, scaleUpDuration)
            .SetEase(Ease.InOutSine)
            .OnComplete(() =>
            {
                rectTransform.DOScale(originalScale, scaleUpDuration)
                .SetEase(Ease.InOutSine);
            });
    }
}
