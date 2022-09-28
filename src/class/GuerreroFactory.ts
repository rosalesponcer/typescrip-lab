import { ENEMY_LIST } from '../constants/ENEMY_LIST';
import { Enemy } from '../interface/Enemy';
import { EnemyFactory } from '../interface/EnemyFactory';

export class GuerreroFactory implements EnemyFactory {
	createEnemy(): Enemy {
		return ENEMY_LIST.get(1) as Enemy;
	}
}
