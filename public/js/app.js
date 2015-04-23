(function() {
    app = angular.module('map', []);

    app.controller('MapController', function($http) {
        // Simple POST request example (passing data) :
        $http.post('/generate', {
            start: {
                latitude: 25.232131,
                longitude: -100.12121212121
            },
            end: {
                latitude: 25.123512312,
                longitude: -100.110019128889
            }
        }).success(function(data, status, headers, config) {
            console.log("Llego a success");
            console.log(data);
            console.log(config);
        }).error(function(data, status, headers, config) {
            console.log("Llego a error");
            console.log(status);
        });
    });

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
        }
    });

    map.setContextMenu({
        control: 'map',
        options: [{
            title: 'Directions from here',
            name: 'add_marker',
            action: function(e) {
                this.addMarker({
                    lat: e.latLng.lat(),
                    lng: e.latLng.lng(),
                    title: 'New marker'
                });
            }
        }, {
            title: 'Directions to here',
            name: 'center_here',
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