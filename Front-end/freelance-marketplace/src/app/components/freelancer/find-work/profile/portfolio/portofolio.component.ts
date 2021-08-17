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
  images = [] as any ;



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

  uploadImage(event : any) {

    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0].name;
      this.form.patchValue({
        image: file,
      });
      this.form.get('image')?.updateValueAndValidity();
      console.log(this.form.get('image')?.value);
    }
  

    // if (event.target.files && event.target.files[0]) {
    //     const imagesAmount = event.target.files.length;
    //     for (let i = 0; i < imagesAmount; i++) {
    //             var reader = new FileReader();
   
    //             reader.onload = (event:any) => {
    //               console.log(event.target.result);
    //                this.images.push(event.target.result); 
   
    //                this.form.patchValue({
    //                   fileSource: this.images
    //                });
    //             }
  
    //             reader.readAsDataURL(event.target.files[i]);
    //     }
    // }

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
            const formData : any = new FormData();
            formData.append('image', this.form.get('image')?.value);
          },error=> {console.error});
        }
        else
        {
          this.isLogged = true;
        }

  }



}


