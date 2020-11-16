import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from './menu.item.class';

@Component({
  selector: 'app-menuitem',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.css']
})
export class MenuitemComponent implements OnInit {

@Input() menu: MenuItem;

  constructor() { }

  ngOnInit(): void {
  }

}
