const router = require("express").Router();
const { findAllBooks,detailBook, tambahBuku, deleteBuku, updateBuku, } = require("../controllers/BookController");
const { findAllUser,detailUser, tambahUser, deleteUser, updateUser, } = require("../controllers/UserController");
// endpoint book
// endpoint book
router.get("/books", findAllBooks);
router.get("/findbook", detailBook);
router.post("/book", tambahBuku);
router.delete("/book", deleteBuku);
router.put("/book", updateBuku);
// endpoint user 
router.get("/user", findAllUser);
router.get("/user", detailUser);
router.post("/user", tambahUser);
router.delete("/user", deleteUser);
router.put("/user", updateUser);


module.exports = router;