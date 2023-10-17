import { IUserModel } from 'models/user';

export const loadStorage = () => {
  try {
    const serializedStore = localStorage.getItem('user');

    if (serializedStore === null) {
      return null;
    } else {
      return JSON.parse(serializedStore);
    }
  } catch (error) {
    // console.log('Error While Getting LocalStorage State!!!');
  }
};

export const saveStorage = (user: IUserModel) => {
  try {
    const serializedState = JSON.stringify(user);
    return localStorage.setItem('user', serializedState);
  } catch (error) {
    // console.log('Error While Saving LocalStorage State!!!');
  }
};
