import { Component, OnInit } from '@angular/core';
import { FreelancersService } from 'src/app/services/freelancers.service';

@Component({
  selector: 'app-freelancers',
  templateUrl: './freelancers.component.html',
  styleUrls: ['./freelancers.component.css']
})
export class FreelancersComponent implements OnInit {

  constructor(private freelance:FreelancersService) { }
freelancers:any;
  ngOnInit(): void {
    this.freelance.getFreelancers(`freelancers`).subscribe(res=>{
      this.freelancers=res.data;
      console.log(this.freelancers);
    },error=>console.error)
  }

}
