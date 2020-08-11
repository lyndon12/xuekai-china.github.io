export default [
  // start
  {
    title: "起步",
    icon: "bank",
    key: "hello",
    children: [
      {
        title: "Hello World",
        demoLink: "./hello/helloWorld.html"
      }
    ]
  },
  // model
  {
    title: "模型",
    icon: "bank",
    key: "model",
    children: [
      {
        title: "加载 Sbm",
        demoLink: "./model/loadSbm.html"
      },
      {
        title: "加载 Xml",
        demoLink: "./model/loadXml.html"
      },
      {
        title: "加载 json",
        demoLink: "./model/loadJson.html"
      },
      {
        title: "加载 gltf",
        demoLink: "./model/loadGltf.html"
      },
      {
        title: "加载 fbx",
        demoLink: "./model/loadFbx.html"
      }
    ]
  },
  // modelTool
  {
    title: "模型操作工具 🔧",
    icon: "bank",
    key: "modelTool",
    children: [
      {
        title: "操控模型",
        demoLink: "./modelTool/transformModel.html"
      },
      {
        title: "模型跟随鼠标",
        demoLink: "./modelTool/followMouse.html"
      },
      {
        title: "复制模型",
        demoLink: "./modelTool/copyModel.html"
      },
      {
        title: "模型爆炸",
        demoLink: "./modelTool/blastModel.html"
      }
    ]
  },
  // poi
  {
    title: "POI",
    icon: "bank",
    key: "poi",
    children: [
      {
        title: "Poi",
        demoLink: "./poi/createPoi.html"
      },
      {
        title: "PoiNode",
        demoLink: "./poi/createPoiNode.html"
      },
      {
        title: "PoiNode 空间视频",
        demoLink: "./poi/createPoiNodeForVideo.html"
      },
      {
        title: "Poi 跟随鼠标",
        demoLink: "./poi/followMouse.html"
      }
    ]
  },
  // event
  {
    title: "事件",
    icon: "bank",
    key: "event",
    children: [
      {
        title: "全局事件",
        demoLink: "./event/globalEvent.html"
      },
      {
        title: "模型事件",
        demoLink: "./event/modelEvent.html"
      },
      {
        title: "poi事件",
        demoLink: "./event/poiEvent.html"
      }
    ]
  },
  // drawRender
  {
    title: "点线面",
    icon: "bank",
    key: "pointLineFace",
    children: [
      {
        title: "绘制点线面",
        demoLink: "./pointLineFace/draw.html"
      },
      {
        title: "渲染点线面",
        demoLink: "./pointLineFace/render.html"
      }
    ]
  },
  // background
  {
    title: "背景",
    icon: "bank",
    key: "background",
    children: [
      {
        title: "背景色",
        demoLink: "./background/backgroundColor.html"
      },
      {
        title: "背景图",
        demoLink: "./background/backgroundImage.html"
      },
      {
        title: "天空盒",
        demoLink: "./background/skyBox.html"
      }
    ]
  },
  // sceneEffect
  {
    title: "场景工具 🔧",
    icon: "bank",
    key: "sceneTool",
    children: [
      {
        title: "选中模型",
        demoLink: "./sceneTool/select.html"
      },
      {
        title: "创建地面",
        demoLink: "./sceneTool/createGround.html"
      },
      {
        title: "2D模式",
        demoLink: "./sceneTool/2DMode.html"
      },
      {
        title: "雾化",
        demoLink: "./sceneTool/fog.html"
      },
      {
        title: "切割",
        demoLink: "./sceneTool/clipping.html"
      },
      {
        title: "测量",
        demoLink: "./sceneTool/measure.html"
      }
    ]
  },
  // camera
  {
    title: "相机",
    icon: "bank",
    key: "camera",
    children: [
      {
        title: "相机限制",
        demoLink: "./camera/cameraLimit.html"
      },
      {
        title: "视角枚举",
        demoLink: "./camera/viewpointEnum.html"
      },
      {
        title: "飞向",
        demoLink: "./camera/flyTo.html"
      },
      {
        title: "环绕",
        demoLink: "./camera/surround.html"
      },
      {
        title: "第一人称",
        demoLink: "./camera/firstPersonRoot.html"
      },
    ]
  },
  // ligth
  {
    title: "灯光",
    icon: "bank",
    key: "ligth",
    children: [
      {
        title: "灯光配置",
        demoLink: "./light/lightOption.html"
      },
    ]
  },
  // topology
  {
    title: "路径",
    icon: "bank",
    key: "topology",
    children: [
      {
        title: "加载 GML 路径",
        demoLink: "./topology/loadGml.html"
      },
      {
        title: "操控 GML 路径",
        demoLink: "./topology/transformGml.html"
      },
      {
        title: "更多功能",
        demoLink: "./topology/moreFunc.html"
      },
      {
        title: "第三人称巡检",
        demoLink: "./topology/thirdPersonAutoPatrol.html"
      },
    ]
  },
  // animation
  {
    title: "动画",
    icon: "bank",
    key: "animation",
    children: [
      {
        title: "创建动画",
        demoLink: "./animation/createAnimation.html"
      },
    ]
  },
  // 计算
  {
    title: "计算",
    icon: "bank",
    key: "math",
    children: [
      {
        title: "越界计算",
        demoLink: "./math/strideOverCompute.html"
      }
    ]
  },
]