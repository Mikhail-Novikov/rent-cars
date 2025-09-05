import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.less']
})
export class OrderFormComponent {
  @Input() orderForm!: FormGroup;
  @Output() submitOrder = new EventEmitter<void>();

  onSubmit() {
    this.submitOrder.emit();
  }
}
