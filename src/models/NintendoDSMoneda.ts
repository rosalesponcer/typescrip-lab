import { Moneda } from '../interface/Moneda';

export class NintendoDsMoneda implements Moneda {
	getMoneda(): string {
		return 'NintendoDsMoneda';
	}
}
