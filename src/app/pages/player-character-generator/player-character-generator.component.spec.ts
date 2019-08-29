import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerCharacterGeneratorComponent } from './player-character-generator.component';

describe('PlayerCharacterGeneratorComponent', () => {
  let component: PlayerCharacterGeneratorComponent;
  let fixture: ComponentFixture<PlayerCharacterGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerCharacterGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerCharacterGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
