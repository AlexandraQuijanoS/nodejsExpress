import moment from "moment";
import jwt from 'jwt-simple';

export const createToken = (user) => {
  const payload = {
    usuarioId: user.id,
    createdAt: moment().unix(), // El numero de segundos que hay desde el 1 enero de 1970
    expiredAt: moment().add(30, "minutes").unix(),
  };
  return jwt.encode(payload, "frase secreta");
};
