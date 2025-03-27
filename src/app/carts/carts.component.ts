import { Input, Component, Output, EventEmitter } from '@angular/core';
import { Cart } from '../../assets/Interfaces/Carts.interface';

@Component({
  selector: 'app-carts',
  standalone: false,
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.css',
})
export class CartsComponent {
  @Input() search: string = '';
  @Input() carts: Cart[] = [];
  @Input() filterCarts: Cart[] = [];

  @Output() toggleCart = new EventEmitter();
}
