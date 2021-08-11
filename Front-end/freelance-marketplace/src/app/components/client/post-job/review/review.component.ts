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

    //==================================== Get Data From Local Storage ====================================
    this.currentJobProcess = localStorage.getItem('job_process');
    this.currentJobProcess = JSON.parse(this.currentJobProcess);
    console.log(this.currentJobProcess);
    this.skillsData = localStorage.getItem('skills_data');
    this.skillsData = JSON.parse(this.skillsData);
    this.category_name = localStorage.getItem('category_name');
    this.experience_level = localStorage.getItem('experience_level');

  }// End Of ngOnInit


  submit()
  {
    this.apiService.post(`${environment.apiUrl}/jobs` , this.currentJobProcess).subscribe(response=>{
      // console.log(response);
      console.log('success process');
      // localStorage.clear();
    } , error => {
      console.log('field process');
    });
  }

}// End Of Class
