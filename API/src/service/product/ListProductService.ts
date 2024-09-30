import { getCustomRepository } from "typeorm";
import { ProductRepositories } from "../../repositories/productRepositories";

class ListProductService {
    async execute() {
        const productRepositories = getCustomRepository(ProductRepositories); 
        const product = await productRepositories
        .createQueryBuilder("product")
        .getMany();
        return product
    }
}
export { ListProductService };