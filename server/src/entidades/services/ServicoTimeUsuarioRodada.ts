import { sequelize } from "../../database";
import { TimeUsuarioRodada } from "../models/TimeUsuarioRodada";
import ServicoJogador from "./ServicoJogador";
import ServicosUsuario from "./ServicosUsuario";

class ServicoTimeUsuarioRodada {

    async criaTimeUsuarioRodada(id_usuario: number, id_rodada: number) {
        const timeUsuarioRodada = {
            id_usuario: id_usuario,
            id_rodada: id_rodada,
            preco: 0,
            pontos: 0,
            jogadores: ''
        };
        const novoTimeUsuarioRodada = await TimeUsuarioRodada.create(timeUsuarioRodada);
        return novoTimeUsuarioRodada;
    }

    async buscaTimeUsuarioRodadaPorId(id: number) {
        const timeUsuarioRodada = await TimeUsuarioRodada.findByPk(id);
        if (timeUsuarioRodada) return timeUsuarioRodada;
        else throw new Error("TimeUsuarioRodada não encontrado");
    }

    async adicionaJogador(id_jogador: number, id_time_usuario_rodada: number) {

        const timeUsuarioRodada = await this.buscaTimeUsuarioRodadaPorId(id_time_usuario_rodada);
        let qtd_jogadores = timeUsuarioRodada.getDataValue("qtd_jogadores");
        
        if (qtd_jogadores === 12) throw new Error("Time completo");
        
        let jogadores = timeUsuarioRodada.getDataValue("jogadores");
        const preco_time = timeUsuarioRodada.getDataValue("preco");

        const usuario = await ServicosUsuario.retornaUsuarioPorId(timeUsuarioRodada.getDataValue("id_usuario"));
        const saldo = usuario.getDataValue("saldo");
        const jogador = await ServicoJogador.buscaJogadorPorId(id_jogador);
        const preco_jogador = jogador.getDataValue("preco");

        if(qtd_jogadores===11) jogadores +=  jogadores +=  jogador.getDataValue("id");
        else jogadores += jogador.getDataValue("id") + ",";

        qtd_jogadores += 1;

        if (preco_time + preco_jogador > saldo!) throw new Error("Saldo insuficiente");

        const novotime = await timeUsuarioRodada.update({ jogadores:  jogadores, preco: preco_time + preco_jogador, qtd_jogadores: qtd_jogadores });
        return novotime;
    }

    async removeJogador(id_jogador: number, id_time_usuario_rodada: number) {
        const timeUsuarioRodada = await this.buscaTimeUsuarioRodadaPorId(id_time_usuario_rodada);
        let qtd_jogadores = timeUsuarioRodada.getDataValue("qtd_jogadores");

        if (qtd_jogadores === 0) throw new Error("Time vazio");
        
        let jogadores = timeUsuarioRodada.getDataValue("jogadores");
        const preco_time = timeUsuarioRodada.getDataValue("preco");

        const jogador = await ServicoJogador.buscaJogadorPorId(id_jogador);
        const preco_jogador = jogador.getDataValue("preco");

        jogadores = jogadores.replace(jogador.getDataValue("id") + ",", "");
        qtd_jogadores -= 1;

        const novotime = await timeUsuarioRodada.update({ jogadores:  jogadores, preco: preco_time - preco_jogador, qtd_jogadores: qtd_jogadores });
        return novotime;
    }

    async retornaTimeUsuarioRodada(id_usuario: number, id_rodada: number) {
        const timeUsuarioRodada = await TimeUsuarioRodada.findOne({ where: { id_usuario: id_usuario, id_rodada: id_rodada } });
        if (timeUsuarioRodada) return timeUsuarioRodada;
        else throw new Error("TimeUsuarioRodada não encontrado");
    }

    async resetaTimeUsuarioRodada(id_usuario: number, id_rodada: number) {
        const timeUsuarioRodada = await this.retornaTimeUsuarioRodada(id_usuario, id_rodada);
        const novotime = await timeUsuarioRodada.update({ jogadores: '', preco: 0, qtd_jogadores: 0 });
        return novotime;
    }

}

export default new ServicoTimeUsuarioRodada();