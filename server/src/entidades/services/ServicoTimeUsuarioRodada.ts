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
        
        let jogadores = timeUsuarioRodada.getDataValue("jogadores");
        const preco_time = timeUsuarioRodada.getDataValue("preco");

        const usuario = await ServicosUsuario.retornaUsuarioPorId(timeUsuarioRodada.getDataValue("id_usuario"));
        const saldo = usuario.getDataValue("saldo");
        const jogador = await ServicoJogador.buscaJogadorPorId(id_jogador);
        const preco_jogador = jogador.getDataValue("preco");

        // const j = JSON.stringify({
        //     'id': jogador.getDataValue("id"),
        //     'posicao': jogador.getDataValue("posicao"),
        // });

        let zag = 0;
        let mei = 0;
        let ata = 0;

        // for(let jog of jogadores){
        //     if(jog.id == j[0]) throw new Error("Jogador já adicionado");
        //     switch(jog[1]){
        //         case "Goleiro":
        //             if(j[1] == "Goleiro") throw new Error("Já existe um goleiro no time");
        //             break;
        //         case "Zagueiro":
        //             if(j[1] == "Zagueiro") {
        //                 if(zag == 2) throw new Error("Já existem dois zagueiros no time");
        //                 else zag++;
        //             }
        //             break;
        //         case "Meia":
        //             if(j[1] == "Meia") {
        //                 if(mei == 3) throw new Error("Já existem dois meias no time");
        //                 else mei++;
        //             }
        //             break;
        //         case "Atacante":
        //             if(j[1] == "Atacante") {
        //                 if(ata == 3) throw new Error("Já existe um atacante no time");
        //                 else ata++;
        //             }
        //             break;
        //         case "Tecnico":
        //             if(j[1] == "Tecnico") throw new Error("Já existe um tecnico no time");
        //             break;
        //         }
        // }

        jogadores +=  jogador.getDataValue("id") + ",";

        if (preco_time + preco_jogador > saldo) throw new Error("Saldo insuficiente");
        const novotime = await timeUsuarioRodada.update({ jogadores:  jogadores, preco: preco_time + preco_jogador });
        return novotime;
    }
}

export default new ServicoTimeUsuarioRodada();