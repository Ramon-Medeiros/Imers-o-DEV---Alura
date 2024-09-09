function pesquisar(){
    let section = document.getElementById("Resultados-Pesquisa");
        
    let resultados = ""
    
    for (let dado of dados) { 
        resultados += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.nome}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">instagram</a>
            <p class="descricao-meta">${dado.posicao}</p>
            <p class="descricao-meta">${dado.periodo}</p>
            <p class="descricao-meta">${dado.titulos}</p>
        </div>
        `;
    
    }
    
    section.innerHTML = resultados  
}
 



