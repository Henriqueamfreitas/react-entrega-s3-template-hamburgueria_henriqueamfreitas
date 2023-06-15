import { ProductCard } from '../ProductCard'
import { StyledProductUl } from './style'

export function ProductList( {allProducts, setCartProducts, cartProducts} ){
    return(
        <StyledProductUl>
            {
                allProducts.map(product => {
                    return(
                        <ProductCard cartProducts={cartProducts} allProducts={allProducts} id={product.id} setCartProducts={setCartProducts} key={product.id} img={product.img} name={product.name} category={product.category} price={product.price}></ProductCard>
                    )
                })
            }
        </StyledProductUl>
    )
}