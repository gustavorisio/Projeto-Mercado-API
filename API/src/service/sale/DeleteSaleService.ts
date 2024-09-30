import { SaleRepositories } from "../../repositories/saleRepositories";
import { getCustomRepository } from "typeorm";
class DeleteSaleService {
    async execute(id: any) {
        if (!id) {
            throw new Error("Id incorrect");
        }
        const saleRepository = getCustomRepository(SaleRepositories);

        const saleAlreadyExists = await saleRepository.findOne({
            id,
        });

        if (!saleAlreadyExists) {
            throw new Error("User not exists");
        }

        const ret = await saleRepository.delete(id);

        var messagmsgeDelete = {
            message: "Registro Excluido com sucesso"
        }
        return messagmsgeDelete;

    }
}
export { DeleteSaleService };