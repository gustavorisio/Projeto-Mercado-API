import { EntityRepository, Repository } from "typeorm";
import { Client } from "../entities/client";

@EntityRepository(Client)
class ClientRepositories extends Repository<Client> {}

export { ClientRepositories };