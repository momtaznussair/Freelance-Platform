import { Component, OnInit } from '@angular/core';
import { PortofolioService } from 'src/app/services/portofolio.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  isDataGet: boolean =false;
  constructor(private portofolio:PortofolioService) { }
  portofolioData:any;
  ngOnInit(): void {
    this.portofolio.get().subscribe(res=>{
      console.log(res);

      this.portofolioData = res;
      console.log(this.portofolioData.data);
      this.isDataGet = true;
      localStorage.setItem('portofolio_id',this.portofolioData.data.id);
      this.portofolioData.data.id
    })

  }

}
