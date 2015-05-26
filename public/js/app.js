(function() {
    app = angular.module('map', []);
    app.origin = []
    app.destination = []
    app.origin_marker = null
    app.destination_marker = null

    app.map = new GMaps({
        div: '#map',
        lat: 25.726406,
        lng: -100.31190379999998,
    });

    updateRoute = function() {
        app.map.cleanRoute();
        console.log("indeed");
        app.map.drawRoute({
            origin: app.origin,
            destination: app.destination,
            travelMode: 'driving',
            strokeColor: '#131540',
            strokeOpacity: 0.6,
            strokeWeight: 6
        });
    }

    app.controller('SearchAddressController', function () {
        this.searches = {}
    });

    app.controller('MapController', function($http) {
        back_origin = [25.70816116719434, -100.32469153404236]
        back_destination = [25.70915684804554, -100.31779289245605]
        updateRoute();

        // Simple POST request example (passing data) :
        $http.post('/generate', {
            start: { latitude: 25.232131, longitude: -100.12121212121 },
            end: { latitude: 25.123512312, longitude: -100.110019128889 }
        }).success(function(data, status, headers, config) {
            routes = Object.keys(data).map(function (key) {return data[key]});
            console.log("Se supone que está dibujando la pinche ruta ajaj ")
        }).error(function(data, status, headers, config) {
            console.log("Llego a error");
            console.log(status);
        });
    });

    GMaps.geolocate({
        success: function(position) {
            app.map.setCenter(position.coords.latitude, position.coords.longitude);
        },
        error: function(error) {
            alert('Geolocation failed: '+error.message);
        },
        not_supported: function() {
            alert("Your browser does not support geolocation");
        }
    });

    app.map.setContextMenu({
        control: 'map',
        options: [{
            title: 'Directions from here',
            name: 'directions_from_here',
            action: function(e) {
                origin = e.latLng
                app.origin = Object.keys(origin).map(function (key) {return origin[key]});
                app.
                console.log(app.origin);
                console.log(app.destination);
            }
        }, {
            title: 'Directions to here',
            name: 'directions_to_here',
            action: function(e) {
                destination = e.latLng
                app.destination = Object.keys(destination).map(function (key) {return destination[key]});
                console.log(app.origin);
                console.log(app.destination);
                updateRoute();
            }
        }]
    });
})();