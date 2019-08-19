class Nave {
    //propulsor: string 
    //constructor(propulsor:string){ 
    //    this.propulsor = propulsor 
    //} 
    constructor(public propulsor:string){ 
        this.propulsor = propulsor 
    } 
    pularSpaco(){ 
        console.log("entrando hiperspaco com "+ this.propulsor) 
    } 
    
}

interface NaveCarga{
    numeroContainers:number
}

interface NaveCombate{
    numeroArmas:number
}

export {Nave, NaveCombate, NaveCarga}