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
            status: body.status,
        };

        const novoJogador = await Jogador.create(jogador);
        return novoJogador;
    }

    async buscaJogadorPorCod(cod_jogador: number){
        const jogador = await Jogador.findOne({where: {cod_jogador: cod_jogador}});
        if(jogador) return jogador;
        else throw new Error("Jogador não encontrado");
    }
}

export default new ServicoJogador();