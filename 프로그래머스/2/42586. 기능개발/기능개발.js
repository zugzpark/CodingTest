function solution(progresses, speeds) {
    let temp = [];
    let answer = []
    let day = 0;
    let boolean = false;

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
            this.index = 0;
        }

        push(data){
            let node = new Node(data)

            if(this.isEmpty()==0){
                this.tail.next = node
                node.prev = this.tail;
            } else {
                this.head = node;
                this.head.next = null;
            }
            this.tail = node;
            this.size++;
        }

        pop(){
            if(this.isEmpty==1) reutrn -1;

            let popItem = this.head.data

            if(this.index>0 && boolean){    

                this.head.data += (speeds[this.index]*day)
                boolean = false;
            } else {
                this.head.data += speeds[this.index]
                    day++;
            } 


            if(this.head.data>=100){
                this.index++
                if(this.index>speeds.length)this.index=0;
                temp.push(day)
                this.head = this.head.next;
                this.size--;
                boolean = true;
            } else {
                boolean = false;
            }

            return popItem
        }

        isEmpty(){
            return this.size==0?1:0
        }

        len(){
            return this.size;
        }

        printAll(){
            let arr = [];
            let cur = this.head

            while(cur){
                arr.push(cur.data)
                cur = cur.next
            }
            return arr
        }
    }

    let q = new Queue();
    for(let i = 0 ; i<progresses.length ; i++){
        q.push(progresses[i])
    }

    while(q.isEmpty()!=1){

        q.pop()
    }
    
    let result = temp.reduce((acc,cur) =>{
        acc.set(cur, (acc.get(cur)||0) +1);
        return acc
    },new Map());

    for(let [key , value] of result.entries()){
        answer.push(value)
    }
    return answer;
}