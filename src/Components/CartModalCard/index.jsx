import { StyledLi } from "./style"

export const CartModalCard = ( {img, name, allProducts, id} ) => {
    const addProduct = () => {
        // const selectedProduct = (allProducts.filter(product => product.id === id))[0]
        // setCartProducts([...cartProducts,selectedProduct])
    }


    const removeProduct = () => {
        
    }

    const filteredCartProduct = allProducts.filter(product => product.id === id)


    return(
        <StyledLi>
            <img src={img} alt="Imagem do produto em questão" />
            <h3>{name}</h3>
            <div>
                <button onClick={removeProduct}>-</button>
                <span>{filteredCartProduct.length}</span>
                <button onClick={addProduct}>+</button>
            </div>
        </StyledLi>
    )   
}