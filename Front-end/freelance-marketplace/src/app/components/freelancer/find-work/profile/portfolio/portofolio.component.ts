import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Portofolio } from 'src/app/models/portofolio';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-portofolio',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.css']
})
export class PortofolioComponent implements OnInit {

  // textPattern = "^[a-zA-Z]{10,500}$"
  form : FormGroup = new FormGroup({});
  portofolioData: any;
  portfolio:Portofolio[]=[];
  freelancer_id : any;
  responseData : any;
  portfolio_id : any;

  constructor(private formBuilder : FormBuilder, private router : Router, private _portofolio:PortfolioService) { }
  ngOnInit(): void {
    this.freelancer_id = localStorage.getItem('freelancer_id')

    this.portofolioData = localStorage.getItem('data');

    this.form = this.formBuilder.group({
      freelancer_id : [this.freelancer_id , [Validators.required]],
      title : ['' , [Validators.required , Validators.minLength(3)]],
      description : ['' , [ Validators.required , Validators.minLength(10)]],
      image :['', [Validators.required]]
    })

  }

  isLogged : boolean = false;

    save(){
      console.log(this.form.value);
      console.log(this.freelancer_id)
        if(this.form.valid)
        {
          this.form.value;
          this._portofolio.post(this.form.value).subscribe(res=>{
            console.log(res);
            this.responseData = res;
          },error=> console.error);

        }
        else
        {
          this.isLogged = true;
        }

  }



}


