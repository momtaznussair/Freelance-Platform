import { Component, OnInit } from '@angular/core';
import {RegisterDataService} from "../../../../../services/register-data.service";
@Component({
  selector: 'app-eduction',
  templateUrl: './eduction.component.html',
  styleUrls: ['./eduction.component.css']
})
export class EductionComponent implements OnInit {

  constructor(private appService:RegisterDataService) { }

  ngOnInit(): void {
  }


submit()
{
console.log(this.appService.momtazArray['skills']);
console.log(this.appService.momtazArray['expertiselevel']);
}
}
