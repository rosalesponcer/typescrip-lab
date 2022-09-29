import { Logger } from '../interface/Logger';

export class ConsoleLogger implements Logger {
    write(message: string): void {
        console.log(message);
    }

}