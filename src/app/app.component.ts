import { Component } from '@angular/core';
import { Cart } from '../assets/Interfaces/Carts.interface';
import { RenderCarts } from '../assets/RenderArrayCarts.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  carts: Cart[] = RenderCarts(6);
  filterCarts: Cart[] = this.carts;
  activeCart: Cart = this.carts[0];
  actCartTitle: string = this.activeCart.title;
  actCartPrice: number = this.activeCart.price;

  search: string = '';
  historyClick: number = -1;

  removeCart() {
    this.carts.splice(this.activeCart.id, 1);

    if (this.carts[this.activeCart.id + 1]) {
      this.activeCart = this.carts[this.activeCart.id + 1];
    } else {
      this.activeCart = this.carts[this.activeCart.id - 1];
    }
  }

  updateCart(content: number | string) {
    if (typeof content == 'string') {
      this.actCartTitle = content;
      this.carts[this.activeCart.id].title = this.actCartTitle;
    } else if (typeof content == 'number') {
      this.actCartPrice = content;
      this.carts[this.activeCart.id].price = this.actCartPrice;
    }

    this.filterCarts[this.activeCart.id] = {
      ...this.carts[this.activeCart.id],
    };
  }

  toggleCart(id: number) {
    // id - obj
    console.log(this.carts[id]);

    this.activeCart = this.carts[id];
    this.actCartTitle = this.activeCart.title;
    this.actCartPrice = this.activeCart.price;
  }

  setSort(id: number) {
    console.log(this.filterCarts);

    // id - type sort
    if (id === this.historyClick) {
      this.filterCarts.reverse();
    } else {
      switch (id) {
        case 1:
          this.filterCarts.sort((a, b) => a.price - b.price);
          break;
        default:
          this.filterCarts.sort((a, b) => {
            if (a.title.toLowerCase() > b.title.toLowerCase()) {
              return -1;
            } else if (a.title.toLowerCase() < b.title.toLowerCase()) {
              return 1;
            } else {
              return 0;
            }
          });
      }
    }

    this.historyClick = id;
  }

  setCarts(search: string) {
    this.search = search;
    this.filterCarts = this.carts.filter((cart) =>
      cart.title.toLocaleLowerCase().includes(this.search.toLocaleLowerCase())
    );
  }
}
