export const CartModalCard = ( {img, name} ) => {
    return(
        <li>
            <img src={img} alt="Imagem do produto em questão" />
            <h3>{name}</h3>
            <div>
                <button>-</button>
                <span>Quantidade de vezes que o produto foi adicionado</span>
                <button>+</button>
            </div>
        </li>
    )   
}