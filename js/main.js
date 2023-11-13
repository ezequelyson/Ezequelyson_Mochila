console.log(document.getElementById("novoItem"))

form.eddEventListener("submite,evento") => {
     evento.preventdefault()


    console.log(evento)
    console.log(evento.target.elements["nome"].value)
    console.log(evento.target.elements["quantidade"].value)
})