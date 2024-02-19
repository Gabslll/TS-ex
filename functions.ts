function multiplicar(a: number, b:number) {
    return a * b;
}

console.log(multiplicar(20, 15));

function saudacao(nome:string) {
    const bv = "Olá " + nome;

    if(nome === "Gabriel" ){
        return `${bv} seja bem vindo.`;
    } else {
        return `Nome não corresponde ao cadastro`;
    }
}

console.log(saudacao("Gabriel"));