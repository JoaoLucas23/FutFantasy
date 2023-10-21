import { Usuario } from "../models/Usuario";
import { UsuarioProps } from "../models/Props";
import bcrypt from "bcrypt";

class UsuarioService {
    async criaUsuario(body: UsuarioProps) {
        const usuario = {
            nome:  body.nome,
            email: body.email,
            senha: body.senha,
            saldo: 100,
            nome_time: body.nome_time
        };
        usuario.senha = usuario.senha || "";
        usuario.senha = await bcrypt.hash(usuario.senha, 10);
        const novoUsuario = await Usuario.create(usuario);
        return novoUsuario;
    }
}

export default new UsuarioService();