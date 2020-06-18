const minhaPromise = () => new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve('OK')
        }, 2000);

})

// minhaPromise().then( response => {
//     console.log(response)
// });


async function executaPromise(){
    console.log('Inicio execuções');
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(minhaPromise().then);
    console.log(minhaPromise());
    console.log('Final execuções');
}

executaPromise();


import Usuario, {idade} from './desafio'

console.log(idade);

Usuario.info();


//import * as func from './funcoes';

//console.log(`Retorno de soma ${func.soma(1, 2)} `);

//console.log(`Retorno da sub ${func.sub(2, 2)} `);


// const usuario = {
//     nome: "Alex",
//     idade: "34",
//     empresa: "Riachuelo"
// }

// //template literal
// console.log(`My name is ${usuario.nome}`);

// //Rest plugin
// const { nome, ...resto} = usuario;
// console.log(usuario);
// console.log(resto);

// var arr = [1,2,3,4,5];
// const [a, b, ...c ] = arr;

// console.log(a);
// console.log(b);
// console.log(c);

// //Spread plugin
// var lista1 = [1,2,3,4,5];
// var lista2 = [6,7,8,9,10]
// const spread = [...lista1, ...lista2];
// console.log(spread);

