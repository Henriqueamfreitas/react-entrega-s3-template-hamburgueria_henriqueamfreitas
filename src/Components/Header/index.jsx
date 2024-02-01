import carrinho from '../../Assets/carrinho.png'
import logo from '../../Assets/Logo.png'
import { StyledHeader } from './style'
import { useState } from 'react'
import { CartModalList } from '../CartModalList'

export const Header = ( { setInputSearch, cartProducts, allProducts, setCartProducts } ) => {
    const handleSubmit = (event) => {
        event.preventDefault()
    }

    const [isOpen, setIsOpen] = useState(false)
    const numberOfProducts = cartProducts.length

    return(
        <StyledHeader>
            <div className='header__div'>
                <img src={logo} alt='Logo do Burguer Kenzie (Burguer em cInza escuro e Kenzie em vermelho)' />
                <div className='header__div--div'>
                    <button onClick={() => setIsOpen(true)}>
                        <img src={carrinho} alt='imagem de carrinho de compras' />
                    </button>
                    <span>{numberOfProducts}</span>
                </div>
            </div>
            {isOpen? <CartModalList setCartProducts={setCartProducts} cartProducts={cartProducts} setIsOpen={setIsOpen} allProducts={allProducts}></CartModalList>:null}
        </StyledHeader>
    )
}