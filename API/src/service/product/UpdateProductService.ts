import { getCustomRepository } from "typeorm";
import { IProductRequest } from "../../interface/IProductInterface";
import { ProductRepositories } from "../../repositories/productRepositories";

class UpdateProductService {
    async execute({ id, name, description, price, categoryId }: IProductRequest) {
        if (!name) {
            throw new Error("Name Incorrect")
        }
        if (!price) {
            throw new Error("Price Incorrect")
        }
        if (!categoryId) {
            throw new Error("CategoryId Incorrect")
        }
        const productRepository = getCustomRepository(ProductRepositories);

        const productAlreadyExists = await productRepository.findOne({
          id,
        });
        if (!productAlreadyExists) {
          throw new Error("User not exists");
        }
    
        productAlreadyExists.name=name
        productAlreadyExists.description=description
        productAlreadyExists.price=price
        productAlreadyExists.categoryId=categoryId
    
        const product = await productRepository.update(id,productAlreadyExists)
        return product
      }
}
export { UpdateProductService };