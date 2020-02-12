import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProjectService, Project } from '@nx11/core-data';
import { tap } from 'rxjs/operators'

@Component({
  selector: 'nx11-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  _project;
  originalTitle;

  get project() {
    return this._project;
  }

  set project(value) {
    this._project = value;
  }

  constructor(
    private route: ActivatedRoute,
		private projectService: ProjectService,
		private router: Router
  ) { }

  ngOnInit() {
    const projectId = this.route.snapshot.params && this.route.snapshot.params.id;
    this._project = this.projectService.getProject(projectId);
    this._project.pipe(
      tap((project: Project) => project.title = this.originalTitle)
    ).subscribe()
	}
	
	onClick() {
    this.router.navigate(['/projects']);
  }

}