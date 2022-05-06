import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationDialog } from './confirmation-dialog-component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  matDialogRef: MatDialogRef<ConfirmationDialog> | undefined;
  name: string = "";

  constructor(private matDialog: MatDialog) {}

  public openModal(data: any) {
    this.matDialogRef = this.matDialog.open(ConfirmationDialog, {
      data: { name: data },
      disableClose: true
    });

    this.matDialogRef.afterClosed().subscribe((res: boolean) => {
      if ((res == true)) {
        this.name = "";
      }
    });
  }
}
