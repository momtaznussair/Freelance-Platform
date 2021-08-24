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
  
  constructor( private comp:CompanyService,private router:Router,private _formBuilder:FormBuilder ) { }
  company:any[]=[];
  ngOnInit(): void {
    this.user_id = localStorage.getItem('user_id');
    console.log(this.user_id );

    this.form=this._formBuilder.group({
      company_name:['',[Validators.required,Validators.minLength(5)]],
      user_id:[this.user_id],
    });


  }
  islogged:boolean=false;
  addcompany(){
    if (this.form.valid){
      this.company=this.form.value;

   

      console.log(this.company);
      this.comp.post(`clients`,this.company).subscribe(res=>{
        console.log(res);
      },error=>console.error);
      this.router.navigateByUrl(`freelancer/setting/info`);

    }else{
      this.islogged=true;
    }



  }




  }

