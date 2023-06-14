import { ProductCard } from '../ProductCard'

export function ProductList( {allProducts} ){
    return(
        <ul>
            {
                allProducts.map(product => {
                    return(
                        <ProductCard key={product.id} img={allProducts.img} name={product.name} category={product.category} price={product.price}></ProductCard>
                    )
                })
            }
        </ul>
    )
}