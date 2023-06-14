import carrinho from '../../Assets/carrinho.png'
import lupa from '../../Assets/lupa.png'
import logo from '../../Assets/Logo.png'
import { StyledHeader } from './style'
import { useState } from 'react'
import { CartModalList } from '../CartModalList'

export const Header = ( { setInputSearch, allProducts } ) => {
    const handleSubmit = (event) => {
        event.preventDefault()
    }

    const [isOpen, setIsOpen] = useState(false)

    return(
        <StyledHeader>
            <div>
                <img src={logo} alt="" />
                <div>
                    <button onClick={() => setIsOpen(true)}>
                        <img src={carrinho} alt="imagem de carrinho de compras" />
                    </button>
                    <span>Nº produtos no carrinho</span>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder=""
                    onChange={(event) => setInputSearch(event.target.value)} 
                />
                <button type='submit'>
                    <img src={lupa} alt="imagem de lupa de pesquisar" />
                </button>
            </form>
            {isOpen? <CartModalList allProducts={allProducts} setIsOpen={setIsOpen}></CartModalList>:null}
        </StyledHeader>
    )
}