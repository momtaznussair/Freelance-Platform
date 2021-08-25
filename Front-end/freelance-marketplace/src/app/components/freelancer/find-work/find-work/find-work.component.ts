import { Component, OnInit } from '@angular/core';
// import Swal from 'sweetalert2';
import { Job } from 'src/app/models/job';
import { JobService } from 'src/app/services/job.service';
import { Skill } from 'src/app/models/skill';


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
size:any
POSTS: any;
page = 1;
count = 0;
tableSize = 7;
tableSizes = [3, 6, 9, 12];
responsive:string="true"
currentIndex:number=0;
jobPost:any;
skills:any;
  constructor(private job:JobService) { }

  // successAlertNotification(){
  //   Swal.fire('Welcome', 'Now you can apply for jobs', 'success')
  // }
  
  ngOnInit(): void {
    // this.successAlertNotification();
    this.fetchPosts();
  }

  fetchPosts(): void {

    this.job.getJobs().subscribe(res=>{
      this.jobPost=res['data'] as Job;
      console.log(this.jobPost);
      this.skills=this.jobPost.skills;
      console.log(this.skills);

    // this.job.get().subscribe(res=>{
    //   this.jobPost=res.data as Job[]
    //   this.skills=this.jobPost.skills
    //   console.log(this.skills)
    //   console.log(this.jobPost)

    // },error=>console.log)

  })}

/*-------------------------------
    pagination methods
--------------------------------*/
  onTableDataChange(event:any){
    this.page = event;
    this.fetchPosts();
  }

  onTableSizeChange(event:any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  }

  search(){
    console.log(this.query)
  }

}