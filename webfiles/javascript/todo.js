let input = prompt('Enter your Todo List');
const todos = ['collect eggs', 'read a book', 'walk the dog'];
while(input !=='quit'&& input !== 'q'){
    if(input === 'list'){
        console.log('************');
        for(let i = 0; i < todos.length; i++){
            console.log(`${i}. ${todos[i]}`);
        }
        console.log('************');
    }else if(input === 'new'){
        let newTodo = prompt('Okay! what is ur new todo');
        todos.push(newTodo);  
        console.log(`Added ${newTodo} to your todo list`)     
    } else if(input === 'delete'){
        let index = prompt('Enter the index of the todo you want to delete');
        todos.splice(index, 1);
        console.log(`Deleted ${todos[index]} from your todo list`)
    }
    input = prompt('What would you like to do?');
}
console.log('Ok, You Quit');

