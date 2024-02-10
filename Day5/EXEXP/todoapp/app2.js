export class TodoList{
    constructor (name,course,job){
        this.name
        this.course
        this.job
    }
    result(){
       console.log(`${this.name},${this.course},${this.job}`); 
    }
    
}
const john = new TodoList("John", 30);

// Accessing properties and calling methods
john.result()