import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Portofolio } from 'src/app/models/portofolio';
import { ProfileService } from 'src/app/services/profile.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  isDataGet: boolean = false;

  constructor(private portfolio: PortfolioService, private api: ApiService, private router: Router, private formBuilder: FormBuilder, private portfile: ProfileService) { }
  portfoliosData: any;
  data: any;
 portfilio_id:any;
  ngOnInit(): void {

    this.form = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      image: ['', [Validators.required]]
    })

    this.portfolio.get().subscribe(res => {
      console.log(res);
      this.portfoliosData = res;
      console.log(this.portfoliosData.data);

      this.data = this.portfoliosData.data.splice(0, 3);
      (this.data.id);
      this.isDataGet = true;

    })
  }
  isLogged: boolean = false;

  submit(id: number) {
    this.portfile.delete(id).subscribe(responses => {
      // this.items.splics(id,1);
      console.log("dlff")
      this.router.navigateByUrl("/freelancer/work/profile");
    });
  }
  new_title: string = '';
  new_description: string = '';
  save() {
    console.log(this.form.value)
    if (this.form.valid) {
      this.portfile.updateportfilo(`updatePassword/${this.portfilio_id}`, this.form.value).subscribe(response => {
        console.log(response);
        this.portfilio_id = localStorage.getItem('portfilio_id');
      }, error => {
        alert('please check your data and try again');
      });
    }
    else {
      this.isLogged = true;
      alert('please complite failds..');
      console.log(this.isLogged);
    }
  }
}


