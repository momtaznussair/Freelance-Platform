import { Component, OnInit } from '@angular/core';
import {RegisterDataService} from "../../../../../services/register-data.service";
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
    },
    {
      "id": 6228,
      "name": "Katrina Graves",
    },
    {
      "id": 1654,
      "name": "Louis Daniels",
    },
    {
      "id": 1631,
      "name": "Gavin Sullivan",
    },
    {
      "id": 9880,
      "name": "June Martinez",
    },
    {
      "id": 8634,
      "name": "Owen Davis",
    },
    {
      "id": 3918,
      "name": "Megan Harrison",
    },
    {
      "id": 3680,
      "name": "Joel Thompson",
    },
    {
      "id": 2409,
      "name": "Dora Rose",
    },
    {
      "id": 4477,
      "name": "Candice Neal",
    }
  ]
  


  form : FormGroup = new FormGroup({});
  // skills=this.skillServices.showSkills();
  selectedSkills=[""];
  // approvalText:string="";
  result=[""];
  added :number=0;
  public searchFilter:any;
  query="";
  constructor(private httpClient : HttpClient ,private formBuilder : FormBuilder ,private appService:RegisterDataService ,private skillServices:SkillsService) { }

  currentRegisterData : any ;
  ngOnInit(): void {
    this.currentRegisterData = localStorage.getItem('data');

    this.form = this.formBuilder.group({
      searchSkill : ['' , [ Validators.required, Validators.maxLength(500) , Validators.minLength(10)]]
    })

    /////////////////////////////


  }

  submit()
 {
//  this.appService.updateApprovalMessage(this.approvalText);
 } 
 status: boolean = false;

 addSkill(e:Event,b:HTMLElement){
  this.status = !this.status; 
  this.selectedSkills.push(b.innerText);
   console.log(e.target);
   console.log(b.eventListeners);

  //  this.skillServices.addSkill(b.innerText);
 }
 addSkillFromDropDown(a:HTMLElement){
  this.selectedSkills.push(a.innerText);
  console.log(this.selectedSkills);
  this.skillServices.addSkill(a.innerText);

 }

}
