import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {Reducer} from './reducers/reducer';

import {AppComponent} from './app.component';
import {PlayerCharacterGeneratorComponent} from './pages/player-character-generator/player-character-generator.component';
import {PlayerCharacterPageComponent} from './pages/player-character-page/player-character-page.component';
import { HeaderComponent } from './header/header.component';
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
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
    ),
    StoreModule.forRoot({message: Reducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
