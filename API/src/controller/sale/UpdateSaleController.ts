import { Request, Response } from "express";
import { UpdateSaleService } from "../../service/sale/UpdateSaleService";
class UpdateSaleController {
    async handle(request: Request, response: Response) {
        const { userId, productId, clientId, quantity, value } = request.body
        //:id para fazer a requisição do update.
        const id = request.params.id;
        const sale =
        {
            userId: userId,
            productId: productId,
            clientId: clientId,
            quantity: quantity,
            value: value
        };
        const updatesaleService = new UpdateSaleService()
        const ret = await updatesaleService.execute(sale)
        return response.json(ret);
    }
}
export { UpdateSaleController };