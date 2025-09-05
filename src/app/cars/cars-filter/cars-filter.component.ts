import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FilterModel } from './cars-filter.model';
@Component({
  selector: 'app-cars-filter',
  templateUrl: './cars-filter.component.html',
  
})

/** Компонент фильтра автомобилей */
export class CarsFilterComponent {

  @Input() carsContent!: HTMLElement;
  @Input() carsFilter: FilterModel[] = [];
  @Output() getCars = new EventEmitter<string>();

  /**
  * Метод активации фильтра
   * @param filter Значение фильтра
   * @param carsContent Элемент, к которому нужно прокрутить после фильтрации
  */
  changeFilter(filter: FilterModel, carsContent: HTMLElement) {
    this.carsFilter.forEach((el) => (el.active = false));
    filter.active = true;

    this.getCars.emit(filter.name == "Все марки" ? "" : filter.name);

    carsContent.scrollIntoView({
      behavior: "auto",
    });
  }

  /**
   * Метод выбора фильтра
   * @param filter Значение фильтра
   */
  onSelect(filter: { name: string; active: boolean }) {
    this.changeFilter(filter, this.carsContent);
  }
}
