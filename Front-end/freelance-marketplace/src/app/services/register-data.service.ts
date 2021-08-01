import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterDataService {

  // private approvalStageMessage = new BehaviorSubject('Basic Approval is required!');
  // currentApprovalStageMessage = this.approvalStageMessage.asObservable();
  momtazArray:any={
    "category":"  initial category",
    "overview":"initial overview",
    "title":"initial title",
    "skills":["html","css","java"],
    "expertiselevel":2,
    "education":" ",
   "language":" ",
   "service fee":2,
   "location":" "
}
  constructor() { }
  // updateArray(message: string) {
  //   // this.approvalStageMessage.next(message)
  //   // this.momtazArry.push()
  //   }
}
