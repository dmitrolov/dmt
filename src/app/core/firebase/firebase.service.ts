import {Injectable} from '@angular/core';
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';

// // Add the Firebase products that you want to use
// import 'firebase/auth';
import 'firebase/firestore';
import {PlayerCharacter} from '../../pages/player-character-page/playerCharacter';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private firebaseConfig = {
    apiKey: 'AIzaSyCBJLGUwm3Gudef3OmMpTr4_kuAKojdHKI',
    authDomain: 'dnd-master-tools.firebaseapp.com',
    databaseURL: 'https://dnd-master-tools.firebaseio.com',
    projectId: 'dnd-master-tools',
    storageBucket: '',
    messagingSenderId: '338033505662',
    appId: '1:338033505662:web:ded866bbf17722c7'
  };
  public db;

  constructor() {
    firebase.initializeApp(this.firebaseConfig);
    this.db = firebase.firestore();
  }

  writePlayerCharacter(character: PlayerCharacter) {
    this.db
      .collection('playerCharacters')
      .doc(`${character.playerName}_${character.characterName}`)
      .set({
        stats: character
      })
      .then(() => {
        console.log('Document successfully written!');
      })
      .catch((error) => {
        console.error('Error writing document: ', error);
      });
  }

  readPlayerCharacter() {
    this.db
      .collection('playerCharacters')
      // .where('gettable', '==', true)
      .get()
      .then((characters) => {
        characters.forEach((character) => {
          console.log(character.id, ' => ', character.data());
        });
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });
  }
}
