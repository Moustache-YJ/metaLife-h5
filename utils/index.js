
export function translate(imgSrc, scale, type , callback) {
	var img = new Image();
	img.src = imgSrc;
	img.onload = function() {
		var that = this;
		var h = that.height; // 默认按比例压缩
		var w = that.width;
		var canvas = document.createElement('canvas');
		var ctx = canvas.getContext('2d');
		var width = document.createAttribute("width");
		width.nodeValue = w;
		var height = document.createAttribute("height");
		height.nodeValue = h;
		canvas.setAttributeNode(width);
		canvas.setAttributeNode(height);
		ctx.drawImage(that, 0, 0, w,h);
		var base64 = canvas.toDataURL('image/jpeg', scale);//压缩比例
		canvas = null;
		if(type == 'base64'){
			callback(base64);
		}else{
			var blob = base64ToBlob(base64); 
			var blobUrl = window.URL.createObjectURL(blob);//blob地址
			callback(blobUrl);
		}
	}
}
// base转Blob
export function base64ToBlob(base64) { 
	var arr = base64.split(','),
		mime = arr[0].match(/:(.*?);/)[1],
		bstr = atob(arr[1]),
		n = bstr.length,
		u8arr = new Uint8Array(n);
	while (n--) {
		u8arr[n] = bstr.charCodeAt(n);
	}
	return new Blob([u8arr], {
		type: mime
	});
}