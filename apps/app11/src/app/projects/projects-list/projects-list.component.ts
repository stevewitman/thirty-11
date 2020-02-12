import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Project } from '@nx11/core-data';

@Component({
  selector: 'nx11-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

  @Input() projects: Project[];
  @Output() selected = new EventEmitter;
  @Output() deleted = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  select(project: Project) {
    this.selected.emit(project);
  }

  delete(project: Project) {
    this.deleted.emit(project);
  }
}
