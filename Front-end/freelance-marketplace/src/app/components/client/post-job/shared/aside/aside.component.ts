import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'post-job-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  constructor() { }

  currentPath : string = ''

  ngOnInit(): void {
  this.currentPath = window.location.href.substring(22);
  console.log(this.currentPath = window.location.href.substring(21))
  }


  groups : any = [
    {name : "Title" , shape : "pencil-alt" , path : "/client/post-job/title"},
    {name : "Description" , shape : "file-signature" , path : "/client/post-job/description"},
    {name : "Expertise" , shape : "clipboard-list" , path : "/client/post-job/expertise"},
    {name : "Budget" , shape : "dollar-sign" , path : "/client/post-job/budget"},
    {name : "Review" , shape : "check" , path : "/client/post-job/review"},
  ];
}
