import { LinkedList } from './LinkedList.js';

const list = new LinkedList();

list.append('dog');
list.append('cat');
console.log(list.toString());
list.prepend('New val');
console.log(list.toString());
//list.pop();
//console.log(list.toString());
list.insertAt('Hey', 1);
console.log(list.toString());

list.removeAt(12);

console.log(list.toString());
