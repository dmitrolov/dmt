import {Item} from './item.model';
import {Damage} from '../../mechanics/damage.model';

export interface Weapon extends Item {
  attack: {
    melee: Damage;
    range: Damage;
  };
}
