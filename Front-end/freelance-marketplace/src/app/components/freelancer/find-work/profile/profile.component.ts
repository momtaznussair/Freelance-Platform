import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  isDataGet: boolean =false;

  constructor(private portfolio:PortfolioService, private profile:ProfileService) { }
  portfoliosData:any;
  data :any;
  profileData:any;
  getUserName:any;
  educationId:any;

  ngOnInit(): void {
    this.portfolio.get().subscribe(res=>{
      console.log(res);
      this.portfoliosData = res;
      console.log(this.portfoliosData.data);
      this.data = this.portfoliosData.data.splice(0,3);
      this.isDataGet = true;
    })

    this.profile.get().subscribe(response=>{
      console.log(response);
      this.profileData = response.data[0];
      console.log(this.profileData);

    })

    // this.getUserName=localStorage.getItem('first_name');
    // console.log(this.getUserName);

    this.profile.getEducation(this.educationId).subscribe(res=>{
      console.log(res);

    })

  }


}

