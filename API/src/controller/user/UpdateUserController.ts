import { Request, Response } from "express";
import { UpdateUserService } from "../../service/user/UpdateUserService";
class UpdateUserController {
    async handle(request: Request, response: Response) {
        const { name, email, admin, password } = request.body
        //:id para fazer a requisição do update.
        const id = request.params.id;
        console.log(name);
        console.log(email);
        console.log(admin);
        console.log(password);
        const user =
        {
            id: id,
            name: name,
            email: email,
            admin: admin,
            password: password,
        };
        const createuserService = new UpdateUserService()
        const ret = await createuserService.execute(user)
        return response.json({ message: "Registro editado com sucesso" });
    }
}
export { UpdateUserController };