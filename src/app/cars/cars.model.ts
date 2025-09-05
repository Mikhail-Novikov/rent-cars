/** Данные автомобиля */
export interface CarModel {
  image: string;
  title: string;
  text: string;
  prices: number[];
}

/** Данные фильтра */
export interface FilterModel {
  name: string;
  active: boolean;
}

/** Данные формы */
export interface OrderModel {
  car: string;
  name: string;
  phone: string;
}

/** Ответ от сервера */
export interface ResponseOrderModel extends OrderModel {
  message: string;
  error: {
    message: string;
    field: string;
  };
  success: number;
}