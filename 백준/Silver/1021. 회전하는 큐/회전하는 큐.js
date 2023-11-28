const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

let [N,M] = input[0].split(' ').map(v => +v)
let arrM = input[1].split(' ').map(v => +v)



class Node{
  constructor(data){
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class Queue{
  constructor(){
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  add(data){
    let node = new Node(data)
    
    if(this.head===null){

      this.head = node;
      
      } else {

      this.tail.next = node
      node.prev = this.tail;
    }
    this.tail = node;
    this.size++
  }



  moveLeft(){
  
    let temp = this.head;
    this.head  = this.head.next
    if(this.head===null) this.head.prev = null

    this.tail.next = temp
    temp.prev =this.tail
    this.tail = temp
  
  
  }

  moveRight(){

    let temp = this.tail
    this.tail = this.tail.prev;
    this.tail.next = null

    temp.next = this.head
    if(this.head!==null)this.head.prev=temp;
    this.head = temp;
    
  }

  printAll(){
    let arr = []

    let cur = this.head;

    while(cur){
      arr.push(cur.data)
      cur = cur.next
    }

    return arr
  }
  
  pop(){
    let word = this.head;

    this.head = this.head.next
    this.size--;
    return word.data
  }

  printFront(){
    return this.head.data
  }

  printBack(){
    return this.tail.data
  }

  find(data){
    let left = 0;

    let cur = this.head

    while(cur){
      if(cur.data==data){
        break; 
       } else {
         left++
       }
      cur = cur.next
    }
    let right = this.size-left
    return left>right?"right":"left"
  }
}
let q = new Queue()

for(let i = 1 ; i<=N ; i++){
  q.add(i)
}

let cnt = 0;
for(let i = 0 ; i<arrM.length ; i++){
  
  while(arrM[i]!==q.printFront()){
      q.find(arrM[i])==="right"?q.moveRight():q.moveLeft()
      cnt++
    }
  q.pop();

}
console.log(cnt)

