import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { SkillsService } from 'src/app/services/skills.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Skill } from 'src/app/models/skill';


@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.css']
})
export class ExpertiseComponent implements OnInit {

  placeholder="Start typing to search for skills";
  form : FormGroup = new FormGroup({});


  added :number=0;
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
    this.currentRegisterData = JSON.parse(this.currentRegisterData)
    console.log(this.currentRegisterData);
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
      // searchSkill : ['' , [  Validators.maxLength(10) , Validators.minLength(3)]],
      user_id : ['', [Validators.required]],
    })
  }

  isLogged : boolean = false;
  Added:boolean=false

  // =============== start test request ===============
  dataToSend : [] = [];

// =============== end test request ===============
 status: boolean = false;
submit(){
if(this.dataToSend.length==0){
  this.Added=true
}
}

arr:any;
 addSkill(i:any){
i.selected = ! i.selected;
// console.log(this.dataToSend)
 if(i.selected ){
 this.Added=false
  //  this.dataToSend.push({
    //  id:i.id,
    //  selected:i.selected,
    //  name:i.name,
    //  category:i.category_id,
  //  })
  }else 
   {
    this.dataToSend.slice(0,1)
   }
 
 console.log(this.dataToSend)
    // this.isLogged = true;
    // this.skillServices.addSkill(b.innerText);
   
    // console.log(i)
 }
/*============================= add skills from drop down  ========================*/
  addSkillFromDropDown(a:any,inpt:HTMLElement)
  {
        this.Added=false;
        this.Added=!this.Added;


        // this.skillServices.addSkill(a.innerText);
      this.skills.push({
        id:a.id,
        name:a.name,
        selected:true
      });
      this.dataToSend.push({
        id:a.id,
        selected:true
        // name:a.name,
        // category:a.category_id,
       
      })
console.log(this.dataToSend)
      this.query=inpt.innerText;
    }

  }

//  search(){
//   console.log(this.result);
//  }

// if(this.Added == false)
//     {
//       for (let i = 0; i < this.skills.length; i++) {
//         if(this.skills[i].selected == true){
//           this.name.push({name : this.skills[i].name , category_id : this.skills[i].category_id});
//           this.name.push(this.skills[i].id);
//         }
//       }

    //   if(this.name.length != 0)
    //   {
    //     console.log(this.name);
    //     this.currentRegisterData.skills = this.name;
    //     localStorage.setItem('data' , JSON.stringify(this.currentRegisterData));
    //     // console.log({user_id : 30 , skills : this.name})
    //     // this.apiService.post(`${environment.apiUrl}/skills`, {user_id : 30 , skills : this.name}).subscribe(response=>{
    //     // this.apiService.post(`${environment.apiUrl}/skills`, {skills : this.name}).subscribe(response=>{

    //       // console.log(response);
    //       this.router.navigateByUrl('/user/signup/hourly-rate');
    //     // },error=>console.error);
    //   }

    // }
    // else if(this.name.length == 0)
    // {
    //   this.Added = true;
    // }