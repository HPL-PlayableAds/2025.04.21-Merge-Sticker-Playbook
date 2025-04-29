var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i426 = root || request.c( 'UnityEngine.JointSpring' )
  var i427 = data
  i426.spring = i427[0]
  i426.damper = i427[1]
  i426.targetPosition = i427[2]
  return i426
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i428 = root || request.c( 'UnityEngine.JointMotor' )
  var i429 = data
  i428.m_TargetVelocity = i429[0]
  i428.m_Force = i429[1]
  i428.m_FreeSpin = i429[2]
  return i428
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i430 = root || request.c( 'UnityEngine.JointLimits' )
  var i431 = data
  i430.m_Min = i431[0]
  i430.m_Max = i431[1]
  i430.m_Bounciness = i431[2]
  i430.m_BounceMinVelocity = i431[3]
  i430.m_ContactDistance = i431[4]
  i430.minBounce = i431[5]
  i430.maxBounce = i431[6]
  return i430
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i432 = root || request.c( 'UnityEngine.JointDrive' )
  var i433 = data
  i432.m_PositionSpring = i433[0]
  i432.m_PositionDamper = i433[1]
  i432.m_MaximumForce = i433[2]
  i432.m_UseAcceleration = i433[3]
  return i432
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i434 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i435 = data
  i434.m_Spring = i435[0]
  i434.m_Damper = i435[1]
  return i434
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i436 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i437 = data
  i436.m_Limit = i437[0]
  i436.m_Bounciness = i437[1]
  i436.m_ContactDistance = i437[2]
  return i436
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i438 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i439 = data
  i438.m_ExtremumSlip = i439[0]
  i438.m_ExtremumValue = i439[1]
  i438.m_AsymptoteSlip = i439[2]
  i438.m_AsymptoteValue = i439[3]
  i438.m_Stiffness = i439[4]
  return i438
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i440 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i441 = data
  i440.m_LowerAngle = i441[0]
  i440.m_UpperAngle = i441[1]
  return i440
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i442 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i443 = data
  i442.m_MotorSpeed = i443[0]
  i442.m_MaximumMotorTorque = i443[1]
  return i442
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i444 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i445 = data
  i444.m_DampingRatio = i445[0]
  i444.m_Frequency = i445[1]
  i444.m_Angle = i445[2]
  return i444
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i446 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i447 = data
  i446.m_LowerTranslation = i447[0]
  i446.m_UpperTranslation = i447[1]
  return i446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i449 = data
  i448.name = i449[0]
  i448.width = i449[1]
  i448.height = i449[2]
  i448.mipmapCount = i449[3]
  i448.anisoLevel = i449[4]
  i448.filterMode = i449[5]
  i448.hdr = !!i449[6]
  i448.format = i449[7]
  i448.wrapMode = i449[8]
  i448.alphaIsTransparency = !!i449[9]
  i448.alphaSource = i449[10]
  i448.graphicsFormat = i449[11]
  i448.sRGBTexture = !!i449[12]
  i448.desiredColorSpace = i449[13]
  i448.wrapU = i449[14]
  i448.wrapV = i449[15]
  return i448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i450 = root || new pc.UnityMaterial()
  var i451 = data
  i450.name = i451[0]
  request.r(i451[1], i451[2], 0, i450, 'shader')
  i450.renderQueue = i451[3]
  i450.enableInstancing = !!i451[4]
  var i453 = i451[5]
  var i452 = []
  for(var i = 0; i < i453.length; i += 1) {
    i452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i453[i + 0]) );
  }
  i450.floatParameters = i452
  var i455 = i451[6]
  var i454 = []
  for(var i = 0; i < i455.length; i += 1) {
    i454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i455[i + 0]) );
  }
  i450.colorParameters = i454
  var i457 = i451[7]
  var i456 = []
  for(var i = 0; i < i457.length; i += 1) {
    i456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i457[i + 0]) );
  }
  i450.vectorParameters = i456
  var i459 = i451[8]
  var i458 = []
  for(var i = 0; i < i459.length; i += 1) {
    i458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i459[i + 0]) );
  }
  i450.textureParameters = i458
  var i461 = i451[9]
  var i460 = []
  for(var i = 0; i < i461.length; i += 1) {
    i460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i461[i + 0]) );
  }
  i450.materialFlags = i460
  return i450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i465 = data
  i464.name = i465[0]
  i464.value = i465[1]
  return i464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i469 = data
  i468.name = i469[0]
  i468.value = new pc.Color(i469[1], i469[2], i469[3], i469[4])
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i473 = data
  i472.name = i473[0]
  i472.value = new pc.Vec4( i473[1], i473[2], i473[3], i473[4] )
  return i472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i477 = data
  i476.name = i477[0]
  request.r(i477[1], i477[2], 0, i476, 'value')
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i481 = data
  i480.name = i481[0]
  i480.enabled = !!i481[1]
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i483 = data
  i482.pivot = new pc.Vec2( i483[0], i483[1] )
  i482.anchorMin = new pc.Vec2( i483[2], i483[3] )
  i482.anchorMax = new pc.Vec2( i483[4], i483[5] )
  i482.sizeDelta = new pc.Vec2( i483[6], i483[7] )
  i482.anchoredPosition3D = new pc.Vec3( i483[8], i483[9], i483[10] )
  i482.rotation = new pc.Quat(i483[11], i483[12], i483[13], i483[14])
  i482.scale = new pc.Vec3( i483[15], i483[16], i483[17] )
  return i482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i485 = data
  i484.cullTransparentMesh = !!i485[0]
  return i484
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i486 = root || request.c( 'UnityEngine.UI.Image' )
  var i487 = data
  request.r(i487[0], i487[1], 0, i486, 'm_Sprite')
  i486.m_Type = i487[2]
  i486.m_PreserveAspect = !!i487[3]
  i486.m_FillCenter = !!i487[4]
  i486.m_FillMethod = i487[5]
  i486.m_FillAmount = i487[6]
  i486.m_FillClockwise = !!i487[7]
  i486.m_FillOrigin = i487[8]
  i486.m_UseSpriteMesh = !!i487[9]
  i486.m_PixelsPerUnitMultiplier = i487[10]
  request.r(i487[11], i487[12], 0, i486, 'm_Material')
  i486.m_Maskable = !!i487[13]
  i486.m_Color = new pc.Color(i487[14], i487[15], i487[16], i487[17])
  i486.m_RaycastTarget = !!i487[18]
  i486.m_RaycastPadding = new pc.Vec4( i487[19], i487[20], i487[21], i487[22] )
  return i486
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i488 = root || request.c( 'UnityEngine.UI.Button' )
  var i489 = data
  i488.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i489[0], i488.m_OnClick)
  i488.m_Navigation = request.d('UnityEngine.UI.Navigation', i489[1], i488.m_Navigation)
  i488.m_Transition = i489[2]
  i488.m_Colors = request.d('UnityEngine.UI.ColorBlock', i489[3], i488.m_Colors)
  i488.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i489[4], i488.m_SpriteState)
  i488.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i489[5], i488.m_AnimationTriggers)
  i488.m_Interactable = !!i489[6]
  request.r(i489[7], i489[8], 0, i488, 'm_TargetGraphic')
  return i488
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i490 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i491 = data
  i490.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i491[0], i490.m_PersistentCalls)
  return i490
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i492 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i493 = data
  var i495 = i493[0]
  var i494 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i495.length; i += 1) {
    i494.add(request.d('UnityEngine.Events.PersistentCall', i495[i + 0]));
  }
  i492.m_Calls = i494
  return i492
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i498 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i499 = data
  request.r(i499[0], i499[1], 0, i498, 'm_Target')
  i498.m_TargetAssemblyTypeName = i499[2]
  i498.m_MethodName = i499[3]
  i498.m_Mode = i499[4]
  i498.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i499[5], i498.m_Arguments)
  i498.m_CallState = i499[6]
  return i498
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i500 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i501 = data
  i500.m_Mode = i501[0]
  i500.m_WrapAround = !!i501[1]
  request.r(i501[2], i501[3], 0, i500, 'm_SelectOnUp')
  request.r(i501[4], i501[5], 0, i500, 'm_SelectOnDown')
  request.r(i501[6], i501[7], 0, i500, 'm_SelectOnLeft')
  request.r(i501[8], i501[9], 0, i500, 'm_SelectOnRight')
  return i500
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i502 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i503 = data
  i502.m_NormalColor = new pc.Color(i503[0], i503[1], i503[2], i503[3])
  i502.m_HighlightedColor = new pc.Color(i503[4], i503[5], i503[6], i503[7])
  i502.m_PressedColor = new pc.Color(i503[8], i503[9], i503[10], i503[11])
  i502.m_SelectedColor = new pc.Color(i503[12], i503[13], i503[14], i503[15])
  i502.m_DisabledColor = new pc.Color(i503[16], i503[17], i503[18], i503[19])
  i502.m_ColorMultiplier = i503[20]
  i502.m_FadeDuration = i503[21]
  return i502
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i504 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i505 = data
  request.r(i505[0], i505[1], 0, i504, 'm_HighlightedSprite')
  request.r(i505[2], i505[3], 0, i504, 'm_PressedSprite')
  request.r(i505[4], i505[5], 0, i504, 'm_SelectedSprite')
  request.r(i505[6], i505[7], 0, i504, 'm_DisabledSprite')
  return i504
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i506 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i507 = data
  i506.m_NormalTrigger = i507[0]
  i506.m_HighlightedTrigger = i507[1]
  i506.m_PressedTrigger = i507[2]
  i506.m_SelectedTrigger = i507[3]
  i506.m_DisabledTrigger = i507[4]
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i509 = data
  i508.m_Alpha = i509[0]
  i508.m_Interactable = !!i509[1]
  i508.m_BlocksRaycasts = !!i509[2]
  i508.m_IgnoreParentGroups = !!i509[3]
  i508.enabled = !!i509[4]
  return i508
}

