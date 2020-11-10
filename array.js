const arr = [1, 2, 3, 4, 5, 8, 9];

const map = arr.map(function(item) { //pega os itens do arry
    return item + 2; 
})

console.log(map)

const map1 = arr.map(function(item, index) { //pega os itens e as posições (index)
    return item + index;
})

console.log(map1)

const reduce = arr.reduce(function(total, next) { //pega o item pra somar com o proximo(next) e retorna o total
    return total + next;
})

console.log(reduce)

const filter = arr.filter(function(item) {
    return item % 2 === 0;
})

console.log(filter)

const find = arr.find(function(item) {
    return item === 4;
})

console.log(find)