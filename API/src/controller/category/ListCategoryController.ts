import { Request, Response } from "express";
import { ListCategoryService } from "../../service/category/ListCategoryService";
class ListCategoryController {
    async handle(request: Request, response: Response) {
        const listCategoryService = new ListCategoryService()
        const ret = await listCategoryService.execute()
        return response.json(ret);
    }
}
export { ListCategoryController };