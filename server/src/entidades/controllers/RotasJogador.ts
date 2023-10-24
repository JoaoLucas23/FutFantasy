import ServicoJogador from "../services/ServicoJogador";
import { Router } from "express";

const router = Router();

router.post("/criarJogador",
    async (req, res, next) => {
        try {
            const jogador = await ServicoJogador.criaJogador(req.body);
            res.status(201).json(jogador);
        } catch (error) {
            next(error);
        }
    }
);

export default router;