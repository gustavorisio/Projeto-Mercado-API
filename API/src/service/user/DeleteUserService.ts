class DeleteUserService {
    async execute(id: any) {
        if (!id) {
            throw new Error("Id incorrect");
        }

        return { message: "Registro Excluido com sucesso" }
    }
}
export { DeleteUserService };