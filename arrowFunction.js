const arr = [1, 2, 3, 4, 5, 8, 9];

//ANTES, sendo função anonima porque não definimos nome pra ela
const newArr = arr.map(function (item) {
    return item * 2;
})

//DEPOIS, diminuindo porque é função anonima
//const newArr = arr.map(item => item * 2);
//como o return é apenas uma linha podemos deixar assim, caso não seja temos que colocar entre chaves

console.log(newArr);

//ANTES, variavel com função anonima normal
const teste = function () {
    return 2;
    //ou assim se for um metodo
    return {nome: 'Lhuan'}
}

//DEPOIS, variavel com função anonima encurtada
const teste1 = () => 2

//agora quando o return for um método vamos fazer assim, temos que usar os parentes antes das chaves
const teste2 = () => ({ nome: 'Lhuan' })

console.log(teste())
console.log(teste1())
console.log(teste2())