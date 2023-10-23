import { Component, Input } from '@angular/core';
import { IProductModel } from 'models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent {
  @Input() product!: IProductModel;
  constructor() {}
}
