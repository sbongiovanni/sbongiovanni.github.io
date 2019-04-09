let us = L.map('webmap3').setView([30, -90], 12);
	L.tileLayer('https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png').addTo(us);
let stateDemographicsUrl = 'https://opendata.arcgis.com/datasets/63aa98f68bd54e528d7a75e6cf2492bd_1.geojson'
jQuery.getJSON(stateDemographicsUrl, function (data) {
  L.geoJSON(data).addTo(us)
})
let stateStyle = { color: 'green' }
let stateGeojsonOptions = { style: stateStyle }
L.geoJSON(data, stateGeojsonOptions).addTo(us)

let stateDemographicsUrl = 'https://opendata.arcgis.com/datasets/63aa98f68bd54e528d7a75e6cf2492bd_0.geojson'
jQuery.getJSON(stateDemographicsUrl, function (data) {
  L.geoJSON(data).addTo(us)
})
