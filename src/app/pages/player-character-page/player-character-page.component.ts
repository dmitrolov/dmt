import {Component, OnInit} from '@angular/core';
import {PlayerCharacter} from './playerCharacter';
import {FirebaseService} from '../../core/firebase/firebase.service';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';


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
    const currentUserId = this.route.snapshot.paramMap.get('id');
    this.firebaseService.getPlayerCharacterById(currentUserId)
      .then((data) => {
        this.currentUser = data.stats;
      })
      .then(() => {
        console.log('THIS USER', this.currentUser);
      });
  }
}
