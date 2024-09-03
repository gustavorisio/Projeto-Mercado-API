import { IProductRequest } from "../../interface/IProductInterface";

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
        var product = {
            id: id, name: name, description: description, price: price, categoryId: categoryId
        }
        return { message: "Product Update com sucesso" };
    }
}
export { UpdateProductService };