import {Adventure} from '../adventure/adventure.model';

export interface User {
  email: string;
  login: string;
  imageUrl: string;

  adventures: Adventure[];
}
