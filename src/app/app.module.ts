import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {PlayerCharacterGeneratorComponent} from './pages/player-character-generator/player-character-generator.component';
import {PlayerCharacterPageComponent} from './pages/player-character-page/player-character-page.component';
import { HeaderComponent } from './header/header.component';
import { ImageComponent } from './components/image/image.component';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';

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
    SelectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
