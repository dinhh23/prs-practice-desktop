import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/menuitem/menuitem/menu.item.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: MenuItem[] = [
   new MenuItem("Home", "/home", "Home Page"),
   new MenuItem("User", "/users", "Users List"),
   new MenuItem("Vendor", "/vendors", "Vendors List"),
   new MenuItem("Product", "/products", "Products List"),
   new MenuItem("Request", "/requests", "Requests List"),
   new MenuItem("About", "/about", "About Page")
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
