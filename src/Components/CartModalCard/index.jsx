export const CartModalCard = ( {img, name, category, price} ) => {
    const formatedPrice = price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    return(
        <StyledLi>
            <img src={img} alt="Imagem do produto em questão" />
            <h3>{name}</h3>
            <p>{category}</p>
            <p>{formatedPrice}</p>
            <div>
                <button>-</button>
                <span>Quantidade de vezes que o produto foi adicionado</span>
                <button>+</button>
            </div>
        </StyledLi>
    )   
}