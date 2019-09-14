import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterGeneratorSelectComponent } from './character-generator-select.component';

describe('CharacterGeneratorSelectComponent', () => {
  let component: CharacterGeneratorSelectComponent;
  let fixture: ComponentFixture<CharacterGeneratorSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterGeneratorSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterGeneratorSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
