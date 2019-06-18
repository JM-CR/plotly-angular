import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaysComponent } from './days/days.component';
import { MonthsComponent } from './months/months.component';
import { YearsComponent } from './years/years.component';
import { HoursComponent } from './hours/hours.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DaysComponent, MonthsComponent, YearsComponent, HoursComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HoursComponent,
    DaysComponent,
    MonthsComponent,
    YearsComponent
  ]
})
export class PlotsModule { }
