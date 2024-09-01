import { Request, Response } from "express";
import { DeleteClientService } from "../../service/client/DeleteClientService";
class DeleteClientController {
    async handle(request: Request, response: Response) {
        const id = request.params.id;
        const deleteClientService = new DeleteClientService()
        const ret = await deleteClientService.execute(id)
        return response.json(ret);
    }
}
export { DeleteClientController };