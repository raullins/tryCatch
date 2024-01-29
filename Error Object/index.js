// Síncrono = Executa linha por linha consecutivamente de maneira sequencial. Código espera uma operação concluir antes de começar outra.

console.log("Tarefa 1");
console.log("Tarefa 2");
console.log("Tarefa 3");


// Assíncrono = Permite que operações multiplas executem simultaneamente sem esperar. Não bloqueia o fluxo do programa.
//              (I/O operações, requisições network, buscar/recuperar/enviar dados)
//              É manipulado com: Callbacks, Promises, Async/Await.

// É uma função async
setTimeout(() => console.log("Tarefa 1"), 3000);

console.log("Tarefa 2");
console.log("Tarefa 3");
console.log("Tarefa 4");

// Com callback
function func1(callback){
    setTimeout(() =>    {console.log("Tarefa A");
                        callback()}, 3000);
}

function func2(){
    console.log("Tarefa B");
    console.log("Tarefa C");
    console.log("Tarefa D");
}

func1(func2);