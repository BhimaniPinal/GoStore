import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { IAppConfig } from 'models/app-config';
import { APP_SERIVCE_CONFIG } from 'utils/appconfig.service';
import { IProductModel } from 'models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(
    @Inject(APP_SERIVCE_CONFIG) private config: IAppConfig,
    private httpClient: HttpClient
  ) {}

  getProducts = () => {
    return this.httpClient.get<Array<IProductModel>>('/api/products');
  };
  getProduct = (productId: number) => {
    return this.httpClient.get<IProductModel>(`/api/products/${productId}`);
  };
  addProduct = (product: IProductModel) => {
    return this.httpClient.post<IProductModel>(`/api/products`, product);
  };
  updateProduct = (product: IProductModel) => {
    return this.httpClient.put<IProductModel>(
      `/api/products/${product!.id}`,
      product
    );
  };
  deleteProduct = (productId: number) => {
    return this.httpClient.delete<IProductModel>(`/api/products/${productId}`);
  };
  getCategories = () => {
    return this.httpClient.get<Array<string>>(`/api/products/categories`);
  };
  getCategoryProducts = (category: string) => {
    return this.httpClient.get<Array<string>>(
      `/api/products/category/${category}`
    );
  };
}
