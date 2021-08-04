import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  currentPath : string = ''

  ngOnInit(): void {
  this.currentPath = window.location.href.substring(22);
  console.log(this.currentPath = window.location.href.substring(21))
  }


  groups : any = [
    {name : "Category" , shape : "user" , path : "/user/signup/category"},
    {name : "Overview" , shape : "user" , path : "/user/signup/overview"},
<<<<<<< HEAD
    {name : "experience level" , shape : "lock" , path : "/user/signup/experience-level"},
    {name : "skills" , shape : "badger-honey" , path : "/user/signup/skills"},
=======
    {name : "experience" , shape : "badger-honey" , path : "/user/signup/experience"},
    {name : "experience level" , shape : "lock" , path : "/user/signup/experience-level"},
>>>>>>> e17b3d65997eacb6555202f5d49ac857581a3f77
    {name : "Education" , shape : "badge" , path : "/user/signup/education"},
    {name : "Language" , shape : "group" , path : "/user/signup/lang"},
    {name : "Hourly rate" , shape : "group" , path : "/user/signup/hourly-rate"},
    {name : "Location" , shape : "calculator" , path : "/user/signup/location"},
  ];



}
