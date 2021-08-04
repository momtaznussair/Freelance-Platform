import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-work',
  templateUrl: './find-work.component.html',
  styleUrls: ['./find-work.component.css']
})
export class FindWorkComponent implements OnInit {
query:string='';
jobs=[
 
  {
    "id":1,
  "title":"photoshop to html and css ",
  "desc":" i need to nkjf kd;rofkrf tovptvpvmpogvm vmtoivmo",
  "skills":["css","html","js","react"]
  },  {
    "id":2,
  "title":"photoshop to html and css ",
  "desc":" i need to nkjf kd;rofkrf tovptvpvmpogvm vmtoivmo",
  "skills":["css","html","js","react"]
  },  {
    "id":3,
  "title":"photoshop to html and css ",
  "desc":" i need to nkjf kd;rofkrf tovptvpvmpogvm vmtoivmo",
  "skills":["css","html","js","react"]
  },  {
    "id":4,
  "title":"photoshop to html and css ",
  "desc":" i need to nkjf kd;rofkrf tovptvpvmpogvm vmtoivmo",
  "skills":["css","html","js","react"]
  },
];
  constructor() { }

  ngOnInit(): void {
  }

}
