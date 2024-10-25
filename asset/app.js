const sekolahGroup = L.layerGroup();
const masjidGroup = L.layerGroup();
const tokoGroup = L.layerGroup();
const puskesmasGroup = L.layerGroup();
const pasarGroup = L.layerGroup();
const sekolahCluster = L.markerClusterGroup();
const masjidCluster = L.markerClusterGroup();
const tokoCluster = L.markerClusterGroup();
const puskesmasCluster = L.markerClusterGroup();
const pasarGroupCluster = L.markerClusterGroup();

const iconSekolah = L.icon({
    iconUrl: 'asset/leaflet/images/sekolah.jpg',
    iconSize: [50, 50], // size of the icon
    iconAnchor: [22, 54], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -26] // point from which the popup should open relative to the iconAnchor
});
const iconmasjid = L.icon({
    iconUrl: 'asset/leaflet/images/masjid.jpg',
    iconSize: [50, 50], // size of the icon
    iconAnchor: [22, 54], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -26] // point from which the popup should open relative to the iconAnchor
});
const iconToko = L.icon({
    iconUrl: 'asset/leaflet/images/icon_toko.png',
    iconSize: [50, 50], // size of the icon
    iconAnchor: [22, 54], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -26] // point from which the popup should open relative to the iconAnchor
});

var masjid = [
    L.marker([-8.742754307873344, 116.40504573403463], { icon: iconmasjid }).addTo(masjidCluster).bindPopup(' <img src="asset/leaflet/images/masjid1.jpg">'),
    L.marker([-8.742998203812082, 116.40188072747885], { icon: iconmasjid }).addTo(masjidCluster).bindPopup(' <img src="asset/leaflet/images/musholla.jpg">'),
    // Tambahkan Kornat jika lebih dari 1
];

var sekolah = [
    L.marker([-8.747750541586822, 116.40162684509893], { icon: iconSekolah }).addTo(sekolahCluster).bindPopup(' <img src="asset/leaflet/images/SDN_2.jpg">'),
    L.marker([-8.742027311630624, 116.40690520496658], { icon: iconSekolah }).addTo(sekolahCluster).bindPopup(' <img src="asset/leaflet/images/SDN_3.jpg">'),
    // Tambahkan Kornat jika lebih dari 1
];

var toko = [
    L.marker([-8.743347291218246, 116.40347037684448], { icon: iconToko }).addTo(tokoCluster).bindPopup(' <img src="asset/leaflet/images/alfamart.jpg">'),
    L.marker([-8.742985822715568, 116.4005253139777], { icon: iconToko }).addTo(tokoCluster).bindPopup(' <img src="asset/leaflet/images/toko1.jpg">'),
    // Tambahkan Kornat jika lebih dari 1
];
var streets = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    id: 'mapbox.streets',
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
var satelit = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    id: 'mapbox.streets',
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

var layer1 = L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});



var layer2 = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

const map = L.map('map', {
    center: [-8.742034773624031, 116.4125588867331],
    zoom: 13,
    layers: [layer1, sekolahCluster, masjidCluster, tokoCluster, puskesmasCluster]
});


const baseLayers = {
    'streets': streets,
    'satelit': satelit,
};

const overlays = {
    'Sekolah': sekolahCluster,
    'Masjid': masjidCluster,
    'Toko': tokoCluster,
    'puskesmas': puskesmasCluster,
};

const layerControl = L.control.layers(baseLayers, overlays).addTo(map);



//  Menampilkan geojSON
L.geoJSON(gis).addTo(map);