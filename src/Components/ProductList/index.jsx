import { ProductCard } from '../ProductCard'

export function ProductList( {allProducts, setCartProducts, cartProducts} ){
    return(
        <ul>
            {
                allProducts.map(product => {
                    return(
                        <ProductCard cartProducts={cartProducts} allProducts={allProducts} id={product.id} setCartProducts={setCartProducts} key={product.id} img={allProducts.img} name={product.name} category={product.category} price={product.price}></ProductCard>
                    )
                })
            }
        </ul>
    )
}