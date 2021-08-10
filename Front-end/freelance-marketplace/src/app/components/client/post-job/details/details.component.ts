import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  form : FormGroup = new FormGroup({});

  constructor(private formBuilder : FormBuilder ,private router : Router) { }

  post_job : any;
  ngOnInit(): void {

    this.form = this.formBuilder.group({
      choose : ['' ,  [Validators.required]],
    })
  }

  isLogged : boolean = false;
  next(){
    if(this.form.valid)
    {
      this.router.navigateByUrl("/client/post-job/expertise");
    }
    else
    {
      this.isLogged = true;
    }
  }
  }
