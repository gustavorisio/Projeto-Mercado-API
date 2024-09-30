import { SaleRepositories } from "../../repositories/saleRepositories";
import { getCustomRepository } from "typeorm";
class ListSaleService {
    async execute() {
        const saleRepositories = getCustomRepository(SaleRepositories); 
        const sale = await saleRepositories
        .createQueryBuilder("sale")
        .getMany();
        return sale
    }
}
export { ListSaleService };