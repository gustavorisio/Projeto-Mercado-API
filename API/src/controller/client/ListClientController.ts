import { Request, Response } from "express";
import { ListClientService } from "../../service/client/ListClientService";
class ListClientController {
    async handle(request: Request, response: Response) {
        const listClientService = new ListClientService()
        const ret = await listClientService.execute()
        return response.json(ret);
    }
}
export { ListClientController };