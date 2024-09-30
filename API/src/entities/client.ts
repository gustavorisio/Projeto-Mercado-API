import {
    Entity,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";
  
  import { v4 as uuid } from "uuid";
  //@Entity pode ser uma entidade no banco de dados
  @Entity("client")
  class Client {
      @PrimaryColumn()
      readonly id!: string;
      @Column()
      name!: string;
      @Column()
      description!: string;
      @Column()
      cpf!: string;
      @Column()
      address!: string;
      @Column()
      fone!: string;
      @CreateDateColumn()
      created_at!: Date;
      @UpdateDateColumn()
      update_at!: Date;
      constructor() {
          if (!this.id) {
          this.id = uuid();
      }
    }
  }
  export { Client };
  