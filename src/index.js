//import { soma, sub} from './js/components/funcoes';
//import soma, { sub } from './js/components/soma'
//import * as funcoes from './js/components/funcoes'
//import soma from './js/components/soma'

//console.log(soma(1, 2));
//console.log(sub(4, 2));

//console.log(funcoes.sub(2,2));

//import { Usuario } from './js/components/functions';

//console.log(Usuario.info());


//import { soma } from './js/components/funcoes'
//console.log(soma(1, 2))

//import ClasseUsuario from './js/components/functions';
//console.log(ClasseUsuario.info());

//import { idade } from './js/components/functions';
//console.log(idade);

//import Usuario, { idade as IdadeUsuario} from './js/components/functions'

//console.log(Usuario.info());
//console.log(IdadeUsuario);

import '@babel/polyfill';


const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK')}, 2000);
})

// async function executaPromise(){
//     // segunda linha so executa assim que a primeira acabar
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
// }

// executaPromise();



const executaPromise = async () => {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}

executaPromise();