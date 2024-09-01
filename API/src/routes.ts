import { Router } from "express";
//USER
import { CreateUserController } from "./controller/user/CreateUserController";
import { ListUsersController } from "./controller/user/ListUsersController";
import { UpdateUserController } from "./controller/user/UpdateUserController";
import { DeleteUserController } from "./controller/user/DeleteUserController";
//CATEGORY
import { CreateCategoryController } from "./controller/category/CreateCategoryController";
import { ListCategoryController } from "./controller/category/ListCategoryController";
import { UpdateCategoryController } from "./controller/category/UpdateCategoryController";
import { DeleteCategoryController } from "./controller/category/DeleteCategoryController";
//PRODUCT
import { CreateProductController } from "./controller/product/CreateProductController";
import { ListProductController } from "./controller/product/ListProductController";
import { UpdateProductController } from "./controller/product/UpdateProductController";
import { DeleteProductController } from "./controller/product/DeleteProductController";

const router = Router();
//USER
const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();
//CATEGORY
const createCategoryController = new CreateCategoryController();
const listCategoryController = new ListCategoryController();
const updateCategoryController = new UpdateCategoryController();
const deleteCategoryController = new DeleteCategoryController();
//PRODUCT
const createProductController = new CreateProductController();
const listProductController = new ListProductController();
const updateProductController = new UpdateProductController();
const deleteProductController = new DeleteProductController();

//USER
router.post("/users", createUserController.handle);
router.get("/users", listUsersController.handle);
router.put("/users/:id", updateUserController.handle);
router.delete("/users/:id", deleteUserController.handle);
//CATEGORY
router.post("/category", createCategoryController.handle);
router.get("/category", listCategoryController.handle);
router.put("/category/:id", updateCategoryController.handle);
router.delete("/category/:id", deleteCategoryController.handle);
//PRODUCT
router.post("/product", createProductController.handle);
router.get("/product", listProductController.handle);
router.put("/product/:id", updateProductController.handle);
router.delete("/product/:id", deleteProductController.handle);

export { router };