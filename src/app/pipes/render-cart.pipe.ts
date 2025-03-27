import { Pipe, PipeTransform } from '@angular/core';
import { Cart } from '../../assets/Interfaces/Carts.interface';

@Pipe({
  name: 'renderCart',
  standalone: false
})
export class RenderCartPipe implements PipeTransform {

  transform(cart: Cart): unknown {
    return `<img style="width: 200px;" src=${cart.img} alt=''> <p class='title'>${cart.title} $${cart.price}</p> <p class='desc'>${cart.desc}</p>`;
  }

}
