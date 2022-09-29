import { Logger } from '../interface/Logger';
import fs from 'fs'

export class FileLogger implements Logger {
    private filePath: string;

    constructor(filepath: string) {
        this.filePath = filepath;
    }

    write(message: string): void {
        fs.appendFileSync(this.filePath, message);
    }
}