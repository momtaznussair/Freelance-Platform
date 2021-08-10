import { Component, OnInit } from '@angular/core';
import { PortofolioService } from 'src/app/services/portofolio.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private portofolio:PortofolioService) { }
  portofolioData:any;
  ngOnInit(): void {
    this.portofolio.get().subscribe(res=>{
      console.log(res);

      this.portofolioData = res;
      console.log(this.portofolioData.data);
    })

  }

}
