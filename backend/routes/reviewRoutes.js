const express = require("express");

const router = express.Router();

const validate = require("../middlewares/validate");

const reviewSchema = require("../validations/reviewValidation");
const updateReviewSchema = require("../validations/updateReviewValidation");

const {getAllReviews, getReviewById, createReview, updateReview, deleteReview,} = require("../controllers/reviewController");

router.get("/", getAllReviews);

router.get("/:id", getReviewById);

router.post("/", validate(reviewSchema), createReview);

router.put("/:id", validate(updateReviewSchema), updateReview);

router.delete("/:id", deleteReview);

module.exports = router;
