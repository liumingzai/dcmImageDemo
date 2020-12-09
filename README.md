> 医学影像的展示和操作，使用cornerstone插件实现

#### Cornerstone是一套JavaScript底层组件，用于支持医学影像的显示与交互；
[CornerstonJs](https://github.com/cornerstonejs)
[OHIF Viewer](https://viewer.ohif.org/viewer/1.2.826.0.13854362241694438965858641723883466450351448)

``` bash
<script src="vendor/hammer.js"></script>
<script src="vendor/cornerstone-core.min.js"></script>
<script src="vendor/cornerstone-math.js"></script>
<script src="vendor/cornerstone-tools.js"></script>
<script src="vendor/cornerstoneWADOImageLoader.js"></script>
<script src="vendor/cornerstone-web-image-loader.js"></script>

```

#### 什么是DICOMweb？
DICOMweb是DICOM标准的一部分，它采用当前互联网应用最广的RESTful服务方式，面向互联网，提供DICOM影像查询、调阅和存储等服务。可以说，DICOMweb将DICOM的应用范围从传统的医院内局域网，扩展到了互联网
[医学杂技](https://zhuanlan.zhihu.com/p/58767457)

``` bash

const element = document.getElementById('dcmElement');
  
// const imageId ="CRStudy/1.3.51.5145.5142.20010109.1105627.1.0.1.dcm";
const imageId =  "dicomweb://" + window.location.host + "/demo/asset/demo.dcm";
// 准备显示图像的元素
cornerstone.enable(element);
// 加载图像
cornerstone.loadAndCacheImage(imageId).then(function(image) {
      cornerstone.displayImage(element, image);
});

```

#### CornerstoneTool使用？

``` bash

// 长度工具
cornerstoneTools.addTool(cornerstoneTools.LengthTool)
// 放大镜
cornerstoneTools.addTool(cornerstoneTools.MagnifyTool);
// 缩放工具
cornerstoneTools.addTool(cornerstoneTools.ZoomTouchPinchTool);
// 角度工具
cornerstoneTools.addTool(cornerstoneTools.AngleTool)
.....

```

#### 项目demo的展示

安装http-server，启动服务以任意端口（比如：8090）
``` bash
 npm i http-server -g

```

启动服务

``` bash
 http-server -c-1 --port 8090

```

页面浏览: [Demo](http://127.0.0.1/demo/)

如果有内网穿透可以直接在app上浏览