import { Request, Response } from "express";
import { ListSaleService } from "../../service/sale/ListSaleService";
class ListSaleController {
    async handle(request: Request, response: Response) {
        const listSaleService = new ListSaleService()
        const ret = await listSaleService.execute()
        return response.json(ret);
    }
}
export { ListSaleController };