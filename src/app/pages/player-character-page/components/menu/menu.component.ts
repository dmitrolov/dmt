import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() menuOptions: MenuOptions;
  constructor() { }

  ngOnInit() {
  }

}
interface MenuOptions {
  currentTab: string;
  menuItems: {tab: string, src: string, alt: string}[];
}
