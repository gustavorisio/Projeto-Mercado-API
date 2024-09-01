import { IProductRequest } from "../../interface/ProductInterface";

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
        return { message: "Product incluido com sucesso" };
    }
}
export { CreateProductService };