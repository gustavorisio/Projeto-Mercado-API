import { ISaleRequest } from "../../interface/ISaleInterface";
import { SaleRepositories } from "../../repositories/saleRepositories";
import { getCustomRepository } from "typeorm";
class UpdateSaleService {
  async execute({ id, userId, productId, clientId, quantity }: ISaleRequest) {
    if (!userId) {
      throw new Error("User ID Incorrect");
    }
    if (!productId) {
      throw new Error("Product ID Incorrect");
    }
    if (!clientId) {
      throw new Error("Client ID Incorrect");
    }
    if (!quantity) {
      throw new Error("Quantity Incorrect");
    }
    const saleRepository = getCustomRepository(SaleRepositories);

    const saleAlreadyExists = await saleRepository.findOne({
      id,
    });
    if (!saleAlreadyExists) {
      throw new Error("Sale not exists");
    }

    saleAlreadyExists.userId = userId;
    saleAlreadyExists.productId = productId;
    saleAlreadyExists.clientId = clientId;
    saleAlreadyExists.quantity = quantity;

    const sale = await saleRepository.update(id, saleAlreadyExists);
    return sale;
  }
}
export { UpdateSaleService };
