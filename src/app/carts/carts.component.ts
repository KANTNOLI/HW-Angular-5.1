import { Input, Component, Output, EventEmitter } from '@angular/core';
import { Cart } from '../../assets/Interfaces/Carts.interface';

@Component({
  selector: 'app-carts',
  standalone: false,
  styleUrl: './carts.component.css',
  template: `<section class="carts">
    <div
      *ngFor="let cart of filterCarts"
      [innerHTML]="cart | renderCart"
      class="cart"
      (click)="toggleCart.emit(cart.id)"
      [ngClass]="{
        cartsBack: search.toLowerCase() == cart.title.toLowerCase()
      }"
    ></div>
  </section> `,
})
export class CartsComponent {
  @Input() search: string = '';
  @Input() carts: Cart[] = [];
  @Input() filterCarts: Cart[] = [];

  @Output() toggleCart = new EventEmitter();
}
