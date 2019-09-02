import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @Input() imageClassName: string;
  @Input() imageUrl: string;
  @Input() imageAlt: string;

  constructor() {

  }

  ngOnInit() {
  }

}
