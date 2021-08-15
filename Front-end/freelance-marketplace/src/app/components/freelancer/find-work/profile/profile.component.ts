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
  freelancer_id : any;

  ngOnInit(): void {

    this.freelancer_id = localStorage.getItem('freelancer_id');

    this.profileData  = localStorage.getItem('data');



    this.portfolio.get().subscribe(res=>{
      console.log(res);
      this.portfoliosData = res;
      console.log(this.portfoliosData.data);
      this.data = this.portfoliosData.data.splice(0,3);
      this.isDataGet = true;
    })

    this.profile.get().subscribe(response=>{
      console.log(response);
      this.profileData = response.data;
      console.log(this.profileData);
      this.isDataGet = true;
    })


  }


}

