import { StyledLi } from './style'

export const CartModalCard = ( {img, name, cartProducts, id, allProducts, setCartProducts, price} ) => {
    const addProduct = () => {
        const selectedProduct = (cartProducts.filter(product => product.id === id))[0]
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

    const filteredCartProduct = cartProducts.filter(product => product.id === id)
    const formatedPrice = price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});


    return(
        <StyledLi>
            <div className='li__left'>
                <div className='li__left--divImg'>
                   <img src={img} alt='Imagem do produto em questão' />
                </div>
                <div className='li__left--descripiton'>
                    <h3>{name}</h3>
                    <p>{formatedPrice}</p>
                </div>
            </div>
            <div className='li__right'>
                <button onClick={removeProduct}>-</button>
                <span>{filteredCartProduct.length}</span>
                <button onClick={addProduct}>+</button>
            </div>
        </StyledLi>
    )   
}