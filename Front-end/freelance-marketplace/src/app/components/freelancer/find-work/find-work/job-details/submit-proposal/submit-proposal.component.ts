import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proposal } from 'src/app/models/proposal';
import { ProposalService } from 'src/app/services/proposal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from 'src/app/services/job.service';
import { Job } from 'src/app/models/job';


@Component({
  selector: 'app-submit-proposal',
  templateUrl: './submit-proposal.component.html',
  styleUrls: ['./submit-proposal.component.css']
})
export class SubmitProposalComponent implements OnInit {
  proposal:Proposal[]=[];


    form:FormGroup=new FormGroup({});
    isDataGet:any;
    job_details:any;
    job_skills:any;
    user_id:any;
    id:string;
  constructor(private proposalservice:ProposalService, private _formBuilder:FormBuilder,private router:Router,private jobDetails:JobService,private route:ActivatedRoute) { 
    this.id = this.route.snapshot.params['id'];

  }

  ngOnInit(): void {
    this.user_id=localStorage.getItem('user_id');
    console.log(this.user_id);
    this.form=this._formBuilder.group({
      job_id:[this.id],
      user_id:[this.user_id],
      description:['',[Validators.required,Validators.minLength(20),Validators.maxLength(255)]],
       payment_amount:['',[Validators.required,Validators.minLength(2)]],
       attatchment:['',[Validators.required]],
       cover_letter:['',[Validators.required,Validators.minLength(2),Validators.maxLength(255)]],
    });

    //get job details
    this.jobDetails.getJob(this.id).subscribe(response=>{
      this.job_details=response['data'] as Job[];
      console.log(this.job_details);
      this.job_skills=this.job_details.skill;
      console.log(this.job_skills);
      this.isDataGet=true;

    },error=>console.error);
  }
  islogged:boolean=false;
  submitproposal(){
    if (this.form.valid){
      this.proposal=this.form.value;
      console.log(this.proposal);
      this.proposalservice.addproposal(this.proposal).subscribe(response=>{
        console.log(response);
        this.router.navigateByUrl("/freelancer");
      },error=>console.error);
    }else{
      this.islogged=true;
    }

   }
  


}
