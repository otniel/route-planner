<?php namespace RoutePlanner\Http\Requests;

use RoutePlanner\Http\Requests\Request;

class GenerateRouteRequest extends Request {

	/**
	 * Determine if the user is authorized to make this request.
	 *
	 * @return bool
	 */
	public function authorize()
	{
		return true;
	}

	/**
	 * Get the validation rules that apply to the request.
	 *
	 * @return array
	 */
	public function rules()
	{
		return [
			'start' => 'required',
			'end' => 'required'
		];
	}

}
