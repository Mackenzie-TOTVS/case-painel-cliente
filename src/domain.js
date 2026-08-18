function validarInstituicoes(instituicoes) {
  if (!Array.isArray(instituicoes) || instituicoes.length === 0) {
    throw new Error("A lista de instituicoes e obrigatoria.");
  }

  for (const instituicao of instituicoes) {
    if (!instituicao.nome || !Array.isArray(instituicao.posicoes)) {
      throw new Error("Instituicao com dados invalidos.");
    }

    for (const posicao of instituicao.posicoes) {
      if (
        !posicao.categoria ||
        !Number.isFinite(posicao.valor) ||
        posicao.valor < 0
      ) {
        throw new Error("Posicao patrimonial invalida.");
      }
    }
  }
}

export function calcularPatrimonioTotal(instituicoes) {
  validarInstituicoes(instituicoes);

  let patrimonioTotal = 0;

  for (const instituicao of instituicoes) {
    for (const posicao of instituicao.posicoes) {
      patrimonioTotal += posicao.valor;
    }
  }

  return patrimonioTotal;
}

export function calcularPatrimonioPorInstituicao(instituicoes) {
  validarInstituicoes(instituicoes);

  const resultado = [];

  for (const instituicao of instituicoes) {
    let totalInstituicao = 0;

    for (const posicao of instituicao.posicoes) {
      totalInstituicao += posicao.valor;
    }

    resultado.push({
      nome: instituicao.nome,
      valor: totalInstituicao
    });
  }

  return resultado;
}

export function calcularAlocacao(instituicoes) {
  validarInstituicoes(instituicoes);

  const patrimonioTotal = calcularPatrimonioTotal(instituicoes);

  if (patrimonioTotal === 0) {
    throw new Error("O patrimonio total nao pode ser zero.");
  }

  const valoresPorCategoria = {};

  for (const instituicao of instituicoes) {
    for (const posicao of instituicao.posicoes) {
      const categoria = posicao.categoria;

      if (!valoresPorCategoria[categoria]) {
        valoresPorCategoria[categoria] = 0;
      }

      valoresPorCategoria[categoria] += posicao.valor;
    }
  }

  const alocacao = [];

  for (const categoria in valoresPorCategoria) {
    const valor = valoresPorCategoria[categoria];

    const percentual = (valor / patrimonioTotal) * 100;

    alocacao.push({
      categoria: categoria,
      valor: valor,
      percentual: Number(percentual.toFixed(2))
    });
  }

  return alocacao;
}

export function identificarOportunidadeCrossSell(alocacao) {
  if (!Array.isArray(alocacao) || alocacao.length === 0) {
    throw new Error("A alocacao e obrigatoria.");
  }

  const cambio = alocacao.find(
    (item) => item.categoria === "Cambio"
  );

  if (!cambio || cambio.percentual < 10) {
    return {
      titulo: "Diversificacao internacional",
      produtoSugerido: "Produtos com exposicao internacional",
      justificativa:
        "O cliente possui menos de 10% do patrimonio na categoria Cambio. Existe oportunidade de conversar sobre maior diversificacao internacional."
    };
  }

  return {
    titulo: "Revisao de diversificacao",
    produtoSugerido: "Produto complementar a carteira",
    justificativa:
      "A carteira possui exposicao internacional relevante. O Advisor pode avaliar outras categorias com menor participacao."
  };
}