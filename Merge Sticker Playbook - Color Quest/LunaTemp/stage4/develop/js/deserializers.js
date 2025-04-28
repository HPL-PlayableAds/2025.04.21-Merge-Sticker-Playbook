var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i424 = root || request.c( 'UnityEngine.JointSpring' )
  var i425 = data
  i424.spring = i425[0]
  i424.damper = i425[1]
  i424.targetPosition = i425[2]
  return i424
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i426 = root || request.c( 'UnityEngine.JointMotor' )
  var i427 = data
  i426.m_TargetVelocity = i427[0]
  i426.m_Force = i427[1]
  i426.m_FreeSpin = i427[2]
  return i426
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i428 = root || request.c( 'UnityEngine.JointLimits' )
  var i429 = data
  i428.m_Min = i429[0]
  i428.m_Max = i429[1]
  i428.m_Bounciness = i429[2]
  i428.m_BounceMinVelocity = i429[3]
  i428.m_ContactDistance = i429[4]
  i428.minBounce = i429[5]
  i428.maxBounce = i429[6]
  return i428
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i430 = root || request.c( 'UnityEngine.JointDrive' )
  var i431 = data
  i430.m_PositionSpring = i431[0]
  i430.m_PositionDamper = i431[1]
  i430.m_MaximumForce = i431[2]
  i430.m_UseAcceleration = i431[3]
  return i430
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i432 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i433 = data
  i432.m_Spring = i433[0]
  i432.m_Damper = i433[1]
  return i432
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i434 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i435 = data
  i434.m_Limit = i435[0]
  i434.m_Bounciness = i435[1]
  i434.m_ContactDistance = i435[2]
  return i434
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i436 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i437 = data
  i436.m_ExtremumSlip = i437[0]
  i436.m_ExtremumValue = i437[1]
  i436.m_AsymptoteSlip = i437[2]
  i436.m_AsymptoteValue = i437[3]
  i436.m_Stiffness = i437[4]
  return i436
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i438 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i439 = data
  i438.m_LowerAngle = i439[0]
  i438.m_UpperAngle = i439[1]
  return i438
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i440 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i441 = data
  i440.m_MotorSpeed = i441[0]
  i440.m_MaximumMotorTorque = i441[1]
  return i440
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i442 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i443 = data
  i442.m_DampingRatio = i443[0]
  i442.m_Frequency = i443[1]
  i442.m_Angle = i443[2]
  return i442
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i444 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i445 = data
  i444.m_LowerTranslation = i445[0]
  i444.m_UpperTranslation = i445[1]
  return i444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i447 = data
  i446.name = i447[0]
  i446.width = i447[1]
  i446.height = i447[2]
  i446.mipmapCount = i447[3]
  i446.anisoLevel = i447[4]
  i446.filterMode = i447[5]
  i446.hdr = !!i447[6]
  i446.format = i447[7]
  i446.wrapMode = i447[8]
  i446.alphaIsTransparency = !!i447[9]
  i446.alphaSource = i447[10]
  i446.graphicsFormat = i447[11]
  i446.sRGBTexture = !!i447[12]
  i446.desiredColorSpace = i447[13]
  i446.wrapU = i447[14]
  i446.wrapV = i447[15]
  return i446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i448 = root || new pc.UnityMaterial()
  var i449 = data
  i448.name = i449[0]
  request.r(i449[1], i449[2], 0, i448, 'shader')
  i448.renderQueue = i449[3]
  i448.enableInstancing = !!i449[4]
  var i451 = i449[5]
  var i450 = []
  for(var i = 0; i < i451.length; i += 1) {
    i450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i451[i + 0]) );
  }
  i448.floatParameters = i450
  var i453 = i449[6]
  var i452 = []
  for(var i = 0; i < i453.length; i += 1) {
    i452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i453[i + 0]) );
  }
  i448.colorParameters = i452
  var i455 = i449[7]
  var i454 = []
  for(var i = 0; i < i455.length; i += 1) {
    i454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i455[i + 0]) );
  }
  i448.vectorParameters = i454
  var i457 = i449[8]
  var i456 = []
  for(var i = 0; i < i457.length; i += 1) {
    i456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i457[i + 0]) );
  }
  i448.textureParameters = i456
  var i459 = i449[9]
  var i458 = []
  for(var i = 0; i < i459.length; i += 1) {
    i458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i459[i + 0]) );
  }
  i448.materialFlags = i458
  return i448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i463 = data
  i462.name = i463[0]
  i462.value = i463[1]
  return i462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i467 = data
  i466.name = i467[0]
  i466.value = new pc.Color(i467[1], i467[2], i467[3], i467[4])
  return i466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i471 = data
  i470.name = i471[0]
  i470.value = new pc.Vec4( i471[1], i471[2], i471[3], i471[4] )
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i475 = data
  i474.name = i475[0]
  request.r(i475[1], i475[2], 0, i474, 'value')
  return i474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i479 = data
  i478.name = i479[0]
  i478.enabled = !!i479[1]
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i481 = data
  i480.pivot = new pc.Vec2( i481[0], i481[1] )
  i480.anchorMin = new pc.Vec2( i481[2], i481[3] )
  i480.anchorMax = new pc.Vec2( i481[4], i481[5] )
  i480.sizeDelta = new pc.Vec2( i481[6], i481[7] )
  i480.anchoredPosition3D = new pc.Vec3( i481[8], i481[9], i481[10] )
  i480.rotation = new pc.Quat(i481[11], i481[12], i481[13], i481[14])
  i480.scale = new pc.Vec3( i481[15], i481[16], i481[17] )
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i483 = data
  i482.cullTransparentMesh = !!i483[0]
  return i482
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i484 = root || request.c( 'UnityEngine.UI.Image' )
  var i485 = data
  request.r(i485[0], i485[1], 0, i484, 'm_Sprite')
  i484.m_Type = i485[2]
  i484.m_PreserveAspect = !!i485[3]
  i484.m_FillCenter = !!i485[4]
  i484.m_FillMethod = i485[5]
  i484.m_FillAmount = i485[6]
  i484.m_FillClockwise = !!i485[7]
  i484.m_FillOrigin = i485[8]
  i484.m_UseSpriteMesh = !!i485[9]
  i484.m_PixelsPerUnitMultiplier = i485[10]
  request.r(i485[11], i485[12], 0, i484, 'm_Material')
  i484.m_Maskable = !!i485[13]
  i484.m_Color = new pc.Color(i485[14], i485[15], i485[16], i485[17])
  i484.m_RaycastTarget = !!i485[18]
  i484.m_RaycastPadding = new pc.Vec4( i485[19], i485[20], i485[21], i485[22] )
  return i484
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i486 = root || request.c( 'UnityEngine.UI.Button' )
  var i487 = data
  i486.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i487[0], i486.m_OnClick)
  i486.m_Navigation = request.d('UnityEngine.UI.Navigation', i487[1], i486.m_Navigation)
  i486.m_Transition = i487[2]
  i486.m_Colors = request.d('UnityEngine.UI.ColorBlock', i487[3], i486.m_Colors)
  i486.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i487[4], i486.m_SpriteState)
  i486.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i487[5], i486.m_AnimationTriggers)
  i486.m_Interactable = !!i487[6]
  request.r(i487[7], i487[8], 0, i486, 'm_TargetGraphic')
  return i486
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i488 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i489 = data
  i488.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i489[0], i488.m_PersistentCalls)
  return i488
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i490 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i491 = data
  var i493 = i491[0]
  var i492 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i493.length; i += 1) {
    i492.add(request.d('UnityEngine.Events.PersistentCall', i493[i + 0]));
  }
  i490.m_Calls = i492
  return i490
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i496 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i497 = data
  request.r(i497[0], i497[1], 0, i496, 'm_Target')
  i496.m_TargetAssemblyTypeName = i497[2]
  i496.m_MethodName = i497[3]
  i496.m_Mode = i497[4]
  i496.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i497[5], i496.m_Arguments)
  i496.m_CallState = i497[6]
  return i496
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i498 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i499 = data
  i498.m_Mode = i499[0]
  i498.m_WrapAround = !!i499[1]
  request.r(i499[2], i499[3], 0, i498, 'm_SelectOnUp')
  request.r(i499[4], i499[5], 0, i498, 'm_SelectOnDown')
  request.r(i499[6], i499[7], 0, i498, 'm_SelectOnLeft')
  request.r(i499[8], i499[9], 0, i498, 'm_SelectOnRight')
  return i498
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i500 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i501 = data
  i500.m_NormalColor = new pc.Color(i501[0], i501[1], i501[2], i501[3])
  i500.m_HighlightedColor = new pc.Color(i501[4], i501[5], i501[6], i501[7])
  i500.m_PressedColor = new pc.Color(i501[8], i501[9], i501[10], i501[11])
  i500.m_SelectedColor = new pc.Color(i501[12], i501[13], i501[14], i501[15])
  i500.m_DisabledColor = new pc.Color(i501[16], i501[17], i501[18], i501[19])
  i500.m_ColorMultiplier = i501[20]
  i500.m_FadeDuration = i501[21]
  return i500
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i502 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i503 = data
  request.r(i503[0], i503[1], 0, i502, 'm_HighlightedSprite')
  request.r(i503[2], i503[3], 0, i502, 'm_PressedSprite')
  request.r(i503[4], i503[5], 0, i502, 'm_SelectedSprite')
  request.r(i503[6], i503[7], 0, i502, 'm_DisabledSprite')
  return i502
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i504 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i505 = data
  i504.m_NormalTrigger = i505[0]
  i504.m_HighlightedTrigger = i505[1]
  i504.m_PressedTrigger = i505[2]
  i504.m_SelectedTrigger = i505[3]
  i504.m_DisabledTrigger = i505[4]
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i507 = data
  i506.m_Alpha = i507[0]
  i506.m_Interactable = !!i507[1]
  i506.m_BlocksRaycasts = !!i507[2]
  i506.m_IgnoreParentGroups = !!i507[3]
  i506.enabled = !!i507[4]
  return i506
}

