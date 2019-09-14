import {Item} from './item.model';
import {Damage} from '../../gameMechanics/damage.model';

export interface Weapon extends Item {
  attack: {
    melee: Damage;
    range: Damage;
  };
}
