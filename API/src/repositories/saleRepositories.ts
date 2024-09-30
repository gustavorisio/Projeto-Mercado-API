import { EntityRepository, Repository } from "typeorm";
import { Sale } from "../entities/sale";

@EntityRepository(Sale)
class SaleRepositories extends Repository<Sale> {}

export { SaleRepositories };