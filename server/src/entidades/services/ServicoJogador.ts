import { Jogador } from "../models/Jogador";
import { JogadorProps } from "../models/Props";
import ServicoTime from "./ServicoTime";

class ServicoJogador {
    async criaJogador(body: JogadorProps){

        const time = await ServicoTime.buscaTimePorCod(body.cod_time);

        const id_time = time.getDataValue("id");

        const jogador = {
            nome: body.nome,
            foto: body.foto,
            id_time: id_time,
            posicao: body.posicao,
            preco: body.preco,
            cod_jogador: body.cod_jogador,
        };

        const novoJogador = await Jogador.create(jogador);
        return novoJogador;
    }
}

export default new ServicoJogador();