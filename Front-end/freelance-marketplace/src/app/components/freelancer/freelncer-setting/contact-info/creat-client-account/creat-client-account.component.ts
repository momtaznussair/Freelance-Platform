import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creat-client-account',
  templateUrl: './creat-client-account.component.html',
  styleUrls: ['./creat-client-account.component.css']
})
export class CreatClientAccountComponent implements OnInit {

  constructor( private _apiservice:ApiService ) { }
  // company:Company[]=[];
  ngOnInit(): void {
  }
  addcompany(name:string){
    if(this.validateInput(name)){
        // this.Router.navigate(['/setting/client-account']);

    }else{
      let company:Company=new Company();
      company.name=name;
      this._apiservice.post("",company).subscribe(Response=>{
        console.log(Response);
      },error=>console.error);
    }

  }

  validateInput(name : string){
    if(name == null || name.length == 0) return true;

    return false
  }


  }

