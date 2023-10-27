import ServicoTimeUsuarioRodada from "../services/ServicoTimeUsuarioRodada";
import { Router } from "express";

const router = Router();

router.post("/criaTimeRodada", async (req, res) => {
    try {
        const { id_usuario, id_rodada } = req.body;
        const timeUsuarioRodada = await ServicoTimeUsuarioRodada.criaTimeUsuarioRodada(id_usuario, id_rodada);
        res.status(201).json(timeUsuarioRodada);
    } catch (error) {
        res.status(400).end(error);
    }
});

router.put("/adicionaJogador", async (req, res) => {
    try {
        const { id_jogador, id_time_usuario_rodada } = req.body;
        await ServicoTimeUsuarioRodada.adicionaJogador(id_jogador, id_time_usuario_rodada);
        res.status(200).end();
    } catch (error) {
        res.status(400).end(error);
    }
});

export default router;