import { getCustomRepository } from "typeorm";
import { IClientRequest } from "../../interface/IClientInterface";
import { ClientRepositories } from "../../repositories/clientRepositories";

class CreateClientService {
    async execute({ id, name, description, cpf, address, fone }: IClientRequest) {
        if (!name) {
            throw new Error("Name Incorrect")
        }
        if (!cpf) {
            throw new Error("CPF Incorrect")
        }
        if (!address) {
            throw new Error("Address Incorrect")
        }
        if (!fone) {
            throw new Error("Fone Incorrect")
        }
        const clientRepository = getCustomRepository(ClientRepositories)
        const client = clientRepository.create(
            {
                id,
                name,
                description,
                cpf,
                address,
                fone
            });
            await clientRepository.save(client);
            return client;
    }
}
export { CreateClientService };