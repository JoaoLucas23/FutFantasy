import { TimeProps } from "../models/Props";
import { Time } from "../models/Time";

class ServicosTime {
    async criaTime(body: TimeProps) {
        const time = {
            nome: body.nome,
            abreviacao: body.abreviacao,
            escudo: body.escudo,
            cod_time: body.cod_time
        };
        const novoTime = await Time.create(time);
        return novoTime;
    }

    async buscaTimePorId(id: number) {
        const time = await Time.findByPk(id);
        if (time) return time;
        else throw new Error("Time não encontrado");
    }

    async buscaTimePorCod(cod: number) {
        const time = await Time.findOne({ where: { cod_time: cod } });
        if (time) return time;
        else throw new Error("Time não encontrado");
    }
}

export default new ServicosTime();