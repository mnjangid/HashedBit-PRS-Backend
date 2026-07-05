const { z } = require("zod");

const reviewSchema = z.object({

    product_id: z.coerce
        .number()
        .int()
        .positive("Product ID must be positive"),

    user_id: z.coerce
        .number()
        .int()
        .positive("User ID must be positive"),

    username: z.string()
        .trim()
        .min(3, "Username must be at least 3 characters")
        .max(255, "Username cannot exceed 255 characters"),

    rating: z.coerce
        .number()
        .int()
        .min(1, "Rating must be between 1 and 5")
        .max(5, "Rating must be between 1 and 5"),

    review_text: z.string()
        .trim()
        .max(1000, "Review cannot exceed 1000 characters")
        .optional(),

    status: z.enum([
        "Visible",
        "Hidden",
        "Reported"
    ]).default("Visible")

});

module.exports = reviewSchema;