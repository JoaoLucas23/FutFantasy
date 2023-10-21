export interface UsarioProps {
    id?: number;
    nome: string;
    email: string;
    senha?: string;
    saldo?: number;
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