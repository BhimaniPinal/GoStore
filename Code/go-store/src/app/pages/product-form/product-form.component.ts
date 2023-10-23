import { Component } from '@angular/core';
import { ProductService } from 'services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IProductModel } from 'models/product';

import { Location } from '@angular/common';
import { Routing } from 'shared/constants/routing';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
})
export class ProductFormComponent {
  product: IProductModel = {
    id: 0,
    title: '',
    price: '',
    category: '',
    description: '',
    image: '',
  };
  favoriteColor = '';
  categories!: Array<string>;
  id!: number;
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}
  async ngOnInit() {
    await this.getProduct();
    await this.getCategories();
  }
  async getProduct() {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id > 0)
      this.productService.getProduct(this.id).subscribe((response) => {
        this.product = response;
      });
  }

  async getCategories() {
    this.productService.getCategories().subscribe((response) => {
      this.categories = response;
    });
  }

  handleProductSubmit = (event: Event) => {
    event.preventDefault();
    if (this.product.id > 0)
      this.productService.updateProduct(this.product).subscribe((response) => {
        console.log(response);
      });
    else
      this.productService.addProduct(this.product).subscribe((response) => {
        console.log(response);
      });

    this.router.navigate([`/${Routing.Products}`]);
  };
  goBack = () => this.location.back();
}
