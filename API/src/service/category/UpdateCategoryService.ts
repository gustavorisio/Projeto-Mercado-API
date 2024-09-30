import { getCustomRepository } from "typeorm";
import { ICategoryRequest } from "../../interface/ICategoryInterface";
import { CategoryRepositories } from "../../repositories/categoryRepositories";

class UpdateCategoryService {
    async execute({ id, name, description }: ICategoryRequest) {
        if (!name) {
            throw new Error("Name Incorrect")
        }
        const categoryRepository = getCustomRepository(CategoryRepositories);

        const categoryAlreadyExists = await categoryRepository.findOne({
          id,
        });
        if (!categoryAlreadyExists) {
          throw new Error("Category not exists");
        }
    
        categoryAlreadyExists.name=name
        categoryAlreadyExists.description=description
    
        const category = await categoryRepository.update(id,categoryAlreadyExists)
        return category
      }
}
export { UpdateCategoryService };