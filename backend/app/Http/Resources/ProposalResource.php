<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProposalResource extends JsonResource
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
            "id" => $this->id,
            "payment_amount" => $this->payment_amount,
            "current_state" => $this->current_state,
            "cover_letter" => $this->cover_letter,
            "client_grade" => $this->client_grade,
            "client_comment" => $this->client_comment,
            "freelancer_grade" => $this->freelancer_grade,
            "freelancer_comment" => $this->freelancer_comment,
            "duration_id" => $this->duration_id,
            "freelancer_id" => $this->freelancer_id,
            "job_id" => $this->job_id,
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
            'freelancer' => new FreelancerResource($this->freelancer),
        ];
    }
}