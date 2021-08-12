import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  isDataGet: boolean =false;

  constructor(private portfolio:PortfolioService) { }
  portfoliosData:any;
  ngOnInit(): void {
    this.portfolio.get().subscribe(res=>{
      console.log(res);

      this.portfoliosData = res;
      console.log(this.portfoliosData.data);
      this.isDataGet = true;
      localStorage.setItem('portfolio_id',this.portfoliosData.data.id);
      this.portfoliosData.data.id
    })

  }

}

