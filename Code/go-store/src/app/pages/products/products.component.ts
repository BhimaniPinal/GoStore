import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IProductModel } from 'models/product';
import { ProductService } from 'services/product.service';
import { Routing } from 'shared/constants/routing';
import { ProductDetailsComponent } from 'app/pages/product-details/product-details.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogFormComponent } from 'app/components/dialog-form/dialog-form.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  products: Array<IProductModel> = [];
  product!: IProductModel;
  columns: string[] = ['id', 'title', 'price', 'category', 'action'];

  constructor(
    private productService: ProductService,
    private router: Router,
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.productService.getProducts().subscribe((response) => {
      this.products = response;
    });
  }

  handleAddClick = () => {
    this.router.navigate([`/${Routing.Products}`, 'add']);
  };

  handleEditClick = (productId: number) => {
    // console.log(productId + 'product edited!');
    this.router.navigate([`/${Routing.Products}`, productId]);
  };

  handleViewClick = (id: number) => {
    this.productService.getProduct(id).subscribe((response) => {
      this.product = response;
      this.dialog.open(DialogFormComponent);
    });
  };
}
