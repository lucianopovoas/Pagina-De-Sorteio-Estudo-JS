let nomes = ["Joao","Luciano","Pedro","Ricardo","Ryan"]

function sortear(){
    let pessoas = nomes.length
    let numero = Math.floor(Math.random() * pessoas)
    let exibir = document.getElementById("exibir")
    exibir.innerText = nomes[numero]
}

