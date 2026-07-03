const db = require("../config/db");

const getAllReviews = async (req, res) => {

    try {
    const [rows] = await db.query("SELECT * FROM Product_Review");

    res.status(200).json(rows);

} catch (error) {
    res.status(500).json({
        message: error.message
    });
}
};

const getReviewById = async (req, res) => {
    try {
        const { id } = req.params;

        const [rows] = await db.query(
            "SELECT * FROM Product_Review WHERE review_id = ?",
            [id]
        );

        if (rows.length === 0) {
            return res.status(404).json({
                message: "Review not found"
            });
        }

        res.status(200).json(rows[0]);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    getAllReviews,
    getReviewById
};