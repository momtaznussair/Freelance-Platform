import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterDataService {

  // private approvalStageMessage = new BehaviorSubject('Basic Approval is required!');
  // currentApprovalStageMessage = this.approvalStageMessage.asObservable();
  momtazArry:any={"skills":["html","css","java"],"expertiselevel":2}
  constructor() { }
  updateArray(message: string) {
    // this.approvalStageMessage.next(message)
    // this.momtazArry.push()
    }
}
