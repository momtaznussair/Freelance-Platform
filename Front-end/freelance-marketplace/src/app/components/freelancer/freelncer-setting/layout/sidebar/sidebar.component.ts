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
    {name : "Contact Info" , shape : "user" , path : "/freelancer/settings/info"},
    {name : "Billing Methods" , shape : "badger-honey" , path : "freelancer/settings/deposit-method"},
    {name : "Password & Security" , shape : "lock" , path : "/freelancer/settings/security"},
    {name : "Membership" , shape : "badge" , path : "/freelancer/settings/membership"},
    {name : "Tax Information" , shape : "commenting" , path : "/freelancer/settings/tax-info"},
    {name : "Get Paid" , shape : "badger-honey" , path : "/freelancer/settings/get-paid"}

  ];
  selectedItem : any = '';

  listClick(event : any , newValue : any) {
    this.selectedItem = newValue;
}

}
