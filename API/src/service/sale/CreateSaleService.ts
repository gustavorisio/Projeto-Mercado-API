import { ISaleRequest } from "../../interface/SaleInterface";

class CreateSaleService {
    async execute({ userId, productId, clientId, quantity }: ISaleRequest) {
        if (!userId) {
            throw new Error("User id Incorrect")
        }
        if (!productId) {
            throw new Error("Product id Incorrect")
        }
        if (!clientId) {
            throw new Error("Client id Incorrect")
        }
        return { message: "Sale incluido com sucesso" };
    }
}
export { CreateSaleService };