import React from "react";

const ProductCard = ({
    id,
    title,
    price,
    oldPrice,
    currency = "$",
    image,
    rating = 0,
    inStock,
    discount,
    badges = [],
    onAddToCart

}) => {
    const stars = '★'.repeat(rating) + '☆'.repeat(5 - rating);

    return(
        <div style={{border: '1px solid #ccc', 
            padding: '15px', with: '220px', borderRadius: '8px',
            backgroundColor: '#fff', }}>

        <div style={{float: 'right', fontSize: '12px', fontWeight: 'bold', color: 'red'}}>
                {badges.join(', ').toUpperCase()}
        </div>

        <img scr={image} alt={title} style={{width: '100%', height: '150px',
            objectFit: 'cover', boarderRadius: '4px'}} />
        
        <h3>{title}</h3>
        <div style={{ display: 'flex', alignItems: 'center' }}>{stars}</div>

        <div style={{margin: '10px 0'}}>
            {(oldPrice || discount) && (
                <span style={{textDecoration: 'line-through', color: 'gray', marginRight: '10px'}}>
                    {oldPrice || Math.round(price + (price * discount / 100))} {currency}
                </span>
            )}
            <span style={{ fontWight: 'bold', fontSize: '18px'}}>
                {price} {currency}
            </span>
        </div>
        
        <button
            disabled={!inStock}
            onClick={() => onAddToCart && onAddToCart(id)}
            style={{
                width: '100%',
                padding: '8px',
                backgroundColor: inStock ? '#007bff' : '#e0e0e0',
                color: inStock ? 'white' : 'gray',
                border: 'none',
                borderRadius: '4px',
                cursor: inStock ? 'pointer' : 'not-allowed'
            }}>
                {inStock ? 'В кошик' : 'Немає в наявності'}
            </button>

        </div>

    )
}

export default ProductCard