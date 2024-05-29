<?php

namespace App\Http\Requests;


use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreEventoRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:55',
            'start_date' => ['required', 'date', 'after:today'],
            'end_date' => ['required','date','after:start_date'],
            'type' => ['required', Rule::in(['Climbing Gym', 'Via Ferrata', 'Rock Climbing'])],
            'finished' => 'required|boolean',
            'location' => 'required|string|max:55',
            // 'coordinate.lat' => 'required|numeric|between:-90,90',
            // 'coordinate.lng' => 'required|numeric|between:-180,180',
            'climbing_level' => 'required|integer',
        ];
    }
}
