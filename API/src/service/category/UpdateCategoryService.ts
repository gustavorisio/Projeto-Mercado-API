import { ICategoryRequest } from "../../interface/ICategoryInterface";

class UpdateCategoryService {
    async execute({ id, name, description }: ICategoryRequest) {
        if (!name) {
            throw new Error("Name Incorrect")
        }
        var category = {
            id: id, name: name, description: description
        }
        return { message: "Category Update com sucesso" };
    }
}
export { UpdateCategoryService };