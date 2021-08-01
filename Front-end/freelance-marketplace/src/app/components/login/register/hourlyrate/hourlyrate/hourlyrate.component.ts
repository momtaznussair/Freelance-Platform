import { Component, OnInit } from '@angular/core';
import {RegisterDataService} from "../../../../../services/register-data.service";

@Component({
  selector: 'app-hourlyrate',
  templateUrl: './hourlyrate.component.html',
  styleUrls: ['./hourlyrate.component.css']
})
export class HourlyrateComponent implements OnInit {

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
