import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(private cartService: CartService, private form: FormBuilder) {}

  items = this.cartService.getCart();

  checkoutForm = this.form.group({
    name: '',
    address: '',
  });

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    window.alert(
      'Your order has been submitted ' + JSON.stringify(this.checkoutForm.value)
    );
    this.checkoutForm.reset();
  }
}
