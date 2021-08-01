import { Component, OnInit } from '@angular/core';
import {RegisterDataService} from "../../../../../services/register-data.service";
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.css']
})
export class ExpertiseComponent implements OnInit {
  form : FormGroup = new FormGroup({});
  message:any;
  approvalText:string="";
  skills=["css","html","javascript","react"];
  selectedSkills=[""];
  constructor(private formBuilder : FormBuilder ,private appService:RegisterDataService) { }

  ngOnInit(): void {
    
 this.appService.currentApprovalStageMessage.subscribe(msg => this.message = msg);

    this.form = this.formBuilder.group({
      searchSkill : ['' , [ Validators.required, Validators.maxLength(500) , Validators.minLength(10)]]
    })
  }

  submit()
 {
  console.log(this.approvalText)
  this.appService.updateApprovalMessage(this.approvalText)
  console.log(this.approvalText)
 }
 addSkill(b:HTMLElement){
  this.selectedSkills.push(b.innerText);
   console.log(this.selectedSkills)
 }
}
