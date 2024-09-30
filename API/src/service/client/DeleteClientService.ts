import { getCustomRepository } from "typeorm";
import { ClientRepositories } from "../../repositories/clientRepositories";

class DeleteClientService {
    async execute(id: any) {
        if (!id) {
            throw new Error("Id incorrect");
        }
        const clientRepository = getCustomRepository(ClientRepositories);

        const clientAlreadyExists = await clientRepository.findOne({
            id,
        });

        if (!clientAlreadyExists) {
            throw new Error("Product not exists");
        }

        const ret = await clientRepository.delete(id);

        var messagmsgeDelete = {
            message: "Registro Excluido com sucesso"
        }
        return messagmsgeDelete;

    }
}
export { DeleteClientService };