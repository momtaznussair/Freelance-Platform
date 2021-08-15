import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Portofolio } from 'src/app/models/portofolio';
import { ProfileService } from 'src/app/services/profile.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  form : FormGroup = new FormGroup({});
  isDataGet: boolean =false;

  constructor(private portfolio:PortfolioService, private profile:ProfileService, private formBuilder :FormBuilder) { }
  portfoliosData:any;
  data :any;
  profileData:any;
  freelancer_id : any;

  ngOnInit(): void {

    this.freelancer_id = localStorage.getItem('freelancer_id');

    this.profileData  = localStorage.getItem('data');

        this.form = this.formBuilder.group({
      title : ['' , [Validators.required , Validators.minLength(3)]],
      description : ['' , [ Validators.required , Validators.minLength(10)]],
      image :['', [Validators.required]]
    })



    this.portfolio.get().subscribe(res=>{
      console.log(res);
      this.portfoliosData = res;
      console.log(this.portfoliosData.data);

      this.data = this.portfoliosData.data.splice(0,3);
      this.isDataGet = true;

    });

    this.profile.get().subscribe(response=>{
      console.log(response);
      this.profileData = response.data;
      console.log(this.profileData);
      this.isDataGet = true;
    })


  }
  isLogged : boolean = false;
  submit(id:number)
  {

 
      this.portfolio.delete(id).subscribe(res=>{
      // this.items.splics(id,1);
      console.log(res)

  });
  }
save(){

}
}


