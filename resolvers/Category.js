const { reviews } = require("../db");

exports.Category = {
    // Populate the products array.
    products: ({id: categoryId}, {filter}, {products, reviews}) => {
        // Filter through the products and return only the products of the category.
        const categoryProducts = products.filter((product) => product.categoryId === categoryId);

        let filteredCategoryProducts = categoryProducts;
        // Check if there's a filter param passed to the resolver.
        if(filter) {
            const {onSale, avgRating} = filter;
            // Check if the filter's onSale attribute is true.
            if(onSale) {
                // Get the products that are on sale.
                filteredCategoryProducts = filteredCategoryProducts.filter((product) => {
                    // Return only the products that are on sale.
                    return product.onSale
                });
            }

            // Check if the given average rating is within the allowed ratings.
            if([1,2,3,4,5].includes(avgRating)) {
                // Get the products that are equal to or above the average rating.
                filteredCategoryProducts = filteredCategoryProducts.filter((product) => {
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
        }
        console.log('The filtered products: ', filteredCategoryProducts)

        return filteredCategoryProducts;
    }
}