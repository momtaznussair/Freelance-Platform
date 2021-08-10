import { environment } from 'src/environments/environment.prod';
import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  constructor(private apiService : ApiService) { }

  currentJobProcess : any;
  skillsData : any;
  category_name : any;
  experience_level : any;
  ngOnInit(): void {
    this.currentJobProcess = localStorage.getItem('job_process');
    this.currentJobProcess = JSON.parse(this.currentJobProcess);
    this.skillsData = localStorage.getItem('skills_data');
    this.skillsData = JSON.parse(this.skillsData);
    this.category_name = localStorage.getItem('category_name');
    this.category_name = JSON.parse(this.category_name);
    this.experience_level = localStorage.getItem('experience_level');
    this.experience_level = JSON.parse(this.experience_level);
    console.log(this.skillsData);

  }

  submit()
  {
    this.apiService.post(`${environment.apiUrl}/jobs` , this.currentJobProcess).subscribe(response=>{
      console.log(response);
      localStorage.clear();
    } , error=>console.error);
  }

}
