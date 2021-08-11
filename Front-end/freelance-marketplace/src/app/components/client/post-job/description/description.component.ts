import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})

export class DescriptionComponent implements OnInit {


  form : FormGroup = new FormGroup({});
  constructor(private formBuilder : FormBuilder  , private router : Router) { }

  currentJobProcess : any;

  ngOnInit(): void {

    this.currentJobProcess = localStorage.getItem('job_process');
    this.currentJobProcess = JSON.parse(this.currentJobProcess);

    this.form = this.formBuilder.group({
      description : ['' , [ Validators.required , Validators.minLength(10) ]],
      attachment : ['']
    })
  }
  isLogged : boolean = false;

next(){
  if(this.form.valid)
  {

    this.currentJobProcess.description = this.form.controls.description.value;
    localStorage.setItem('job_process' ,JSON.stringify(this.currentJobProcess))

    this.router.navigateByUrl("/client/post-job/expertise");
  }
  else
  {
    this.isLogged = true;
  }
}
}
