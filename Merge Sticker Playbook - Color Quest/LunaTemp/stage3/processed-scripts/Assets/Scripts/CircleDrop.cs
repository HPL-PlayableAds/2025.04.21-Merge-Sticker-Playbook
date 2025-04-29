using UnityEngine;
using UnityEngine.EventSystems;

public class CircleDrop : MonoBehaviour, IDropHandler
{
    public string circleType;

    public void OnDrop(PointerEventData eventData)
    {
        if (CircleDrag.currentlyDragging != null && CircleDrag.currentlyDragging.gameObject != gameObject)
        {
            CircleDrag.currentlyDragging.GetComponent<CircleDrag>().WasDroppedOnCircle = true;

            string resultColor = GetResultingColor(CircleDrag.currentlyDragging.GetComponent<CircleDrag>().circleType, circleType);

            if (LevelManager.Instance.TryCompleteColor(resultColor))
            {
                Debug.Log("Color matched: " + resultColor);
                CircleDrag.currentlyDragging.GetComponent<CircleAnimation>().PlayShrinkAndDestroy();
                GetComponent<CircleAnimation>().PlayShrinkAndDestroy();
                LevelManager.Instance.UpdateColorCounter();
                AudioManager.Instance.PlayMerging();
                AudioManager.Instance.PlayCorrectMerge();
            }
            else
            {
                CircleDrag.currentlyDragging.GetComponent<CircleDrag>().ReturnToOriginalPosition();
                AudioManager.Instance.PlayWrongMerge();
            }
        }
    }

    private string GetResultingColor(string dragType, string dropType)
    {
        if (dragType == dropType) return dragType;

        else if ((dragType == "Yellow" && dropType == "White") || (dragType == "White" && dropType == "Yellow"))
            return "Yellow";

        else if ((dragType == "Yellow" && dropType == "Red") || (dragType == "Red" && dropType == "Yellow"))
            return "Orange";

        else if ((dragType == "Red" && dropType == "White") || (dragType == "White" && dropType == "Red"))
            return "Red";

        else if ((dragType == "Red" && dropType == "Blue") || (dragType == "Blue" && dropType == "Red"))
            return "Purple";

        else if ((dragType == "Blue" && dropType == "White") || (dragType == "White" && dropType == "Blue"))
            return "Blue";

        else if ((dragType == "Blue" && dropType == "Yellow") || (dragType == "Yellow" && dropType == "Blue"))
            return "Green";

        else if ((dragType == "Brown" && dropType == "White") || (dragType == "White" && dropType == "Brown"))
            return "Brown";

        return null;
    }
}