Deserializers["CircleDrag"] = function (request, data, root) {
  var i508 = root || request.c( 'CircleDrag' )
  var i509 = data
  i508.circleType = i509[0]
  return i508
}

Deserializers["CircleDrop"] = function (request, data, root) {
  var i510 = root || request.c( 'CircleDrop' )
  var i511 = data
  i510.circleType = i511[0]
  return i510
}

Deserializers["CircleAnimation"] = function (request, data, root) {
  var i512 = root || request.c( 'CircleAnimation' )
  var i513 = data
  i512.shrinkDuration = i513[0]
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i515 = data
  i514.name = i515[0]
  i514.tagId = i515[1]
  i514.enabled = !!i515[2]
  i514.isStatic = !!i515[3]
  i514.layer = i515[4]
  return i514
}

Deserializers["CheckmarkAnimation"] = function (request, data, root) {
  var i516 = root || request.c( 'CheckmarkAnimation' )
  var i517 = data
  i516.scaleUpDuration = i517[0]
  i516.scaleUpAmount = i517[1]
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i519 = data
  i518.name = i519[0]
  i518.atlasId = i519[1]
  i518.mipmapCount = i519[2]
  i518.hdr = !!i519[3]
  i518.size = i519[4]
  i518.anisoLevel = i519[5]
  i518.filterMode = i519[6]
  var i521 = i519[7]
  var i520 = []
  for(var i = 0; i < i521.length; i += 4) {
    i520.push( UnityEngine.Rect.MinMaxRect(i521[i + 0], i521[i + 1], i521[i + 2], i521[i + 3]) );
  }
  i518.rects = i520
  i518.wrapU = i519[8]
  i518.wrapV = i519[9]
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i525 = data
  i524.name = i525[0]
  i524.index = i525[1]
  i524.startup = !!i525[2]
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i527 = data
  i526.position = new pc.Vec3( i527[0], i527[1], i527[2] )
  i526.scale = new pc.Vec3( i527[3], i527[4], i527[5] )
  i526.rotation = new pc.Quat(i527[6], i527[7], i527[8], i527[9])
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i529 = data
  i528.enabled = !!i529[0]
  i528.aspect = i529[1]
  i528.orthographic = !!i529[2]
  i528.orthographicSize = i529[3]
  i528.backgroundColor = new pc.Color(i529[4], i529[5], i529[6], i529[7])
  i528.nearClipPlane = i529[8]
  i528.farClipPlane = i529[9]
  i528.fieldOfView = i529[10]
  i528.depth = i529[11]
  i528.clearFlags = i529[12]
  i528.cullingMask = i529[13]
  i528.rect = i529[14]
  request.r(i529[15], i529[16], 0, i528, 'targetTexture')
  i528.usePhysicalProperties = !!i529[17]
  i528.focalLength = i529[18]
  i528.sensorSize = new pc.Vec2( i529[19], i529[20] )
  i528.lensShift = new pc.Vec2( i529[21], i529[22] )
  i528.gateFit = i529[23]
  i528.commandBufferCount = i529[24]
  i528.cameraType = i529[25]
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i531 = data
  i530.enabled = !!i531[0]
  i530.type = i531[1]
  i530.color = new pc.Color(i531[2], i531[3], i531[4], i531[5])
  i530.cullingMask = i531[6]
  i530.intensity = i531[7]
  i530.range = i531[8]
  i530.spotAngle = i531[9]
  i530.shadows = i531[10]
  i530.shadowNormalBias = i531[11]
  i530.shadowBias = i531[12]
  i530.shadowStrength = i531[13]
  i530.shadowResolution = i531[14]
  i530.lightmapBakeType = i531[15]
  i530.renderMode = i531[16]
  request.r(i531[17], i531[18], 0, i530, 'cookie')
  i530.cookieSize = i531[19]
  return i530
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i532 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i533 = data
  request.r(i533[0], i533[1], 0, i532, 'm_FirstSelected')
  i532.m_sendNavigationEvents = !!i533[2]
  i532.m_DragThreshold = i533[3]
  return i532
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i535 = data
  i534.m_HorizontalAxis = i535[0]
  i534.m_VerticalAxis = i535[1]
  i534.m_SubmitButton = i535[2]
  i534.m_CancelButton = i535[3]
  i534.m_InputActionsPerSecond = i535[4]
  i534.m_RepeatDelay = i535[5]
  i534.m_ForceModuleActive = !!i535[6]
  i534.m_SendPointerHoverToParent = !!i535[7]
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i537 = data
  i536.enabled = !!i537[0]
  i536.planeDistance = i537[1]
  i536.referencePixelsPerUnit = i537[2]
  i536.isFallbackOverlay = !!i537[3]
  i536.renderMode = i537[4]
  i536.renderOrder = i537[5]
  i536.sortingLayerName = i537[6]
  i536.sortingOrder = i537[7]
  i536.scaleFactor = i537[8]
  request.r(i537[9], i537[10], 0, i536, 'worldCamera')
  i536.overrideSorting = !!i537[11]
  i536.pixelPerfect = !!i537[12]
  i536.targetDisplay = i537[13]
  i536.overridePixelPerfect = !!i537[14]
  return i536
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i539 = data
  i538.m_UiScaleMode = i539[0]
  i538.m_ReferencePixelsPerUnit = i539[1]
  i538.m_ScaleFactor = i539[2]
  i538.m_ReferenceResolution = new pc.Vec2( i539[3], i539[4] )
  i538.m_ScreenMatchMode = i539[5]
  i538.m_MatchWidthOrHeight = i539[6]
  i538.m_PhysicalUnit = i539[7]
  i538.m_FallbackScreenDPI = i539[8]
  i538.m_DefaultSpriteDPI = i539[9]
  i538.m_DynamicPixelsPerUnit = i539[10]
  i538.m_PresetInfoIsWorld = !!i539[11]
  return i538
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i541 = data
  i540.m_IgnoreReversedGraphics = !!i541[0]
  i540.m_BlockingObjects = i541[1]
  i540.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i541[2] )
  return i540
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i543 = data
  request.r(i543[0], i543[1], 0, i542, 'm_ObjectArgument')
  i542.m_ObjectArgumentAssemblyTypeName = i543[2]
  i542.m_IntArgument = i543[3]
  i542.m_FloatArgument = i543[4]
  i542.m_StringArgument = i543[5]
  i542.m_BoolArgument = !!i543[6]
  return i542
}

