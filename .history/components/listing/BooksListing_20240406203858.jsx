"use client";
import ProductCard from "./ProductCard";
import styles from "../../styles/cards/ProductCard.module.css";
import { IoLocation } from "react-icons/io5";

const ProductsListing = ({ books, isLoading }) => {
  const books1 = books?.filter((_, index) => index % 2 === 0);
  const books2 = books?.filter((_, index) => index % 2 !== 0);

  return (
    <div >
      <div className="flex justify-between items-center px-4">
        <p className={styles.list__caption}>Just for You</p>

      </div>
      <div className={styles.booksListing}>
        <div className={styles.books__column}>
          {books1?.map((product) => (
            <ProductCard
              isLoading={isLoading}
              key={product?._id}
              product={product}
            />
          ))}
        </div>
        <div className={styles.books__column}>
          {books2?.map((product) => (
            <ProductCard
              isLoading={isLoading}
              key={product?._id}
              product={product}
            />
          ))}
        </div>
        <div className={styles.books__row}>
          {products?.map((product) => (
            <ProductCard
              key={product?._id}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsListing;
