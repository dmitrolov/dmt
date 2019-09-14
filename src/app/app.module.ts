import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {characterReducer} from './store/characters/characters.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {AppComponent} from './app.component';
import {PlayerCharacterGeneratorComponent} from './pages/player-character-generator/player-character-generator.component';
import {PlayerCharacterPageComponent} from './pages/player-character-page/player-character-page.component';
import { HeaderComponent } from './components/header/header.component';
import { ImageComponent } from './components/image/image.component';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';
import { StatsComponent } from './pages/player-character-page/components/stats/stats.component';
import { InventoryComponent } from './pages/player-character-page/components/inventory/inventory.component';
import { DiaryComponent } from './pages/player-character-page/components/diary/diary.component';
import { SkillsComponent } from './pages/player-character-page/components/skills/skills.component';
import { GeneralInfoComponent } from './pages/player-character-page/components/stats/components/general-info/general-info.component';
import { AttributesComponent } from './pages/player-character-page/components/stats/components/attributes/attributes.component';
import { ProficiencyComponent } from './pages/player-character-page/components/stats/components/proficiency/proficiency.component';
import { DescriptionComponent } from './pages/player-character-page/components/stats/components/description/description.component';
import { MenuComponent } from './pages/player-character-page/components/menu/menu.component';
import { PickRaceComponent } from './pages/player-character-generator/components/pick-race/pick-race.component';
import { PickClassComponent } from './pages/player-character-generator/components/pick-class/pick-class.component';
import { PickBackgroundComponent } from './pages/player-character-generator/components/pick-background/pick-background.component';
import { MainInfoComponent } from './pages/player-character-generator/components/main-info/main-info.component';
// tslint:disable-next-line:max-line-length
import { CharacterGeneratorSelectComponent } from './pages/player-character-generator/components/character-generator-select/character-generator-select.component';

const appRoutes: Routes = [
  {
    path: 'player-character-generator',
    component: PlayerCharacterGeneratorComponent,
  },
  {
    path: 'player-character/:id',
    component: PlayerCharacterPageComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    PlayerCharacterGeneratorComponent,
    PlayerCharacterPageComponent,
    HeaderComponent,
    ImageComponent,
    InputComponent,
    SelectComponent,
    StatsComponent,
    InventoryComponent,
    DiaryComponent,
    SkillsComponent,
    GeneralInfoComponent,
    AttributesComponent,
    ProficiencyComponent,
    DescriptionComponent,
    MenuComponent,
    PickRaceComponent,
    PickClassComponent,
    PickBackgroundComponent,
    MainInfoComponent,
    CharacterGeneratorSelectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
    ),
    StoreModule.forRoot({
      character: characterReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
