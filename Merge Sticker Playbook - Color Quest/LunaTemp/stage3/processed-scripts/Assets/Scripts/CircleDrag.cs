using UnityEngine;
using UnityEngine.EventSystems;

public class CircleDrag : MonoBehaviour, IDragHandler, IBeginDragHandler, IEndDragHandler
{
    private Canvas canvas;
    private RectTransform rectTransform;
    private CanvasGroup canvasGroup;
    public static GameObject currentlyDragging;

    [Header("Circle Color")]
    public string circleType;

    [Header("Circle Settings")]
    private Vector2 originalPosition;
    private bool wasDroppedOnCircle = false;
    public bool WasDroppedOnCircle { get => wasDroppedOnCircle; set => wasDroppedOnCircle = value; }

    private void Awake()
    {
        canvas = GetComponentInParent<Canvas>();
        rectTransform = GetComponent<RectTransform>();
        canvasGroup = GetComponent<CanvasGroup>();
    }

    public void OnBeginDrag(PointerEventData eventData)
    {
        originalPosition = rectTransform.anchoredPosition;
        canvasGroup.alpha = 0.6f;
        canvasGroup.blocksRaycasts = false;
        currentlyDragging = gameObject;

        AudioManager.Instance.PlayButtonClick();

        TutorialHand.Instance.gameObject.SetActive(false);
    }

    public void OnDrag(PointerEventData eventData)
    {
        rectTransform.anchoredPosition += eventData.delta / canvas.scaleFactor;
    }

    public void OnEndDrag(PointerEventData eventData)
    {
        canvasGroup.alpha = 1f;
        canvasGroup.blocksRaycasts = true;

        if(!wasDroppedOnCircle) ReturnToOriginalPosition();
        
        currentlyDragging = null;
    }

    public void ReturnToOriginalPosition()
    {
        rectTransform.anchoredPosition = originalPosition;
    }
}