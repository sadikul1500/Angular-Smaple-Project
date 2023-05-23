import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  constructor(
    private route: ActivatedRoute,
    private cartSetvice: CartService
  ) {}
  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productId = Number(routeParams.get('productId'));
    this.product = products.find((p) => p.id === productId);
  }

  addToCart() {
    if (this.product) {
      this.cartSetvice.addToCart(this.product);
      window.alert('The product has been added to the cart');
    } else {
      window.alert('Invalid operation');
    }
  }
}
