import { AbstractFactory } from '../interface/AbstractFactory';
import { BloqueInterrogante } from '../interface/BloqueInterrogante';
import { Moneda } from '../interface/Moneda';
import { GameBoyBloqueInterrogante } from '../models/GameBoyBloqueInterrogante';
import { GameBoyMoneda } from '../models/GameBoyMoneda';

export class GameBoyItemFactory implements AbstractFactory {
	createMoneda(): Moneda {
		return new GameBoyMoneda();
	}
	createBloqueInterrogante(): BloqueInterrogante {
		return new GameBoyBloqueInterrogante();
	}
}
