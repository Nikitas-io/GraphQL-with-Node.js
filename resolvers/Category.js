exports.Category = {
    // Populate the products array.
    products: ({categoryId}, args, {products}) => {
        // Filter through the products and return only the products of the category.
        return products.filter((product) => product.categoryId === categoryId);
    }
}