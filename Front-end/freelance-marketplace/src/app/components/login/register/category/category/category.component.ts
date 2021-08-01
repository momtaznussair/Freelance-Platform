import { environment } from './../../../../../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../../layout/sidebar/sidebar.component';
import {RegisterDataService} from "../../../../../services/register-data.service";
import { Categories } from 'src/app/models/categories/categories';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private appService:RegisterDataService) {

  }

  ngOnInit(): void {
  }
  
  submit()
 {
//  this.appService.updateApprovalMessage(this.approvalText);
 console.log(this.appService.momtazArray['skills']);
 console.log(this.appService.momtazArray['expertiselevel']);
 }


}
