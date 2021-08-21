import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Portofolio } from 'src/app/models/portofolio';

@Component({
  selector: 'portfolio-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private _portfolio:PortfolioService,private aRoute:ActivatedRoute , private r:Router,private formBuilder :FormBuilder) { }

  portfolio:any;
  portfolioData:any;
  isLoaded:boolean= false;
  portForm:any;
  freelancer_id:any;

  ngOnInit(): void {
    this.freelancer_id = localStorage.getItem('freelancer_id');
    this._portfolio.show(this.aRoute.snapshot.params.id).subscribe(res=>{
      // console.log(res)
      this.portfolio = res;
      this.portfolioData = this.portfolio.data
      this.isLoaded= true;
      // console.log(this.portfolioData)
    })


    this.portForm = this.formBuilder.group({
      title : [,[Validators.required , Validators.minLength(3)]],
      description : ['', [ Validators.required , Validators.minLength(10)]],
      image :[],
      freelancer_id:[+this.freelancer_id],
      attachment_link:[]
    })
  }
  
  update(id:number){
    // console.log(this.portForm.value)
    this._portfolio.update(id,this.portForm.value).subscribe(res=>{
      alert('Updated')
      this.r.navigateByUrl('/freelancer/profile')
    })
  }
}
