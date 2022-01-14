import Product from "./Product";

function ProductFeed({ products }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.length > 0 ? products.map(
        ({ id, title, price, description, category, image, rating }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
            rating={rating}
          />
        )
      ) : "No Products available"}
    </div>
  );
}

export default ProductFeed;
