import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Project, ProjectService } from '@nx11/core-data';

@Component({
  selector: 'nx11-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  form: FormGroup;
  selectedProject$;
  projects$;

  constructor(
		private projectService: ProjectService,
		private formBuilder: FormBuilder,
    ) { }

  ngOnInit() {
		this.getProjects();
    this.initForm();
	}
	
	getProjects() {
		this.projects$ = this.projectService.getProjects();
	}

	selectProject(project: Project) {
		this.selectedProject$ = project;
		this.form.patchValue(project);
	}

	deleteProject(project: Project) {
		this.projectService.deleteProject(project.id)
		.subscribe(result => {
			this.getProjects();
		});
	}

	saveProject(project: Project) {
		if (project.id) {
			this.updateProject(project);
		} else {
			this.createProject(project);
		}
	}

	updateProject(project) {
		this.projectService.updateProject(project)
		.subscribe(result => {
			this.getProjects();
			this.resetProject();
		})
	}

	resetProject() {
		const emptyProject: Project = {
			id: null,
			title: '',
			details: '',
			importanceLevel: 0
		}
		this.selectProject(emptyProject);
	}

	createProject(project) {
		this.projectService.createProject(project)
		.subscribe(result => {
			this.getProjects();
			this.resetProject();
		})
	}

  cancel() {
    this.form.reset();
    this.selectProject({ id: null} as Project)
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: [null],	
      title: ['', Validators.compose([Validators.required])],
      details: ['', Validators.compose([Validators.required])]
    })
  }

}
