<?php namespace RoutePlanner\Http\Controllers;

use Laracasts\Commander\CommanderTrait;
use RoutePlanner\Http\Requests;
use RoutePlanner\Http\Controllers\Controller;
use RoutePlanner\TransportationRoutes\GenerateRouteCommand;
use RoutePlanner\Http\Requests\GenerateRouteRequest;

class TransportRoutesController extends Controller {

    use CommanderTrait;

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		//
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}

    /**
     * Store a newly created resource in storage.
     *
     * @param GenerateRouteRequest $request
     * @return Response
     */
	public function store(GenerateRouteRequest $request)
	{
        $this->execute(GenerateRouteCommand::class);
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}

}
