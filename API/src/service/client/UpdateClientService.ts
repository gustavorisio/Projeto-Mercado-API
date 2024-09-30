import { getCustomRepository } from "typeorm";
import { IClientRequest } from "../../interface/IClientInterface";
import { ClientRepositories } from "../../repositories/clientRepositories";

class UpdateClientService {
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
        const clientRepository = getCustomRepository(ClientRepositories);

        const clientAlreadyExists = await clientRepository.findOne({
          id,
        });
        if (!clientAlreadyExists) {
          throw new Error("User not exists");
        }
    
        clientAlreadyExists.name=name
        clientAlreadyExists.description=description
        clientAlreadyExists.cpf=cpf
        clientAlreadyExists.address=address
        clientAlreadyExists.fone=fone
    
        const client = await clientRepository.update(id,clientAlreadyExists)
        return client
      }
}
export { UpdateClientService };