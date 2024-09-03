import { IUserRequest } from "../../interface/IUserInterface";

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
        return { message: "User Update com sucesso" };
    }
}
export { UpdateUserService };