Deserializers["CircleDrag"] = function (request, data, root) {
  var i510 = root || request.c( 'CircleDrag' )
  var i511 = data
  i510.circleType = i511[0]
  return i510
}

Deserializers["CircleDrop"] = function (request, data, root) {
  var i512 = root || request.c( 'CircleDrop' )
  var i513 = data
  i512.circleType = i513[0]
  return i512
}

Deserializers["CircleAnimation"] = function (request, data, root) {
  var i514 = root || request.c( 'CircleAnimation' )
  var i515 = data
  i514.shrinkDuration = i515[0]
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i517 = data
  i516.name = i517[0]
  i516.tagId = i517[1]
  i516.enabled = !!i517[2]
  i516.isStatic = !!i517[3]
  i516.layer = i517[4]
  return i516
}

Deserializers["CheckmarkAnimation"] = function (request, data, root) {
  var i518 = root || request.c( 'CheckmarkAnimation' )
  var i519 = data
  i518.scaleUpDuration = i519[0]
  i518.scaleUpAmount = i519[1]
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i521 = data
  i520.name = i521[0]
  i520.atlasId = i521[1]
  i520.mipmapCount = i521[2]
  i520.hdr = !!i521[3]
  i520.size = i521[4]
  i520.anisoLevel = i521[5]
  i520.filterMode = i521[6]
  var i523 = i521[7]
  var i522 = []
  for(var i = 0; i < i523.length; i += 4) {
    i522.push( UnityEngine.Rect.MinMaxRect(i523[i + 0], i523[i + 1], i523[i + 2], i523[i + 3]) );
  }
  i520.rects = i522
  i520.wrapU = i521[8]
  i520.wrapV = i521[9]
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i527 = data
  i526.name = i527[0]
  i526.index = i527[1]
  i526.startup = !!i527[2]
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i529 = data
  i528.position = new pc.Vec3( i529[0], i529[1], i529[2] )
  i528.scale = new pc.Vec3( i529[3], i529[4], i529[5] )
  i528.rotation = new pc.Quat(i529[6], i529[7], i529[8], i529[9])
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i531 = data
  i530.enabled = !!i531[0]
  i530.aspect = i531[1]
  i530.orthographic = !!i531[2]
  i530.orthographicSize = i531[3]
  i530.backgroundColor = new pc.Color(i531[4], i531[5], i531[6], i531[7])
  i530.nearClipPlane = i531[8]
  i530.farClipPlane = i531[9]
  i530.fieldOfView = i531[10]
  i530.depth = i531[11]
  i530.clearFlags = i531[12]
  i530.cullingMask = i531[13]
  i530.rect = i531[14]
  request.r(i531[15], i531[16], 0, i530, 'targetTexture')
  i530.usePhysicalProperties = !!i531[17]
  i530.focalLength = i531[18]
  i530.sensorSize = new pc.Vec2( i531[19], i531[20] )
  i530.lensShift = new pc.Vec2( i531[21], i531[22] )
  i530.gateFit = i531[23]
  i530.commandBufferCount = i531[24]
  i530.cameraType = i531[25]
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i533 = data
  i532.enabled = !!i533[0]
  i532.type = i533[1]
  i532.color = new pc.Color(i533[2], i533[3], i533[4], i533[5])
  i532.cullingMask = i533[6]
  i532.intensity = i533[7]
  i532.range = i533[8]
  i532.spotAngle = i533[9]
  i532.shadows = i533[10]
  i532.shadowNormalBias = i533[11]
  i532.shadowBias = i533[12]
  i532.shadowStrength = i533[13]
  i532.shadowResolution = i533[14]
  i532.lightmapBakeType = i533[15]
  i532.renderMode = i533[16]
  request.r(i533[17], i533[18], 0, i532, 'cookie')
  i532.cookieSize = i533[19]
  return i532
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i535 = data
  request.r(i535[0], i535[1], 0, i534, 'm_FirstSelected')
  i534.m_sendNavigationEvents = !!i535[2]
  i534.m_DragThreshold = i535[3]
  return i534
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i537 = data
  i536.m_HorizontalAxis = i537[0]
  i536.m_VerticalAxis = i537[1]
  i536.m_SubmitButton = i537[2]
  i536.m_CancelButton = i537[3]
  i536.m_InputActionsPerSecond = i537[4]
  i536.m_RepeatDelay = i537[5]
  i536.m_ForceModuleActive = !!i537[6]
  i536.m_SendPointerHoverToParent = !!i537[7]
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i539 = data
  i538.enabled = !!i539[0]
  i538.planeDistance = i539[1]
  i538.referencePixelsPerUnit = i539[2]
  i538.isFallbackOverlay = !!i539[3]
  i538.renderMode = i539[4]
  i538.renderOrder = i539[5]
  i538.sortingLayerName = i539[6]
  i538.sortingOrder = i539[7]
  i538.scaleFactor = i539[8]
  request.r(i539[9], i539[10], 0, i538, 'worldCamera')
  i538.overrideSorting = !!i539[11]
  i538.pixelPerfect = !!i539[12]
  i538.targetDisplay = i539[13]
  i538.overridePixelPerfect = !!i539[14]
  return i538
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i541 = data
  i540.m_UiScaleMode = i541[0]
  i540.m_ReferencePixelsPerUnit = i541[1]
  i540.m_ScaleFactor = i541[2]
  i540.m_ReferenceResolution = new pc.Vec2( i541[3], i541[4] )
  i540.m_ScreenMatchMode = i541[5]
  i540.m_MatchWidthOrHeight = i541[6]
  i540.m_PhysicalUnit = i541[7]
  i540.m_FallbackScreenDPI = i541[8]
  i540.m_DefaultSpriteDPI = i541[9]
  i540.m_DynamicPixelsPerUnit = i541[10]
  i540.m_PresetInfoIsWorld = !!i541[11]
  return i540
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i543 = data
  i542.m_IgnoreReversedGraphics = !!i543[0]
  i542.m_BlockingObjects = i543[1]
  i542.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i543[2] )
  return i542
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i545 = data
  request.r(i545[0], i545[1], 0, i544, 'm_ObjectArgument')
  i544.m_ObjectArgumentAssemblyTypeName = i545[2]
  i544.m_IntArgument = i545[3]
  i544.m_FloatArgument = i545[4]
  i544.m_StringArgument = i545[5]
  i544.m_BoolArgument = !!i545[6]
  return i544
}

