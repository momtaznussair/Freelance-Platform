import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  isDataGet: boolean =false;

  constructor(private portfolio:PortfolioService , private api : ApiService) { }
  portfoliosData:any;

  ngOnInit(): void {
    this.portfolio.get().subscribe(res=>{
      console.log(res);
      this.portfoliosData = res;
      console.log(this.portfoliosData.data);
      this.isDataGet = true;
    })
  }


}