Deserializers["DownloadNow"] = function (request, data, root) {
  var i544 = root || request.c( 'DownloadNow' )
  var i545 = data
  i544.iosLink = i545[0]
  i544.androidLink = i545[1]
  return i544
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i546 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i547 = data
  i546.m_hasFontAssetChanged = !!i547[0]
  request.r(i547[1], i547[2], 0, i546, 'm_baseMaterial')
  i546.m_maskOffset = new pc.Vec4( i547[3], i547[4], i547[5], i547[6] )
  i546.m_text = i547[7]
  i546.m_isRightToLeft = !!i547[8]
  request.r(i547[9], i547[10], 0, i546, 'm_fontAsset')
  request.r(i547[11], i547[12], 0, i546, 'm_sharedMaterial')
  var i549 = i547[13]
  var i548 = []
  for(var i = 0; i < i549.length; i += 2) {
  request.r(i549[i + 0], i549[i + 1], 2, i548, '')
  }
  i546.m_fontSharedMaterials = i548
  request.r(i547[14], i547[15], 0, i546, 'm_fontMaterial')
  var i551 = i547[16]
  var i550 = []
  for(var i = 0; i < i551.length; i += 2) {
  request.r(i551[i + 0], i551[i + 1], 2, i550, '')
  }
  i546.m_fontMaterials = i550
  i546.m_fontColor32 = UnityEngine.Color32.ConstructColor(i547[17], i547[18], i547[19], i547[20])
  i546.m_fontColor = new pc.Color(i547[21], i547[22], i547[23], i547[24])
  i546.m_enableVertexGradient = !!i547[25]
  i546.m_colorMode = i547[26]
  i546.m_fontColorGradient = request.d('TMPro.VertexGradient', i547[27], i546.m_fontColorGradient)
  request.r(i547[28], i547[29], 0, i546, 'm_fontColorGradientPreset')
  request.r(i547[30], i547[31], 0, i546, 'm_spriteAsset')
  i546.m_tintAllSprites = !!i547[32]
  request.r(i547[33], i547[34], 0, i546, 'm_StyleSheet')
  i546.m_TextStyleHashCode = i547[35]
  i546.m_overrideHtmlColors = !!i547[36]
  i546.m_faceColor = UnityEngine.Color32.ConstructColor(i547[37], i547[38], i547[39], i547[40])
  i546.m_fontSize = i547[41]
  i546.m_fontSizeBase = i547[42]
  i546.m_fontWeight = i547[43]
  i546.m_enableAutoSizing = !!i547[44]
  i546.m_fontSizeMin = i547[45]
  i546.m_fontSizeMax = i547[46]
  i546.m_fontStyle = i547[47]
  i546.m_HorizontalAlignment = i547[48]
  i546.m_VerticalAlignment = i547[49]
  i546.m_textAlignment = i547[50]
  i546.m_characterSpacing = i547[51]
  i546.m_wordSpacing = i547[52]
  i546.m_lineSpacing = i547[53]
  i546.m_lineSpacingMax = i547[54]
  i546.m_paragraphSpacing = i547[55]
  i546.m_charWidthMaxAdj = i547[56]
  i546.m_enableWordWrapping = !!i547[57]
  i546.m_wordWrappingRatios = i547[58]
  i546.m_overflowMode = i547[59]
  request.r(i547[60], i547[61], 0, i546, 'm_linkedTextComponent')
  request.r(i547[62], i547[63], 0, i546, 'parentLinkedComponent')
  i546.m_enableKerning = !!i547[64]
  i546.m_enableExtraPadding = !!i547[65]
  i546.checkPaddingRequired = !!i547[66]
  i546.m_isRichText = !!i547[67]
  i546.m_parseCtrlCharacters = !!i547[68]
  i546.m_isOrthographic = !!i547[69]
  i546.m_isCullingEnabled = !!i547[70]
  i546.m_horizontalMapping = i547[71]
  i546.m_verticalMapping = i547[72]
  i546.m_uvLineOffset = i547[73]
  i546.m_geometrySortingOrder = i547[74]
  i546.m_IsTextObjectScaleStatic = !!i547[75]
  i546.m_VertexBufferAutoSizeReduction = !!i547[76]
  i546.m_useMaxVisibleDescender = !!i547[77]
  i546.m_pageToDisplay = i547[78]
  i546.m_margin = new pc.Vec4( i547[79], i547[80], i547[81], i547[82] )
  i546.m_isUsingLegacyAnimationComponent = !!i547[83]
  i546.m_isVolumetricText = !!i547[84]
  request.r(i547[85], i547[86], 0, i546, 'm_Material')
  i546.m_Maskable = !!i547[87]
  i546.m_Color = new pc.Color(i547[88], i547[89], i547[90], i547[91])
  i546.m_RaycastTarget = !!i547[92]
  i546.m_RaycastPadding = new pc.Vec4( i547[93], i547[94], i547[95], i547[96] )
  return i546
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i554 = root || request.c( 'TMPro.VertexGradient' )
  var i555 = data
  i554.topLeft = new pc.Color(i555[0], i555[1], i555[2], i555[3])
  i554.topRight = new pc.Color(i555[4], i555[5], i555[6], i555[7])
  i554.bottomLeft = new pc.Color(i555[8], i555[9], i555[10], i555[11])
  i554.bottomRight = new pc.Color(i555[12], i555[13], i555[14], i555[15])
  return i554
}

