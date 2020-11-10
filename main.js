/*class List {
    constructor() {
        this.data = []
    }

    add(data) {
        this.data.push(data)
        console.log(this.data)
    }
}

class TodoList extends List {
    constructor() {
        super();

        this.usuario = 'Diego'
    }

    mostraUsuario() {
        console.log(this.usuario)
    }
}

var MinhaLista = new TodoList();

document.getElementById('novoTodo').onclick = function() {
    MinhaLista.add('novo todo');
}

MinhaLista.mostraUsuario();*/

class Matematica {

    static soma(a, b) { //quando temos o uma classe static, ela não enxerga o que está foda dela
        //ele só funciona para gente passar informação pra ele e ele nos dá um retorno, não precisamos de construtor
        return a + b;
    }
}

console.log(Matematica.soma(2, 8));