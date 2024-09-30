import { getCustomRepository } from "typeorm";
import { ICategoryRequest } from "../../interface/ICategoryInterface";
import { CategoryRepositories } from "../../repositories/categoryRepositories";

class CreateCategoryService {
    async execute({ id, name, description }: ICategoryRequest) {
        if (!name) {
            throw new Error("Name Incorrect")
        }
        const categoryRepository = getCustomRepository(CategoryRepositories)
        const category = categoryRepository.create(
            {
                id,
                name,
                description,
            });
            await categoryRepository.save(category);
            return category;
    }
}
export { CreateCategoryService };