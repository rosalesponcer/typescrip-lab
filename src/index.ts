import { App } from './class/App';
import { ConsoleLogger } from './class/ConsoleLogger';
import { FileLogger } from './class/FileLogger';


// const logger = new FileLogger('C:/Users/Renzo/Documents/Proyectos/typescript-lab/test.txt');
const logger = new ConsoleLogger();

new App().run(logger)