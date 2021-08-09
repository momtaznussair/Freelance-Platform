import { environment } from './../../../../../../environments/environment';
import { ApiService } from './../../../../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hourlyrate',
  templateUrl: './hourlyrate.component.html',
  styleUrls: ['./hourlyrate.component.css']
})
export class HourlyrateComponent implements OnInit {

  user_id : any;
  form : FormGroup = new FormGroup({});
  constructor(private formBuilder : FormBuilder , private apiService : ApiService,private router : Router ) { }

  currentRegisterData : any;
  ngOnInit(): void
  {
    this.user_id = localStorage.getItem('user_id');
    console.log(this.user_id);
    this.currentRegisterData = localStorage.getItem('data');
    this.form = this.formBuilder.group({
      hourly_rate : ['' , [ Validators.required]],
    })
  }


  hourlyRating : number = 10;
  siteService : any;
  latestReceive : any;

  getSiteService(hourly : any):any
  {
    return (this.siteService = hourly * 0.8).toFixed(2) && (this.latestReceive = hourly - this.siteService).toFixed(2)
  }

  submit()
  {
    this.currentRegisterData = JSON.parse(this.currentRegisterData)
    this.currentRegisterData.hourly_rate = this.form.controls.hourly_rate.value;
    this.currentRegisterData.user_id = +this.user_id;
    console.log(this.currentRegisterData);

    //sent request
    this.apiService.post(`${environment.apiUrl}/freelancer` , this.currentRegisterData).subscribe(response=>{
      console.log(response);
      localStorage.removeItem('data');
      this.router.navigateByUrl('freelancer');
    }, error => console.error);
  }




}
