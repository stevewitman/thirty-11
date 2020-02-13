import { Project } from './project';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

const BASE_URL = 'https://server-30-x-30.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
model = 'projects'
tempProjects

  constructor(private httpClient: HttpClient) { }

  getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  getUrlForId(id: string) {
    return `${this.getUrl()}/${id}`;
  }

  getProject(projectId: string) {
		console.log('GET URL:', this.getUrlForId(projectId));
    return this.httpClient.get(this.getUrlForId(projectId));
  }

  getProjects() {
    this.tempProjects = this.httpClient.get(this.getUrl())
    console.log('GET PROJECTS', this.tempProjects)
    return this.httpClient.get(this.getUrl());
  }

  createProject(project: Project) {
    return this.httpClient.post(this.getUrl(), project);
  }

  deleteProject(projectId: string) {
		console.log('ID:', projectId)
		console.log('DELETE URL:', this.getUrlForId(projectId));
    return this.httpClient.delete(this.getUrlForId(projectId));
  }

  updateProject(project: Project) {
    return this.httpClient.put(this.getUrlForId(project.id), project);
  }
}
