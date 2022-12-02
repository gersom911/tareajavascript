import { multi, suma} from "./modulo/controller.js"; 

import chalk from 'chalk';

const suma1 = suma(1, 2) 
const suma2 = suma(4,5)
const multiplicar = multi(suma1,suma2)


console.log(chalk.green(multiplicar))


