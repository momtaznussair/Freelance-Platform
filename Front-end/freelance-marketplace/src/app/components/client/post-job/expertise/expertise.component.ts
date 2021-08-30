import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment.prod';
import { SkillsService } from 'src/app/services/skills.service';


@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.css']
})
export class ExpertiseComponent implements OnInit {

  form : FormGroup = new FormGroup({});
  constructor(private formBuilder : FormBuilder ,private router : Router, private apiService : ApiService ,private skillServices:SkillsService) { }

  currentJobProcess : any;
  getData : any;
  skills : any;
  query="";
  result=[""];
  public search : any;
  placeholder="Start typing to search for skills";



  ngOnInit(): void {

    this.apiService.get(`${environment.apiUrl}/skills`).subscribe(response=>{
      console.log(response);
      this.getData = response;
      this.skills = this.getData.data;
    })

    this.currentJobProcess = localStorage.getItem('job_process');
    this.currentJobProcess = JSON.parse(this.currentJobProcess);

    this.form = this.formBuilder.group({
      experience_id : ['' ,  [Validators.required]],
    })

  }
  isLogged : boolean = false;

  skillsData : Object[] = [];
  skillsId : Object[] = [];
  user_id : any;
  next(){

          if(this.require == false)
          {
            for (let i = 0; i < this.skills.length; i++) {
              if(this.skills[i].selected == true){
                this.skillsId.push(this.skills[i].id);
                this.skillsData.push({id: this.skills[i].id , name:this.skills[i].name});
              }
            }

            if(this.form.valid)
            {
              this.currentJobProcess.experience_id = this.form.controls.experience_id.value;
              this.currentJobProcess.skill = this.skillsId;
              localStorage.setItem('job_process' , JSON.stringify(this.currentJobProcess));
              localStorage.setItem('skills_data' , JSON.stringify(this.skillsData));

              if(this.form.controls.experience_id.value == 1){
                localStorage.setItem('experience_level' , 'Entry level')
              } else if (this.form.controls.experience_id.value == 2){
                localStorage.setItem('experience_level' , 'Intermediate')
              }else{
                localStorage.setItem('experience_level' , 'Expert')
              }

              this.router.navigateByUrl('client/post-job/budget');
            }

          }
          else
          {
            this.require = true;
          }

  }

  status: boolean = false;
  require:boolean=false

  addSkill(i:any,b:HTMLElement){
  i.selected = ! i.selected;
     this.isLogged = true;

     this.skillServices.addSkill(b.innerText);
     this.require=false
     console.log(i)
  }


  addSkillFromDropDown(a:HTMLElement,inpt:HTMLElement){
       this.skills.push({
         "id":this.skills.id,
         "name": a.innerText,
         "selected":true
       });
       this.require=false;
       this.query=inpt.innerText;
       console.log(a.innerText);
  }


}

