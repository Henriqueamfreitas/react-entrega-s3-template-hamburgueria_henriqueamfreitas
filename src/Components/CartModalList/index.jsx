import { useEffect, useRef } from "react"
import { CartModalCard } from "../CartModalCard"


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

    return(
        <section ref={modalRef}>
            <div>
                <h2>Carrinho de Compras</h2>
                <button ref={buttonRef} onClick={() => setIsOpen(false)}>Fechar</button>
            </div>
            <ul>
                {
                    novaArr.map(product => {
                        return(
                            <CartModalCard setCartProducts={setCartProducts} id={product.id} cartProducts={cartProducts} key={product.id} img={product.img} name={product.name}></CartModalCard>
                        )
                    })
                }
            </ul>
        </section>
    )
}