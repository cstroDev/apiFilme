import { salvarFilme, consultarFilmePorNome } from '../../repository/filmeRepository.js';
import { validarCamposObrigatoriosFilme, validarFilmeIgual } from '../../validation/filme/filmeValidation.js';

export default async function salvarFilmeService(filme) {
    validarCamposObrigatoriosFilme(filme);

    let registros = await consultarFilmePorNome(filme.nome);
    validarFilmeIgual(registros);

    let id = await salvarFilme(filme);
    return id;
}