import { EntityRepository, Repository } from "typeorm";
import { Product } from "../entities/product";

@EntityRepository(Product)
class ProductRepositories extends Repository<Product> {}

export { ProductRepositories };