export interface UsuarioProps {
    id?: number;
    nome: string;
    email: string;
    senha?: string;
    saldo?: number;
    nome_time?: string;
}

export interface TimeProps {
    id?: number;
    nome: string;
    escudo: string;
    abreviacao: string;
    cod_time: number;
}

export interface JogadorProps {
    id?: number;
    nome: string;
    foto?: string;
    cod_time: number;
    posicao: string;
    status: string;
    media?: number;
    cod_jogador: number;
    preco?: number;
}

export interface JogadorRodadaProps {
    id?: number;
    id_jogador: number;
    id_rodada: number;
    pontos: number;
    status: string;
}

export interface ConfrontoProps {
    id?: number;
    rodada: number;
    id_time_mandante: number;
    id_time_visitante: number;
    data: Date;
    placar: string;
}

export interface TimeUsuarioRodadaProps {
    id?: number;
    id_usuario: number;
    rodada: number;
    preco: number;
    pontos: number;
}

export interface RodadaProps {
    id?: number;
    numero: number;
    data_inicio: Date;
    data_fim: Date;
}