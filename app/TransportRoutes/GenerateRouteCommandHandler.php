<?php namespace RoutePlanner\TransportRoutes;

use Laracasts\Commander\CommandHandler;
use RoutePlanner\TransportRoutes\PlanningEngineParser\RouteParser;

class GenerateRouteCommandHandler implements CommandHandler {


    public function __construct(RouteParser $routeParser)
    {
        $this->routeParser = $routeParser;
    }

    /**
     * Handle the command.
     *
     * @param object $command
     * @return void
     */
    public function handle($command)
    {

        /*return response()->json([
            'step1' => [
                'latitude'  => 25.312312323,
                'longitude' => -100.1214399999998
            ],
            'step2' => [
                'latitude'  => 25.312312323,
                'longitude' => -100.121423212439999998
            ],
            'step3' => [
                'latitude'  => 25.312312323,
                'longitude' => -100.4142399999998
            ]
        ]);*/
        return response()->json($this->routeParser->getRoutes());
    }

}