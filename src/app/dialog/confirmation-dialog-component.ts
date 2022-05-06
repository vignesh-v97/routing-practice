import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'confirmation-dialog',
  templateUrl: 'confirmation-dialog.html',
})
export class ConfirmationDialog {
  constructor(
    private _mdr: MatDialogRef<ConfirmationDialog>,
    @Inject(MAT_DIALOG_DATA) data: string
  ) {
  }
  CloseDialog() {
    this._mdr.close(false)
  }

}