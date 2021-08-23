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
  constructor( private comp:CompanyService,private router:Router,private _formBuilder:FormBuilder ) { }
  company:any;
  ngOnInit(): void {
    this.form=this._formBuilder.group({
      comp_name:['',[Validators.required,Validators.minLength(5)]]
    })
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



    // if(this.validateInput(name)){
    //     // this.Router.navigate(['/setting/client-account']);

    // }else{
    //   let company:Company=new Company();
    //   company.name=name;
    //   this._apiservice.post("",company).subscribe(Response=>{
    //     console.log(Response);
    //   },error=>console.error);
    //   this.router.navigateByUrl('/setting/client-account');
    // }


  }




  }

