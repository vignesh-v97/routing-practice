import { Component, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categoryList: any;

  productItems: any = [
        {
          id: "vesti",
          name: "Vesti",
          groupBy: "men"
        },
        {
          id: "shirt",
          name: "Shirt",
          groupBy: "men"
        },
        {
          id: "pants",
          name: "Pants",
          groupBy: "men"
        },
        {
          id: "saree",
          name: "Saree",
          groupBy: "women"
        },
        {
          id: "salwar",
          name: "Salwar",
          groupBy: "women"
        },
        {
          id: "tops",
          name: "Tops",
          groupBy: "women"
        },
        {
          id: "Toys",
          name: "Toys",
          groupBy: "children"
        },
        {
          id: "babyDresses",
          name: "Baby dresses",
          groupBy: "children"
        },
        {
          id: "remoteCars",
          name: "Remote Cars",
          groupBy: "children"
        },
  ];

  filterOptions: any = ["men", "women", "children"];
  
  constructor(route: ActivatedRoute) {
    route.queryParams.subscribe((params: any) => {
      this.categoryList = this.productItems.filter((res:any) => {
        return res.groupBy === params.category
      });
      if(this.categoryList.length == 0) {
        this.productItems.forEach((res:any) => {
          this.categoryList.push(res)
        });
      }
    })

  }

  ngOnInit(): void {
    
  }

}