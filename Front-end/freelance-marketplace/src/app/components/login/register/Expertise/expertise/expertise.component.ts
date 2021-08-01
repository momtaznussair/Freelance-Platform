import { Component, OnInit } from '@angular/core';
import {RegisterDataService} from "../../../../../services/register-data.service";
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

export interface User {
  name: string;
}
@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.css']
})
export class ExpertiseComponent implements OnInit {

  myControl = new FormControl();
  options: User[] = [
    {name: 'Mary'},
    {name: 'Shelley'},
    {name: 'Igor'}
  ];
  filteredOptions: Observable<User[]> |undefined
  ;


  //////////////////////////////////////////////
  form : FormGroup = new FormGroup({});
  message:any;
  approvalText:string="";
  skills=["css","html","javascript","react"];
  selectedSkills=[""];
  result=[""];
  constructor(private formBuilder : FormBuilder ,private appService:RegisterDataService) { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
    //////////////////////////////////////////////
    
 this.appService.currentApprovalStageMessage.subscribe(msg => this.message = msg);

    this.form = this.formBuilder.group({
      searchSkill : ['' , [ Validators.required, Validators.maxLength(500) , Validators.minLength(10)]]
    })
  }
////////////////////////

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }
///////////////////////////////////////////////
  submit()
 {
  console.log(this.approvalText)
  this.appService.updateApprovalMessage(this.approvalText)
  console.log(this.approvalText)
 }
 addSkill(b:HTMLElement){
  this.selectedSkills.push(b.innerText);
   console.log(this.selectedSkills)
 }
 search(){
   console.log(this.approvalText);



 this.result = this.skills.filter(s => s.includes(this.approvalText));

console.log(this.result);




  //  this.skills.filter
 }
}
