const { Router } = require('express');
const UserController = require('../controllers/UserController.js');
const CategoryController = require('../controllers/CategoryController.js');
const BrandController = require('../controllers/BrandController.js');
const ProductController = require('../controllers/ProductController.js');
const { Auth } = require('../middleware/auth.js');

const router = Router(); 

router.post('/register', UserController.Register);
router.post('/login', UserController.Login);
 
router.get('/category', Auth.private, CategoryController.GetAll);   
router.get('/category/:id', Auth.private, CategoryController.GetOne);    
router.post('/category', Auth.private, CategoryController.Post);       
router.put('/category/:id', Auth.private, CategoryController.Edit);
router.delete('/category/:id', Auth.private, CategoryController.Delete);   

router.get('/brand', Auth.private, BrandController.GetAll); 
router.get('/brand/:id', Auth.private, BrandController.GetOne);       
router.post('/brand', Auth.private, BrandController.Post);       
router.put('/brand/:id', Auth.private, BrandController.Edit);
router.delete('/brand/:id', Auth.private, BrandController.Delete);    

router.get('/product', Auth.private,ProductController.GetAll);    
router.get('/product/:id', Auth.private,ProductController.GetOne);     
router.post('/product', Auth.private, ProductController.Post);       
router.put('/product/:id', Auth.private, ProductController.Edit);
router.delete('/product/:id', Auth.private, ProductController.Delete);    

module.exports = router;

