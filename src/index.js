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

// import '@babel/polyfill';


// const minhaPromise = () => new Promise((resolve, reject) => {
//     setTimeout(() => { resolve('OK')}, 2000);
// })

// async function executaPromise(){
//     // segunda linha so executa assim que a primeira acabar
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
// }

// executaPromise();



// const executaPromise = async () => {
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
// }

// executaPromise();



// import axios from 'axios'

// class Api {
//     static async getUserInfo(username){
//         try{
//             const response = await axios.get(`https://api.github.com/users/${username}`);
//             console.log(response)
//         } catch (err) {
//             console.warn('Erro na API');
//         }        
//     }
// }

// Api.getUserInfo('Igorth');



// async function searchGit(username){
//     const response = await axios.get(`https://api.github.com/users/${username}`);
//     console.log(response);
// }

// searchGit('Igorth')





//Transforme os seguintes trechos de código utilizando async/await:

// Funão delay aciona o .then após 1s

// const delay = () => new Promise(resolve => setTimeout(resolve, 1000));


// const executaDelay = async () => {
//     await delay(console.log('1s'));
//     await delay(console.log('2s'));
//     await delay(console.log('3s'));
// }

// //executaDelay();


// async function getUserGit(user){
//     try {
//         const response = await axios.get(`https://api.github.com/users/${user}`);
//         console.log(response);
        
//     } catch (error) {
//         console.warn('Erro na API');
//     }
// }

// // getUserGit('Igorth');
// // getUserGit('Igrf');


// class Github {
//     static async getRepositories(repo){
//         try {
//             const response = await axios.get(`https://api.github.com/repos/${repo}`);
//             console.log(response);
//         } catch (error) {
//             console.warn('Erro na Api')
//         }
//     }
// }

// // Github.getRepositories('Igorth/how-to-setup-webpack-react-babel-');
// // Github.getRepositories('rocketseat/dslkvmskv');


// const buscaUsuario = async usuario => {
//     try {
//         const response = await axios.get(`https://api.github.com/users/${usuario}`);
//         console.log(response);
//     } catch (error) {
//         console.warn('usuario nao existe')
//     }
// }

// buscaUsuario('Igorth');



class App {
    constructor(){
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');
        this.listEl = document.getElementById('repo-list');


        this.registerHandlers();
    }

    registerHandlers(){
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    addRepository(){
        event.preventDefault();

        this.repositories.push({
            nome: 'rocketseat.com.br',
            description: 'Descricao',
            avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?v=4',
            html_url: 'http://github.com/rocketseat/rocketseat.com.br'
        });

        this.render()
    }

    render(){
        this.listEl.innerHTML = '';

        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.nome));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);
            
        });
    }
}

new App();