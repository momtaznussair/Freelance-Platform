<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PortfolioResource extends JsonResource
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
            'id' => $this->id,
            'freelancer_id' => $this->freelancer_id,
            'title' => $this->title,
            'description' => $this->description,
            'attachment' => $this->attachment,
            'images' => PortfolioImagesResource::collection($this->images)
        ];
    }
}
