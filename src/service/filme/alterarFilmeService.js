import { alterarFilme } from "../../repository/filmeRepository.js";
import { validarCamposObrigatoriosFilme } from "../../validation/filme/filmeValidation.js";

export default async function alterarFilmeService(filme, id) {  
    validarCamposObrigatoriosFilme(filme);
    
    let linhasAfetadas = await alterarFilme(filme, id);
    if (linhasAfetadas == 0) 
        throw new Error('Nenhum filme alterado.');    
}