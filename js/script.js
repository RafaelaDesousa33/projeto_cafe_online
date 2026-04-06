/*selecionando elementos*/
const btn_cafe = document.querySelector(".btn_categoria_cafe");
const btn_salgados = document.querySelector(".btn_categoria_salgados");
const btn_doces = document.querySelector(".btn_categoria_doces");
const container_cardapio_itens = document.querySelector("#container_cardapio_itens");
const btn_adicionar = document.querySelector(".btn-adicionar");
const listaPedidos = document.querySelector(".lista_pedidos");
const p_total = document.querySelector(".p_total");




//produtos
const produtos = [
    { nome: "Café Expresso", preco: 15.00, img: "imagens/cafe_expresso_imagem.jpg", categoria: "Café" },
    { nome: "Cappuccino", preco: 18.00, img: "imagens/cafe_cappuccino_imagem.jpg", categoria: "Café" },
    { nome: "Café Americano", preco: 16.00, img: "imagens/cafe_americano_imagem.jpg", categoria: "Café" },
    { nome: "Pão de Queijo", preco: 4.00, img: "imagens/pao_queijo_imagens.jpg", categoria: "Salgados" },
    { nome: "Coxinhas", preco: 20.00, img: "imagens/coxinhas_imagem.jpg", categoria: "Salgados" },
    { nome: "Salgadinhos", preco: 13.00, img: "imagens/salgadinhos_imagem.jpg", categoria: "Salgados" },
    { nome: "Bolo de Chocolate", preco: 7.00, img: "imagens/bolo_chocolate_imagem.jpg", categoria: "Doces" },
    { nome: "Brigadeiros", preco: 12.00, img: "imagens/brigadeiros_imagem.jpg", categoria: "Doces" },
    { nome: "CupCake", preco: 20.00, img: "imagens/cupcake_imagem.jpg", categoria: "Doces" },
];


//gerenciamento de produtos
class GerenciamentoProdutos {

    exibirPedido() {
        produtos.forEach((item) => {
            console.log(item)
        });
    };


    listagemProdutosCafe() {

        // limpa a tela
        container_cardapio_itens.innerHTML = "";


        produtos.forEach((item) => {

            /*criando elementos*/
            const divProdutos = document.createElement("div");

            if (item.categoria === "Café") {
                console.log(item);

                const template = `
                 <div class="box-cardapio">

                   <div class="box-cardapio-img">

                    <img src="${item.img}" alt="imagem pedido" width="70px" </img>

                   </div>

                   <div class="box-cardapio_text">

                    <p> ${item.nome}  ${item.preco.toFixed(2)}  <button class="btn-adicionar" data-nome="${item.nome}" data-preco="${item.preco}">Adicionar</button> <p>
                    

                   </div>
        
                  </div>

        
                `

                divProdutos.innerHTML += template;
                container_cardapio_itens.appendChild(divProdutos);
            }


        });
    };



    listagemProdutosSalgados() {
        // limpa a tela
        container_cardapio_itens.innerHTML = "";

        produtos.forEach((item) => {

            /*criando elementos*/
            const divProdutos = document.createElement("div");

            if (item.categoria === "Salgados") {
                console.log(item);

                const template = `
                 <div class="box-cardapio">

                   <div class="box-cardapio-img">

                    <img src="${item.img}" alt="imagem pedido" width="70px" </img>

                   </div>

                   <div class="box-cardapio_text">

                    <p> ${item.nome}  ${item.preco.toFixed(2)}  <button class="btn-adicionar" data-nome="${item.nome}" data-preco="${item.preco}">Adicionar</button> <p>
                    

                   </div>
        
                  </div>

        
                `

                divProdutos.innerHTML += template;
                container_cardapio_itens.appendChild(divProdutos);
            }
        })


    };




    listagemProdutosDoces() {

        // limpa a tela
        container_cardapio_itens.innerHTML = "";


        /*criando elementos*/
        const divProdutos = document.createElement("div");

        produtos.forEach((item) => {
            if (item.categoria === "Doces") {

                const template = `
                 <div class="box-cardapio">

                   <div class="box-cardapio-img">

                    <img src="${item.img}" alt="imagem pedido" width="70px" </img>

                   </div>

                   <div class="box-cardapio_text">

                    <p> ${item.nome}  ${item.preco.toFixed(2)}  <button class="btn-adicionar" data-nome="${item.nome}" data-preco="${item.preco}">Adicionar</button> <p>
                    

                   </div>
        
                  </div>

        
                `

                divProdutos.innerHTML += template;
                container_cardapio_itens.appendChild(divProdutos);
            }

        })
    };





};


const gerenciamentoProdutos = new GerenciamentoProdutos(produtos);

//eventos de botao
btn_cafe.addEventListener("click", () => {
    gerenciamentoProdutos.listagemProdutosCafe()
});

btn_salgados.addEventListener("click", () => {
    gerenciamentoProdutos.listagemProdutosSalgados();
});

btn_doces.addEventListener("click", () => {
    gerenciamentoProdutos.listagemProdutosDoces();
});



let total = 0;
container_cardapio_itens.addEventListener("click", (event) => {

    if (event.target.classList.contains("btn-adicionar")) {

        const nomeProduto = event.target.getAttribute("data-nome");
        const precoProduto = event.target.getAttribute("data-preco");
        let li_lista = document.createElement("li");

        li_lista.textContent = `${nomeProduto} - R$ ${Number(precoProduto).toFixed(2)}`;
        listaPedidos.appendChild(li_lista);

        total += Number(precoProduto);
        p_total.textContent = `Total : R$${total}`;


    }

});