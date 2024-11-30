
function ProductCard( {name, price, label, imageSrc} ) {
    return (
        <article>
            <span>{label}</span>
            <img src={imageSrc} alt="product photo"/>
            <p>{name}</p>
            <h4>€{price},-</h4>
        </article>
    )
}

export default ProductCard;