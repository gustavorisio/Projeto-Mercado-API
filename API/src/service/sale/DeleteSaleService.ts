class DeleteSaleService {
    async execute(id: any) {
        if (!id) {
            throw new Error("Id incorrect");
        }

        return { message: "Sale Excluido com sucesso" }
    }
}
export { DeleteSaleService };