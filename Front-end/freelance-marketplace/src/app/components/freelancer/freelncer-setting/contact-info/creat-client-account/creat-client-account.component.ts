import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-creat-client-account',
  templateUrl: './creat-client-account.component.html',
  styleUrls: ['./creat-client-account.component.css']
})
export class CreatClientAccountComponent implements OnInit {
  form:FormGroup=new FormGroup({});
  user_id:any;
  // fulldate= new Date();
  // year=this.fulldate.getFullYear();
  // month=this.fulldate.getMonth();
  // day=this.fulldate.getDay();
  // registration_date=this.year+'-'+this.month+'-'+this.day;
  constructor( private comp:CompanyService,private router:Router,private _formBuilder:FormBuilder ) { }
  company:any[]=[];
  ngOnInit(): void {
    this.user_id = localStorage.getItem('user_id');
    console.log(this.user_id );
    // console.log(this.registration_date );
    // this.registration_date = localStorage.getItem('registration_date');

    this.form=this._formBuilder.group({
      company_name:['',[Validators.minLength(3),Validators.maxLength(255)]],
      user_id:[this.user_id],
      // registration_date:[this.registration_date]
    });
   
    // this.company.push(this.user_id);

    // this.registration_date = localStorage.getItem('registration_date');
    // this.company.push(this.registration_date);


  }
  islogged:boolean=false;
  addcompany(){
    if (this.form.valid){
      this.company=this.form.value;

   

      console.log(this.company);
      this.comp.post(`clients`,this.company).subscribe(res=>{
        console.log(res);
      },error=>console.error)
    }else{
      this.islogged=true;
    }



  }




  }

