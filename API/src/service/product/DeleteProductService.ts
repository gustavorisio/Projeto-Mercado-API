import { getCustomRepository } from "typeorm";
import { ProductRepositories } from "../../repositories/productRepositories";

class DeleteProductService {
    async execute(id: any) {
        if (!id) {
            throw new Error("Id incorrect");
        }
        const productRepository = getCustomRepository(ProductRepositories);

        const productAlreadyExists = await productRepository.findOne({
            id,
        });

        if (!productAlreadyExists) {
            throw new Error("Product not exists");
        }

        const ret = await productRepository.delete(id);

        var messagmsgeDelete = {
            message: "Registro Excluido com sucesso"
        }
        return messagmsgeDelete;

    }
}
export { DeleteProductService };