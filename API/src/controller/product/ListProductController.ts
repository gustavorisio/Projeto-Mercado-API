import { Request, Response } from "express";
import { ListProductService } from "../../service/product/ListProductService";
class ListProductController {
    async handle(request: Request, response: Response) {
        const listProductService = new ListProductService()
        const ret = await listProductService.execute()
        return response.json(ret);
    }
}
export { ListProductController };