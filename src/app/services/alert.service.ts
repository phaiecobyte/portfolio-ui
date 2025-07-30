import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor(private notification: NzNotificationService) {}

  showSuccess(): void {
    this.notification.success('Success', 'Operation completed successfully!', {
      nzPlacement: 'topRight', // ✅ topRight | topLeft | bottomLeft | bottomRight
      nzDuration: 3000 // Optional: time in milliseconds
    });
  }

    loginSuccess(): void {
    this.notification.success('Success', 'Login Successfully!', {
      nzPlacement: 'topRight', // ✅ topRight | topLeft | bottomLeft | bottomRight
      nzDuration: 3000 // Optional: time in milliseconds
    });
  }

  showError(): void {
    this.notification.error('Error', 'Something went wrong!', {
      nzPlacement: 'bottomRight'
    });
  }

  showInfo(): void {
    this.notification.info('Info', 'Just letting you know.', {
      nzPlacement: 'topRight'
    });
  }

  showWarning(): void {
    this.notification.warning('Warning', 'This is a warning.', {
      nzPlacement: 'topRight'
    });
  }
}
