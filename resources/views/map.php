<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <link rel="stylesheet" href="css/app.css"/>
        <script src="http://maps.google.com/maps/api/js?sensor=true&key=AIzaSyBO3DTQrl7luM4J2ZcDeQ0kKq9iZ-3oKQI"></script>
        <script src="js/vendor/gmaps.js"></script>
        <script src="js/vendor/angular.js"></script>
    </head>

    <body ng-app="map">
        <div style="position:absolute; width:100%; height:100%;" id="map" ng-controller="MapController as mapCtrl"></div>
        <form class="navbar-form navbar-fixed-top" role="search">
            <div align="center" class="form-group">
                <input type="text" class="form-control" placeholder="Search Address">
            </div>
            <button type="submit" class="btn btn-default">Submit</button>
        </form>
        <script src="js/app.js"></script>
    </body>
</html>
