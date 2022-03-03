exports.Category = {
    // Populate the products array.
    products: ({id: categoryId}, {filter}, {products}) => {
        // Filter through the products and return only the products of the category.
        const categoryProducts = products.filter((product) => product.categoryId === categoryId);

        let filteredCategoryProducts = categoryProducts;
        // Check if there's a filter param passed to the resolver.
        if(filter) {
            // Check if the filter's onSale attribute is true.
            if(filter.onSale) {
                filteredCategoryProducts = filteredCategoryProducts.filter((product) => {
                    // Return only the products that are on sale.
                    return product.onSale
                });
            }
        }

        return filteredCategoryProducts;
    }
}