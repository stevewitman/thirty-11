import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataPersistence } from '@nrwl/angular';
import { CoreDataModule } from '@nx11/core-data';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RootStoreConfig, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProjectsEffects } from './projects/projects.effects';
import { reducers } from '.';

const storeConfig: RootStoreConfig<any> = {
  runtimeChecks: {
    strictActionImmutability: true,
    strictStateImmutability: true
  }
};

@NgModule({
  imports: [
    CommonModule,
    CoreDataModule,
    StoreModule.forRoot(reducers, storeConfig),
    EffectsModule.forRoot([
      ProjectsEffects
    ]),
    StoreDevtoolsModule.instrument({ name: 'StoreApp11' })
  ],
  providers: [DataPersistence]
})
export class CoreStateModule {}
