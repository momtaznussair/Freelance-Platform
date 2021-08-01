import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../../layout/sidebar/sidebar.component';
import {RegisterDataService} from "../../../../../services/register-data.service";
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  message:string="";
 approvalText:string="";
  constructor(private appService:RegisterDataService) {

  }

  ngOnInit(): void {
    
//  this.appService.currentApprovalStageMessage.subscribe(msg => this.message = msg);
  }
  
 submit()
 {
//  console.log(this.approvalText);
//  this.appService.updateApprovalMessage(this.approvalText);
 console.log(this.appService.momtazArry['skills']);
 console.log(this.appService.momtazArry['expertiselevel']);
 }
  // next($n:number){
  //   alert("hi"+$n+ groups.n);
  // }

}
