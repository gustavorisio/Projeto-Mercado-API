import { Request, Response } from "express";
import { UpdateUserService } from "../../service/user/UpdateUserService";
class UpdateUserController {
    async handle(request: Request, response: Response) {
        const { name, email, admin, password } = request.body
        //:id para fazer a requisição do update.
        const id = request.params.id;
        const user =
        {
            id: id,
            name: name,
            email: email,
            admin: admin,
            password: password,
        };
        const updateuserService = new UpdateUserService()
        const ret = await updateuserService.execute(user)
        return response.json(ret);
    }
}
export { UpdateUserController };