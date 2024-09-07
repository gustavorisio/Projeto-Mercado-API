import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
interface IPayload {
    sub: string;
    email: string;
}
export function ensureAutenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const authToken = request.headers.authorization;
 
    if(!authToken){
        return response.status(401).end();
    }
    const [, token] = authToken.split(" ");
    try{
        const {sub, email } = verify(
            token, "UMC-EngSoftware-2024"
        ) as IPayload;
        return next();
    } catch (err){
        return response.status(401).end();
    }
}