import { BloqueInterrogante } from './BloqueInterrogante';
import { Moneda } from './Moneda';

export interface AbstractFactory {
	createMoneda(): Moneda;
	createBloqueInterrogante(): BloqueInterrogante;
}
