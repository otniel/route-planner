<?php namespace RoutePlanner\TransportRoutes;

class GenerateRouteCommand {

    public $start;
    public $end;

    /**
     * @param string $start
     * @param string $end
     */
    public function __construct($start, $end)
    {
        $this->start = $start;
        $this->end = $end;
    }

}