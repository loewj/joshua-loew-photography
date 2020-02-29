import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit {

  public projects = Project;
  public viewing: Project = null;

  constructor() { }

  ngOnInit(): void {
    
  }

  setProject(proj: Project = null) {
    this.viewing = proj;
  }

}

enum Project {
  PocketCasts,
  GoldenHour,
  Omcom,
  JointDJ
}
