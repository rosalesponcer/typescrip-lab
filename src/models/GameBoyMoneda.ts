import { Moneda } from '../interface/Moneda';

export class GameBoyMoneda implements Moneda {
	getMoneda(): string {
		return 'GameBoyMoneda';
	}
}
