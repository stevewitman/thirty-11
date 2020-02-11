import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@nx11/material';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
		CommonModule,
		MaterialModule,
	],
  declarations: [
		PageNotFoundComponent,
		LoginComponent,
	],
  exports: [
		PageNotFoundComponent,
		LoginComponent,
	]
})
export class UiLibModule {}

