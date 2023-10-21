import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { IAppConfig } from 'models/app-config';
import { APP_SERIVCE_CONFIG } from 'utils/appconfig.service';
import { IUserModel } from 'models/user';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    @Inject(APP_SERIVCE_CONFIG) private config: IAppConfig,
    private httpClient: HttpClient
  ) {}

  getPhotoes$ = this.httpClient
    .get(`https://jsonplaceholder.typicode.com/photos`)
    .pipe(shareReplay(1));

  getPhotos = () => {
    return this.httpClient.get(`https://jsonplaceholder.typicode.com/photos`);
  };
  getUsers = () => {
    return this.httpClient.get<Array<IUserModel>>('/api/users');
  };
  getUser = (userId: number) => {
    return this.httpClient.get<IUserModel>(`/api/users/${userId}`);
  };
  addUser = (user: IUserModel) => {
    return this.httpClient.post<IUserModel>(`/api/users`, user);
  };
  updateUser = (user: IUserModel) => {
    return this.httpClient.put<IUserModel>(`/api/users`, user);
  };
  deleteUser = (userId: number) => {
    return this.httpClient.delete<IUserModel>(`/api/users/${userId}`);
  };
}
