let nola = L.map('webmap3').setView([29, -90], 10);
let basemap = 'https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png';
L.tileLayer(basemap).addTo(nola);
let nolaparksUrl = 'https://opendata.arcgis.com/datasets/3273a5f8334d40838681ff0337eddb8c_0.geojson';
jQuery.getJSON(nolaparksUrl, function (data) {
  let parkStyle = function (feature) {
    let park = feature.properties.SHAPE
    let parkColor = 'green'
    {
      color: parkColor,
      weight: 1.5,
      fillOpacity: 0.3
    }
  }
    let onEachFeature = function (feature, layer) {
      let name = feature.properties.NAME
      let street = feature.properties.STREET
      let acres = feature.properties.ACRES
      let neighborhood = feature.properties.NEIGHBORHOOD_NAME
      let agency = feature.properties.AGENCY_JURISDICTION
      layer.bindPopup('Name: ' + name + 'Adress: ' + street + 'Acres: ' + acres + 'Neighborhood: ' + neighborhood + 'Ownership: ' + agency)
  }
  let parkGeojsonOptions = {
    style: parkStyle,
    onEachFeature: onEachFeature
  }
  L.geoJSON(data, parkGeojsonOptions).addTo(nola)
})