Deserializers["DownloadNow"] = function (request, data, root) {
  var i546 = root || request.c( 'DownloadNow' )
  var i547 = data
  i546.iosLink = i547[0]
  i546.androidLink = i547[1]
  return i546
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i548 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i549 = data
  i548.m_hasFontAssetChanged = !!i549[0]
  request.r(i549[1], i549[2], 0, i548, 'm_baseMaterial')
  i548.m_maskOffset = new pc.Vec4( i549[3], i549[4], i549[5], i549[6] )
  i548.m_text = i549[7]
  i548.m_isRightToLeft = !!i549[8]
  request.r(i549[9], i549[10], 0, i548, 'm_fontAsset')
  request.r(i549[11], i549[12], 0, i548, 'm_sharedMaterial')
  var i551 = i549[13]
  var i550 = []
  for(var i = 0; i < i551.length; i += 2) {
  request.r(i551[i + 0], i551[i + 1], 2, i550, '')
  }
  i548.m_fontSharedMaterials = i550
  request.r(i549[14], i549[15], 0, i548, 'm_fontMaterial')
  var i553 = i549[16]
  var i552 = []
  for(var i = 0; i < i553.length; i += 2) {
  request.r(i553[i + 0], i553[i + 1], 2, i552, '')
  }
  i548.m_fontMaterials = i552
  i548.m_fontColor32 = UnityEngine.Color32.ConstructColor(i549[17], i549[18], i549[19], i549[20])
  i548.m_fontColor = new pc.Color(i549[21], i549[22], i549[23], i549[24])
  i548.m_enableVertexGradient = !!i549[25]
  i548.m_colorMode = i549[26]
  i548.m_fontColorGradient = request.d('TMPro.VertexGradient', i549[27], i548.m_fontColorGradient)
  request.r(i549[28], i549[29], 0, i548, 'm_fontColorGradientPreset')
  request.r(i549[30], i549[31], 0, i548, 'm_spriteAsset')
  i548.m_tintAllSprites = !!i549[32]
  request.r(i549[33], i549[34], 0, i548, 'm_StyleSheet')
  i548.m_TextStyleHashCode = i549[35]
  i548.m_overrideHtmlColors = !!i549[36]
  i548.m_faceColor = UnityEngine.Color32.ConstructColor(i549[37], i549[38], i549[39], i549[40])
  i548.m_fontSize = i549[41]
  i548.m_fontSizeBase = i549[42]
  i548.m_fontWeight = i549[43]
  i548.m_enableAutoSizing = !!i549[44]
  i548.m_fontSizeMin = i549[45]
  i548.m_fontSizeMax = i549[46]
  i548.m_fontStyle = i549[47]
  i548.m_HorizontalAlignment = i549[48]
  i548.m_VerticalAlignment = i549[49]
  i548.m_textAlignment = i549[50]
  i548.m_characterSpacing = i549[51]
  i548.m_wordSpacing = i549[52]
  i548.m_lineSpacing = i549[53]
  i548.m_lineSpacingMax = i549[54]
  i548.m_paragraphSpacing = i549[55]
  i548.m_charWidthMaxAdj = i549[56]
  i548.m_enableWordWrapping = !!i549[57]
  i548.m_wordWrappingRatios = i549[58]
  i548.m_overflowMode = i549[59]
  request.r(i549[60], i549[61], 0, i548, 'm_linkedTextComponent')
  request.r(i549[62], i549[63], 0, i548, 'parentLinkedComponent')
  i548.m_enableKerning = !!i549[64]
  i548.m_enableExtraPadding = !!i549[65]
  i548.checkPaddingRequired = !!i549[66]
  i548.m_isRichText = !!i549[67]
  i548.m_parseCtrlCharacters = !!i549[68]
  i548.m_isOrthographic = !!i549[69]
  i548.m_isCullingEnabled = !!i549[70]
  i548.m_horizontalMapping = i549[71]
  i548.m_verticalMapping = i549[72]
  i548.m_uvLineOffset = i549[73]
  i548.m_geometrySortingOrder = i549[74]
  i548.m_IsTextObjectScaleStatic = !!i549[75]
  i548.m_VertexBufferAutoSizeReduction = !!i549[76]
  i548.m_useMaxVisibleDescender = !!i549[77]
  i548.m_pageToDisplay = i549[78]
  i548.m_margin = new pc.Vec4( i549[79], i549[80], i549[81], i549[82] )
  i548.m_isUsingLegacyAnimationComponent = !!i549[83]
  i548.m_isVolumetricText = !!i549[84]
  request.r(i549[85], i549[86], 0, i548, 'm_Material')
  i548.m_Maskable = !!i549[87]
  i548.m_Color = new pc.Color(i549[88], i549[89], i549[90], i549[91])
  i548.m_RaycastTarget = !!i549[92]
  i548.m_RaycastPadding = new pc.Vec4( i549[93], i549[94], i549[95], i549[96] )
  return i548
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i556 = root || request.c( 'TMPro.VertexGradient' )
  var i557 = data
  i556.topLeft = new pc.Color(i557[0], i557[1], i557[2], i557[3])
  i556.topRight = new pc.Color(i557[4], i557[5], i557[6], i557[7])
  i556.bottomLeft = new pc.Color(i557[8], i557[9], i557[10], i557[11])
  i556.bottomRight = new pc.Color(i557[12], i557[13], i557[14], i557[15])
  return i556
}

Deserializers["ObjectAnimation"] = function (request, data, root) {
  var i558 = root || request.c( 'ObjectAnimation' )
  var i559 = data
  i558.fadeDuration = i559[0]
  return i558
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i560 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i561 = data
  i560.m_Spacing = i561[0]
  i560.m_ChildForceExpandWidth = !!i561[1]
  i560.m_ChildForceExpandHeight = !!i561[2]
  i560.m_ChildControlWidth = !!i561[3]
  i560.m_ChildControlHeight = !!i561[4]
  i560.m_ChildScaleWidth = !!i561[5]
  i560.m_ChildScaleHeight = !!i561[6]
  i560.m_ReverseArrangement = !!i561[7]
  i560.m_Padding = UnityEngine.RectOffset.FromPaddings(i561[8], i561[9], i561[10], i561[11])
  i560.m_ChildAlignment = i561[12]
  return i560
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i562 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i563 = data
  i562.m_Spacing = i563[0]
  i562.m_ChildForceExpandWidth = !!i563[1]
  i562.m_ChildForceExpandHeight = !!i563[2]
  i562.m_ChildControlWidth = !!i563[3]
  i562.m_ChildControlHeight = !!i563[4]
  i562.m_ChildScaleWidth = !!i563[5]
  i562.m_ChildScaleHeight = !!i563[6]
  i562.m_ReverseArrangement = !!i563[7]
  i562.m_Padding = UnityEngine.RectOffset.FromPaddings(i563[8], i563[9], i563[10], i563[11])
  i562.m_ChildAlignment = i563[12]
  return i562
}

