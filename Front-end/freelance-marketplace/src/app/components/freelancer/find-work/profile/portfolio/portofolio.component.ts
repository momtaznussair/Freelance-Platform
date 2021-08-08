import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Portofolio } from 'src/app/models/portofolio';
import { PortofolioService } from 'src/app/services/portofolio.service';

@Component({
  selector: 'app-portofolio',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.css']
})
export class PortofolioComponent implements OnInit {
  
  textPattern = "^[a-zA-Z]{10,500}$"
  form : FormGroup = new FormGroup({});
  portofolioData: any;
  portfolio:Portofolio[]=[];
  constructor(private formBuilder : FormBuilder, private router : Router, private _portofolio:PortofolioService) { }
  ngOnInit(): void {

    this.portofolioData = localStorage.getItem('data');
    
    this.form = this.formBuilder.group({
      portofolioTitle : ['' , [Validators.required , Validators.minLength(10) , Validators.maxLength(255), Validators.pattern(this.textPattern)]],
      overview : ['' , [ Validators.required , Validators.minLength(10), Validators.maxLength(500) , Validators.pattern(this.textPattern)]]
    })

    
    // this._portofolio.post().subscribe(Response=>{
    //   this.portfolio=Response as Portofolio[];
    // },error=>{console.error}
    // );
    
  }

  isLogged : boolean = false;

  save(){
    if(this.form.valid)
    {
      this.portofolioData  = JSON.parse(this.portofolioData )
      this.portofolioData.overview = this.form.controls.overview.value;
      this.portofolioData.jobTitle = this.form.controls.portofolioTitle.value;
      localStorage.setItem('data' ,JSON.stringify(this.portofolioData ));
      this.router.navigateByUrl("/freelancer/profile");
    }
    else
    {
      this.isLogged = true;
    }

  }

}
