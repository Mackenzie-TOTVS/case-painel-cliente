import {
    calcularPatrimonioTotal,
    calcularPatrimonioPorInstituicao,
    calcularAlocacao,
    identificarOportunidadeCrossSell
} from "./domain.js";


function formatarMoeda(valor) {
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valor);
}


function formatarData(data) {
    const partes = data.split("-");

    if (partes.length !== 3) {
        return data;
    }

    const [ano, mes, dia] = partes;

    return `${dia}/${mes}/${ano}`;
}


function validarDadosBasicos(dados) {
    if (!dados || !dados.cliente) {
        throw new Error("Os dados do cliente nao foram encontrados.");
    }

    if (!dados.cliente.nome || !dados.cliente.segmento) {
        throw new Error("Os dados basicos do cliente estao incompletos.");
    }

    if (!Array.isArray(dados.instituicoes)) {
        throw new Error("As instituicoes nao foram encontradas.");
    }

    if (!Array.isArray(dados.interacoes)) {
        throw new Error("O historico de interacoes nao foi encontrado.");
    }
}


function renderizarCliente(cliente) {
    document.getElementById("cliente-nome").textContent =
        cliente.nome;

    document.getElementById("cliente-segmento").textContent =
        cliente.segmento;

    document.getElementById("cliente-email").textContent =
        cliente.email;

    document.getElementById("cliente-telefone").textContent =
        cliente.telefone;
}


function renderizarPatrimonioTotal(valor) {
    const elementoPatrimonio =
        document.getElementById("patrimonio-total");

    elementoPatrimonio.textContent =
        formatarMoeda(valor);
}


function renderizarInstituicoes(instituicoes) {
    const lista =
        document.getElementById("lista-instituicoes");

    lista.innerHTML = "";

    for (const instituicao of instituicoes) {

        const card = document.createElement("div");

        card.classList.add("instituicao-card");


        const nome = document.createElement("div");

        nome.classList.add("instituicao-nome");

        nome.textContent = instituicao.nome;


        const valor = document.createElement("div");

        valor.classList.add("instituicao-valor");

        valor.textContent =
            formatarMoeda(instituicao.valor);


        card.appendChild(nome);

        card.appendChild(valor);

        lista.appendChild(card);
    }
}


function renderizarAlocacao(alocacao) {
    const lista =
        document.getElementById("lista-alocacao");

    lista.innerHTML = "";

    for (const item of alocacao) {

        const container =
            document.createElement("div");

        container.classList.add("alocacao-item");


        const cabecalho =
            document.createElement("div");

        cabecalho.classList.add("alocacao-cabecalho");


        const categoria =
            document.createElement("span");

        categoria.textContent =
            item.categoria;


        const percentual =
            document.createElement("span");

        percentual.textContent =
            `${item.percentual.toFixed(2)}%`;


        cabecalho.appendChild(categoria);

        cabecalho.appendChild(percentual);


        const barra =
            document.createElement("div");

        barra.classList.add("barra");


        const preenchimento =
            document.createElement("div");

        preenchimento.classList.add(
            "barra-preenchimento"
        );

        preenchimento.style.width =
            `${item.percentual}%`;


        barra.appendChild(preenchimento);

        container.appendChild(cabecalho);

        container.appendChild(barra);

        lista.appendChild(container);
    }
}


function renderizarInteracoes(interacoes) {
    const lista =
        document.getElementById("lista-interacoes");

    lista.innerHTML = "";

    for (const interacao of interacoes) {

        const item =
            document.createElement("div");

        item.classList.add("interacao-item");


        const data =
            document.createElement("div");

        data.classList.add("interacao-data");

        data.textContent =
            formatarData(interacao.data);


        const canal =
            document.createElement("div");

        canal.classList.add("interacao-canal");

        canal.textContent =
            interacao.canal;


        const descricao =
            document.createElement("p");

        descricao.textContent =
            interacao.descricao;


        item.appendChild(data);

        item.appendChild(canal);

        item.appendChild(descricao);

        lista.appendChild(item);
    }
}


function renderizarOportunidade(oportunidade) {

    document.getElementById(
        "oportunidade-titulo"
    ).textContent =
        oportunidade.titulo;


    document.getElementById(
        "oportunidade-produto"
    ).textContent =
        oportunidade.produtoSugerido;


    document.getElementById(
        "oportunidade-justificativa"
    ).textContent =
        oportunidade.justificativa;
}


function mostrarErro(erro) {

    console.error(
        "Erro ao carregar painel:",
        erro
    );

    const mensagemErro =
        document.getElementById("mensagem-erro");

    const textoErro =
        document.getElementById("texto-erro");

    textoErro.textContent =
        erro.message;

    mensagemErro.hidden = false;
}


async function carregarPainel() {

    try {

        const resposta =
            await fetch("./data/client.json");


        if (!resposta.ok) {
            throw new Error(
                "Nao foi possivel carregar os dados do cliente."
            );
        }


        const dados =
            await resposta.json();


        validarDadosBasicos(dados);


        const patrimonioTotal =
            calcularPatrimonioTotal(
                dados.instituicoes
            );


        const patrimonioPorInstituicao =
            calcularPatrimonioPorInstituicao(
                dados.instituicoes
            );


        const alocacao =
            calcularAlocacao(
                dados.instituicoes
            );


        const oportunidade =
            identificarOportunidadeCrossSell(
                alocacao
            );


        renderizarCliente(
            dados.cliente
        );


        renderizarPatrimonioTotal(
            patrimonioTotal
        );


        renderizarInstituicoes(
            patrimonioPorInstituicao
        );


        renderizarAlocacao(
            alocacao
        );


        renderizarInteracoes(
            dados.interacoes
        );


        renderizarOportunidade(
            oportunidade
        );

    } catch (erro) {

        mostrarErro(erro);

    }
}


carregarPainel();