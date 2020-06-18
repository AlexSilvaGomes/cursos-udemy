class List{
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}


class TodoList extends List{

    constructor(){
        super();
        this.usuario = "Alex";
    }

    addTodo(data){
        this.add(data);        
    }    
}

const MinhaLista = new TodoList();

document.getElementById("novotodo").onclick = function () {
    MinhaLista.addTodo("novo");
}