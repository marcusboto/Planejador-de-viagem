//object
const atividade = {
    nome: "Almoço",
    data: new Date("2024-07-13 1-:00"),
    finalizada: false
}

// arrrow function
const criarItemDeAtividade = (atividade) => {
    return `
    <div>
        <input type="checkbox">
        <span>Academia em grupo</span>
        <time> sábado, 18 de abril de 2024</time>
    <div>
    `
}


const section = document.querySelector('section')
section.innerHTML = criarItemDeAtividade(atividade)