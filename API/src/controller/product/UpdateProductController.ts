import { Request, Response } from "express";
import { UpdateProductService } from "../../service/product/UpdateProductService";
class UpdateProductController {
    async handle(request: Request, response: Response) {
        const { name, description, price, categoryId } = request.body
        //:id para fazer a requisição do update.
        const id = request.params.id;
        const product =
        {
            name: name,
            description: description,
            price: price,
            categoryId: categoryId,
        };
        const updateproductService = new UpdateProductService()
        const ret = await updateproductService.execute(product)
        return response.json(ret);
    }
}
export { UpdateProductController };