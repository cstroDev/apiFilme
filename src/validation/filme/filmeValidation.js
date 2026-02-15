export function validarCamposObrigatoriosFilme(filme) {
    if(!filme.nome)
        throw new Error("Nome do filme obrigatório.");

    if(!filme.sinopse)
        throw new Error("Sinopse do filme obrigatório.");

    if(!filme.avaliacao)
        throw new Error("Avaliação do filme obrigatório.");

    if(isNaN(filme.avaliacao))
        throw new Error("Avaliação do filme inválida.");

    if(!filme.lancamento)
        throw new Error("Lancamento do filme obrigatório.");

    if(filme.disponivel == undefined)
        throw new Error("Disponível do filme obrigatório.");   
}

export function validarFilmeUnico(registros) {
    if (registros.length == 0)
        throw new Error('Filme não encontrado.');
        
}

export function validarFilmeIgual(registros) {
    if (registros.length > 0)
        throw new Error('Já existe um filme cadastrado com esse nome.');
}