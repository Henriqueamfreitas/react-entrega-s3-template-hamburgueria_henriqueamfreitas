export const ProductCard = ( {img, name, category, price} ) => {
    var formatedPrice = price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    return(
        <li>
            <img src={img} alt="Imagem do produto em questão" />
            <h3>{name}</h3>
            <p>{category}</p>
            <p>{formatedPrice}</p>
            <button>Adicionar</button>

        </li>
    )   
}