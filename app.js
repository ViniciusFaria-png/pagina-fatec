'use strict'

const homeLink = document.getElementById('home')
const aboutLink = document.getElementById('about')
const coursesLink = document.getElementById('courses')
const contactLink = document.getElementById('contact')

function criarCardCurso(curso) {
    const card = document.createElement('div')
    card.className = 'card'

    card.onclick = () => alert(`Curso #${curso.id}\nTítulo: ${curso.titulo}\nDuração: ${curso.duracao}`)

    const id = document.createElement('span')
    id.className = 'card-id'
    id.textContent = `#${curso.id}`

    const titulo = document.createElement('h3')
    titulo.textContent = curso.titulo

    const duracao = document.createElement('span')
    duracao.className = 'card-duracao'
    duracao.textContent = `Duração: ${curso.duracao}`

    card.append(id, titulo, duracao)

    return card
}

function homePage(){
    const root = document.getElementById('root')
    root.className = 'home'
    const titulo = document.createElement('h1')
    titulo.classList.add('titulo')
    titulo.textContent = 'FATEC São Roque'
    root.replaceChildren(titulo)

}

function aboutPage(){
    const root = document.getElementById('root')
    root.className = 'about'
    const titulo = document.createElement('h1')
    titulo.classList.add('titulo')
    titulo.textContent = 'Sobre'

    const texto = document.createElement('p')
    texto.textContent = 'A FATEC São Roque é uma instituição de ensino superior'

    root.replaceChildren(titulo, texto)
}

function coursesPage(){
    const root = document.getElementById('root')
    root.className = 'courses'
    const titulo = document.createElement('h1')
    titulo.classList.add('titulo')
    titulo.textContent = 'Cursos'

    const container = document.createElement('div')
    container.className = 'cursos-container'
    const cards = cursos.map(criarCardCurso)
    container.replaceChildren(...cards)

    root.replaceChildren(titulo, container)
}

function contactPage(){
    const root = document.getElementById('root')
    root.className = 'contact'
    const titulo = document.createElement('h1')
    titulo.classList.add('titulo')
    titulo.textContent = 'Contatos'

    const form = document.createElement('form')
    const inputNome = document.createElement('input')
    inputNome.type = 'text'
    inputNome.placeholder = 'Digite seu nome'
    const inputEmail = document.createElement('input')
    inputEmail.type = 'email'
    inputEmail.placeholder = 'Digite seu e-mail'
    const inputMensagem = document.createElement('textarea')
    inputMensagem.placeholder = 'Digite sua mensagem'
    const botaoEnviar = document.createElement('button')
    botaoEnviar.type = 'submit'
    botaoEnviar.textContent = 'Enviar'

    form.replaceChildren(inputNome, inputEmail, inputMensagem, botaoEnviar)
    root.replaceChildren(titulo, form)
}

homePage()

homeLink.onclick = homePage
aboutLink.onclick = aboutPage
coursesLink.onclick = coursesPage
contactLink.onclick = contactPage
