import jwt from 'jwt-simple';
import moment from 'moment'

export const checkToken = (req, res, next) => {
    if(!req.headers['user-token']){
        return res.json({error: "Se necesita incluir el user-token en la cabecera"})
    }
    const userToken = req.headers['user-token'];
    let payload = {};
    try{
        payload = jwt.decode(userToken, 'frase secreta');
    } catch (err){
        return res.json({error: 'El token es incorrecto'})
    }

    if(payload.expiredAt < moment().unix()){
        return res.json({error: 'El token ha expirado'});
    }

    req.usuarioId = payload.usuarioId;
    next();
}
