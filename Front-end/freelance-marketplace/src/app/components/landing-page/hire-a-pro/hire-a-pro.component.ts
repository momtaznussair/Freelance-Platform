import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Skill } from 'src/app/models/skill';
import { ApiService } from 'src/app/services/api.service';
import { CategoryService } from 'src/app/services/category.service';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-hire-a-pro',
  templateUrl: './hire-a-pro.component.html',
  styleUrls: ['./hire-a-pro.component.css']
})
export class HireAProComponent implements OnInit {

  constructor(private cat:CategoryService,private skill:SkillService) { }
  categories:Category[]=[];
  skills:Skill[]=[];

  ngOnInit(): void {
    this.cat.getCategories(`categories`).subscribe(response=>{
      this.categories=response['data'] as Category[];
      console.log(response);
    },error=>{console.error('wrong')}
    );

    this.skill.getSkills(`skills`).subscribe(response=>{
      this.skills=response['data'] as Skill[]
    })

    // this.http.get("http://127.0.0.1:8000/api/skills").subscribe(response=>{
    //   this.skills=response as Category[];
    // },error=>{console.error('wrong')}
    // );
  }

}
