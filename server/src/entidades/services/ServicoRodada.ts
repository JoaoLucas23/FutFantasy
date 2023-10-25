import { Rodada } from "../models/Rodada";
import { RodadaProps } from "../models/Props";

class ServicoRodada {
    async criaRodada(body: RodadaProps){

        const rodada = {
            numero: body.numero,
            data_inicio: body.data_inicio,
            data_fim: body.data_fim,
        };
        const novaRodada = await Rodada.create(rodada);
        return novaRodada;
    }
}

export default new ServicoRodada();