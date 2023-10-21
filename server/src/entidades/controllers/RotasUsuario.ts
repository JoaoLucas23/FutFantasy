import { Request, Router } from "express";
import ServicosUsuario from "../services/ServicosUsuario";

const router = Router();

router.post("/login");

router.post('/logout',
    async (req, res, next) => {
    try {
    console.log("logout")
        res.clearCookie('jwt');
        res.status(204).end();
    } catch (error) {
        next(error);
    }
    },
);

router.post(('/criarUsuario'),
    async (req, res, next) => {
        try {
            const usuario = await ServicosUsuario.criaUsuario(req.body);
            res.status(204).json(usuario);
        } catch (error) {
            next(error);
        }
    }
);

export default router;