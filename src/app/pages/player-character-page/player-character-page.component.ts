import {Component, OnInit} from '@angular/core';
import {FirebaseService} from '../../core/firebase/firebase.service';

import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import * as CharacterActions from '../../store/characters/characters.actions';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Character} from '../../models/character/character.model';

@Component({
  selector: 'app-player-character-page',
  templateUrl: './player-character-page.component.html',
  styleUrls: ['./player-character-page.component.scss'],
})
export class PlayerCharacterPageComponent implements OnInit {
  private currentUser: Character;
  reduxCurrentUser: Observable<Character>;
  private menuOptions = {
    currentTab: 'stats',
    menuItems: [
      {tab: 'stats', src: 'assets/img/character-page/stats.png', alt: 'menu image'},
      {tab: 'equipment', src: 'assets/img/character-page/equipment.png', alt: 'menu image'},
      {tab: 'skills', src: 'assets/img/character-page/magic.png', alt: 'menu image'},
      {tab: 'diary', src: 'assets/img/character-page/localMap.png', alt: 'menu image'},
      {tab: 'combat', src: 'assets/img/character-page/combat.png', alt: 'menu image'}
    ]
  };

  constructor(
    private firebaseService: FirebaseService,
    private route: ActivatedRoute,
    private store: Store<Character>
  ) {}

  ngOnInit() {
    this.route.url
      .subscribe((url) => {
        const currentUserId = url[url.length - 1].path;
        this.firebaseService
          .getCharacterChanges(currentUserId)
          .subscribe((item: Character) => {
            this.currentUser = item;
            this.store.dispatch(new CharacterActions.SetCharacter(item));
          });
      });
  }
}
