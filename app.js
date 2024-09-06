function pesquisar()
{

 // Obtém a seção onde os resultados serão exibidos
let section = document.getElementById("resultados-pesquisa")
let campoPesquisa = document.getElementById("campo-pesquisa").value
campoPesquisa = campoPesquisa.toLowerCase()

 

 if  (campoPesquisa == "" )
 {
   section.innerHTML = "<p>Nenhum atleta encontrado!</p>"
   return
 }
  //console.log(campoPesquisa)
// Inicializa uma string para armazenar os resultados
let resultados = "";
let titulo = "";
let descricao= "";
let tags = "";

//Itera sobre os dados e cria elementos HTML para cada resultado
for (let dado of dados )
{
  titulo = dado.titulo.toLocaleLowerCase();
  descricao = dado.descricao.toLocaleLowerCase();
  tags = dado.tags.toLocaleLowerCase();

 // se o titulo contem o campo de pesquisa será exbido o resultado
  if   (titulo.includes(campoPesquisa)   ||  descricao.includes(campoPesquisa) || tags.includes(campoPesquisa) )
  {
    resultados  += `
<div class= "item-resultado">
<h2><a  href= "#" target="_blank">${dado.titulo}</a></h2>
<p>${dado.descricao}<a  href="${dado.link}" target="_blank"> Mais informações</a></p>
</div>
`

}
}

if (!resultados)
{
  resultados  = "Nada encontrado!" 
}

  // Atribui os resultados à seção
 section.innerHTML = resultados
}