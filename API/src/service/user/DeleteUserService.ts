import { UsersRepositories } from "../../repositories/userRepositories";
import { getCustomRepository } from "typeorm";
class DeleteUserService {
    async execute(id: any) {
        if (!id) {
            throw new Error("Id incorrect");
        }
        const usersRepository = getCustomRepository(UsersRepositories);

        const userAlreadyExists = await usersRepository.findOne({
            id,
        });

        if (!userAlreadyExists) {
            throw new Error("User not exists");
        }

        const ret = await usersRepository.delete(id);

        var messagmsDelete = {
            message: "Registro Excluido com sucesso"
        }
        return messagmsDelete;

    }
}
export { DeleteUserService };