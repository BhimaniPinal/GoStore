import { Injectable, ErrorHandler } from '@angular/core';
import { AzureMonitoringService } from './logging.service';

@Injectable()
export class ErrorHandlerService extends ErrorHandler {
  constructor(private azureMonitoringService: AzureMonitoringService) {
    super();
  }

  override handleError(error: Error) {
    this.azureMonitoringService.logException(error); // Manually log exception
  }
}
