import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() id: string;
  @Input() class: string;
  @Input() labelValue: string;
  @Input() options: {value: string | number, text: string}[];
  constructor() {}

  ngOnInit() {
  }

}
