import { InjectionToken } from '@angular/core';
import { IAppConfig } from '../models/app-config';
import { environment } from './../environments/environment.local';

export const APP_SERIVCE_CONFIG = new InjectionToken<IAppConfig>(
  'proxy.config'
);
export const APP_CONFIG: IAppConfig = {
  apiEndPoint: environment.apiEndpoint,
};
