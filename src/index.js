class gameClass{
    constructor(name, age, type , attack){
        this.name = name
        this.age = age
        this.type = type
        this.attack = attack
    }
    atacar(){
        console.log(`O ${this.type} atacou usando ${this.attack}`)
    }
}

let mage = new gameClass("Gandalf", "123", "Mago", "magia")
let warrior = new gameClass("Guts", "33", "Guerreiro", "espada")
let monk = new gameClass("Lee", "49", "Monge", "artes marciais")
let ninja = new gameClass("Nobunaga", "19", "Ninja", "shurikens")

mage.atacar()
warrior.atacar()
monk.atacar()
ninja.atacar()
