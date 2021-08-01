import { Component, OnInit } from '@angular/core';
import {RegisterDataService} from "../../../../../services/register-data.service";

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

  constructor(private appService:RegisterDataService) { }

  ngOnInit(): void {
  }

  submit()
 {
 }
}
