const router = require("express").Router();

router.get('/usres',(req, res) => {
    res.json({
        message: "Ini respon dari router",
    });
});

module.exports = router;
