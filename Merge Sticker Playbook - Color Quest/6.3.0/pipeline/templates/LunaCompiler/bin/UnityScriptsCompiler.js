/**
 * @version 1.0.9250.28093
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*AudioManager start.*/
    Bridge.define("AudioManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            audioSource: null,
            buttonClick: null,
            correctMerge: null,
            wrongMerge: null,
            merging: null,
            win: null
        },
        methods: {
            /*AudioManager.Awake start.*/
            Awake: function () {
                if (UnityEngine.MonoBehaviour.op_Equality(AudioManager.Instance, null)) {
                    AudioManager.Instance = this;
                    UnityEngine.Object.DontDestroyOnLoad(this.gameObject);
                } else {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }
            },
            /*AudioManager.Awake end.*/

            /*AudioManager.PlayButtonClick start.*/
            PlayButtonClick: function () {
                this.audioSource.PlayOneShot(this.buttonClick);
            },
            /*AudioManager.PlayButtonClick end.*/

            /*AudioManager.PlayCorrectMerge start.*/
            PlayCorrectMerge: function () {
                this.audioSource.PlayOneShot(this.correctMerge);
            },
            /*AudioManager.PlayCorrectMerge end.*/

            /*AudioManager.PlayWrongMerge start.*/
            PlayWrongMerge: function () {
                this.audioSource.PlayOneShot(this.wrongMerge);
            },
            /*AudioManager.PlayWrongMerge end.*/

            /*AudioManager.PlayMerging start.*/
            PlayMerging: function () {
                this.audioSource.PlayOneShot(this.merging);
            },
            /*AudioManager.PlayMerging end.*/

            /*AudioManager.PlayWin start.*/
            PlayWin: function () {
                this.audioSource.PlayOneShot(this.win);
            },
            /*AudioManager.PlayWin end.*/


        }
    });
    /*AudioManager end.*/

    /*CheckmarkAnimation start.*/
    Bridge.define("CheckmarkAnimation", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            scaleUpDuration: 0,
            scaleUpAmount: 0,
            originalScale: null,
            rectTransform: null
        },
        ctors: {
            init: function () {
                this.originalScale = new UnityEngine.Vector3();
                this.scaleUpDuration = 0.5;
                this.scaleUpAmount = 1.2;
            }
        },
        methods: {
            /*CheckmarkAnimation.Awake start.*/
            Awake: function () {
                this.rectTransform = this.GetComponent(UnityEngine.RectTransform);
                this.originalScale = this.rectTransform.localScale.$clone();
            },
            /*CheckmarkAnimation.Awake end.*/

            /*CheckmarkAnimation.OnEnable start.*/
            OnEnable: function () {
                this.PlayScaleUpAndBack();
            },
            /*CheckmarkAnimation.OnEnable end.*/

            /*CheckmarkAnimation.PlayScaleUpAndBack start.*/
            PlayScaleUpAndBack: function () {
                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(this.rectTransform, this.originalScale.$clone().clone().scale( this.scaleUpAmount ), this.scaleUpDuration), DG.Tweening.Ease.InOutSine), Bridge.fn.bind(this, function () {
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(this.rectTransform, this.originalScale.$clone(), this.scaleUpDuration), DG.Tweening.Ease.InOutSine);
                }));
            },
            /*CheckmarkAnimation.PlayScaleUpAndBack end.*/


        }
    });
    /*CheckmarkAnimation end.*/

    /*CircleAnimation start.*/
    Bridge.define("CircleAnimation", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            shrinkDuration: 0
        },
        ctors: {
            init: function () {
                this.shrinkDuration = 0.5;
            }
        },
        methods: {
            /*CircleAnimation.PlayShrinkAndDestroy start.*/
            PlayShrinkAndDestroy: function () {
                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(this.transform, pc.Vec3.ZERO.clone(), this.shrinkDuration), DG.Tweening.Ease.InBack), Bridge.fn.bind(this, function () {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }));
            },
            /*CircleAnimation.PlayShrinkAndDestroy end.*/


        }
    });
    /*CircleAnimation end.*/

    /*CircleDrag start.*/
    Bridge.define("CircleDrag", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IDragHandler,UnityEngine.EventSystems.IBeginDragHandler,UnityEngine.EventSystems.IEndDragHandler],
        statics: {
            fields: {
                currentlyDragging: null
            }
        },
        fields: {
            canvas: null,
            rectTransform: null,
            canvasGroup: null,
            circleType: null,
            originalPosition: null,
            wasDroppedOnCircle: false
        },
        props: {
            WasDroppedOnCircle: {
                get: function () {
                    return this.wasDroppedOnCircle;
                },
                set: function (value) {
                    this.wasDroppedOnCircle = value;
                }
            }
        },
        alias: [
            "OnBeginDrag", "UnityEngine$EventSystems$IBeginDragHandler$OnBeginDrag",
            "OnDrag", "UnityEngine$EventSystems$IDragHandler$OnDrag",
            "OnEndDrag", "UnityEngine$EventSystems$IEndDragHandler$OnEndDrag"
        ],
        ctors: {
            init: function () {
                this.originalPosition = new UnityEngine.Vector2();
                this.wasDroppedOnCircle = false;
            }
        },
        methods: {
            /*CircleDrag.Awake start.*/
            Awake: function () {
                this.canvas = this.GetComponentInParent(UnityEngine.Canvas);
                this.rectTransform = this.GetComponent(UnityEngine.RectTransform);
                this.canvasGroup = this.GetComponent(UnityEngine.CanvasGroup);
            },
            /*CircleDrag.Awake end.*/

            /*CircleDrag.OnBeginDrag start.*/
            OnBeginDrag: function (eventData) {
                this.originalPosition = this.rectTransform.anchoredPosition.$clone();
                this.canvasGroup.alpha = 0.6;
                this.canvasGroup.blocksRaycasts = false;
                CircleDrag.currentlyDragging = this.gameObject;

                AudioManager.Instance.PlayButtonClick();

                TutorialHand.Instance.gameObject.SetActive(false);
            },
            /*CircleDrag.OnBeginDrag end.*/

            /*CircleDrag.OnDrag start.*/
            OnDrag: function (eventData) {
                this.rectTransform.anchoredPosition = this.rectTransform.anchoredPosition.$clone().add( eventData.delta.$clone().scale( 1.0 / ( this.canvas.scaleFactor ) ) );
            },
            /*CircleDrag.OnDrag end.*/

            /*CircleDrag.OnEndDrag start.*/
            OnEndDrag: function (eventData) {
                this.canvasGroup.alpha = 1.0;
                this.canvasGroup.blocksRaycasts = true;

                if (!this.wasDroppedOnCircle) {
                    this.ReturnToOriginalPosition();
                }

                CircleDrag.currentlyDragging = null;
            },
            /*CircleDrag.OnEndDrag end.*/

            /*CircleDrag.ReturnToOriginalPosition start.*/
            ReturnToOriginalPosition: function () {
                this.rectTransform.anchoredPosition = this.originalPosition.$clone();
            },
            /*CircleDrag.ReturnToOriginalPosition end.*/


        }
    });
    /*CircleDrag end.*/

    /*CircleDrop start.*/
    Bridge.define("CircleDrop", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IDropHandler],
        fields: {
            circleType: null
        },
        alias: ["OnDrop", "UnityEngine$EventSystems$IDropHandler$OnDrop"],
        methods: {
            /*CircleDrop.OnDrop start.*/
            OnDrop: function (eventData) {
                if (UnityEngine.GameObject.op_Inequality(CircleDrag.currentlyDragging, null) && UnityEngine.GameObject.op_Inequality(CircleDrag.currentlyDragging.gameObject, this.gameObject)) {
                    CircleDrag.currentlyDragging.GetComponent(CircleDrag).WasDroppedOnCircle = true;

                    var resultColor = this.GetResultingColor(CircleDrag.currentlyDragging.GetComponent(CircleDrag).circleType, this.circleType);

                    if (LevelManager.Instance.TryCompleteColor(resultColor)) {
                        UnityEngine.Debug.Log$1("Color matched: " + (resultColor || ""));
                        CircleDrag.currentlyDragging.GetComponent(CircleAnimation).PlayShrinkAndDestroy();
                        this.GetComponent(CircleAnimation).PlayShrinkAndDestroy();
                        LevelManager.Instance.UpdateColorCounter();
                        AudioManager.Instance.PlayMerging();
                        AudioManager.Instance.PlayCorrectMerge();
                    } else {
                        CircleDrag.currentlyDragging.GetComponent(CircleDrag).ReturnToOriginalPosition();
                        AudioManager.Instance.PlayWrongMerge();
                    }
                }
            },
            /*CircleDrop.OnDrop end.*/

            /*CircleDrop.GetResultingColor start.*/
            GetResultingColor: function (dragType, dropType) {
                if (Bridge.referenceEquals(dragType, dropType)) {
                    return dragType;
                } else {
                    if ((Bridge.referenceEquals(dragType, "Yellow") && Bridge.referenceEquals(dropType, "White")) || (Bridge.referenceEquals(dragType, "White") && Bridge.referenceEquals(dropType, "Yellow"))) {
                        return "Yellow";
                    } else {
                        if ((Bridge.referenceEquals(dragType, "Yellow") && Bridge.referenceEquals(dropType, "Red")) || (Bridge.referenceEquals(dragType, "Red") && Bridge.referenceEquals(dropType, "Yellow"))) {
                            return "Orange";
                        } else {
                            if ((Bridge.referenceEquals(dragType, "Red") && Bridge.referenceEquals(dropType, "White")) || (Bridge.referenceEquals(dragType, "White") && Bridge.referenceEquals(dropType, "Red"))) {
                                return "Red";
                            } else {
                                if ((Bridge.referenceEquals(dragType, "Red") && Bridge.referenceEquals(dropType, "Blue")) || (Bridge.referenceEquals(dragType, "Blue") && Bridge.referenceEquals(dropType, "Red"))) {
                                    return "Purple";
                                } else {
                                    if ((Bridge.referenceEquals(dragType, "Blue") && Bridge.referenceEquals(dropType, "White")) || (Bridge.referenceEquals(dragType, "White") && Bridge.referenceEquals(dropType, "Blue"))) {
                                        return "Blue";
                                    } else {
                                        if ((Bridge.referenceEquals(dragType, "Blue") && Bridge.referenceEquals(dropType, "Yellow")) || (Bridge.referenceEquals(dragType, "Yellow") && Bridge.referenceEquals(dropType, "Blue"))) {
                                            return "Green";
                                        } else {
                                            if ((Bridge.referenceEquals(dragType, "Brown") && Bridge.referenceEquals(dropType, "White")) || (Bridge.referenceEquals(dragType, "White") && Bridge.referenceEquals(dropType, "Brown"))) {
                                                return "Brown";
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                return null;
            },
            /*CircleDrop.GetResultingColor end.*/


        }
    });
    /*CircleDrop end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction");
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
                    return this.t.active && !DG.Tweening.TweenExtensions.IsComplete(this.t);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null,
            elapsedLoops: 0
        },
        props: {
            keepWaiting: {
                get: function () {
                    return this.t.active && DG.Tweening.TweenExtensions.CompletedLoops(this.t) < this.elapsedLoops;
                }
            }
        },
        ctors: {
            ctor: function (tween, elapsedLoops) {
                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.elapsedLoops = elapsedLoops;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForKill", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
                    return this.t.active;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForPosition", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null,
            position: 0
        },
        props: {
            keepWaiting: {
                get: function () {
                    return this.t.active && this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) < this.position;
                }
            }
        },
        ctors: {
            ctor: function (tween, position) {
                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.position = position;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForRewind", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
                    return this.t.active && (!this.t.playedOnce || this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) > 0);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForStart", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
                    return this.t.active && !this.t.playedOnce;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleAudio start.*/
    Bridge.define("DG.Tweening.DOTweenModuleAudio", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleAudio.DOFade:static start.*/
                /**
                 * Tweens an AudioSource's volume to the given value.
                 Also stores the AudioSource as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.AudioSource}           target      
                 * @param   {number}                            endValue    The end value to reach (0 to 1)
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
                    if (endValue < 0) {
                        endValue = 0;
                    } else {
                        if (endValue > 1) {
                            endValue = 1;
                        }
                    }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.volume;
                    }, function (x) {
                        target.volume = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPitch:static start.*/
                /**
                 * Tweens an AudioSource's pitch to the given value.
                 Also stores the AudioSource as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.AudioSource}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPitch: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.pitch;
                    }, function (x) {
                        target.pitch = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPitch:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOSetFloat:static start.*/
                /**
                 * Tweens an AudioMixer's exposed float to the given value.
                 Also stores the AudioMixer as the tween's target so it can be used for filtered operations.
                 Note that you need to manually expose a float in an AudioMixerGroup in order to be able to tween it from an AudioMixer.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}      target       
                 * @param   {string}                            floatName    Name given to the exposed float to set
                 * @param   {number}                            endValue     The end value to reach
                 * @param   {number}                            duration     The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOSetFloat: function (target, floatName, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$4(function () {
                        var currVal = { };
                        target.GetFloat(floatName, currVal);
                        return currVal.v;
                    }, function (x) {
                        target.SetFloat(floatName, x);
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOSetFloat:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOComplete:static start.*/
                /**
                 * Completes all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens completed
                 (meaning the tweens that don't have infinite loops and were not already complete)
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target           
                 * @param   {boolean}                         withCallbacks    For Sequences only: if TRUE also internal Sequence callbacks will be fired,
                 otherwise they will be ignored
                 * @return  {number}
                 */
                DOComplete: function (target, withCallbacks) {
                    if (withCallbacks === void 0) { withCallbacks = false; }
                    return DG.Tweening.DOTween.Complete(target, withCallbacks);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOComplete:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOKill:static start.*/
                /**
                 * Kills all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens killed.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target      
                 * @param   {boolean}                         complete    If TRUE completes the tween before killing it
                 * @return  {number}
                 */
                DOKill: function (target, complete) {
                    if (complete === void 0) { complete = false; }
                    return DG.Tweening.DOTween.Kill(target, complete);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOKill:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOFlip:static start.*/
                /**
                 * Flips the direction (backwards if it was going forward or viceversa) of all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens flipped.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOFlip: function (target) {
                    return DG.Tweening.DOTween.Flip(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOFlip:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOGoto:static start.*/
                /**
                 * Sends to the given position all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens involved.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target     
                 * @param   {number}                          to         Time position to reach
                 (if higher than the whole tween duration the tween will simply reach its end)
                 * @param   {boolean}                         andPlay    If TRUE will play the tween after reaching the given position, otherwise it will pause it
                 * @return  {number}
                 */
                DOGoto: function (target, to, andPlay) {
                    if (andPlay === void 0) { andPlay = false; }
                    return DG.Tweening.DOTween.Goto(target, to, andPlay);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOGoto:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPause:static start.*/
                /**
                 * Pauses all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens paused.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPause: function (target) {
                    return DG.Tweening.DOTween.Pause(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPause:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlay:static start.*/
                /**
                 * Plays all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlay: function (target) {
                    return DG.Tweening.DOTween.Play(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlay:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlayBackwards:static start.*/
                /**
                 * Plays backwards all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlayBackwards: function (target) {
                    return DG.Tweening.DOTween.PlayBackwards(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlayBackwards:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlayForward:static start.*/
                /**
                 * Plays forward all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlayForward: function (target) {
                    return DG.Tweening.DOTween.PlayForward(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlayForward:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DORestart:static start.*/
                /**
                 * Restarts all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens restarted.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DORestart: function (target) {
                    return DG.Tweening.DOTween.Restart(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DORestart:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DORewind:static start.*/
                /**
                 * Rewinds all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens rewinded.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DORewind: function (target) {
                    return DG.Tweening.DOTween.Rewind(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DORewind:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOSmoothRewind:static start.*/
                /**
                 * Smoothly rewinds all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens rewinded.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOSmoothRewind: function (target) {
                    return DG.Tweening.DOTween.SmoothRewind(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOSmoothRewind:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOTogglePause:static start.*/
                /**
                 * Toggles the paused state (plays if it was paused, pauses if it was playing) of all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens involved.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOTogglePause: function (target) {
                    return DG.Tweening.DOTween.TogglePause(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOTogglePause:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleAudio end.*/

    /*DG.Tweening.DOTweenModulePhysics start.*/
    Bridge.define("DG.Tweening.DOTweenModulePhysics", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModulePhysics.DOMove:static start.*/
                /**
                 * Tweens a Rigidbody's position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMove: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMove:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveX:static start.*/
                /**
                 * Tweens a Rigidbody's X position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveX: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( endValue, 0, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveX:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveY:static start.*/
                /**
                 * Tweens a Rigidbody's Y position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveY: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveY:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveZ:static start.*/
                /**
                 * Tweens a Rigidbody's Z position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveZ: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveZ:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DORotate:static start.*/
                /**
                 * Tweens a Rigidbody's rotation to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {DG.Tweening.RotateMode}            mode        Rotation mode
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DORotate: function (target, endValue, duration, mode) {
                    if (mode === void 0) { mode = 0; }
                    var t = DG.Tweening.DOTween.To$9(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), t, target);
                    t.plugOptions.rotateMode = mode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DORotate:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLookAt:static start.*/
                /**
                 * Tweens a Rigidbody's rotation so that it will look towards the given position.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target            
                 * @param   {UnityEngine.Vector3}               towards           The position to look at
                 * @param   {number}                            duration          The duration of the tween
                 * @param   {DG.Tweening.AxisConstraint}        axisConstraint    Eventual axis constraint for the rotation
                 * @param   {?UnityEngine.Vector3}              up                The vector that defines in which direction up is (default: Vector3.up)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLookAt: function (target, towards, duration, axisConstraint, up) {
                    if (axisConstraint === void 0) { axisConstraint = 0; }
                    if (up === void 0) { up = null; }
                    var t = DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.DOTween.To$9(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), towards.$clone(), duration), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetLookAt);
                    t.plugOptions.axisConstraint = axisConstraint;
                    t.plugOptions.up = (pc.Vec3.equals( up, null )) ? pc.Vec3.UP.clone() : System.Nullable.getValue(up);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLookAt:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOJump:static start.*/
                /**
                 * Tweens a Rigidbody's position to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}    target       
                 * @param   {UnityEngine.Vector3}      endValue     The end value to reach
                 * @param   {number}                   jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                   numJumps     Total number of jumps
                 * @param   {number}                   duration     The duration of the tween
                 * @param   {boolean}                  snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJump: function (target, endValue, jumpPower, numJumps, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, jumpPower, 0 ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.position.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( endValue.x, 0, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, 0, endValue.z ), duration), DG.Tweening.AxisConstraint.Z, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, yTween, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = target.position.$clone();
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedPercentage(yTween), DG.Tweening.Ease.OutQuad);
                        target.MovePosition(pos);
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOJump:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOPath:static start.*/
                /**
                 * Tweens a Rigidbody's position through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations.
                 <p>NOTE: to tween a rigidbody correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target        
                 * @param   {Array.<UnityEngine.Vector3>}       path          The waypoints to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path (useless in case of Linear paths): higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOPath$1:static start.*/
                DOPath$1: function (target, path, duration, pathMode) {
                    if (pathMode === void 0) { pathMode = 1; }
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), path, duration), target);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOPath$1:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath:static start.*/
                /**
                 * Tweens a Rigidbody's localPosition through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations
                 <p>NOTE: to tween a rigidbody correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOLocalPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target        
                 * @param   {Array.<UnityEngine.Vector3>}       path          The waypoint to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path: higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLocalPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath$1:static start.*/
                DOLocalPath$1: function (target, path, duration, pathMode) {
                    if (pathMode === void 0) { pathMode = 1; }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, path, duration), target);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath$1:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModulePhysics end.*/

    /*DG.Tweening.DOTweenModulePhysics2D start.*/
    Bridge.define("DG.Tweening.DOTweenModulePhysics2D", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModulePhysics2D.DOMove:static start.*/
                /**
                 * Tweens a Rigidbody2D's position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMove: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMove:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveX:static start.*/
                /**
                 * Tweens a Rigidbody2D's X position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveX: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveX:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveY:static start.*/
                /**
                 * Tweens a Rigidbody2D's Y position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveY: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveY:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DORotate:static start.*/
                /**
                 * Tweens a Rigidbody2D's rotation to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DORotate: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DORotate:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOJump:static start.*/
                /**
                 * Tweens a Rigidbody2D's position to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations.
                 <p>IMPORTANT: a rigidbody2D can't be animated in a jump arc using MovePosition, so the tween will directly set the position</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}    target       
                 * @param   {UnityEngine.Vector2}        endValue     The end value to reach
                 * @param   {number}                     jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                     numJumps     Total number of jumps
                 * @param   {number}                     duration     The duration of the tween
                 * @param   {boolean}                    snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJump: function (target, endValue, jumpPower, numJumps, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, function (x) {
                        target.position = x.$clone();
                    }, new pc.Vec2( 0, jumpPower ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.position.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, function (x) {
                        target.position = x.$clone();
                    }, new pc.Vec2( endValue.x, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, yTween, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = UnityEngine.Vector3.FromVector2(target.position.$clone());
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedPercentage(yTween), DG.Tweening.Ease.OutQuad);
                        target.MovePosition$1(pos);
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOJump:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOPath:static start.*/
                /**
                 * Tweens a Rigidbody2D's position through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations.
                 <p>NOTE: to tween a Rigidbody2D correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target        
                 * @param   {Array.<UnityEngine.Vector2>}       path          The waypoints to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path (useless in case of Linear paths): higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var len = path.length;
                    var path3D = System.Array.init(len, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        path3D[i] = UnityEngine.Vector3.FromVector2(path[i].$clone());
                    }
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return UnityEngine.Vector3.FromVector2(target.position);
                    }, function (x) {
                        target.MovePosition$1(x);
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path3D, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOPath$1:static start.*/
                DOPath$1: function (target, path, duration, pathMode) {
                    if (pathMode === void 0) { pathMode = 1; }
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return UnityEngine.Vector3.FromVector2(target.position);
                    }, function (x) {
                        target.MovePosition$1(x);
                    }, path, duration), target);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOPath$1:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath:static start.*/
                /**
                 * Tweens a Rigidbody2D's localPosition through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 <p>NOTE: to tween a Rigidbody2D correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOLocalPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target        
                 * @param   {Array.<UnityEngine.Vector2>}       path          The waypoint to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path: higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLocalPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var len = path.length;
                    var path3D = System.Array.init(len, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        path3D[i] = UnityEngine.Vector3.FromVector2(path[i].$clone());
                    }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition$1(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path3D, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1:static start.*/
                DOLocalPath$1: function (target, path, duration, pathMode) {
                    if (pathMode === void 0) { pathMode = 1; }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition$1(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, path, duration), target);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModulePhysics2D end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    Bridge.define("DG.Tweening.DOTweenModuleSprite", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleSprite.DOColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color to the given value.
                 Also stores the spriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}        target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOFade:static start.*/
                /**
                 * Tweens a Material's alpha color to the given value.
                 Also stores the spriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}        target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOGradientColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}    target      
                 * @param   {pc.ColorGradient}              gradient    The gradient to use
                 * @param   {number}                        duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleSprite.DOColor(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOBlendableColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the SpriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}    target      
                 * @param   {UnityEngine.Color}             endValue    The value to tween to
                 * @param   {number}                        duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor: function (target, endValue, duration) {
                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleSprite.DOBlendableColor:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI.DOFade:static start.*/
                /**
                 * Tweens a CanvasGroup's alpha color to the given value.
                 Also stores the canvasGroup as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.CanvasGroup}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.alpha;
                    }, function (x) {
                        target.alpha = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static start.*/
                /**
                 * Tweens an Graphic's alpha color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}            target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$1: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static start.*/
                /**
                 * Tweens an Image's alpha color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$2: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static start.*/
                /**
                 * Tweens a Outline's effectColor alpha to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$3: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static start.*/
                /**
                 * Tweens a Text's alpha color to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$4: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor:static start.*/
                /**
                 * Tweens an Graphic's color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}            target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static start.*/
                /**
                 * Tweens an Image's color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$1: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static start.*/
                /**
                 * Tweens a Outline's effectColor to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$2: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static start.*/
                /**
                 * Tweens a Text's color to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$3: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static start.*/
                /**
                 * Tweens an Image's fillAmount to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {number}                            endValue    The end value to reach (0 to 1)
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFillAmount: function (target, endValue, duration) {
                    if (endValue > 1) {
                        endValue = 1;
                    } else {
                        if (endValue < 0) {
                            endValue = 0;
                        }
                    }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.fillAmount;
                    }, function (x) {
                        target.fillAmount = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static start.*/
                /**
                 * Tweens an Image's colors using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}    target      
                 * @param   {pc.ColorGradient}        gradient    The gradient to use
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleUI.DOColor$1(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static start.*/
                /**
                 * Tweens an LayoutElement's flexibleWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFlexibleSize: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.flexibleWidth, target.flexibleHeight );
                    }, function (x) {
                        target.flexibleWidth = x.x;
                        target.flexibleHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static start.*/
                /**
                 * Tweens an LayoutElement's minWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMinSize: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.minWidth, target.minHeight );
                    }, function (x) {
                        target.minWidth = x.x;
                        target.minHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static start.*/
                /**
                 * Tweens an LayoutElement's preferredWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPreferredSize: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.preferredWidth, target.preferredHeight );
                    }, function (x) {
                        target.preferredWidth = x.x;
                        target.preferredHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOScale:static start.*/
                /**
                 * Tweens a Outline's effectDistance to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOScale: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.effectDistance;
                    }, function (x) {
                        target.effectDistance = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOScale:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPosX: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPosY: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3D: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DX: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( endValue, 0, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DY: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0, endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D Z to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DZ: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0, 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static start.*/
                /**
                 * Tweens a RectTransform's anchorMax to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorMax: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMax;
                    }, function (x) {
                        target.anchorMax = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static start.*/
                /**
                 * Tweens a RectTransform's anchorMin to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorMin: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMin;
                    }, function (x) {
                        target.anchorMin = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivot:static start.*/
                /**
                 * Tweens a RectTransform's pivot to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivot: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivot:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static start.*/
                /**
                 * Tweens a RectTransform's pivot X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivotX: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static start.*/
                /**
                 * Tweens a RectTransform's pivot Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivotY: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static start.*/
                /**
                 * Tweens a RectTransform's sizeDelta to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOSizeDelta: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.sizeDelta;
                    }, function (x) {
                        target.sizeDelta = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static start.*/
                /**
                 * Punches a RectTransform's anchoredPosition towards the given direction and then back to the starting one
                 as if it was connected to the starting position via an elastic.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}    target        
                 * @param   {UnityEngine.Vector2}          punch         The direction and strength of the punch (added to the RectTransform's current position)
                 * @param   {number}                       duration      The duration of the tween
                 * @param   {number}                       vibrato       Indicates how much will the punch vibrate
                 * @param   {number}                       elasticity    Represents how much (0 to 1) the vector will go beyond the starting position when bouncing backwards.
                 1 creates a full oscillation between the punch direction and the opposite direction,
                 while 0 oscillates only between the punch and the start position
                 * @param   {boolean}                      snapping      If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOPunchAnchorPos: function (target, punch, duration, vibrato, elasticity, snapping) {
                    if (vibrato === void 0) { vibrato = 10; }
                    if (elasticity === void 0) { elasticity = 1.0; }
                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Punch(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, UnityEngine.Vector3.FromVector2(punch.$clone()), duration, vibrato, elasticity), target), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static start.*/
                /**
                 * Shakes a RectTransform's anchoredPosition with the given values.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}          target            
                 * @param   {number}                             duration          The duration of the tween
                 * @param   {number}                             strength          The shake strength
                 * @param   {number}                             vibrato           Indicates how much will the shake vibrate
                 * @param   {number}                             randomness        Indicates how much the shake will be random (0 to 180 - values higher than 90 kind of suck, so beware). 
                 Setting it to 0 will shake along a single direction.
                 * @param   {boolean}                            snapping          If TRUE the tween will smoothly snap all values to integers
                 * @param   {boolean}                            fadeOut           If TRUE the shake will automatically fadeOut smoothly within the tween's duration, otherwise it will not
                 * @param   {DG.Tweening.ShakeRandomnessMode}    randomnessMode    Randomness mode
                 * @return  {DG.Tweening.Tweener}
                 */
                DOShakeAnchorPos: function (target, duration, strength, vibrato, randomness, snapping, fadeOut, randomnessMode) {
                    if (strength === void 0) { strength = 100.0; }
                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    if (randomnessMode === void 0) { randomnessMode = 0; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, strength, vibrato, randomness, true, fadeOut, randomnessMode), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static start.*/
                /**
                 * Shakes a RectTransform's anchoredPosition with the given values.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}          target            
                 * @param   {number}                             duration          The duration of the tween
                 * @param   {UnityEngine.Vector2}                strength          The shake strength on each axis
                 * @param   {number}                             vibrato           Indicates how much will the shake vibrate
                 * @param   {number}                             randomness        Indicates how much the shake will be random (0 to 180 - values higher than 90 kind of suck, so beware). 
                 Setting it to 0 will shake along a single direction.
                 * @param   {boolean}                            snapping          If TRUE the tween will smoothly snap all values to integers
                 * @param   {boolean}                            fadeOut           If TRUE the shake will automatically fadeOut smoothly within the tween's duration, otherwise it will not
                 * @param   {DG.Tweening.ShakeRandomnessMode}    randomnessMode    Randomness mode
                 * @return  {DG.Tweening.Tweener}
                 */
                DOShakeAnchorPos$1: function (target, duration, strength, vibrato, randomness, snapping, fadeOut, randomnessMode) {
                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    if (randomnessMode === void 0) { randomnessMode = 0; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake$1(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, UnityEngine.Vector3.FromVector2(strength.$clone()), vibrato, randomness, fadeOut, randomnessMode), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}    target       
                 * @param   {UnityEngine.Vector2}          endValue     The end value to reach
                 * @param   {number}                       jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                       numJumps     Total number of jumps
                 * @param   {number}                       duration     The duration of the tween
                 * @param   {boolean}                      snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJumpAnchorPos: function (target, endValue, jumpPower, numJumps, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;

                    // Separate Y Tween so we can elaborate elapsedPercentage on that insted of on the Sequence
                    // (in case users add a delay or other elements to the Sequence)
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0, jumpPower ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.anchoredPosition.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue.x, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Sequence, s, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = target.anchoredPosition.$clone();
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedDirectionalPercentage(s), DG.Tweening.Ease.OutQuad);
                        target.anchoredPosition = pos.$clone();
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's horizontal/verticalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {UnityEngine.Vector2}          endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DONormalizedPos: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.horizontalNormalizedPosition, target.verticalNormalizedPosition );
                    }, function (x) {
                        target.horizontalNormalizedPosition = x.x;
                        target.verticalNormalizedPosition = x.y;
                    }, endValue.$clone(), duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's horizontalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {number}                       endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOHorizontalNormalizedPos: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.horizontalNormalizedPosition;
                    }, function (x) {
                        target.horizontalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's verticalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {number}                       endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOVerticalNormalizedPos: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.verticalNormalizedPosition;
                    }, function (x) {
                        target.verticalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOValue:static start.*/
                /**
                 * Tweens a Slider's value to the given value.
                 Also stores the Slider as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Slider}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOValue: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.value;
                    }, function (x) {
                        target.value = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOValue:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOCounter:static start.*/
                /**
                 * Tweens a Text's text from one integer to another, with options for thousands separators
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}                 target                   
                 * @param   {number}                              fromValue                The value to start from
                 * @param   {number}                              endValue                 The end value to reach
                 * @param   {number}                              duration                 The duration of the tween
                 * @param   {boolean}                             addThousandsSeparator    If TRUE (default) also adds thousands separators
                 * @param   {System.Globalization.CultureInfo}    culture                  The {@link } to use (InvariantCulture if NULL)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOCounter: function (target, fromValue, endValue, duration, addThousandsSeparator, culture) {
                    if (addThousandsSeparator === void 0) { addThousandsSeparator = true; }
                    if (culture === void 0) { culture = null; }
                    var v = fromValue;
                    var cInfo = !addThousandsSeparator ? null : culture || System.Globalization.CultureInfo.invariantCulture;
                    var t = DG.Tweening.DOTween.To$2(function () {
                        return v;
                    }, function (x) {
                        v = x;
                        target.text = addThousandsSeparator ? System.Int32.format(v, "N0", cInfo) : Bridge.toString(v);
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOCounter:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOText:static start.*/
                /**
                 * Tweens a Text's text to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target             
                 * @param   {string}                            endValue           The end string to tween to
                 * @param   {number}                            duration           The duration of the tween
                 * @param   {boolean}                           richTextEnabled    If TRUE (default), rich text will be interpreted correctly while animated,
                 otherwise all tags will be considered as normal text
                 * @param   {DG.Tweening.ScrambleMode}          scrambleMode       The type of scramble mode to use, if any
                 * @param   {string}                            scrambleChars      A string containing the characters to use for scrambling.
                 Use as many characters as possible (minimum 10) because DOTween uses a fast scramble mode which gives better results with more characters.
                 Leave it to NULL (default) to use default ones
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOText: function (target, endValue, duration, richTextEnabled, scrambleMode, scrambleChars) {
                    if (richTextEnabled === void 0) { richTextEnabled = true; }
                    if (scrambleMode === void 0) { scrambleMode = 0; }
                    if (scrambleChars === void 0) { scrambleChars = null; }
                    if (endValue == null) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogWarning("You can't pass a NULL string to DOText: an empty string will be used instead to avoid errors");
                        }
                        endValue = "";
                    }
                    var t = DG.Tweening.DOTween.To$5(function () {
                        return target.text;
                    }, function (x) {
                        target.text = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$3(t, richTextEnabled, scrambleMode, scrambleChars), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOText:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static start.*/
                /**
                 * Tweens a Graphic's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Graphic as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}    target      
                 * @param   {UnityEngine.Color}         endValue    The value to tween to
                 * @param   {number}                    duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor: function (target, endValue, duration) {
                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static start.*/
                /**
                 * Tweens a Image's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}    target      
                 * @param   {UnityEngine.Color}       endValue    The value to tween to
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor$1: function (target, endValue, duration) {
                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static start.*/
                /**
                 * Tweens a Text's color BY the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}    target      
                 * @param   {UnityEngine.Color}      endValue    The value to tween to
                 * @param   {number}                 duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor$2: function (target, endValue, duration) {
                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShapeCircle:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition so that it draws a circle around the given center.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations.<p />
                 IMPORTANT: SetFrom(value) requires a {@link } instead of a float, where the X property represents the "from degrees value"
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target             
                 * @param   {UnityEngine.Vector2}               center             Circle-center/pivot around which to rotate (in UI anchoredPosition coordinates)
                 * @param   {number}                            endValueDegrees    The end value degrees to reach (to rotate counter-clockwise pass a negative value)
                 * @param   {number}                            duration           The duration of the tween
                 * @param   {boolean}                           relativeCenter     If TRUE the {@link } coordinates will be considered as relative to the target's current anchoredPosition
                 * @param   {boolean}                           snapping           If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOShapeCircle: function (target, center, endValueDegrees, duration, relativeCenter, snapping) {
                    if (relativeCenter === void 0) { relativeCenter = false; }
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To(UnityEngine.Vector2, UnityEngine.Vector2, DG.Tweening.Plugins.CircleOptions, DG.Tweening.Plugins.CirclePlugin.Get(), function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, center.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$7(t, endValueDegrees, relativeCenter, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOShapeCircle:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI.Utils", {
        $kind: 1002,
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static start.*/
                /**
                 * Converts the anchoredPosition of the first RectTransform to the second RectTransform,
                 taking into consideration offset, anchors and pivot, and returns the new anchoredPosition
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI.Utils
                 * @memberof DG.Tweening.DOTweenModuleUI.Utils
                 * @param   {UnityEngine.RectTransform}    from    
                 * @param   {UnityEngine.RectTransform}    to
                 * @return  {UnityEngine.Vector2}
                 */
                SwitchToRectTransform: function (from, to) {
                    var localPoint = { v : new UnityEngine.Vector2() };
                    var fromPivotDerivedOffset = new pc.Vec2( from.rect.width * 0.5 + from.rect.xMin, from.rect.height * 0.5 + from.rect.yMin );
                    var screenP = UnityEngine.RectTransformUtility.WorldToScreenPoint(null, from.position);
                    screenP = screenP.$clone().add( fromPivotDerivedOffset.$clone() );
                    UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(to, screenP, null, localPoint);
                    var pivotDerivedOffset = new pc.Vec2( to.rect.width * 0.5 + to.rect.xMin, to.rect.height * 0.5 + to.rect.yMin );
                    return to.anchoredPosition.$clone().add( localPoint.v ).sub( pivotDerivedOffset );
                },
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    /** @namespace DG.Tweening */

    /**
     * Shortcuts/functions that are not strictly related to specific Modules
     but are available only on some Unity versions
     *
     * @static
     * @abstract
     * @public
     * @class DG.Tweening.DOTweenModuleUnityVersion
     */
    Bridge.define("DG.Tweening.DOTweenModuleUnityVersion", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static start.*/
                /**
                 * Tweens a Material's color using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}    target      
                 * @param   {pc.ColorGradient}        gradient    The gradient to use
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$3(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static start.*/
                /**
                 * Tweens a Material's named color property using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}    target      
                 * @param   {pc.ColorGradient}        gradient    The gradient to use
                 * @param   {string}                  property    The name of the material property to tween (like _Tint or _SpecColor)
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor$1: function (target, gradient, property, duration) {
                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.SetColor$1(property, c.color);
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$4(target, c.color.$clone(), property, colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or complete.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForCompletion(true);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForCompletion: function (t, returnCustomYieldInstruction) {
                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForCompletion(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or rewinded.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForRewind();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForRewind: function (t, returnCustomYieldInstruction) {
                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForRewind(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForKill();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForKill: function (t, returnCustomYieldInstruction) {
                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForKill(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or has gone through the given amount of loops.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForElapsedLoops(2);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {number}                                elapsedLoops                    Elapsed loops to wait for
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForElapsedLoops: function (t, elapsedLoops, returnCustomYieldInstruction) {
                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops(t, elapsedLoops);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed
                 or has reached the given time position (loops included, delays excluded).
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForPosition(2.5f);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {number}                                position                        Position (loops included, delays excluded) to wait for
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForPosition: function (t, position, returnCustomYieldInstruction) {
                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForPosition(t, position);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or started
                 (meaning when the tween is set in a playing state the first time, after any eventual delay).
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForStart();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForStart: function (t, returnCustomYieldInstruction) {
                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForStart(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOOffset:static start.*/
                /**
                 * Tweens a Material's named texture offset property with the given ID to the given value.
                 Also stores the material as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}              target        
                 * @param   {UnityEngine.Vector2}               endValue      The end value to reach
                 * @param   {number}                            propertyID    The ID of the material property to tween (also called nameID in Unity's manual)
                 * @param   {number}                            duration      The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOOffset: function (target, endValue, propertyID, duration) {
                    if (!target.HasProperty(propertyID)) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogMissingMaterialProperty(propertyID);
                        }
                        return null;
                    }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.GetTextureOffset(propertyID);
                    }, function (x) {
                        target.SetTextureOffset(propertyID, x);
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOOffset:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOTiling:static start.*/
                /**
                 * Tweens a Material's named texture scale property with the given ID to the given value.
                 Also stores the material as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}              target        
                 * @param   {UnityEngine.Vector2}               endValue      The end value to reach
                 * @param   {number}                            propertyID    The ID of the material property to tween (also called nameID in Unity's manual)
                 * @param   {number}                            duration      The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOTiling: function (target, endValue, propertyID, duration) {
                    if (!target.HasProperty(propertyID)) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogMissingMaterialProperty(propertyID);
                        }
                        return null;
                    }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.GetTextureScale(propertyID);
                    }, function (x) {
                        target.SetTextureScale(propertyID, x);
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOTiling:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    /**
     * Utility functions that deal with available Modules.
     Modules defines:
     - DOTAUDIO
     - DOTPHYSICS
     - DOTPHYSICS2D
     - DOTSPRITE
     - DOTUI
     Extra defines set and used for implementation of external assets:
     - DOTWEEN_TMP ► TextMesh Pro
     - DOTWEEN_TK2D ► 2D Toolkit
     *
     * @static
     * @abstract
     * @public
     * @class DG.Tweening.DOTweenModuleUtils
     */
    Bridge.define("DG.Tweening.DOTweenModuleUtils", {
        statics: {
            fields: {
                _initialized: false
            },
            methods: {
                /*DG.Tweening.DOTweenModuleUtils.Init:static start.*/
                /**
                 * Called via Reflection by DOTweenComponent on Awake
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUtils
                 * @memberof DG.Tweening.DOTweenModuleUtils
                 * @return  {void}
                 */
                Init: function () {
                    if (DG.Tweening.DOTweenModuleUtils._initialized) {
                        return;
                    }

                    DG.Tweening.DOTweenModuleUtils._initialized = true;
                    DG.Tweening.Core.DOTweenExternalCommand.addSetOrientationOnPath(DG.Tweening.DOTweenModuleUtils.Physics.SetOrientationOnPath);

                },
                /*DG.Tweening.DOTweenModuleUtils.Init:static end.*/

                /*DG.Tweening.DOTweenModuleUtils.Preserver:static start.*/
                Preserver: function () {
                    var loadedAssemblies = System.AppDomain.getAssemblies();
                    var mi = Bridge.Reflection.getMembers(UnityEngine.MonoBehaviour, 8, 284, "Stub");
                },
                /*DG.Tweening.DOTweenModuleUtils.Preserver:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUtils.Physics", {
        $kind: 1002,
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static start.*/
                SetOrientationOnPath: function (options, t, newRot, trans) {
                    if (options.isRigidbody) {
                        Bridge.cast(t.target, UnityEngine.Rigidbody).rotation = newRot.$clone();
                    } else {
                        trans.rotation = newRot.$clone();
                    }
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static start.*/
                HasRigidbody2D: function (target) {
                    return UnityEngine.Component.op_Inequality(target.GetComponent(UnityEngine.Rigidbody2D), null);
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static start.*/
                HasRigidbody: function (target) {
                    return UnityEngine.Component.op_Inequality(target.GetComponent(UnityEngine.Rigidbody), null);
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static start.*/
                CreateDOTweenPathTween: function (target, tweenRigidbody, isLocal, path, duration, pathMode) {
                    var t = null;
                    var rBodyFoundAndTweened = false;
                    if (tweenRigidbody) {
                        var rBody = target.GetComponent(UnityEngine.Rigidbody);
                        if (UnityEngine.Component.op_Inequality(rBody, null)) {
                            rBodyFoundAndTweened = true;
                            t = isLocal ? DG.Tweening.DOTweenModulePhysics.DOLocalPath$1(rBody, path, duration, pathMode) : DG.Tweening.DOTweenModulePhysics.DOPath$1(rBody, path, duration, pathMode);
                        }
                    }
                    if (!rBodyFoundAndTweened && tweenRigidbody) {
                        var rBody2D = target.GetComponent(UnityEngine.Rigidbody2D);
                        if (UnityEngine.Component.op_Inequality(rBody2D, null)) {
                            rBodyFoundAndTweened = true;
                            t = isLocal ? DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1(rBody2D, path, duration, pathMode) : DG.Tweening.DOTweenModulePhysics2D.DOPath$1(rBody2D, path, duration, pathMode);
                        }
                    }
                    if (!rBodyFoundAndTweened) {
                        t = isLocal ? DG.Tweening.ShortcutExtensions.DOLocalPath(target.transform, path, duration, pathMode) : DG.Tweening.ShortcutExtensions.DOPath(target.transform, path, duration, pathMode);
                    }
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    /*DownloadNow start.*/
    Bridge.define("DownloadNow", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            iosLink: null,
            androidLink: null
        },
        methods: {
            /*DownloadNow.Download start.*/
            Download: function () {
                Luna.Unity.Playable.InstallFullGame(this.iosLink, this.androidLink);
            },
            /*DownloadNow.Download end.*/


        }
    });
    /*DownloadNow end.*/

    /*EndCardAnimation start.*/
    Bridge.define("EndCardAnimation", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            canvasGroupInGame: null,
            canvasGroupInGameBG: null,
            canvasGroupEndCard: null,
            canvasGroupEndCardBG: null,
            fadeDuration: 0,
            downloadButton: null,
            scaleDuration: 0,
            scaleFactor: 0
        },
        ctors: {
            init: function () {
                this.fadeDuration = 1.0;
                this.scaleDuration = 0.5;
                this.scaleFactor = 1.2;
            }
        },
        methods: {
            /*EndCardAnimation.OnEnable start.*/
            OnEnable: function () {
                this.FadeOut();
            },
            /*EndCardAnimation.OnEnable end.*/

            /*EndCardAnimation.FadeOut start.*/
            FadeOut: function () {
                this.canvasGroupInGame.alpha = 0;
                this.canvasGroupInGame.interactable = false;
                this.canvasGroupInGame.blocksRaycasts = false;

                DG.Tweening.DOTweenModuleUI.DOFade(this.canvasGroupInGame, 0.0, this.fadeDuration);

                this.FadeIn();
            },
            /*EndCardAnimation.FadeOut end.*/

            /*EndCardAnimation.FadeIn start.*/
            FadeIn: function () {
                this.canvasGroupEndCard.alpha = 0;
                this.canvasGroupEndCard.interactable = false;
                this.canvasGroupEndCard.blocksRaycasts = false;
                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), DG.Tweening.DOTweenModuleUI.DOFade(this.canvasGroupEndCardBG, 1.0, this.fadeDuration / 2.0), Bridge.fn.bind(this, function () {
                    this.canvasGroupInGameBG.alpha = 0.0;
                    this.canvasGroupInGameBG.interactable = false;
                    this.canvasGroupInGameBG.blocksRaycasts = false;
                    DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), DG.Tweening.DOTweenModuleUI.DOFade(this.canvasGroupEndCard, 1.0, this.fadeDuration / 2.0), Bridge.fn.bind(this, function () {
                        this.canvasGroupEndCard.interactable = true;
                        this.canvasGroupEndCard.blocksRaycasts = true;

                        this.ScaleUpAndDown();
                    }));
                }));
            },
            /*EndCardAnimation.FadeIn end.*/

            /*EndCardAnimation.ScaleUpAndDown start.*/
            ScaleUpAndDown: function () {
                DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale(this.downloadButton, this.scaleFactor, this.scaleDuration), DG.Tweening.Ease.InOutSine), -1, DG.Tweening.LoopType.Yoyo);
            },
            /*EndCardAnimation.ScaleUpAndDown end.*/


        }
    });
    /*EndCardAnimation end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*LevelManager start.*/
    Bridge.define("LevelManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            requiredColors: null,
            colorGoalObjects: null,
            colorCheckmarkObjects: null,
            colorGameObjectMap: null,
            colorCheckmarkMap: null,
            maxColorCount: 0,
            colorCounterText: null,
            EndCard: null,
            isLongVersion: false,
            nextLevelName: null
        },
        ctors: {
            init: function () {
                this.requiredColors = new (System.Collections.Generic.List$1(System.String)).ctor();
                this.colorGoalObjects = new (System.Collections.Generic.List$1(UnityEngine.GameObject)).ctor();
                this.colorCheckmarkObjects = new (System.Collections.Generic.List$1(UnityEngine.GameObject)).ctor();
                this.colorGameObjectMap = new (System.Collections.Generic.Dictionary$2(System.String,UnityEngine.GameObject)).ctor();
                this.colorCheckmarkMap = new (System.Collections.Generic.Dictionary$2(System.String,UnityEngine.GameObject)).ctor();
                this.maxColorCount = 0;
            }
        },
        methods: {
            /*LevelManager.Awake start.*/
            Awake: function () {
                if (UnityEngine.MonoBehaviour.op_Equality(LevelManager.Instance, null)) {
                    LevelManager.Instance = this;
                } else {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }

                this.maxColorCount = this.requiredColors.Count;
            },
            /*LevelManager.Awake end.*/

            /*LevelManager.Start start.*/
            Start: function () {
                this.PopulateMaps();

                this.UpdateColorCounter();
            },
            /*LevelManager.Start end.*/

            /*LevelManager.PopulateMaps start.*/
            PopulateMaps: function () {
                this.colorGameObjectMap.clear();
                this.colorCheckmarkMap.clear();

                for (var i = 0; i < this.requiredColors.Count; i = (i + 1) | 0) {
                    if (i < this.colorGoalObjects.Count) {
                        this.colorGameObjectMap.setItem(this.requiredColors.getItem(i), this.colorGoalObjects.getItem(i));
                    }
                }

                for (var i1 = 0; i1 < this.requiredColors.Count; i1 = (i1 + 1) | 0) {
                    if (i1 < this.colorGoalObjects.Count) {
                        this.colorCheckmarkMap.setItem(this.requiredColors.getItem(i1), this.colorCheckmarkObjects.getItem(i1));
                    }
                }

            },
            /*LevelManager.PopulateMaps end.*/

            /*LevelManager.TryCompleteColor start.*/
            TryCompleteColor: function (color) {
                if (this.requiredColors.contains(color)) {
                    this.requiredColors.remove(color);

                    if (this.colorGameObjectMap.containsKey(color)) {
                        var colorObject = this.colorGameObjectMap.getItem(color);
                        if (UnityEngine.GameObject.op_Inequality(colorObject, null)) {
                            colorObject.SetActive(true);
                        }
                    }

                    if (this.colorCheckmarkMap.containsKey(color)) {
                        var checkmarkObject = this.colorCheckmarkMap.getItem(color);
                        if (UnityEngine.GameObject.op_Inequality(checkmarkObject, null)) {
                            checkmarkObject.SetActive(true);
                        }
                    }

                    if (this.requiredColors.Count === 0) {
                        AudioManager.Instance.PlayWin();
                        if (!LongVersion.Instance.isLongVersion) {
                            this.StartCoroutine$1(this.StartEndCard());
                        } else {
                            this.StartCoroutine$1(this.NextScene());
                        }
                    }
                    return true;
                } else {
                    return false;
                }
            },
            /*LevelManager.TryCompleteColor end.*/

            /*LevelManager.UpdateColorCounter start.*/
            UpdateColorCounter: function () {
                var remainingColors = this.requiredColors.Count;
                this.colorCounterText.text = System.String.format("Colors Restored: {0}/{1}", Bridge.box(((this.maxColorCount - remainingColors) | 0), System.Int32), Bridge.box(this.maxColorCount, System.Int32));
            },
            /*LevelManager.UpdateColorCounter end.*/

            /*LevelManager.StartEndCard start.*/
            StartEndCard: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(1.0);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.EndCard.SetActive(true);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*LevelManager.StartEndCard end.*/

            /*LevelManager.NextScene start.*/
            NextScene: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    currentSceneName,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(1.0);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    currentSceneName = UnityEngine.SceneManagement.SceneManager.GetActiveScene().name;

                                        if (!Bridge.referenceEquals(currentSceneName, "Level 3 Scene")) {
                                            UnityEngine.SceneManagement.SceneManager.LoadScene$2(this.nextLevelName);
                                        } else {
                                            this.StartCoroutine$1(this.StartEndCard());
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*LevelManager.NextScene end.*/


        }
    });
    /*LevelManager end.*/

    /*LongVersion start.*/
    Bridge.define("LongVersion", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            isLongVersion: false
        },
        methods: {
            /*LongVersion.Awake start.*/
            Awake: function () {
                if (UnityEngine.MonoBehaviour.op_Equality(LongVersion.Instance, null)) {
                    LongVersion.Instance = this;
                    UnityEngine.Object.DontDestroyOnLoad(this.gameObject);
                } else {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }
            },
            /*LongVersion.Awake end.*/

            /*LongVersion.Start start.*/
            Start: function () {

            },
            /*LongVersion.Start end.*/


        }
    });
    /*LongVersion end.*/

    /*ObjectAnimation start.*/
    Bridge.define("ObjectAnimation", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            fadeDuration: 0,
            canvasGroup: null
        },
        ctors: {
            init: function () {
                this.fadeDuration = 1.0;
            }
        },
        methods: {
            /*ObjectAnimation.Awake start.*/
            Awake: function () {
                this.canvasGroup = this.GetComponent(UnityEngine.CanvasGroup);
            },
            /*ObjectAnimation.Awake end.*/

            /*ObjectAnimation.OnEnable start.*/
            OnEnable: function () {
                this.FadeIn();
            },
            /*ObjectAnimation.OnEnable end.*/

            /*ObjectAnimation.FadeIn start.*/
            FadeIn: function () {
                this.canvasGroup.alpha = 0;
                this.canvasGroup.interactable = false;
                this.canvasGroup.blocksRaycasts = true;
                DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), DG.Tweening.DOTweenModuleUI.DOFade(this.canvasGroup, 1, this.fadeDuration), DG.Tweening.Ease.InOutQuad);
            },
            /*ObjectAnimation.FadeIn end.*/


        }
    });
    /*ObjectAnimation end.*/

    /*TutorialHand start.*/
    Bridge.define("TutorialHand", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            handRectTransform: null,
            pointA: null,
            pointB: null,
            moveDuration: 0,
            fadeDuration: 0,
            canvasGroup: null
        },
        ctors: {
            init: function () {
                this.pointA = new UnityEngine.Vector2();
                this.pointB = new UnityEngine.Vector2();
                this.moveDuration = 1.0;
                this.fadeDuration = 1.0;
            }
        },
        methods: {
            /*TutorialHand.Awake start.*/
            Awake: function () {
                if (UnityEngine.MonoBehaviour.op_Equality(TutorialHand.Instance, null)) {
                    TutorialHand.Instance = this;
                } else {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }

                this.canvasGroup = this.GetComponent(UnityEngine.CanvasGroup);
                if (UnityEngine.MonoBehaviour.op_Equality(this.canvasGroup, null)) {
                    this.canvasGroup = this.gameObject.AddComponent(UnityEngine.CanvasGroup);
                }
            },
            /*TutorialHand.Awake end.*/

            /*TutorialHand.Start start.*/
            Start: function () {
                this.StartHandAnimation();
            },
            /*TutorialHand.Start end.*/

            /*TutorialHand.StartHandAnimation start.*/
            StartHandAnimation: function () {
                var handSequence = DG.Tweening.DOTween.Sequence();

                this.handRectTransform.anchoredPosition = this.pointA.$clone();
                this.canvasGroup.alpha = 1.0;
                DG.Tweening.TweenSettingsExtensions.SetLoops(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.AppendCallback(DG.Tweening.TweenSettingsExtensions.Append(DG.Tweening.TweenSettingsExtensions.Append(handSequence, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.DOTweenModuleUI.DOAnchorPos(this.handRectTransform, this.pointB.$clone(), this.moveDuration), DG.Tweening.Ease.InOutSine)), DG.Tweening.DOTweenModuleUI.DOFade(this.canvasGroup, 0.0, this.fadeDuration)), Bridge.fn.bind(this, function () {
                    this.handRectTransform.anchoredPosition = this.pointA.$clone();
                })), -1);
            },
            /*TutorialHand.StartHandAnimation end.*/


        }
    });
    /*TutorialHand end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine","UnityEngine.EventSystems","System.Collections","System.Collections.Generic","TMPro","UnityEngine.Audio","DG.Tweening.Core","DG.Tweening","DG.Tweening.Plugins.Core.PathCore","UnityEngine.UI","System.Globalization","DG.Tweening.Plugins.Options"];

    /*AudioManager start.*/
    $m("AudioManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"PlayButtonClick","t":8,"sn":"PlayButtonClick","rt":$n[0].Void},{"a":2,"n":"PlayCorrectMerge","t":8,"sn":"PlayCorrectMerge","rt":$n[0].Void},{"a":2,"n":"PlayMerging","t":8,"sn":"PlayMerging","rt":$n[0].Void},{"a":2,"n":"PlayWin","t":8,"sn":"PlayWin","rt":$n[0].Void},{"a":2,"n":"PlayWrongMerge","t":8,"sn":"PlayWrongMerge","rt":$n[0].Void},{"a":2,"n":"Instance","is":true,"t":4,"rt":AudioManager,"sn":"Instance"},{"at":[new UnityEngine.HeaderAttribute("Audio Source")],"a":2,"n":"audioSource","t":4,"rt":$n[1].AudioSource,"sn":"audioSource"},{"at":[new UnityEngine.HeaderAttribute("Audio Clips")],"a":2,"n":"buttonClick","t":4,"rt":$n[1].AudioClip,"sn":"buttonClick"},{"a":2,"n":"correctMerge","t":4,"rt":$n[1].AudioClip,"sn":"correctMerge"},{"a":2,"n":"merging","t":4,"rt":$n[1].AudioClip,"sn":"merging"},{"a":2,"n":"win","t":4,"rt":$n[1].AudioClip,"sn":"win"},{"a":2,"n":"wrongMerge","t":4,"rt":$n[1].AudioClip,"sn":"wrongMerge"}]}; }, $n);
    /*AudioManager end.*/

    /*CheckmarkAnimation start.*/
    $m("CheckmarkAnimation", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":2,"n":"PlayScaleUpAndBack","t":8,"sn":"PlayScaleUpAndBack","rt":$n[0].Void},{"a":1,"n":"originalScale","t":4,"rt":$n[1].Vector3,"sn":"originalScale"},{"a":1,"n":"rectTransform","t":4,"rt":$n[1].RectTransform,"sn":"rectTransform"},{"a":2,"n":"scaleUpAmount","t":4,"rt":$n[0].Single,"sn":"scaleUpAmount","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"scaleUpDuration","t":4,"rt":$n[0].Single,"sn":"scaleUpDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*CheckmarkAnimation end.*/

    /*CircleAnimation start.*/
    $m("CircleAnimation", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"PlayShrinkAndDestroy","t":8,"sn":"PlayShrinkAndDestroy","rt":$n[0].Void},{"a":2,"n":"shrinkDuration","t":4,"rt":$n[0].Single,"sn":"shrinkDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*CircleAnimation end.*/

    /*CircleDrag start.*/
    $m("CircleDrag", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"OnBeginDrag","t":8,"pi":[{"n":"eventData","pt":$n[2].PointerEventData,"ps":0}],"sn":"OnBeginDrag","rt":$n[0].Void,"p":[$n[2].PointerEventData]},{"a":2,"n":"OnDrag","t":8,"pi":[{"n":"eventData","pt":$n[2].PointerEventData,"ps":0}],"sn":"OnDrag","rt":$n[0].Void,"p":[$n[2].PointerEventData]},{"a":2,"n":"OnEndDrag","t":8,"pi":[{"n":"eventData","pt":$n[2].PointerEventData,"ps":0}],"sn":"OnEndDrag","rt":$n[0].Void,"p":[$n[2].PointerEventData]},{"a":2,"n":"ReturnToOriginalPosition","t":8,"sn":"ReturnToOriginalPosition","rt":$n[0].Void},{"a":2,"n":"WasDroppedOnCircle","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_WasDroppedOnCircle","t":8,"rt":$n[0].Boolean,"fg":"WasDroppedOnCircle","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":2,"n":"set_WasDroppedOnCircle","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"WasDroppedOnCircle"},"fn":"WasDroppedOnCircle"},{"a":1,"n":"canvas","t":4,"rt":$n[1].Canvas,"sn":"canvas"},{"a":1,"n":"canvasGroup","t":4,"rt":$n[1].CanvasGroup,"sn":"canvasGroup"},{"at":[new UnityEngine.HeaderAttribute("Circle Color")],"a":2,"n":"circleType","t":4,"rt":$n[0].String,"sn":"circleType"},{"a":2,"n":"currentlyDragging","is":true,"t":4,"rt":$n[1].GameObject,"sn":"currentlyDragging"},{"at":[new UnityEngine.HeaderAttribute("Circle Settings")],"a":1,"n":"originalPosition","t":4,"rt":$n[1].Vector2,"sn":"originalPosition"},{"a":1,"n":"rectTransform","t":4,"rt":$n[1].RectTransform,"sn":"rectTransform"},{"a":1,"n":"wasDroppedOnCircle","t":4,"rt":$n[0].Boolean,"sn":"wasDroppedOnCircle","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*CircleDrag end.*/

    /*CircleDrop start.*/
    $m("CircleDrop", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"GetResultingColor","t":8,"pi":[{"n":"dragType","pt":$n[0].String,"ps":0},{"n":"dropType","pt":$n[0].String,"ps":1}],"sn":"GetResultingColor","rt":$n[0].String,"p":[$n[0].String,$n[0].String]},{"a":2,"n":"OnDrop","t":8,"pi":[{"n":"eventData","pt":$n[2].PointerEventData,"ps":0}],"sn":"OnDrop","rt":$n[0].Void,"p":[$n[2].PointerEventData]},{"a":2,"n":"circleType","t":4,"rt":$n[0].String,"sn":"circleType"}]}; }, $n);
    /*CircleDrop end.*/

    /*DownloadNow start.*/
    $m("DownloadNow", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Download","t":8,"sn":"Download","rt":$n[0].Void},{"a":2,"n":"androidLink","t":4,"rt":$n[0].String,"sn":"androidLink"},{"a":2,"n":"iosLink","t":4,"rt":$n[0].String,"sn":"iosLink"}]}; }, $n);
    /*DownloadNow end.*/

    /*EndCardAnimation start.*/
    $m("EndCardAnimation", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"FadeIn","t":8,"sn":"FadeIn","rt":$n[0].Void},{"a":1,"n":"FadeOut","t":8,"sn":"FadeOut","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"ScaleUpAndDown","t":8,"sn":"ScaleUpAndDown","rt":$n[0].Void},{"at":[new UnityEngine.HeaderAttribute("TO ENABLE")],"a":2,"n":"canvasGroupEndCard","t":4,"rt":$n[1].CanvasGroup,"sn":"canvasGroupEndCard"},{"a":2,"n":"canvasGroupEndCardBG","t":4,"rt":$n[1].CanvasGroup,"sn":"canvasGroupEndCardBG"},{"at":[new UnityEngine.HeaderAttribute("TO DISABLE")],"a":2,"n":"canvasGroupInGame","t":4,"rt":$n[1].CanvasGroup,"sn":"canvasGroupInGame"},{"a":2,"n":"canvasGroupInGameBG","t":4,"rt":$n[1].CanvasGroup,"sn":"canvasGroupInGameBG"},{"at":[new UnityEngine.HeaderAttribute("Download Button Settings")],"a":2,"n":"downloadButton","t":4,"rt":$n[1].RectTransform,"sn":"downloadButton"},{"at":[new UnityEngine.HeaderAttribute("Fade In Settings")],"a":2,"n":"fadeDuration","t":4,"rt":$n[0].Single,"sn":"fadeDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"scaleDuration","t":4,"rt":$n[0].Single,"sn":"scaleDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"scaleFactor","t":4,"rt":$n[0].Single,"sn":"scaleFactor","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*EndCardAnimation end.*/

    /*LevelManager start.*/
    $m("LevelManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"NextScene","t":8,"sn":"NextScene","rt":$n[3].IEnumerator},{"a":1,"n":"PopulateMaps","t":8,"sn":"PopulateMaps","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"StartEndCard","t":8,"sn":"StartEndCard","rt":$n[3].IEnumerator},{"a":2,"n":"TryCompleteColor","t":8,"pi":[{"n":"color","pt":$n[0].String,"ps":0}],"sn":"TryCompleteColor","rt":$n[0].Boolean,"p":[$n[0].String],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"UpdateColorCounter","t":8,"sn":"UpdateColorCounter","rt":$n[0].Void},{"at":[new UnityEngine.HeaderAttribute("End Card")],"a":2,"n":"EndCard","t":4,"rt":$n[1].GameObject,"sn":"EndCard"},{"a":2,"n":"Instance","is":true,"t":4,"rt":LevelManager,"sn":"Instance"},{"at":[new UnityEngine.HeaderAttribute("Color Checkmark Map")],"a":2,"n":"colorCheckmarkMap","t":4,"rt":$n[4].Dictionary$2(System.String,UnityEngine.GameObject),"sn":"colorCheckmarkMap"},{"at":[new UnityEngine.HeaderAttribute("Object corresponding to color")],"a":2,"n":"colorCheckmarkObjects","t":4,"rt":$n[4].List$1(UnityEngine.GameObject),"sn":"colorCheckmarkObjects"},{"a":2,"n":"colorCounterText","t":4,"rt":$n[5].TextMeshProUGUI,"sn":"colorCounterText"},{"at":[new UnityEngine.HeaderAttribute("Color GameObject Map")],"a":2,"n":"colorGameObjectMap","t":4,"rt":$n[4].Dictionary$2(System.String,UnityEngine.GameObject),"sn":"colorGameObjectMap"},{"at":[new UnityEngine.HeaderAttribute("Object corresponding to color")],"a":2,"n":"colorGoalObjects","t":4,"rt":$n[4].List$1(UnityEngine.GameObject),"sn":"colorGoalObjects"},{"at":[new UnityEngine.HeaderAttribute("Level Settings")],"a":2,"n":"isLongVersion","t":4,"rt":$n[0].Boolean,"sn":"isLongVersion","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Color counter")],"a":1,"n":"maxColorCount","t":4,"rt":$n[0].Int32,"sn":"maxColorCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"nextLevelName","t":4,"rt":$n[0].String,"sn":"nextLevelName"},{"at":[new UnityEngine.HeaderAttribute("Colors to Achieve")],"a":2,"n":"requiredColors","t":4,"rt":$n[4].List$1(System.String),"sn":"requiredColors"}]}; }, $n);
    /*LevelManager end.*/

    /*LongVersion start.*/
    $m("LongVersion", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"Instance","is":true,"t":4,"rt":LongVersion,"sn":"Instance"},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Long Version", -1, null, false, null)],"a":2,"n":"isLongVersion","t":4,"rt":$n[0].Boolean,"sn":"isLongVersion","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*LongVersion end.*/

    /*ObjectAnimation start.*/
    $m("ObjectAnimation", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"FadeIn","t":8,"sn":"FadeIn","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"canvasGroup","t":4,"rt":$n[1].CanvasGroup,"sn":"canvasGroup"},{"a":2,"n":"fadeDuration","t":4,"rt":$n[0].Single,"sn":"fadeDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*ObjectAnimation end.*/

    /*TutorialHand start.*/
    $m("TutorialHand", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"StartHandAnimation","t":8,"sn":"StartHandAnimation","rt":$n[0].Void},{"a":2,"n":"Instance","is":true,"t":4,"rt":TutorialHand,"sn":"Instance"},{"a":1,"n":"canvasGroup","t":4,"rt":$n[1].CanvasGroup,"sn":"canvasGroup"},{"a":2,"n":"fadeDuration","t":4,"rt":$n[0].Single,"sn":"fadeDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"handRectTransform","t":4,"rt":$n[1].RectTransform,"sn":"handRectTransform"},{"a":2,"n":"moveDuration","t":4,"rt":$n[0].Single,"sn":"moveDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"pointA","t":4,"rt":$n[1].Vector2,"sn":"pointA"},{"a":2,"n":"pointB","t":4,"rt":$n[1].Vector2,"sn":"pointB"}]}; }, $n);
    /*TutorialHand end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*DG.Tweening.DOTweenModuleAudio start.*/
    $m("DG.Tweening.DOTweenModuleAudio", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOComplete","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0},{"n":"withCallbacks","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"DOComplete","rt":$n[0].Int32,"p":[$n[6].AudioMixer,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].AudioSource,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[7].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].AudioSource,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFlip","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DOFlip","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOGoto","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"andPlay","dv":false,"o":true,"pt":$n[0].Boolean,"ps":2}],"sn":"DOGoto","rt":$n[0].Int32,"p":[$n[6].AudioMixer,$n[0].Single,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOKill","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0},{"n":"complete","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"DOKill","rt":$n[0].Int32,"p":[$n[6].AudioMixer,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPause","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DOPause","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPitch","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].AudioSource,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPitch","rt":$n[7].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].AudioSource,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPlay","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DOPlay","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPlayBackwards","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DOPlayBackwards","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPlayForward","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DOPlayForward","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DORestart","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DORestart","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DORewind","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DORewind","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOSetFloat","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0},{"n":"floatName","pt":$n[0].String,"ps":1},{"n":"endValue","pt":$n[0].Single,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOSetFloat","rt":$n[7].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[6].AudioMixer,$n[0].String,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOSmoothRewind","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DOSmoothRewind","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOTogglePause","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DOTogglePause","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleAudio end.*/

    /*DG.Tweening.DOTweenModulePhysics start.*/
    $m("DG.Tweening.DOTweenModulePhysics", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOJump","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJump","rt":$n[8].Sequence,"p":[$n[1].Rigidbody,$n[1].Vector3,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"path","pt":$n[9].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[8].PathMode,"ps":3}],"sn":"DOLocalPath$1","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody,$n[9].Path,$n[0].Single,$n[8].PathMode]},{"a":2,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[8].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[8].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOLocalPath","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody,System.Array.type(UnityEngine.Vector3),$n[0].Single,$n[8].PathType,$n[8].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DOLookAt","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"towards","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"axisConstraint","dv":0,"o":true,"pt":$n[8].AxisConstraint,"ps":3},{"n":"up","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Vector3),"ps":4}],"sn":"DOLookAt","rt":$n[7].TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions),"p":[$n[1].Rigidbody,$n[1].Vector3,$n[0].Single,$n[8].AxisConstraint,$n[0].Nullable$1(UnityEngine.Vector3)]},{"a":2,"n":"DOMove","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMove","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody,$n[1].Vector3,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveX","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveY","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveZ","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"path","pt":$n[9].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[8].PathMode,"ps":3}],"sn":"DOPath$1","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody,$n[9].Path,$n[0].Single,$n[8].PathMode]},{"a":2,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[8].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[8].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOPath","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody,System.Array.type(UnityEngine.Vector3),$n[0].Single,$n[8].PathType,$n[8].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DORotate","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"mode","dv":0,"o":true,"pt":$n[8].RotateMode,"ps":3}],"sn":"DORotate","rt":$n[7].TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions),"p":[$n[1].Rigidbody,$n[1].Vector3,$n[0].Single,$n[8].RotateMode]}]}; }, $n);
    /*DG.Tweening.DOTweenModulePhysics end.*/

    /*DG.Tweening.DOTweenModulePhysics2D start.*/
    $m("DG.Tweening.DOTweenModulePhysics2D", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOJump","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJump","rt":$n[8].Sequence,"p":[$n[1].Rigidbody2D,$n[1].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"path","pt":$n[9].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[8].PathMode,"ps":3}],"sn":"DOLocalPath$1","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody2D,$n[9].Path,$n[0].Single,$n[8].PathMode]},{"a":2,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector2),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[8].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[8].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOLocalPath","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody2D,System.Array.type(UnityEngine.Vector2),$n[0].Single,$n[8].PathType,$n[8].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DOMove","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMove","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody2D,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveX","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody2D,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveY","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody2D,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"path","pt":$n[9].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[8].PathMode,"ps":3}],"sn":"DOPath$1","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody2D,$n[9].Path,$n[0].Single,$n[8].PathMode]},{"a":2,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector2),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[8].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[8].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOPath","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody2D,System.Array.type(UnityEngine.Vector2),$n[0].Single,$n[8].PathType,$n[8].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DORotate","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DORotate","rt":$n[7].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].Rigidbody2D,$n[0].Single,$n[0].Single]}]}; }, $n);
    /*DG.Tweening.DOTweenModulePhysics2D end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    $m("DG.Tweening.DOTweenModuleSprite", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[8].Tweener,"p":[$n[1].SpriteRenderer,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[1].SpriteRenderer,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[1].SpriteRenderer,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[8].Sequence,"p":[$n[1].SpriteRenderer,pc.ColorGradient,$n[0].Single]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    $m("DG.Tweening.DOTweenModuleUI", function () { return {"nested":[$n[8].DOTweenModuleUI.Utils],"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOAnchorMax","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorMax","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorMin","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorMin","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3D","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3D","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector3,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DX","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DY","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DZ","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPosX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPosX","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPosY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPosY","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].Graphic,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[8].Tweener,"p":[$n[10].Graphic,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].Image,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor$1","rt":$n[8].Tweener,"p":[$n[10].Image,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].Text,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor$2","rt":$n[8].Tweener,"p":[$n[10].Text,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].Graphic,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[10].Graphic,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].Image,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$1","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[10].Image,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].Outline,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$2","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[10].Outline,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].Text,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$3","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[10].Text,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOCounter","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].Text,"ps":0},{"n":"fromValue","pt":$n[0].Int32,"ps":1},{"n":"endValue","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3},{"n":"addThousandsSeparator","dv":true,"o":true,"pt":$n[0].Boolean,"ps":4},{"n":"culture","dv":null,"o":true,"pt":$n[11].CultureInfo,"ps":5}],"sn":"DOCounter","rt":$n[7].TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions),"p":[$n[10].Text,$n[0].Int32,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[11].CultureInfo]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].CanvasGroup,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[7].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].CanvasGroup,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].Graphic,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$1","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[10].Graphic,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].Image,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$2","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[10].Image,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].Outline,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$3","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[10].Outline,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].Text,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$4","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[10].Text,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFillAmount","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].Image,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFillAmount","rt":$n[7].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[10].Image,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFlexibleSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].LayoutElement,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOFlexibleSize","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[10].LayoutElement,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].Image,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[8].Sequence,"p":[$n[10].Image,pc.ColorGradient,$n[0].Single]},{"a":2,"n":"DOHorizontalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].ScrollRect,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOHorizontalNormalizedPos","rt":$n[8].Tweener,"p":[$n[10].ScrollRect,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOJumpAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJumpAnchorPos","rt":$n[8].Sequence,"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMinSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].LayoutElement,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMinSize","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[10].LayoutElement,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DONormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].ScrollRect,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DONormalizedPos","rt":$n[8].Tweener,"p":[$n[10].ScrollRect,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOPivot","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivot","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single]},{"a":2,"n":"DOPivotX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivotX","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPivotY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivotY","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPreferredSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].LayoutElement,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOPreferredSize","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[10].LayoutElement,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOPunchAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"punch","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"elasticity","dv":1.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOPunchAnchorPos","rt":$n[8].Tweener,"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOScale","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].Outline,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOScale","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[10].Outline,$n[1].Vector2,$n[0].Single]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"strength","dv":100.0,"o":true,"pt":$n[0].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[0].Boolean,"ps":6},{"n":"randomnessMode","dv":0,"o":true,"pt":$n[8].ShakeRandomnessMode,"ps":7}],"sn":"DOShakeAnchorPos","rt":$n[8].Tweener,"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[0].Boolean,$n[8].ShakeRandomnessMode]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"strength","pt":$n[1].Vector2,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[0].Boolean,"ps":6},{"n":"randomnessMode","dv":0,"o":true,"pt":$n[8].ShakeRandomnessMode,"ps":7}],"sn":"DOShakeAnchorPos$1","rt":$n[8].Tweener,"p":[$n[1].RectTransform,$n[0].Single,$n[1].Vector2,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[0].Boolean,$n[8].ShakeRandomnessMode]},{"a":2,"n":"DOShapeCircle","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"center","pt":$n[1].Vector2,"ps":1},{"n":"endValueDegrees","pt":$n[0].Single,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3},{"n":"relativeCenter","dv":false,"o":true,"pt":$n[0].Boolean,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOShapeCircle","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.CircleOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Single,$n[0].Boolean,$n[0].Boolean]},{"a":2,"n":"DOSizeDelta","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOSizeDelta","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOText","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].Text,"ps":0},{"n":"endValue","pt":$n[0].String,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"richTextEnabled","dv":true,"o":true,"pt":$n[0].Boolean,"ps":3},{"n":"scrambleMode","dv":0,"o":true,"pt":$n[8].ScrambleMode,"ps":4},{"n":"scrambleChars","dv":null,"o":true,"pt":$n[0].String,"ps":5}],"sn":"DOText","rt":$n[7].TweenerCore$3(System.String,System.String,DG.Tweening.Plugins.Options.StringOptions),"p":[$n[10].Text,$n[0].String,$n[0].Single,$n[0].Boolean,$n[8].ScrambleMode,$n[0].String]},{"a":2,"n":"DOValue","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].Slider,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOValue","rt":$n[7].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[10].Slider,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOVerticalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].ScrollRect,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOVerticalNormalizedPos","rt":$n[8].Tweener,"p":[$n[10].ScrollRect,$n[0].Single,$n[0].Single,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    $m("DG.Tweening.DOTweenModuleUI.Utils", function () { return {"td":$n[8].DOTweenModuleUI,"att":1048962,"a":2,"s":true,"m":[{"a":2,"n":"SwitchToRectTransform","is":true,"t":8,"pi":[{"n":"from","pt":$n[1].RectTransform,"ps":0},{"n":"to","pt":$n[1].RectTransform,"ps":1}],"sn":"SwitchToRectTransform","rt":$n[1].Vector2,"p":[$n[1].RectTransform,$n[1].RectTransform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    $m("DG.Tweening.DOTweenModuleUnityVersion", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[8].Sequence,"p":[$n[1].Material,pc.ColorGradient,$n[0].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"property","pt":$n[0].String,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOGradientColor$1","rt":$n[8].Sequence,"p":[$n[1].Material,pc.ColorGradient,$n[0].String,$n[0].Single]},{"a":2,"n":"DOOffset","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"propertyID","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOOffset","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Material,$n[1].Vector2,$n[0].Int32,$n[0].Single]},{"a":2,"n":"DOTiling","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"propertyID","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOTiling","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Material,$n[1].Vector2,$n[0].Int32,$n[0].Single]},{"a":2,"n":"WaitForCompletion","is":true,"t":8,"pi":[{"n":"t","pt":$n[8].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForCompletion","rt":$n[1].CustomYieldInstruction,"p":[$n[8].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForElapsedLoops","is":true,"t":8,"pi":[{"n":"t","pt":$n[8].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[0].Int32,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":2}],"sn":"WaitForElapsedLoops","rt":$n[1].CustomYieldInstruction,"p":[$n[8].Tween,$n[0].Int32,$n[0].Boolean]},{"a":2,"n":"WaitForKill","is":true,"t":8,"pi":[{"n":"t","pt":$n[8].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForKill","rt":$n[1].CustomYieldInstruction,"p":[$n[8].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForPosition","is":true,"t":8,"pi":[{"n":"t","pt":$n[8].Tween,"ps":0},{"n":"position","pt":$n[0].Single,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":2}],"sn":"WaitForPosition","rt":$n[1].CustomYieldInstruction,"p":[$n[8].Tween,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"WaitForRewind","is":true,"t":8,"pi":[{"n":"t","pt":$n[8].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForRewind","rt":$n[1].CustomYieldInstruction,"p":[$n[8].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForStart","is":true,"t":8,"pi":[{"n":"t","pt":$n[8].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForStart","rt":$n[1].CustomYieldInstruction,"p":[$n[8].Tween,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    $m("DG.Tweening.DOTweenCYInstruction", function () { return {"nested":[$n[8].DOTweenCYInstruction.WaitForCompletion,$n[8].DOTweenCYInstruction.WaitForRewind,$n[8].DOTweenCYInstruction.WaitForKill,$n[8].DOTweenCYInstruction.WaitForElapsedLoops,$n[8].DOTweenCYInstruction.WaitForPosition,$n[8].DOTweenCYInstruction.WaitForStart],"att":1048961,"a":2,"s":true}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", function () { return {"td":$n[8].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[8].Tween],"pi":[{"n":"tween","pt":$n[8].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[8].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForRewind", function () { return {"td":$n[8].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[8].Tween],"pi":[{"n":"tween","pt":$n[8].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[8].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForKill", function () { return {"td":$n[8].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[8].Tween],"pi":[{"n":"tween","pt":$n[8].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[8].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", function () { return {"td":$n[8].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[8].Tween,$n[0].Int32],"pi":[{"n":"tween","pt":$n[8].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[0].Int32,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"elapsedLoops","t":4,"rt":$n[0].Int32,"sn":"elapsedLoops","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"t","t":4,"rt":$n[8].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForPosition", function () { return {"td":$n[8].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[8].Tween,$n[0].Single],"pi":[{"n":"tween","pt":$n[8].Tween,"ps":0},{"n":"position","pt":$n[0].Single,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"position","t":4,"rt":$n[0].Single,"sn":"position","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"t","t":4,"rt":$n[8].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForStart", function () { return {"td":$n[8].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[8].Tween],"pi":[{"n":"tween","pt":$n[8].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[8].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    $m("DG.Tweening.DOTweenModuleUtils", function () { return {"nested":[$n[8].DOTweenModuleUtils.Physics],"att":1048961,"a":2,"s":true,"m":[{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"Init","is":true,"t":8,"sn":"Init","rt":$n[0].Void},{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":1,"n":"Preserver","is":true,"t":8,"sn":"Preserver","rt":$n[0].Void},{"a":1,"n":"_initialized","is":true,"t":4,"rt":$n[0].Boolean,"sn":"_initialized","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    $m("DG.Tweening.DOTweenModuleUtils.Physics", function () { return {"td":$n[8].DOTweenModuleUtils,"att":1048962,"a":2,"s":true,"m":[{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"CreateDOTweenPathTween","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].MonoBehaviour,"ps":0},{"n":"tweenRigidbody","pt":$n[0].Boolean,"ps":1},{"n":"isLocal","pt":$n[0].Boolean,"ps":2},{"n":"path","pt":$n[9].Path,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"pathMode","pt":$n[8].PathMode,"ps":5}],"sn":"CreateDOTweenPathTween","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].MonoBehaviour,$n[0].Boolean,$n[0].Boolean,$n[9].Path,$n[0].Single,$n[8].PathMode]},{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"HasRigidbody","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Component,"ps":0}],"sn":"HasRigidbody","rt":$n[0].Boolean,"p":[$n[1].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"HasRigidbody2D","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Component,"ps":0}],"sn":"HasRigidbody2D","rt":$n[0].Boolean,"p":[$n[1].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"SetOrientationOnPath","is":true,"t":8,"pi":[{"n":"options","pt":$n[12].PathOptions,"ps":0},{"n":"t","pt":$n[8].Tween,"ps":1},{"n":"newRot","pt":$n[1].Quaternion,"ps":2},{"n":"trans","pt":$n[1].Transform,"ps":3}],"sn":"SetOrientationOnPath","rt":$n[0].Void,"p":[$n[12].PathOptions,$n[8].Tween,$n[1].Quaternion,$n[1].Transform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    }});
