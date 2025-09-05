import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CarsComponent } from './cars.component';
import { CarsFilterComponent } from './cars-filter/cars-filter.component';
import { CarCardComponent } from './car-card/car-card.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { OrderFormComponent } from './order-form/order-form.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CarsComponent,
    CarsFilterComponent,
    CarCardComponent,
    CarsListComponent,
    OrderFormComponent
  ],
  exports: [
    CarsComponent,
    CarsFilterComponent,
    CarCardComponent,
    CarsListComponent,
    OrderFormComponent
  ]
})
export class CarsModule {}
