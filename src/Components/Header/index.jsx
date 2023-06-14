import carrinho from '../../Assets/carrinho.png'
import lupa from '../../Assets/lupa.png'
import logo from '../../Assets/Logo.png'
import { StyledHeader } from './style'
import { useState } from 'react'

export const Header = ( { setInputSearch } ) => {
    // console.log('Header')
    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log(inputSearch)
    }

    return(
        <StyledHeader>
            <div>
                <img src={logo} alt="" />
                <div>
                    <button>
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
        </StyledHeader>
    )
}