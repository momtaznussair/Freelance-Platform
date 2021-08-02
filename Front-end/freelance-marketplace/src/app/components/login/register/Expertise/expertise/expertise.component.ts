import { Component, OnInit } from '@angular/core';
import {RegisterDataService} from "../../../../../services/register-data.service";
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import {FormControl} from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../../../environments/environment.prod';
@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.css']
})
export class ExpertiseComponent implements OnInit {
  form : FormGroup = new FormGroup({});
  skills=["css","html","javascript","react"];
  // skills:any;
  selectedSkills=[""];
  approvalText:string="";
  result=[""];
  added :number=0;
  constructor(private httpClient : HttpClient ,private formBuilder : FormBuilder ,private appService:RegisterDataService ,private apiService:ApiService) { }

  currentRegisterData : any ;
  ngOnInit(): void {
    this.currentRegisterData = localStorage.getItem('data');

    this.form = this.formBuilder.group({
      searchSkill : ['' , [ Validators.required, Validators.maxLength(500) , Validators.minLength(10)]]
    })

    /////////////////////////////

    this.apiService.get(`${environment.apiUrl}/experience`).subscribe(response =>{
      // this.skills = response;

      console.log(response);
      console.log(this.skills);
    },error=>console.error);
  }

  submit()
 {
//  this.appService.updateApprovalMessage(this.approvalText);
 } 
 
 addSkill(b:HTMLElement){
   
  console.log(b.prefix);
  this.selectedSkills.push(b.innerText);
   console.log(this.selectedSkills)
 }
 search(){


  this.result = this.skills.filter(s => s.includes(this.approvalText));

  console.log(this.result);

  //  this.skills.filter
 }
}
