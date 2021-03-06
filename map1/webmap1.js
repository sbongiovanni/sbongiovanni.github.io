let myMap = L.map('map1').setView([30, -90], 10)
//L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png').addTo(myMap)
var OpenStreetMap_BlackAndWhite = L.tileLayer('https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);
let nolaPoint = L.marker([29.958941, -90.064618]).addTo(myMap)
let myPolygon = L.polygon([
  [30.051098, -90.148126],
  [29.914709, -90.266568],
  [29.917677, -90.001626],
]).addTo(myMap);
let MetairieNolaLine = L.polygon([
  [30.031052, -90.119940],
  [29.909986, -90.151926]
]).addTo(myMap);

myPolygon.bindPopup('New Orleans Metro Area')
nolaPoint.bindPopup('<strong>French Quarter</strong>')
MetairieNolaLine.bindPopup ('City Line')
