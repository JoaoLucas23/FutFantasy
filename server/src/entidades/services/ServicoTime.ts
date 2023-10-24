import { TimeProps } from "../models/Props";
import { Time } from "../models/Time";

class ServicosTime {
    async criaTime(body: TimeProps) {
        const time = {
            nome: body.nome,
            abreviacao: body.abreviacao,
            escudo: body.escudo,
        };
        const novoTime = await Time.create(time);
        return novoTime;
    }
}

export default new ServicosTime();