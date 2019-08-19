import {NaveCarga, NaveCombate, Nave} from './base-ships'


class XWing extends Nave implements NaveCombate{
    numeroArmas:number

    constructor(){
        super("AlternativeDriver")
        this.numeroArmas = 6
    }


}

class MileniumFalcon extends Nave implements NaveCarga{
    numeroContainers: number;

    constructor(){
        super("HiperDriver")
        this.numeroContainers = 4
    }

    pularSpaco(){
        if (Math.random() >= 0.5){
            super.pularSpaco()
        }else{console.log("Falhou")}
    }
}

interface NaveContrabando extends NaveCarga{

    numeroContainerOcultos:number
    
}

export {NaveContrabando, MileniumFalcon, XWing}