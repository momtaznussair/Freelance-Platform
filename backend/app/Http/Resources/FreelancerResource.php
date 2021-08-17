<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FreelancerResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return[
            'id' => $this->id,
            'hourly_rate' => $this->hourly_rate,
            'job_title' => $this->job_title,
            'overview' => $this->overview,
            'user' => $this->user,
            'category' => $this->category->name,
            'Experience' => $this->experience->name,
            'skills' => $this->skills,
            'education' => $this->user->educations,
            'languages' => $this->user->languages
        ];
    }
}