Deserializers["ObjectAnimation"] = function (request, data, root) {
  var i556 = root || request.c( 'ObjectAnimation' )
  var i557 = data
  i556.fadeDuration = i557[0]
  return i556
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i558 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i559 = data
  i558.m_Spacing = i559[0]
  i558.m_ChildForceExpandWidth = !!i559[1]
  i558.m_ChildForceExpandHeight = !!i559[2]
  i558.m_ChildControlWidth = !!i559[3]
  i558.m_ChildControlHeight = !!i559[4]
  i558.m_ChildScaleWidth = !!i559[5]
  i558.m_ChildScaleHeight = !!i559[6]
  i558.m_ReverseArrangement = !!i559[7]
  i558.m_Padding = UnityEngine.RectOffset.FromPaddings(i559[8], i559[9], i559[10], i559[11])
  i558.m_ChildAlignment = i559[12]
  return i558
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i560 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
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

Deserializers["EndCardAnimation"] = function (request, data, root) {
  var i562 = root || request.c( 'EndCardAnimation' )
  var i563 = data
  request.r(i563[0], i563[1], 0, i562, 'canvasGroupInGame')
  request.r(i563[2], i563[3], 0, i562, 'canvasGroupInGameBG')
  request.r(i563[4], i563[5], 0, i562, 'canvasGroupEndCard')
  request.r(i563[6], i563[7], 0, i562, 'canvasGroupEndCardBG')
  i562.fadeDuration = i563[8]
  request.r(i563[9], i563[10], 0, i562, 'downloadButton')
  i562.scaleDuration = i563[11]
  i562.scaleFactor = i563[12]
  return i562
}

Deserializers["LevelManager"] = function (request, data, root) {
  var i564 = root || request.c( 'LevelManager' )
  var i565 = data
  var i567 = i565[0]
  var i566 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i567.length; i += 1) {
    i566.add(i567[i + 0]);
  }
  i564.requiredColors = i566
  var i569 = i565[1]
  var i568 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i569.length; i += 2) {
  request.r(i569[i + 0], i569[i + 1], 1, i568, '')
  }
  i564.colorGoalObjects = i568
  var i571 = i565[2]
  var i570 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i571.length; i += 2) {
  request.r(i571[i + 0], i571[i + 1], 1, i570, '')
  }
  i564.colorCheckmarkObjects = i570
  request.r(i565[3], i565[4], 0, i564, 'colorCounterText')
  request.r(i565[5], i565[6], 0, i564, 'EndCard')
  i564.isLongVersion = !!i565[7]
  i564.nextLevelName = i565[8]
  return i564
}

