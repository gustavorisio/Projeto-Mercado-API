import { UsersRepositories } from "../../repositories/userRepositories";
import { getCustomRepository } from "typeorm";

class ListUsersService {
    async execute() {
        const usersRepositories = getCustomRepository(UsersRepositories); 
        const users = await usersRepositories
        .createQueryBuilder("user")
        .getMany();
        return users
    }
}
export { ListUsersService };