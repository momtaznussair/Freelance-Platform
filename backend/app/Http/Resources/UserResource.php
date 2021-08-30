<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'user_id' => $this->id,
            'first_name' => $this->first_name,
            'last_name' => $this->last_name,
            'email' => $this->email,
            'gender' => $this->gender,
            'image_link' =>  asset("uploads/"."$this->img_link"),
            'country' => $this->country,
            'city' => $this->city,
            'street' => $this->street,
            'zip_code' => $this->zip_code,
            'freelancer_id' => $this->freelancer->id ?? Null,
            'client_id' => $this->client->id ?? Null,
        ];

    }
}
