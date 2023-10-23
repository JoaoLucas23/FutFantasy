import ServicosTime from "../services/ServicoTime";
import { Router } from "express";

const router = Router();

router.post("/criarTime",
    async (req, res, next) => {
        try {
            const time = await ServicosTime.criaTime(req.body);
            res.status(201).json(time);
        } catch (error) {
            next(error);
        }
    }
);

export default router;
