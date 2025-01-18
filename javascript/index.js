var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var setaDireita = window.document.getElementById("seta_direita")
var setaEsquerda = window.document.getElementById("seta_esquerda")

function rolarparadireita(){
    leonardo.style = "display:none"
    bruna.style = "display:flex"
    samantha.style = "margin-right:200px"
   setaDireita.style = "display:none"
   setaEsquerda.style = "display:flex"
    
}

function rolarparaesquerda(){
    bruna.style = "display:none"
    leonardo.style = "display:flex"
    setaDireita.style = "display:flex"
    setaEsquerda.style = "display:none"

}