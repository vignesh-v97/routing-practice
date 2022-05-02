import { Component, OnInit } from '@angular/core';
import { MatDialog, } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
// import { VERSION, MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { ConfirmationDialog } from '../dialog/confirmation-dialog-component';


@Component({
  selector: 'app-category-product-listing',
  templateUrl: './category-product-listing.component.html',
  styleUrls: ['./category-product-listing.component.scss']
})
export class CategoryProductListingComponent implements OnInit {
  productIndex: any;
  productCategoryValue: any;

  productItems: any = [
    {
      men:  [
        {
          id: "vesti",
          name: "Vesti"
        },
        {
          id: "shirt",
          name: "Shirt"
        },
        {
          id: "pants",
          name: "Pants"
        },
      ]
    },
    {
      women:  [
        {
          id: "saree",
          name: "Saree"
        },
        {
          id: "salwar",
          name: "Salwar"
        },
        {
          id: "tops",
          name: "Tops"
        },
      ]
    },
    {
      children: [
        {
          id: "Toys",
          name: "Toys"
        },
        {
          id: "babyDresses",
          name: "Baby dresses"
        },
        {
          id: "remoteCars",
          name: "Remote Cars"
        },
      ]
    }
  ];
  constructor(
    private router: ActivatedRoute,
    private dialog: MatDialog,
    // private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    // this.productCategoryValue = this.router.snapshot.paramMap.get('id');
    this.router.queryParams.subscribe(params => {
      this.productIndex = params['index']
    })

    this.router.paramMap.subscribe(params => {
      this.productCategoryValue = params.get("id")
    })
  }

  // openDialog() {
  //   const dialogRef = this.dialog.open(ConfirmationDialog,{
  //     data:{
  //       message: 'Are you sure want to delete?',
  //       buttonText: {
  //         ok: 'Save',
  //         cancel: 'No'
  //       }
  //     }
  //   });
  //   const snack = this.snackBar.open('Snack bar open before dialog');

  //   dialogRef.afterClosed().subscribe((confirmed: boolean) => {
  //     if (confirmed) {
  //       snack.dismiss();
  //       const a = document.createElement('a');
  //       a.click();
  //       a.remove();
  //       snack.dismiss();
  //       this.snackBar.open('Closing snack bar in a few seconds', 'Fechar', {
  //         duration: 2000,
  //       });
  //     }
  //   });
  // }
}
