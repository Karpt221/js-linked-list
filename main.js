import { LinkedList } from "./LinkedList.js";

const list = new LinkedList();

 list.append("dog");
 list.append("cat");

list.prepend("New val");

list.insertAt('Hey', 4);

//list.append("Here");
list.removeAt(2);

console.log(list.toString());

