import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Portofolio } from 'src/app/models/portofolio';
import { ProfileService } from 'src/app/services/profile.service';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  form : FormGroup = new FormGroup({});
  languageform : FormGroup = new FormGroup({});
  titleform : FormGroup = new FormGroup({});
  overviewform : FormGroup = new FormGroup({});
  educationform : FormGroup = new FormGroup({});
  hourlyrateform : FormGroup = new FormGroup({});
  portForm : FormGroup = new FormGroup({});
  isDataGet: boolean =false;
  isUserGet: boolean = false;
  isSkillsGet : boolean =false;

  constructor(private portfolio:PortfolioService, private profile:ProfileService, private apiService: ApiService, private formBuilder :FormBuilder, private router: Router) { }
  portfoliosData:any;
  data :any;
  profileData:any;
  freelancer_id : any;
  user_id : any;
  portfilio_id:any;
  count = 0;
  currentIndex:number=0;
  isLogged : boolean = false;
  resData : any;
  isDataUpdated : any;
  errorUpdate : any;
  languages : any;
  languageLevels : any;
  isLanguageGet : boolean = false;
  isLanguageLevelGet : boolean = false;
  isHoulryGet : boolean = false;
  id:number =1;
  _portfolio:any;
  portfolioData:any;
  isLoaded:boolean= false;

  ngOnInit(): void {

    this.freelancer_id = localStorage.getItem('freelancer_id');
    this.user_id = localStorage.getItem('user_id');
    this.portForm = this.formBuilder.group({
      title : [,[Validators.required , Validators.minLength(3)]],
      description : [, [ Validators.required , Validators.minLength(10)]],
      image :[],
      freelancer_id:[+this.freelancer_id]
    })

    this.languageform = this.formBuilder.group({
      user_id : [this.user_id , [Validators.required]],
      language_id : ['' , [Validators.required]],
      language_level_id : ['' , [Validators.required]],
    })

 // Validation
 // Get Freelancer Data 
    this.profile.get().subscribe(response=>{
      console.log(response);
      this.profileData = response.data[0];
      this.titleform = this.formBuilder.group({
        job_title : [ this.profileData.job_title, [ Validators.required , Validators.minLength(5) , Validators.maxLength(250) ]],
      })
      this.overviewform = this.formBuilder.group({
        overview : [this.profileData.overview , [ Validators.required , Validators.minLength(5) , Validators.maxLength(250) ]],
      })
      
    this.hourlyrateform = this.formBuilder.group({
      hourly_rate : [this.profileData.hourly_rate , [ Validators.required ]]
    })
    
    for (let education of this.profileData.education){
      this.educationform = this.formBuilder.group({
        user_id : [this.user_id , [ Validators.required]],
        institute : [education.institute , [ Validators.required , Validators.minLength(5) , Validators.maxLength(250) ]],
        area_of_study : [education.area_of_study , [Validators.required , Validators.minLength(5) , Validators.maxLength(250) ]],
        degree : [education.degree , [Validators.required , Validators.minLength(4) , Validators.maxLength(250) ]],
        start_date : [education.start_date , [Validators.required ]],
        graduation_date : [education.graduation_date , [Validators.required]],
      })
    }
      console.log(this.profileData.user.name);
    
      this.isUserGet = true;
      this.isHoulryGet = true;
    })

    //get languages
this.apiService.get(`${environment.apiUrl}/languages`).subscribe(response=>{
  console.log(response);
  this.languages = response;
  this.isLanguageGet = true;
})

//get language levels
this.apiService.get(`${environment.apiUrl}/languageLevel`).subscribe(response=>{
  console.log(response);
  this.languageLevels = response;
  this.isLanguageLevelGet = true;
})


  }

  submit(id: number) {
    this.profile.delete(id).subscribe(res => {
      console.log(res)
      location.reload()
    });
  }


  new_title: string = '';
  new_description: string = '';

  save(id:number) {
    console.log(this.portForm.value)
    if(this.portForm.valid) {      
      this.profile.updateportfilo(id, this.portForm.value).subscribe(response => {
        alert('done');
        console.log(response);
        location.reload();
      },
       error => {
        alert('please check your data and try again');
      });
  
  }
  }

 

