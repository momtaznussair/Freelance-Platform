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
  isDataGet: boolean =false;

  constructor(private portfolio:PortfolioService, private profile:ProfileService, private apiService: ApiService, private formBuilder :FormBuilder, private router: Router) { }
  portfoliosData:any;
  data :any;
  profileData:any;
  freelancer_id : any;
  user_id : any;
  isLogged : boolean = false;
  resData : any;
  isDataUpdated : any;
  errorUpdate : any;

  ngOnInit(): void {

    this.freelancer_id = localStorage.getItem('freelancer_id');
    this.user_id = localStorage.getItem('user_id');

        this.form = this.formBuilder.group({
      title : ['' , [Validators.required , Validators.minLength(3)]],
      description : ['' , [ Validators.required , Validators.minLength(10)]],
      image :['', [Validators.required]]
    })

    this.form = this.formBuilder.group({
      user_id : [this.user_id , [ Validators.required]],
      institute : ['' , [ Validators.required , Validators.minLength(5) , Validators.maxLength(250) ]],
      area_of_study : ['' , [Validators.required , Validators.minLength(5) , Validators.maxLength(250) ]],
      degree : ['' , [Validators.required , Validators.minLength(4) , Validators.maxLength(250) ]],
      start_date : ['' , [Validators.required ]],
      graduation_date : ['' , [Validators.required]],
    })

    this.languageform = this.formBuilder.group({
      user_id : [this.user_id , [ Validators.required]],
      name : ['' , [ Validators.required , Validators.minLength(5) , Validators.maxLength(250) ]],
    })

    this.titleform = this.formBuilder.group({
      user_id : [this.user_id , [ Validators.required]],
      job_title : ['' , [ Validators.required , Validators.minLength(5) , Validators.maxLength(250) ]],
    })

       this.overviewform = this.formBuilder.group({
      user_id : [this.user_id , [ Validators.required]],
      overview : ['' , [ Validators.required , Validators.minLength(5) , Validators.maxLength(250) ]],
    })




    this.portfolio.get().subscribe(res=>{
      console.log(res);
      this.portfoliosData = res;
      console.log(this.portfoliosData.data);

      this.data = this.portfoliosData.data.splice(0,1);
      this.isDataGet = true;

    });

    this.profile.get().subscribe(response=>{
      console.log(response);
      this.profileData = response.data[0];
      console.log(this.profileData);
      this.isDataGet = true;
    })


  }
  submit(id:number)
  {
      this.portfolio.delete(id).subscribe(res=>{
      console.log(res)

  });
  }
// Educations
saveEducationData(){
  if(this.form.valid)
  {
    this.apiService.post(`${environment.apiUrl}/educations` , this.form.value).subscribe(response=>{
      console.log(response);
      this.router.navigateByUrl("/freelancer/profile");
    },error=>console.error);
  }
  else
  {
    this.isLogged = true;
    alert('please check your data and try again');
  }
}

updateEducationData(id : any){

  console.log(this.form.value);
  if(this.form.valid)
  {
    this.profile.updateEducation( id ,this.form.value).subscribe(response=>{
      console.log(response);
      this.resData = response;
      this.router.navigateByUrl("/freelancer/profile");
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
    this.router.navigateByUrl("/freelancer/profile");
  });
}

// Languages

saveLanguageData(){

  if(this.languageform.valid)
  {
    this.apiService.post(`${environment.apiUrl}/languages` , this.languageform.value).subscribe(response=>{
      console.log(response);
      // this.router.navigateByUrl("/freelancer/profile");
    },error=>console.error);
  }
  else
  {
    this.isLogged = true;
    alert('please check your data and try again');
  }

}

updataLanguageName(id : any){

  if(this.languageform.valid)
  {
    this.profile.updateLanguage( id ,this.languageform.value).subscribe(response=>{
      console.log(response);
      this.resData = response;
      this.router.navigateByUrl("/freelancer/profile");
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
    this.router.navigateByUrl("/freelancer/profile");
  });
}

// Title 

updateTitle(){

}


//overview

updateOverview(){

}

}


