const express = require("express");
const router = express.Router();
const apiControllers = require("../controller/post")
// const authMiddle = require("../middlewares/authMiddle")
const roleMiddle = require("../middlewares/roleMiddleware")
const {passport} = require("../middlewares/authMiddle")


router.get("/get/get-api", passport.authenticate('jwt', { session: false }), apiControllers.getList);

router.post("/new/blog/post", passport.authenticate('jwt', { session: false }), roleMiddle("content-creator"), apiControllers.postList)

router.get("/specific/:id", passport.authenticate('jwt', { session: false }), apiControllers.getPostById)

router.put("/edit-post/:id", passport.authenticate('jwt', { session: false }), apiControllers.editPost)

router.delete("/delete-post/:id", passport.authenticate('jwt', { session: false }), apiControllers.deletePost)

router.post("/post/comment/:postId", passport.authenticate('jwt', { session: false }), apiControllers.commentPost)


module.exports = router;

