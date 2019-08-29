import {Component, OnInit} from '@angular/core';
import {PlayerCharacter} from './playerCharacter';
import {FirebaseService} from '../../core/firebase/firebase.service';

@Component({
  selector: 'app-player-character-page',
  templateUrl: './player-character-page.component.html',
  styleUrls: ['./player-character-page.component.scss'],
})
export class PlayerCharacterPageComponent implements OnInit {
  private currentUser: PlayerCharacter;

  constructor(private firebaseService: FirebaseService) {
  }

  ngOnInit() {

  }

  getFromSerer() {
    this.firebaseService.readPlayerCharacter();

    // const docRef = this.firebaseService.db.collection('cities').doc('SF');
    //
    // docRef.get().then(function(doc) {
    //   console.log(doc);
    //   if (doc.exists) {
    //     console.log('Document data:', doc.data());
    //   } else {
    //     // doc.data() will be undefined in this case
    //     console.log('No such document!');
    //   }
    // }).catch(function(error) {
    //   console.log('Error getting document:', error);
    // });


    // this.firebaseService.db.collection('users').get().then((querySnapshot) => {
    //   querySnapshot.forEach((doc) => {
    //     console.log('DOC', doc);
    //     console.log(`${doc.id} => ${doc.data()}`);
    //   });
    // });

  }

  sendToServer() {
    const characters =
      [
        {
          playerName: 'Оксана',
          characterName: 'Гремми',
          imageUrl: 'https://vignette.wikia.nocookie.net/wow/images/1/18/ChromieTCG.JPG/revision/latest?cb=20140219143258&path-prefix=ru'
        },
        {
          playerName: 'Алексей',
          characterName: 'Рован',
          imageUrl: 'https://i.ytimg.com/vi/FR9e0V38yCc/maxresdefault.jpg=ru'
        },
        {
          playerName: 'Диана',
          characterName: 'Скарлет',
          imageUrl: 'https://i.pinimg.com/736x/95/c3/4a/95c34ac14d98c4a16740b3e9d2eb0e01.jpg'
        }
      ];
    characters.forEach((character) => {
      this.firebaseService.writePlayerCharacter(character);
    });

  }

  //   this.firebaseService.db.collection('users')
  //     .doc('user')
  //     .add({
  //     id: 'sdf',
  //     first: 'Ada',
  //     last: 'Lovelace',
  //     born: 1815
  //   })
  //     .then((docRef) => {
  //       console.log('Document written with ID: ', docRef.id);
  //     })
  //     .catch((error) => {
  //       console.error('Error adding document: ', error);
  //     });
  //
  // }
}
