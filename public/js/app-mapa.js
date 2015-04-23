var mark;
var map;
var markers = [];

function initialize() {
    mark=0;
    var mycenter = new google.maps.LatLng(25.726406, -100.31190379999998);
    var mapOptions = {
        zoom: 15,
        center: mycenter,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    // LLamada a addMarker() si el mapa el mapa es clickeado.
    google.maps.event.addListener(map, 'click', function(event) {
        addMarker(event.latLng);
    });
}

// agreaga marker y valores de lat y lon en array.
function addMarker(location) {
    if (mark < 2) {
        var marker = new google.maps.Marker({
            position: location,
            map: map
        });

        var infowindow = new google.maps.InfoWindow({
            content: 'Latitud: ' + location.lat() + '<br>Longitud: ' + location.lng()
        });

        infowindow.open(map,marker);
        markers.push(marker);
    }
    mark++;
}

// Muestra todos los markers.
function setAllMap(map) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}

// Quita los marcadores del mapa.
function clearMarkers() {
    setAllMap(null);
    mark = 0;
}

// Muestra los marcadores en el mapa.
function showMarkers() {
    setAllMap(map);
}

// Quita los marcadores del array y el mapa.
function deleteMarkers() {
    clearMarkers();
    markers = [];
}

google.maps.event.addDomListener(window, 'load', initialize);