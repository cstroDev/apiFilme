import salvarFilmeService from "../service/filme/salvarFIlmeService.js";
import consultarFilmeService from "../service/filme/consultarFilmesService.js";
import consultarFilmePorIdService from "../service/filme/consultarFilmePorIdService.js";
import alterarFilmeService from "../service/filme/alterarFilmeService.js";
import deletarFilmeService from "../service/filme/deletarFilmeService.js";
import alterarCapaFilmeService from "../service/filme/alterarCapaFilmeService.js";

import multer from "multer";

import { Router } from "express";
const endpoints = Router();

endpoints.post('/filme', async (req, resp) => {
    try {
        let filme = req.body;

        let id = await salvarFilmeService(filme);

        resp.send({
            id: id
        })
    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }

})

endpoints.get('/filme', async (req, resp) => {
    try {
        let nome = req.query.nome;
        let registros = await consultarFilmeService(nome);

        resp.send(registros);

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
})

endpoints.get('/filme/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        let filme = await consultarFilmePorIdService(id);

        resp.send(filme);

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
})

endpoints.put('/filme/:id', async (req, resp) => {
    try {
        let filme = req.body;
        let id = req.params.id;

        await alterarFilmeService(filme, id);

        resp.status(204).send()

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }

})

endpoints.delete('/filme/:id', async (req, resp) => {
    try {

        let id = req.params.id;

        await deletarFilmeService(id);

        resp.status(204).send();

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
})

let uploadCapa = multer({ dest: './storage/capa' })
endpoints.put('/filme/:id/imagem', uploadCapa.single('imagem'), async (req, resp) => {
    try {
        let id = req.params.id;
        let caminhoImagem = req.file.path;

        await alterarCapaFilmeService(id, caminhoImagem);
        
        resp.status(204).send();

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
})

export default endpoints;