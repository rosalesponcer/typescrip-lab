import { Logger } from '../interface/Logger';

export class App {
    run(logger: Logger): void {
        for (let i = 0; i <= 5; i++) {
            logger.write(`${i}`.repeat(i))
        }
    }
}