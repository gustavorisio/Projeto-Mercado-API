import { ISaleRequest } from "../../interface/ISaleInterface";

class UpdateSaleService {
    async execute({ id, userId, productId, clientId, quantity }: ISaleRequest) {
        if (!userId) {
            throw new Error("User ID Incorrect")
        }
        if (!productId) {
            throw new Error("Product ID Incorrect")
        }
        if (!clientId) {
            throw new Error("Client ID Incorrect")
        }
        if (!quantity) {
            throw new Error("Quantity Incorrect")
        }
        var sale = {
            id: id, userId: userId, productId: productId, clientId: clientId, quantity: quantity
        }
        return { message: "Sale Update com sucesso" };
    }
}
export { UpdateSaleService };