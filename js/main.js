const form = document.getElementById("novoItem")

form.addEventListener("submit",(evento) => {
    evento.preventDefault()

    criaElemento(evento.target.elements['nome']).value, evento target.elements['quantidade'].value
})

function criElemento(nome,quantidade) {
    console.log(nome)
    console.log(quantidade)

    // <li class="item"><strong>7</strong>camisas</li>
    const novoItem = document.createElemrnt('li')
    novoItem.classlist.add("item")

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = quantidade

    console.log(umeroItem)
}