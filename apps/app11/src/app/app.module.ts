import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { MaterialModule } from '@nx11/material';
import { RoutingModule } from './routing.module';
import { UiLibModule } from '@nx11/ui-lib';
import { AppComponent } from './app.component';
@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MaterialModule,
		RoutingModule,
		UiLibModule
	],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
