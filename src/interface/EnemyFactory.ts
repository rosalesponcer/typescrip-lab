import { Enemy } from './Enemy';

export interface EnemyFactory {
	createEnemy(): Enemy;
}
