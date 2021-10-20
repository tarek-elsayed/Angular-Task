import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  Jobs = [
    "UX/UI DESIGN",
    "RESPONSIVE DESIGN",
    "WEB DESIGN",
    "MOBILE APP DESIGN",
  ];
  skills = [
    "html",
    "Java Script",
    "Bootstrap",
    "Angular",
    "React",
    "Flutter",
  ];
  per = [
    "20",
    "30",
    "40",
    "50",
    "60",
    "68",
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
