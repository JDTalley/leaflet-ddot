var mymap = L.map('mapid').setView([38.9072, -77.0369], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

// Wards
L.esri.featureLayer(
    {
        url: 'https://maps2.dcgis.dc.gov/dcgis/rest/services/DDOT/DdotAssets/MapServer/13'
    }).addTo(mymap);

// Work Orders
L.esri.featureLayer(
    {
        url: 'https://maps2.dcgis.dc.gov/dcgis/rest/services/DDOT/Cityworks/MapServer/0'
    }).addTo(mymap);

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);