import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of, Subscription } from 'rxjs';
import { ProductService } from 'services/product.service';
import { UserService } from 'services/user.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
})
export class CategoryComponent {
  categories: Array<string> = [];
  subscription!: Subscription;

  columns: string[] = ['name', 'action'];
  photoes$ = this.userService.getPhotoes$.pipe(
    catchError((error) => {
      console.log(error);
      return of([]);
    })
  );

  constructor(
    private productService: ProductService,
    private router: Router,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    this.subscription = this.productService
      .getCategories()
      .subscribe((response) => {
        this.categories = response;
      });
  }

  getCategoryProducts = (category: string) => {
    this.productService.getCategoryProducts(category).subscribe((response) => {
      console.log(response);
    });
  };

  ngOnDesctroye() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
