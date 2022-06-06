// Fila
class Queure{
    constructor(){
        this.dados = []
    }

    enqueue(item){
        this.dados.push(item);
    }

    dequeue(){
        const item = this.dados.shift();
        console.log("Removido: ",item);
        console.log("Lista:", this.dados);
    }
}

const fila = new Queure()

fila.enqueue('Gui');
fila.enqueue('Camyla');
fila.enqueue('Lucas');

fila.dequeue()