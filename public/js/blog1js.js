var mymap = L.map('mapid').setView([ 42.240, 1.706 ], 11);
//afegir un tide layer 42.24041212098194, 1.7066462656219712
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);
//marcadors
L.marker([42.240, 1.706]).addTo(mymap)
.bindPopup("<b>Massís del pedraforca</b><br />Parc Natural Cadí-Moixeró").openPopup();
//afegir cercle
var circle = L.circle([42.140, 1.506], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.4,
    radius: 1700
}).addTo(mymap);

//afegir polígon
var polygon = L.polygon([
    [42.140, 1.55],
    [42.240, 1.60],
    [42.230, 1.5]
]).addTo(mymap);
//attach info a object
circle.bindPopup("Perímetre circular");
polygon.bindPopup("Sóc un polígon");  

//clic mostrat coord
var popup = L.popup();

function onMapClick(e) {
popup
.setLatLng(e.latlng)
.setContent("Heu fet clic a " + e.latlng.toString())
.openOn(mymap);
}

mymap.on('click', onMapClick);