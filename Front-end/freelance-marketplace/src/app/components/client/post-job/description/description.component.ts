import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
<<<<<<< HEAD
// import { RegisterDataService } from 'src/app/services/register-data.service';
// import {RegisterDataService} from "../../../../../services/register-data.service";
// import { UserService } from 'src/app/services/user.service';
=======
import { UserService } from 'src/app/services/user.service';
import { postjob } from 'src/app/services/post-job.service';


>>>>>>> 34babce925e6da2da2aedd8195889ff72058ae5a
@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})

export class DescriptionComponent implements OnInit {


  form : FormGroup = new FormGroup({});
  constructor(private formBuilder : FormBuilder  , private router : Router ,private jobprocess:postjob) { }

  post_job : any;

  ngOnInit(): void {

    this.post_job = localStorage.getItem('postjob');

    this.form = this.formBuilder.group({
      description : ['' , [ Validators.required , Validators.minLength(50) ]],
    })
  }
  isLogged : boolean = false;

next(){
  if(this.form.valid)
  {

      this.jobprocess.postjobProcess.description=this.form.controls.description;

        this.post_job = JSON.parse(this.post_job)
      this.post_job.description= this.form.controls.description.value;
      localStorage.setItem('postjob' ,JSON.stringify(this.jobprocess.postjobProcess));
    this.router.navigateByUrl("/client/post-job/details");
  }
  else
  {
    this.isLogged = true;
  }
}
}
