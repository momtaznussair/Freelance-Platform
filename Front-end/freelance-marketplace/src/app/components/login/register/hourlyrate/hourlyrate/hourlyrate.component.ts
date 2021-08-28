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
  freelancer_id : any;
  freelancer_data  :  any;
  form : FormGroup = new FormGroup({});
  constructor(private formBuilder : FormBuilder , private apiService : ApiService,private router : Router ) { }

  currentRegisterData : any;
  token : any;

  ngOnInit(): void
  {

    // we need to save token to make freelancer can logged
    this.token = localStorage.getItem('user_token');

    this.user_id = localStorage.getItem('user_id');
    console.log(this.user_id);
    this.currentRegisterData = localStorage.getItem('data');
    this.currentRegisterData = JSON.parse(this.currentRegisterData)

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
    this.currentRegisterData.hourly_rate = this.form.controls.hourly_rate.value;
    this.currentRegisterData.user_id = +this.user_id;
    localStorage.setItem('data',JSON.stringify(this.currentRegisterData));
    console.log(this.currentRegisterData);

    //sent request
    this.apiService.post(`${environment.apiUrl}/freelancers` , this.currentRegisterData).subscribe(response=>{

      console.log(response);
      this.freelancer_data = response;
      this.freelancer_id = this.freelancer_data.data.id;
      localStorage.setItem('freelancer_id' , this.freelancer_id);
      this.router.navigateByUrl('/user/signup/education');
    }, error => console.error);
  }




}
