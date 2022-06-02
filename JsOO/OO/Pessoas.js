class Pessoa{
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    getNome(){
        return this.nome;
    }
    setNome(nome){
        this.nome = nome;
    }

    getIdade(){
        return this.idade;
    }
    setIdade(idade){
        this.nome = idade;
    }

    #nada(){
        return 'Essa nomenclatura diz que esse metodo é privado a somente essa classe'
    }
}

class Controller{
    repository = new Repository;

    registerController(Pessoa){
        this.repository.registerRepository(Pessoa);
    }
    listarController(){
        this.repository.listarRepository()
    }
}

class Repository{
    pessoas = []

    registerRepository(Pessoa){
        this.pessoas.push(Pessoa);
    }

    listarRepository(){
       console.log(this.pessoas);
    }
}










p1 = new Pessoa('Guilherme', '23');
pc = new Controller;

p1.setNome('Guilherme Gonçalves')

pc.registerController(p1);
pc.listarController();

