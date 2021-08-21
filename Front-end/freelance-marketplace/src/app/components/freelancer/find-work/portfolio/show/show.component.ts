import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'portfolio-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  constructor(private _portfolio:PortfolioService,private aRoute:ActivatedRoute) { }
  portfolio:any;
  portfolioData:any;
  isLoaded:boolean= false;
  ngOnInit(): void {
    this._portfolio.show(this.aRoute.snapshot.params.id).subscribe(res=>{
      console.log(res)
      this.isLoaded= true;
      this.portfolio = res;
      this.portfolioData = this.portfolio.data
    })
  }

}
