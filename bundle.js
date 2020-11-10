"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
var Matematica = /*#__PURE__*/function () {
  function Matematica() {
    _classCallCheck(this, Matematica);
  }

  _createClass(Matematica, null, [{
    key: "soma",
    value: function soma(a, b) {
      //quando temos o uma classe static, ela não enxerga o que está foda dela
      //ele só funciona para gente passar informação pra ele e ele nos dá um retorno, não precisamos de construtor
      return a + b;
    }
  }]);

  return Matematica;
}();

console.log(Matematica.soma(2, 8));
