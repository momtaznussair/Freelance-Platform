import { environment } from 'src/environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  form : FormGroup = new FormGroup({});
  constructor(private formBuilder : FormBuilder  , private router : Router , private apiService : ApiService) { }


  isTokenFound : boolean = false;

  ngOnInit(): void {
    if(localStorage.getItem('token'))
    {
      this.isTokenFound = true;
    }else
    {
      this.isTokenFound = false;
    }


    this.form = this.formBuilder.group({
      password : ['' , [Validators.required , Validators.minLength(8) , Validators.maxLength(15) ]],
      updatedPassword : ['' , [Validators.required , Validators.minLength(8) , Validators.maxLength(15) ]],
      confirmPassword : ['' , [Validators.required]],
    })

  }

  updatedPassword : string = '';
  confirmPassword : string = '';
  isLogged : boolean = false;

  saveData(){

    console.log(this.form.value);
    if(this.form.valid && this.updatedPassword == this.confirmPassword)
    {

      alert ('updated successfully');
      // this.router.navigateByUrl('client/account-security/password-and-security');
        this.apiService.post(`${environment.apiUrl}` , this.form.value).subscribe(response=>{
        alert ('updated successfully');
      }, error =>console.error);

    }
    else
    {
      this.isLogged = true;
    }
  }

}
