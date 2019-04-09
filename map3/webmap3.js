let us = L.map('webmap3').setView([30, -90], 12);
	L.tileLayer('https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png').addTo(us);
let bikeshareareaURL = 'https://opendata.arcgis.com/datasets/63aa98f68bd54e528d7a75e6cf2492bd_1.geojson'
jQuery.getJSON(bikeshareareaURL, function (data) {
  L.geoJSON(data).addTo(us)
})

let bikesharestationsURL = 'https://opendata.arcgis.com/datasets/63aa98f68bd54e528d7a75e6cf2492bd_0.geojson'
jQuery.getJSON(bikesharestationsURL, function (data) {
    let onEachFeature = function (feature, layer) {
      let stationnumber = feature.properties.Station_Name;
      let rackspaces = feature.properties.Number_of_Rack_Spaces;
      let sign = feature.properties.Sign_Type;
       layer.bindPopup( stationnumber + sign + 'Number of Rack Spaces' + ':' + rackspaces '' )
  };
  let parksGeojsonOptions = {
    style: stateStyle,
    onEachFeature: onEachFeature
  };
  L.geoJSON(data, parksGeojsonOptions).addTo(us);
	})

bikeshareareaURL.bindPopup('Bike Share Service Area')
