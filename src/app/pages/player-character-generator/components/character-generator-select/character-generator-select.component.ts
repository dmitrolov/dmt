import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-character-generator-select',
  templateUrl: './character-generator-select.component.html',
  styleUrls: ['./character-generator-select.component.scss']
})
export class CharacterGeneratorSelectComponent implements OnInit {
  @Input() title;
  @Input() options;
  @Input() switchingAttribute;
  @Output() outputValue = new EventEmitter<boolean>();

  ngOnInit() {
  }

  onChange() {
    this.outputValue.emit(this.switchingAttribute);
  }
}
