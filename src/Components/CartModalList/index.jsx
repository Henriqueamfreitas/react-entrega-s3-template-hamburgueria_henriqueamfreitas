import { useEffect, useRef } from "react"
import { CartModalCard } from "../CartModalCard"


export const CartModalList = ( {setIsOpen} ) => {
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

    return(
        <div ref={modalRef}>
            <h1>oi</h1>
            <button ref={buttonRef} onClick={() => setIsOpen(false)}>Fechar</button>
        </div>
        // <ul>
        //     {
        //         allProducts.map(product => {
        //             return(
        //                 <CartModalCard key={product.id} img={allProducts.img} name={product.name} category={product.category} price={product.price}></CartModalCard>
        //             )
        //         })
        //     }
        // </ul>
    )
}