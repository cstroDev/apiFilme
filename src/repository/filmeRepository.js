import con from './connection.js';

export async function salvarFilme(filme) {
    let comando = `
        INSERT INTO tb_filme (nm_filme, ds_sinopse, vl_avaliacao, dt_lancamento, bt_disponivel)
             VALUES          (?, ?, ?, ?, ?)
    `

    let resposta = await con.query(comando, [filme.nome, filme.sinopse, filme.avaliacao, filme.lancamento, filme.disponivel]);
    let info = resposta[0];

    let idFilme = info.insertId;
    return idFilme;
}

export async function consultarFilme(nome) {
    let comando = `
        select  id_filme        id, 		
                nm_filme        nome,		 		
                vl_avaliacao    avaliacao,		   
                dt_lancamento   lancamento,	
                bt_disponivel   disponivel
        from    tb_filme
        where   nm_filme like ?
    `

    let resposta = await con.query(comando, ['%' + nome + '%']);
    let registros = resposta[0];

    return registros;
}

export async function consultarFilmePorNome(nome) {
    let comando = `
        select  id_filme        id, 		
                nm_filme        nome,		 		
                vl_avaliacao    avaliacao,		   
                dt_lancamento   lancamento,	
                bt_disponivel   disponivel
        from    tb_filme
        where   nm_filme = ?
    `

    let resposta = await con.query(comando, [nome]);
    let registros = resposta[0];

    return registros;
}

export async function consultarFilmePorId(id) {
    let comando = `
        select  id_filme        id, 		
                nm_filme        nome,
                ds_sinopse      sinopse,		 		
                vl_avaliacao    avaliacao,		   
                dt_lancamento   lancamento,	
                bt_disponivel   disponivel,
                img_filme       img
        from    tb_filme
        where   id_filme = ?
    `

    let resposta = await con.query(comando, [id]);
    let registros = resposta[0];

    return registros;
}

export async function alterarFilme(filme, id) {
    let comando = `
        update tb_filme
           set nm_filme = ?,
               ds_sinopse = ?,
               vl_avaliacao = ?,
               dt_lancamento = ?,
               bt_disponivel = ?
        where  id_filme = ?; 
    `

    let resposta = await con.query(comando, [filme.nome, filme.sinopse, filme.avaliacao, filme.lancamento, filme.disponivel, id]);

    let info = resposta[0];
    let linhasAfetadas = info.affectedRows;

    return linhasAfetadas;
}

export async function deletarFilme(id) {
    let comando = `
        delete from tb_filme where id_filme = ?;
    `

    let resposta = await con.query(comando, [id]);
    let info = resposta[0];
    let linhasAfetadas = info.affectedRows;

    return linhasAfetadas;
}

export async function alterarCapaFilme(id, caminho) {
    let comando = `
        update tb_filme
           set img_filme = ?
         where id_filme = ?; 
    `

    let resposta = await con.query(comando, [caminho, id]);

    let info = resposta[0];

    let linhasAfetadas = info.affectedRows;
    return linhasAfetadas;
}