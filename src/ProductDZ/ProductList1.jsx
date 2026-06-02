import React from 'react';
import ProductCard from './ProductCard'; // Импортируем карточку, которая лежит в этой же папке

const myProducts = [
  {
    id: 101,
    title: "Наушники Pro",
    price: 1500,
    oldPrice: 1900,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300",
    rating: 4,
    inStock: true,
    badges: ["new", "sale"]
  },
  {
    id: 102,
    title: "Смарт-часы",
    price: 3000,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300",
    rating: 5,
    inStock: true,
    badges: ["hit"]
  },
  {
    id: 103,
    title: "Клавиатура",
    price: 900,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300",
    rating: 3,
    inStock: false,
    badges: []
  }
];

const ProductList = () => {
  const handleAddToCart = (productId) => {
    alert(`Товар с ID ${productId} добавлен в корзину!`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Магазин товаров (Домашка)</h2>
      
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {myProducts.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            oldPrice={item.oldPrice}
            image={item.image}
            rating={item.rating}
            inStock={item.inStock}
            badges={item.badges}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;