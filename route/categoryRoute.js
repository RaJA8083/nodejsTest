import { Router } from 'express';
import * as CategoryController from '../controller/categoryController';
const categoryRouter = new Router();

categoryRouter.delete('/category/:id/:role', CategoryController.deleteCategory);

export default categoryRouter;
