import {
    Entity,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";
  
  import { v4 as uuid } from "uuid";
  //@Entity pode ser uma entidade no banco de dados
  @Entity("product")
  class Product {
      @PrimaryColumn()
      readonly id!: string;
      @Column()
      name!: string;
      @Column()
      description!: string;
      @Column()
      price!: string;
      @Column()
      categoryId!: string;
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
  export { Product };
  