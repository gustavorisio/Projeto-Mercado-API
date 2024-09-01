class ListCategoryService {
    async execute() {
        const category = [
            {
                name: "Gustavo",
                description: "student",
            },
            {
                name: "UMC",
                description: "academy",
            }
        ];
        return category
    }
}
export { ListCategoryService };