import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class OrderFormComponent {
  @Input() orderForm!: FormGroup;
  @Output() submitOrder = new EventEmitter<void>();

  onSubmit() {
    this.submitOrder.emit();
  }
}
