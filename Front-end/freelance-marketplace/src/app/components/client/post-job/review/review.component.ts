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
  ngOnInit(): void {
    this.currentJobProcess = localStorage.getItem('job_process');
    this.currentJobProcess = JSON.parse(this.currentJobProcess);
    this.skillsData = localStorage.getItem('skills_data');
    this.skillsData = JSON.parse(this.skillsData);
    console.log(this.skillsData);
  }

  submit()
  {
    this.apiService.post(`${environment.apiUrl}/jobs` , this.currentJobProcess).subscribe(response=>{
      console.log(response);
    } , error=>console.error);
  }

}
