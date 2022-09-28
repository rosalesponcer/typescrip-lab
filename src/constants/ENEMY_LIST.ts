import { Enemy } from '../interface/Enemy';

export const ENEMY_LIST = new Map<number, Enemy>([
	[1, { hp: 1000, name: 'Guerrero', type: 'mele' }],
	[2, { hp: 500, name: 'Arquero', type: 'distancia' }],
	[3, { hp: 4500, name: 'Caballero', type: 'mele' }],
]);
