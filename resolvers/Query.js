exports.Query = {
    products: (parent, {filter}, {products}) => {
        let filteredProducts = products;

        // Check if there's a filter param passed to the resolver.
        if(filter) {
            // Check if the filter's onSale attribute is true.
            if(filter.onSale) {
                filteredProducts = filteredProducts.filter((product) => {
                    // Return ONLY the products that are on sale.
                    return product.onSale
                });
            }
        }
        return filteredProducts;
    },
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