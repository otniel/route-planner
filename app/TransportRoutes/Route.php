<?php namespace RoutePlanner\TransportRoutes;

use Illuminate\Database\Eloquent\Model;

class Route extends Model {

	public static function generate($start, $end)
	{
        $instance = new static(compact('start', 'end'));
	}

}
