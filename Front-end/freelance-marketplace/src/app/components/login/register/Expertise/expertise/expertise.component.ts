import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import {FormControl} from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
// import { HttpClient } from '@angular/common/http';
import { SkillsService } from 'src/app/services/skills.service';
import { FormsModule } from '@angular/forms';
import { searchFilter } from 'src/app/pipes/search-filter.pipe';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.css']
})
export class ExpertiseComponent implements OnInit {

  placeholder="Start typing to search for skills";
  clicked:number=0;
  form : FormGroup = new FormGroup({});

  result=[""];
  added :number=0;
  public
  :any;
  query="";
  constructor(private router : Router , private apiService : ApiService ,private formBuilder : FormBuilder ,private skillServices:SkillsService) { }

  currentRegisterData : any ;
  getData : any;
  skills : any;
  category_id :number =  0;
  user_id :number =  0;
  ngOnInit(): void {

    this.apiService.get(`${environment.apiUrl}/skills`).subscribe(response=>{
      // console.log(response);
      this.getData = response;
      this.skills = this.getData.data;
      // this.category_id = this.skills.category_id;
    })

    this.form = this.formBuilder.group({
      searchSkill : ['' , [  Validators.maxLength(10) , Validators.minLength(3)]],
      user_id : ['', [Validators.required]],
    })

    /////////////////////////////
  }

  isLogged : boolean = false;
  require:boolean=false

  // =============== start test request ===============
  name : Object[] = [];

  submit(){
    if(this.require == false)
    {
      for (let i = 0; i < this.skills.length; i++) {
        if(this.skills[i].selected == true){
          this.name.push({name : this.skills[i].name , category_id : this.skills[i].category_id});
        }
      }

      if(this.name.length != 0)
      {
        console.log({user_id : 30 , skills : this.name})
        this.apiService.post(`${environment.apiUrl}/skills`, {user_id : 30 , skills : this.name}).subscribe(response=>{
          console.log(response);
          this.router.navigateByUrl('/user/signup/education');
        },error=>console.error);
      }

    }
    else if(this.name.length == 0)
    {
      this.require = true;
    }

  }

// =============== end test request ===============



 status: boolean = false;

 addSkill(i:any,b:HTMLElement){
 i.selected = ! i.selected;
    this.isLogged = true;

    this.skillServices.addSkill(b.innerText);
    this.require=false
    console.log(i)
 }
/*=============================add skills from drop down  array version ========================*/
duplicated:boolean=false
 addSkillFromDropDown(a:HTMLElement,inpt:HTMLElement){

  for(let i=0;i<this.skills.length;i++)
  {
    if((this.skills[i].selected)&&(a.innerText===this.skills[i].name))
    {
      this.duplicated=true;
      // break;
    }
  }
if(!this.duplicated){
  this.skills.push({
    "id":this.skills.id,
    "name": a.innerText,
    "selected":true
  });
  this.require=false;
      this.query=inpt.innerText;
}



 }}
//  search(){
//   console.log(this.result);
//  }

