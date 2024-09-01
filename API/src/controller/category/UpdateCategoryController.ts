import { Request, Response } from "express";
import { UpdateCategoryService } from "../../service/category/UpdateCategoryService";
class UpdateCategoryController {
    async handle(request: Request, response: Response) {
        const { name, description } = request.body
        //:id para fazer a requisição do update.
        const id = request.params.id;
        const category =
        {
            id: id,
            name: name,
            description: description,
        };
        const updatecategoryService = new UpdateCategoryService()
        const ret = await updatecategoryService.execute(category)
        return response.json(ret);
    }
}
export { UpdateCategoryController };