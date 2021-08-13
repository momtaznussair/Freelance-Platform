<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class JobResource extends JsonResource
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
            // 'id' => $this->id,
            'description' => $this->description,
            'payment_amount' => $this->payment_amount,
            'job_title' => $this->job_title,
            'attachment' => $this->attachment,
            'created_at' => $this->created_at,
            'from' => $this->from,
            'to' => $this->to,
            'skill' => $this->skills,
            'user' => $this->client->user,
            'duration' => $this->duration->name,
            'experience' => $this->experience->name,
            'payment_style' => $this->payment_style->name,
            'category' => $this->category->name,
            'proposals_number' => count($this->proposals)
        ];
    }
}
