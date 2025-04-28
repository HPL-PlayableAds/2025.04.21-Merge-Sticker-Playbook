using DG.Tweening;
using UnityEngine;

public class CircleAnimation : MonoBehaviour
{
    public float shrinkDuration = 0.5f;

    public void PlayShrinkAndDestroy()
    {
        transform.DOScale(Vector3.zero, shrinkDuration)
            .SetEase(Ease.InBack)
            .OnComplete(() =>
            {
                Destroy(gameObject);
            });
    }
}
