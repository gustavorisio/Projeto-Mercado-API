import { IUserRequest } from "../../interface/IUserInterface";
import { hash } from "bcryptjs";
import { UsersRepositories } from "../../repositories/userRepositories";
import { getCustomRepository } from "typeorm";
class CreateUserService {
    async execute({ name, email, admin = false, password }: IUserRequest) {
        if (!email) {
            throw new Error("Email Incorrect")
        }
        if (!password) {
            throw new Error("Password Incorrect")
        }
        const passwordHash = await hash(password, 8);
        const usersRepository = getCustomRepository(UsersRepositories)
        const user = usersRepository.create(
            {
                name,
                email,
                admin,
                password: passwordHash,
            });
            await usersRepository.save(user);
            return user;
    }
}
export { CreateUserService };