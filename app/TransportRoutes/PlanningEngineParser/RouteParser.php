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
        $contentRoutes = file(getcwd() . '/../app/TransportRoutes/PlanningEngineParser/feeds/monterrey/stops.txt', FILE_IGNORE_NEW_LINES);
        foreach(range(1, 12) as $stop) {
            $stopDetail = $contentRoutes[$stop];
            $stopDetail = explode(",", $stopDetail);
            $latitude = $stopDetail[2];
            $longitude = $stopDetail[3];
            $routes[] = [$latitude, $longitude];
        }
        return $routes;
    }

}
