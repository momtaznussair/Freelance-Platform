import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
// import {RegisterDataService} from "../../../../../services/register-data.service";
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-visibility',
  templateUrl: './visibility.component.html',
  styleUrls: ['./visibility.component.css']
})
export class VisibilityComponent implements OnInit {


  form : FormGroup = new FormGroup({});
  constructor(private formBuilder : FormBuilder ,private router : Router, private userService : UserService) { }

  post_job : any;
  ngOnInit(): void {
    this.post_job = localStorage.getItem('postjob');
    console.log(this.post_job);
    this.form = this.formBuilder.group({
      Visibility : ['' ,  [Validators.required]],
    })
  }
  isLogged : boolean = false;
  next()
  {
    if(this.form.valid)
    {

      this.router.navigateByUrl("/client/post-job/budget");
    }
    else
    {
      this.isLogged = true;
    }
  }

}
