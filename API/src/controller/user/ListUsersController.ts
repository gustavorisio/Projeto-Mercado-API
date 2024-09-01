import { Request, Response } from "express";
import { ListUsersService } from "../../service/user/ListUserService";
class ListUsersController {
    async handle(request: Request, response: Response) {
        const listUserService = new ListUsersService()
        const ret = await listUserService.execute()
        return response.json(ret);
    }
}
export { ListUsersController };