let listaBotoes = document.querySelectorAll(".botao-principal")
let tela = document.querySelector("main")

listaBotoes.forEach(botao=>{
    botao.addEventListener("click",()=>{
        let botaoPegarId = botao.attributes.id.value

        if(botaoPegarId === "botao-carro") {
            tela.classList.remove("tela-ativada")
            tela.classList.add("imagem-carro")
            tela.classList.remove("imagem-familia")
            tela.classList.remove("imagem-pai-e-filha")
            tela.classList.remove("imagem-casa")
        }

        if(botaoPegarId === "botao-casa") {
            tela.classList.remove("tela-ativada")
            tela.classList.add("imagem-casa")
            tela.classList.remove("imagem-familia")
            tela.classList.remove("imagem-pai-e-filha")
            tela.classList.remove("imagem-carro")
        }

        
        
        if(botaoPegarId === "botao-familia") {
            tela.classList.remove("tela-ativada")
            tela.classList.add("imagem-familia")
            tela.classList.remove("imagem-casa")
            tela.classList.remove("carro")
            tela.classList.remove("imagem-pai-e-filha")
        }

        if(botaoPegarId === "botao-pai-e-filha") {
            tela.classList.remove("tela-ativada")
            tela.classList.add("imagem-pai-e-filha")
            tela.classList.remove("imagem-casa")
            tela.classList.remove("carro")
        }
        
        // let botaoClicadoId = `botao-${botaoPegarId}`
        // console.log(botaoClicadoId)
    })
})