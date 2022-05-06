import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DialogService } from '../dialog/dialog.service';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.scss']
})
export class ProductPreviewComponent implements OnInit {
  previewCategoryName: any;

  constructor(private dialogService: DialogService) { }

  ngOnInit(): void {
    let action = new URLSearchParams(window.location.search).get('product');
    this.previewCategoryName = action;
  }

  trigger(res: string) {
    this.dialogService.openModal({
      data: this.previewCategoryName
    });
  }
}
