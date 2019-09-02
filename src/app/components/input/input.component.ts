import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() options: {
    id: string,
    className: string,
    type: string,
    label: string,
    placeholder: string
  };
  constructor() { }

  ngOnInit() {
  }

}
