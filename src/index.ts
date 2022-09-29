import { GameBoyItemFactory } from './class/GameBoyItemFactory';
import { NintendoDsItemFactory } from './class/NintendoDSItemFactory';

// const gameFactory = new GameBoyItemFactory();

const gameFactory = new NintendoDsItemFactory();

const moneda = gameFactory.createMoneda();
const bloqueInterrogante = gameFactory.createBloqueInterrogante();

console.log(moneda.getMoneda());
console.log(bloqueInterrogante.getBloqueInterrogante());