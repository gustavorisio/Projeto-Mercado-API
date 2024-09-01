class DeleteClientService {
    async execute(id: any) {
        if (!id) {
            throw new Error("Id incorrect");
        }

        return { message: "Client Excluido com sucesso" }
    }
}
export { DeleteClientService };