import { EntityRepository, Repository } from "typeorm";
import { Category } from "../entities/category";

@EntityRepository(Category)
class CategoryRepositories extends Repository<Category> {}

export { CategoryRepositories };