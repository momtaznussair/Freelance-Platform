import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import {RegisterDataService} from "../../../../../services/register-data.service";
>>>>>>> e17b3d65997eacb6555202f5d49ac857581a3f77

@Component({
  selector: 'app-empolyment',
  templateUrl: './empolyment.component.html',
  styleUrls: ['./empolyment.component.css']
})
export class EmpolymentComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }
=======
  constructor(private appService:RegisterDataService) { }
>>>>>>> e17b3d65997eacb6555202f5d49ac857581a3f77

  ngOnInit(): void {
  }

  submit()
 {
//  this.appService.updateApprovalMessage(this.approvalText);
 }
<<<<<<< HEAD

=======
 
>>>>>>> e17b3d65997eacb6555202f5d49ac857581a3f77
}
