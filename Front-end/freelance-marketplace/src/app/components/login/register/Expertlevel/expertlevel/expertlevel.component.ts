import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-expertlevel',
  templateUrl: './expertlevel.component.html',
  styleUrls: ['./expertlevel.component.css']
})
export class ExpertlevelComponent implements OnInit {


  form : FormGroup = new FormGroup({});
  constructor(private formBuilder : FormBuilder ,private router : Router) { }

  currentRegisterData : any;
  ngOnInit(): void
  {
    this.currentRegisterData = localStorage.getItem('data');
    console.log(this.currentRegisterData);
    this.form = this.formBuilder.group({
      experience_id : ['' ,  [Validators.required]],
    })
  }

  isLogged : boolean = false;

  next()
  {
    this.isLogged = true;
    if(this.form.valid){
      this.router.navigateByUrl('/user/signup/skills');
      this.currentRegisterData = JSON.parse(this.currentRegisterData)
      this.currentRegisterData.experience_id = +this.form.controls.experience_id.value;
      localStorage.setItem('data' ,JSON.stringify(this.currentRegisterData));
    }
  }

}
