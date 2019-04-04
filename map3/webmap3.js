let us = L.map('webmap3').setView([38, -100], 4.4);
	L.tileLayer('https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png').addTo(us);
let stateDemographicsUrl = 'https://opendata.arcgis.com/datasets/63aa98f68bd54e528d7a75e6cf2492bd_1.geojson'
jQuery.getJSON(stateDemographicsUrl, function (data) {
  L.geoJSON(data).addTo(us)
})
