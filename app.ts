import {MileniumFalcon, XWing} from './starfighters'
import {Nave,NaveCarga} from './base-ships'

import * as _ from 'lodash'
console.log(_.pad("typescript examples",40,"="))

let mensagem: string = "primeira mensagem"
console.log(mensagem)

let episode: number = 4

let droidFavorito
droidFavorito = 'R2-D2'
droidFavorito = 3
console.log("meu droid favorito é"+droidFavorito)

function multiplicaSenhor(numero:number):number{
    return (numero*numero)
}

console.log(multiplicaSenhor(2))

let shortestRun = function(parsecs:number):boolean{
    return parsecs < 12
}

console.log(shortestRun(2))

let ligar= function (nome:string):void{
    console.log("esta ouvindo "+ nome)
}
ligar('R2')

let ligar2:(nome:string) => void
ligar2 = nome2 => console.log("esta ouvindo " + nome2)
ligar2("R2")

let ligar3: () => void
ligar3 = () => console.log("esta ouvindo ")
ligar3()

function incrementa (base:number,incremento:number = 1):number{
    return base + incremento
}

console.log(incrementa(5,9))

let countJedis = (nome:string, jedis: number[]) => nome + jedis.reduce((a,b) => a+b,0)
console.log(countJedis('lucas',[1,2,3,4]))

let countJedis2 = (nome:string, ...jedis: number[]) => nome + jedis.reduce((a,b) => a+b,0)
console.log(countJedis2('lucas',1,2,3,4))

let ultrapassaFalcon: (velocidade:number) => boolean
ultrapassaFalcon = velocidade => velocidade > 10

let minhaVelocidade = 11
console.log(`A minha velocidade ${minhaVelocidade} é suficiente para ultrapassar a Falcon? ${ultrapassaFalcon(minhaVelocidade) ? 'Sim' : 'Não'}`)


let falcom = new MileniumFalcon()
falcom.pularSpaco()

let xwing = new XWing()

function boaNaveCarga(nave:NaveCarga){
    if (nave.numeroContainers > 2){
        console.log("boa pro servico")
    }
    else{
        console.log("contrate outra nave")
    }
}

function boaNave(nave:Nave, callback){
    callback(nave)
}

boaNave(xwing, function(nave:XWing):void{
    if (xwing.numeroArmas > 4){
        console.log("pronta para o combate")
    }
    else{
        console.log("contrate uma nave melhor")
    }
})

boaNave(falcom, boaNaveCarga)

