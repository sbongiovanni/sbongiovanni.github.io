let myMap = L.map('map1').setView([32.18, -99.14], 4)
//L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png').addTo(myMap)
var OpenStreetMap_BlackAndWhite = L.tileLayer('https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);
let nolaPoint = L.marker([30, -90]).addTo(myMap)
let myPolygon = L.polygon([
  [30, -90],
  [31, -91],
  [32, -90],
]).addTo(myMap);

myPolygon.bindPopup('A polygon')
nolaPoint.bindPopup('A <strong>marker</strong>')
