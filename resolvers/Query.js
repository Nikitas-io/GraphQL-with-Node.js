exports.Query = {
    products: (parent, args, {products}) => products,
    product: (parent, {id}, {products}) => {
        // Search for the product that matched the ID inside the products array.
        return products.find((product) => product.id === id);
    },
    categories: (parent, args, {categories}) => categories,
    category:(parent, {id}, {categories}) => {
        // Return the category that matches the ID.
        return category = categories.find((category) => category.id === id);
    }
};