import fs from 'fs/promises';

let a = await fs.writeFile('a.txt','hello world');
let b = await fs.readFile('a.txt');


console.log(a)
console.log(b.toString())
