function multiplicar(a: number, b:number) {
    return a * b;
}

console.log(multiplicar(20, 15));

function saudacao(nome:string) {
    const bv = "Olá " + nome;

    if(nome === "Gabriel" ){
        console.log(`${bv} seja bem vindo.`);
    } else {
        console.log(`Nome não corresponde ao cadastro`);
    }
}

saudacao("Paulo");