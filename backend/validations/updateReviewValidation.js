const { z } = require("zod");

const updateReviewSchema = z.object({

    username: z.string()
        .trim()
        .min(3, "Username must be at least 3 characters")
        .max(255, "Username cannot exceed 255 characters")
        .optional(),

    rating: z.coerce
        .number()
        .int()
        .min(1, "Rating must be between 1 and 5")
        .max(5, "Rating must be between 1 and 5")
        .optional(),

    review_text: z.string()
        .trim()
        .max(1000, "Review cannot exceed 1000 characters")
        .optional(),

    status: z.enum([
        "Visible",
        "Hidden",
        "Reported"
    ]).optional()

})
.refine(
    (data) => Object.keys(data).length > 0,
    {
        message: "At least one field is required for update."
    }
);

module.exports = updateReviewSchema;