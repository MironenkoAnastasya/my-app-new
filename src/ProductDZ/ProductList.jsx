import React, { useState } from "react";
import ProductCard from "./ProductCard";

const myProducts = [
    {
        id: 101,
        title: "Навушники Pro",
        price: 1500,
        oldPrice: 1900,
        image: "https://stereo-news.com/wp-content/uploads/2021/04/airpods-max-obzor-besprovodnye-naushniki-apple-2021-1170x720.jpg",
        rating: 4,
        inStock: true,
        badges: ["new", "sale"]
    },
    {
        id: 102,
        title: "Смарт-годинник",
        price: 3000,
        image: "https://content.rozetka.com.ua/goods/images/big/74604035.jpg",
        rating: 5,
        inStock: true,
        badges: ["hit"]
    },
    {
        id: 103,
        title: "Клавіатура",
        price: 900,
        image:  "https://frime.ua/image/cache/catalog/%D0%BA%D0%BB%D0%B0%D0%B2%D0%B8%D0%B0%D1%82%D1%83%D1%80%D1%8B/moonfox/FLK18200_04-1502x1336.jpg",
        rating: 3,
        inStock: false,
        badges: []
    }
]

const ProductList = () =>{

    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [onlySale, setOnlySale] = useState(false);
    const [sortBy, setSortBy] = useState("default");



    const handleAddToCart = (productId) => {
        alert(`Товар з ID ${productId} додано до кошику!`);
    }





    const filteredProducts = myProducts.filter((item) => {
        if (minPrice !== "" && item.price < Number(minPrice)) return false;
        if (maxPrice !== "" && item.price > Number(maxPrice)) return false;
        if (onlySale && !item.oldPrice) return false; 
        return true;
    });


    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortBy === "asc") return a.price - b.price;  
        if (sortBy === "desc") return b.price - a.price;
        return 0;
    });



    
    return(
        <div style={{padding: '20px'}}>
            <h2 style={{textAlign: 'center', marginBottom: '20px'}}>Магазин товарів</h2>



           
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginBottom: '20px', alignItems: 'center' }}>
                <div>
                    <label>Ціна від: </label>
                    <input type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} style={{ width: '60px' }} />
                    <label> до: </label>
                    <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} style={{ width: '60px' }} />
                </div>

                <label style={{ cursor: 'pointer' }}>
                    <input type="checkbox" checked={onlySale} onChange={(e) => setOnlySale(e.target.checked)} />
                    Тільки акції
                </label>

                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="default">Сортування за замовчуванням</option>
                    <option value="asc">Дешеві спочатку</option>
                    <option value="desc">Дорогі спочатку</option>
                </select>
            </div>



            <div style={{display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap'}}>
                {sortedProducts.map((item) => (
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
    )
}

export default ProductList