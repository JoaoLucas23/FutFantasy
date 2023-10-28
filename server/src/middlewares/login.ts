import * as jwt from 'jsonwebtoken';
import { Usuario } from '../entidades/models/Usuario';
import { NextFunction, Request, Response } from 'express';
import { UsuarioProps } from '../entidades/models/Props';

const SECRET = process.env.SECRET_KEY || '';

function signJWT(user: UsuarioProps, res: Response) {
 const body = {
    id: user.id,
    nome: user.nome,
    email: user.email,
    senha: user.senha,
  };
  const token = jwt.sign({user: body} , SECRET,
    { expiresIn: process.env.JWT_EXPIRATION });

  res.cookie('jwt', token, {
    httpOnly: false,
    secure: false,
  });
}

function cookieExtractor(req: Request) {
  let token = null;

  if (req && req.cookies) {
    token = req.cookies['jwt'];
  }

  return token;
}

export async function loginMiddleware(req: Request, res: Response, next: NextFunction) {
  try {
    const User = await Usuario.findOne({where: {email: req.body.email}});
    if (!User) {
      throw new Error('E-mail incorreto!');
    } else {
      const matchingPassword = req.body.senha == User.getDataValue("senha");
      if (!matchingPassword) {
        throw new Error('Senha incorreta!');
      }
    }

    const user = {
      id: User.getDataValue("id"),
      nome: User.getDataValue("nome"),
      email: User.getDataValue("email"),
      senha: User.getDataValue("senha"),
    }

    signJWT(user, res);
    res.json([{user: user}, {token: cookieExtractor(req)}]);
  } catch (error) {
    next(error);
  }
}

export const notLoggedIn = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = cookieExtractor(req);
    if (token) {
      jwt.verify(
        token,
        SECRET,
        (err: any) => {
          if (!(err instanceof jwt.TokenExpiredError)) {
            throw new Error('Você já está logado no sistema!');
          }
        },
      );
    }
    next();
  } catch (error) {
    next(error);
  }
};

export function jwtMiddleware(req: Request, res: Response, next: NextFunction) {
  try {
    const token = cookieExtractor(req);
    if (token) {
      const decoded = jwt.verify(token, SECRET) as { user: UsuarioProps };
      req.user = decoded.user;
    }

    if (!req.user) {
      throw new Error(
        'Você precisa estar logado para realizar essa ação!');
    }
    next();
  } catch (error) {
    next(error);
  }
}