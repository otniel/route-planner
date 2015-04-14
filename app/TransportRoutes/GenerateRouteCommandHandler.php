<?php namespace RoutePlanner\TransportationRoutes;

use Laracasts\Commander\CommandHandler;

class GenerateRouteCommandHandler implements CommandHandler {

    /**
     * Handle the command.
     *
     * @param object $command
     * @return void
     */
    public function handle($command)
    {
        dd($command);
    }

}