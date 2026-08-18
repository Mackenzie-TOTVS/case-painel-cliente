import test from "node:test";
import assert from "node:assert/strict";

import {
    calcularPatrimonioTotal,
    calcularPatrimonioPorInstituicao,
    calcularAlocacao,
    identificarOportunidadeCrossSell
} from "../src/domain.js";


const instituicoes = [
    {
        nome: "Itau",
        posicoes: [
            {
                produto: "CDB",
                categoria: "Renda Fixa",
                valor: 420000
            },
            {
                produto: "Acoes",
                categoria: "Renda Variavel",
                valor: 180000
            },
            {
                produto: "Fundo de Credito",
                categoria: "Fundos",
                valor: 200000
            }
        ]
    },

    {
        nome: "BTG Pactual",
        posicoes: [
            {
                produto: "Tesouro Direto",
                categoria: "Renda Fixa",
                valor: 350000
            },
            {
                produto: "Fundo Multimercado",
                categoria: "Fundos",
                valor: 400000
            },
            {
                produto: "Dolar",
                categoria: "Cambio",
                valor: 200000
            }
        ]
    },

    {
        nome: "XP Investimentos",
        posicoes: [
            {
                produto: "LCI",
                categoria: "Renda Fixa",
                valor: 300000
            },
            {
                produto: "Acoes Brasileiras",
                categoria: "Renda Variavel",
                valor: 200000
            },
            {
                produto: "Fundo Imobiliario",
                categoria: "Fundos",
                valor: 100000
            }
        ]
    }
];


test("calcula o patrimonio total corretamente", () => {

    const resultado =
        calcularPatrimonioTotal(instituicoes);

    assert.equal(
        resultado,
        2350000
    );

});


test("calcula o patrimonio de cada instituicao", () => {

    const resultado =
        calcularPatrimonioPorInstituicao(
            instituicoes
        );

    assert.deepEqual(
        resultado,
        [
            {
                nome: "Itau",
                valor: 800000
            },
            {
                nome: "BTG Pactual",
                valor: 950000
            },
            {
                nome: "XP Investimentos",
                valor: 600000
            }
        ]
    );

});


test("calcula os percentuais de alocacao", () => {

    const resultado =
        calcularAlocacao(instituicoes);


    const rendaFixa =
        resultado.find(
            (item) =>
                item.categoria === "Renda Fixa"
        );


    const rendaVariavel =
        resultado.find(
            (item) =>
                item.categoria === "Renda Variavel"
        );


    const fundos =
        resultado.find(
            (item) =>
                item.categoria === "Fundos"
        );


    const cambio =
        resultado.find(
            (item) =>
                item.categoria === "Cambio"
        );


    assert.equal(
        rendaFixa.percentual,
        45.53
    );


    assert.equal(
        rendaVariavel.percentual,
        16.17
    );


    assert.equal(
        fundos.percentual,
        29.79
    );


    assert.equal(
        cambio.percentual,
        8.51
    );

});


test("identifica oportunidade de diversificacao internacional", () => {

    const alocacao =
        calcularAlocacao(instituicoes);


    const oportunidade =
        identificarOportunidadeCrossSell(
            alocacao
        );


    assert.equal(
        oportunidade.titulo,
        "Diversificacao internacional"
    );


    assert.equal(
        oportunidade.produtoSugerido,
        "Produtos com exposicao internacional"
    );

});


test("rejeita valor patrimonial negativo", () => {

    const dadosInvalidos = [
        {
            nome: "Instituicao Teste",
            posicoes: [
                {
                    produto: "Produto Teste",
                    categoria: "Renda Fixa",
                    valor: -100
                }
            ]
        }
    ];


    assert.throws(
        () =>
            calcularPatrimonioTotal(
                dadosInvalidos
            ),
        /Posicao patrimonial invalida/
    );

});


test("rejeita lista vazia de instituicoes", () => {

    assert.throws(
        () =>
            calcularPatrimonioTotal([]),
        /lista de instituicoes/
    );

});