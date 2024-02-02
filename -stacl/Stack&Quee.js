
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
