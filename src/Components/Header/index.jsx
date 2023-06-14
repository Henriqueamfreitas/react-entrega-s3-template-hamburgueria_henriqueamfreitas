import carrinho from '../../Assets/carrinho.png'
import lupa from '../../Assets/lupa.png'



export const Header = () => {
    return(
        <header>
            <div>
                <span>Burguer <span>Kenzie</span></span>
                <div>
                    <button>
                        <img src={carrinho} alt="imagem de carrinho de compras" />
                    </button>
                    <span>Nº produtos no carrinho</span>
                </div>
            </div>
            <form>
                <input 
                    type="text"
                    placeholder=""
                    // onChange={} 
                />
                <button>
                    <img src={lupa} alt="imagem de lupa de pesquisar" />
                </button>
            </form>
        </header>
    )
}