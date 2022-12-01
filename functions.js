var selector = document.getElementById("selector")

var img = document.getElementById("img")
var pessoa = document.getElementById("pessoa")

var trabalhador = document.getElementById("trabalhador")
var bio = document.getElementById("bio")

selector.addEventListener("change", (event) => {
    event.preventDefault
    var select = selector.value

    fetch (`http://10.0.0.151:3333/Pessoas/${select}`)
    .then ((response) => response.json())
    .then ((data) => {

        img.setAttribute("src", data.foto)
        pessoa.innerText = data.nome
        bio.innerText = data.bio
        trabalhador.innerText = data.profissao

    })

})