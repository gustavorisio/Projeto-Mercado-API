import { IClientRequest } from "../../interface/ClientInterface";

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
        var product = {
            id: id, name: name, description: description, cpf: cpf, address: address, fone: fone
        }
        return { message: "Client Update com sucesso" };
    }
}
export { UpdateClientService };