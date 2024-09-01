import { IUserRequest } from "../../interface/UserInterface";

class CreateUserService {
    async execute({ name, email, admin = false, password }: IUserRequest) {
        if (!email) {
            throw new Error("Email Incorrect")
        }
        if (!password) {
            throw new Error("Password Incorrect")
        }
        return { message: "Registro incluido com sucesso" };
    }
}
export { CreateUserService };