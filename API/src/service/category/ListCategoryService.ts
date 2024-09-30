import { getCustomRepository } from "typeorm";
import { CategoryRepositories } from "../../repositories/categoryRepositories";

class ListCategoryService {
    async execute() {
        const categoryRepositories = getCustomRepository(CategoryRepositories); 
        const category = await categoryRepositories
        .createQueryBuilder("category")
        .getMany();
        return category
    }
}
export { ListCategoryService };