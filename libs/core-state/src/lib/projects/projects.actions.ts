import { createAction, props } from '@ngrx/store';

import { Project } from '@nx11/core-data';

export const projectSelected = createAction(
  '[PROJECT] Project Selected',
  props<{ selectedProjectId: string }>()
);

// Load Actions
export const loadProjects = createAction('[PROJECT] Load Projects');

export const projectsLoaded = createAction(
  '[PROJECT] Projects Loaded',
  props<{ projects: Project[] }>()
);

// Create Actions
export const createProject = createAction(
  '[PROJECT] Create Project',
  props<{ project: Project }>()
);

export const projectCreated = createAction(
  '[PROJECT] Project Created',
  props<{ project: Project }>()
);

// Update Actions
export const updateProject = createAction(
  '[PROJECT] Update Project',
  props<{ project: Project }>()
);

export const projectUpdated = createAction(
  '[PROJECT] Project Updated',
  props<{ project: Project }>()
);

// Delete Actions
export const deleteProject = createAction(
  '[PROJECT] Delete Project',
  props<{ project: Project }>()
);

export const projectDeleted = createAction(
  '[PROJECT] Project Deleted',
  props<{ project: Project }>()
);
