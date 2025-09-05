import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
})
export class CarCardComponent {
  @Input() car: any;
  @Output() book = new EventEmitter<any>();

  onBook() {
    this.book.emit(this.car);
  }
}
