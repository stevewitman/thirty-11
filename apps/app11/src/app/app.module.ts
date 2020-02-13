import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '@nx11/material';
import { RoutingModule } from './routing.module';
import { UiLibModule } from '@nx11/ui-lib';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ProjectDetailsComponent } from './projects/project-detail/project-detail.component';
import { ProjectComponent } from './projects/project/project.component';import { CoreStateModule } from '@nx11/core-state';

@NgModule({
	declarations: [
		AppComponent,
		ProjectsComponent,
		ProjectsListComponent,
		ProjectDetailsComponent,
		ProjectComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		MaterialModule,
		ReactiveFormsModule,
		RoutingModule,
    UiLibModule,
    CoreStateModule
	],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
