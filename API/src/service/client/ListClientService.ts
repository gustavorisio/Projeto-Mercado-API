import { getCustomRepository } from "typeorm";
import { ClientRepositories } from "../../repositories/clientRepositories";

class ListClientService {
        async execute() {
            const clientRepositories = getCustomRepository(ClientRepositories); 
            const client = await clientRepositories
            .createQueryBuilder("product")
            .getMany();
            return client
        }
}
export { ListClientService };