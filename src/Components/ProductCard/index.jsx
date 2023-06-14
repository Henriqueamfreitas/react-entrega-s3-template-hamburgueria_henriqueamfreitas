import { StyledLi } from "./style";

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
        // console.log(excludeCartProducts)
        excludeCartProducts.shift()
        // console.log(excludeCartProducts)
        excludeCartProducts.forEach(excludeCartProduct => {
            // console.log(excludeCartProduct)
            array = [...array, excludeCartProduct]
        })
        // console.log(array)
        setCartProducts(newCartProducts)
        setCartProducts(array)

        if(cartProducts.length === 0){
            setCartProducts([])
        } 
        // else{
        // if((excludeCartProducts.length !== 1) && (excludeCartProducts.length >0) && (array.length>0)){
        //     setCartProducts(array)
        // } }
    }

    return(
        <StyledLi>
            <img src={img} alt="Imagem do produto em questão" />
            <h3>{name}</h3>
            <p>{category}</p>
            <p>{formatedPrice}</p>
            <div>
                <button onClick={removeProduct}>-</button>
                <span>Quantidade de vezes que o produto foi adicionado</span>
                <button onClick={addProduct}>+</button>
            </div>
        </StyledLi>
    )   
}