Deserializers["TutorialHand"] = function (request, data, root) {
  var i564 = root || request.c( 'TutorialHand' )
  var i565 = data
  request.r(i565[0], i565[1], 0, i564, 'handRectTransform')
  i564.pointA = new pc.Vec2( i565[2], i565[3] )
  i564.pointB = new pc.Vec2( i565[4], i565[5] )
  i564.moveDuration = i565[6]
  i564.fadeDuration = i565[7]
  return i564
}

Deserializers["EndCardAnimation"] = function (request, data, root) {
  var i566 = root || request.c( 'EndCardAnimation' )
  var i567 = data
  request.r(i567[0], i567[1], 0, i566, 'canvasGroupInGame')
  request.r(i567[2], i567[3], 0, i566, 'canvasGroupInGameBG')
  request.r(i567[4], i567[5], 0, i566, 'canvasGroupEndCard')
  request.r(i567[6], i567[7], 0, i566, 'canvasGroupEndCardBG')
  i566.fadeDuration = i567[8]
  request.r(i567[9], i567[10], 0, i566, 'downloadButton')
  i566.scaleDuration = i567[11]
  i566.scaleFactor = i567[12]
  return i566
}

Deserializers["LevelManager"] = function (request, data, root) {
  var i568 = root || request.c( 'LevelManager' )
  var i569 = data
  var i571 = i569[0]
  var i570 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i571.length; i += 1) {
    i570.add(i571[i + 0]);
  }
  i568.requiredColors = i570
  var i573 = i569[1]
  var i572 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i573.length; i += 2) {
  request.r(i573[i + 0], i573[i + 1], 1, i572, '')
  }
  i568.colorGoalObjects = i572
  var i575 = i569[2]
  var i574 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i575.length; i += 2) {
  request.r(i575[i + 0], i575[i + 1], 1, i574, '')
  }
  i568.colorCheckmarkObjects = i574
  request.r(i569[3], i569[4], 0, i568, 'colorCounterText')
  request.r(i569[5], i569[6], 0, i568, 'EndCard')
  i568.isLongVersion = !!i569[7]
  i568.nextLevelName = i569[8]
  return i568
}

