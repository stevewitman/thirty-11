import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '@nx11/ui-lib';
import { PageNotFoundComponent } from '@nx11/ui-lib';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
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
