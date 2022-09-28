import { ENEMY_LIST } from '../constants/ENEMY_LIST';
import { Enemy } from '../interface/Enemy';
import { EnemyFactory } from '../interface/EnemyFactory';
import { getRandomInt } from '../utils/utils';

export class RandomEnemyFactory implements EnemyFactory {
	createEnemy(): Enemy {
		const number = getRandomInt(0, 4);

		const enemy = ENEMY_LIST.get(number);

		return enemy ?? (ENEMY_LIST.get(1) as Enemy);
	}
}
