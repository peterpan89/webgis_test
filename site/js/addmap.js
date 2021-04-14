//Khai báo biến chứa link đến dữ liệu geoserver:
geo_service = 'http://123.30.236.192:8080/geoserver/detai/wms?'

//Khai báo biến thêm các lớp bản đồ:
var trambom = L.tileLayer.wms(geo_service, {//1. Lớp trạm bơm
	layers: 'detai:trambom',
	format: 'image/png',
	tile: true,// để tile:true để cắt nhỏ bản đồ giúp load nhanh hơn
	transparent: true
});
var cong = L.tileLayer.wms(geo_service, {//2. Lớp cống
	layers: 'detai:cong',
	format: 'image/png',
	tile: true,
	transparent: true
});
var dapdat = L.tileLayer.wms(geo_service, {//3. Lớp đập đất
	layers: 'detai:dapdat',
	format: 'image/png',
	tile: true,
	transparent: true
});
var cln = L.tileLayer.wms(geo_service, {//4. Lớp chất lượng nước
	layers: 'detai:CLN',
	format: 'image/png',
	tile: true,
	transparent: true
});
var tvcln = L.tileLayer.wms(geo_service, {//5. Lớp thủy văn chất lượng nước
	layers: 'detai:KS_TVCLN',
	format: 'image/png',
	tile: true,
	transparent: true
});
var kenhrach = L.tileLayer.wms(geo_service, {//6. Lớp sông kênh rạch
	layers: 'detai:debao',
	format: 'image/png',
	tile: true,
	transparent: true
});
var giaothong = L.tileLayer.wms(geo_service, {//7. Lớp giao thông
	layers: 'detai:giaothong',
	format: 'image/png',
	tile: true,
	transparent: true
});
var hanhchinh = L.tileLayer.wms(geo_service, {//8. Lớp ranh giới hành chính
	layers: 'detai:ranhgioihc',
	format: 'image/png',
	tile: true,
	transparent: true
});
var vungnghiencuu = L.tileLayer.wms(geo_service, {//9. Lớp ranh vùng nghiên cứu
	layers: 'detai:vungnghiencuu',
	format: 'image/png',
	tile: true,
	transparent: true
});
var highlight_style ={
	"color": "yellow",
	"weight": 6,
	"opacity": 0.5
};
highlight = new L.GeoJSON.AJAX(null,{
	style: highlight_style
});
//Khai báo control layers
//Khai báo bản đồ nền
bmUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
var bmAttr = 'basemaps'
var grayscale = L.tileLayer(bmUrl, {id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: bmAttr});
var streets  = L.tileLayer(bmUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: bmAttr});
var baseLayers = {// Luôn phải để biến này tên là baseLayers
	"Bản đồ xám": grayscale,
	"Bản đồ Streets": streets
};
var chuyende = {//Khai báo các lớp bản đồ chuyên đề
	"Vùng nghiên cứu": vungnghiencuu,
	"Hành chính": hanhchinh,
	"Giao thông": giaothong,
	"Sông kênh": kenhrach,
	"Thủy văn chất lượng nước": tvcln,
	"Chất lượng nước": cln,
	"Đập đất": dapdat,
	"Cống thủy lợi": cong,
	"Trạm bơm điện": trambom
};
var map = L.map('map', {
	center: [10.7368, 106.5746],
	zoom: 11,
	layers: [grayscale, vungnghiencuu]
});
highlight.addTo(map);
L.control.layers(baseLayers, chuyende).addTo(map);
