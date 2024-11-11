import { compare } from "bcryptjs";//comparar strings criptografadas
import {sign } from "jsonwebtoken";
import { IAuthenticateRequest } from "../../interface/IAuthenticateRequest";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/userRepositories";

class AuthenticateUserService {
    async execute ({email, password}: IAuthenticateRequest){

        const usersRepositories = getCustomRepository(UsersRepositories);
        const user = await usersRepositories.findOne({
          email,
        })
        if (!user){
            throw new Error ("Email incorrect");
        }
        //Gerar token

        const passwordMatch =  await compare (password, user?.password);
        if (!passwordMatch){
          throw new Error("Password incorrect");
        }
        //gerar token criptografado
        const token = sign ( 
          {
            email: email,
          },
          "UMC-EngSoftware-2024",//chave secreta
          {
            subject: ("others"),
            expiresIn: "1d",
          }
        );
        return token;
    }
}

export { AuthenticateUserService }