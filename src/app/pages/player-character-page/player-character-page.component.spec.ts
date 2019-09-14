import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerCharacterPageComponent } from './player-character-page.component';

describe('PlayerCharacterPageComponent', () => {
  let component: PlayerCharacterPageComponent;
  let fixture: ComponentFixture<PlayerCharacterPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerCharacterPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerCharacterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
