import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Project, ProjectService } from '@nx11/core-data';
import { ProjectsFacade } from '@nx11/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'nx11-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  form: FormGroup;
  selectedProject$: Observable<Project> = this.projectsFacade.selectedProject$;

  projects$: Observable<Project[]> = this.projectsFacade.allProjects$;

  constructor(
		private projectService: ProjectService,
    private formBuilder: FormBuilder,
    private projectsFacade: ProjectsFacade,
    ) { }

  ngOnInit() {
    this.projectsFacade.loadProjects();
    this.initForm();
	}

	getProjects() {
		this.projects$ = this.projectService.getProjects();
	}

	selectProject(project: Project) {
    this.projectsFacade.selectProject(project.id);
		this.form.patchValue(project);
	}

	deleteProject(project: Project) {
    this.projectsFacade.deleteProject(project);

	}

	saveProject(project: Project) {
		if (project.id) {
      this.projectsFacade.updateProject(project);
		} else {
      this.projectsFacade.createProject(project);
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
