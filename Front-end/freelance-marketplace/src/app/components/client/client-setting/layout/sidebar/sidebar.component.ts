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
    {name : "My Info" , shape : "user" , path : "/client/info"},
    {name : "Billing Methods" , shape : "badger-honey" , path : "/client/payments/deposit-methods"},
    {name : "Password & Security" , shape : "lock" , path : "/client/account-security/password-and-security"},
    {name : "Membership" , shape : "badge" , path : "/client/plans/index"},
    {name : "Teams" , shape : "group" , path : "/client/teams"},
    {name : "Notification Setting" , shape : "group" , path : "/client/notification-settings"},
    {name : "Members & Permessions" , shape : "calculator" , path : "/client/members/active"},
    {name : "Taks Informatio" , shape : "commenting" , path : "/client/payments/tax-info"},

  ];

  selectedItem : any = '';

  listClick(event : any , newValue : any) {
    this.selectedItem = newValue;
}

}
