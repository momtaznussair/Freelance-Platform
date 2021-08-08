
  
import { Component, OnInit } from '@angular/core';
// import {RegisterDataService} from "../../../../../services/register-data.service";
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import {FormControl} from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
// import { HttpClient } from '@angular/common/http';
// import { environment } from './../../../../../../environments/environment.prod';
import { SkillsService } from 'src/app/services/skills.service';
import { FormsModule } from '@angular/forms';
import { searchFilter } from 'src/app/pipes/search-filter.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.css']
})
export class ExpertiseComponent implements OnInit {
  // data: string="";

  skills = [{
      "id": 5440,
      "name": "Wanda Lynch",
      "selected":false
    },
    {
      "id": 6228,
      "name": "Katrina Graves",
      "selected":false
    },
    {
      "id": 1654,
      "name": "Louis Daniels",
      "selected":false
    },
    {
      "id": 1631,
      "name": "Gavin Sullivan",
      "selected":false
    },
    {
      "id": 9880,
      "name": "June Martinez",
      "selected":false
    },
    {
      "id": 8634,
      "name": "Owen Davis",
      "selected":false
    },
    {
      "id": 3918,
      "name": "Megan Harrison",
      "selected":false
    },
    {
      "id": 3680,
      "name": "Joel Thompson",
      "selected":false
    },
    {
      "id": 2409,
      "name": "Dora Rose",
      "selected":false
    },
    {
      "id": 4477,
      "name": "Candice Neal",
      "selected":false
    }
  ]

placeholder="Start typing to search for skills";
clicked:number=0;
  form : FormGroup = new FormGroup({});
  // skills=this.skillServices.showSkills();
  selectedSkills=[""];
  // approvalText:string="";
  result=[""];
  added :number=0;
  public searchFilter:any;
  query="";
  constructor(private router : Router , private apiService : ApiService ,private formBuilder : FormBuilder ,private skillServices:SkillsService) { }

  currentRegisterData : any ;
  ngOnInit(): void {
    this.currentRegisterData = localStorage.getItem('data');

    this.form = this.formBuilder.group({
      searchSkill : ['' , [  Validators.maxLength(10) , Validators.minLength(3)]]
    })

    /////////////////////////////
  }

  isLogged : boolean = false;
  require:boolean=false



  submit()
 {
//  this.appService.updateApprovalMessage(this.approvalText);
for(let s of this.skills){
  if(s.selected==true){
    this.require=false;
    this.router.navigateByUrl('/user/signup/education');
  }else{
   this.require=true
  }
}

// if(this.form.valid)
// {
//  //  alert('success');
//  //  this.apiService.post(`${environment.apiUrl}/skills` , this.form.value).subscribe(response=>{
//  //    console.log(response);
//     this.router.navigateByUrl('/user/signup/education');
//  //  })
// }
 } 
 status: boolean = false;

 addSkill(i:any,b:HTMLElement){
 i.selected = ! i.selected; 
   this.isLogged = true;
  
   this.skillServices.addSkill(b.innerText); 
 this.require=false
   console.log(i)
 }


 addSkillFromDropDown(a:HTMLElement,inpt:HTMLElement){

  this.skills.push({
    "id":5444,
    "name": a.innerText,
  "selected":true});
  this.require=false;
  this.query=inpt.innerText;
  console.log(a.innerText);
  // this.skillServices.addSkill(a.innerText);

 }
 search(){
  // this.result = this.skills.filter(s => s.includes(this.approvalText));
  console.log(this.result);

 }
}
