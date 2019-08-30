import {Component, OnInit} from '@angular/core';
import {PlayerCharacter} from './playerCharacter';
import {FirebaseService} from '../../core/firebase/firebase.service';

import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/operators';


@Component({
  selector: 'app-player-character-page',
  templateUrl: './player-character-page.component.html',
  styleUrls: ['./player-character-page.component.scss'],
})
export class PlayerCharacterPageComponent implements OnInit {
  private currentUser: PlayerCharacter = {
    playerName: 'untitled',
    characterName: 'untitled',
    imageUrl: 'assets/img/default-user-icon-4.jpg',
  };

  constructor(private firebaseService: FirebaseService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.url
      .subscribe((url) => {
        const currentUserId = url[url.length - 1].path;
        this.firebaseService.subscribeOnCharacterChanges(currentUserId)
          .onSnapshot((character) => {
            this.currentUser = character.data().stats;
          });
      });
  }
}
