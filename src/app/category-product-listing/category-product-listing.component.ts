import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
    private router: ActivatedRoute
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
}