import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobProposalService } from 'src/app/services/job-proposal.service';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.css']
})
export class ProposalsComponent implements OnInit {
proposals:any;
freelancers:any;
proposals_number:any;
jobs:any;
id:string;
  constructor(private proposal:JobProposalService,private route:ActivatedRoute , private job:JobService) { 
    this.id = this.route.snapshot.params['id'];

  }

  ngOnInit(): void {
    this.proposal.get(this.id).subscribe(res=>{
      this.proposals=res.data;
      console.log(this.proposals);
      this.freelancers=this.proposals[0].freelancer;
      console.log(this.freelancers);


    },error=>console.error);

    this.job.getJob(this.id).subscribe(res=>{
      this.jobs=res.data;
      this.proposals_number=this.jobs.proposals.length
      console.log(this.proposals_number);
    })
  }

}
