import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  form : FormGroup = new FormGroup({});
  constructor(private formBuilder : FormBuilder  , private router : Router) { }

  currentRegisterData : any;
  ngOnInit(): void {

    this.currentRegisterData = localStorage.getItem('data');

    this.form = this.formBuilder.group({
      country : ['' , [ Validators.required ]],
      street_address: ['' , [Validators.required ]],
      city: ['' , [Validators.required ]],
      zip_code: ['' , [Validators.required ]]

    })
  }
    isLogged : boolean = false;
    next() {
      if(this.form.valid)
      {
        console.log(this.form.value);

        this.router.navigateByUrl('/user/signup/category');
      }
      else
      {
      this.isLogged = true;
      }

    }
  }

