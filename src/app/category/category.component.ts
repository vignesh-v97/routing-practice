import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories: any = [
    {
      index: '0',
      id: "men",
      name: "Men"
    },
    {
      index: '1',
      id: "women",
      name: "Women"
    },
    {
      index: '2',
      id: "children",
      name: "Children"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
