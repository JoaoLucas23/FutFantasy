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
        const id_jogador = req.body.id_jogador;
        const id_time_usuario_rodada = req.body.id_time_usuario_rodada;
        const time = await ServicoTimeUsuarioRodada.adicionaJogador(id_jogador, id_time_usuario_rodada);
        res.status(201).json(time);
    } catch (error: any) {
        res.status(400).end(error.message);
    }
});

export default router;