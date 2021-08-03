import { Component, OnInit } from '@angular/core';
import { Proposal } from 'src/app/models/proposal';
import { ProposalService } from 'src/app/services/proposal.service';

@Component({
  selector: 'app-submit-proposal',
  templateUrl: './submit-proposal.component.html',
  styleUrls: ['./submit-proposal.component.css']
})
export class SubmitProposalComponent implements OnInit {
  // proposal:Proposal[]=[];
  constructor(private proposalservice:ProposalService) { }

  ngOnInit(): void {
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
