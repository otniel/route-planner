(function() {
    app = angular.module('map', []);

    app.map = new GMaps({
        div: '#map',
        lat: 25.726406,
        lng: -100.31190379999998
    });

    app.controller('MapController', function($http) {
        // Simple POST request example (passing data) :
        $http.post('/generate', {
            start: { latitude: 25.232131, longitude: -100.12121212121 },
            end: { latitude: 25.123512312, longitude: -100.110019128889 }
        }).success(function(data, status, headers, config) {
            routes = Object.keys(data).map(function (key) {return data[key]});
            colors = ['#131540', '#1ABCD0', '#FA14C3', '#AB2CFF', '#0BFCAB', '#1FBA03', '#BAC132', '#AAB12F']
            for(i = 0; i<= routes.length; i++) {
                app.map.drawPolyline({
                path: routes[i],
                strokeColor: colors[i],
                strokeOpacity: 0.6,
                strokeWeight: 5
            });
            }
            
        }).error(function(data, status, headers, config) {
            console.log("Llego a error");
            console.log(status);
        });
    });

    GMaps.geolocate({
        success: function(position) {
            map.setCenter(position.coords.latitude, position.coords.longitude);
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
                console.log("LATITUDE: " + e.latLng.lat());
                console.log("LONGITUDE: " + e.latLng.lng());
            }
        }, {
            title: 'Directions to here',
            name: 'directions_from_here',
            action: function(e) {
                this.setCenter(e.latLng.lat(), e.latLng.lng());
            }
        }]
    });
})();

 /*(function() {


    var map = new GMaps({
        div: '#map',
        lat: 25.726406,
        lng: -100.31190379999998
    });

    GMaps.geolocate({
        success: function(position) {
            map.setCenter(position.coords.latitude, position.coords.longitude);
        },
        error: function(error) {
            alert('Geolocation failed: '+error.message);
        },
        not_supported: function() {
            alert("Your browser does not support geolocation");
        },
        always: function() {
            alert("Done!");
        }
    });

    map.setContextMenu({
        control: 'map',
        options: [{
            title: 'Add marker',
            name: 'add_marker',
            action: function(e) {
                this.addMarker({
                    lat: e.latLng.lat(),
                    lng: e.latLng.lng(),
                    title: 'New marker'
                });
            }
        }, {
            title: 'Center here',
            name: 'center_here',
            action: function(e) {
                this.setCenter(e.latLng.lat(), e.latLng.lng());
            }
        }]
    });
})();
*/