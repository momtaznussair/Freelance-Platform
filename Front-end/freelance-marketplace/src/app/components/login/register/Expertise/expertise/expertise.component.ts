import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import {FormControl} from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../../../environments/environment.prod';
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

  skills = [{
      "id": 5440,
      "name": "Wanda Lynch",
      "selected":true
      
    },
    {
      "id": 6228,
      "name": "Katrina Graves",
      "selected":true
    },
    {
      "id": 1654,
      "name": "Louis Daniels",
      "selected":false
    },
    {
      "id": 1631,
      "name": "Gavin Sullivan",
      "selected":true
    },
    {
      "id": 9880,
      "name": "June Martinez",
      "selected":true
    },
    {
      "id": 8634,
      "name": "Owen Davis",
      "selected":true
    },
    {
      "id": 3918,
      "name": "Megan Harrison",
      "selected":false
    },
    {
      "id": 3680,
      "name": "Joel Thompson",
      "selected":true
    },
    {
      "id": 2409,
      "name": "Dora Rose",
      "selected":true
    },
    {
      "id": 4477,
      "name": "Candice Neal",
      "selected":false
    }
  ]

placeholder="Start typing to search for skills";
obj={}
  form : FormGroup = new FormGroup({});
  // skills=this.skillServices.showSkills();
  selectedSkills=[""];
  result=[""];
  public searchFilter:any;
  query="";
  constructor(private router : Router , private apiService : ApiService ,private formBuilder : FormBuilder ,private skillServices:SkillsService) { }

  currentRegisterData : any ;
  ngOnInit(): void {
    this.currentRegisterData = localStorage.getItem('data');

    this.form = this.formBuilder.group({
      searchSkill : ['' , [ Validators.required, Validators.maxLength(500) , Validators.minLength(10)]]
    })

    /////////////////////////////


  }

  isLogged : boolean = false;
  submit()
 {
//  this.appService.updateApprovalMessage(this.approvalText);
 } 
 status: boolean = false;

 addSkill(i:string,b:HTMLElement){
  this.status = !this.status; 
   this.isLogged = true;
   if(this.form.valid)
   {
     alert('success');
    //  this.apiService.post(`${environment.apiUrl}/skills` , this.form.value).subscribe(response=>{
    //    console.log(response);
       this.router.navigateByUrl('/user/signup/education');
    //  })
   }

   this.skillServices.addSkill(b.innerText);
  
  
   console.log(i )
 }


 addSkillFromDropDown(a:HTMLElement,inpt:HTMLElement){
  
  this.skills.push({
    "id": 3918,
    "name":a.innerText,
    "selected":true
  });
  this.query=inpt.innerText;
  // console.log(this.selectedSkills);
  // this.skillServices.addSkill(a.innerText);
  console.log(a.innerText);

 }
 search(){
  // this.result = this.skills.filter(s => s.includes(this.approvalText));
  console.log(this.result);

 }
}
