import { Project } from '@nx11/core-data';
import { FormGroup, NgForm } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nx11-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  currentProject;
  originalTitle;

  @Input() form: FormGroup
  @Output() saved = new EventEmitter;
  @Output() cancelled = new EventEmitter;
  @Input() set project(value) {
    if (value) {
			this.originalTitle = value.title;
		}
    this.currentProject = Object.assign({}, value)
  }

  constructor() { }

  ngOnInit() {
  }

  save(project: Project) {
    this.saved.emit(project);
  }

	onClear() {
		this.cancelled.emit(this.currentProject);
	}

  saveForm(formDirective: NgForm) {
    this.save(this.form.value)
    formDirective.resetForm();
  }
}
