import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'services/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  categories: Array<string> = [];

  columns: string[] = ['name', 'action'];

  constructor(private productService: ProductService, private router: Router) {}
  ngOnInit(): void {
    this.productService.getCategories().subscribe((response) => {
      this.categories = response;
    });
  }

  getCategoryProducts = (category: string) => {
    this.productService.getCategoryProducts(category).subscribe((response) => {
      console.log(response);
    });
  };
}
