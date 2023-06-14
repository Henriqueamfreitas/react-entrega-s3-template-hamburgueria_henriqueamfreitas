import { useState } from 'react'
import { useEffect } from 'react'
import { Header } from './Components/Header'
import { ProductList } from './Components/ProductList'
import { GlobalStyle } from './Styles/globalStyle'
import { api } from '../src/Services/api.js'

function App() {
  const [allProducts, setAllProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [inputSearch, setInputSearch] = useState('')

  const filteredProducts = allProducts.filter(
    product => product.name.toUpperCase().includes(inputSearch.toUpperCase()) || 
    product.category.toUpperCase().includes(inputSearch.toUpperCase())
  )
  
  useEffect(() => {
    setIsLoading(true)
    const getProducts = async () => {
      try{
        const response = await api.get('/products')
        setAllProducts(response.data)
      } catch (error){
          console.error(error)
      } finally{
        setIsLoading(false)
      }
    }
    getProducts()
  }, [])
  return (
    <>
    <GlobalStyle></GlobalStyle>
    <Header setInputSearch={setInputSearch}></Header>
    {
      !isLoading?
      <ProductList allProducts={filteredProducts}></ProductList>
      : <p>Carregando...</p>
    }
    </>
  )
}

export default App
