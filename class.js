class Reptile {
    constructor (firstAppearance) {
        this.firstAppearance = firstAppearance
    }

    get FirstTimeAppearance() { //declarando método de forma tradicional
        return this.firstAppearance
    }

    set newFirstAppearance (firstAppearance) {
        this.firstAppearance = firstAppearance
    }
}

const smaug = new Reptile('The Hobbit') //criando objeto e passando o valor da propriedade
//smaug.FirstAppearance();
smaug.FirstTimeAppearance;//executando o método que me dá um retorno

smaug.newFirstAppearance = 'New Appearance Value'

//console.log(smaug.firstAppearance)
console.log(smaug.FirstTimeAppearance)