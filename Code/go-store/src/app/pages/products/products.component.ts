import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IProductModel } from 'models/product';
import { ProductService } from 'services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  products: Array<IProductModel> = [];
  columns: string[] = ['id', 'title', 'price', 'category', 'action'];

  constructor(private productService: ProductService, private router: Router) {}
  ngOnInit(): void {
    this.productService.getProducts().subscribe((response) => {
      this.products = response;
    });
  }

  handleAddClick = () => {
    console.log('Add button clicked!');
  };

  handleEditClick = (productId: number) => {
    console.log(productId + 'product edited!');
    // this.router.navigate([`/${Routing.Products}/${productId}`]);
  };
}
