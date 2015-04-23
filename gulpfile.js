var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.less('app.less')
        .copy('vendor/bower_components/angular/angular.min.js', 'public/js/vendor/angular.js')
        .copy('vendor/bower_components/gmaps/gmaps.js', 'public/js/vendor/gmaps.js');
});
