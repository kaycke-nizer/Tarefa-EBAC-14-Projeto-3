let cardapio_entrada = document.getElementById("cardapio-entradas");
let cardapio_acompanhamentos = document.getElementById("cardapio-acompanhamentos");
let cardapio_executivo = document.getElementById("cardapio-executivo");
let cardapio_sobremesas = document.getElementById("cardapio-sobremesas");
let cardapio_bebidas = document.getElementById("cardapio-bebidas")


function mostrador_entradas() {
    cardapio_entrada.classList.add('menu-aberto');

    cardapio_acompanhamentos.classList.remove('menu-aberto');
    cardapio_executivo.classList.remove('menu-aberto');
    cardapio_sobremesas.classList.remove('menu-aberto');
    cardapio_bebidas.classList.remove('menu-aberto');
}

function mostrador_acompanhamentos() {
    cardapio_acompanhamentos.classList.add('menu-aberto');

    cardapio_entrada.classList.remove('menu-aberto');
    cardapio_executivo.classList.remove('menu-aberto');
    cardapio_sobremesas.classList.remove('menu-aberto');
    cardapio_bebidas.classList.remove('menu-aberto');
}

function mostrador_executivo() {
    cardapio_executivo.classList.add('menu-aberto');

    cardapio_entrada.classList.remove('menu-aberto');
    cardapio_acompanhamentos.classList.remove('menu-aberto');
    cardapio_sobremesas.classList.remove('menu-aberto');
    cardapio_bebidas.classList.remove('menu-aberto');
}

function mostrador_sobremesas() {
    cardapio_sobremesas.classList.add('menu-aberto');

    cardapio_entrada.classList.remove('menu-aberto');
    cardapio_acompanhamentos.classList.remove('menu-aberto');
    cardapio_executivo.classList.remove('menu-aberto');
    cardapio_bebidas.classList.remove('menu-aberto');
}

function mostrador_bebidas() {
    cardapio_bebidas.classList.add('menu-aberto');

    cardapio_entrada.classList.remove('menu-aberto');
    cardapio_acompanhamentos.classList.remove('menu-aberto');
    cardapio_executivo.classList.remove('menu-aberto');
    cardapio_sobremesas.classList.remove('menu-aberto');
}