Deserializers["LongVersion"] = function (request, data, root) {
  var i580 = root || request.c( 'LongVersion' )
  var i581 = data
  i580.isLongVersion = !!i581[0]
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i583 = data
  request.r(i583[0], i583[1], 0, i582, 'clip')
  request.r(i583[2], i583[3], 0, i582, 'outputAudioMixerGroup')
  i582.playOnAwake = !!i583[4]
  i582.loop = !!i583[5]
  i582.time = i583[6]
  i582.volume = i583[7]
  i582.pitch = i583[8]
  i582.enabled = !!i583[9]
  return i582
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i584 = root || request.c( 'AudioManager' )
  var i585 = data
  request.r(i585[0], i585[1], 0, i584, 'audioSource')
  request.r(i585[2], i585[3], 0, i584, 'buttonClick')
  request.r(i585[4], i585[5], 0, i584, 'correctMerge')
  request.r(i585[6], i585[7], 0, i584, 'wrongMerge')
  request.r(i585[8], i585[9], 0, i584, 'merging')
  request.r(i585[10], i585[11], 0, i584, 'win')
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i587 = data
  i586.ambientIntensity = i587[0]
  i586.reflectionIntensity = i587[1]
  i586.ambientMode = i587[2]
  i586.ambientLight = new pc.Color(i587[3], i587[4], i587[5], i587[6])
  i586.ambientSkyColor = new pc.Color(i587[7], i587[8], i587[9], i587[10])
  i586.ambientGroundColor = new pc.Color(i587[11], i587[12], i587[13], i587[14])
  i586.ambientEquatorColor = new pc.Color(i587[15], i587[16], i587[17], i587[18])
  i586.fogColor = new pc.Color(i587[19], i587[20], i587[21], i587[22])
  i586.fogEndDistance = i587[23]
  i586.fogStartDistance = i587[24]
  i586.fogDensity = i587[25]
  i586.fog = !!i587[26]
  request.r(i587[27], i587[28], 0, i586, 'skybox')
  i586.fogMode = i587[29]
  var i589 = i587[30]
  var i588 = []
  for(var i = 0; i < i589.length; i += 1) {
    i588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i589[i + 0]) );
  }
  i586.lightmaps = i588
  i586.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i587[31], i586.lightProbes)
  i586.lightmapsMode = i587[32]
  i586.mixedBakeMode = i587[33]
  i586.environmentLightingMode = i587[34]
  i586.ambientProbe = new pc.SphericalHarmonicsL2(i587[35])
  i586.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i587[36])
  i586.useReferenceAmbientProbe = !!i587[37]
  request.r(i587[38], i587[39], 0, i586, 'customReflection')
  request.r(i587[40], i587[41], 0, i586, 'defaultReflection')
  i586.defaultReflectionMode = i587[42]
  i586.defaultReflectionResolution = i587[43]
  i586.sunLightObjectId = i587[44]
  i586.pixelLightCount = i587[45]
  i586.defaultReflectionHDR = !!i587[46]
  i586.hasLightDataAsset = !!i587[47]
  i586.hasManualGenerate = !!i587[48]
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i593 = data
  request.r(i593[0], i593[1], 0, i592, 'lightmapColor')
  request.r(i593[2], i593[3], 0, i592, 'lightmapDirection')
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i594 = root || new UnityEngine.LightProbes()
  var i595 = data
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i603 = data
  var i605 = i603[0]
  var i604 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i605.length; i += 1) {
    i604.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i605[i + 0]));
  }
  i602.ShaderCompilationErrors = i604
  i602.name = i603[1]
  i602.guid = i603[2]
  var i607 = i603[3]
  var i606 = []
  for(var i = 0; i < i607.length; i += 1) {
    i606.push( i607[i + 0] );
  }
  i602.shaderDefinedKeywords = i606
  var i609 = i603[4]
  var i608 = []
  for(var i = 0; i < i609.length; i += 1) {
    i608.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i609[i + 0]) );
  }
  i602.passes = i608
  var i611 = i603[5]
  var i610 = []
  for(var i = 0; i < i611.length; i += 1) {
    i610.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i611[i + 0]) );
  }
  i602.usePasses = i610
  var i613 = i603[6]
  var i612 = []
  for(var i = 0; i < i613.length; i += 1) {
    i612.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i613[i + 0]) );
  }
  i602.defaultParameterValues = i612
  request.r(i603[7], i603[8], 0, i602, 'unityFallbackShader')
  i602.readDepth = !!i603[9]
  i602.isCreatedByShaderGraph = !!i603[10]
  i602.compiled = !!i603[11]
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i617 = data
  i616.shaderName = i617[0]
  i616.errorMessage = i617[1]
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i622 = root || new pc.UnityShaderPass()
  var i623 = data
  i622.id = i623[0]
  i622.subShaderIndex = i623[1]
  i622.name = i623[2]
  i622.passType = i623[3]
  i622.grabPassTextureName = i623[4]
  i622.usePass = !!i623[5]
  i622.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i623[6], i622.zTest)
  i622.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i623[7], i622.zWrite)
  i622.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i623[8], i622.culling)
  i622.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i623[9], i622.blending)
  i622.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i623[10], i622.alphaBlending)
  i622.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i623[11], i622.colorWriteMask)
  i622.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i623[12], i622.offsetUnits)
  i622.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i623[13], i622.offsetFactor)
  i622.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i623[14], i622.stencilRef)
  i622.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i623[15], i622.stencilReadMask)
  i622.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i623[16], i622.stencilWriteMask)
  i622.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i623[17], i622.stencilOp)
  i622.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i623[18], i622.stencilOpFront)
  i622.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i623[19], i622.stencilOpBack)
  var i625 = i623[20]
  var i624 = []
  for(var i = 0; i < i625.length; i += 1) {
    i624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i625[i + 0]) );
  }
  i622.tags = i624
  var i627 = i623[21]
  var i626 = []
  for(var i = 0; i < i627.length; i += 1) {
    i626.push( i627[i + 0] );
  }
  i622.passDefinedKeywords = i626
  var i629 = i623[22]
  var i628 = []
  for(var i = 0; i < i629.length; i += 1) {
    i628.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i629[i + 0]) );
  }
  i622.passDefinedKeywordGroups = i628
  var i631 = i623[23]
  var i630 = []
  for(var i = 0; i < i631.length; i += 1) {
    i630.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i631[i + 0]) );
  }
  i622.variants = i630
  var i633 = i623[24]
  var i632 = []
  for(var i = 0; i < i633.length; i += 1) {
    i632.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i633[i + 0]) );
  }
  i622.excludedVariants = i632
  i622.hasDepthReader = !!i623[25]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i635 = data
  i634.val = i635[0]
  i634.name = i635[1]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i637 = data
  i636.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i637[0], i636.src)
  i636.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i637[1], i636.dst)
  i636.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i637[2], i636.op)
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i639 = data
  i638.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i639[0], i638.pass)
  i638.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i639[1], i638.fail)
  i638.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i639[2], i638.zFail)
  i638.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i639[3], i638.comp)
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i643 = data
  i642.name = i643[0]
  i642.value = i643[1]
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i647 = data
  var i649 = i647[0]
  var i648 = []
  for(var i = 0; i < i649.length; i += 1) {
    i648.push( i649[i + 0] );
  }
  i646.keywords = i648
  i646.hasDiscard = !!i647[1]
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i653 = data
  i652.passId = i653[0]
  i652.subShaderIndex = i653[1]
  var i655 = i653[2]
  var i654 = []
  for(var i = 0; i < i655.length; i += 1) {
    i654.push( i655[i + 0] );
  }
  i652.keywords = i654
  i652.vertexProgram = i653[3]
  i652.fragmentProgram = i653[4]
  i652.exportedForWebGl2 = !!i653[5]
  i652.readDepth = !!i653[6]
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i659 = data
  request.r(i659[0], i659[1], 0, i658, 'shader')
  i658.pass = i659[2]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i663 = data
  i662.name = i663[0]
  i662.type = i663[1]
  i662.value = new pc.Vec4( i663[2], i663[3], i663[4], i663[5] )
  i662.textureValue = i663[6]
  i662.shaderPropertyFlag = i663[7]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i665 = data
  i664.name = i665[0]
  request.r(i665[1], i665[2], 0, i664, 'texture')
  i664.aabb = i665[3]
  i664.vertices = i665[4]
  i664.triangles = i665[5]
  i664.textureRect = UnityEngine.Rect.MinMaxRect(i665[6], i665[7], i665[8], i665[9])
  i664.packedRect = UnityEngine.Rect.MinMaxRect(i665[10], i665[11], i665[12], i665[13])
  i664.border = new pc.Vec4( i665[14], i665[15], i665[16], i665[17] )
  i664.transparency = i665[18]
  i664.bounds = i665[19]
  i664.pixelsPerUnit = i665[20]
  i664.textureWidth = i665[21]
  i664.textureHeight = i665[22]
  i664.nativeSize = new pc.Vec2( i665[23], i665[24] )
  i664.pivot = new pc.Vec2( i665[25], i665[26] )
  i664.textureRectOffset = new pc.Vec2( i665[27], i665[28] )
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i667 = data
  i666.name = i667[0]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i669 = data
  i668.name = i669[0]
  i668.ascent = i669[1]
  i668.originalLineHeight = i669[2]
  i668.fontSize = i669[3]
  var i671 = i669[4]
  var i670 = []
  for(var i = 0; i < i671.length; i += 1) {
    i670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i671[i + 0]) );
  }
  i668.characterInfo = i670
  request.r(i669[5], i669[6], 0, i668, 'texture')
  i668.originalFontSize = i669[7]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i675 = data
  i674.index = i675[0]
  i674.advance = i675[1]
  i674.bearing = i675[2]
  i674.glyphWidth = i675[3]
  i674.glyphHeight = i675[4]
  i674.minX = i675[5]
  i674.maxX = i675[6]
  i674.minY = i675[7]
  i674.maxY = i675[8]
  i674.uvBottomLeftX = i675[9]
  i674.uvBottomLeftY = i675[10]
  i674.uvBottomRightX = i675[11]
  i674.uvBottomRightY = i675[12]
  i674.uvTopLeftX = i675[13]
  i674.uvTopLeftY = i675[14]
  i674.uvTopRightX = i675[15]
  i674.uvTopRightY = i675[16]
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i677 = data
  i676.name = i677[0]
  i676.bytes64 = i677[1]
  i676.data = i677[2]
  return i676
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i678 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i679 = data
  i678.hashCode = i679[0]
  request.r(i679[1], i679[2], 0, i678, 'material')
  i678.materialHashCode = i679[3]
  request.r(i679[4], i679[5], 0, i678, 'atlas')
  i678.normalStyle = i679[6]
  i678.normalSpacingOffset = i679[7]
  i678.boldStyle = i679[8]
  i678.boldSpacing = i679[9]
  i678.italicStyle = i679[10]
  i678.tabSize = i679[11]
  i678.m_Version = i679[12]
  i678.m_SourceFontFileGUID = i679[13]
  request.r(i679[14], i679[15], 0, i678, 'm_SourceFontFile_EditorRef')
  request.r(i679[16], i679[17], 0, i678, 'm_SourceFontFile')
  i678.m_AtlasPopulationMode = i679[18]
  i678.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i679[19], i678.m_FaceInfo)
  var i681 = i679[20]
  var i680 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i681.length; i += 1) {
    i680.add(request.d('UnityEngine.TextCore.Glyph', i681[i + 0]));
  }
  i678.m_GlyphTable = i680
  var i683 = i679[21]
  var i682 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i683.length; i += 1) {
    i682.add(request.d('TMPro.TMP_Character', i683[i + 0]));
  }
  i678.m_CharacterTable = i682
  var i685 = i679[22]
  var i684 = []
  for(var i = 0; i < i685.length; i += 2) {
  request.r(i685[i + 0], i685[i + 1], 2, i684, '')
  }
  i678.m_AtlasTextures = i684
  i678.m_AtlasTextureIndex = i679[23]
  i678.m_IsMultiAtlasTexturesEnabled = !!i679[24]
  i678.m_ClearDynamicDataOnBuild = !!i679[25]
  var i687 = i679[26]
  var i686 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i687.length; i += 1) {
    i686.add(request.d('UnityEngine.TextCore.GlyphRect', i687[i + 0]));
  }
  i678.m_UsedGlyphRects = i686
  var i689 = i679[27]
  var i688 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i689.length; i += 1) {
    i688.add(request.d('UnityEngine.TextCore.GlyphRect', i689[i + 0]));
  }
  i678.m_FreeGlyphRects = i688
  i678.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i679[28], i678.m_fontInfo)
  i678.m_AtlasWidth = i679[29]
  i678.m_AtlasHeight = i679[30]
  i678.m_AtlasPadding = i679[31]
  i678.m_AtlasRenderMode = i679[32]
  var i691 = i679[33]
  var i690 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i691.length; i += 1) {
    i690.add(request.d('TMPro.TMP_Glyph', i691[i + 0]));
  }
  i678.m_glyphInfoList = i690
  i678.m_KerningTable = request.d('TMPro.KerningTable', i679[34], i678.m_KerningTable)
  i678.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i679[35], i678.m_FontFeatureTable)
  var i693 = i679[36]
  var i692 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i693.length; i += 2) {
  request.r(i693[i + 0], i693[i + 1], 1, i692, '')
  }
  i678.fallbackFontAssets = i692
  var i695 = i679[37]
  var i694 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i695.length; i += 2) {
  request.r(i695[i + 0], i695[i + 1], 1, i694, '')
  }
  i678.m_FallbackFontAssetTable = i694
  i678.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i679[38], i678.m_CreationSettings)
  var i697 = i679[39]
  var i696 = []
  for(var i = 0; i < i697.length; i += 1) {
    i696.push( request.d('TMPro.TMP_FontWeightPair', i697[i + 0]) );
  }
  i678.m_FontWeightTable = i696
  var i699 = i679[40]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( request.d('TMPro.TMP_FontWeightPair', i699[i + 0]) );
  }
  i678.fontWeights = i698
  return i678
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i701 = data
  i700.m_FaceIndex = i701[0]
  i700.m_FamilyName = i701[1]
  i700.m_StyleName = i701[2]
  i700.m_PointSize = i701[3]
  i700.m_Scale = i701[4]
  i700.m_UnitsPerEM = i701[5]
  i700.m_LineHeight = i701[6]
  i700.m_AscentLine = i701[7]
  i700.m_CapLine = i701[8]
  i700.m_MeanLine = i701[9]
  i700.m_Baseline = i701[10]
  i700.m_DescentLine = i701[11]
  i700.m_SuperscriptOffset = i701[12]
  i700.m_SuperscriptSize = i701[13]
  i700.m_SubscriptOffset = i701[14]
  i700.m_SubscriptSize = i701[15]
  i700.m_UnderlineOffset = i701[16]
  i700.m_UnderlineThickness = i701[17]
  i700.m_StrikethroughOffset = i701[18]
  i700.m_StrikethroughThickness = i701[19]
  i700.m_TabWidth = i701[20]
  return i700
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i705 = data
  i704.m_Index = i705[0]
  i704.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i705[1], i704.m_Metrics)
  i704.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i705[2], i704.m_GlyphRect)
  i704.m_Scale = i705[3]
  i704.m_AtlasIndex = i705[4]
  i704.m_ClassDefinitionType = i705[5]
  return i704
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i706 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i707 = data
  i706.m_Width = i707[0]
  i706.m_Height = i707[1]
  i706.m_HorizontalBearingX = i707[2]
  i706.m_HorizontalBearingY = i707[3]
  i706.m_HorizontalAdvance = i707[4]
  return i706
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i708 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i709 = data
  i708.m_X = i709[0]
  i708.m_Y = i709[1]
  i708.m_Width = i709[2]
  i708.m_Height = i709[3]
  return i708
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i712 = root || request.c( 'TMPro.TMP_Character' )
  var i713 = data
  i712.m_ElementType = i713[0]
  i712.m_Unicode = i713[1]
  i712.m_GlyphIndex = i713[2]
  i712.m_Scale = i713[3]
  return i712
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i718 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i719 = data
  i718.Name = i719[0]
  i718.PointSize = i719[1]
  i718.Scale = i719[2]
  i718.CharacterCount = i719[3]
  i718.LineHeight = i719[4]
  i718.Baseline = i719[5]
  i718.Ascender = i719[6]
  i718.CapHeight = i719[7]
  i718.Descender = i719[8]
  i718.CenterLine = i719[9]
  i718.SuperscriptOffset = i719[10]
  i718.SubscriptOffset = i719[11]
  i718.SubSize = i719[12]
  i718.Underline = i719[13]
  i718.UnderlineThickness = i719[14]
  i718.strikethrough = i719[15]
  i718.strikethroughThickness = i719[16]
  i718.TabWidth = i719[17]
  i718.Padding = i719[18]
  i718.AtlasWidth = i719[19]
  i718.AtlasHeight = i719[20]
  return i718
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i722 = root || request.c( 'TMPro.TMP_Glyph' )
  var i723 = data
  i722.id = i723[0]
  i722.x = i723[1]
  i722.y = i723[2]
  i722.width = i723[3]
  i722.height = i723[4]
  i722.xOffset = i723[5]
  i722.yOffset = i723[6]
  i722.xAdvance = i723[7]
  i722.scale = i723[8]
  return i722
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i724 = root || request.c( 'TMPro.KerningTable' )
  var i725 = data
  var i727 = i725[0]
  var i726 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i727.length; i += 1) {
    i726.add(request.d('TMPro.KerningPair', i727[i + 0]));
  }
  i724.kerningPairs = i726
  return i724
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i730 = root || request.c( 'TMPro.KerningPair' )
  var i731 = data
  i730.xOffset = i731[0]
  i730.m_FirstGlyph = i731[1]
  i730.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i731[2], i730.m_FirstGlyphAdjustments)
  i730.m_SecondGlyph = i731[3]
  i730.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i731[4], i730.m_SecondGlyphAdjustments)
  i730.m_IgnoreSpacingAdjustments = !!i731[5]
  return i730
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i732 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i733 = data
  var i735 = i733[0]
  var i734 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i735.length; i += 1) {
    i734.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i735[i + 0]));
  }
  i732.m_GlyphPairAdjustmentRecords = i734
  return i732
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i738 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i739 = data
  i738.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i739[0], i738.m_FirstAdjustmentRecord)
  i738.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i739[1], i738.m_SecondAdjustmentRecord)
  i738.m_FeatureLookupFlags = i739[2]
  return i738
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i742 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i743 = data
  i742.sourceFontFileName = i743[0]
  i742.sourceFontFileGUID = i743[1]
  i742.pointSizeSamplingMode = i743[2]
  i742.pointSize = i743[3]
  i742.padding = i743[4]
  i742.packingMode = i743[5]
  i742.atlasWidth = i743[6]
  i742.atlasHeight = i743[7]
  i742.characterSetSelectionMode = i743[8]
  i742.characterSequence = i743[9]
  i742.referencedFontAssetGUID = i743[10]
  i742.referencedTextAssetGUID = i743[11]
  i742.fontStyle = i743[12]
  i742.fontStyleModifier = i743[13]
  i742.renderMode = i743[14]
  i742.includeFontFeatures = !!i743[15]
  return i742
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i746 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i747 = data
  request.r(i747[0], i747[1], 0, i746, 'regularTypeface')
  request.r(i747[2], i747[3], 0, i746, 'italicTypeface')
  return i746
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i748 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i749 = data
  i748.useSafeMode = !!i749[0]
  i748.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i749[1], i748.safeModeOptions)
  i748.timeScale = i749[2]
  i748.unscaledTimeScale = i749[3]
  i748.useSmoothDeltaTime = !!i749[4]
  i748.maxSmoothUnscaledTime = i749[5]
  i748.rewindCallbackMode = i749[6]
  i748.showUnityEditorReport = !!i749[7]
  i748.logBehaviour = i749[8]
  i748.drawGizmos = !!i749[9]
  i748.defaultRecyclable = !!i749[10]
  i748.defaultAutoPlay = i749[11]
  i748.defaultUpdateType = i749[12]
  i748.defaultTimeScaleIndependent = !!i749[13]
  i748.defaultEaseType = i749[14]
  i748.defaultEaseOvershootOrAmplitude = i749[15]
  i748.defaultEasePeriod = i749[16]
  i748.defaultAutoKill = !!i749[17]
  i748.defaultLoopType = i749[18]
  i748.debugMode = !!i749[19]
  i748.debugStoreTargetId = !!i749[20]
  i748.showPreviewPanel = !!i749[21]
  i748.storeSettingsLocation = i749[22]
  i748.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i749[23], i748.modules)
  i748.createASMDEF = !!i749[24]
  i748.showPlayingTweens = !!i749[25]
  i748.showPausedTweens = !!i749[26]
  return i748
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i750 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i751 = data
  i750.logBehaviour = i751[0]
  i750.nestedTweenFailureBehaviour = i751[1]
  return i750
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i752 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i753 = data
  i752.showPanel = !!i753[0]
  i752.audioEnabled = !!i753[1]
  i752.physicsEnabled = !!i753[2]
  i752.physics2DEnabled = !!i753[3]
  i752.spriteEnabled = !!i753[4]
  i752.uiEnabled = !!i753[5]
  i752.textMeshProEnabled = !!i753[6]
  i752.tk2DEnabled = !!i753[7]
  i752.deAudioEnabled = !!i753[8]
  i752.deUnityExtendedEnabled = !!i753[9]
  i752.epoOutlineEnabled = !!i753[10]
  return i752
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i754 = root || request.c( 'TMPro.TMP_Settings' )
  var i755 = data
  i754.m_enableWordWrapping = !!i755[0]
  i754.m_enableKerning = !!i755[1]
  i754.m_enableExtraPadding = !!i755[2]
  i754.m_enableTintAllSprites = !!i755[3]
  i754.m_enableParseEscapeCharacters = !!i755[4]
  i754.m_EnableRaycastTarget = !!i755[5]
  i754.m_GetFontFeaturesAtRuntime = !!i755[6]
  i754.m_missingGlyphCharacter = i755[7]
  i754.m_warningsDisabled = !!i755[8]
  request.r(i755[9], i755[10], 0, i754, 'm_defaultFontAsset')
  i754.m_defaultFontAssetPath = i755[11]
  i754.m_defaultFontSize = i755[12]
  i754.m_defaultAutoSizeMinRatio = i755[13]
  i754.m_defaultAutoSizeMaxRatio = i755[14]
  i754.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i755[15], i755[16] )
  i754.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i755[17], i755[18] )
  i754.m_autoSizeTextContainer = !!i755[19]
  i754.m_IsTextObjectScaleStatic = !!i755[20]
  var i757 = i755[21]
  var i756 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i757.length; i += 2) {
  request.r(i757[i + 0], i757[i + 1], 1, i756, '')
  }
  i754.m_fallbackFontAssets = i756
  i754.m_matchMaterialPreset = !!i755[22]
  request.r(i755[23], i755[24], 0, i754, 'm_defaultSpriteAsset')
  i754.m_defaultSpriteAssetPath = i755[25]
  i754.m_enableEmojiSupport = !!i755[26]
  i754.m_MissingCharacterSpriteUnicode = i755[27]
  i754.m_defaultColorGradientPresetsPath = i755[28]
  request.r(i755[29], i755[30], 0, i754, 'm_defaultStyleSheet')
  i754.m_StyleSheetsResourcePath = i755[31]
  request.r(i755[32], i755[33], 0, i754, 'm_leadingCharacters')
  request.r(i755[34], i755[35], 0, i754, 'm_followingCharacters')
  i754.m_UseModernHangulLineBreakingRules = !!i755[36]
  return i754
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i758 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i759 = data
  i758.m_GlyphIndex = i759[0]
  i758.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i759[1], i758.m_GlyphValueRecord)
  return i758
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i760 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i761 = data
  i760.m_XPlacement = i761[0]
  i760.m_YPlacement = i761[1]
  i760.m_XAdvance = i761[2]
  i760.m_YAdvance = i761[3]
  return i760
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i762 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i763 = data
  i762.hashCode = i763[0]
  request.r(i763[1], i763[2], 0, i762, 'material')
  i762.materialHashCode = i763[3]
  request.r(i763[4], i763[5], 0, i762, 'spriteSheet')
  var i765 = i763[6]
  var i764 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i765.length; i += 1) {
    i764.add(request.d('TMPro.TMP_Sprite', i765[i + 0]));
  }
  i762.spriteInfoList = i764
  var i767 = i763[7]
  var i766 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i767.length; i += 2) {
  request.r(i767[i + 0], i767[i + 1], 1, i766, '')
  }
  i762.fallbackSpriteAssets = i766
  i762.m_Version = i763[8]
  i762.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i763[9], i762.m_FaceInfo)
  var i769 = i763[10]
  var i768 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i769.length; i += 1) {
    i768.add(request.d('TMPro.TMP_SpriteCharacter', i769[i + 0]));
  }
  i762.m_SpriteCharacterTable = i768
  var i771 = i763[11]
  var i770 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i771.length; i += 1) {
    i770.add(request.d('TMPro.TMP_SpriteGlyph', i771[i + 0]));
  }
  i762.m_SpriteGlyphTable = i770
  return i762
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i774 = root || request.c( 'TMPro.TMP_Sprite' )
  var i775 = data
  i774.name = i775[0]
  i774.hashCode = i775[1]
  i774.unicode = i775[2]
  i774.pivot = new pc.Vec2( i775[3], i775[4] )
  request.r(i775[5], i775[6], 0, i774, 'sprite')
  i774.id = i775[7]
  i774.x = i775[8]
  i774.y = i775[9]
  i774.width = i775[10]
  i774.height = i775[11]
  i774.xOffset = i775[12]
  i774.yOffset = i775[13]
  i774.xAdvance = i775[14]
  i774.scale = i775[15]
  return i774
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i780 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i781 = data
  i780.m_Name = i781[0]
  i780.m_HashCode = i781[1]
  i780.m_ElementType = i781[2]
  i780.m_Unicode = i781[3]
  i780.m_GlyphIndex = i781[4]
  i780.m_Scale = i781[5]
  return i780
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i784 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i785 = data
  request.r(i785[0], i785[1], 0, i784, 'sprite')
  i784.m_Index = i785[2]
  i784.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i785[3], i784.m_Metrics)
  i784.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i785[4], i784.m_GlyphRect)
  i784.m_Scale = i785[5]
  i784.m_AtlasIndex = i785[6]
  i784.m_ClassDefinitionType = i785[7]
  return i784
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i786 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i787 = data
  var i789 = i787[0]
  var i788 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i789.length; i += 1) {
    i788.add(request.d('TMPro.TMP_Style', i789[i + 0]));
  }
  i786.m_StyleList = i788
  return i786
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i792 = root || request.c( 'TMPro.TMP_Style' )
  var i793 = data
  i792.m_Name = i793[0]
  i792.m_HashCode = i793[1]
  i792.m_OpeningDefinition = i793[2]
  i792.m_ClosingDefinition = i793[3]
  i792.m_OpeningTagArray = i793[4]
  i792.m_ClosingTagArray = i793[5]
  i792.m_OpeningTagUnicodeArray = i793[6]
  i792.m_ClosingTagUnicodeArray = i793[7]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i795 = data
  var i797 = i795[0]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i797[i + 0]) );
  }
  i794.files = i796
  i794.componentToPrefabIds = i795[1]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i801 = data
  i800.path = i801[0]
  request.r(i801[1], i801[2], 0, i800, 'unityObject')
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i803 = data
  var i805 = i803[0]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i805[i + 0]) );
  }
  i802.scriptsExecutionOrder = i804
  var i807 = i803[1]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i807[i + 0]) );
  }
  i802.sortingLayers = i806
  var i809 = i803[2]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i809[i + 0]) );
  }
  i802.cullingLayers = i808
  i802.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i803[3], i802.timeSettings)
  i802.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i803[4], i802.physicsSettings)
  i802.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i803[5], i802.physics2DSettings)
  i802.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i803[6], i802.qualitySettings)
  i802.enableRealtimeShadows = !!i803[7]
  i802.enableAutoInstancing = !!i803[8]
  i802.enableDynamicBatching = !!i803[9]
  i802.lightmapEncodingQuality = i803[10]
  i802.desiredColorSpace = i803[11]
  var i811 = i803[12]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( i811[i + 0] );
  }
  i802.allTags = i810
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i815 = data
  i814.name = i815[0]
  i814.value = i815[1]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i819 = data
  i818.id = i819[0]
  i818.name = i819[1]
  i818.value = i819[2]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i823 = data
  i822.id = i823[0]
  i822.name = i823[1]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i825 = data
  i824.fixedDeltaTime = i825[0]
  i824.maximumDeltaTime = i825[1]
  i824.timeScale = i825[2]
  i824.maximumParticleTimestep = i825[3]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i827 = data
  i826.gravity = new pc.Vec3( i827[0], i827[1], i827[2] )
  i826.defaultSolverIterations = i827[3]
  i826.bounceThreshold = i827[4]
  i826.autoSyncTransforms = !!i827[5]
  i826.autoSimulation = !!i827[6]
  var i829 = i827[7]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i829[i + 0]) );
  }
  i826.collisionMatrix = i828
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i833 = data
  i832.enabled = !!i833[0]
  i832.layerId = i833[1]
  i832.otherLayerId = i833[2]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i835 = data
  request.r(i835[0], i835[1], 0, i834, 'material')
  i834.gravity = new pc.Vec2( i835[2], i835[3] )
  i834.positionIterations = i835[4]
  i834.velocityIterations = i835[5]
  i834.velocityThreshold = i835[6]
  i834.maxLinearCorrection = i835[7]
  i834.maxAngularCorrection = i835[8]
  i834.maxTranslationSpeed = i835[9]
  i834.maxRotationSpeed = i835[10]
  i834.baumgarteScale = i835[11]
  i834.baumgarteTOIScale = i835[12]
  i834.timeToSleep = i835[13]
  i834.linearSleepTolerance = i835[14]
  i834.angularSleepTolerance = i835[15]
  i834.defaultContactOffset = i835[16]
  i834.autoSimulation = !!i835[17]
  i834.queriesHitTriggers = !!i835[18]
  i834.queriesStartInColliders = !!i835[19]
  i834.callbacksOnDisable = !!i835[20]
  i834.reuseCollisionCallbacks = !!i835[21]
  i834.autoSyncTransforms = !!i835[22]
  var i837 = i835[23]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i837[i + 0]) );
  }
  i834.collisionMatrix = i836
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i841 = data
  i840.enabled = !!i841[0]
  i840.layerId = i841[1]
  i840.otherLayerId = i841[2]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i843 = data
  var i845 = i843[0]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i845[i + 0]) );
  }
  i842.qualityLevels = i844
  var i847 = i843[1]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( i847[i + 0] );
  }
  i842.names = i846
  i842.shadows = i843[2]
  i842.anisotropicFiltering = i843[3]
  i842.antiAliasing = i843[4]
  i842.lodBias = i843[5]
  i842.shadowCascades = i843[6]
  i842.shadowDistance = i843[7]
  i842.shadowmaskMode = i843[8]
  i842.shadowProjection = i843[9]
  i842.shadowResolution = i843[10]
  i842.softParticles = !!i843[11]
  i842.softVegetation = !!i843[12]
  i842.activeColorSpace = i843[13]
  i842.desiredColorSpace = i843[14]
  i842.masterTextureLimit = i843[15]
  i842.maxQueuedFrames = i843[16]
  i842.particleRaycastBudget = i843[17]
  i842.pixelLightCount = i843[18]
  i842.realtimeReflectionProbes = !!i843[19]
  i842.shadowCascade2Split = i843[20]
  i842.shadowCascade4Split = new pc.Vec3( i843[21], i843[22], i843[23] )
  i842.streamingMipmapsActive = !!i843[24]
  i842.vSyncCount = i843[25]
  i842.asyncUploadBufferSize = i843[26]
  i842.asyncUploadTimeSlice = i843[27]
  i842.billboardsFaceCameraPosition = !!i843[28]
  i842.shadowNearPlaneOffset = i843[29]
  i842.streamingMipmapsMemoryBudget = i843[30]
  i842.maximumLODLevel = i843[31]
  i842.streamingMipmapsAddAllCameras = !!i843[32]
  i842.streamingMipmapsMaxLevelReduction = i843[33]
  i842.streamingMipmapsRenderersPerFrame = i843[34]
  i842.resolutionScalingFixedDPIFactor = i843[35]
  i842.streamingMipmapsMaxFileIORequests = i843[36]
  i842.currentQualityLevel = i843[37]
  return i842
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i850 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i851 = data
  i850.xPlacement = i851[0]
  i850.yPlacement = i851[1]
  i850.xAdvance = i851[2]
  i850.yAdvance = i851[3]
  return i850
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"45":[46],"47":[46],"48":[46],"49":[46],"50":[46],"51":[46],"52":[53],"54":[15],"55":[56],"57":[56],"58":[56],"59":[56],"60":[56],"61":[56],"62":[56],"63":[64],"65":[64],"66":[64],"67":[64],"68":[64],"69":[64],"70":[64],"71":[64],"72":[64],"73":[64],"74":[64],"75":[64],"76":[64],"77":[15],"78":[79],"80":[81],"82":[81],"20":[2],"83":[2],"84":[2],"22":[20],"5":[3,2],"85":[2],"21":[20],"86":[2],"87":[2],"29":[2],"88":[2],"89":[2],"90":[2],"28":[2],"91":[2],"92":[2],"93":[3,2],"94":[2],"95":[2],"96":[2],"97":[2],"98":[3,2],"99":[2],"100":[18],"101":[18],"19":[18],"102":[18],"103":[15],"104":[15],"105":[2],"106":[79,2],"24":[2,3],"107":[2],"108":[3,2],"109":[79],"110":[3,2],"111":[2],"112":[113],"114":[113],"115":[113]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Button","UnityEngine.CanvasGroup","UnityEngine.MonoBehaviour","CircleDrag","CircleDrop","CircleAnimation","CheckmarkAnimation","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","DownloadNow","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Material","ObjectAnimation","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","TutorialHand","EndCardAnimation","LevelManager","UnityEngine.GameObject","LongVersion","UnityEngine.AudioSource","UnityEngine.AudioClip","AudioManager","UnityEngine.Cubemap","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.StateMachine","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.3f1";

Deserializers.productName = "Merge Sticker Playbook - Color Quest";

Deserializers.lunaInitializationTime = "04/28/2025 08:15:54";

Deserializers.lunaDaysRunning = "1.0";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "Merge-Sticker-Playerbook-Color-Quest";

Deserializers.lunaAppID = "29408";

Deserializers.projectId = "1bfc592d7ca2ccc459c3f8a429931cb7";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.7.4\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.Merge-Sticker-Playbook---Color-Quest";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "8421eb7b-c494-447f-ad09-5fdd31eca583";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

