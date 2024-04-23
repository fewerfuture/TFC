<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUsuarioRequest extends FormRequest
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
            'Nombre' => ['required', 'string'],
            'Correo' => ['required', 'string', 'email'],
            'Contraseña' => ['required', 'string', 'min:8'],
            'rol_id' => ['required', 'integer', ''],
            'nivel_id' => ['required', 'integer'],
        ];
    }
}
