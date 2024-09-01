import { IUserRequest } from "../../interface/UserInterface";

class UpdateUserService {
    async execute({ id, name, email, admin = false, password }: IUserRequest) {
        if (!email) {
            throw new Error("Email Incorrect")
        }
        if (!password) {
            throw new Error("Password Incorrect")
        }
        var user = {
            id: id, name: name, email: email, admin: admin, password: password
        }
        return { message: "Registro Update com sucesso" };
    }
}
export { UpdateUserService };