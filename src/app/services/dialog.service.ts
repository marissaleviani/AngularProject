// dialog.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private dialogState = new Subject<boolean>();

  showDialog() {
    this.dialogState.next(true);
  }

  hideDialog() {
    this.dialogState.next(false);
  }

  getDialogState() {
    return this.dialogState.asObservable();
  }
}
