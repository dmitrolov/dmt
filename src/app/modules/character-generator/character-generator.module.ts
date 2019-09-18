import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { CharacterGeneratorRoutingModule } from './character-generator-routing.module';
import { CharacterGeneratorComponent } from './character-generator.component';
import {PickRaceComponent} from './components/pick-race/pick-race.component';
import {PickClassComponent} from './components/pick-class/pick-class.component';
import {PickBackgroundComponent} from './components/pick-background/pick-background.component';
import {MainInfoComponent} from './components/main-info/main-info.component';
import {CharacterGeneratorSelectComponent} from './components/character-generator-select/character-generator-select.component';

@NgModule({
  declarations: [
    CharacterGeneratorComponent,
    PickRaceComponent,
    PickClassComponent,
    PickBackgroundComponent,
    MainInfoComponent,
    CharacterGeneratorSelectComponent,
  ],
  imports: [
    CommonModule,
    CharacterGeneratorRoutingModule,
    FormsModule
  ],
  exports: [
    CharacterGeneratorComponent
  ]
})
export class CharacterGeneratorModule { }
