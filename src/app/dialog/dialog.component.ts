import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationDialog } from './confirmation-dialog-component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  matDialogRef: MatDialogRef<ConfirmationDialog> | undefined;
  name: string = "";
  constructor(private matDialog: MatDialog) {}
  OpenModal() {
    this.matDialogRef = this.matDialog.open(ConfirmationDialog, {
      data: { name: this.name },
      disableClose: true
    });

    this.matDialogRef.afterClosed().subscribe((res: boolean) => {
      if ((res == true)) {
        this.name = "";
      }
    });
  }

  ngOnInit() {}
}
