import { ISaleRequest } from "../../interface/ISaleInterface";
import { SaleRepositories } from "../../repositories/saleRepositories";
import { getCustomRepository } from "typeorm";
class CreateSaleService {
    async execute({ id, userId, productId, clientId, quantity }: ISaleRequest) {
        if (!userId) {
            throw new Error("User id Incorrect")
        }
        if (!productId) {
            throw new Error("Product id Incorrect")
        }
        if (!clientId) {
            throw new Error("Client id Incorrect")
        }
            const saleRepository = getCustomRepository(SaleRepositories)
            const sale = saleRepository.create(
                {
                    id,
                    userId,
                    productId,
                    clientId,
                    quantity,
                });
                await saleRepository.save(sale);
                return sale;
        }
}
export { CreateSaleService };