cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
cornerstoneTools.external.cornerstone = cornerstone;
cornerstoneTools.external.Hammer = Hammer;
cornerstoneTools.external.cornerstoneMath = cornerstoneMath;
cornerstoneTools.init();
var config = {
		maxWebWorkers: navigator.hardwareConcurrency || 1,
		startWebWorkersOnDemand : true,
};

const element = document.getElementById('dcmElement');
  
// const imageId ="CRStudy/1.3.51.5145.5142.20010109.1105627.1.0.1.dcm";
const imageId =  "dicomweb://" + window.location.host + "/demo/asset/demo.dcm";
// 准备显示图像的元素
cornerstone.enable(element);
// 加载图像
cornerstone.loadAndCacheImage(imageId).then(function(image) {
      cornerstone.displayImage(element, image);
});

// 长度工具
const LengthTool = cornerstoneTools.LengthTool;
cornerstoneTools.addTool(LengthTool)
// 放大镜
const MagnifyTool = cornerstoneTools.MagnifyTool;
cornerstoneTools.addTool(MagnifyTool);
// 缩放工具
const ZoomTouchPinchTool = cornerstoneTools.ZoomTouchPinchTool;
cornerstoneTools.addTool(ZoomTouchPinchTool);
// 角度工具
const AngleTool = cornerstoneTools.AngleTool;
cornerstoneTools.addTool(AngleTool)

$(".magnify").on('click touchstart', function() {
	disabledAllTool();
	cornerstoneTools.setToolActive('Magnify', { mouseButtonMask: 1 });
});

$(".zoom").on('click touchstart', function() {
	disabledAllTool();
	cornerstoneTools.setToolActive('ZoomTouchPinch', { mouseButtonMask: 1 })
});

$(".angle").on('click touchstart', function() {
	disabledAllTool();
	cornerstoneTools.setToolActive('Angle', { mouseButtonMask: 1 })
});

$(".length").on('click touchstart', function() {
	disabledAllTool();
	cornerstoneTools.setToolActive('Length', { mouseButtonMask: 1 })
});

function disabledAllTool() {
	cornerstoneTools.setToolDisabled("Magnify");
	cornerstoneTools.setToolDisabled("ZoomTouchPinch");
	cornerstoneTools.setToolDisabled("Angle");
	cornerstoneTools.setToolDisabled("Length");
}

$(".magnify").tooltip();
$(".zoom").tooltip();
$(".angle").tooltip();
$(".length").tooltip();