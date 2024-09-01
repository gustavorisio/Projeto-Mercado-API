import { Request, Response } from "express";
import { DeleteCategoryService } from "../../service/category/DeleteCategoryService";
class DeleteCategoryController {
    async handle(request: Request, response: Response) {
        const id = request.params.id;
        const deleteCategoryService = new DeleteCategoryService()
        const ret = await deleteCategoryService.execute(id)
        return response.json(ret);
    }
}
export { DeleteCategoryController };