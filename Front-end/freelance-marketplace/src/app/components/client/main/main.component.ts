import { Component, OnInit } from '@angular/core';
// import Swal from 'sweetalert2';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  // successAlertNotification(){
  //   Swal.fire('Hi', 'Now you can hire freelancers', 'success')
  // }
  ngOnInit(): void {
    // this.successAlertNotification()
  }

}
