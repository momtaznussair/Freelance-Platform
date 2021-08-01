import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-expertlevel',
  templateUrl: './expertlevel.component.html',
  styleUrls: ['./expertlevel.component.css']
})
export class ExpertlevelComponent implements OnInit {


  form : FormGroup = new FormGroup({});
  constructor(private formBuilder : FormBuilder , private userService : UserService) { }

  ngOnInit(): void
  {
    this.form = this.formBuilder.group({
      experienceLevel : ['' ,  [Validators.required]],
    })
  }

  next()
  {
    if(this.form.value){
      alert(JSON.stringify(this.form.getRawValue()));
    }
  }

}
