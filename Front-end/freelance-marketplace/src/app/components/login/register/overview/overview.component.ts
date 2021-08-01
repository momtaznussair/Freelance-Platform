import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
// import {RegisterDataService} from "../../../../../services/register-data.service";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  form : FormGroup = new FormGroup({});
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      overview : ['' , [ Validators.required, Validators.maxLength(500) , Validators.minLength(250)] ],
      jobTitle : ['' , [Validators.required , Validators.minLength(10) , Validators.maxLength(255)]]
    })
  }
  

}
