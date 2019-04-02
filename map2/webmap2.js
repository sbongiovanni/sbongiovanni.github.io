let us = L.map('webmap2').setView([38, -100], 4.4);
	L.tileLayer('https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png').addTo(us);
	L.tileLayer.wms('https://nowcoast.noaa.gov/arcgis/services/nowcoast/sat_meteo_emulated_imagery_lightningstrikedensity_goes_time/MapServer/WMSServer?request=GetCapabilities&service=WMS', {
  		layers: 'strikes/km^2/min * 10^3',
  		format: 'image/png',
  		transparent: true,
  		attribution: 'NOAA'
	}).addTo(us)
	L.tileLayer.wms('https://nowcoast.noaa.gov/arcgis/services/nowcoast/radar_meteo_imagery_nexrad_time/MapServer/WMSServer?request=GetCapabilities&service=WMS', {
 		 layers: '0',
 		 format: 'image/png',
  		transparent: true,
  attribution: 'NOAA'
}).addTo(us);
