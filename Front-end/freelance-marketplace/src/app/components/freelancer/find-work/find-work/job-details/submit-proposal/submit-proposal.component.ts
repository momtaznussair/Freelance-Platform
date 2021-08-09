import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proposal } from 'src/app/models/proposal';
import { ProposalService } from 'src/app/services/proposal.service';

@Component({
  selector: 'app-submit-proposal',
  templateUrl: './submit-proposal.component.html',
  styleUrls: ['./submit-proposal.component.css']
})
export class SubmitProposalComponent implements OnInit {
  // proposal:Proposal[]=[];
  status:boolean=false;
  fx:boolean=false;

    form:FormGroup=new FormGroup({});
 
  constructor(private proposalservice:ProposalService, private _formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.form=this._formBuilder.group({
       hourlyrate:['',[Validators.required,Validators.minLength(2)]],
       Description:['',[Validators.required,Validators.minLength(2)]],
       date:['',[Validators.required]],
       payment_amount:['',[Validators.required,Validators.minLength(2)]]
    });
  }
  submitproposal(letter:any,attatchment:string){
        let proposals:Proposal=new Proposal();
    proposals.letter=letter;
    proposals.attachment=attatchment;
    this.proposalservice.addproposal(proposals).subscribe(Response=>{
      console.log(Response);
    },error=>console.error());
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
