import {Component, OnInit} from '@angular/core';
import {PlayerCharacter} from './playerCharacter';
import {FirebaseService} from '../../core/firebase/firebase.service';

import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-player-character-page',
  templateUrl: './player-character-page.component.html',
  styleUrls: ['./player-character-page.component.scss'],
})
export class PlayerCharacterPageComponent implements OnInit {
  private currentUser: PlayerCharacter = new PlayerCharacter();
  private menuOptions = {
    currentTab: 'stats',
    menuItems: [
      {tab: 'stats',      src: 'assets/img/character-page/stats.png',     alt: 'menu image'},
      {tab: 'inventory',  src: 'assets/img/character-page/inventory.png', alt: 'menu image'},
      {tab: 'skills',     src: 'assets/img/character-page/magic.png',     alt: 'menu image'},
      {tab: 'diary',      src: 'assets/img/character-page/localMap.png',  alt: 'menu image'},
      {tab: 'combat',     src: 'assets/img/character-page/combat.png',    alt: 'menu image'}
      ]
  };
  constructor(private firebaseService: FirebaseService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.url
      .subscribe((url) => {
        const currentUserId = url[url.length - 1].path;
        this.firebaseService.subscribeOnCharacterChanges(currentUserId)
          .onSnapshot((character) => {
            console.log(character.data().stats);
            this.currentUser = character.data().stats;
          });
        console.log(this.firebaseService.subscribeOnCharacterChangesTest(currentUserId));
      });
  }
}
