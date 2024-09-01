class DeleteCategoryService {
    async execute(id: any) {
        if (!id) {
            throw new Error("Id incorrect");
        }

        return { message: "Category Excluido com sucesso" }
    }
}
export { DeleteCategoryService };