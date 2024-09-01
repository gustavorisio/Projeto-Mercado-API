import { Request, Response } from "express";
import { CreateCategoryService } from "../../service/category/CreateCategoryService";

class CreateCategoryController {
    async handle(request: Request, response: Response) {
        const { id, name, description } = request.body
        const category =
        {
            name: name,
            description: description,
        };
        const createcategoryService = new CreateCategoryService()
        const ret = await createcategoryService.execute(category)
        return response.json(ret);
    }
}
export { CreateCategoryController };