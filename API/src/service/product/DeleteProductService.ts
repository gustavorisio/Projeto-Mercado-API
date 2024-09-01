class DeleteProductService {
    async execute(id: any) {
        if (!id) {
            throw new Error("Id incorrect");
        }

        return { message: "Product Excluido com sucesso" }
    }
}
export { DeleteProductService };