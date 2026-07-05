const db = require("../config/db");

// get all reviews
const getAllReviews = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM Product_Review");

    res.status(200).json({
      success: true,
      count: rows.length,
      data: rows,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// get review by id
const getReviewById = async (req, res) => {
  try {
    const { id } = req.params;

    const [rows] = await db.query(
      "SELECT * FROM Product_Review WHERE review_id = ?",
      [id],
    );

    if (rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Review not found",
      });
    }

    res.status(200).json({
      success: true,
      data: rows,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// create review
const createReview = async (req, res) => {
  try {
    const { product_id, user_id, username, rating, review_text, status } =
      req.body;

    const query = `
        INSERT INTO Product_Review
        (product_id,user_id,username,rating,review_text,status)
        VALUES (?,?,?,?,?,?)
        `;

    const [result] = await db.query(query, [
      product_id,
      user_id,
      username,
      rating,
      review_text || null,
      status || "Visible",
    ]);

    res.status(201).json({
      success: true,
      message: "Review created successfully",
      reviewId: result.insertId,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//update review
const updateReview = async (req, res) => {
  try {
    const { id } = req.params;

    const fields = [];
    const values = [];

    Object.entries(req.body).forEach(([key, value]) => {
      fields.push(`${key} = ?`);
      values.push(value);
    });

    values.push(id);

    const query = `
            UPDATE Product_Review
            SET ${fields.join(", ")}
            WHERE review_id = ?
        `;

    const [result] = await db.query(query, values);

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Review not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Review updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//delete review
const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;

    const [result] = await db.query(
      "DELETE FROM Product_Review WHERE review_id = ?",
      [id],
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Review not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Review deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getAllReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
};
