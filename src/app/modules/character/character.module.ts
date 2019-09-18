import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatSortModule, MatTableModule} from '@angular/material';

import { CharacterRoutingModule } from './character-routing.module';
import { CharacterComponent } from './character.component';
import {SearchPipe} from './components/inventory/pipe/search.pipe';
import {InventoryComponent} from './components/inventory/inventory.component';
import {GeneralInfoComponent} from './components/stats/components/general-info/general-info.component';
import {StatsComponent} from './components/stats/stats.component';
import {SkillsComponent} from './components/skills/skills.component';
import {MenuComponent} from './components/menu/menu.component';
import {DiaryComponent} from './components/diary/diary.component';
import {AttributesComponent} from './components/stats/components/attributes/attributes.component';
import {DescriptionComponent} from './components/stats/components/description/description.component';
import {ProficiencyComponent} from './components/stats/components/proficiency/proficiency.component';

@NgModule({
  declarations: [
    CharacterComponent,
    StatsComponent,
    InventoryComponent,
    DiaryComponent,
    SkillsComponent,
    GeneralInfoComponent,
    AttributesComponent,
    ProficiencyComponent,
    DescriptionComponent,
    MenuComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    FormsModule,
    MatTableModule,
    MatSortModule
  ],
  exports: [
    CharacterComponent
  ]
})
export class CharacterModule { }
