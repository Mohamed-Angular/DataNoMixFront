import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DataNoMixSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [DataNoMixSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class DataNoMixHomeModule {}
