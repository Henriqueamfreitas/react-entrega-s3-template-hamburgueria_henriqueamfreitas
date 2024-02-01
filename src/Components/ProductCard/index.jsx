import { StyledLi } from './style';

export const ProductCard = ( {img, name, category, price, id, allProducts, setCartProducts, cartProducts} ) => {
    const formatedPrice = price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    const addProduct = () => {
        const selectedProduct = (allProducts.filter(product => product.id === id))[0]
        setCartProducts([...cartProducts,selectedProduct])
    }

    const removeProduct = () => {
        const newCartProducts = cartProducts.filter(product => product.id !== id)
        const excludeCartProducts = cartProducts.filter(product => product.id === id)
        let array = [...newCartProducts]
        excludeCartProducts.shift()
        excludeCartProducts.forEach(excludeCartProduct => {
            array = [...array, excludeCartProduct]
        })
        setCartProducts(array)

        if(cartProducts.length === 0){
            setCartProducts([])
        } 
    }

    const filteredCartProducts = cartProducts.filter(product => product.id === id)
    return(
        <StyledLi>
            <div>
                <img src={img} alt='Imagem do produto em questão' />
            </div>
            <div>
                <h3>{name}</h3>
                <p>{category}</p>
                <p>{formatedPrice}</p>
                <div>
                    <button onClick={removeProduct}>-</button>
                    <span>{filteredCartProducts.length}</span>
                    <button onClick={addProduct}>+</button>
                </div>
            </div>
        </StyledLi>
    )   
}