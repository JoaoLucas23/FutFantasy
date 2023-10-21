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
}

export interface JogadorProps {
    id?: number;
    nome: string;
    foto?: string;
    timeId: number;
    posicao: string;
    status: string;
    media: number;
    preco: number;
}

export interface ConfrontoProps {
    id?: number;
    rodada: number;
    id_time_mandante: number;
    id_time_visitante: number;
    data: Date;
}

export interface TimeUsuarioRodadaProps {
    id?: number;
    id_usuario: number;
    rodada: number;
    preco: number;
    pontos: number;
}