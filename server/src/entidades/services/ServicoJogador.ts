import { Jogador } from "../models/Jogador";
import { JogadorProps } from "../models/Props";

class ServicoJogador {
    async criaJogador(body: JogadorProps){
        const jogador = {
            nome: body.nome,
            foto: body.foto,
            id_time: body.timeId,
            posicao: body.posicao,
            cod_jogador: body.cod_jogador,
        };
        const novoJogador = await Jogador.create(jogador);
        return novoJogador;
    }
}

export default new ServicoJogador();