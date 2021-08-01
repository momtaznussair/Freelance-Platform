import { Component, OnInit } from '@angular/core';
import {RegisterDataService} from "../../../../../services/register-data.service";

@Component({
  selector: 'app-empolyment',
  templateUrl: './empolyment.component.html',
  styleUrls: ['./empolyment.component.css']
})
export class EmpolymentComponent implements OnInit {

  constructor(private appService:RegisterDataService) { }

  ngOnInit(): void {
  }
  
  submit()
 {
//  this.appService.updateApprovalMessage(this.approvalText);
 console.log(this.appService.momtazArray['skills']);
 console.log(this.appService.momtazArray['expertiselevel']);
 }
}
