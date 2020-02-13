import { Injectable } from '@angular/core';

import { Action, select, Store, ActionsSubject } from '@ngrx/store';
import { Project } from '@nx11/core-data';
import * as fromProjects from './projects.reducer';
import * as projectsActions from './projects.actions';
import {
  selectAllProjects,
  selectProject,
  selectProjectsLoading
} from './projects.selectors';

@Injectable({
  providedIn: 'root'
})
export class ProjectsFacade {
  allProjects$ = this.store.pipe(select(selectAllProjects));
  selectedProject$ = this.store.pipe(select(selectProject));
  projectLoading$ = this.store.pipe(select(selectProjectsLoading));

  constructor(
    private store: Store<fromProjects.ProjectsPartialState>,
    private actions$: ActionsSubject
    ) {}

  selectProject(selectedProjectId: string) {
    this.dispatch(projectsActions.projectSelected({ selectedProjectId }));
  }

  loadProjects() {
    this.dispatch(projectsActions.loadProjects());
  }

  createProject(project: Project) {
    this.dispatch(projectsActions.createProject({ project }));
  }

  updateProject(project: Project) {
    this.dispatch(projectsActions.updateProject({ project }));
  }

  deleteProject(project: Project) {
    this.dispatch(projectsActions.deleteProject({ project }));
  }

  private dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
