import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PopUpService } from '../pop-up/pop-up.service';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.scss']
})
export class ProductPreviewComponent implements OnInit {
  previewCategoryName: any;

  constructor(private popUpService: PopUpService) { }

  ngOnInit(): void {
    let action = new URLSearchParams(window.location.search).get('product');
    this.previewCategoryName = action;
  }

}
