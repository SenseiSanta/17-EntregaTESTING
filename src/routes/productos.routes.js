/* ============= INICIO DE ROUTEO ============= */
import express from 'express';
const routerProductos = express.Router();
import { getAllProducts, getProductByID, addProduct, updateProduct, deleteProduct } from '../controllers/productos.controllers.js';

/* ============= Routing y metodos ============= */
// Solicitando info de todos los productos
routerProductos.get('/', getAllProducts)

// Solicitando info de producto segun id
routerProductos.get('/:id', getProductByID) 

// Actualizacion de objeto en la DB
routerProductos.put('/:id', updateProduct)

// Insercion de objeto nuevo a la DB
routerProductos.post('/', addProduct)

// Borrado de objeto de la DB
routerProductos.delete('/:id', deleteProduct)

/* =========== Exportacion de modulo =========== */
export default routerProductos;