const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

let [N , K] = input.join(' ').split(' ').map(v => +v)

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
      this.tail = node;
    } else {
      
      this.tail.next = node
      node.prev = this.tail
      this.tail = node;
      this.tail.next = this.head
      this.head.prev = this.tail
      
    }
    
    this.size++
  }
  
  findAndPop(K){
    if(this.head===null) return
    if(this.size===1) {
      this.size--
      return this.head.data
    }
    let curr = this.head
    let popItem = null
    let idx = 1
    

    while(idx<=K){
      //console.log(`${idx} ${K} ${curr.data}`)
      if(idx==K){
        //console.log(`prev = ${curr.prev.data}  del = ${curr.data}    next = ${curr.next.data}   next.next = ${curr.next.next.data}`)
        popItem = curr
    
        let temp = curr.next
        
        curr.prev.next = temp
        temp.prev = curr.prev
        
        this.head = temp
        this.tail = temp.prev
        
        this.size--;
        //console.log(`head => ${this.head.data}    tail => ${this.tail.data}    roop tf? => ${this.tail.next.data}`)
        break;
      }
      curr = curr.next
      idx++
      
    }
    return popItem.data
  }

  len(){
    return this.size
  }

  printAll(){
    if(this.size==0) return 0
    let curr = this.head
    let arr = []

    do{
      arr.push(curr.data)
      curr = curr.next
    }while(curr!=this.head)
    
    return arr
  }
}

let q = new Queue()

for(let i = 1; i<=N ; i++){
  q.add(i)  
}

let answer = []

// console.log(q.printAll())
// console.log(q.findAndPop(K))

while(q.len()!=0){
  answer.push(q.findAndPop(K))
  
}

console.log(`<${answer.join(', ')}>`)

