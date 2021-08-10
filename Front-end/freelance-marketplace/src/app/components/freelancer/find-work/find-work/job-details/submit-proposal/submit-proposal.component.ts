import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proposal } from 'src/app/models/proposal';
import { ProposalService } from 'src/app/services/proposal.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-submit-proposal',
  templateUrl: './submit-proposal.component.html',
  styleUrls: ['./submit-proposal.component.css']
})
export class SubmitProposalComponent implements OnInit {
  proposal:Proposal[]=[];


    form:FormGroup=new FormGroup({});
 
 
  constructor(private proposalservice:ProposalService, private _formBuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.form=this._formBuilder.group({
      //  hourlyrate:['',[Validators.required,Validators.minLength(2)]],
       description:['',[Validators.required,Validators.minLength(50),Validators.maxLength(255)]],
       payment_amount:['',[Validators.required,Validators.minLength(2)]],
       attatchment:['',[Validators.required,Validators.minLength(2)]],
       cover_letter:['',[Validators.required,Validators.minLength(2)]],
    });
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
  //       let proposals:Proposal=new Proposal();
  //   proposals.letter=letter;
  //   proposals.attachment=attatchment;
  //   this.proposalservice.addproposal(proposals).subscribe(Response=>{
  //     console.log(Response);
  //   },error=>console.error);
   }
  

  // fixed() {
  //   this.fx=!this.fx;
  //   this.status=!this.status;
   
  //  }
   
  //   statuss() {
  //    this.status=!this.status;
  //    this.fx=!this.fx;
  //  }

}
