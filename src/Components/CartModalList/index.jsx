import { useEffect, useRef } from "react"
import { CartModalCard } from "../CartModalCard"


export const CartModalList = ( {setIsOpen} ) => {
    const modalRef = useRef(null)
    
    useEffect(() => {
        const handleOutClick = () => {
            console.log('clicou')
        }

        window.addEventListener('mousedown', handleOutClick)
        
        return () => {
            window.removeEventListener('mousedown', handleOutClick)

        }
    }, [])

    return(
        <div>
            <h1>oi</h1>
            <button onClick={() => setIsOpen(false)}>Fechar</button>
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