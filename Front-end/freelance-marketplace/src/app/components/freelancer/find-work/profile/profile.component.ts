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
  form: FormGroup = new FormGroup({});
  isDataGet: boolean = false;

  constructor(private portfolio:PortfolioService, private profile:ProfileService, private apiService: ApiService, private formBuilder :FormBuilder, private router : Router) { }
  portfoliosData:any;
  data :any;
  profileData:any;
  freelancer_id : any;
  user_id : any;
  portfilio_id:any;
  count = 0;
   currentIndex:number=0;
  isLogged : boolean = false;



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



    this.portfolio.get().subscribe(res=>{
      console.log(res);
      this.portfoliosData = res;
      console.log(this.portfoliosData.data);

      this.data = this.portfoliosData.data.splice(0, 3);
      this.isDataGet = true;

    });

    this.profile.get().subscribe(response=>{
      console.log(response);
      this.profileData = response.data[0];
      console.log(this.profileData);
      this.isDataGet = true;
    })
  };



  submit(id: number) {
    this.profile.delete(id).subscribe(res => {
      // this.items.splics(id,1);
      console.log(res)
      this.router.navigateByUrl("/freelancer/work/profile");
    });
  }


  new_title: string = '';
  new_description: string = '';

  save(id:number) {

    console.log(this.form.value)

    if (this.form.valid) {
      this.profile.updateportfilo(id, this.form.value).subscribe(response => {
        console.log(response);
      },
       error => {
        alert('please check your data and try again');
      });
    }
    // else {
    //   this.isLogged = true;
    //   alert('please complite failds..');
    //   console.log(this.isLogged);
    // }
  }

saveEducationData(){
  if(this.form.valid)
  {
    this.apiService.post(`${environment.apiUrl}/educations` , this.form.value).subscribe(response=>{
      console.log(response);
    },error=>console.error);
  }
  else
  {
    this.isLogged = true;
    alert('please check your data and try again');
  }
}

updateEducationData(){

}


}


