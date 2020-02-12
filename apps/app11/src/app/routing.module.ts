import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '@nx11/ui-lib';
import { PageNotFoundComponent } from '@nx11/ui-lib';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './projects/project/project.component';
import { AuthGuard } from '@nx11/core-data';

const routes: Routes = [
	{ path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
	{ path: 'projects', canActivate: [AuthGuard], children: [
		{ path: '', component: ProjectsComponent },
		{ path: ':id', component: ProjectComponent }
	] },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [],
  imports: [
		CommonModule,
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	],

})
export class RoutingModule { }
