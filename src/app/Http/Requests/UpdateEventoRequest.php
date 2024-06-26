<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateEventoRequest extends FormRequest
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
            'location' => 'required|string|max:55',
            'climbing_level' => 'required|integer',
        ];

    }
}
