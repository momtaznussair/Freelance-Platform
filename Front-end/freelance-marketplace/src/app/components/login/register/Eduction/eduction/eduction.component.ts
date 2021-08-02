import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-eduction',
  templateUrl: './eduction.component.html',
  styleUrls: ['./eduction.component.css']
})
export class EductionComponent implements OnInit {
$data:any;
$test:string="test-amira";
  constructor(public json:ApiService) {this.$data= this.json.get("https://jsonplaceholder.typicode.com/posts/1") }

  ngOnInit(): void {
  }
next(){
  console.log(JSON.stringify(this.$data));
  // alert(JSON.stringify(this.$data));
}
}
