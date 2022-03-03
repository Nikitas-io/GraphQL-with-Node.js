exports.Query = {
    products: (parent, {filter}, {products, reviews}) => {
        let filteredProducts = products;
        const {onSale, avgRating} = filter;

        // Check if there's a filter param passed to the resolver.
        if(filter) {
            // Check if the filter's onSale attribute is true.
            if(onSale) {
                // Get the products that are on sale.
                filteredProducts = filteredProducts.filter((product) => {
                    // Return ONLY the products that are on sale.
                    return product.onSale
                });
            }
        }

        // Check if the given average rating is within the allowed ratings.
        if([1,2,3,4,5].includes(avgRating)) {
            // Get the products that are equal to or above the average rating.
            filteredProducts = filteredProducts.filter((product) => {
                // Initialize the sum of the ratings for a specific product. 
                let sumRating = 0;
                let numberOfReviews = 0;
                // Loop through the reviews.
                reviews.forEach((review) => {
                    // Check if the review belongs to the product.
                    if(review.productId === product.id) {
                        // Sum up the reviews rating.
                        sumRating += review.rating;
                        // Increment the number of reviews.
                        numberOfReviews++;
                    }
                });

                // Calculate the average rating for the product.
                const avgProductRating = sumRating / numberOfReviews;
                // Return the products with a rating greater or equal to the average rating.
                return avgProductRating >= avgRating;
            });
        }
        // Return the filtered products.
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