// Educations
saveEducationData(){
  console.log(this.educationform.value);
  if(this.educationform.valid)
  {
    this.apiService.post(`${environment.apiUrl}/educations` , this.educationform.value).subscribe(response=>{
      console.log(response);
      location.reload();
    },error=>console.error);
  }else
    {
      this.isLogged = true;
      alert('please check your data and try again');
    }
  }

updateEducationData(id : any){

  if(this.educationform.valid)
  {
    this.profile.updateEducation( id ,this.educationform.value).subscribe(response=>{
      console.log(response);
      this.resData = response;
      location.reload();
      if(this.resData.data != null)
      {
        this.isDataUpdated = true;
      }else
      {
        this.errorUpdate = true;
      }
    } , error => {
      this.errorUpdate = true;
    });
  }
  else
  {
    alert('please check your data and try again');
    this.isLogged = true;
    console.log(this.isLogged);
  }

}


deleteEducation(id: number) {
  this.profile.deleteEdu(id).subscribe(res => {
    console.log(res)
    location.reload();
  });
}

// Languages

saveLanguageData(){
console.log(this.languageform.value)
  if(this.languageform.valid)
  {
    this.apiService.post(`${environment.apiUrl}/userLanguages` , this.languageform.value).subscribe(response=>{
      console.log(response);
      location.reload();
    },error=>console.error);
  }


  }

updataLanguageName(id : any){

  if(this.languageform.valid)
  {
    this.profile.updateLanguage( id ,this.languageform.value).subscribe(response=>{
      console.log(response);
      this.resData = response;
      location.reload();
      if(this.resData.data != null)
      {
        this.isDataUpdated = true;
      }else
      {
        this.errorUpdate = true;
      }
    } , error => {
      this.errorUpdate = true;
    });
  }
  else
  {
    alert('please check your data and try again');
    this.isLogged = true;
    console.log(this.isLogged);
  }


}

deletelanguage(id : number){

  this.profile.deleteLang(id).subscribe(res => {
    console.log(res)
    location.reload();
  });
}

// Title 

updateTitle(){
  if(this.titleform.valid)
  {
    this.profile.updateJobTitle(this.freelancer_id,this.titleform.value).subscribe(response=>{
      console.log(response);
      this.resData = response;
      location.reload();
      if(this.resData.data != null)
      {
        this.isDataUpdated = true;
      }else
      {
        this.errorUpdate = true;
      }
    } , error => {
      this.errorUpdate = true;
    });
  }
  else
  {
    alert('please check your data and try again');
    this.isLogged = true;
    console.log(this.isLogged);
  }
      

}


//overview

updateOverview(){
  if(this.overviewform.valid)
  {
    this.profile.updateOver(this.freelancer_id,this.overviewform.value).subscribe(response=>{
      console.log(response);
      this.resData = response;
      location.reload();
      if(this.resData.data != null)
      {
        this.isDataUpdated = true;
      }else
      {
        this.errorUpdate = true;
      }
    } , error => {
      this.errorUpdate = true;
    });
  }
  else
  {
    alert('please check your data and try again');
    this.isLogged = true;
    console.log(this.isLogged);
  }
      

}

updateHourlyRate(){

  if(this.hourlyrateform.valid)
  {
    this.profile.updateHourly(this.freelancer_id,this.hourlyrateform.value).subscribe(response=>{
      console.log(response);
      this.resData = response;
      location.reload();
      if(this.resData.data != null)
      {
        this.isDataUpdated = true;
      }else
      {
        this.errorUpdate = true;
      }
    } , error => {
      this.errorUpdate = true;
    });
  }
  else
  {
    alert('please check your data and try again');
    this.isLogged = true;
    console.log(this.isLogged);
  }
      
}

  showPortfolio(id:number){
    this.portfolio.show(id).subscribe(res=>{
      console.log(res)
      this.isLoaded= true;
      this._portfolio = res;
      this.portfolioData = this._portfolio.data
    })
  }

  changeISLoaded(){
    this.isLoaded= false;
  }


  }




