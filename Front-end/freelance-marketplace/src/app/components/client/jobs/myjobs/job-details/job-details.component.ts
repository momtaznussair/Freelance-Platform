import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {
  id:string;
  isDataGet:any;
  constructor(private route:ActivatedRoute,) { 
    this.id = this.route.snapshot.params['id'];

  }

  ngOnInit(): void {
  }

}
