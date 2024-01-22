
//! Stack


class stack{
    constructor(){
        this.arr=[]
    }
    push(val){
        return this.arr.push(val)
    }
    pop(){
        if(!this.isEmpty()){
            return this.arr.pop()
        }
        return null
    }
    isEmpty(){
        return this.arr.length===0
    }
}
//push and pop is the main methoud and lifo


//! Queue
class Queue {
    constructor() {
        this._storage = [];
    }
 
    enqueue(value) {
        this._storage.push(value);
    }
 
    dequeue() {
        if (!this.isEmpty()) {
            return this._storage.shift();
        }
        return null;
    }
 
    size() {
        return this._storage.length;
    }
 
    isEmpty() {
        return this._storage.length === 0;
    }
 }
//  here enqueue and dequeue are the main function and fifo