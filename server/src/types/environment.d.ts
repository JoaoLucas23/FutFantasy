import { UsuarioProps } from "../entidades/models/Props";

export {};

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            SECRET_KEY:string
            JWT_EXPIRATION:string
            NODE_ENV:string
            APP_URL:string,
        }
    }
    namespace Express {
        interface Request {
            user?: UsuarioProps
        }
        interface User {
            id: number;
            email: string;
            nome: string;
            email: string;
        }
    }
}