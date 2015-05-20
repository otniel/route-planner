<?php

namespace RoutePlanner\TransportRoutes\PlanningEngineParser;


class RouteParser {
    private $feedFolder;

    public function __construct() {
        $this->feedFolder = getcwd() . 'app/TransportRoutes/PlanningEngineParser/feeds/monterrey';
    }

    public function readFeedTransportFile($feedFile)
    {
        $feedFile = $this->feedFolder . $feedFile;
        $contents = file_get_contents($feedFile);
        return $contents;
    }

    public function getRoutes() {
        $routes = array();
        $route = array();
        $contentRoutes = file(getcwd() . '/../app/TransportRoutes/PlanningEngineParser/feeds/monterrey/stops.txt', FILE_IGNORE_NEW_LINES);
        foreach(range(1, 12) as $stop) {
            $stopDetail = $contentRoutes[$stop];
            $stopDetail = explode(",", $stopDetail);
            $latitude = $stopDetail[2];
            $longitude = $stopDetail[3];
            $route[] = [$latitude, $longitude];
        }
        $routes[] = $route;
        $route = array();
        foreach(range(13, 43) as $stop) {
            $stopDetail = $contentRoutes[$stop];
            $stopDetail = explode(",", $stopDetail);
            $latitude = $stopDetail[2];
            $longitude = $stopDetail[3];
            $route[] = [$latitude, $longitude];
        }
        $routes[] = $route;
        $route = array();
        foreach(range(44, 66) as $stop) {
            $stopDetail = $contentRoutes[$stop];
            $stopDetail = explode(",", $stopDetail);
            $latitude = $stopDetail[2];
            $longitude = $stopDetail[3];
            $route[] = [$latitude, $longitude];
        }
        $routes[] = $route;
        $route = array();
        foreach(range(67, 83) as $stop) {
            $stopDetail = $contentRoutes[$stop];
            $stopDetail = explode(",", $stopDetail);
            $latitude = $stopDetail[2];
            $longitude = $stopDetail[3];
            $route[] = [$latitude, $longitude];
        }
        $routes[] = $route;
        $route = array();
        foreach(range(84, 98) as $stop) {
            $stopDetail = $contentRoutes[$stop];
            $stopDetail = explode(",", $stopDetail);
            $latitude = $stopDetail[2];
            $longitude = $stopDetail[3];
            $route[] = [$latitude, $longitude];
        }
        $routes[] = $route;
        $route = array();
        foreach(range(99, 101) as $stop) {
            $stopDetail = $contentRoutes[$stop];
            $stopDetail = explode(",", $stopDetail);
            $latitude = $stopDetail[2];
            $longitude = $stopDetail[3];
            $route[] = [$latitude, $longitude];
        }
        $routes[] = $route;
        $route = array();
        foreach(range(102, 120) as $stop) {
            $stopDetail = $contentRoutes[$stop];
            $stopDetail = explode(",", $stopDetail);
            $latitude = $stopDetail[2];
            $longitude = $stopDetail[3];
            $route[] = [$latitude, $longitude];
        }
        $routes[] = $route;
        
        foreach(range(121, 157) as $stop) {
            $stopDetail = $contentRoutes[$stop];
            $stopDetail = explode(",", $stopDetail);
            $latitude = $stopDetail[2];
            $longitude = $stopDetail[3];
            $route[] = [$latitude, $longitude];
        }
        $routes[] = $route;

        return $routes;
    }

}
