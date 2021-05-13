// window.onload = function(){

//     var map;

//     function initialize(){
//         var mapProp = {
//             center: new google.maps.LatLng(-27.648598,-48.557423),
//             scrollWheel: false,
//             zoom: 12,
//             mapTypeId:google.maps.MapTypeId.ROADMAP
//         }

//         map = new google.maps.Map(document.getElementById("mapa"),mapProp);

//     }

    

//     initialize();

// }


    
// create map
const map = L.map('mapid').setView([-22.92804167,-47.0475769], 12)

// create and add titleLayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(map)

// create icon
const icon = L.icon({
    iconUrl: "../imagens/icon_minip.png",
    iconSize: [58, 68],
    iconAnchor: [39, 68],
    popupAnchor: [-14, -55]
})

// create poup overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 90,
    minHeight: 240
}).setContent('Eu estou aqui :)')



// create and add maker
L
.marker([-22.92804167,-47.0475769], { icon })
.addTo(map)
.bindPopup(popup)