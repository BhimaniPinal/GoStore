export interface IUserModel {
  id: number;
  email: string;
  username: string;
  password: string;
  name: IUserNameModel;
  address: IUserAddressModel;
  phone: string;
}

export interface IUserNameModel {
  firstname: string;
  lastname: string;
}

export interface IUserAddressModel {
  city: string;
  street: string;
  number: 3;
  zipcode: string;
}
