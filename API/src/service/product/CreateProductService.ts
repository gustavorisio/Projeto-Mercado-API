import { IProductRequest } from "../../interface/IProductInterface";
import { ProductRepositories } from "../../repositories/productRepositories";
import { getCustomRepository } from "typeorm";
class CreateProductService {
    async execute({ name, description, price, categoryId }: IProductRequest) {
        if (!name) {
            throw new Error("Name Incorrect")
        }
        if (!price) {
            throw new Error("Price Incorrect")
        }
        if (!categoryId) {
            throw new Error("CategoryId Incorrect")
        }
        const productRepository = getCustomRepository(ProductRepositories)
        const product = productRepository.create(
            {
                name,
                description,
                price,
                categoryId,
            });
            await productRepository.save(product);
            return product;
    }
}
export { CreateProductService };