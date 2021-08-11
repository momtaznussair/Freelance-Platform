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

  // textPattern = "^[a-zA-Z]{10,500}$"
  form : FormGroup = new FormGroup({});
  portofolioData: any;
  portfolio:Portofolio[]=[];
  constructor(private formBuilder : FormBuilder, private router : Router, private _portofolio:PortofolioService) { }
  ngOnInit(): void {

    this.portofolioData = localStorage.getItem('data');

    this.form = this.formBuilder.group({
      title : ['' , [Validators.required]],
      overview : ['' , [ Validators.required]],
      image_link :['', [Validators.required]]
    })

  }

  isLogged : boolean = false;

    save(){
    if(this.form.valid)
    {
      this.portfolio= this.form.value;
      console.log(this.portfolio);

      this._portofolio.post(this.portfolio).subscribe(res=>{
        console.log(res);
      },error=>{console.error}
      );

      console.log(this.form.controls.img_link.value)
      this._portofolio.postImage({image_path:this.form.controls.image_link.value, portfolio_id:2}).subscribe(res=>{
        console.log(res);
        this.router.navigateByUrl("/freelancer/profile");
      },error=>{console.error}
      );

    }
    else
    {
      this.isLogged = true;
    }

  }



}


