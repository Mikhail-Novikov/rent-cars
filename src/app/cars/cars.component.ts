import { HttpClient } from "@angular/common/http";
import { Component, inject } from "@angular/core";
import { ReactiveFormsModule, FormControl, FormGroup } from "@angular/forms";
import { CarsModule } from "./cars.module";
import { carsFilter } from "@constants";
import { CarModel, FilterModel, ResponseOrderModel } from "./cars.model";

/** Компонент автомобилей */
@Component({
  selector: "app-cars",
  standalone: true,
  imports: [ReactiveFormsModule, CarsModule],
  templateUrl: "./cars.component.html",
  styleUrls: ["./cars.component.less"],
})

/** Класс компонента автомобилей */
export class CarsComponent {
  http = inject(HttpClient);

  isCarInputDisabled: boolean = false;

  cars: CarModel[] = [];

  orderForm: FormGroup = new FormGroup({
    car: new FormControl(""),
    name: new FormControl(""),
    phone: new FormControl(""),
  });

  carsFilter : FilterModel[] = carsFilter;

  /**
   * Метод получения данных автомобилей
   * @param filter Значение фильтра
  */
  getCars(filter: string) {
    console.log(filter);
    this.http
      .get<CarModel[]>("https://testologia.ru/cars-data", {
        params: { filter: filter },
      })
      .subscribe((data: CarModel[]) => {
        this.cars = data;
      });
  }

  ngOnInit(): void {
    this.getCars("");
  }

  /**
  * Метод отправки формы
  */
  sendOrder() {
    if (this.orderForm.valid) {
      this.http
        .post<ResponseOrderModel>("https://testologia.ru/cars-order", this.orderForm.value)
        .subscribe({
          next: (response: ResponseOrderModel) => {
            alert(response.message);
          },
          error: (response: ResponseOrderModel) => {
            alert(response.error.message);
          },
        });
      this.orderForm.reset();
      this.isCarInputDisabled = false;
    }
  }

  /** Метод проверки валидности поля */
  isError(fieldName: string): boolean {
    const control = this.orderForm.get(fieldName);
    return !!(control?.errors && (control.touched || control.dirty));
  }

  /** Метод блокировки поля автомобиля */
  toggleCarInputEditing(allowEdit: boolean): void {
    this.isCarInputDisabled = !allowEdit;
  }
}
