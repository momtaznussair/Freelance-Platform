import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { SkillsService } from 'src/app/services/skills.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Skill } from 'src/app/models/skill';
import { stringify } from '@angular/compiler/src/util';


@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.css']
})
export class ExpertiseComponent implements OnInit {

  placeholder="Start typing to search for skills";
  form : FormGroup = new FormGroup({});
  query="";
  constructor(private router : Router , private apiService : ApiService ,private formBuilder : FormBuilder ,private skillServices:SkillsService) { }

  currentRegisterData : any ;
  getData : any;
  AllSkills:any;
  skills : any;
  searchSkills:any;
  category_id :number =  0;
  user_id :number =  0;
  
  ngOnInit(): void {

    this.currentRegisterData = localStorage.getItem('data');
    this.currentRegisterData = JSON.parse(this.currentRegisterData);
    // console.log(this.currentRegisterData);
    this.apiService.get(`${environment.apiUrl}/skills`).subscribe(response=>{
      this.getData = response;
    
      this.AllSkills = this.getData.data;
      for(let skill of this.AllSkills){
        skill.selected=false
      }
      this.skills=this.AllSkills.slice(0,5); console.log(this.skills)
      this.searchSkills=this.AllSkills.slice(6);
    })

    this.form = this.formBuilder.group({
      searchSkill : ['' , [  Validators.maxLength(10) , Validators.minLength(3)]],
      user_id : ['', [Validators.required]],
    })
  }
 is_skills_notselected:boolean=false

submit()
{

   let skillsToSend=this.skills.filter((skill:any) => {return skill.selected})

   if(skillsToSend.length==0)
    { 
      this.is_skills_notselected=true
    }
    else
    {
    this.is_skills_notselected=false;

    // get selected skills ids
    let skillsToSendIds:number[] = [];
    skillsToSend.forEach((skill:any) => {
        skillsToSendIds.push(skill.id);
    });
    
    this.currentRegisterData.skills=skillsToSendIds;
    localStorage.setItem('data',JSON.stringify(this.currentRegisterData));
    this.router.navigateByUrl('/user/signup/hourly-rate');
    }

}

 addSkill(skill:any){
let index=this.skills.indexOf(skill);
this.skills[index].selected=! this.skills[index].selected;

   
 }
/*============================= add skills from drop down  ========================*/
  addSkillFromDropDown(skill:any,inpt:HTMLElement)
  {
      let index=this.searchSkills.indexOf(skill);
      skill.selected=true;
      this.skills.push(skill);
      this.searchSkills.splice(index, 1);
      let idx=this.searchSkills.indexOf(skill);
      this.searchSkills[idx].selected=! this.searchSkills[idx].selected;
      this.query=inpt.innerText;
    }

  }