Deserializers["LongVersion"] = function (request, data, root) {
  var i576 = root || request.c( 'LongVersion' )
  var i577 = data
  i576.isLongVersion = !!i577[0]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i579 = data
  request.r(i579[0], i579[1], 0, i578, 'clip')
  request.r(i579[2], i579[3], 0, i578, 'outputAudioMixerGroup')
  i578.playOnAwake = !!i579[4]
  i578.loop = !!i579[5]
  i578.time = i579[6]
  i578.volume = i579[7]
  i578.pitch = i579[8]
  i578.enabled = !!i579[9]
  return i578
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i580 = root || request.c( 'AudioManager' )
  var i581 = data
  request.r(i581[0], i581[1], 0, i580, 'audioSource')
  request.r(i581[2], i581[3], 0, i580, 'buttonClick')
  request.r(i581[4], i581[5], 0, i580, 'correctMerge')
  request.r(i581[6], i581[7], 0, i580, 'wrongMerge')
  request.r(i581[8], i581[9], 0, i580, 'merging')
  request.r(i581[10], i581[11], 0, i580, 'win')
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i583 = data
  i582.ambientIntensity = i583[0]
  i582.reflectionIntensity = i583[1]
  i582.ambientMode = i583[2]
  i582.ambientLight = new pc.Color(i583[3], i583[4], i583[5], i583[6])
  i582.ambientSkyColor = new pc.Color(i583[7], i583[8], i583[9], i583[10])
  i582.ambientGroundColor = new pc.Color(i583[11], i583[12], i583[13], i583[14])
  i582.ambientEquatorColor = new pc.Color(i583[15], i583[16], i583[17], i583[18])
  i582.fogColor = new pc.Color(i583[19], i583[20], i583[21], i583[22])
  i582.fogEndDistance = i583[23]
  i582.fogStartDistance = i583[24]
  i582.fogDensity = i583[25]
  i582.fog = !!i583[26]
  request.r(i583[27], i583[28], 0, i582, 'skybox')
  i582.fogMode = i583[29]
  var i585 = i583[30]
  var i584 = []
  for(var i = 0; i < i585.length; i += 1) {
    i584.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i585[i + 0]) );
  }
  i582.lightmaps = i584
  i582.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i583[31], i582.lightProbes)
  i582.lightmapsMode = i583[32]
  i582.mixedBakeMode = i583[33]
  i582.environmentLightingMode = i583[34]
  i582.ambientProbe = new pc.SphericalHarmonicsL2(i583[35])
  i582.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i583[36])
  i582.useReferenceAmbientProbe = !!i583[37]
  request.r(i583[38], i583[39], 0, i582, 'customReflection')
  request.r(i583[40], i583[41], 0, i582, 'defaultReflection')
  i582.defaultReflectionMode = i583[42]
  i582.defaultReflectionResolution = i583[43]
  i582.sunLightObjectId = i583[44]
  i582.pixelLightCount = i583[45]
  i582.defaultReflectionHDR = !!i583[46]
  i582.hasLightDataAsset = !!i583[47]
  i582.hasManualGenerate = !!i583[48]
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i589 = data
  request.r(i589[0], i589[1], 0, i588, 'lightmapColor')
  request.r(i589[2], i589[3], 0, i588, 'lightmapDirection')
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i590 = root || new UnityEngine.LightProbes()
  var i591 = data
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i599 = data
  var i601 = i599[0]
  var i600 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i601.length; i += 1) {
    i600.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i601[i + 0]));
  }
  i598.ShaderCompilationErrors = i600
  i598.name = i599[1]
  i598.guid = i599[2]
  var i603 = i599[3]
  var i602 = []
  for(var i = 0; i < i603.length; i += 1) {
    i602.push( i603[i + 0] );
  }
  i598.shaderDefinedKeywords = i602
  var i605 = i599[4]
  var i604 = []
  for(var i = 0; i < i605.length; i += 1) {
    i604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i605[i + 0]) );
  }
  i598.passes = i604
  var i607 = i599[5]
  var i606 = []
  for(var i = 0; i < i607.length; i += 1) {
    i606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i607[i + 0]) );
  }
  i598.usePasses = i606
  var i609 = i599[6]
  var i608 = []
  for(var i = 0; i < i609.length; i += 1) {
    i608.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i609[i + 0]) );
  }
  i598.defaultParameterValues = i608
  request.r(i599[7], i599[8], 0, i598, 'unityFallbackShader')
  i598.readDepth = !!i599[9]
  i598.isCreatedByShaderGraph = !!i599[10]
  i598.compiled = !!i599[11]
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i613 = data
  i612.shaderName = i613[0]
  i612.errorMessage = i613[1]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i618 = root || new pc.UnityShaderPass()
  var i619 = data
  i618.id = i619[0]
  i618.subShaderIndex = i619[1]
  i618.name = i619[2]
  i618.passType = i619[3]
  i618.grabPassTextureName = i619[4]
  i618.usePass = !!i619[5]
  i618.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i619[6], i618.zTest)
  i618.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i619[7], i618.zWrite)
  i618.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i619[8], i618.culling)
  i618.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i619[9], i618.blending)
  i618.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i619[10], i618.alphaBlending)
  i618.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i619[11], i618.colorWriteMask)
  i618.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i619[12], i618.offsetUnits)
  i618.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i619[13], i618.offsetFactor)
  i618.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i619[14], i618.stencilRef)
  i618.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i619[15], i618.stencilReadMask)
  i618.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i619[16], i618.stencilWriteMask)
  i618.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i619[17], i618.stencilOp)
  i618.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i619[18], i618.stencilOpFront)
  i618.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i619[19], i618.stencilOpBack)
  var i621 = i619[20]
  var i620 = []
  for(var i = 0; i < i621.length; i += 1) {
    i620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i621[i + 0]) );
  }
  i618.tags = i620
  var i623 = i619[21]
  var i622 = []
  for(var i = 0; i < i623.length; i += 1) {
    i622.push( i623[i + 0] );
  }
  i618.passDefinedKeywords = i622
  var i625 = i619[22]
  var i624 = []
  for(var i = 0; i < i625.length; i += 1) {
    i624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i625[i + 0]) );
  }
  i618.passDefinedKeywordGroups = i624
  var i627 = i619[23]
  var i626 = []
  for(var i = 0; i < i627.length; i += 1) {
    i626.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i627[i + 0]) );
  }
  i618.variants = i626
  var i629 = i619[24]
  var i628 = []
  for(var i = 0; i < i629.length; i += 1) {
    i628.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i629[i + 0]) );
  }
  i618.excludedVariants = i628
  i618.hasDepthReader = !!i619[25]
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i631 = data
  i630.val = i631[0]
  i630.name = i631[1]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i633 = data
  i632.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i633[0], i632.src)
  i632.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i633[1], i632.dst)
  i632.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i633[2], i632.op)
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i635 = data
  i634.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i635[0], i634.pass)
  i634.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i635[1], i634.fail)
  i634.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i635[2], i634.zFail)
  i634.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i635[3], i634.comp)
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i639 = data
  i638.name = i639[0]
  i638.value = i639[1]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i643 = data
  var i645 = i643[0]
  var i644 = []
  for(var i = 0; i < i645.length; i += 1) {
    i644.push( i645[i + 0] );
  }
  i642.keywords = i644
  i642.hasDiscard = !!i643[1]
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i649 = data
  i648.passId = i649[0]
  i648.subShaderIndex = i649[1]
  var i651 = i649[2]
  var i650 = []
  for(var i = 0; i < i651.length; i += 1) {
    i650.push( i651[i + 0] );
  }
  i648.keywords = i650
  i648.vertexProgram = i649[3]
  i648.fragmentProgram = i649[4]
  i648.exportedForWebGl2 = !!i649[5]
  i648.readDepth = !!i649[6]
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i655 = data
  request.r(i655[0], i655[1], 0, i654, 'shader')
  i654.pass = i655[2]
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i659 = data
  i658.name = i659[0]
  i658.type = i659[1]
  i658.value = new pc.Vec4( i659[2], i659[3], i659[4], i659[5] )
  i658.textureValue = i659[6]
  i658.shaderPropertyFlag = i659[7]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i661 = data
  i660.name = i661[0]
  request.r(i661[1], i661[2], 0, i660, 'texture')
  i660.aabb = i661[3]
  i660.vertices = i661[4]
  i660.triangles = i661[5]
  i660.textureRect = UnityEngine.Rect.MinMaxRect(i661[6], i661[7], i661[8], i661[9])
  i660.packedRect = UnityEngine.Rect.MinMaxRect(i661[10], i661[11], i661[12], i661[13])
  i660.border = new pc.Vec4( i661[14], i661[15], i661[16], i661[17] )
  i660.transparency = i661[18]
  i660.bounds = i661[19]
  i660.pixelsPerUnit = i661[20]
  i660.textureWidth = i661[21]
  i660.textureHeight = i661[22]
  i660.nativeSize = new pc.Vec2( i661[23], i661[24] )
  i660.pivot = new pc.Vec2( i661[25], i661[26] )
  i660.textureRectOffset = new pc.Vec2( i661[27], i661[28] )
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i663 = data
  i662.name = i663[0]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i665 = data
  i664.name = i665[0]
  i664.ascent = i665[1]
  i664.originalLineHeight = i665[2]
  i664.fontSize = i665[3]
  var i667 = i665[4]
  var i666 = []
  for(var i = 0; i < i667.length; i += 1) {
    i666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i667[i + 0]) );
  }
  i664.characterInfo = i666
  request.r(i665[5], i665[6], 0, i664, 'texture')
  i664.originalFontSize = i665[7]
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i671 = data
  i670.index = i671[0]
  i670.advance = i671[1]
  i670.bearing = i671[2]
  i670.glyphWidth = i671[3]
  i670.glyphHeight = i671[4]
  i670.minX = i671[5]
  i670.maxX = i671[6]
  i670.minY = i671[7]
  i670.maxY = i671[8]
  i670.uvBottomLeftX = i671[9]
  i670.uvBottomLeftY = i671[10]
  i670.uvBottomRightX = i671[11]
  i670.uvBottomRightY = i671[12]
  i670.uvTopLeftX = i671[13]
  i670.uvTopLeftY = i671[14]
  i670.uvTopRightX = i671[15]
  i670.uvTopRightY = i671[16]
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i673 = data
  i672.name = i673[0]
  i672.bytes64 = i673[1]
  i672.data = i673[2]
  return i672
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i674 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i675 = data
  i674.hashCode = i675[0]
  request.r(i675[1], i675[2], 0, i674, 'material')
  i674.materialHashCode = i675[3]
  request.r(i675[4], i675[5], 0, i674, 'atlas')
  i674.normalStyle = i675[6]
  i674.normalSpacingOffset = i675[7]
  i674.boldStyle = i675[8]
  i674.boldSpacing = i675[9]
  i674.italicStyle = i675[10]
  i674.tabSize = i675[11]
  i674.m_Version = i675[12]
  i674.m_SourceFontFileGUID = i675[13]
  request.r(i675[14], i675[15], 0, i674, 'm_SourceFontFile_EditorRef')
  request.r(i675[16], i675[17], 0, i674, 'm_SourceFontFile')
  i674.m_AtlasPopulationMode = i675[18]
  i674.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i675[19], i674.m_FaceInfo)
  var i677 = i675[20]
  var i676 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i677.length; i += 1) {
    i676.add(request.d('UnityEngine.TextCore.Glyph', i677[i + 0]));
  }
  i674.m_GlyphTable = i676
  var i679 = i675[21]
  var i678 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i679.length; i += 1) {
    i678.add(request.d('TMPro.TMP_Character', i679[i + 0]));
  }
  i674.m_CharacterTable = i678
  var i681 = i675[22]
  var i680 = []
  for(var i = 0; i < i681.length; i += 2) {
  request.r(i681[i + 0], i681[i + 1], 2, i680, '')
  }
  i674.m_AtlasTextures = i680
  i674.m_AtlasTextureIndex = i675[23]
  i674.m_IsMultiAtlasTexturesEnabled = !!i675[24]
  i674.m_ClearDynamicDataOnBuild = !!i675[25]
  var i683 = i675[26]
  var i682 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i683.length; i += 1) {
    i682.add(request.d('UnityEngine.TextCore.GlyphRect', i683[i + 0]));
  }
  i674.m_UsedGlyphRects = i682
  var i685 = i675[27]
  var i684 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i685.length; i += 1) {
    i684.add(request.d('UnityEngine.TextCore.GlyphRect', i685[i + 0]));
  }
  i674.m_FreeGlyphRects = i684
  i674.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i675[28], i674.m_fontInfo)
  i674.m_AtlasWidth = i675[29]
  i674.m_AtlasHeight = i675[30]
  i674.m_AtlasPadding = i675[31]
  i674.m_AtlasRenderMode = i675[32]
  var i687 = i675[33]
  var i686 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i687.length; i += 1) {
    i686.add(request.d('TMPro.TMP_Glyph', i687[i + 0]));
  }
  i674.m_glyphInfoList = i686
  i674.m_KerningTable = request.d('TMPro.KerningTable', i675[34], i674.m_KerningTable)
  i674.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i675[35], i674.m_FontFeatureTable)
  var i689 = i675[36]
  var i688 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i689.length; i += 2) {
  request.r(i689[i + 0], i689[i + 1], 1, i688, '')
  }
  i674.fallbackFontAssets = i688
  var i691 = i675[37]
  var i690 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i691.length; i += 2) {
  request.r(i691[i + 0], i691[i + 1], 1, i690, '')
  }
  i674.m_FallbackFontAssetTable = i690
  i674.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i675[38], i674.m_CreationSettings)
  var i693 = i675[39]
  var i692 = []
  for(var i = 0; i < i693.length; i += 1) {
    i692.push( request.d('TMPro.TMP_FontWeightPair', i693[i + 0]) );
  }
  i674.m_FontWeightTable = i692
  var i695 = i675[40]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( request.d('TMPro.TMP_FontWeightPair', i695[i + 0]) );
  }
  i674.fontWeights = i694
  return i674
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i697 = data
  i696.m_FaceIndex = i697[0]
  i696.m_FamilyName = i697[1]
  i696.m_StyleName = i697[2]
  i696.m_PointSize = i697[3]
  i696.m_Scale = i697[4]
  i696.m_UnitsPerEM = i697[5]
  i696.m_LineHeight = i697[6]
  i696.m_AscentLine = i697[7]
  i696.m_CapLine = i697[8]
  i696.m_MeanLine = i697[9]
  i696.m_Baseline = i697[10]
  i696.m_DescentLine = i697[11]
  i696.m_SuperscriptOffset = i697[12]
  i696.m_SuperscriptSize = i697[13]
  i696.m_SubscriptOffset = i697[14]
  i696.m_SubscriptSize = i697[15]
  i696.m_UnderlineOffset = i697[16]
  i696.m_UnderlineThickness = i697[17]
  i696.m_StrikethroughOffset = i697[18]
  i696.m_StrikethroughThickness = i697[19]
  i696.m_TabWidth = i697[20]
  return i696
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i701 = data
  i700.m_Index = i701[0]
  i700.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i701[1], i700.m_Metrics)
  i700.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i701[2], i700.m_GlyphRect)
  i700.m_Scale = i701[3]
  i700.m_AtlasIndex = i701[4]
  i700.m_ClassDefinitionType = i701[5]
  return i700
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i703 = data
  i702.m_Width = i703[0]
  i702.m_Height = i703[1]
  i702.m_HorizontalBearingX = i703[2]
  i702.m_HorizontalBearingY = i703[3]
  i702.m_HorizontalAdvance = i703[4]
  return i702
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i705 = data
  i704.m_X = i705[0]
  i704.m_Y = i705[1]
  i704.m_Width = i705[2]
  i704.m_Height = i705[3]
  return i704
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i708 = root || request.c( 'TMPro.TMP_Character' )
  var i709 = data
  i708.m_ElementType = i709[0]
  i708.m_Unicode = i709[1]
  i708.m_GlyphIndex = i709[2]
  i708.m_Scale = i709[3]
  return i708
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i714 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i715 = data
  i714.Name = i715[0]
  i714.PointSize = i715[1]
  i714.Scale = i715[2]
  i714.CharacterCount = i715[3]
  i714.LineHeight = i715[4]
  i714.Baseline = i715[5]
  i714.Ascender = i715[6]
  i714.CapHeight = i715[7]
  i714.Descender = i715[8]
  i714.CenterLine = i715[9]
  i714.SuperscriptOffset = i715[10]
  i714.SubscriptOffset = i715[11]
  i714.SubSize = i715[12]
  i714.Underline = i715[13]
  i714.UnderlineThickness = i715[14]
  i714.strikethrough = i715[15]
  i714.strikethroughThickness = i715[16]
  i714.TabWidth = i715[17]
  i714.Padding = i715[18]
  i714.AtlasWidth = i715[19]
  i714.AtlasHeight = i715[20]
  return i714
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i718 = root || request.c( 'TMPro.TMP_Glyph' )
  var i719 = data
  i718.id = i719[0]
  i718.x = i719[1]
  i718.y = i719[2]
  i718.width = i719[3]
  i718.height = i719[4]
  i718.xOffset = i719[5]
  i718.yOffset = i719[6]
  i718.xAdvance = i719[7]
  i718.scale = i719[8]
  return i718
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i720 = root || request.c( 'TMPro.KerningTable' )
  var i721 = data
  var i723 = i721[0]
  var i722 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i723.length; i += 1) {
    i722.add(request.d('TMPro.KerningPair', i723[i + 0]));
  }
  i720.kerningPairs = i722
  return i720
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i726 = root || request.c( 'TMPro.KerningPair' )
  var i727 = data
  i726.xOffset = i727[0]
  i726.m_FirstGlyph = i727[1]
  i726.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i727[2], i726.m_FirstGlyphAdjustments)
  i726.m_SecondGlyph = i727[3]
  i726.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i727[4], i726.m_SecondGlyphAdjustments)
  i726.m_IgnoreSpacingAdjustments = !!i727[5]
  return i726
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i728 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i729 = data
  var i731 = i729[0]
  var i730 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i731.length; i += 1) {
    i730.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i731[i + 0]));
  }
  i728.m_GlyphPairAdjustmentRecords = i730
  return i728
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i734 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i735 = data
  i734.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i735[0], i734.m_FirstAdjustmentRecord)
  i734.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i735[1], i734.m_SecondAdjustmentRecord)
  i734.m_FeatureLookupFlags = i735[2]
  return i734
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i738 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i739 = data
  i738.sourceFontFileName = i739[0]
  i738.sourceFontFileGUID = i739[1]
  i738.pointSizeSamplingMode = i739[2]
  i738.pointSize = i739[3]
  i738.padding = i739[4]
  i738.packingMode = i739[5]
  i738.atlasWidth = i739[6]
  i738.atlasHeight = i739[7]
  i738.characterSetSelectionMode = i739[8]
  i738.characterSequence = i739[9]
  i738.referencedFontAssetGUID = i739[10]
  i738.referencedTextAssetGUID = i739[11]
  i738.fontStyle = i739[12]
  i738.fontStyleModifier = i739[13]
  i738.renderMode = i739[14]
  i738.includeFontFeatures = !!i739[15]
  return i738
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i742 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i743 = data
  request.r(i743[0], i743[1], 0, i742, 'regularTypeface')
  request.r(i743[2], i743[3], 0, i742, 'italicTypeface')
  return i742
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i744 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i745 = data
  i744.useSafeMode = !!i745[0]
  i744.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i745[1], i744.safeModeOptions)
  i744.timeScale = i745[2]
  i744.unscaledTimeScale = i745[3]
  i744.useSmoothDeltaTime = !!i745[4]
  i744.maxSmoothUnscaledTime = i745[5]
  i744.rewindCallbackMode = i745[6]
  i744.showUnityEditorReport = !!i745[7]
  i744.logBehaviour = i745[8]
  i744.drawGizmos = !!i745[9]
  i744.defaultRecyclable = !!i745[10]
  i744.defaultAutoPlay = i745[11]
  i744.defaultUpdateType = i745[12]
  i744.defaultTimeScaleIndependent = !!i745[13]
  i744.defaultEaseType = i745[14]
  i744.defaultEaseOvershootOrAmplitude = i745[15]
  i744.defaultEasePeriod = i745[16]
  i744.defaultAutoKill = !!i745[17]
  i744.defaultLoopType = i745[18]
  i744.debugMode = !!i745[19]
  i744.debugStoreTargetId = !!i745[20]
  i744.showPreviewPanel = !!i745[21]
  i744.storeSettingsLocation = i745[22]
  i744.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i745[23], i744.modules)
  i744.createASMDEF = !!i745[24]
  i744.showPlayingTweens = !!i745[25]
  i744.showPausedTweens = !!i745[26]
  return i744
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i746 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i747 = data
  i746.logBehaviour = i747[0]
  i746.nestedTweenFailureBehaviour = i747[1]
  return i746
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i748 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i749 = data
  i748.showPanel = !!i749[0]
  i748.audioEnabled = !!i749[1]
  i748.physicsEnabled = !!i749[2]
  i748.physics2DEnabled = !!i749[3]
  i748.spriteEnabled = !!i749[4]
  i748.uiEnabled = !!i749[5]
  i748.textMeshProEnabled = !!i749[6]
  i748.tk2DEnabled = !!i749[7]
  i748.deAudioEnabled = !!i749[8]
  i748.deUnityExtendedEnabled = !!i749[9]
  i748.epoOutlineEnabled = !!i749[10]
  return i748
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i750 = root || request.c( 'TMPro.TMP_Settings' )
  var i751 = data
  i750.m_enableWordWrapping = !!i751[0]
  i750.m_enableKerning = !!i751[1]
  i750.m_enableExtraPadding = !!i751[2]
  i750.m_enableTintAllSprites = !!i751[3]
  i750.m_enableParseEscapeCharacters = !!i751[4]
  i750.m_EnableRaycastTarget = !!i751[5]
  i750.m_GetFontFeaturesAtRuntime = !!i751[6]
  i750.m_missingGlyphCharacter = i751[7]
  i750.m_warningsDisabled = !!i751[8]
  request.r(i751[9], i751[10], 0, i750, 'm_defaultFontAsset')
  i750.m_defaultFontAssetPath = i751[11]
  i750.m_defaultFontSize = i751[12]
  i750.m_defaultAutoSizeMinRatio = i751[13]
  i750.m_defaultAutoSizeMaxRatio = i751[14]
  i750.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i751[15], i751[16] )
  i750.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i751[17], i751[18] )
  i750.m_autoSizeTextContainer = !!i751[19]
  i750.m_IsTextObjectScaleStatic = !!i751[20]
  var i753 = i751[21]
  var i752 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i753.length; i += 2) {
  request.r(i753[i + 0], i753[i + 1], 1, i752, '')
  }
  i750.m_fallbackFontAssets = i752
  i750.m_matchMaterialPreset = !!i751[22]
  request.r(i751[23], i751[24], 0, i750, 'm_defaultSpriteAsset')
  i750.m_defaultSpriteAssetPath = i751[25]
  i750.m_enableEmojiSupport = !!i751[26]
  i750.m_MissingCharacterSpriteUnicode = i751[27]
  i750.m_defaultColorGradientPresetsPath = i751[28]
  request.r(i751[29], i751[30], 0, i750, 'm_defaultStyleSheet')
  i750.m_StyleSheetsResourcePath = i751[31]
  request.r(i751[32], i751[33], 0, i750, 'm_leadingCharacters')
  request.r(i751[34], i751[35], 0, i750, 'm_followingCharacters')
  i750.m_UseModernHangulLineBreakingRules = !!i751[36]
  return i750
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i754 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i755 = data
  i754.m_GlyphIndex = i755[0]
  i754.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i755[1], i754.m_GlyphValueRecord)
  return i754
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i756 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i757 = data
  i756.m_XPlacement = i757[0]
  i756.m_YPlacement = i757[1]
  i756.m_XAdvance = i757[2]
  i756.m_YAdvance = i757[3]
  return i756
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i758 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i759 = data
  i758.hashCode = i759[0]
  request.r(i759[1], i759[2], 0, i758, 'material')
  i758.materialHashCode = i759[3]
  request.r(i759[4], i759[5], 0, i758, 'spriteSheet')
  var i761 = i759[6]
  var i760 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i761.length; i += 1) {
    i760.add(request.d('TMPro.TMP_Sprite', i761[i + 0]));
  }
  i758.spriteInfoList = i760
  var i763 = i759[7]
  var i762 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i763.length; i += 2) {
  request.r(i763[i + 0], i763[i + 1], 1, i762, '')
  }
  i758.fallbackSpriteAssets = i762
  i758.m_Version = i759[8]
  i758.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i759[9], i758.m_FaceInfo)
  var i765 = i759[10]
  var i764 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i765.length; i += 1) {
    i764.add(request.d('TMPro.TMP_SpriteCharacter', i765[i + 0]));
  }
  i758.m_SpriteCharacterTable = i764
  var i767 = i759[11]
  var i766 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i767.length; i += 1) {
    i766.add(request.d('TMPro.TMP_SpriteGlyph', i767[i + 0]));
  }
  i758.m_SpriteGlyphTable = i766
  return i758
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i770 = root || request.c( 'TMPro.TMP_Sprite' )
  var i771 = data
  i770.name = i771[0]
  i770.hashCode = i771[1]
  i770.unicode = i771[2]
  i770.pivot = new pc.Vec2( i771[3], i771[4] )
  request.r(i771[5], i771[6], 0, i770, 'sprite')
  i770.id = i771[7]
  i770.x = i771[8]
  i770.y = i771[9]
  i770.width = i771[10]
  i770.height = i771[11]
  i770.xOffset = i771[12]
  i770.yOffset = i771[13]
  i770.xAdvance = i771[14]
  i770.scale = i771[15]
  return i770
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i776 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i777 = data
  i776.m_Name = i777[0]
  i776.m_HashCode = i777[1]
  i776.m_ElementType = i777[2]
  i776.m_Unicode = i777[3]
  i776.m_GlyphIndex = i777[4]
  i776.m_Scale = i777[5]
  return i776
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i780 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i781 = data
  request.r(i781[0], i781[1], 0, i780, 'sprite')
  i780.m_Index = i781[2]
  i780.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i781[3], i780.m_Metrics)
  i780.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i781[4], i780.m_GlyphRect)
  i780.m_Scale = i781[5]
  i780.m_AtlasIndex = i781[6]
  i780.m_ClassDefinitionType = i781[7]
  return i780
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i782 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i783 = data
  var i785 = i783[0]
  var i784 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i785.length; i += 1) {
    i784.add(request.d('TMPro.TMP_Style', i785[i + 0]));
  }
  i782.m_StyleList = i784
  return i782
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i788 = root || request.c( 'TMPro.TMP_Style' )
  var i789 = data
  i788.m_Name = i789[0]
  i788.m_HashCode = i789[1]
  i788.m_OpeningDefinition = i789[2]
  i788.m_ClosingDefinition = i789[3]
  i788.m_OpeningTagArray = i789[4]
  i788.m_ClosingTagArray = i789[5]
  i788.m_OpeningTagUnicodeArray = i789[6]
  i788.m_ClosingTagUnicodeArray = i789[7]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i791 = data
  var i793 = i791[0]
  var i792 = []
  for(var i = 0; i < i793.length; i += 1) {
    i792.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i793[i + 0]) );
  }
  i790.files = i792
  i790.componentToPrefabIds = i791[1]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i797 = data
  i796.path = i797[0]
  request.r(i797[1], i797[2], 0, i796, 'unityObject')
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i799 = data
  var i801 = i799[0]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i801[i + 0]) );
  }
  i798.scriptsExecutionOrder = i800
  var i803 = i799[1]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i803[i + 0]) );
  }
  i798.sortingLayers = i802
  var i805 = i799[2]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i805[i + 0]) );
  }
  i798.cullingLayers = i804
  i798.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i799[3], i798.timeSettings)
  i798.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i799[4], i798.physicsSettings)
  i798.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i799[5], i798.physics2DSettings)
  i798.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i799[6], i798.qualitySettings)
  i798.enableRealtimeShadows = !!i799[7]
  i798.enableAutoInstancing = !!i799[8]
  i798.enableDynamicBatching = !!i799[9]
  i798.lightmapEncodingQuality = i799[10]
  i798.desiredColorSpace = i799[11]
  var i807 = i799[12]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( i807[i + 0] );
  }
  i798.allTags = i806
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i811 = data
  i810.name = i811[0]
  i810.value = i811[1]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i815 = data
  i814.id = i815[0]
  i814.name = i815[1]
  i814.value = i815[2]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i819 = data
  i818.id = i819[0]
  i818.name = i819[1]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i821 = data
  i820.fixedDeltaTime = i821[0]
  i820.maximumDeltaTime = i821[1]
  i820.timeScale = i821[2]
  i820.maximumParticleTimestep = i821[3]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i823 = data
  i822.gravity = new pc.Vec3( i823[0], i823[1], i823[2] )
  i822.defaultSolverIterations = i823[3]
  i822.bounceThreshold = i823[4]
  i822.autoSyncTransforms = !!i823[5]
  i822.autoSimulation = !!i823[6]
  var i825 = i823[7]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i825[i + 0]) );
  }
  i822.collisionMatrix = i824
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i829 = data
  i828.enabled = !!i829[0]
  i828.layerId = i829[1]
  i828.otherLayerId = i829[2]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i831 = data
  request.r(i831[0], i831[1], 0, i830, 'material')
  i830.gravity = new pc.Vec2( i831[2], i831[3] )
  i830.positionIterations = i831[4]
  i830.velocityIterations = i831[5]
  i830.velocityThreshold = i831[6]
  i830.maxLinearCorrection = i831[7]
  i830.maxAngularCorrection = i831[8]
  i830.maxTranslationSpeed = i831[9]
  i830.maxRotationSpeed = i831[10]
  i830.baumgarteScale = i831[11]
  i830.baumgarteTOIScale = i831[12]
  i830.timeToSleep = i831[13]
  i830.linearSleepTolerance = i831[14]
  i830.angularSleepTolerance = i831[15]
  i830.defaultContactOffset = i831[16]
  i830.autoSimulation = !!i831[17]
  i830.queriesHitTriggers = !!i831[18]
  i830.queriesStartInColliders = !!i831[19]
  i830.callbacksOnDisable = !!i831[20]
  i830.reuseCollisionCallbacks = !!i831[21]
  i830.autoSyncTransforms = !!i831[22]
  var i833 = i831[23]
  var i832 = []
  for(var i = 0; i < i833.length; i += 1) {
    i832.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i833[i + 0]) );
  }
  i830.collisionMatrix = i832
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i837 = data
  i836.enabled = !!i837[0]
  i836.layerId = i837[1]
  i836.otherLayerId = i837[2]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i839 = data
  var i841 = i839[0]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i841[i + 0]) );
  }
  i838.qualityLevels = i840
  var i843 = i839[1]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( i843[i + 0] );
  }
  i838.names = i842
  i838.shadows = i839[2]
  i838.anisotropicFiltering = i839[3]
  i838.antiAliasing = i839[4]
  i838.lodBias = i839[5]
  i838.shadowCascades = i839[6]
  i838.shadowDistance = i839[7]
  i838.shadowmaskMode = i839[8]
  i838.shadowProjection = i839[9]
  i838.shadowResolution = i839[10]
  i838.softParticles = !!i839[11]
  i838.softVegetation = !!i839[12]
  i838.activeColorSpace = i839[13]
  i838.desiredColorSpace = i839[14]
  i838.masterTextureLimit = i839[15]
  i838.maxQueuedFrames = i839[16]
  i838.particleRaycastBudget = i839[17]
  i838.pixelLightCount = i839[18]
  i838.realtimeReflectionProbes = !!i839[19]
  i838.shadowCascade2Split = i839[20]
  i838.shadowCascade4Split = new pc.Vec3( i839[21], i839[22], i839[23] )
  i838.streamingMipmapsActive = !!i839[24]
  i838.vSyncCount = i839[25]
  i838.asyncUploadBufferSize = i839[26]
  i838.asyncUploadTimeSlice = i839[27]
  i838.billboardsFaceCameraPosition = !!i839[28]
  i838.shadowNearPlaneOffset = i839[29]
  i838.streamingMipmapsMemoryBudget = i839[30]
  i838.maximumLODLevel = i839[31]
  i838.streamingMipmapsAddAllCameras = !!i839[32]
  i838.streamingMipmapsMaxLevelReduction = i839[33]
  i838.streamingMipmapsRenderersPerFrame = i839[34]
  i838.resolutionScalingFixedDPIFactor = i839[35]
  i838.streamingMipmapsMaxFileIORequests = i839[36]
  i838.currentQualityLevel = i839[37]
  return i838
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i846 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i847 = data
  i846.xPlacement = i847[0]
  i846.yPlacement = i847[1]
  i846.xAdvance = i847[2]
  i846.yAdvance = i847[3]
  return i846
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"44":[45],"46":[45],"47":[45],"48":[45],"49":[45],"50":[45],"51":[52],"53":[15],"54":[55],"56":[55],"57":[55],"58":[55],"59":[55],"60":[55],"61":[55],"62":[63],"64":[63],"65":[63],"66":[63],"67":[63],"68":[63],"69":[63],"70":[63],"71":[63],"72":[63],"73":[63],"74":[63],"75":[63],"76":[15],"77":[78],"79":[80],"81":[80],"20":[2],"82":[2],"83":[2],"22":[20],"5":[3,2],"84":[2],"21":[20],"85":[2],"86":[2],"29":[2],"87":[2],"88":[2],"89":[2],"28":[2],"90":[2],"91":[2],"92":[3,2],"93":[2],"94":[2],"95":[2],"96":[2],"97":[3,2],"98":[2],"99":[18],"100":[18],"19":[18],"101":[18],"102":[15],"103":[15],"104":[2],"105":[78,2],"24":[2,3],"106":[2],"107":[3,2],"108":[78],"109":[3,2],"110":[2],"111":[112],"113":[112],"114":[112]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Button","UnityEngine.CanvasGroup","UnityEngine.MonoBehaviour","CircleDrag","CircleDrop","CircleAnimation","CheckmarkAnimation","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","DownloadNow","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Material","ObjectAnimation","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","EndCardAnimation","LevelManager","UnityEngine.GameObject","LongVersion","UnityEngine.AudioSource","UnityEngine.AudioClip","AudioManager","UnityEngine.Cubemap","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.StateMachine","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.3f1";

Deserializers.productName = "Merge Sticker Playbook - Color Quest";

Deserializers.lunaInitializationTime = "04/28/2025 08:15:54";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "28725";

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

Deserializers.buildID = "e765e197-06b4-4e43-af56-5b1fb8e8cfd4";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

