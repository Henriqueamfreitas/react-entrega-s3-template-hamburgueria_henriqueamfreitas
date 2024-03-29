import { useEffect, useRef } from 'react'
import { CartModalCard } from '../CartModalCard'
import { StyledP, ModalOverlay } from './style'


export const CartModalList = ( {setIsOpen, cartProducts, setCartProducts} ) => {
    const modalRef = useRef(null)
    useEffect(() => {
        const handleOutClick = (event) => {
            if(!modalRef.current?.contains(event.target)){
                setIsOpen(false)
            }
        }

        window.addEventListener('mousedown', handleOutClick)
        
        return () => {
            window.removeEventListener('mousedown', handleOutClick)
        }
    }, [])

    const buttonRef = useRef(null)
    useEffect(() => {
        const handleKeyDown = (event) => {
            if(event.key === 'Escape'){
                setIsOpen(false)
            }
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => (
            window.removeEventListener('keydown', handleKeyDown)
        )
    }, [])

    const novaArr = cartProducts.filter(function(este, i) {
        return cartProducts.indexOf(este) === i;
    });

    const totalPrice = cartProducts.reduce(
        (previousValue, currentProduct) => {
          return previousValue + currentProduct.price
        }, 0
      )
    const formatedTotalPrice = totalPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    
    const isTheCartEmpty = cartProducts.length === 0
  
    return(
        <ModalOverlay role='dialog'>
            <div className='modal' ref={modalRef}>
                <div className='modal__header'>
                    <h2>Carrinho de Compras</h2>
                    <button ref={buttonRef} onClick={() => setIsOpen(false)}>x</button>
                </div>
                <div className='modal__items'>
                    {
                        isTheCartEmpty?
                        <StyledP>O seu carrinho está vazio</StyledP>
                        :
                        <ul>
                            {
                                novaArr.map(product => {
                                 return(
                                        <CartModalCard price={product.price} setCartProducts={setCartProducts} id={product.id} cartProducts={cartProducts} key={product.id} img={product.img} name={product.name}></CartModalCard>
                                    )
                                })
                            }
                        </ul>
                    }
                </div>
                <div className='modal__total'>
                    <p>Total</p>
                    <p>{formatedTotalPrice}</p>
                </div>
                <div className='modal__button'>   
                    <button onClick={()=> {setCartProducts([])}}>Remover todos</button>
                </div>
            </div>
        </ModalOverlay>
    )
}