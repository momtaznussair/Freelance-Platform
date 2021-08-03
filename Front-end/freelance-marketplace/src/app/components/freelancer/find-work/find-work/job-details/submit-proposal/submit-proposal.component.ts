import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Proposal } from 'src/app/models/proposal';
import { ProposalService } from 'src/app/services/proposal.service';

@Component({
  selector: 'app-submit-proposal',
  templateUrl: './submit-proposal.component.html',
  styleUrls: ['./submit-proposal.component.css']
})
export class SubmitProposalComponent implements OnInit {
  // proposal:Proposal[]=[];

    // form:FormGroup;
  constructor(private proposalservice:ProposalService,private _formBuilder:FormBuilder) { }

  ngOnInit(): void {
    // this.form=this._formBuilder.group({
       
    // });
  }
  submitproposal(hourrate:any,paymentamount:any,coverletter:any,attatchment:string){
    let proposals:Proposal=new Proposal();
    proposals.hourly_rate=hourrate;
    proposals.payment_amount=paymentamount;
    proposals.cover_letter=coverletter;
    proposals.attachment=attatchment;
    this.proposalservice.addproposal(proposals).subscribe(Response=>{
      console.log(Response);
    },error=>console.error);
  }

}
