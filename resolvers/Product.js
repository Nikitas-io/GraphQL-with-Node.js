exports.Product = {
    // Populate the category.
    category: ({categoryId}, args, {categories}) => {
        const category = categories.filter((category) => category.id === categoryId);
        // Because the filter function returns an array, return the first and only
        // category that matched the product's categoryId.
        return category[0];
    },

    // Populate the reviews.
    reviews: ({id}, args, {reviews}) => {
        return reviews.filter((review) => review.productId === id);
    }
}