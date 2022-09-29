import { AbstractFactory } from '../interface/AbstractFactory';
import { BloqueInterrogante } from '../interface/BloqueInterrogante';
import { Moneda } from '../interface/Moneda';
import { NintendoDsBloqueInterrogante } from '../models/NintendoDSBloqueInterrogante';
import { NintendoDsMoneda } from '../models/NintendoDSMoneda';

export class NintendoDsItemFactory implements AbstractFactory {
	createMoneda(): Moneda {
		return new NintendoDsMoneda();
	}
	createBloqueInterrogante(): BloqueInterrogante {
		return new NintendoDsBloqueInterrogante();
	}
}
