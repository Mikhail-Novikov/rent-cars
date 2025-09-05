import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CarsModule } from "../cars.module";

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  imports: [CarsModule],
})
export class CarsListComponent {
  @Input() cars: any[] = [];
  @Output() bookCar = new EventEmitter<any>();

  onBook(car: any) {
    this.bookCar.emit(car);
  }
}
