import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
interface IPayLoad {
    sub: string;
    email: string;
}
export function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    //Receber o token
    const authToken = request.headers.authorization;
    //Validar se token está preenchido
    if (!authToken) {
        return response.status(401).end();
    }
    const [, token] = authToken.split('')
    const { sub, email } = verify(
        token,  "UMC-EngSoftware-2024"
    ) as IPayLoad;
    return next();
} catch (err) {
    return response.status(401).end();
}
