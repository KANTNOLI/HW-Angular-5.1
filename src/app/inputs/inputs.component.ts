import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cart } from '../../assets/Interfaces/Carts.interface';

@Component({
  selector: 'app-inputs',
  standalone: false,
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.css',
})
export class InputsComponent {
  @Input() actCartTitle: string = '';
  @Input() actCartPrice: number = -1;

  @Output() updateCart = new EventEmitter();
  @Output() removeCart = new EventEmitter();
}
