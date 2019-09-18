import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterGeneratorComponent } from './character-generator.component';

const routes: Routes = [{ path: '', component: CharacterGeneratorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterGeneratorRoutingModule { }
