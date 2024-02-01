import { StyledLi } from './style';
import { Heading3 } from '../../Styles/typography';

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
            <div className='product__divImg'>
                <img src={img} alt='Imagem do produto em questão' />
            </div>
            <div className='product__divDescripiton'>
                <Heading3>{name}</Heading3>
                <p>{category}</p>
                <p>{formatedPrice}</p>
                <div className='product__divDescripiton--buttons'>
                    <button onClick={removeProduct}>-</button>
                    <span>{filteredCartProducts.length}</span>
                    <button onClick={addProduct}>+</button>
                </div>
            </div>
        </StyledLi>
    )   
}