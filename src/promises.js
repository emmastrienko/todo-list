const todolist = require('./todolist')

getAllTodos = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
          if(todolist) {
            resolve(todolist)
          } else {
            reject("No data")
          }
        }, 2000)
        }) 
    
}


createTodo = (todo) => {
   return new Promise((resolve,reject)=>{
      if(todo) {
        todolist.push(todo)
        resolve(todo)
      } else {
        reject("No data to be added")
      }
   })
}

module.exports ={
    createTodo,getAllTodos
}