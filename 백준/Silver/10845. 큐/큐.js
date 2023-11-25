const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');


input.shift()

class Node{
  constructor(data){
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}


class Queue{
  constructor(){
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty(){
    return this.size==0?1:0
  }
  push(data){
    let node = new Node(data)

    if(this.isEmpty()==0){

      this.tail.next = node;     

    } else {

      this.head = node;
      this.head.next = null;

    }
    this.tail = node
    this.size++
  }

  pop(){
    if(this.isEmpty()==1) return -1
    
    let popItem = this.head;
    this.head = this.head.next;

    this.size--;
    return popItem.data;
  }

  printFront(){
    return this.isEmpty()==0?this.head.data:-1
  }

  printBack(){
    return this.isEmpty()==0?this.tail.data:-1
  }

  len(){
    return this.size
  }
}

let q = new Queue();
let str = []
for(let i = 0; i<input.length; i++){
  let [word,n] = input[i].split(' ')
  
  switch(word){
    case "push" : q.push(n); break;
    case "pop"  : str.push(q.pop()); break;
    case "size" : str.push(q.len()); break;
    case "empty": str.push(q.isEmpty()); break;
    case "front": str.push(q.printFront()); break;
    case "back" : str.push(q.printBack()); break;
  }
}

console.log(str.join('\n'))