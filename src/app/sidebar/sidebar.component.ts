import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  navList: { name: string, path: string }[] = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'Category',
      path: '/categories'
    },
    {
      name: 'Accounts',
      path: '/accounts'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
